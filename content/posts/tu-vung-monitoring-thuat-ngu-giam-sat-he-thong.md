---
title: "Monitoring & Observability — 15 Thuật Ngữ Giám Sát Hệ Thống Developer Cần Biết"
date: 2023-02-08
summary: "Học 15 thuật ngữ Monitoring & Observability quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-monitoring-thuat-ngu-giam-sat-he-thong"
description: "Học 15 thuật ngữ tiếng Anh về Monitoring & Observability — từ metrics, logs, traces đến SLA, incident và postmortem. Dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["devops", "cloud-computing", "it-english"]
ShowToc: true
TocOpen: true
draft: false
---

Hệ thống chạy tốt hay không, bạn phải **đo lường** được mới biết. Monitoring & Observability là kỹ năng quan trọng giúp bạn phát hiện sự cố sớm, debug nhanh, và giữ service ổn định. Cùng học 15 thuật ngữ quan trọng nhất trong lĩnh vực này nhé! 📊

---

### 🔹 Ba trụ cột Observability

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| metrics | /ˈmɛtrɪks/ | số liệu đo lường (CPU, memory, request count) | We track **metrics** like response time and error rate on every endpoint. |
| logs | /lɒɡz/ | nhật ký hệ thống | Check the application **logs** to find out why the request returned a 500 error. |
| traces | /treɪsɪz/ | dấu vết request xuyên suốt các service | Distributed **traces** show that the delay is in the payment service, not the API gateway. |

### 🔹 Cảnh báo & Dashboard

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| alerting | /əˈlɜːrtɪŋ/ | cảnh báo tự động khi có bất thường | Set up **alerting** to notify the team when error rate exceeds 5%. |
| dashboard | /ˈdæʃbɔːrd/ | bảng điều khiển hiển thị số liệu | The Grafana **dashboard** shows real-time CPU and memory usage across all servers. |
| health check | /hɛlθ tʃɛk/ | kiểm tra tình trạng hoạt động | The load balancer pings the **/health** **check** endpoint every 30 seconds. |

### 🔹 Cam kết & Chỉ tiêu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| SLA | /ˌɛs.ɛl.ˈeɪ/ | Service Level Agreement — cam kết mức dịch vụ | Our **SLA** guarantees 99.9% uptime for enterprise customers. |
| SLO | /ˌɛs.ɛl.ˈoʊ/ | Service Level Objective — mục tiêu nội bộ về chất lượng | We set an **SLO** of 200ms p99 latency for the search API. |
| uptime | /ˈʌptaɪm/ | thời gian hệ thống hoạt động | The service maintained 99.95% **uptime** last quarter. |
| downtime | /ˈdaʊntaɪm/ | thời gian hệ thống ngừng hoạt động | The scheduled **downtime** for maintenance is from 2 AM to 4 AM on Sunday. |

### 🔹 Xử lý sự cố

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| incident | /ˈɪnsɪdənt/ | sự cố ảnh hưởng đến service | We declared a P1 **incident** when the payment system went down. |
| on-call | /ɒn kɔːl/ | trực — sẵn sàng xử lý sự cố | I'm **on-call** this week, so I'll respond to any production alerts. |
| runbook | /ˈrʌnbʊk/ | tài liệu hướng dẫn xử lý sự cố | Follow the **runbook** to restart the service and verify it's healthy. |
| postmortem | /poʊstˈmɔːrtəm/ | báo cáo phân tích sau sự cố | We wrote a **postmortem** to document the root cause and prevent it from happening again. |
| MTTR | /ˌɛm.tiː.tiː.ˈɑːr/ | Mean Time To Recovery — thời gian trung bình khôi phục | Our goal is to keep **MTTR** under 30 minutes for critical incidents. |

---

## 💡 Mẹo ghi nhớ

- **Metrics, Logs, Traces** = ba trụ cột observability. Metrics cho biết "có vấn đề gì?", Logs cho biết "vấn đề xảy ra ở đâu?", Traces cho biết "request đi qua những service nào và bị chậm ở đâu?".
- **SLA vs SLO**: SLA = cam kết với khách hàng (vi phạm phải đền bù). SLO = mục tiêu nội bộ (thường cao hơn SLA để có "buffer"). Ví dụ: SLA 99.9% nhưng SLO 99.95%.
- **Postmortem** nghĩa gốc là "khám nghiệm tử thi" — trong IT là "mổ xẻ" sự cố để tìm nguyên nhân gốc rễ. Không blame ai, chỉ tìm cách cải thiện!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The Grafana ___ shows CPU usage, memory, and error rates in real time.
2. We need to write a ___ after the outage to document what went wrong and how to prevent it.
3. Check the application ___ to find the stack trace of the 500 error.
4. Our ___ with the client guarantees 99.9% availability per month.
5. The engineer ___ received a PagerDuty alert at 3 AM and resolved the issue in 15 minutes.

---

{{< spoiler "✅ Đáp án" >}}
1. **dashboard** — Dashboard hiển thị metrics trực quan giúp team theo dõi hệ thống
2. **postmortem** — Postmortem phân tích nguyên nhân gốc rễ và đề xuất cải thiện
3. **logs** — Logs ghi lại chi tiết mọi sự kiện xảy ra trong hệ thống
4. **SLA** — SLA là cam kết chính thức về mức dịch vụ giữa provider và khách hàng
5. **on-call** — On-call engineer là người trực sẵn sàng xử lý sự cố bất kỳ lúc nào
{{< /spoiler >}}

---

Monitoring & Observability giúp bạn chuyển từ "reactive" sang "proactive" — phát hiện vấn đề trước khi user phàn nàn. Nắm vững 15 thuật ngữ này, bạn sẽ tự tin hơn khi setup monitoring, xử lý incident, và viết postmortem. Stay observable! 📈

---

## 📚 Bài viết liên quan

- [Từ Vựng Kubernetes — Thuật Ngữ K8s Dành Cho Developer](/posts/tu-vung-kubernetes-thuat-ngu-k8s/)
- [AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh](/posts/tu-vung-aws-cloudformation-infrastructure-as-code/)
- [Từ Vựng Docker — Thuật Ngữ Container Mà Developer Cần Biết](/posts/tu-vung-docker-thuat-ngu-container/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
