---
title: "AWS Route 53 & API Gateway — Thuật Ngữ DNS & API Bằng Tiếng Anh"
date: 2023-01-24
summary: "Học 10+ thuật ngữ AWS Route 53 & API Gateway quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-route53-api-gateway-dns-api"
description: "Học 13 thuật ngữ tiếng Anh về AWS Route 53 và API Gateway — hosted zone, routing policy, throttling. Cho dev Việt làm DNS & API."
categories: ["IT English"]
tags: ["aws", "ai", "cloud-computing", "backend", "networking"]
ShowToc: true
TocOpen: true
draft: false
---

Mọi ứng dụng web đều cần hai thứ: **DNS** (để người dùng tìm thấy bạn) và **API** (để các service nói chuyện với nhau). AWS cung cấp Route 53 cho DNS và API Gateway cho quản lý API. Nắm vững thuật ngữ tiếng Anh của cả hai sẽ giúp bạn thiết kế và vận hành hệ thống tốt hơn.

---

## 📚 Bảng Từ Vựng

### 🔹 Route 53 — DNS

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| hosted zone | /ˈhoʊstɪd zoʊn/ | vùng lưu trữ DNS (chứa records của domain) | Create a **hosted zone** for your domain to manage all DNS records in Route 53. |
| record set | /ˈrekərd set/ | bộ bản ghi DNS | Add an A **record set** pointing your domain to the load balancer's IP address. |
| alias | /ˈeɪliəs/ | bản ghi alias (trỏ đến tài nguyên AWS) | Use an **alias** record to point the domain to the CloudFront distribution — it's free and faster. |
| health check | /helθ tʃek/ | kiểm tra sức khoẻ (endpoint monitoring) | Route 53 runs a **health check** every 30 seconds to verify the primary server is responding. |
| routing policy | /ˈruːtɪŋ ˈpɑːləsi/ | chính sách định tuyến (cách Route 53 trả lời DNS query) | We use a weighted **routing policy** to send 90% of traffic to the new version and 10% to the old one. |

### 🔹 API Gateway — Quản lý API

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| stage | /steɪdʒ/ | giai đoạn (môi trường deploy API) | Deploy the API to the "prod" **stage** after testing on the "dev" stage. |
| resource | /ˈriːsɔːrs/ | tài nguyên (đường dẫn URL trong API) | Create a new **resource** at /users to handle user-related API calls. |
| method | /ˈmeθəd/ | phương thức (GET, POST, PUT, DELETE) | Add a GET **method** to the /users resource to retrieve the user list. |
| authorizer | /ˈɔːθəraɪzər/ | bộ xác thực (kiểm tra quyền truy cập API) | The Lambda **authorizer** validates the JWT token before forwarding the request. |
| throttling | /ˈθrɑːtlɪŋ/ | giới hạn tốc độ (rate limiting) | Enable **throttling** to limit each client to 1000 requests per second. |
| usage plan | /ˈjuːsɪdʒ plæn/ | gói sử dụng (quota + throttle cho API key) | Create a **usage plan** that allows free-tier users 10,000 requests per month. |
| API key | /ˌeɪ piː ˈaɪ kiː/ | khoá API (định danh client) | Each partner receives a unique **API key** to track their usage and enforce quotas. |
| integration | /ˌɪntɪˈɡreɪʃən/ | tích hợp (kết nối API method với backend) | Set up a Lambda proxy **integration** so API Gateway forwards the full request to the function. |

---

## 💡 Mẹo Ghi Nhớ

- **Alias vs CNAME**: Cả hai đều trỏ tên miền đến nơi khác, nhưng alias là miễn phí, nhanh hơn, và hoạt động ở zone apex (root domain). Luôn ưu tiên alias cho tài nguyên AWS.
- **Stage = Environment**: dev stage, staging stage, prod stage — giống hệt dev/staging/prod environment. Mỗi stage có URL riêng.
- **Throttling giống cổng thu phí cao tốc**: Chỉ cho qua N xe/giây. Quá giới hạn → 429 Too Many Requests.

---

## 📝 Bài Tập

**Điền từ thích hợp vào chỗ trống:**

1. Create a ___ ___ in Route 53 to manage all DNS records for your domain.
2. Use an ___ record instead of CNAME to point the root domain to CloudFront.
3. The Lambda ___ checks the JWT token before allowing access to the API.
4. Enable ___ to prevent a single client from overwhelming the API with too many requests.
5. Deploy the API to the "prod" ___ after verifying it works on "dev".

{{< spoiler "✅ Đáp án" >}}
1. **hosted zone** — Vùng DNS chứa tất cả records của domain
2. **alias** — Bản ghi alias miễn phí, dùng cho tài nguyên AWS
3. **authorizer** — Bộ xác thực kiểm tra token/credentials trước khi cho truy cập
4. **throttling** — Giới hạn số request mỗi giây để bảo vệ API
5. **stage** — Mỗi stage là một môi trường deploy riêng biệt
{{< /spoiler >}}

---

## Tổng Kết

Route 53 và API Gateway là cặp đôi không thể thiếu: Route 53 đưa user đến đúng nơi, API Gateway quản lý và bảo vệ API endpoints. 13 thuật ngữ trên giúp bạn tự tin thiết kế hệ thống từ DNS đến API layer. Pro tip: **luôn dùng alias record cho AWS resources và luôn bật throttling cho public API** 🌐🔑

---

## 📚 Bài viết liên quan

- [AWS VPC — Thuật Ngữ Mạng Đám Mây Mà Developer Không Thể Bỏ Qua](/posts/tu-vung-aws-vpc-thuat-ngu-mang-dam-may/)
- [AWS SQS & SNS — Thuật Ngữ Message Queue Cho Developer](/posts/tu-vung-aws-sqs-sns-message-queue/)
- [AWS Lambda — Thuật Ngữ Serverless Mà Developer Cần Nắm Vững](/posts/tu-vung-aws-lambda-thuat-ngu-serverless/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
