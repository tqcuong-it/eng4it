---
title: "Passive Voice Trong Technical Writing — Hướng Dẫn Cho Developer"
slug: "passive-voice-trong-technical-writing"
date: 2026-03-30
summary: "Cách dùng câu bị động (Passive Voice) trong technical writing: documentation, bug reports, release notes. Bảng từ vựng EN-VN, ví dụ thực tế."
description: "Hướng dẫn dùng Passive Voice trong technical writing cho developer. Khi nào dùng câu bị động trong documentation, bug reports, release notes, commit messages. Bảng từ vựng EN-VN, so sánh Active vs Passive, bài tập practice."
tags: ["grammar", "passive-voice", "technical-writing", "tieng-anh-can-ban", "developer"]
categories: ["tieng-anh-can-ban"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn viết documentation cho API:

> *"**I wrote** the authentication module."* 🤔

Không sai ngữ pháp, nhưng trong technical writing, người đọc không quan tâm **ai** viết — họ quan tâm **cái gì** được viết. Câu chuyên nghiệp hơn:

> *"The authentication module **was written** in Python."* ✅ — Khách quan, tập trung vào sản phẩm.

**Passive Voice (câu bị động)** là công cụ cực kỳ quan trọng trong technical writing. Nó giúp văn bản đọc **khách quan**, **chuyên nghiệp**, và **tập trung vào hành động/kết quả** thay vì người thực hiện. Bài này hướng dẫn khi nào nên (và không nên) dùng Passive Voice trong công việc IT.

---

## 1. Passive Voice Là Gì? — Ôn Nhanh

### Công thức

| Thành phần | Active Voice | Passive Voice |
|---|---|---|
| **Cấu trúc** | Subject + Verb + Object | Object + be + Past Participle (+ by Subject) |
| **Ví dụ** | The team **deployed** the app. | The app **was deployed** (by the team). |
| **Focus** | Người thực hiện (the team) | Đối tượng (the app) |

### Các thì hay gặp trong Technical Writing

| Thì | Active | Passive | IPA của "be" |
|---|---|---|---|
| **Present Simple** | We **configure** the server. | The server **is configured**. | /ɪz/ |
| **Past Simple** | They **fixed** the bug. | The bug **was fixed**. | /wɒz/ |
| **Present Perfect** | We **have updated** the API. | The API **has been updated**. | /hæz biːn/ |
| **Future (will)** | We **will release** v2.0. | v2.0 **will be released**. | /wɪl biː/ |
| **Modal** | You **can configure** the port. | The port **can be configured**. | /kæn biː/ |

💡 **Mẹo nhớ:** Passive = **be + V3 (past participle)**. Đơn giản vậy thôi!

---

## 2. Khi Nào Dùng Passive Voice Trong IT?

### ✅ NÊN dùng Passive khi:

| Tình huống | Ví dụ | Lý do |
|---|---|---|
| **Documentation** | "Data **is encrypted** using AES-256." | Người đọc cần biết *cái gì* xảy ra, không cần biết *ai* làm |
| **Release Notes** | "A new feature **has been added**." | Tập trung vào thay đổi, không phải người code |
| **Bug Reports** | "The error **was triggered** when..." | Mô tả khách quan, không đổ lỗi |
| **Processes** | "Requests **are validated** before processing." | Mô tả workflow hệ thống |
| **Security** | "Passwords **must be hashed** before storage." | Quy tắc áp dụng cho tất cả, không cần chỉ định ai |

### ❌ KHÔNG nên dùng Passive khi:

| Tình huống | ❌ Passive (rối) | ✅ Active (rõ hơn) |
|---|---|---|
| **Hướng dẫn user** | "The button should be clicked." | "**Click** the button." |
| **Giao task** | "The PR should be reviewed." | "**Please review** the PR." |
| **Commit message** | "Bug was fixed." | "**Fix** login timeout bug." |
| **Chat/Slack** | "It was decided that..." | "**We decided** to..." |

📌 **Nguyên tắc vàng:** Dùng Passive cho **documentation & formal writing**. Dùng Active cho **instructions & daily communication**.

---

## 3. Passive Voice Trong Các Loại Document IT

### 3.1 API Documentation

```
❌ Active (quá personal):
"We send a JSON response with status code 200."

✅ Passive (chuẩn doc):
"A JSON response is sent with status code 200."

❌ Active:
"The system validates the API key in every request."

✅ Passive:
"The API key is validated in every request."
```

**Các mẫu câu hay dùng:**

| Passive Pattern | Ví dụ |
|---|---|
| ...is/are + V3 | "Requests **are authenticated** via OAuth 2.0." |
| ...can be + V3 | "The endpoint **can be accessed** without authentication." |
| ...must be + V3 | "The request body **must be** formatted as JSON." |
| ...should be + V3 | "Error responses **should be** handled gracefully." |
| ...will be + V3 | "Deprecated endpoints **will be removed** in v3.0." |

### 3.2 Release Notes & Changelogs

```markdown
## v2.5.0 — March 2026

### Added
- Dark mode **has been implemented** for all UI components.
- Webhook support **has been added** for real-time notifications.

### Fixed
- Memory leak in connection pooling **has been resolved**.
- Race condition in payment processing **was fixed**.

### Changed
- Default timeout **has been increased** from 30s to 60s.
- Legacy API endpoints **have been deprecated**.

### Security
- All passwords **are now hashed** using bcrypt.
- SQL injection vulnerability **was patched**.
```

### 3.3 Bug Reports

```
Title: Data is not saved when form is submitted

**Description:**
When the submit button is clicked, the data is not persisted
to the database. The request is sent but a 500 error
is returned by the server.

**Steps to Reproduce:**
1. The form is filled with valid data.
2. The "Save" button is clicked.
3. An error message is displayed.

**Expected:** Data should be saved successfully.
**Actual:** A 500 Internal Server Error is returned.
```

💡 **Lưu ý:** Bug report dùng Passive giúp **không đổ lỗi** cho ai — chỉ mô tả **hiện tượng**.

### 3.4 System Architecture Documentation

```
Data Flow:
1. User input is received by the API Gateway.
2. The request is validated and authenticated.
3. Data is transformed and sent to the message queue.
4. The message is consumed by the worker service.
5. Results are stored in the database.
6. A notification is sent to the client via WebSocket.
```

---

## 4. Bảng Từ Vựng — Passive Voice Trong IT

| Cụm từ (Passive) | IPA | Nghĩa tiếng Việt | Ngữ cảnh |
|---|---|---|---|
| is configured | /ɪz kənˈfɪɡəd/ | được cấu hình | Server/app setup |
| was deployed | /wɒz dɪˈplɔɪd/ | đã được deploy | Release process |
| has been updated | /hæz biːn ʌpˈdeɪtɪd/ | đã được cập nhật | Changelog |
| is encrypted | /ɪz ɪnˈkrɪptɪd/ | được mã hóa | Security docs |
| was deprecated | /wɒz ˈdeprəkeɪtɪd/ | đã bị deprecated | API versioning |
| can be accessed | /kæn biː ækˈsest/ | có thể truy cập | API docs |
| must be validated | /mʌst biː ˈvælɪdeɪtɪd/ | phải được validate | Input handling |
| should be handled | /ʃʊd biː ˈhændld/ | nên được xử lý | Error handling |
| will be removed | /wɪl biː rɪˈmuːvd/ | sẽ bị xóa | Deprecation notice |
| is maintained | /ɪz meɪnˈteɪnd/ | được bảo trì | System docs |
| was triggered | /wɒz ˈtrɪɡəd/ | đã được kích hoạt | Event/bug description |
| is stored | /ɪz stɔːd/ | được lưu trữ | Database docs |
| has been resolved | /hæz biːn rɪˈzɒlvd/ | đã được giải quyết | Bug tracking |
| is authenticated | /ɪz ɔːˈθentɪkeɪtɪd/ | được xác thực | Security docs |
| was optimized | /wɒz ˈɒptɪmaɪzd/ | đã được tối ưu | Performance reports |

---

## 5. Active vs Passive — So Sánh Trong Thực Tế

### Email gửi client (formal → Passive OK)

```
❌ "Our team fixed the production issue at 3 PM."
✅ "The production issue was resolved at 3 PM."
   (Chuyên nghiệp hơn — client không cần biết ai fix)

❌ "We have completed the migration."
✅ "The migration has been completed successfully."
   (Tập trung vào kết quả)
```

### Slack message cho teammate (informal → Active tốt hơn)

```
❌ "The PR should be reviewed by you."
✅ "Hey, can you review my PR?"

❌ "It has been decided that we use PostgreSQL."
✅ "We decided to go with PostgreSQL."
```

### README.md (mix cả hai)

```markdown
## Installation (Active — vì đây là instruction)
1. Clone the repository.
2. Run `npm install`.
3. Configure the `.env` file.

## Architecture (Passive — vì đây là description)
- Requests are routed through the API Gateway.
- Data is stored in PostgreSQL.
- Background jobs are processed by Redis workers.
```

---

## 6. Lỗi Thường Gặp Khi Dùng Passive Voice

### ❌ Lỗi 1: Quên "be"

```
❌ "The file saved to disk."
✅ "The file was saved to disk."
```

### ❌ Lỗi 2: Dùng sai dạng Past Participle

```
❌ "The data is store in the database."
✅ "The data is stored in the database."

❌ "The function was ran by the scheduler."
✅ "The function was run by the scheduler."
```

### ❌ Lỗi 3: Passive quá nhiều → văn bản nặng nề

```
❌ "The request is received, then it is validated, then it is
   processed, then a response is generated, and it is sent."

✅ "The system receives the request, validates it, processes the
   data, and returns a response."
   (Mix Active + Passive cho dễ đọc)
```

### ❌ Lỗi 4: Dùng Passive trong user instructions

```
❌ "The 'Submit' button should be clicked by the user."
✅ "Click the 'Submit' button."
```

---

## 7. Mẹo Viết Technical Writing Hay

| Mẹo | Giải thích |
|---|---|
| 🎯 **Xác định audience** | Docs cho developer → mix Active + Passive. Docs cho user → Active là chính |
| ⚖️ **Balance 70/30** | Technical docs nên ~70% Active, ~30% Passive |
| 🔍 **"By" test** | Nếu bạn viết "by..." ở cuối mà thông tin đó không quan trọng → bỏ "by..." luôn |
| ✂️ **Ngắn gọn** | Passive dài hơn Active → dùng khi thật sự cần, đừng lạm dụng |
| 📖 **Đọc lại to** | Nếu câu nghe awkward khi đọc to → chuyển sang Active |

---

## 8. Practice — Bài Tập Thực Hành

### Exercise 1: Chuyển sang Passive Voice

Chuyển các câu Active sau sang Passive:

1. "The developer wrote unit tests for the module."
2. "We have deployed the new version to production."
3. "The QA team found three critical bugs."
4. "The system sends email notifications every hour."
5. "They will migrate the database next week."

<details>
<summary>📝 Đáp án</summary>

1. "Unit tests **were written** for the module."
2. "The new version **has been deployed** to production."
3. "Three critical bugs **were found** (by the QA team)."
4. "Email notifications **are sent** every hour."
5. "The database **will be migrated** next week."

</details>

### Exercise 2: Active hay Passive?

Chọn dạng phù hợp cho mỗi tình huống:

1. API documentation mô tả luồng xử lý: ___
2. Slack message nhờ teammate: ___
3. Release notes mô tả thay đổi: ___
4. User guide hướng dẫn thao tác: ___
5. Bug report mô tả lỗi: ___

<details>
<summary>📝 Đáp án</summary>

1. **Passive** — "Requests are validated before processing."
2. **Active** — "Can you deploy the hotfix?"
3. **Passive** — "A new caching layer has been added."
4. **Active** — "Click Settings, then select Notifications."
5. **Passive** — "The error is triggered when the form is submitted."

</details>

### Exercise 3: Sửa lỗi Passive

Tìm và sửa lỗi trong các câu sau:

1. "The file is store in S3 bucket."
2. "The API endpoint can accessed without a token."
3. "Data was processing by the worker."
4. "The config file should updated before deployment."

<details>
<summary>📝 Đáp án</summary>

1. "The file is **stored** in S3 bucket." (store → stored)
2. "The API endpoint can **be accessed** without a token." (thiếu "be")
3. "Data was **processed** by the worker." (processing → processed)
4. "The config file should **be updated** before deployment." (thiếu "be")

</details>

---

## Tổng Kết

| Dùng Passive ✅ | Dùng Active ✅ |
|---|---|
| Documentation, specs | User guides, tutorials |
| Release notes, changelogs | Commit messages |
| Bug reports (mô tả lỗi) | Slack/chat messages |
| Security policies | Giao task cho người cụ thể |
| Architecture descriptions | Instructions, how-to |

**Nhớ:** Passive Voice không phải lúc nào cũng tốt, Active Voice không phải lúc nào cũng hay. **Biết khi nào dùng cái nào** mới là kỹ năng thật sự! 💪

---

📌 **Bài liên quan:**
- [Cách Dùng Modal Verbs Trong Email Công Việc](/posts/cach-dung-modal-verbs-trong-email-cong-viec/)
- [Thì Hiện Tại Đơn vs Hiện Tại Tiếp Diễn — Cho Developer](/posts/thi-hien-tai-don-vs-hien-tai-tiep-dien-cho-developer/)

📌 **Bookmark** bài này để dùng khi viết documentation nhé! Nếu thấy hữu ích, share cho team bạn cùng đọc. 🚀
