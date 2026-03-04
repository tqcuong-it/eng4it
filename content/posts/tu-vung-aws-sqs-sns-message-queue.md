---
title: "AWS SQS & SNS — Thuật Ngữ Message Queue Cho Developer"
date: 2023-01-25
summary: "Học 10+ thuật ngữ AWS SQS & SNS quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-sqs-sns-message-queue"
description: "Học 13 thuật ngữ tiếng Anh về AWS SQS, SNS và Message Queue — từ queue, dead-letter queue đến fan-out. Dễ hiểu cho developer Việt."
categories: ["IT English"]
tags: ["aws", "cloud-computing", "backend"]
ShowToc: true
TocOpen: true
draft: false
---

Khi hệ thống lớn dần, các service cần "nói chuyện" với nhau mà không phải đợi nhau — đó là lúc **Message Queue** xuất hiện. AWS cung cấp **SQS** (Simple Queue Service) và **SNS** (Simple Notification Service) để giải quyết bài toán này. Nắm vững thuật ngữ messaging sẽ giúp bạn đọc docs AWS nhanh hơn và thiết kế hệ thống distributed tốt hơn.

---

### 🔹 Khái niệm cơ bản về Queue

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| queue | /kjuː/ | hàng đợi tin nhắn | Each microservice reads messages from its own **queue**. |
| message | /ˈmɛsɪdʒ/ | tin nhắn, thông điệp | The order service sends a **message** to the payment queue. |
| polling | /ˈpoʊlɪŋ/ | truy vấn định kỳ | The consumer uses long **polling** to check for new messages. |
| batch | /bætʃ/ | lô, nhóm xử lý cùng lúc | You can receive up to 10 messages in a single **batch**. |

### 🔹 Cấu hình & xử lý lỗi

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| visibility timeout | /ˌvɪzəˈbɪləti ˈtaɪmaʊt/ | thời gian ẩn tin nhắn | Set the **visibility timeout** to 30 seconds so other consumers don't pick up the same message. |
| dead-letter queue | /dɛd ˈlɛtər kjuː/ | hàng đợi chứa tin nhắn lỗi | Messages that fail 3 times are moved to the **dead-letter queue** for investigation. |
| FIFO | /ˈfaɪfoʊ/ | vào trước ra trước | Use a **FIFO** queue to guarantee the order of transactions. |
| retention period | /rɪˈtɛnʃən ˈpɪəriəd/ | thời gian lưu giữ tin nhắn | The default **retention period** for SQS messages is 4 days. |

### 🔹 SNS & mô hình Pub/Sub

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| topic | /ˈtɒpɪk/ | chủ đề (kênh phát tin) | Create an SNS **topic** for order notifications. |
| subscription | /səbˈskrɪpʃən/ | đăng ký nhận tin | Add an email **subscription** to the alert topic. |
| publisher | /ˈpʌblɪʃər/ | bên phát tin nhắn | The API service acts as the **publisher** for all events. |
| subscriber | /səbˈskraɪbər/ | bên nhận tin nhắn | Each **subscriber** receives a copy of the published message. |
| fan-out | /fæn aʊt/ | phân phối tin nhắn đến nhiều nơi | Use SNS-to-SQS **fan-out** to send one event to multiple queues. |

---

## 💡 Mẹo ghi nhớ

- **Queue** đọc giống "cue" — tưởng tượng tin nhắn xếp hàng chờ giống người xếp hàng mua vé.
- **FIFO** = First In, First Out — giống queue ở siêu thị, ai đến trước thì được phục vụ trước.
- **Fan-out** = quạt tỏa ra — một tin nhắn "tỏa" đến nhiều subscribers, giống quạt thổi gió ra nhiều hướng.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Failed messages are automatically sent to the ___ for later analysis.
2. We use long ___ to reduce the number of empty responses from SQS.
3. The SNS ___ distributes order events to multiple services.
4. Each ___ receives a copy of the notification message.
5. Set the ___ to 60 seconds to give the worker enough time to process each message.

{{< spoiler "✅ Đáp án" >}}
1. **dead-letter queue** — Hàng đợi chứa các tin nhắn xử lý thất bại để phân tích sau
2. **polling** — Long polling giúp giảm request rỗng khi lấy tin từ SQS
3. **topic** — SNS topic phân phối sự kiện đến nhiều subscribers
4. **subscriber** — Mỗi subscriber nhận một bản copy của tin nhắn
5. **visibility timeout** — Thời gian ẩn tin nhắn để worker xử lý xong trước khi tin nhắn hiện lại
{{< /spoiler >}}

---

## Tổng kết

SQS và SNS là hai dịch vụ messaging nền tảng của AWS. Hiểu rõ các thuật ngữ như **queue**, **dead-letter queue**, **fan-out** sẽ giúp bạn tự tin hơn khi thiết kế hệ thống distributed và đọc tài liệu AWS. Hãy thử áp dụng ngay vào project tiếp theo nhé! 🚀
