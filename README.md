# 🌸 Nihongo Master — Học Tiếng Nhật

## Tính năng
- 📋 Bảng chữ Hiragana, Katakana, Kanji N5
- 🃏 Flashcard (lật thẻ, phát âm, đánh dấu)
- 📚 Từ vựng N1-N5 (import/export Excel)
- 📖 Ngữ pháp N1-N5 (thêm/sửa/xóa, hình ảnh)
- 💬 Học câu (flashcard, luyện tập)
- 🎮 Quiz (Hiragana/Katakana/Kanji/Từ vựng)
- ✍️ Luyện viết (chấm điểm pixel thực sự)
- 👂 Luyện nghe (Web Speech API)
- 🎤 Luyện đọc (Speech Recognition)
- ⚙️ Settings & Reset tiến độ

## Cài đặt & Deploy

### Chạy local
Mở file `index.html` bằng Chrome hoặc Edge.

### Deploy GitHub Pages
1. Push toàn bộ thư mục lên GitHub repo
2. Settings → Pages → Deploy from branch `main` / root
3. Truy cập: `https://username.github.io/repo-name/`

## Cấu hình
Chỉnh sửa file `config.js` trước khi deploy.

## Import dữ liệu
- **Từ vựng**: Học → chọn level → Import Excel (cột: STT, Từ vựng, Từ loại, Nghĩa, Kanji)
- **Ngữ pháp**: Học → Ngữ pháp → Import Excel (cột: STT, Tiêu đề, Phân loại, Hình ảnh URL, Mô tả)
- **Câu**: Học câu → Import Excel (cột: STT, Câu JP, Phiên âm, Nghĩa VN, Ghi chú)

## Lưu ý
- Dữ liệu lưu trong `localStorage` của trình duyệt
- Tính năng phát âm & luyện đọc cần Chrome/Edge
- Luyện đọc cần cấp quyền microphone
