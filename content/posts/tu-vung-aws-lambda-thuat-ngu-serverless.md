---
title: "AWS Lambda — Thuật Ngữ Serverless Mà Developer Cần Nắm Vững"
date: 2023-01-17
summary: "Học 10+ thuật ngữ AWS Lambda quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-lambda-thuat-ngu-serverless"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về AWS Lambda và Serverless — từ cold start, handler đến concurrency. Kèm ví dụ và bài tập cho dev Việt Nam."
categories: ["IT English"]
tags: ["aws", "cloud-computing", "backend"]
ShowToc: true
TocOpen: true
draft: false
---

**Serverless** đang là xu hướng lớn trong cloud computing, và **AWS Lambda** là service serverless phổ biến nhất. Bạn chỉ cần viết code, không lo quản lý server — nhưng để dùng tốt, bạn cần hiểu đúng các thuật ngữ. Cùng học 14 từ vựng quan trọng nhất nhé! ⚡

---

### 🔹 Cấu trúc Function

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| function | /ˈfʌŋkʃən/ | hàm — đơn vị code chạy trên Lambda | Deploy the **function** that processes image thumbnails to production. |
| handler | /ˈhændlər/ | hàm xử lý chính — entry point | The **handler** receives the event object and returns the response. |
| runtime | /ˈrʌntaɪm/ | môi trường thực thi (Node.js, Python...) | We chose the Python 3.11 **runtime** for our data processing functions. |
| layer | /ˈleɪər/ | lớp — thư viện dùng chung giữa các function | Package shared dependencies into a **layer** to reduce deployment size. |

### 🔹 Kích hoạt & Xử lý

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| trigger | /ˈtrɪɡər/ | sự kiện kích hoạt function | An S3 upload event is configured as the **trigger** for the processing function. |
| event | /ɪˈvɛnt/ | sự kiện — dữ liệu đầu vào | The **event** object contains the request body and query parameters. |
| invocation | /ˌɪnvəˈkeɪʃən/ | lần gọi hàm | Each **invocation** is billed based on execution time and memory used. |
| payload | /ˈpeɪloʊd/ | dữ liệu gửi kèm khi gọi function | Keep the **payload** under 6 MB for synchronous invocations. |

### 🔹 Hiệu năng & Giới hạn

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| cold start | /koʊld stɑːrt/ | khởi động lạnh — lần chạy đầu chậm | A **cold start** can add 1-2 seconds of latency to the first request. |
| concurrency | /kənˈkʌrənsi/ | số lượng thực thi đồng thời | Set reserved **concurrency** to 100 to prevent the function from consuming all available capacity. |
| timeout | /ˈtaɪmaʊt/ | thời gian tối đa cho phép chạy | Increase the **timeout** to 30 seconds for functions that call external APIs. |
| memory allocation | /ˈmɛməri ˌæləˈkeɪʃən/ | dung lượng bộ nhớ được cấp | Raising the **memory allocation** to 512 MB also increases the CPU power proportionally. |

### 🔹 Xử lý lỗi & Cấu hình

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| dead letter queue | /dɛd ˈlɛtər kjuː/ | hàng đợi cho message xử lý thất bại | Route failed events to a **dead letter queue** so we can investigate later. |
| environment variable | /ɪnˈvaɪrənmənt ˈvɛriəbl/ | biến môi trường | Store the database connection string in an **environment variable**, not in code. |

---

## 💡 Mẹo ghi nhớ

- **Cold start** = "khởi động xe buổi sáng lạnh" — lần đầu chạy mất thời gian warm up. Các lần sau (warm start) sẽ nhanh hơn nhiều.
- **Handler** = "người tiếp nhận" — giống receptionist ở quầy lễ tân, nhận request rồi xử lý.
- **Dead letter queue** = "hộp thư chết" — thư không giao được thì bỏ vào đây. Tương tự, event xử lý fail sẽ được chuyển vào DLQ để debug.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The function experienced a ___ because it hadn't been invoked for over 15 minutes.
2. Set the ___ to 60 seconds to avoid the function being killed during long API calls.
3. Store API keys in ___ instead of hardcoding them in the source code.
4. We configured an S3 event as the ___ for the image resizing function.
5. Failed messages are automatically sent to the ___ for manual review.

---

{{< spoiler "✅ Đáp án" >}}
1. **cold start** — Cold start xảy ra khi Lambda phải khởi tạo container mới cho function
2. **timeout** — Timeout mặc định là 3 giây, tối đa có thể set đến 15 phút
3. **environment variables** — Environment variables giúp tách cấu hình khỏi code
4. **trigger** — Trigger kết nối event source với Lambda function
5. **dead letter queue** — DLQ giúp không mất message khi xử lý thất bại
{{< /spoiler >}}

---

## Tổng kết

Lambda là trái tim của serverless architecture trên AWS. Nắm vững 14 thuật ngữ trên giúp bạn hiểu rõ cách Lambda hoạt động, tối ưu hiệu năng, và trao đổi chuyên nghiệp với team. Bài tiếp theo mình sẽ học về AWS RDS — thuật ngữ database trên cloud! 🗄️

---

## 📚 Bài viết liên quan

- [AWS SQS & SNS — Thuật Ngữ Message Queue Cho Developer](/posts/tu-vung-aws-sqs-sns-message-queue/)
- [AWS Route 53 & API Gateway — Thuật Ngữ DNS & API Bằng Tiếng Anh](/posts/tu-vung-aws-route53-api-gateway-dns-api/)
- [AWS VPC — Thuật Ngữ Mạng Đám Mây Mà Developer Không Thể Bỏ Qua](/posts/tu-vung-aws-vpc-thuat-ngu-mang-dam-may/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
