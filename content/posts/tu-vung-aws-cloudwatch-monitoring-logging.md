---
title: "AWS CloudWatch — Thuật Ngữ Monitoring & Logging Bằng Tiếng Anh"
date: 2023-01-23
summary: "Học 10+ thuật ngữ AWS CloudWatch quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-cloudwatch-monitoring-logging"
description: "Học 11 thuật ngữ tiếng Anh về AWS CloudWatch — metric, alarm, log group, anomaly detection. Dành cho dev Việt làm monitoring."
categories: ["IT English"]
tags: ["aws", "devops", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

**"If you can't measure it, you can't improve it."** — Monitoring là mắt và tai của hệ thống production. AWS CloudWatch là dịch vụ giám sát trung tâm, và hiểu đúng thuật ngữ tiếng Anh sẽ giúp bạn setup alerting, đọc logs, và debug incident nhanh hơn nhiều.

---

## 📚 Bảng Từ Vựng

### 🔹 Metrics & Alarms

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| metric | /ˈmetrɪk/ | chỉ số (dữ liệu đo lường) | The CPU utilization **metric** shows the instance is running at 85% capacity. |
| alarm | /əˈlɑːrm/ | cảnh báo (trigger khi metric vượt ngưỡng) | Set an **alarm** to notify the team when API latency exceeds 500ms. |
| composite alarm | /kəmˈpɑːzɪt əˈlɑːrm/ | cảnh báo tổng hợp (kết hợp nhiều alarm) | The **composite alarm** only fires when both CPU and memory alarms are in ALARM state. |
| anomaly detection | /əˈnɑːməli dɪˈtekʃən/ | phát hiện bất thường (dựa trên ML) | Enable **anomaly detection** on the request count metric to catch unusual traffic patterns. |
| dashboard | /ˈdæʃbɔːrd/ | bảng điều khiển (hiển thị metrics trực quan) | We created a CloudWatch **dashboard** showing real-time metrics for all microservices. |

### 🔹 Logs

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| log group | /lɔːɡ ɡruːp/ | nhóm log (tập hợp log streams) | Each Lambda function writes to its own **log group** in CloudWatch. |
| log stream | /lɔːɡ striːm/ | luồng log (chuỗi sự kiện từ một nguồn) | Each container instance creates a separate **log stream** within the log group. |
| retention | /rɪˈtenʃən/ | thời gian lưu trữ | Set the log **retention** to 30 days to keep costs under control. |
| insight | /ˈɪnsaɪt/ | truy vấn log nâng cao (CloudWatch Logs Insights) | Use **Insights** to query error patterns across millions of log events in seconds. |

### 🔹 Filters & Subscriptions

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| metric filter | /ˈmetrɪk ˈfɪltər/ | bộ lọc chỉ số (tạo metric từ log) | Create a **metric filter** to count the number of "ERROR" messages in the application logs. |
| subscription filter | /səbˈskrɪpʃən ˈfɪltər/ | bộ lọc đăng ký (stream log đến nơi khác) | The **subscription filter** forwards all error logs to the centralized logging platform via Kinesis. |

---

## 💡 Mẹo Ghi Nhớ

- **Metric → Alarm → Action**: Đây là flow cơ bản — metric đo, alarm canh, action phản ứng (gửi SNS, scale, v.v.).
- **Log Group vs Log Stream**: Nghĩ như folder và file — log group là folder, mỗi log stream là một file bên trong.
- **Metric Filter = "biến log thành số"**: Bạn có hàng triệu dòng log, metric filter đếm pattern cụ thể và biến thành metric để alarm theo dõi.

---

## 📝 Bài Tập

**Điền từ thích hợp vào chỗ trống:**

1. Set an ___ to notify the on-call engineer when error rate exceeds 5%.
2. Each Lambda function writes logs to its own ___ ___ in CloudWatch.
3. Set the log ___ to 30 days to avoid unnecessary storage costs.
4. Create a ___ ___ to count the number of timeout errors in the application logs.
5. The CloudWatch ___ shows real-time CPU, memory, and latency across all services.

{{< spoiler "✅ Đáp án" >}}
1. **alarm** — Alarm trigger khi metric vượt ngưỡng đã set
2. **log group** — Mỗi Lambda function có log group riêng
3. **retention** — Thời gian lưu giữ log, ảnh hưởng trực tiếp đến chi phí
4. **metric filter** — Tạo custom metric từ log pattern
5. **dashboard** — Bảng điều khiển trực quan cho monitoring
{{< /spoiler >}}

---

## Tổng Kết

Monitoring không phải "nice-to-have" — nó là **must-have** cho bất kỳ hệ thống production nào. 11 thuật ngữ CloudWatch trên sẽ giúp bạn setup observability stack, debug incident, và communicate hiệu quả khi on-call. Remember: **"No metrics, no alerts, no sleep"** 📊🔔

---

## 📚 Bài viết liên quan

- [AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh](/posts/tu-vung-aws-cloudformation-infrastructure-as-code/)
- [Cloud Computing Cơ Bản — Thuật Ngữ Đám Mây Cho Developer](/posts/tu-vung-cloud-computing-co-ban/)
- [AWS ECS & EKS — Thuật Ngữ Container & Kubernetes Bằng Tiếng Anh](/posts/tu-vung-aws-ecs-eks-container-kubernetes/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)

---

### 💡 Mẹo học từ vựng cloud computing hiệu quả

- **Flashcard:** Tạo flashcard với Anki hoặc Quizlet cho các từ vựng trong bài, mỗi ngày ôn 10-15 từ để nhớ lâu
- **Ngữ cảnh thực tế:** Đọc thêm AWS, Azure, GCP để thấy từ vựng được sử dụng trong context thực tế
- **Viết câu:** Với mỗi từ mới, hãy viết 1-2 câu ví dụ liên quan đến project hoặc công việc đang làm
- **Nói to:** Luyện phát âm theo IPA, đọc to các câu ví dụ để cải thiện cả pronunciation và memory retention
- **Nhóm từ:** Gom các từ theo chủ đề con (ví dụ: verbs, nouns, adjectives) để dễ hệ thống hóa kiến thức
- **Review định kỳ:** Áp dụng spaced repetition — ôn lại sau 1 ngày, 3 ngày, 7 ngày, 30 ngày để chuyển từ short-term sang long-term memory
- **Thực hành ngay:** Cố gắng sử dụng ít nhất 3-5 từ mới trong standup meeting, code review, hoặc technical discussion hàng ngày
