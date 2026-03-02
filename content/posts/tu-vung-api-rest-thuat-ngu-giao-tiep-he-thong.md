---
title: "API & REST — 15 Thuật Ngữ Giao Tiếp Hệ Thống Developer Cần Nắm"
date: 2023-02-06
slug: "tu-vung-api-rest-thuat-ngu-giao-tiep-he-thong"
description: "Học 15 thuật ngữ tiếng Anh quan trọng về API & REST — từ endpoint, request, response đến webhook và GraphQL. Giải thích kèm ví dụ thực tế cho developer."
categories: ["IT English"]
tags: ["backend"]
ShowToc: true
TocOpen: true
draft: false
---

Trong thế giới microservices và web hiện đại, **API** là cách các hệ thống "nói chuyện" với nhau. Dù bạn build frontend gọi API hay backend expose API, hiểu thuật ngữ bằng tiếng Anh là bắt buộc. Cùng học 15 từ vựng quan trọng nhất nhé! 🔌

---

### 🔹 Cơ bản về Request/Response

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| endpoint | /ˈɛndpɔɪnt/ | điểm truy cập API | The `/api/users` **endpoint** returns a list of all registered users. |
| request | /rɪˈkwɛst/ | yêu cầu gửi đến server | The client sends a GET **request** to fetch the user profile. |
| response | /rɪˈspɒns/ | phản hồi từ server | The **response** includes a 200 status code and the JSON data. |
| method | /ˈmɛθəd/ | phương thức HTTP (GET, POST, PUT, DELETE) | Use the POST **method** to create a new resource on the server. |

### 🔹 Cấu trúc dữ liệu truyền tải

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| header | /ˈhɛdər/ | phần đầu request/response chứa metadata | Set the `Authorization` **header** to include the Bearer token. |
| body | /ˈbɒdi/ | phần thân chứa dữ liệu chính | The POST request **body** contains the user's name and email in JSON format. |
| payload | /ˈpeɪloʊd/ | dữ liệu chính được truyền đi | Keep the **payload** small to reduce response time for mobile clients. |
| middleware | /ˈmɪdəlwɛr/ | lớp xử lý trung gian | The authentication **middleware** checks the token before reaching the controller. |

### 🔹 Bảo mật & Kiểm soát

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| authentication | /ɔːˌθɛntɪˈkeɪʃən/ | xác thực danh tính | The API requires **authentication** via an API key or OAuth token. |
| rate limiting | /reɪt ˈlɪmɪtɪŋ/ | giới hạn số request trong thời gian nhất định | We set **rate limiting** to 100 requests per minute per user to prevent abuse. |
| pagination | /ˌpædʒɪˈneɪʃən/ | phân trang kết quả | Use **pagination** with `page` and `limit` params to avoid returning 10,000 rows at once. |
| versioning | /ˈvɜːrʒənɪŋ/ | quản lý phiên bản API | We use URL-based **versioning** like `/api/v2/users` to maintain backward compatibility. |

### 🔹 Mở rộng & Tích hợp

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| webhook | /ˈwɛbhʊk/ | callback URL nhận thông báo tự động | Stripe sends a **webhook** to our server whenever a payment is completed. |
| GraphQL | /ɡræf.kjuː.ˈɛl/ | ngôn ngữ truy vấn API linh hoạt | With **GraphQL**, the client can request exactly the fields it needs. |
| SDK | /ˌɛs.diː.ˈkeɪ/ | Software Development Kit — bộ công cụ phát triển | Install the AWS **SDK** to interact with S3 and DynamoDB from your Node.js app. |

---

## 💡 Mẹo ghi nhớ

- **Endpoint** nghĩ như địa chỉ nhà — mỗi endpoint là một "địa chỉ" cụ thể trên server mà bạn gửi request đến.
- **Header vs Body**: Header = thông tin trên bao thư (người gửi, loại thư). Body = nội dung bên trong thư. Header mang metadata, body mang data thật.
- **Webhook vs API call**: API call = bạn gọi điện hỏi "có gì mới không?". Webhook = bạn đăng ký nhận thông báo, khi có gì mới thì hệ thống tự gọi cho bạn. Webhook tiết kiệm hơn nhiều!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Set the `Content-Type` ___ to `application/json` before sending the POST request.
2. Our payment gateway sends a ___ to notify us when a transaction is completed.
3. The ___ validates the JWT token on every request before passing it to the route handler.
4. We implemented ___ to return only 20 items per page instead of the entire dataset.
5. The `/api/v1/orders` ___ accepts GET and POST methods.

---

{{< spoiler "✅ Đáp án" >}}
1. **header** — Content-Type header cho server biết format dữ liệu đang gửi
2. **webhook** — Webhook tự động gửi HTTP request đến URL đã đăng ký khi có sự kiện
3. **middleware** — Middleware xử lý request trước khi đến logic chính
4. **pagination** — Pagination chia kết quả thành nhiều trang, giảm tải cho server và client
5. **endpoint** — Endpoint là URL cụ thể mà API expose cho client gọi đến
{{< /spoiler >}}

---

API là ngôn ngữ chung giữa frontend và backend, giữa service này với service khác. Nắm vững 15 thuật ngữ trên, bạn sẽ tự tin hơn khi thiết kế, sử dụng, và debug API hàng ngày. Happy coding! 🚀
