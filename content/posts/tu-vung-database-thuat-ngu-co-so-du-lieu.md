---
title: "Database Fundamentals — 14 Thuật Ngữ Cơ Sở Dữ Liệu Developer Cần Biết"
date: 2023-02-05
summary: "Học 14 thuật ngữ Database Fundamentals quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-database-thuat-ngu-co-so-du-lieu"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về Database — từ schema, index, transaction đến ORM và stored procedure. Giải thích dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["database", "backend", "blockchain", "data", "workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

Database là trái tim của hầu hết mọi ứng dụng. Dù bạn dùng PostgreSQL, MySQL hay MongoDB, việc hiểu thuật ngữ database bằng tiếng Anh sẽ giúp bạn đọc docs, viết query, và communicate với team hiệu quả hơn rất nhiều. Cùng học 14 từ vựng quan trọng nhất nhé! 🗄️

---

### 🔹 Cấu trúc dữ liệu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| schema | /ˈskiːmə/ | lược đồ cơ sở dữ liệu | The **schema** defines all tables, columns, and relationships in our database. |
| table | /ˈteɪbəl/ | bảng dữ liệu | We created a new **table** called `orders` to store purchase history. |
| primary key | /ˈpraɪməri kiː/ | khóa chính — định danh duy nhất | Every **primary key** must be unique and not null. |
| foreign key | /ˈfɒrən kiː/ | khóa ngoại — liên kết giữa các bảng | The `user_id` **foreign key** in the orders table references the users table. |
| index | /ˈɪndɛks/ | chỉ mục — tăng tốc truy vấn | Adding an **index** on the email column improved query speed by 10x. |

### 🔹 Truy vấn & Thao tác

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| query | /ˈkwɪəri/ | truy vấn dữ liệu | This **query** returns all users who signed up in the last 30 days. |
| join | /dʒɔɪn/ | phép nối bảng | We use an inner **join** to combine order data with customer information. |
| transaction | /trænˈzækʃən/ | giao dịch — nhóm thao tác đảm bảo toàn vẹn | Wrap the transfer in a **transaction** so both accounts update atomically. |
| ACID | /ˈæsɪd/ | bộ 4 tính chất của transaction (Atomicity, Consistency, Isolation, Durability) | Our database engine guarantees **ACID** compliance for financial transactions. |

### 🔹 Thiết kế & Tối ưu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| normalization | /ˌnɔːrməlaɪˈzeɪʃən/ | chuẩn hóa dữ liệu — giảm trùng lặp | After **normalization**, we split the address data into a separate table. |
| migration | /maɪˈɡreɪʃən/ | di chuyển/thay đổi cấu trúc DB | Run the **migration** to add the `phone_number` column to the users table. |
| ORM | /ˌoʊ.ɑːr.ˈɛm/ | Object-Relational Mapping — ánh xạ object sang bảng | Using an **ORM** like Sequelize lets you write queries in JavaScript instead of raw SQL. |

### 🔹 Nâng cao

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| stored procedure | /stɔːrd prəˈsiːdʒər/ | thủ tục lưu sẵn trong DB | The **stored procedure** calculates monthly revenue and stores it in the reports table. |
| trigger | /ˈtrɪɡər/ | trình kích hoạt — tự chạy khi có sự kiện | A database **trigger** automatically updates the `modified_at` timestamp on every row change. |

---

## 💡 Mẹo ghi nhớ

- **Primary Key vs Foreign Key**: Primary key = số CMND (unique cho mỗi người). Foreign key = ghi số CMND người khác vào đơn hàng để biết ai đặt.
- **Index** nghĩ như mục lục sách — không cần đọc cả cuốn, chỉ cần tra mục lục là tìm được trang cần tìm. Nhưng thêm nhiều index quá thì sách dày thêm (tốn bộ nhớ)!
- **ACID** nhớ theo câu: "A Transaction Can't Be Incomplete Dirty" — Atomicity (toàn bộ hoặc không), Consistency (dữ liệu luôn hợp lệ), Isolation (không xung đột), Durability (lưu rồi là không mất).

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. We need to add an ___ on the `created_at` column to speed up the date range queries.
2. The ___ failed halfway through, so all changes were rolled back automatically.
3. Run the database ___ to create the new `comments` table in production.
4. Use a LEFT ___ to include users even if they have no orders yet.
5. The ___ fires automatically whenever a row is deleted from the orders table.

---

{{< spoiler "✅ Đáp án" >}}
1. **index** — Index giúp database tìm dữ liệu nhanh hơn mà không cần scan toàn bộ bảng
2. **transaction** — Transaction đảm bảo tính toàn vẹn: thất bại thì rollback tất cả
3. **migration** — Migration quản lý thay đổi cấu trúc database theo version
4. **join** — LEFT JOIN trả về tất cả rows từ bảng trái, kể cả không match
5. **trigger** — Trigger tự động chạy khi có sự kiện INSERT, UPDATE, hoặc DELETE
{{< /spoiler >}}

---

Database là kỹ năng cốt lõi của developer. Nắm vững 14 thuật ngữ này sẽ giúp bạn viết query tốt hơn, thiết kế schema chuẩn hơn, và tự tin discuss database design với team. Keep querying! 🚀
