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
    // TOKEN OBFUSCATION:
    // Chia token thành 3 phần để khó đọc hơn
    // VD token: ghp_ABCDEFabcdef1234567890ABCDEF12
    // → t1: "ghp_ABCDEF"
    // → t2: "abcdef1234"
    // → t3: "567890ABCDEF12"
    t1: "github_pat_11A74U7BQ0C5ZfL5BTN2RX_Vi",           // Phần 1 của token
    t2: "UMEV6HnIABy4J8Nr4TqPScYbCguVY",           // Phần 2 của token
    t3: "paNFZ6FGAvUITANZBFGLfG5J67xj",           // Phần 3 của token
    data_path: "data" // Thư mục chứa data trong repo
  },

  // ===== AUTH =====
  auth: {
    enabled: true,
    allow_register: true,
    admin_password: "13082015"
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
