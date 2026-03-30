---
title: "Articles (a/an/the) Trong Văn Bản Kỹ Thuật — Hướng Dẫn Cho Developer"
slug: "articles-a-an-the-trong-van-ban-ky-thuat"
date: 2026-03-31
summary: "Hướng dẫn cách dùng a, an, the đúng trong documentation, code comments, và email kỹ thuật. Ví dụ thực tế cho developer Việt Nam."
description: "Cách dùng Articles (a/an/the) trong văn bản kỹ thuật IT: documentation, API docs, code comments, commit messages, email. Bảng từ vựng EN-VN, quy tắc rõ ràng, bài tập practice cho developer."
tags: ["grammar", "articles", "technical-writing", "tieng-anh-can-ban", "developer"]
categories: ["tieng-anh-can-ban"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn đang viết documentation cho API mới. Bạn gõ:

> *"Send request to server and get response."* 🤔

Có gì sai không? — Thiếu **articles**! Câu đúng phải là:

> ✅ *"Send **a** request to **the** server and get **a** response."*

**Articles (a/an/the)** là một trong những lỗi grammar phổ biến nhất của developer Việt Nam khi viết tiếng Anh. Tiếng Việt không có mạo từ, nên não mình hay "quên" chèn a/an/the vào câu. Kết quả? Documentation đọc nghe "lạ", email thiếu chuyên nghiệp, và đôi khi gây hiểu nhầm.

Bài này giúp bạn nắm **quy tắc thực tế** để dùng articles đúng trong ngữ cảnh IT — không cần học thuộc lý thuyết dài dòng.

---

## 1. Tổng Quan: A, An, The — Khi Nào Dùng Cái Nào?

| Article | Loại | Dùng khi | Ví dụ IT |
|---|---|---|---|
| **a** | Indefinite (bất định) | Một cái bất kỳ, chưa xác định | "Create **a** new branch." |
| **an** | Indefinite (bất định) | Giống "a" nhưng trước nguyên âm | "Throw **an** exception." |
| **the** | Definite (xác định) | Cái cụ thể, đã biết là cái nào | "Merge to **the** main branch." |
| *(không có)* | Zero article | Danh từ không đếm được / nói chung | "This function returns **data**." |

💡 **Quy tắc ngón tay cái:** Nếu bạn có thể chỉ vào "cái đó cụ thể" → dùng **the**. Nếu là "một cái bất kỳ" → dùng **a/an**. Nếu nói chung chung → không cần article.

---

## 2. "A/An" — Khi Nói Về Một Thứ Bất Kỳ

### Quy tắc cơ bản

Dùng **a/an** khi đề cập đến **một item chưa xác định cụ thể** — lần đầu nhắc đến, hoặc không quan trọng là cái nào.

| Quy tắc | Ví dụ |
|---|---|
| **a** + phụ âm | a server, a database, a function, a bug |
| **an** + nguyên âm | an API, an error, an object, an update |
| **an** + "h" câm | an hour (giờ), an honest mistake |
| **a** + "u" đọc /juː/ | a user, a URL, a utility |
| **a** + "eu" đọc /juː/ | a European server |

⚠️ **Cẩn thận:** Quy tắc a/an dựa trên **âm thanh**, không phải chữ cái!

### Ví dụ trong IT

```
❌ "I found bug in the code."
✅ "I found a bug in the code."

❌ "We need to create database for this project."
✅ "We need to create a database for this project."

❌ "This endpoint returns error when input is invalid."
✅ "This endpoint returns an error when input is invalid."

❌ "She is UI designer on our team."
✅ "She is a UI designer on our team."
```

📌 **Mẹo nhớ:** Trong tiếng Việt, bạn nói "Tôi tìm thấy **một** bug" — chữ "một" đó chính là a/an.

---

## 3. "The" — Khi Nói Về Thứ Cụ Thể

### Khi nào dùng "the"?

| Tình huống | Ví dụ | Giải thích |
|---|---|---|
| **Đã nhắc trước đó** | "I created a branch. **The** branch is named fix/login." | Lần 2 nhắc → the |
| **Chỉ có duy nhất 1** | "Push to **the** main branch." | Chỉ có 1 main branch |
| **Ai cũng biết là cái nào** | "Check **the** logs." | Team đều biết logs nào |
| **Được xác định bởi context** | "**The** server in production crashed." | "in production" xác định server nào |
| **Superlative** | "This is **the** fastest algorithm." | So sánh nhất → the |
| **Thứ tự (ordinal)** | "**The** first commit fixed the bug." | Số thứ tự → the |

### Ví dụ trong Documentation

```
✅ "The API accepts JSON payloads."
   (API cụ thể đang document)

✅ "The database schema is defined in schema.sql."
   (Database cụ thể của project)

✅ "The user must authenticate before accessing the dashboard."
   (User cụ thể đang dùng hệ thống)
```

### Pattern phổ biến trong IT

| Pattern | Ví dụ |
|---|---|
| the + tên thành phần cụ thể | the backend, the frontend, the API gateway |
| the + file/resource đã biết | the config file, the README, the schema |
| the + environment | the production server, the staging environment |
| the + team/org | the DevOps team, the QA team |
| the + process đang chạy | the deployment, the migration, the build |

---

## 4. Zero Article — Khi Không Cần a/an/the

### Khi nào KHÔNG dùng article?

| Tình huống | Ví dụ | Giải thích |
|---|---|---|
| **Danh từ không đếm được** | "This function returns **data**." | data = uncountable |
| **Nói chung về loại** | "**Developers** should write clean code." | Developers nói chung |
| **Tên riêng** | "**Docker** simplifies deployment." | Tên tool/technology |
| **Tên ngôn ngữ** | "Written in **Python**." | Tên ngôn ngữ lập trình |
| **Sau tính từ sở hữu** | "Check **your** email." | your thay the |
| **Headlines/Titles** | "Bug Fix for Login Module" | Tiêu đề thường bỏ article |

### Ví dụ trong IT

```
✅ "JavaScript is a versatile language." (tên riêng → zero article)
✅ "We use Docker for containerization." (tên tool → zero article)
✅ "Software development requires patience." (nói chung → zero article)
✅ "Check your pull request." (your → không cần the)

❌ "The JavaScript is a versatile language."
❌ "We use the Docker for containerization."
```

⚠️ **Ngoại lệ:** Khi tên tool được dùng như tính từ: "**the** Docker container", "**the** React component" — ở đây "the" bổ nghĩa cho container/component, không phải cho Docker/React.

---

## 5. Articles Trong Các Ngữ Cảnh IT Cụ Thể

### 5.1 Code Comments

```java
// ❌ Create connection to database
// ✅ Create a connection to the database

// ❌ Return list of users from API
// ✅ Return a list of users from the API

// ❌ Check if file exists in directory
// ✅ Check if the file exists in the directory
```

### 5.2 Commit Messages

Commit messages thường **bỏ articles** để ngắn gọn — đây là convention được chấp nhận:

```
✅ "Fix bug in login flow"        (bỏ a/the — OK trong commit)
✅ "Add validation for email field" (bỏ the — OK)
✅ "Update README with new API docs" (bỏ the — OK)

// Nhưng trong description chi tiết, nên viết đầy đủ:
✅ "Fixed a bug where the login flow crashed when the user entered an empty password."
```

### 5.3 API Documentation

```
❌ "Endpoint returns user object."
✅ "The endpoint returns a user object."

❌ "Pass token in header."
✅ "Pass the token in the Authorization header."

❌ "Request body must contain email field."
✅ "The request body must contain an email field."
```

### 5.4 Email Kỹ Thuật

```
❌ "I deployed fix to production server."
✅ "I deployed the fix to the production server."

❌ "Can you review PR I submitted?"
✅ "Can you review the PR I submitted?"

❌ "There is issue with database connection."
✅ "There is an issue with the database connection."
```

### 5.5 Bug Reports

```
❌ "Steps to reproduce: Click button on homepage."
✅ "Steps to reproduce: Click the button on the homepage."

❌ "Expected: System shows error message."
✅ "Expected: The system shows an error message."
```

---

## 6. Bảng Từ Vựng: Articles Với Thuật Ngữ IT Phổ Biến

| Thuật ngữ | Dùng "a/an" | Dùng "the" | Zero article |
|---|---|---|---|
| server | a server (bất kỳ) | the server (cụ thể) | — |
| API | an API (một API nào đó) | the API (API của project) | — |
| database | a database | the database | — |
| error | an error | the error | — |
| bug | a bug | the bug | — |
| code | — | the code (cụ thể) | code (nói chung) |
| data | — | the data (cụ thể) | data (nói chung) |
| software | — | the software (cụ thể) | software (nói chung) |
| information | — | the information | information (nói chung) |
| JavaScript | — | — | JavaScript ✅ |
| Docker | — | — | Docker ✅ |
| internet | — | the internet | — |

---

## 7. Những Lỗi Phổ Biến Và Cách Sửa

### ❌ Sai → ✅ Đúng

| # | Sai | Đúng | Lỗi |
|---|---|---|---|
| 1 | "I have **the** question." | "I have **a** question." | Câu hỏi bất kỳ → a |
| 2 | "Please check **the** attached file." | ✅ Đúng rồi! | File cụ thể → the |
| 3 | "We need to discuss about **the** requirements." | "We need to discuss **the** requirements." | Bỏ "about" (discuss + O trực tiếp) |
| 4 | "**The** most of developers use Git." | "**Most** developers use Git." | Most + noun → zero article |
| 5 | "I work as **developer**." | "I work as **a developer**." | Nghề nghiệp → a/an |
| 6 | "**The** Python is popular." | "**Python** is popular." | Tên ngôn ngữ → zero article |
| 7 | "Send me **an** information." | "Send me **some** information." | information = uncountable |
| 8 | "I'll fix **the** bug." (chưa nói bug nào) | "I'll fix **a** bug." | Chưa xác định → a |

---

## 8. Mẹo Nhanh — Quick Reference Card

📌 **5 quy tắc đơn giản cho developer:**

| # | Quy tắc | Ví dụ |
|---|---|---|
| 1 | Lần đầu nhắc → **a/an** | "I found **a** bug." |
| 2 | Lần sau nhắc lại → **the** | "**The** bug was in the auth module." |
| 3 | Chỉ có 1 duy nhất → **the** | "Push to **the** main branch." |
| 4 | Tên riêng (tools, languages) → **không cần** | "Install **Docker**." |
| 5 | Nói chung chung → **không cần** | "**Software** evolves quickly." |

🔥 **Trick kiểm tra nhanh:** Đọc to câu tiếng Việt — nếu bạn nói "một" thì dùng a/an, nếu nói "cái đó" thì dùng the, nếu không cần chỉ định thì bỏ article.

---

## 9. Practice — Bài Tập Thực Hành

### Bài tập 1: Điền a, an, the, hoặc Ø (zero article)

1. "I created ___ new repository on ___ GitHub."
2. "___ API returns ___ JSON response."
3. "We need to set up ___ CI/CD pipeline for ___ project."
4. "___ developer should always write ___ unit tests."
5. "Please review ___ code I pushed to ___ staging branch."
6. "There is ___ issue with ___ database connection."
7. "___ React is ___ popular frontend framework."
8. "I fixed ___ bug that ___ QA team reported."

### Đáp án

1. "I created **a** new repository on **Ø** GitHub." *(a = một repo mới; GitHub = tên riêng)*
2. "**The** API returns **a** JSON response." *(the = API cụ thể; a = một response bất kỳ)*
3. "We need to set up **a** CI/CD pipeline for **the** project." *(a = pipeline mới; the = project đã biết)*
4. "**A** developer should always write **Ø** unit tests." *(a = một developer bất kỳ; unit tests nói chung)*
5. "Please review **the** code I pushed to **the** staging branch." *(the = code cụ thể; the = branch cụ thể)*
6. "There is **an** issue with **the** database connection." *(an = một issue; the = connection cụ thể)*
7. "**Ø** React is **a** popular frontend framework." *(React = tên riêng; a = một framework)*
8. "I fixed **the** bug that **the** QA team reported." *(the = bug cụ thể; the = team cụ thể)*

### Bài tập 2: Sửa lỗi articles trong đoạn văn

> "Yesterday I deployed new feature to production server. Feature allows users to upload files. I found bug during testing — system was returning error when file size exceeded limit. I created ticket and assigned it to backend team."

**Đáp án:**

> "Yesterday I deployed **a** new feature to **the** production server. **The** feature allows users to upload files. I found **a** bug during testing — **the** system was returning **an** error when **the** file size exceeded **the** limit. I created **a** ticket and assigned it to **the** backend team."

---

## Kết Luận

Articles nhỏ nhưng **tạo sự khác biệt lớn** trong cách văn bản kỹ thuật của bạn được đọc. Developer Việt hay bỏ quên a/an/the vì tiếng Việt không có mạo từ — nhưng chỉ cần nhớ **5 quy tắc ở mục 8**, bạn đã xử lý được 90% trường hợp.

**Mẹo cuối:** Sau khi viết xong documentation hay email, đọc lại một lượt và tự hỏi: *"Danh từ này cần article không?"* — Chỉ cần 30 giây kiểm tra, văn bản sẽ chuyên nghiệp hơn hẳn! ✨

> 💡 **Bài tiếp theo:** [Prepositions Hay Dùng Sai Trong IT English](/posts/prepositions-hay-dung-sai-trong-it-english/) — Những giới từ mà developer Việt hay nhầm nhất!
