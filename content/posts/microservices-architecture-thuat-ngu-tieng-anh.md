---
title: "Microservices Architecture — Thuật Ngữ Tiếng Anh Mà Developer Phải Biết"
slug: "microservices-architecture-thuat-ngu-tieng-anh"
date: 2026-03-22
summary: "Tổng hợp thuật ngữ Microservices Architecture bằng tiếng Anh — phiên âm IPA, giải thích EN-VN, ví dụ thực tế giúp developer tự tin đọc docs và thảo luận kiến trúc."
description: "Từ vựng Microservices Architecture cho developer Việt Nam: service mesh, API gateway, circuit breaker, event-driven, saga pattern — bảng EN-VN song ngữ, phiên âm IPA, ví dụ thực tế."
tags: ["microservices", "architecture", "vocabulary", "it-english", "backend", "system-design"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

"Let's break this monolith into microservices" — câu nói này xuất hiện ngày càng nhiều trong các buổi architecture review. Microservices không còn là xu hướng mà đã trở thành **kiến trúc tiêu chuẩn** tại nhiều công ty công nghệ lớn.

Tuy nhiên, toàn bộ tài liệu về microservices — từ design patterns, documentation cho đến incident reports — đều bằng **tiếng Anh**. Nếu không nắm vững thuật ngữ, bạn sẽ rất khó tham gia thảo luận kiến trúc hay đọc hiểu system design docs.

Bài viết này giúp bạn:
- Nắm vững **thuật ngữ Microservices Architecture** quan trọng nhất
- Biết **cách phát âm** (IPA) để tự tin trong design meetings
- Hiểu qua **ví dụ thực tế** với Spring Boot, Kubernetes, AWS
- **Câu mẫu tiếng Anh** để thảo luận kiến trúc chuyên nghiệp

---

## 1. Core Concepts — Khái Niệm Cốt Lõi

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 1 | **Microservice** | /ˈmaɪ.kroʊˌsɜːr.vɪs/ | Vi dịch vụ — service nhỏ, độc lập, đảm nhiệm một chức năng cụ thể |
| 2 | **Monolith** | /ˈmɒn.ə.lɪθ/ | Khối đơn — ứng dụng triển khai dưới dạng một codebase/process duy nhất |
| 3 | **Service** | /ˈsɜːr.vɪs/ | Dịch vụ — đơn vị phần mềm thực hiện một tập chức năng business |
| 4 | **Bounded Context** | /ˈbaʊn.dɪd ˈkɒn.tekst/ | Ngữ cảnh giới hạn — phạm vi mà một model cụ thể được áp dụng (từ DDD) |
| 5 | **Domain-Driven Design (DDD)** | /doʊˈmeɪn ˈdrɪv.ən dɪˈzaɪn/ | Thiết kế hướng miền — phương pháp thiết kế phần mềm dựa trên business domain |
| 6 | **Decomposition** | /ˌdiː.kɒm.pəˈzɪʃ.ən/ | Phân rã — chia nhỏ hệ thống lớn thành các service độc lập |
| 7 | **Loose Coupling** | /luːs ˈkʌp.lɪŋ/ | Liên kết lỏng — các service ít phụ thuộc lẫn nhau |
| 8 | **High Cohesion** | /haɪ koʊˈhiː.ʒən/ | Tính gắn kết cao — các chức năng liên quan được nhóm lại trong cùng service |

### 💡 Ví dụ: Monolith vs Microservices

```
# Monolith — tất cả trong một
┌─────────────────────────────────┐
│  User │ Order │ Payment │ Email │  ← Single deployable unit
│       │       │         │       │
│         Shared Database         │
└─────────────────────────────────┘

# Microservices — chia theo domain
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ User Svc │  │ Order Svc│  │Payment Svc│  │Email Svc │
│  Own DB  │  │  Own DB  │  │  Own DB   │  │  Own DB  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

### 🗣️ Câu mẫu

- *"We need to decompose this monolith by **bounded context**."*
  → Chúng ta cần phân rã monolith này theo ngữ cảnh giới hạn.

- *"Each microservice should have **loose coupling** and **high cohesion**."*
  → Mỗi microservice nên có liên kết lỏng và tính gắn kết cao.

---

## 2. Communication Patterns — Mẫu Giao Tiếp Giữa Các Service

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 9 | **Synchronous** | /ˈsɪŋ.krə.nəs/ | Đồng bộ — service gọi và chờ response (REST, gRPC) |
| 10 | **Asynchronous** | /eɪˈsɪŋ.krə.nəs/ | Bất đồng bộ — service gửi message và không chờ (message queue) |
| 11 | **API Gateway** | /ˌeɪ.piːˈaɪ ˈɡeɪt.weɪ/ | Cổng API — entry point duy nhất cho tất cả requests từ client |
| 12 | **Service Mesh** | /ˈsɜːr.vɪs meʃ/ | Lưới dịch vụ — hạ tầng quản lý traffic giữa các service (Istio, Linkerd) |
| 13 | **Message Broker** | /ˈmes.ɪdʒ ˈbroʊ.kər/ | Trung gian tin nhắn — hệ thống chuyển message giữa services (RabbitMQ, Kafka) |
| 14 | **Event-Driven** | /ɪˈvent ˈdrɪv.ən/ | Hướng sự kiện — kiến trúc giao tiếp qua events thay vì gọi trực tiếp |
| 15 | **Publish-Subscribe (Pub/Sub)** | /ˈpʌb.lɪʃ səbˈskraɪb/ | Xuất bản-Đăng ký — pattern: publisher gửi event, subscribers nhận event |
| 16 | **Request-Response** | /rɪˈkwest rɪˈspɒns/ | Yêu cầu-Phản hồi — pattern giao tiếp đồng bộ cơ bản |

### 💡 Ví dụ: Synchronous vs Asynchronous

```yaml
# Synchronous — REST call
Order Service → POST /api/payments → Payment Service
               ← 200 OK (waits for response)

# Asynchronous — Message Queue
Order Service → [Message Queue] → Payment Service
              "order.created"     (processes independently)
```

### 🗣️ Câu mẫu

- *"The order service communicates with payment via an **asynchronous message broker**."*
  → Service đặt hàng giao tiếp với thanh toán qua trung gian tin nhắn bất đồng bộ.

- *"We use an **API gateway** to route all external traffic and handle authentication."*
  → Chúng ta dùng API gateway để route traffic bên ngoài và xử lý xác thực.

---

## 3. Resilience Patterns — Mẫu Chịu Lỗi

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 17 | **Circuit Breaker** | /ˈsɜːr.kɪt ˈbreɪ.kər/ | Cầu dao ngắt — ngắt gọi đến service bị lỗi để tránh cascading failure |
| 18 | **Retry** | /rɪˈtraɪ/ | Thử lại — tự động gửi lại request khi gặp lỗi tạm thời |
| 19 | **Timeout** | /ˈtaɪm.aʊt/ | Hết thời gian — hủy request nếu service không respond trong thời gian cho phép |
| 20 | **Fallback** | /ˈfɔːl.bæk/ | Phương án dự phòng — response thay thế khi service chính gặp lỗi |
| 21 | **Bulkhead** | /ˈbʊlk.hed/ | Vách ngăn — cô lập resource để lỗi của một phần không ảnh hưởng toàn bộ |
| 22 | **Rate Limiting** | /reɪt ˈlɪm.ɪ.tɪŋ/ | Giới hạn tốc độ — kiểm soát số lượng requests trong khoảng thời gian |
| 23 | **Graceful Degradation** | /ˈɡreɪs.fəl ˌdeɡ.rəˈdeɪ.ʃən/ | Suy giảm uyển chuyển — giảm tính năng thay vì sập hoàn toàn |
| 24 | **Idempotent** | /ˌaɪ.dɛmˈpoʊ.tənt/ | Lũy đẳng — gọi nhiều lần cho cùng kết quả (an toàn khi retry) |

### 💡 Ví dụ: Circuit Breaker Pattern

```java
// Circuit Breaker with Resilience4j (Spring Boot)
@CircuitBreaker(name = "paymentService", fallbackMethod = "paymentFallback")
public PaymentResponse processPayment(OrderRequest order) {
    return paymentClient.charge(order);
}

// Fallback when circuit is OPEN
public PaymentResponse paymentFallback(OrderRequest order, Exception e) {
    return PaymentResponse.pending("Payment queued for retry");
}
```

```
Circuit Breaker States:
CLOSED  → Normal, requests go through
         ↓ (failure threshold reached)
OPEN    → All requests blocked, return fallback
         ↓ (after timeout period)
HALF-OPEN → Let some requests through to test
         ↓ (success) → CLOSED
         ↓ (failure) → OPEN
```

### 🗣️ Câu mẫu

- *"We implemented a **circuit breaker** to prevent cascading failures when the payment service is down."*
  → Chúng ta triển khai circuit breaker để ngăn lỗi lan truyền khi payment service sập.

- *"Make sure the API is **idempotent** so retries don't create duplicate orders."*
  → Đảm bảo API là idempotent để retry không tạo đơn hàng trùng.

---

## 4. Data Management — Quản Lý Dữ Liệu

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 25 | **Database per Service** | /ˈdeɪ.tə.beɪs pɜːr ˈsɜːr.vɪs/ | Mỗi service một database — nguyên tắc tách biệt dữ liệu |
| 26 | **Saga Pattern** | /ˈsɑː.ɡə ˈpæt.ərn/ | Mẫu Saga — quản lý transaction phân tán bằng chuỗi local transactions |
| 27 | **Event Sourcing** | /ɪˈvent ˈsɔːr.sɪŋ/ | Nguồn sự kiện — lưu mọi thay đổi dưới dạng events thay vì state hiện tại |
| 28 | **CQRS** | /siː.kjuː.ɑːr.es/ | Command Query Responsibility Segregation — tách đọc và ghi thành models riêng |
| 29 | **Eventual Consistency** | /ɪˈven.tʃu.əl kənˈsɪs.tən.si/ | Nhất quán cuối cùng — data sẽ đồng bộ sau một khoảng thời gian |
| 30 | **Distributed Transaction** | /dɪˈstrɪb.juː.tɪd trænˈzæk.ʃən/ | Giao dịch phân tán — transaction trải qua nhiều services/databases |
| 31 | **Compensation** | /ˌkɒm.penˈseɪ.ʃən/ | Bù trừ — hành động rollback trong saga khi một bước thất bại |

### 💡 Ví dụ: Saga Pattern — Choreography

```
Order Created → [Event: order.created]
                    ↓
Payment Charged → [Event: payment.charged]
                    ↓
Inventory Reserved → [Event: inventory.reserved]
                    ↓
Order Confirmed ✅

# Nếu payment thất bại:
Payment Failed → [Event: payment.failed]
                    ↓
Order Cancelled ❌ (compensation)
```

### 🗣️ Câu mẫu

- *"We use the **saga pattern** with choreography for distributed transactions across services."*
  → Chúng ta dùng saga pattern với choreography cho giao dịch phân tán giữa các services.

- *"With **eventual consistency**, the read model might be slightly behind the write model."*
  → Với eventual consistency, read model có thể hơi chậm hơn write model.

---

## 5. Deployment & Infrastructure — Triển Khai & Hạ Tầng

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 32 | **Containerization** | /kənˌteɪ.nər.aɪˈzeɪ.ʃən/ | Container hóa — đóng gói service vào container (Docker) |
| 33 | **Orchestration** | /ˌɔːr.kɪˈstreɪ.ʃən/ | Điều phối — quản lý tự động nhiều containers (Kubernetes) |
| 34 | **Service Discovery** | /ˈsɜːr.vɪs dɪˈskʌv.ər.i/ | Khám phá dịch vụ — cơ chế tìm địa chỉ của service khác tự động |
| 35 | **Load Balancer** | /loʊd ˈbæl.ən.sər/ | Cân bằng tải — phân phối traffic đều giữa các instances |
| 36 | **Auto-Scaling** | /ˈɔː.toʊ ˈskeɪ.lɪŋ/ | Tự động mở rộng — tăng/giảm instances theo traffic |
| 37 | **Blue-Green Deployment** | /bluː ɡriːn dɪˈplɔɪ.mənt/ | Triển khai xanh-lam — chạy 2 môi trường song song, chuyển traffic khi sẵn sàng |
| 38 | **Canary Release** | /kəˈnɛr.i rɪˈliːs/ | Phát hành canary — triển khai cho % nhỏ user trước khi rollout toàn bộ |
| 39 | **Sidecar Pattern** | /ˈsaɪd.kɑːr ˈpæt.ərn/ | Mẫu sidecar — container phụ chạy cùng service chính, xử lý cross-cutting concerns |

### 💡 Ví dụ: Kubernetes Deployment

```yaml
# Kubernetes deployment cho một microservice
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3                    # 3 instances cho high availability
  selector:
    matchLabels:
      app: order-service
  template:
    spec:
      containers:
      - name: order-service
        image: myapp/order-service:v2.1.0
        ports:
        - containerPort: 8080
        readinessProbe:          # Health check trước khi nhận traffic
          httpGet:
            path: /health
            port: 8080
```

### 🗣️ Câu mẫu

- *"We're doing a **canary release** — rolling out to 5% of users first."*
  → Chúng ta đang làm canary release — triển khai cho 5% users trước.

- *"**Service discovery** is handled by Kubernetes DNS, so we don't need to hardcode service URLs."*
  → Service discovery được Kubernetes DNS xử lý, nên không cần hardcode URL.

---

## 6. Observability & Testing — Quan Sát & Kiểm Thử

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 40 | **Distributed Tracing** | /dɪˈstrɪb.juː.tɪd ˈtreɪ.sɪŋ/ | Theo dõi phân tán — trace request xuyên qua nhiều services (Jaeger, Zipkin) |
| 41 | **Correlation ID** | /ˌkɒr.əˈleɪ.ʃən aɪˈdiː/ | ID tương quan — unique ID gắn vào request để track qua các services |
| 42 | **Contract Testing** | /ˈkɒn.trækt ˈtes.tɪŋ/ | Kiểm thử hợp đồng — verify API contract giữa consumer và provider |
| 43 | **Chaos Engineering** | /ˈkeɪ.ɒs ˌen.dʒɪˈnɪər.ɪŋ/ | Kỹ thuật hỗn loạn — inject failure vào production để test resilience |
| 44 | **Health Check** | /helθ tʃek/ | Kiểm tra sức khỏe — endpoint xác nhận service đang hoạt động bình thường |

### 💡 Ví dụ: Distributed Tracing

```
Client Request (correlation-id: abc-123)
  → API Gateway (trace: abc-123)
    → Order Service (span: order-001)
      → Payment Service (span: payment-002)
      → Inventory Service (span: inventory-003)
    ← Response aggregated
  ← Return to client

# Khi có lỗi, dùng correlation-id để trace
# toàn bộ journey qua các services
```

### 🗣️ Câu mẫu

- *"Attach a **correlation ID** to every request so we can trace it across services."*
  → Gắn correlation ID vào mỗi request để trace được qua các services.

- *"We run **chaos engineering** experiments monthly to validate our **circuit breakers**."*
  → Chúng ta chạy chaos engineering hàng tháng để kiểm tra circuit breakers.

---

## 7. Tổng Hợp Nhanh — Quick Reference

| Pattern / Concept | Khi nào dùng |
|---|---|
| **API Gateway** | Entry point cho client, xử lý auth, routing |
| **Circuit Breaker** | Ngắt gọi đến service bị lỗi |
| **Saga Pattern** | Transaction phân tán qua nhiều services |
| **CQRS** | Tách read/write khi performance requirements khác nhau |
| **Event Sourcing** | Cần audit trail, undo/redo, hoặc replay events |
| **Service Mesh** | Quản lý traffic, security, observability giữa services |
| **Bulkhead** | Cô lập failure, không để một service kéo sập tất cả |
| **Canary Release** | Deploy an toàn, giảm risk |

---

## 8. Practice — Luyện Tập

### 📝 Exercise 1: Điền thuật ngữ đúng

1. We need to ________ this monolith into smaller, independently deployable services.
2. The ________ pattern prevents cascading failures by stopping calls to a failing service.
3. Use a ________ to route all external API requests through a single entry point.
4. With ________, data across services will be synchronized, but not immediately.
5. Each microservice should own its data — this is called ________.

<details>
<summary>✅ Đáp án</summary>

1. **decompose**
2. **circuit breaker**
3. **API gateway**
4. **eventual consistency**
5. **database per service**

</details>

### 📝 Exercise 2: Dịch sang tiếng Anh

1. Chúng ta dùng Kafka làm message broker cho giao tiếp bất đồng bộ giữa các service.
2. Triển khai canary release cho 10% users trước khi rollout toàn bộ.
3. Saga pattern xử lý rollback bằng compensation khi có lỗi.

<details>
<summary>✅ Đáp án gợi ý</summary>

1. *"We use Kafka as a **message broker** for **asynchronous communication** between services."*
2. *"Deploy a **canary release** to 10% of users before a full **rollout**."*
3. *"The **saga pattern** handles rollback through **compensation** when a step fails."*

</details>

---

## Kết Luận

Microservices Architecture là một chủ đề rộng, nhưng nắm vững **thuật ngữ cốt lõi** sẽ giúp bạn:

- ✅ **Đọc hiểu** system design docs và architecture proposals
- ✅ **Tham gia** design review meetings một cách tự tin
- ✅ **Thảo luận** trade-offs giữa monolith và microservices
- ✅ **Viết** ADR (Architecture Decision Records) chuyên nghiệp

Hãy bookmark bài viết này và dùng như **reference** mỗi khi cần tra cứu thuật ngữ! 🚀

> 💡 **Bài tiếp theo:** Top 20 câu phỏng vấn IT bằng tiếng Anh + cách trả lời — đừng bỏ lỡ!
