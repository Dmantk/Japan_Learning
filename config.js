// ============================================================
// NIHONGO MASTER - FILE CẤU HÌNH
// Chỉnh sửa file này trước khi deploy
// ============================================================
const APP_CONFIG = {
  app_name: "Nihongo Master",
  app_subtitle: "Học Tiếng Nhật Hiệu Quả",
  app_version: "2.0.0",

  // ===== GITHUB SYNC =====
  github: {
    enabled: true,
    owner: "Dmantk",        // GitHub username VD: "your-username"
    repo: "Japan_Learning",         // Tên repo data VD: "nihongo-data"
    branch: "master",
    token: "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",        // Personal Access Token (repo scope)
    data_path: "data" // Thư mục chứa data trong repo
  },

  // ===== AUTH =====
  auth: {
    enabled: true,
    allow_register: true,
    admin_password: "admin123"
  },

  // ===== TÍNH NĂNG =====
  features: {
    show_hints_by_default: false,
    auto_speak_on_flip: true,
    quiz_time_limit: 30,
    writing_guide_default: false,
  },

  // ===== GIAO DIỆN =====
  ui: {
    default_theme: "light",
    primary_color: "#5c6bc0",
    language: "vi",
  },
};

/*
HƯỚNG DẪN CẤU HÌNH GITHUB SYNC:

1. Tạo GitHub repo để lưu data (có thể private):
   github.com → New repository → tên: nihongo-data

2. Tạo Personal Access Token:
   github.com/settings/tokens/new
   → Scopes: ✓ repo (full control)
   → Copy token (chỉ hiện 1 lần)

3. Điền vào config.js:
   github.enabled = true
   github.owner = "your-username"
   github.repo = "nihongo-data"
   github.token = "ghp_xxxx..."
   auth.enabled = true

4. Cấu trúc file trên GitHub data repo:
   data/
   ├── users.json          ← danh sách users
   └── users/
       ├── 001.json        ← data user 001
       └── 002.json        ← data user 002
*/
