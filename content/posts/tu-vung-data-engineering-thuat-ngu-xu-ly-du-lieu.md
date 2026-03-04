---
title: "Data Engineering — 12 Thuật Ngữ Xử Lý Dữ Liệu Developer Cần Biết"
date: 2023-02-16
summary: "Học 12 thuật ngữ Data Engineering quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-data-engineering-thuat-ngu-xu-ly-du-lieu"
description: "Học 12 thuật ngữ tiếng Anh về Data Engineering — từ ETL, pipeline, data lake đến stream processing, partitioning và data lineage."
categories: ["IT English"]
tags: ["database", "backend", "data", "career"]
ShowToc: true
TocOpen: true
draft: false
---

Data is the new oil — nhưng dầu thô thì cần lọc. Data Engineering là nghệ thuật thu thập, xử lý và lưu trữ dữ liệu ở quy mô lớn. Dù bạn là backend hay fullstack, hiểu các thuật ngữ data engineering giúp bạn thiết kế hệ thống xử lý dữ liệu tốt hơn. Let's explore! 🛢️

---

### 🔹 Luồng xử lý dữ liệu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| ETL | /ˌiːtiːˈɛl/ | Extract-Transform-Load — quy trình trích xuất, biến đổi và nạp dữ liệu | The nightly **ETL** job extracts data from 5 sources, transforms it, and loads into the warehouse. |
| pipeline | /ˈpaɪplaɪn/ | đường ống dữ liệu — chuỗi các bước xử lý tự động | The data **pipeline** processes 10 million events per hour from Kafka to BigQuery. |
| ingestion | /ɪnˈdʒɛstʃən/ | nạp dữ liệu — đưa raw data vào hệ thống | The **ingestion** layer collects clickstream data from the website in real time. |
| transformation | /ˌtrænsfərˈmeɪʃən/ | biến đổi dữ liệu — chuyển đổi format hoặc cấu trúc | During **transformation**, we clean null values and convert timestamps to UTC. |

### 🔹 Lưu trữ dữ liệu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| data lake | /ˈdeɪtə leɪk/ | hồ dữ liệu — lưu trữ dữ liệu thô ở mọi format | Raw JSON logs are stored in the **data lake** on S3 before being processed. |
| data warehouse | /ˈdeɪtə ˈwɛrhaʊs/ | kho dữ liệu — lưu trữ dữ liệu đã xử lý, tối ưu cho phân tích | The analytics team queries the **data warehouse** to generate monthly revenue reports. |
| schema | /ˈskiːmə/ | lược đồ — cấu trúc định nghĩa format dữ liệu | Define the **schema** before ingestion to ensure consistent data types across tables. |
| partitioning | /pɑːrˈtɪʃənɪŋ/ | phân vùng — chia dữ liệu thành phần nhỏ để query nhanh hơn | We use date-based **partitioning** so queries only scan relevant time ranges. |

### 🔹 Xử lý & Quản trị

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| batch processing | /bætʃ ˈprɑːsɛsɪŋ/ | xử lý theo lô — chạy trên tập dữ liệu lớn theo lịch | The **batch processing** job runs every night at 2 AM to aggregate daily metrics. |
| stream processing | /striːm ˈprɑːsɛsɪŋ/ | xử lý luồng — xử lý dữ liệu ngay khi nó đến | We use Apache Flink for **stream processing** to detect fraud in real time. |
| catalog | /ˈkætəlɔːɡ/ | danh mục dữ liệu — nơi quản lý metadata của toàn bộ dataset | The data **catalog** helps analysts discover which tables contain customer information. |
| lineage | /ˈlɪniɪdʒ/ | dòng dõi dữ liệu — theo dõi nguồn gốc và quá trình biến đổi | Data **lineage** shows that the revenue column originates from the payments table after three transformations. |

---

## 💡 Mẹo ghi nhớ

- **Data Lake vs Data Warehouse**: Lake = hồ nước tự nhiên (data thô, mọi format, rẻ). Warehouse = kho hàng ngăn nắp (data đã clean, có schema, tối ưu cho query). Thường dùng cả hai: lake → transform → warehouse.
- **Batch vs Stream**: Batch = giặt đồ theo lịch (gom lại rồi giặt). Stream = nước chảy liên tục (xử lý ngay khi đến). Chọn batch khi không cần real-time, stream khi cần phản ứng nhanh.
- **ETL**: Nhớ theo thứ tự: **E**xtract (lấy ra) → **T**ransform (biến đổi) → **L**oad (nạp vào). Đây là flow cơ bản nhất của mọi data pipeline.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The nightly ___ job extracts sales data from the CRM and loads it into the warehouse.
2. Raw logs are stored in the ___ ___ on S3 before any processing happens.
3. We use date-based ___ to speed up queries on the 10TB events table.
4. The ___ ___ pipeline using Kafka processes transactions in real time to detect anomalies.
5. Check the data ___ to trace where the revenue numbers come from.

---

{{< spoiler "✅ Đáp án" >}}
1. **ETL** — ETL là quy trình Extract-Transform-Load xử lý dữ liệu theo lô
2. **data lake** — Data lake lưu trữ dữ liệu thô ở mọi format với chi phí thấp
3. **partitioning** — Partitioning chia dữ liệu thành phần nhỏ để query chỉ scan phần cần thiết
4. **stream processing** — Stream processing xử lý dữ liệu ngay khi nó đến hệ thống
5. **lineage** — Data lineage cho biết nguồn gốc và quá trình biến đổi của dữ liệu
{{< /spoiler >}}

---

Data Engineering là nền tảng của mọi hệ thống analytics và AI. Nắm vững 12 thuật ngữ này giúp bạn thiết kế pipeline dữ liệu hiệu quả và giao tiếp tốt hơn với data team. Keep building! 🏗️
