---
title: "40 Từ Vựng Database cho Backend Developer — Bảng EN-VN Song Ngữ"
slug: "40-tu-vung-database-cho-backend-developer"
date: 2026-03-10
summary: "Tổng hợp 40 từ vựng Database quan trọng nhất cho Backend Developer — phiên âm IPA, giải thích tiếng Việt, ví dụ SQL thực tế."
description: "40 từ vựng Database tiếng Anh cho Backend Developer Việt Nam. Bảng EN-VN song ngữ, phiên âm IPA, ví dụ SQL thực tế — từ query, index, transaction đến normalization, sharding."
tags: ["database", "sql", "backend", "vocabulary", "it-english", "developer"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Là Backend Developer, bạn làm việc với **database mỗi ngày** — viết query, thiết kế schema, tối ưu performance. Nhưng khi đọc documentation của PostgreSQL, MySQL, hay MongoDB, bạn có thường xuyên gặp những thuật ngữ mà **hiểu mơ hồ hoặc phải dừng lại tra Google** không?

Từ "query" thì ai cũng biết, nhưng **"idempotent migration"**, **"write-ahead log"**, hay **"eventual consistency"** thì sao? Những thuật ngữ này xuất hiện liên tục trong docs, blog posts, và đặc biệt trong **technical discussion** với team quốc tế.

Bài viết này tổng hợp **40 từ vựng Database** quan trọng nhất, chia theo nhóm:
- Từ vựng cơ bản (CRUD & Query)
- Schema & Data Modeling
- Performance & Optimization
- Transaction & Consistency
- Advanced & Distributed Database

---

## 1. Từ vựng cơ bản — CRUD & Query

Nhóm từ này bạn dùng **hàng ngày**, nhưng hãy chắc chắn bạn phát âm đúng và hiểu chính xác:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 1 | **Query** | /ˈkwɪə.ri/ | Truy vấn — câu lệnh yêu cầu dữ liệu | *"This query returns all active users."* |
| 2 | **Schema** | /ˈskiː.mə/ | Lược đồ — cấu trúc bảng & quan hệ | *"We need to update the schema before migration."* |
| 3 | **Record** | /ˈrek.ɔːd/ | Bản ghi — một hàng dữ liệu trong bảng | *"Each record represents a single order."* |
| 4 | **Column** | /ˈkɒl.əm/ | Cột — trường dữ liệu trong bảng | *"Add a `created_at` column to the users table."* |
| 5 | **Row** | /raʊ/ | Hàng — một bản ghi đầy đủ | *"This table has over 10 million rows."* |
| 6 | **Insert** | /ɪnˈsɜːt/ | Chèn — thêm dữ liệu mới | *"Insert a new record into the orders table."* |
| 7 | **Update** | /ʌpˈdeɪt/ | Cập nhật — thay đổi dữ liệu hiện có | *"Update the status to 'shipped' where order_id = 123."* |
| 8 | **Delete** | /dɪˈliːt/ | Xóa — loại bỏ dữ liệu | *"Soft delete is preferred over hard delete in production."* |

---

## 2. Schema & Data Modeling

Khi thiết kế database, bạn sẽ gặp những thuật ngữ này trong **mọi cuộc thảo luận**:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 9 | **Primary Key** | /ˈpraɪ.mə.ri kiː/ | Khóa chính — định danh duy nhất cho mỗi bản ghi | *"Use UUID as the primary key for distributed systems."* |
| 10 | **Foreign Key** | /ˈfɒr.ən kiː/ | Khóa ngoại — tham chiếu đến bảng khác | *"The `user_id` foreign key references the users table."* |
| 11 | **Index** | /ˈɪn.deks/ | Chỉ mục — cấu trúc tăng tốc truy vấn | *"Create an index on the email column for faster lookups."* |
| 12 | **Constraint** | /kənˈstreɪnt/ | Ràng buộc — quy tắc đảm bảo tính toàn vẹn | *"Add a NOT NULL constraint to the username field."* |
| 13 | **Normalization** | /ˌnɔː.mə.laɪˈzeɪ.ʃən/ | Chuẩn hóa — tách bảng để giảm trùng lặp | *"Third normal form (3NF) eliminates transitive dependencies."* |
| 14 | **Denormalization** | /diːˌnɔː.mə.laɪˈzeɪ.ʃən/ | Phi chuẩn hóa — gộp bảng để tăng tốc đọc | *"We denormalized the user profile for read performance."* |
| 15 | **Relationship** | /rɪˈleɪ.ʃən.ʃɪp/ | Mối quan hệ giữa các bảng | *"There's a many-to-many relationship between users and roles."* |
| 16 | **Migration** | /maɪˈɡreɪ.ʃən/ | Di chuyển — thay đổi cấu trúc DB theo phiên bản | *"Run the migration to add the new payments table."* |
| 17 | **Seed** | /siːd/ | Dữ liệu mẫu — data khởi tạo ban đầu | *"Seed the database with test users for development."* |
| 18 | **Nullable** | /ˈnʌl.ə.bəl/ | Cho phép null — trường có thể trống | *"The `middle_name` column is nullable."* |

---

## 3. Performance & Optimization

Đây là nhóm từ **quan trọng nhất** khi bạn cần tối ưu database:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 19 | **Query Plan** | /ˈkwɪə.ri plæn/ | Kế hoạch truy vấn — cách DB thực thi query | *"Use EXPLAIN to view the query plan."* |
| 20 | **Full Table Scan** | /fʊl ˈteɪ.bəl skæn/ | Quét toàn bộ bảng — chậm với bảng lớn | *"This query causes a full table scan — add an index."* |
| 21 | **Throughput** | /ˈθruː.pʊt/ | Thông lượng — số truy vấn xử lý được/giây | *"The database handles 10,000 queries per second throughput."* |
| 22 | **Latency** | /ˈleɪ.tən.si/ | Độ trễ — thời gian phản hồi mỗi truy vấn | *"P99 latency for read queries is under 5ms."* |
| 23 | **Connection Pool** | /kəˈnek.ʃən puːl/ | Bể kết nối — tái sử dụng kết nối DB | *"Set the connection pool size to 20 for this service."* |
| 24 | **Caching** | /ˈkæʃ.ɪŋ/ | Bộ nhớ đệm — lưu kết quả để không query lại | *"Use Redis caching to reduce database load."* |
| 25 | **Pagination** | /ˌpædʒ.ɪˈneɪ.ʃən/ | Phân trang — chia kết quả thành nhiều trang | *"Implement cursor-based pagination for large datasets."* |
| 26 | **Partitioning** | /pɑːˈtɪʃ.ən.ɪŋ/ | Phân vùng — chia bảng lớn thành phần nhỏ | *"Partition the logs table by month for better performance."* |
| 27 | **Replication** | /ˌrep.lɪˈkeɪ.ʃən/ | Sao chép — nhân bản dữ liệu sang server khác | *"Set up read replicas using asynchronous replication."* |

---

## 4. Transaction & Consistency

Nhóm từ này **xuất hiện trong mọi cuộc phỏng vấn Backend**:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 28 | **Transaction** | /trænˈzæk.ʃən/ | Giao dịch — nhóm thao tác thực hiện nguyên tử | *"Wrap the transfer in a transaction to ensure atomicity."* |
| 29 | **ACID** | /ˈæs.ɪd/ | Atomicity, Consistency, Isolation, Durability | *"PostgreSQL is fully ACID-compliant."* |
| 30 | **Commit** | /kəˈmɪt/ | Xác nhận — lưu thay đổi vĩnh viễn | *"Commit the transaction after all inserts succeed."* |
| 31 | **Rollback** | /ˈrəʊl.bæk/ | Hoàn tác — hủy mọi thay đổi trong transaction | *"Rollback if any step fails to maintain data integrity."* |
| 32 | **Deadlock** | /ˈded.lɒk/ | Khóa chết — hai transaction chờ nhau vô hạn | *"A deadlock occurred — one transaction was automatically rolled back."* |
| 33 | **Isolation Level** | /ˌaɪ.səˈleɪ.ʃən ˈlev.əl/ | Mức cô lập — quy tắc transaction thấy data của nhau | *"Use READ COMMITTED isolation level for this service."* |
| 34 | **Locking** | /ˈlɒk.ɪŋ/ | Khóa — ngăn truy cập đồng thời vào cùng dữ liệu | *"Row-level locking is more efficient than table-level locking."* |

---

## 5. Advanced & Distributed Database

Khi hệ thống lớn lên, bạn sẽ cần biết những thuật ngữ **distributed systems**:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 35 | **Sharding** | /ˈʃɑːd.ɪŋ/ | Phân mảnh — chia dữ liệu ra nhiều DB server | *"Shard the users table by region for horizontal scaling."* |
| 36 | **Eventual Consistency** | /ɪˌven.tʃu.əl kənˈsɪs.tən.si/ | Nhất quán cuối cùng — data đồng bộ sau một khoảng thời gian | *"DynamoDB uses eventual consistency by default."* |
| 37 | **Write-Ahead Log (WAL)** | /raɪt əˈhed lɒɡ/ | Nhật ký ghi trước — ghi log trước khi ghi data | *"PostgreSQL uses WAL for crash recovery."* |
| 38 | **Failover** | /ˈfeɪl.əʊ.vər/ | Chuyển đổi dự phòng — tự động chuyển sang server backup | *"Automatic failover ensures zero downtime during outages."* |
| 39 | **Backup & Restore** | /ˈbæk.ʌp ənd rɪˈstɔːr/ | Sao lưu & phục hồi | *"Schedule daily backups and test restore procedures monthly."* |
| 40 | **ORM** | /ˌəʊ.ɑːrˈem/ | Object-Relational Mapping — ánh xạ object ↔ bảng | *"Use an ORM like Sequelize or Prisma for type-safe queries."* |

---

## Ví dụ thực tế — Đoạn hội thoại trong Technical Discussion

> **Tech Lead:** "The orders query is hitting a **full table scan**. We need to add a **composite index** on `user_id` and `created_at`."
>
> **You:** "Got it. Should I also look into **partitioning** the table by month? It has over 50 million **rows** now."
>
> **Tech Lead:** "Good idea. Also, make sure the **migration** is **idempotent** — we don't want it to fail if someone runs it twice."
>
> **You:** "I'll wrap it in a **transaction** with a check-before-create pattern. I'll test the **query plan** with EXPLAIN after deploying."

---

## Mẫu SQL Comment bằng tiếng Anh

Khi viết SQL, comment rõ ràng bằng tiếng Anh giúp team quốc tế hiểu code của bạn:

```sql
-- Create index to optimize user lookup by email
-- This eliminates full table scan on the users table
CREATE INDEX idx_users_email ON users(email);

-- Add foreign key constraint to maintain referential integrity
ALTER TABLE orders
ADD CONSTRAINT fk_orders_user
FOREIGN KEY (user_id) REFERENCES users(id);

-- Partition logs table by month for improved query performance
-- Old partitions can be archived or dropped independently
CREATE TABLE logs_2026_03 PARTITION OF logs
FOR VALUES FROM ('2026-03-01') TO ('2026-04-01');
```

---

## Practice — Bài tập

### Bài 1: Điền từ vào chỗ trống

1. Use `EXPLAIN ANALYZE` to view the _______ and identify slow queries.
2. A _______ ensures that all operations in a group either succeed or fail together.
3. _______ splits data across multiple database servers for horizontal scaling.
4. Adding an _______ on frequently queried columns dramatically improves read performance.
5. _______ means data across replicas will become consistent after a short delay.

### Bài 2: Dịch sang tiếng Anh

1. "Thêm ràng buộc NOT NULL vào cột email"
2. "Chạy migration để tạo bảng payments mới"
3. "Cấu hình connection pool tối đa 30 kết nối"
4. "Bảng orders cần được phân vùng theo tháng"

### Đáp án

**Bài 1:** 1. query plan  2. transaction  3. Sharding  4. index  5. Eventual consistency

**Bài 2:**
1. "Add a NOT NULL constraint to the email column."
2. "Run the migration to create the new payments table."
3. "Configure the connection pool with a maximum of 30 connections."
4. "The orders table needs to be partitioned by month."

---

## Kết luận

40 từ vựng trên là **nền tảng** để bạn đọc hiểu documentation, tham gia technical discussion, và viết SQL comments chuyên nghiệp. Đừng chỉ đọc — hãy **dùng chúng ngay** trong code review, PR description, và cuộc họp hàng ngày.

**Mẹo học hiệu quả:**
- Đọc documentation của PostgreSQL/MySQL bằng tiếng Anh mỗi ngày 15 phút
- Viết SQL comment bằng tiếng Anh thay vì tiếng Việt
- Khi gặp từ mới trong error message, tra IPA và luyện phát âm ngay

💪 **Backend Developer giỏi không chỉ viết query tốt — mà còn giao tiếp tốt bằng tiếng Anh!**
