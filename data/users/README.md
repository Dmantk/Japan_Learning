# User Data Folder

Mỗi user có 1 folder riêng: data/users/{username}/
(username là tên đăng nhập, viết thường, chỉ gồm chữ, số, "_" và "-")

Cấu trúc:
data/users/
├── README.md
├── nguyenvana/
│   ├── profile.json      ← thông tin user (tên, username, passwordHash, ngày tạo...)
│   ├── status.json       ← tiến độ học (kanaStatus, score, streak...)
│   ├── vocab.json        ← từ vựng + bài học tùy chỉnh
│   ├── grammar.json      ← ngữ pháp tùy chỉnh
│   └── sentences.json    ← câu tùy chỉnh
└── another_user/
    └── ...

Lưu ý: passwordHash được lưu cả trong data/users.json (danh sách tài khoản)
và trong profile.json của từng user, vì đây là app nội bộ không yêu cầu
bảo mật cao. Không dùng chung mật khẩu với các tài khoản quan trọng khác!
