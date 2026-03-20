---
title: "Monitoring & Logging — Từ Vựng DevOps Mà Developer Cần Biết"
slug: "monitoring-logging-tu-vung-devops"
date: 2026-03-21
summary: "Tổng hợp từ vựng Monitoring & Logging quan trọng nhất cho DevOps và Backend Developer — phiên âm IPA, giải thích EN-VN, ví dụ thực tế với Grafana, Prometheus, ELK Stack."
description: "Từ vựng Monitoring & Logging cho developer Việt Nam: metrics, alerting, dashboards, log levels, tracing, observability — bảng EN-VN song ngữ, phiên âm IPA, ví dụ cấu hình thực tế."
tags: ["monitoring", "logging", "devops", "vocabulary", "it-english", "observability", "sre"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

"The system is down!" — đây là câu **không ai muốn nghe** lúc 2 giờ sáng. Monitoring và Logging chính là **lá chắn** giúp bạn phát hiện sự cố trước khi user kịp report.

Trong thế giới DevOps, SRE (Site Reliability Engineering), và Cloud-native, monitoring & logging là **kỹ năng bắt buộc**. Và toàn bộ documentation, alerting messages, dashboard labels đều bằng **tiếng Anh**.

Bài viết này giúp bạn:
- Nắm vững **từ vựng Monitoring & Logging** quan trọng nhất
- Biết **cách phát âm** (IPA) để tự tin trong incident meetings
- Hiểu qua **ví dụ cấu hình thực tế** với Prometheus, Grafana, ELK
- **Câu mẫu tiếng Anh** để thảo luận khi on-call và post-mortem

---

## 1. Monitoring Fundamentals — Khái Niệm Giám Sát Cơ Bản

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 1 | **Monitoring** | /ˈmɒn.ɪ.tər.ɪŋ/ | Giám sát — theo dõi liên tục trạng thái của hệ thống |
| 2 | **Observability** | /əbˌzɜːr.vəˈbɪl.ɪ.ti/ | Khả năng quan sát — mức độ hiểu được trạng thái nội bộ hệ thống qua outputs |
| 3 | **Metric** | /ˈmet.rɪk/ | Chỉ số — giá trị đo lường có thể theo dõi theo thời gian |
| 4 | **Alert** | /əˈlɜːrt/ | Cảnh báo — thông báo tự động khi metric vượt ngưỡng |
| 5 | **Threshold** | /ˈθreʃ.hoʊld/ | Ngưỡng — giá trị giới hạn để trigger alert |
| 6 | **Dashboard** | /ˈdæʃ.bɔːrd/ | Bảng điều khiển — giao diện hiển thị metrics và trạng thái hệ thống |
| 7 | **Health Check** | /helθ tʃek/ | Kiểm tra sức khỏe — endpoint kiểm tra service có đang hoạt động không |
| 8 | **Uptime** | /ˈʌp.taɪm/ | Thời gian hoạt động — % thời gian hệ thống available |

### Ví dụ: Health Check Endpoint

```python
# A simple health check endpoint
@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "uptime": get_uptime(),
        "checks": {
            "database": check_db_connection(),
            "redis": check_redis_connection(),
            "disk_space": check_disk_usage()
        }
    }
```

**Cách nói trong meeting:**
> "Our **health check** endpoint verifies the database connection, Redis, and disk space. If any check fails, the **load balancer** automatically removes the instance from the pool."

---

## 2. Metrics & Alerting — Chỉ Số & Cảnh Báo

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 9 | **Latency** | /ˈleɪ.tən.si/ | Độ trễ — thời gian xử lý một request |
| 10 | **Throughput** | /ˈθruː.pʊt/ | Thông lượng — số request xử lý được trong một đơn vị thời gian |
| 11 | **Error Rate** | /ˈer.ər reɪt/ | Tỷ lệ lỗi — % request bị lỗi |
| 12 | **Saturation** | /ˌsætʃ.əˈreɪ.ʃən/ | Độ bão hòa — mức sử dụng tài nguyên so với capacity |
| 13 | **SLA** (Service Level Agreement) | /ˌes.el.ˈeɪ/ | Thỏa thuận mức dịch vụ — cam kết chất lượng với khách hàng |
| 14 | **SLO** (Service Level Objective) | /ˌes.el.ˈoʊ/ | Mục tiêu mức dịch vụ — target nội bộ (thường chặt hơn SLA) |
| 15 | **SLI** (Service Level Indicator) | /ˌes.el.ˈaɪ/ | Chỉ số mức dịch vụ — metric thực tế đo lường SLO |
| 16 | **P99 / P95 / P50** | /piː naɪn.ti naɪn/ | Percentile — giá trị mà 99%/95%/50% request nhanh hơn |

### Ví dụ: Prometheus Alert Rules

```yaml
# Prometheus alerting rules
groups:
  - name: api-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value | humanizePercentage }} (threshold: 5%)"

      - alert: HighLatency
        expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 2
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "P99 latency exceeds 2 seconds"
```

**Cách giải thích:**
> "We've set up two **alerts** in Prometheus. The first fires when the **error rate** exceeds 5% for 5 minutes — that's **critical severity**. The second triggers when **P99 latency** goes above 2 seconds, which is a **warning**."

### The Four Golden Signals

Google SRE định nghĩa **4 tín hiệu vàng** mà mọi service nên monitor:

| Signal | Nghĩa | Ví dụ metric |
|--------|--------|---------------|
| **Latency** | Thời gian xử lý request | `http_request_duration_seconds` |
| **Traffic** | Lượng request đến | `http_requests_total` |
| **Errors** | Tỷ lệ request thất bại | `http_requests_total{status=~"5.."}` |
| **Saturation** | Mức tải so với capacity | `node_cpu_utilization`, `node_memory_usage` |

---

## 3. Logging — Ghi Log

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 17 | **Log Level** | /lɒɡ ˈlev.əl/ | Mức log — phân loại mức độ nghiêm trọng: DEBUG, INFO, WARN, ERROR, FATAL |
| 18 | **Structured Logging** | /ˈstrʌk.tʃərd ˈlɒɡ.ɪŋ/ | Log có cấu trúc — log ở dạng JSON thay vì plain text |
| 19 | **Log Aggregation** | /lɒɡ ˌæɡ.rɪˈɡeɪ.ʃən/ | Tổng hợp log — thu thập log từ nhiều nguồn vào một nơi |
| 20 | **Log Rotation** | /lɒɡ roʊˈteɪ.ʃən/ | Xoay vòng log — tự động nén/xóa log cũ để tiết kiệm disk |
| 21 | **Correlation ID** | /ˌkɒr.əˈleɪ.ʃən aɪˈdiː/ | ID liên kết — mã duy nhất theo dõi một request qua nhiều services |
| 22 | **Audit Log** | /ˈɔː.dɪt lɒɡ/ | Log kiểm toán — ghi lại hành động người dùng cho mục đích compliance |

### Log Levels — Khi nào dùng level nào?

| Level | Khi nào dùng | Ví dụ |
|-------|-------------|-------|
| **DEBUG** | Chi tiết cho development, không bật ở production | `DEBUG: SQL query executed in 12ms` |
| **INFO** | Sự kiện bình thường, đáng ghi nhận | `INFO: User john@mail.com logged in` |
| **WARN** | Vấn đề tiềm ẩn nhưng hệ thống vẫn chạy | `WARN: Cache miss rate above 50%` |
| **ERROR** | Lỗi xảy ra nhưng hệ thống vẫn phục vụ được | `ERROR: Payment gateway timeout for order #1234` |
| **FATAL** | Lỗi nghiêm trọng, hệ thống không thể tiếp tục | `FATAL: Database connection pool exhausted` |

### Ví dụ: Structured Logging

```javascript
// ❌ Bad: unstructured log — hard to search and parse
console.log("User login failed for john@mail.com from IP 192.168.1.1");

// ✅ Good: structured log — easy to query in ELK/Grafana
logger.warn({
  event: "login_failed",
  user: "john@mail.com",
  ip: "192.168.1.1",
  reason: "invalid_password",
  attempt: 3,
  correlationId: "req-abc-123"
});
```

**Câu mẫu:**
> "We migrated from plain text logs to **structured logging** in JSON format. Now we can **filter** by any field in Kibana — for example, show all **login_failed** events from a specific IP in the last hour."

---

## 4. Tracing & Observability — Theo Dõi & Quan Sát

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 23 | **Distributed Tracing** | /dɪˈstrɪb.juː.tɪd ˈtreɪ.sɪŋ/ | Theo dõi phân tán — theo dõi request qua nhiều microservices |
| 24 | **Span** | /spæn/ | Đoạn — một đơn vị công việc trong một trace |
| 25 | **Trace** | /treɪs/ | Vết — toàn bộ hành trình của một request qua hệ thống |
| 26 | **Instrumentation** | /ˌɪn.strə.menˈteɪ.ʃən/ | Đo đạc — thêm code để thu thập metrics, logs, traces |
| 27 | **Sampling** | /ˈsæm.plɪŋ/ | Lấy mẫu — chỉ thu thập một phần traces để giảm overhead |

### Three Pillars of Observability

Observability dựa trên **3 trụ cột**:

| Pillar | Mô tả | Tool phổ biến |
|--------|--------|---------------|
| **Metrics** | Dữ liệu số theo thời gian (time-series) | Prometheus, Datadog, CloudWatch |
| **Logs** | Sự kiện chi tiết có timestamp | ELK Stack, Loki, Splunk |
| **Traces** | Hành trình request qua nhiều services | Jaeger, Zipkin, OpenTelemetry |

**Cách giải thích:**
> "We've implemented all **three pillars of observability**. **Metrics** in Prometheus tell us *what* is happening, **logs** in Loki tell us *why*, and **traces** in Jaeger show us *where* the bottleneck is across services."

---

## 5. Incident Management — Quản Lý Sự Cố

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 28 | **Incident** | /ˈɪn.sɪ.dənt/ | Sự cố — sự kiện gây gián đoạn hoặc giảm chất lượng dịch vụ |
| 29 | **On-call** | /ˌɒn ˈkɔːl/ | Trực — sẵn sàng xử lý sự cố ngoài giờ làm việc |
| 30 | **Post-mortem** | /ˌpoʊst ˈmɔːr.təm/ | Phân tích sau sự cố — tìm nguyên nhân gốc và cách phòng tránh |
| 31 | **MTTR** (Mean Time to Recovery) | /ˌem.tiː.tiːˈɑːr/ | Thời gian trung bình phục hồi — từ lúc detect đến resolved |
| 32 | **MTTD** (Mean Time to Detect) | /ˌem.tiː.tiːˈdiː/ | Thời gian trung bình phát hiện — từ lúc sự cố xảy ra đến khi alert |
| 33 | **Root Cause** | /ruːt kɔːz/ | Nguyên nhân gốc — lý do cơ bản gây ra sự cố |
| 34 | **Runbook** | /ˈrʌn.bʊk/ | Sổ tay vận hành — hướng dẫn step-by-step xử lý sự cố cụ thể |
| 35 | **Escalation** | /ˌes.kəˈleɪ.ʃən/ | Leo thang — chuyển sự cố lên người/team có authority cao hơn |

### Ví dụ: Post-Mortem Report

```markdown
## Incident Post-Mortem: API Outage 2026-03-15

**Duration:** 45 minutes (14:00 - 14:45 UTC)
**Severity:** SEV-1 (Critical)
**Impact:** 100% of API requests returned 503

### Timeline
- 14:00 — **Alert fired**: Error rate exceeded 90%
- 14:05 — **On-call engineer** acknowledged the alert
- 14:12 — **Root cause** identified: OOM kill on primary DB
- 14:30 — **Mitigation**: Increased DB memory, restarted pods
- 14:45 — **Resolved**: Error rate back to normal

### Root Cause
The nightly batch job consumed excessive memory, causing
the database to be OOM-killed by the kernel.

### Action Items
- [ ] Set memory limits on batch job containers
- [ ] Add memory saturation alert at 80% threshold
- [ ] Update runbook for database OOM scenarios
```

**Cách nói trong post-mortem meeting:**
> "The **root cause** was an OOM kill on the primary database. Our **MTTD** was 0 minutes thanks to the error rate **alert**, but **MTTR** was 45 minutes because the **runbook** didn't cover this specific scenario. We need to update it."

---

## 6. Tools & Stack — Công Cụ Phổ Biến

| Tool | Loại | Mô tả tiếng Anh |
|------|------|------------------|
| **Prometheus** /prəˈmiː.θi.əs/ | Metrics | Time-series database for metric collection and alerting |
| **Grafana** /ɡrəˈfɑː.nə/ | Visualization | Dashboard and visualization platform for metrics |
| **ELK Stack** (Elasticsearch + Logstash + Kibana) | Logging | Log aggregation, search, and visualization |
| **Jaeger** /ˈjeɪ.ɡər/ | Tracing | Distributed tracing system for microservices |
| **PagerDuty** | Alerting | Incident management and on-call scheduling |
| **Datadog** | All-in-one | Unified monitoring, logging, and tracing platform |
| **OpenTelemetry** | Instrumentation | Vendor-neutral framework for metrics, logs, and traces |

---

## 7. Practice — Luyện Tập

### Exercise 1: Chọn thuật ngữ đúng

Điền thuật ngữ phù hợp vào chỗ trống:

1. "Our ______ shows that P99 latency spiked to 5 seconds at 3 PM."  
2. "We need to add a ______ to track requests across all microservices."  
3. "The ______ fired at 2 AM, so the ______ engineer was paged."  
4. "After the outage, we wrote a ______ to prevent it from happening again."  
5. "Switch log level to ______ in production to reduce log volume."  

<details>
<summary>Đáp án</summary>

1. **dashboard** — bảng điều khiển hiển thị metrics
2. **correlation ID** — mã theo dõi request qua nhiều services
3. **alert**, **on-call** — cảnh báo tự động, kỹ sư trực
4. **post-mortem** — phân tích sau sự cố
5. **WARN** hoặc **INFO** — giảm log volume bằng cách tắt DEBUG

</details>

### Exercise 2: Viết Alert Rule

Dựa trên yêu cầu tiếng Anh, viết mô tả alert:

> "Create a critical alert that fires when the API error rate exceeds 10% for more than 3 minutes."

<details>
<summary>Gợi ý</summary>

```yaml
- alert: CriticalErrorRate
  expr: rate(http_requests_total{status=~"5.."}[3m]) / rate(http_requests_total[3m]) > 0.10
  for: 3m
  labels:
    severity: critical
  annotations:
    summary: "API error rate above 10%"
    description: "Error rate has been {{ $value | humanizePercentage }} for 3+ minutes"
```

</details>

### Exercise 3: Giải thích cho team

Hãy giải thích bằng tiếng Anh:

1. Sự khác biệt giữa **SLA**, **SLO**, và **SLI**.
2. Tại sao cần **structured logging** thay vì plain text.
3. **Three pillars of observability** là gì và tại sao cần cả ba.

<details>
<summary>Gợi ý</summary>

1. "**SLI** is the actual measured metric, like `99.2% availability`. **SLO** is the internal target we aim for, like `99.5%`. **SLA** is the contractual agreement with customers — if we breach it, there are **financial penalties**."

2. "**Structured logging** outputs logs in JSON format, making them **machine-parseable**. You can easily **filter**, **aggregate**, and **search** by any field in tools like Kibana or Grafana. Plain text logs require complex regex patterns to extract useful data."

3. "The three pillars are **Metrics**, **Logs**, and **Traces**. Metrics tell you *what* is happening (e.g., latency is high). Logs tell you *why* (e.g., database timeout error). Traces tell you *where* in the request flow the problem occurs. You need all three for **full observability**."

</details>

---

## Kết luận

Monitoring & Logging không phải chỉ là công việc của DevOps — đây là **trách nhiệm chung** của cả development team. Khi bạn hiểu từ vựng này, bạn có thể:

- **Đọc hiểu** alert messages và dashboard không cần dịch
- **Tham gia** incident response và post-mortem hiệu quả
- **Viết** log messages và alert descriptions rõ ràng
- **Thảo luận** kiến trúc observability với team quốc tế

**3 điều cần nhớ:**
1. **Four Golden Signals**: Latency, Traffic, Errors, Saturation — monitor cả 4
2. **Structured Logging**: JSON format + Correlation ID = dễ debug gấp 10 lần
3. **Post-mortem là văn hóa, không phải blame game** — focus vào **root cause** và **action items**

> **Mẹo:** Lần tới khi on-call hoặc review alert rules, hãy đọc lại bài này. Bạn sẽ tự tin hơn rất nhiều khi tham gia incident channel bằng tiếng Anh! 🚀
