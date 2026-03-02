---
title: "Backend Development — 14 Thuật Ngữ Lập Trình Server Developer Phải Biết"
date: 2023-02-10
slug: "tu-vung-backend-development-thuat-ngu-lap-trinh-server"
description: "Học 14 thuật ngữ tiếng Anh về Backend Development — từ API, middleware, ORM đến authentication và dependency injection. Dễ hiểu cho dev Việt."
categories: ["IT English"]
tags: ["backend"]
ShowToc: true
TocOpen: true
draft: false
---

Backend là "bộ não" phía sau mọi ứng dụng — xử lý logic, lưu trữ dữ liệu, xác thực người dùng. Dù bạn viết Java, Python, Node.js hay Go, các thuật ngữ backend đều chung. Hiểu chúng bằng tiếng Anh giúp bạn đọc docs nhanh hơn và communicate hiệu quả trong team quốc tế. Let's go! ⚙️

---

### 🔹 API & Middleware

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| API | /ˌeɪ.piː.ˈaɪ/ | giao diện lập trình ứng dụng — cầu nối giữa các hệ thống | The mobile app calls the REST **API** to fetch the user's order history. |
| middleware | /ˈmɪdəlˌwɛr/ | lớp xử lý trung gian giữa request và response | Add a logging **middleware** to record every incoming request. |
| rate limiting | /reɪt ˈlɪmɪtɪŋ/ | giới hạn số request trong khoảng thời gian | We set **rate limiting** to 100 requests per minute to prevent API abuse. |
| error handling | /ˈɛrər ˈhændlɪŋ/ | xử lý lỗi — bắt và phản hồi lỗi phù hợp | Proper **error handling** returns a 404 status instead of crashing the server. |

### 🔹 Database & ORM

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| ORM | /ˌoʊ.ɑːr.ˈɛm/ | Object-Relational Mapping — ánh xạ object sang bảng DB | Using an **ORM** like Sequelize lets you write queries in JavaScript instead of raw SQL. |
| migration | /maɪˈɡreɪʃən/ | script thay đổi cấu trúc database có kiểm soát | Run the **migration** to add the email column to the users table. |
| caching | /ˈkæʃɪŋ/ | lưu tạm dữ liệu để truy xuất nhanh hơn | We use Redis for **caching** frequently accessed product data. |

### 🔹 Authentication & Session

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| authentication | /ɔːˌθɛntɪˈkeɪʃən/ | xác thực — chứng minh bạn là ai | The **authentication** flow verifies the user's email and password before granting access. |
| authorization | /ˌɔːθərɪˈzeɪʃən/ | phân quyền — xác định bạn được làm gì | After **authorization** check, only admin users can delete other accounts. |
| session | /ˈsɛʃən/ | phiên làm việc — lưu trạng thái đăng nhập | The server creates a **session** after login and stores it in Redis. |

### 🔹 Architecture Patterns

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| queue | /kjuː/ | hàng đợi — xử lý task theo thứ tự | Push the email sending job to the **queue** so it runs in the background. |
| worker | /ˈwɜːrkər/ | tiến trình chạy nền xử lý task từ queue | The background **worker** processes image resizing jobs from the queue. |
| logging | /ˈlɒɡɪŋ/ | ghi log — lưu lại hoạt động hệ thống | Enable structured **logging** to make it easier to search for errors in production. |
| dependency injection | /dɪˈpɛndənsi ɪnˈdʒɛkʃən/ | tiêm phụ thuộc — truyền dependency từ bên ngoài vào | Use **dependency injection** to pass the database service into the controller for easier testing. |

---

## 💡 Mẹo ghi nhớ

- **Authentication vs Authorization**: Authentication = "Bạn là ai?" (kiểm tra CMND). Authorization = "Bạn được vào đâu?" (kiểm tra vé). Luôn authen trước, author sau.
- **Queue + Worker** = nhà hàng: Queue = danh sách order. Worker = đầu bếp. Nhiều order thì thêm worker (scale), không cần khách đứng chờ.
- **ORM** — nhớ: Object ↔ Row Mapping. Mỗi object trong code = một row trong database. Không cần viết SQL tay!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Add a ___ to check the JWT token before processing any API request.
2. Run the database ___ to create the new orders table in production.
3. ___ verifies who the user is, while ___ determines what they can access.
4. Push heavy tasks like video encoding to a ___ and let a background ___ handle them.
5. Use ___ ___ to pass services into classes instead of creating them internally.

{{< spoiler "✅ Đáp án" >}}
1. **middleware** — Middleware xử lý request trước khi đến route handler
2. **migration** — Migration quản lý thay đổi schema database
3. **Authentication**, **authorization** — Authen xác thực, author phân quyền
4. **queue**, **worker** — Queue chứa task, worker xử lý task
5. **dependency injection** — DI giúp code dễ test và loosely coupled
{{< /spoiler >}}

---

## 🎯 Tổng kết

Backend development xoay quanh việc xây dựng hệ thống ổn định, bảo mật và hiệu quả. 14 thuật ngữ này là nền tảng bạn sẽ gặp hàng ngày — từ viết API, quản lý database đến thiết kế kiến trúc xử lý nền. Master chúng để tự tin hơn khi đọc docs và thảo luận technical! 🚀
