---
title: "Microservices Architecture — 12 Thuật Ngữ Kiến Trúc Developer Phải Biết"
date: 2023-02-12
summary: "Học 12 thuật ngữ Microservices Architecture quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-microservices-architecture-thuat-ngu-kien-truc"
description: "Học 12 thuật ngữ tiếng Anh quan trọng về Microservices Architecture — từ gateway, circuit breaker, saga pattern đến service mesh, CQRS và eventual consistency."
categories: ["IT English"]
tags: ["backend", "it-english", "vocabulary"]
ShowToc: true
TocOpen: true
draft: false
---

Microservices là kiến trúc mà hầu hết các hệ thống lớn đều đang dùng — Netflix, Uber, Grab đều chạy hàng trăm microservice. Nhưng đi kèm với đó là hàng loạt thuật ngữ phức tạp. Hiểu chúng bằng tiếng Anh giúp bạn đọc hiểu system design, tham gia architecture discussion, và phỏng vấn senior position. Let's explore! 🏗️

---

### 🔹 Core Concepts

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| service | /ˈsɜːrvɪs/ | dịch vụ — đơn vị độc lập xử lý một chức năng | The payment **service** handles all billing and transaction logic independently. |
| gateway | /ˈɡeɪtweɪ/ | cổng vào — điểm tiếp nhận mọi request từ client | The API **gateway** routes requests to the correct microservice based on the URL path. |
| bounded context | /ˈbaʊndɪd ˈkɒntɛkst/ | ngữ cảnh giới hạn — phạm vi riêng của mỗi service | Each microservice operates within its own **bounded context** with its own database. |
| idempotent | /ˌaɪdɪmˈpoʊtənt/ | bất biến kết quả — gọi nhiều lần cho cùng kết quả | Make the payment API **idempotent** so retrying a failed request doesn't charge the user twice. |

### 🔹 Resilience Patterns

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| circuit breaker | /ˈsɜːrkɪt ˈbreɪkər/ | ngắt mạch — tạm dừng gọi service lỗi để tránh cascading failure | The **circuit breaker** opens after 5 consecutive failures and stops calling the downstream service. |
| saga pattern | /ˈsɑːɡə ˈpætərn/ | mẫu saga — quản lý transaction phân tán qua chuỗi event | We use the **saga pattern** to coordinate the order, payment, and shipping services in a distributed transaction. |
| eventual consistency | /ɪˈvɛntʃuəl kənˈsɪstənsi/ | nhất quán cuối cùng — dữ liệu sẽ đồng bộ sau một khoảng thời gian | With **eventual consistency**, the inventory count may lag a few seconds behind the actual stock. |

### 🔹 Communication & Data

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| event sourcing | /ɪˈvɛnt ˈsɔːrsɪŋ/ | lưu trữ mọi thay đổi dưới dạng chuỗi event | With **event sourcing**, we can rebuild the account balance by replaying all transaction events. |
| CQRS | /ˌsiː.kjuː.ɑːr.ˈɛs/ | Command Query Responsibility Segregation — tách đọc và ghi | **CQRS** uses separate models for reading data and writing data to optimize performance. |
| distributed tracing | /dɪˈstrɪbjuːtɪd ˈtreɪsɪŋ/ | theo dõi request xuyên suốt nhiều service | Use **distributed tracing** with Jaeger to track a request as it flows through 10 different services. |

### 🔹 Infrastructure

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| service mesh | /ˈsɜːrvɪs mɛʃ/ | lưới dịch vụ — quản lý giao tiếp giữa các service | Deploy Istio as a **service mesh** to handle load balancing, encryption, and observability between services. |
| sidecar | /ˈsaɪdkɑːr/ | container phụ chạy cạnh service chính | The **sidecar** proxy handles TLS termination and metrics collection for each service pod. |

---

## 💡 Mẹo ghi nhớ

- **Circuit Breaker** = cầu dao điện: Khi quá tải (service lỗi liên tục), cầu dao ngắt để bảo vệ hệ thống. Sau một lúc thử đóng lại (half-open state).
- **Saga** = câu chuyện dài nhiều chương: Mỗi service là một chương, nếu chương nào thất bại thì phải "undo" các chương trước đó (compensation).
- **CQRS** — nhớ: Command = viết (thay đổi data), Query = đọc (lấy data). Tách riêng vì đọc và ghi có nhu cầu khác nhau (đọc cần nhanh, ghi cần đúng).

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. All client requests go through the API ___ before reaching any microservice.
2. The ___ ___ stops calling the failing service after 5 timeout errors in a row.
3. We use the ___ ___ to manage distributed transactions across order, payment, and inventory services.
4. With ___ ___, data between services may not be immediately synchronized but will converge over time.
5. Deploy a ___ ___ like Istio to manage inter-service communication, security, and observability.

{{< spoiler "✅ Đáp án" >}}
1. **gateway** — API gateway là điểm vào duy nhất cho mọi request
2. **circuit breaker** — Ngắt mạch để tránh cascading failure
3. **saga pattern** — Quản lý transaction phân tán qua chuỗi event
4. **eventual consistency** — Dữ liệu sẽ nhất quán sau một khoảng thời gian
5. **service mesh** — Lưới dịch vụ quản lý giao tiếp giữa các microservice
{{< /spoiler >}}

---

## 🎯 Tổng kết

Microservices architecture mang lại flexibility và scalability, nhưng cũng kéo theo complexity. 12 thuật ngữ này là nền tảng để bạn hiểu và thảo luận kiến trúc microservices — từ design patterns đến infrastructure. Nắm chắc chúng, bạn sẽ tự tin hơn trong mọi cuộc thảo luận system design! 🏗️
