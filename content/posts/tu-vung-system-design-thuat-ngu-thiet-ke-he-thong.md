---
title: "System Design — 13 Thuật Ngữ Thiết Kế Hệ Thống Developer Phải Biết"
date: 2023-02-13
slug: "tu-vung-system-design-thuat-ngu-thiet-ke-he-thong"
description: "Học 13 thuật ngữ tiếng Anh quan trọng về System Design — từ scalability, CAP theorem, sharding đến CDN, message queue và load balancing. Dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["backend"]
ShowToc: true
TocOpen: true
draft: false
---

System Design là chủ đề "khó nhằn" nhất trong phỏng vấn senior — và cũng là kiến thức cốt lõi để xây dựng hệ thống phục vụ hàng triệu người dùng. Hiểu thuật ngữ system design bằng tiếng Anh giúp bạn tự tin khi đọc engineering blog của Netflix, Uber, hay khi ngồi vào bàn phỏng vấn. Ready? 🧠

---

### 🔹 CAP & Core Properties

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| scalability | /ˌskeɪləˈbɪləti/ | khả năng mở rộng hệ thống khi tải tăng | Horizontal **scalability** lets us add more servers to handle traffic spikes during Black Friday. |
| availability | /əˌveɪləˈbɪləti/ | tính sẵn sàng — hệ thống luôn hoạt động | Our SLA guarantees 99.99% **availability**, meaning less than 53 minutes of downtime per year. |
| consistency | /kənˈsɪstənsi/ | tính nhất quán — mọi node trả về cùng dữ liệu | Strong **consistency** ensures all users see the same account balance at the same time. |
| partition tolerance | /pɑːrˈtɪʃən ˈtɒlərəns/ | chịu lỗi phân vùng — hoạt động dù mạng bị chia cắt | **Partition tolerance** means the system continues to operate even if communication between nodes is lost. |
| CAP theorem | /kæp ˈθɪərəm/ | định lý CAP — chỉ đạt được 2 trong 3: C, A, P | According to the **CAP theorem**, our distributed database must choose between consistency and availability during a network partition. |

### 🔹 Data Distribution

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| sharding | /ˈʃɑːrdɪŋ/ | phân mảnh dữ liệu — chia DB thành nhiều phần nhỏ | We use **sharding** by user ID to distribute data across 8 database servers. |
| replication | /ˌrɛplɪˈkeɪʃən/ | sao chép dữ liệu — nhân bản DB để tăng độ tin cậy | Database **replication** keeps a standby copy that takes over if the primary server fails. |
| database indexing | /ˈdeɪtəbeɪs ˈɪndɛksɪŋ/ | đánh chỉ mục — tăng tốc truy vấn database | Adding **database indexing** on the email column reduced the query time from 3 seconds to 10 milliseconds. |

### 🔹 Performance & Caching

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| caching | /ˈkæʃɪŋ/ | bộ nhớ đệm — lưu tạm kết quả để phục vụ nhanh hơn | Add a Redis **caching** layer to serve popular product pages without hitting the database. |
| CDN | /ˌsiː.diː.ˈɛn/ | Content Delivery Network — mạng phân phối nội dung toàn cầu | Serve static assets through a **CDN** so users in Asia get fast load times from nearby edge servers. |
| load balancing | /loʊd ˈbælənsɪŋ/ | cân bằng tải — phân phối request đều giữa các server | Use **load balancing** with round-robin to distribute traffic evenly across 4 application servers. |

### 🔹 Async Communication

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| message queue | /ˈmɛsɪdʒ kjuː/ | hàng đợi tin nhắn — giao tiếp bất đồng bộ giữa services | Send order events to a **message queue** so the notification service processes them independently. |
| rate limiting | /reɪt ˈlɪmɪtɪŋ/ | giới hạn tần suất — kiểm soát số request mỗi giây | Implement **rate limiting** at the API gateway to prevent a single client from overwhelming the system. |

---

## 💡 Mẹo ghi nhớ

- **CAP Theorem** = "chọn 2 bỏ 1": Consistency, Availability, Partition tolerance. Trong distributed system, khi mạng lỗi (P luôn xảy ra), bạn phải chọn C hoặc A. MongoDB chọn CP, Cassandra chọn AP.
- **Sharding vs Replication**: Sharding = chia pizza cho nhiều bàn (mỗi bàn một phần khác nhau). Replication = photocopy pizza (mỗi bàn một bản giống hệt). Sharding để scale, replication để backup.
- **CDN** = chuỗi cửa hàng tiện lợi: Thay vì mua hàng ở kho trung tâm (origin server), bạn mua ở cửa hàng gần nhà (edge server). Nhanh hơn nhiều!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. We improved ___ by adding more servers behind a load balancer to handle peak traffic.
2. The ___ ___ states that a distributed system can only guarantee two out of three: consistency, availability, and partition tolerance.
3. Use ___ by user region to split the database across multiple servers.
4. Deploy a ___ to serve images and CSS files from edge servers closest to the user.
5. Send background jobs to a ___ ___ instead of processing them in the API request cycle.

{{< spoiler "✅ Đáp án" >}}
1. **scalability** — Khả năng mở rộng bằng cách thêm server
2. **CAP theorem** — Định lý nền tảng của distributed systems
3. **sharding** — Phân mảnh dữ liệu theo region để phân tải
4. **CDN** — Mạng phân phối nội dung từ edge server gần user
5. **message queue** — Hàng đợi xử lý bất đồng bộ giữa các service
{{< /spoiler >}}

---

## 🎯 Tổng kết

System Design là kỹ năng phân biệt junior và senior developer. 13 thuật ngữ này là foundation cho mọi cuộc thảo luận thiết kế hệ thống — từ database scaling đến global content delivery. Nắm vững chúng, bạn sẽ sẵn sàng cho bất kỳ system design interview nào! 💪
