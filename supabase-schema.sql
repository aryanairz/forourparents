-- Supabase Database Setup for For Our Parents
-- Run this SQL in your Supabase SQL Editor

-- Drop existing tables (safe to re-run)
DROP TABLE IF EXISTS quiz_attempts CASCADE;
DROP TABLE IF EXISTS mistakes CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  phone TEXT,
  pin TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_active TIMESTAMPTZ DEFAULT NOW()
);

-- Create mistakes table
CREATE TABLE mistakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  added_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

-- Create quiz_attempts table (for progress tracking)
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL, -- 'quiz' or 'practice'
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  score_percent INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_mistakes_user_id ON mistakes(user_id);
CREATE INDEX idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX idx_quiz_attempts_completed ON quiz_attempts(completed_at DESC);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE mistakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Policies: Users can only access their own data
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (true);

CREATE POLICY "Users can read own mistakes" ON mistakes
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own mistakes" ON mistakes
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can delete own mistakes" ON mistakes
  FOR DELETE USING (true);

CREATE POLICY "Users can read own quiz attempts" ON quiz_attempts
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own quiz attempts" ON quiz_attempts
  FOR INSERT WITH CHECK (true);

-- Done! Now create a .env.local file in the project root with your Supabase credentials.
