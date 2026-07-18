# 🌸 Nihongo Master — Học Tiếng Nhật

## Tính năng
- 📋 Bảng chữ Hiragana, Katakana (flashcard tích hợp)
- 漢 Kanji: 100 chữ cơ bản + 93 bộ thủ
- 🃏 Flashcard (lật thẻ, phát âm, xáo trộn)
- 📚 Từ vựng N1-N5 (chia theo bài, import/export Excel)
- 📖 Ngữ pháp N1-N5 (cấu trúc + giải thích + ví dụ)
- 💬 Học câu (chia theo chủ đề, flashcard, luyện tập)
- 🎮 Quiz (Hiragana/Katakana/Kanji/Từ vựng)
- ✍️ Luyện viết (chấm điểm pixel thực sự)
- 👂 Luyện nghe (Web Speech API)
- 🎤 Luyện đọc (Speech Recognition)
- ⚙️ Settings: Edit Mode, Reset, GitHub Sync
- 👤 Đăng nhập/Đăng ký (tùy chọn)

---

## 🚀 Cài đặt & Chạy

### Chạy local
```
1. Giải nén file ZIP
2. Mở index.html bằng Chrome hoặc Edge
```

### Deploy GitHub Pages
```
1. Push toàn bộ thư mục lên GitHub repo (public)
2. Settings → Pages → Deploy from branch main / root
3. Truy cập: https://username.github.io/repo-name/
```

---

## ☁️ Hướng dẫn cấu hình GitHub Sync

GitHub Sync cho phép **đồng bộ dữ liệu** (từ vựng, ngữ pháp, câu, tiến độ)
giữa nhiều thiết bị thông qua một GitHub repo riêng.

### Bước 1: Tạo GitHub repo để lưu data

1. Vào **github.com** → đăng nhập
2. Click **"New repository"**
3. Đặt tên: `nihongo-data` (hoặc tên bất kỳ)
4. Visibility: **Private** (khuyến nghị) hoặc Public
5. ✓ **Initialize with README**
6. Click **"Create repository"**

### Bước 2: Tạo Personal Access Token (PAT)

1. Vào: **github.com/settings/tokens/new**
   *(hoặc: Avatar → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token)*
2. **Note**: `Nihongo Master Sync`
3. **Expiration**: No expiration (hoặc tùy chọn)
4. **Scopes**: ✓ **repo** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy token ngay** — chỉ hiện 1 lần! (dạng: `ghp_xxxxxxxxxxxxxxxxxxxx`)

### Bước 3: Điền vào config.js

Mở file `config.js`, tìm phần `github` và điền:

```javascript
github: {
  enabled: true,                    // ← đổi thành true
  owner: "your-github-username",    // ← username GitHub của bạn
  repo: "nihongo-data",             // ← tên repo data vừa tạo
  branch: "main",
  token: "ghp_xxxxxxxxxxxxxxxxxxxx", // ← token vừa copy
  data_path: "data"
},
```

### Bước 4: Bật Auth (tùy chọn)

Nếu muốn nhiều người dùng, mỗi người có data riêng:

```javascript
auth: {
  enabled: true,       // ← đổi thành true
  allow_register: true,
  admin_password: "your-admin-password"
},
```

### Bước 5: Sử dụng GitHub Sync

Sau khi cấu hình xong:

1. Mở web → vào **⚙️ Settings**
2. Thấy mục **☁️ GitHub Sync**
3. Click **"☁️ Sync lên GitHub"** để lưu dữ liệu
4. Trên thiết bị khác: đăng nhập cùng account → data tự load từ GitHub

### Cấu trúc file trên GitHub data repo

```
nihongo-data/
└── data/
    ├── users.json          ← danh sách users (username, passwordHash)
    └── users/
        ├── 001.json        ← data user 001 (từ vựng, tiến độ...)
        ├── 002.json        ← data user 002
        └── ...
```

---

## 📥 Import dữ liệu bằng Excel

### Từ vựng (có cột Level & Bài)
| STT | Level | Bài | Tên bài | Từ vựng | Từ loại | Nghĩa | Kanji |
|-----|-------|-----|---------|---------|---------|-------|-------|
| 1 | N5 | 1 | Bài 1 - Chào hỏi | あいさつ | 名詞 | lời chào | 挨拶 |
| 2 | N4 | 2 | Bài 2 - Gia đình | かぞく | 名詞 | gia đình | 家族 |

→ Web tự động tạo bài và phân loại đúng level

### Ngữ pháp
| STT | Tiêu đề | Phân loại | Hình ảnh URL | Mô tả |
|-----|---------|-----------|--------------|-------|

### Câu
| STT | Câu tiếng Nhật | Phiên âm | Nghĩa tiếng Việt | Ghi chú |
|-----|----------------|----------|------------------|---------|

---

## ⚙️ Chỉnh sửa nội dung

1. Vào **⚙️ Settings** → bật **✏️ Chế độ chỉnh sửa**
2. Xuất hiện nút ➕ Thêm, ✏️ Sửa, 🗑 Xóa ở tất cả các mục
3. Tắt Edit Mode → ẩn hoàn toàn

## 📝 Từ loại viết tắt

| Ký tự | Nghĩa |
|-------|-------|
| 名詞 | Danh từ |
| 動詞 | Động từ |
| 形容詞 | Tính từ -i |
| 形容動詞 | Tính từ -na |
| 副詞 | Phó từ |
| 接続詞 | Liên từ |
| 表現 | Biểu hiện/Mẫu câu |
