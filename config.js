// ============================================================
// NIHONGO MASTER - FILE CẤU HÌNH
// Chỉnh sửa file này trước khi deploy
// ============================================================

const APP_CONFIG = {

  // ===== THÔNG TIN ỨNG DỤNG =====
  app_name: "Nihongo Master",
  app_subtitle: "Học Tiếng Nhật Hiệu Quả",
  app_version: "1.0.0",

  // ===== CẤP ĐỘ MẶC ĐỊNH =====
  default_level: "N5",   // N5 | N4 | N3 | N2 | N1

  // ===== TÍNH NĂNG =====
  features: {
    show_hints_by_default: false,   // false = tắt gợi ý mặc định
    auto_speak_on_flip: true,       // tự phát âm khi lật flashcard
    quiz_time_limit: 30,            // giây mỗi câu quiz (0 = không giới hạn)
    writing_guide_default: false,   // nét mờ hướng dẫn viết (mặc định tắt)
  },

  // ===== GIAO DIỆN =====
  ui: {
    default_theme: "light",         // light | dark
    primary_color: "#5c6bc0",       // màu chủ đạo
    language: "vi",                 // vi | en | ja
  },

  // ===== DỮ LIỆU NGOÀI (tùy chọn) =====
  // Nếu muốn load từ vựng/ngữ pháp/câu từ file JSON bên ngoài
  // thay vì dùng dữ liệu mặc định trong app
  external_data: {
    enabled: false,
    // Đường dẫn tương đối từ thư mục gốc của web
    vocab_json:   "",   // VD: "data/vocab_custom.json"
    grammar_json: "",   // VD: "data/grammar_custom.json"
    sentences_json: "", // VD: "data/sentences_custom.json"
  },

  // ===== LƯU TRỮ =====
  storage: {
    // Prefix cho localStorage keys (thay đổi nếu chạy nhiều app trên cùng domain)
    prefix: "nihongo_",
    // Tự động backup data ra file JSON khi có thay đổi lớn
    auto_export: false,
  },

  // ===== HÌNH ẢNH =====
  // Thư mục chứa hình ảnh ngữ pháp (relative path)
  // Khi nhập URL hình trong ngữ pháp, có thể dùng đường dẫn tương đối
  // VD: "images/grammar/n5_01.jpg" thay vì URL đầy đủ
  images_base_url: "",  // VD: "https://yourdomain.com/images/" hoặc "./images/"

};

// ===== HƯỚNG DẪN CẤU HÌNH =====
/*
  1. THAY ĐỔI TÊN APP:
     Sửa app_name và app_subtitle

  2. TẮT/BẬT TÍNH NĂNG:
     Sửa các giá trị trong features{}

  3. DÙNG DỮ LIỆU TỪ FILE JSON NGOÀI:
     - Đặt enabled: true
     - Tạo file JSON theo format:
       vocab_json: [{"id":1,"word":"あいさつ","type":"名詞","meaning":"lời chào","reading":"あいさつ","kanji":"挨拶"}]
       grammar_json: [{"id":1,"title":"〜は〜です","category":"Câu cơ bản","image":"","description":"..."}]
       sentences_json: [{"id":1,"jp":"私は学生です。","reading":"...","vn":"Tôi là học sinh.","note":"..."}]
     - Đặt đường dẫn vào vocab_json, grammar_json, sentences_json

  4. HÌNH ẢNH NGỮ PHÁP:
     - Đặt hình vào thư mục images/ trong project
     - Khi thêm ngữ pháp, nhập URL: "./images/ten_hinh.jpg"
     - Hoặc set images_base_url để dùng đường dẫn ngắn hơn

  5. DEPLOY GITHUB PAGES:
     - Push toàn bộ thư mục lên GitHub repo
     - Settings → Pages → Deploy from branch main / root
     - Truy cập: https://username.github.io/repo-name/
*/
