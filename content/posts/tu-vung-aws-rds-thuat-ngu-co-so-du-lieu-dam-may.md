---
title: "AWS RDS — Thuật Ngữ Cơ Sở Dữ Liệu Đám Mây Cho Developer"
date: 2023-01-18
summary: "Học 10+ thuật ngữ AWS RDS quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-rds-thuat-ngu-co-so-du-lieu-dam-may"
description: "Học 12 thuật ngữ tiếng Anh quan trọng về AWS RDS — từ replica, snapshot đến multi-AZ. Kèm ví dụ thực tế và bài tập cho developer Việt Nam."
categories: ["IT English"]
tags: ["aws", "database", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

**RDS (Relational Database Service)** giúp bạn chạy MySQL, PostgreSQL, SQL Server... trên cloud mà không cần quản lý server. Đây là service mà hầu hết mọi project đều dùng. Hiểu đúng thuật ngữ RDS sẽ giúp bạn vận hành database ổn định và communicate rõ ràng với team! 🗄️

---

### 🔹 Khái niệm cốt lõi

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| instance | /ˈɪnstəns/ | phiên bản database đang chạy | Upgrade the RDS **instance** to db.r5.large for better performance. |
| endpoint | /ˈɛndpɔɪnt/ | địa chỉ kết nối đến database | Update the application config with the new database **endpoint**. |
| parameter group | /pəˈræmɪtər ɡruːp/ | nhóm cấu hình database | Modify the **parameter group** to increase max_connections to 500. |

### 🔹 Sao lưu & Phục hồi

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| snapshot | /ˈsnæpʃɒt/ | bản chụp nhanh toàn bộ database | Take a manual **snapshot** before running the migration script. |
| backup window | /ˈbækʌp ˈwɪndoʊ/ | khung giờ sao lưu tự động | Set the **backup window** to 3:00-4:00 AM when traffic is lowest. |
| encryption at rest | /ɪnˈkrɪpʃən æt rɛst/ | mã hóa dữ liệu khi lưu trữ | Enable **encryption at rest** to comply with the security audit requirements. |

### 🔹 Khả dụng cao (High Availability)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| multi-AZ | /ˌmʌlti eɪ ˈzɛd/ | triển khai đa vùng khả dụng | Enable **multi-AZ** deployment so the database automatically fails over to the standby. |
| failover | /ˈfeɪloʊvər/ | chuyển đổi dự phòng khi sự cố | The **failover** to the standby instance completed in under 60 seconds. |
| read replica | /riːd ˈrɛplɪkə/ | bản sao chỉ đọc | Create a **read replica** to offload reporting queries from the primary database. |
| replica | /ˈrɛplɪkə/ | bản sao database | We have three **replicas** across different regions for disaster recovery. |

### 🔹 Bảo trì & Mở rộng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| maintenance window | /ˈmeɪntənəns ˈwɪndoʊ/ | khung giờ bảo trì tự động | AWS applies minor patches during the scheduled **maintenance window**. |
| storage autoscaling | /ˈstɔːrɪdʒ ˈɔːtoʊˌskeɪlɪŋ/ | tự động tăng dung lượng lưu trữ | Enable **storage autoscaling** so the disk grows automatically when it reaches 80% capacity. |

---

## 💡 Mẹo ghi nhớ

- **Snapshot** = "chụp ảnh" database tại một thời điểm. Giống chụp ảnh màn hình — bạn có thể quay lại bất cứ lúc nào.
- **Multi-AZ** = đặt 2 database ở 2 phòng server khác nhau. Phòng A cháy thì phòng B tiếp quản ngay (failover).
- **Read replica** = "bản photo" chỉ để đọc. Bản gốc (primary) xử lý write, bản photo xử lý read — giảm tải cho bản gốc.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Always take a ___ of the database before performing a major schema change.
2. Enable ___ deployment to ensure automatic failover during outages.
3. Use a ___ to handle heavy read queries without affecting the primary database.
4. The application connects to the database using the ___ provided by AWS.
5. AWS applies security patches during the configured ___.

---

{{< spoiler "✅ Đáp án" >}}
1. **snapshot** — Snapshot cho phép restore database về đúng thời điểm đã chụp
2. **multi-AZ** — Multi-AZ tạo bản standby ở AZ khác, tự động failover khi có sự cố
3. **read replica** — Read replica giảm tải cho primary bằng cách xử lý các query đọc
4. **endpoint** — Endpoint là DNS address để application kết nối đến RDS instance
5. **maintenance window** — Maintenance window là khung giờ AWS thực hiện patching tự động
{{< /spoiler >}}

---

## Tổng kết

RDS giúp bạn vận hành database trên cloud dễ dàng hơn nhiều so với tự quản lý. 12 thuật ngữ trên là nền tảng để bạn hiểu cách RDS hoạt động, đọc docs, và troubleshoot hiệu quả. Bài tiếp theo mình sẽ học về AWS VPC — thuật ngữ mạng đám mây! 🌐
