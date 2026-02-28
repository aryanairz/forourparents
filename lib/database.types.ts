export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string;
          pin: string;
          created_at: string;
          last_active: string;
        };
        Insert: {
          id?: string;
          name: string;
          pin: string;
          created_at?: string;
          last_active?: string;
        };
        Update: {
          id?: string;
          name?: string;
          pin?: string;
          created_at?: string;
          last_active?: string;
        };
      };
      mistakes: {
        Row: {
          id: string;
          user_id: string;
          question_id: string;
          added_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          question_id: string;
          added_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          question_id?: string;
          added_at?: string;
        };
      };
      quiz_attempts: {
        Row: {
          id: string;
          user_id: string;
          mode: string;
          total_questions: number;
          correct_answers: number;
          score_percent: number;
          completed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          mode: string;
          total_questions: number;
          correct_answers: number;
          score_percent: number;
          completed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          mode?: string;
          total_questions?: number;
          correct_answers?: number;
          score_percent?: number;
          completed_at?: string;
        };
      };
    };
  };
}
