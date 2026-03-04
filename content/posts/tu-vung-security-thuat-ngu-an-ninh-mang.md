---
title: "Security & Cybersecurity — 14 Thuật Ngữ An Ninh Mạng Developer Phải Biết"
date: 2023-02-07
summary: "Học 14 thuật ngữ Security & Cybersecurity quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-security-thuat-ngu-an-ninh-mang"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về Security — từ encryption, JWT, OAuth đến XSS, SQL injection và penetration testing. Dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["cybersecurity", "backend", "security", "blockchain", "data"]
ShowToc: true
TocOpen: true
draft: false
---

Bảo mật không phải việc riêng của team security — mọi developer đều cần hiểu. Một lỗ hổng XSS hay SQL injection có thể khiến cả hệ thống bị hack. Hiểu thuật ngữ security bằng tiếng Anh giúp bạn viết code an toàn hơn và communicate rõ ràng hơn với team. Let's go! 🔒

---

### 🔹 Mã hóa & Token

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| encryption | /ɪnˈkrɪpʃən/ | mã hóa dữ liệu | We use AES-256 **encryption** to protect sensitive data at rest. |
| decryption | /diːˈkrɪpʃən/ | giải mã dữ liệu | The server performs **decryption** using the private key to read the message. |
| hash | /hæʃ/ | băm — chuyển dữ liệu thành chuỗi cố định, không thể đảo ngược | We store password **hashes** using bcrypt instead of plain text. |
| token | /ˈtoʊkən/ | mã xác thực tạm thời | The API returns an access **token** after successful login. |

### 🔹 Xác thực & Ủy quyền

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| OAuth | /oʊ.ɔːθ/ | giao thức ủy quyền mở | Users can sign in with Google using **OAuth** 2.0 without sharing their password. |
| JWT | /dʒɒt/ | JSON Web Token — token mang thông tin xác thực | The **JWT** contains the user ID and expiration time, signed with a secret key. |
| certificate | /sərˈtɪfɪkət/ | chứng chỉ số — xác minh danh tính server | The SSL **certificate** expired, causing browsers to show a security warning. |

### 🔹 Lỗ hổng phổ biến

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| XSS | /ˌɛks.ɛs.ˈɛs/ | Cross-Site Scripting — chèn script độc hại | Sanitize all user input to prevent **XSS** attacks on the frontend. |
| SQL injection | /ˌɛs.kjuː.ˈɛl ɪnˈdʒɛkʃən/ | chèn mã SQL độc hại vào truy vấn | Always use parameterized queries to prevent **SQL injection**. |
| CSRF | /ˈsiː.sɜːrf/ | Cross-Site Request Forgery — giả mạo request từ site khác | Add a **CSRF** token to every form to prevent unauthorized submissions. |
| CORS | /kɔːrz/ | Cross-Origin Resource Sharing — kiểm soát truy cập cross-domain | Configure **CORS** headers to allow requests only from your frontend domain. |

### 🔹 Phòng thủ & Kiểm tra

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| vulnerability | /ˌvʌlnərəˈbɪləti/ | lỗ hổng bảo mật | The security scan found a critical **vulnerability** in the authentication module. |
| penetration testing | /ˌpɛnəˈtreɪʃən ˈtɛstɪŋ/ | kiểm thử xâm nhập | We hired a firm to perform **penetration testing** before the product launch. |
| patch | /pætʃ/ | bản vá lỗi | Apply the security **patch** immediately to fix the remote code execution vulnerability. |

---

## 💡 Mẹo ghi nhớ

- **Encryption vs Hashing**: Encryption = khóa tủ (có chìa mở lại). Hashing = xay thịt (không thể "un-xay" lại). Password phải hash (không cần giải mã), còn tin nhắn phải encrypt (cần đọc lại).
- **XSS vs CSRF**: XSS = hacker chèn script vào website bạn. CSRF = hacker lừa browser bạn gửi request đến website khác mà bạn đang login. Cả hai đều nguy hiểm!
- **JWT** đọc là "jot" (không phải J-W-T) — đây là cách phát âm chính thức từ RFC 7519.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Never store passwords in plain text — always use a strong ___ algorithm like bcrypt.
2. The team discovered a critical ___ in the login API that allowed unauthorized access.
3. We use ___ 2.0 to let users sign in with their GitHub accounts.
4. The frontend got a ___ error because the API server didn't allow requests from localhost:3000.
5. Apply the latest security ___ to fix the known vulnerabilities in the library.

---

{{< spoiler "✅ Đáp án" >}}
1. **hash** — Hash function chuyển password thành chuỗi không thể đảo ngược
2. **vulnerability** — Vulnerability là điểm yếu trong hệ thống mà attacker có thể khai thác
3. **OAuth** — OAuth cho phép ủy quyền truy cập mà không cần chia sẻ mật khẩu
4. **CORS** — CORS kiểm soát domain nào được phép gọi API cross-origin
5. **patch** — Patch là bản cập nhật nhỏ để sửa lỗi hoặc vá lỗ hổng bảo mật
{{< /spoiler >}}

---

Security là trách nhiệm của mọi developer, không chỉ riêng team bảo mật. Nắm vững 14 thuật ngữ này giúp bạn viết code an toàn hơn và phản ứng nhanh hơn khi có sự cố. Stay secure! 🛡️

---

## 📚 Bài viết liên quan

- [Database Fundamentals — 14 Thuật Ngữ Cơ Sở Dữ Liệu Developer Cần Biết](/posts/tu-vung-database-thuat-ngu-co-so-du-lieu/)
- [Bài 139: Open banking API — ngân hàng mở và fintech revolution](/posts/luyen-doc-open-banking-api-ngan-hang-mo/)
- [Privacy-enhancing technologies — federated learning,](/posts/luyen-doc-privacy-enhancing-technologies-pets/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
