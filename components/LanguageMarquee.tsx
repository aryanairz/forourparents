"use client";

const ITEMS = [
  { label: "English", emoji: "🇺🇸" },
  { label: "മലയാളം", emoji: "🇮🇳" },
  { label: "ગુજરાતી", emoji: "🇮🇳" },
  { label: "Tiếng Việt", emoji: "🇻🇳" },
  { label: "Español", emoji: "🇲🇽" },
  { label: "中文", emoji: "🇨🇳" },
  { label: "한국어", emoji: "🇰🇷" },
  { label: "Tagalog", emoji: "🇵🇭" },
  { label: "हिन्दी", emoji: "🇮🇳" },
  { label: "Português", emoji: "🇧🇷" },
  { label: "Français", emoji: "🇫🇷" },
  { label: "اردو", emoji: "🇵🇰" },
];

// Duplicate for seamless loop
const ALL = [...ITEMS, ...ITEMS];

export default function LanguageMarquee() {
  return (
    <div
      style={{
        background: "#C41E3A",
        overflow: "hidden",
        padding: "16px 0",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {ALL.map((item, i) => (
          <span key={i} className="marquee-item">
            <span style={{ marginRight: 8 }}>{item.emoji}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
