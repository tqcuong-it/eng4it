---
title: "AWS DynamoDB — Thuật Ngữ NoSQL Database Cho Developer"
date: 2023-01-26
slug: "tu-vung-aws-dynamodb-nosql-database"
description: "Học 15 thuật ngữ tiếng Anh về AWS DynamoDB và NoSQL — từ partition key, GSI đến scan và query, giúp developer đọc docs và thiết kế database hiệu quả."
categories: ["IT English"]
tags: ["aws", "database", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

DynamoDB là dịch vụ NoSQL database phổ biến nhất trên AWS — nhanh, scalable và fully managed. Tuy nhiên, thuật ngữ của DynamoDB khác khá nhiều so với SQL truyền thống. Nếu bạn chuyển từ MySQL/PostgreSQL sang DynamoDB, bài này sẽ giúp bạn làm quen nhanh với "ngôn ngữ" mới.

---

### 🔹 Cấu trúc dữ liệu cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| table | /ˈteɪbəl/ | bảng dữ liệu | Create a DynamoDB **table** to store user profiles. |
| item | /ˈaɪtəm/ | bản ghi, mục dữ liệu | Each **item** in the table represents a single order. |
| attribute | /ˈætrɪbjuːt/ | thuộc tính, trường dữ liệu | The "email" **attribute** is required for every user item. |

### 🔹 Keys & Indexes

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| partition key | /pɑːrˈtɪʃən kiː/ | khóa phân vùng | Use "userId" as the **partition key** for even data distribution. |
| sort key | /sɔːrt kiː/ | khóa sắp xếp | Add a timestamp as the **sort key** to query orders by date. |
| GSI (Global Secondary Index) | /dʒiː ɛs aɪ/ | chỉ mục phụ toàn cục | Create a **GSI** on the email field to query users by email. |
| LSI (Local Secondary Index) | /ɛl ɛs aɪ/ | chỉ mục phụ cục bộ | An **LSI** lets you query with a different sort key on the same partition. |

### 🔹 Hiệu năng & cấu hình

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| throughput | /ˈθruːpʊt/ | thông lượng | Increase the read **throughput** to handle peak traffic. |
| on-demand | /ɒn dɪˈmɑːnd/ | theo nhu cầu | Switch to **on-demand** mode so you don't have to manage capacity manually. |
| TTL (Time to Live) | /tiː tiː ɛl/ | thời gian sống của bản ghi | Set **TTL** to automatically delete expired session records. |
| stream | /striːm/ | luồng sự kiện thay đổi | Enable DynamoDB **streams** to trigger a Lambda function on every update. |

### 🔹 Truy vấn dữ liệu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| query | /ˈkwɪəri/ | truy vấn (theo key) | Use **query** to fetch all orders for a specific user. |
| scan | /skæn/ | quét toàn bộ bảng | Avoid **scan** on large tables — it reads every single item. |
| projection | /prəˈdʒɛkʃən/ | chọn thuộc tính trả về | Use a **projection** expression to return only the name and email fields. |
| conditional expression | /kənˈdɪʃənəl ɪkˈsprɛʃən/ | biểu thức điều kiện | Add a **conditional expression** to update only if the item version matches. |

---

## 💡 Mẹo ghi nhớ

- **Partition key** = "chìa khóa phân loại" — DynamoDB dùng nó để phân tán dữ liệu vào các partition khác nhau.
- **Query** vs **Scan**: Query giống tìm sách theo mục lục (nhanh), Scan giống đọc hết cả thư viện (chậm, tốn tiền).
- **GSI** = "Global" vì nó query được across toàn bộ table, còn **LSI** = "Local" chỉ trong cùng partition.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Each record in a DynamoDB table is called an ___.
2. The ___ determines how DynamoDB distributes data across partitions.
3. Use ___ instead of scan to efficiently retrieve data by key.
4. Set ___ on session items so they are automatically deleted after expiry.
5. Create a ___ if you need to query the table by a non-primary-key field.

{{< spoiler "✅ Đáp án" >}}
1. **item** — Mỗi bản ghi trong DynamoDB table được gọi là item
2. **partition key** — Khóa phân vùng quyết định cách dữ liệu được phân tán
3. **query** — Query truy vấn theo key, hiệu quả hơn scan rất nhiều
4. **TTL** — Time to Live tự động xóa bản ghi hết hạn
5. **GSI** — Global Secondary Index cho phép truy vấn theo field không phải primary key
{{< /spoiler >}}

---

## Tổng kết

DynamoDB có hệ thuật ngữ riêng khác biệt so với SQL database truyền thống. Hiểu rõ **partition key**, **GSI**, và sự khác biệt giữa **query** và **scan** là chìa khóa để thiết kế bảng hiệu quả và tiết kiệm chi phí. Hãy bắt đầu với on-demand mode để thử nghiệm trước khi optimize throughput nhé! 💪
