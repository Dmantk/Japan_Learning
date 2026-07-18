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
    enabled: false,
    owner: "",        // GitHub username VD: "your-username"
    repo: "",         // Tên repo data VD: "nihongo-data"
    branch: "main",
    // TOKEN OBFUSCATION:
    // Chia token thành 3 phần để khó đọc hơn
    // VD token: ghp_ABCDEFabcdef1234567890ABCDEF12
    // → t1: "ghp_ABCDEF"
    // → t2: "abcdef1234"
    // → t3: "567890ABCDEF12"
    t1: "ghp_ykE9On3yE",           // Phần 1 của token
    t2: "RTX7BjsCw1kXF",           // Phần 2 của token
    t3: "ZbC4auGm3kzLJ9",           // Phần 3 của token
    data_path: "data" // Thư mục chứa data trong repo
  },

  // ===== AUTH =====
  auth: {
    enabled: false,
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

2. Tạo Personal Access Token (scope hẹp nhất):
   github.com/settings/tokens/new
   → Note: Nihongo Master
   → Expiration: No expiration
   → Scopes: ✓ repo → Contents (read and write)
   → Copy token VD: ghp_ABCDEFabcdef1234567890ABCDEF12

3. CHIA TOKEN THÀNH 3 PHẦN (obfuscation):
   Token: ghp_ABCDEFabcdef1234567890ABCDEF12
   → Chia tùy ý, VD:
     t1: "ghp_ABCDEF"
     t2: "abcdef1234"
     t3: "567890ABCDEF12"
   → Web sẽ ghép lại: t1+t2+t3 khi gọi API

4. Điền vào config.js:
   github: {
     enabled: true,
     owner: "your-username",
     repo: "nihongo-data",
     t1: "ghp_ABCDEF",
     t2: "abcdef1234",
     t3: "567890ABCDEF12",
   },
   auth: {
     enabled: true,
   }

5. Cấu trúc file trên GitHub data repo:
   data/
   ├── users.json          ← danh sách users
   └── users/
       ├── 001.json        ← data user 001
       └── 002.json        ← data user 002
*/
