---
title: "Cách Viết Technical Documentation Bằng Tiếng Anh — Structure, Templates & Best Practices"
slug: "cach-viet-technical-documentation-bang-tieng-anh"
date: 2026-04-09
summary: "Hướng dẫn viết Technical Documentation bằng tiếng Anh: cấu trúc chuẩn, template thực tế, từ vựng và mẫu câu cho developer."
description: "Cách viết Technical Documentation bằng tiếng Anh cho developer: cấu trúc chuẩn, template README, API docs, architecture docs, runbook. Bảng từ vựng EN-VN, mẫu câu, best practices và lỗi thường gặp."
tags: ["technical-writing", "documentation", "workplace-english", "developer", "best-practices"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn join dự án mới, mở repository và thấy:

- README.md: *"TODO: add docs"*
- Wiki: trống trơn
- Architecture diagram: không tồn tại

😱 Kết quả? Mất 2 tuần onboarding thay vì 2 ngày.

**Technical documentation** (tài liệu kỹ thuật) là kỹ năng mà hầu hết developer đều biết là quan trọng... nhưng ít ai viết tốt, **đặc biệt bằng tiếng Anh**.

Bài viết này sẽ giúp bạn:

- Hiểu **các loại** technical documentation
- Nắm **cấu trúc chuẩn** cho từng loại
- Có **template** copy-paste ngay được
- Học **từ vựng và mẫu câu** chuyên dụng

---

## 1. Các Loại Technical Documentation

### Bảng Tổng Quan

| Loại tài liệu | Mục đích | Đối tượng |
|---|---|---|
| **README** | Giới thiệu dự án, hướng dẫn cài đặt | Mọi người |
| **API Documentation** | Mô tả endpoints, request/response | Frontend dev, đối tác |
| **Architecture Document** | Thiết kế hệ thống tổng quan | Dev team, architect |
| **Runbook** | Hướng dẫn vận hành, xử lý sự cố | DevOps, SRE |
| **ADR (Architecture Decision Record)** | Ghi lại quyết định kiến trúc | Dev team hiện tại & tương lai |
| **Changelog** | Lịch sử thay đổi | Users, dev team |
| **Onboarding Guide** | Hướng dẫn cho người mới | New team members |

---

## 2. README — Bộ Mặt Của Dự Án

README là thứ **đầu tiên** mọi người đọc. Một README tốt = onboarding nhanh hơn 10 lần.

### Cấu Trúc Chuẩn

```markdown
# Project Name

Brief description of what this project does and why it exists.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- Feature 1: Brief description
- Feature 2: Brief description

## Prerequisites
- Node.js >= 18.0
- PostgreSQL >= 14
- Docker (optional)

## Installation

```bash
git clone https://github.com/org/project.git
cd project
npm install
cp .env.example .env
```

## Usage

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run test       # Run tests
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `DB_URL` | Database connection string | - |

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License
This project is licensed under the MIT License.
```

### Mẫu Câu Hay Dùng Trong README

| English | Tiếng Việt |
|---|---|
| This project provides... | Dự án này cung cấp... |
| Built with [technology] | Được xây dựng bằng [công nghệ] |
| Make sure you have... installed | Đảm bảo bạn đã cài... |
| Clone the repository and run... | Clone repo và chạy... |
| See the [docs] for more details | Xem [tài liệu] để biết thêm chi tiết |
| Contributions are welcome! | Chào đón mọi đóng góp! |

---

## 3. Architecture Document — Thiết Kế Hệ Thống

### Cấu Trúc Chuẩn

```markdown
# Architecture Document — [System Name]

## 1. Overview
Brief description of the system and its purpose.

## 2. Context Diagram
How the system fits into the larger ecosystem.

## 3. Components
### 3.1 API Gateway
- **Responsibility:** Route and authenticate requests
- **Technology:** Kong / AWS API Gateway
- **Communication:** REST over HTTPS

### 3.2 User Service
- **Responsibility:** Manage user accounts and authentication
- **Technology:** Node.js + Express
- **Database:** PostgreSQL

## 4. Data Flow
Describe how data moves through the system.

## 5. Non-Functional Requirements
| Requirement | Target |
|-------------|--------|
| Response time | < 200ms (p95) |
| Availability | 99.9% |
| Throughput | 1000 RPS |

## 6. Security Considerations
- All traffic encrypted via TLS 1.3
- JWT-based authentication
- Rate limiting: 100 req/min per user

## 7. Trade-offs and Decisions
Link to relevant ADRs.
```

### Từ Vựng Architecture Document

| English | IPA | Tiếng Việt |
|---|---|---|
| scalability | /ˌskeɪ.ləˈbɪl.ə.ti/ | khả năng mở rộng |
| availability | /əˌveɪ.ləˈbɪl.ə.ti/ | tính sẵn sàng |
| throughput | /ˈθruː.pʊt/ | thông lượng |
| latency | /ˈleɪ.tən.si/ | độ trễ |
| trade-off | /ˈtreɪd.ɒf/ | sự đánh đổi |
| bottleneck | /ˈbɒt.əl.nek/ | nút thắt cổ chai |
| fault tolerance | /fɔːlt ˈtɒl.ər.əns/ | chịu lỗi |
| idempotent | /ˌaɪ.dɛmˈpoʊ.tənt/ | lũy đẳng |
| eventual consistency | /ɪˌven.tʃu.əl kənˈsɪs.tən.si/ | nhất quán cuối cùng |
| single point of failure | /ˌsɪŋ.ɡəl pɔɪnt əv ˈfeɪ.ljər/ | điểm lỗi đơn |

---

## 4. Runbook — Sổ Tay Vận Hành

Runbook giúp team **xử lý sự cố nhanh chóng** mà không cần "người biết" online.

### Cấu Trúc Chuẩn

```markdown
# Runbook — [Service Name]

## Alert: High CPU Usage

### Severity: P2 (High)

### Symptoms
- CPU usage > 90% for more than 5 minutes
- Response time degraded (> 2s p95)
- Alert fired: `cpu_usage_critical`

### Diagnosis Steps
1. Check current CPU usage:
   ```bash
   kubectl top pods -n production
   ```
2. Identify the problematic pod:
   ```bash
   kubectl logs <pod-name> --tail=100
   ```
3. Check for recent deployments:
   ```bash
   kubectl rollout history deployment/api-server
   ```

### Resolution
**Option A — Scale horizontally:**
```bash
kubectl scale deployment/api-server --replicas=5
```

**Option B — Rollback if caused by recent deploy:**
```bash
kubectl rollout undo deployment/api-server
```

### Escalation
If unresolved after 15 minutes, escalate to:
- On-call SRE: #sre-oncall Slack channel
- Engineering Manager: @jane.doe
```

### Mẫu Câu Hay Dùng Trong Runbook

| English | Tiếng Việt |
|---|---|
| This alert fires when... | Cảnh báo này kích hoạt khi... |
| First, verify that... | Đầu tiên, xác nhận rằng... |
| If the issue persists... | Nếu vấn đề vẫn tiếp tục... |
| Escalate to [team] if unresolved after [time] | Chuyển lên [team] nếu chưa giải quyết sau [thời gian] |
| This is a known issue caused by... | Đây là vấn đề đã biết do... |
| No action required; this is expected behavior | Không cần xử lý; đây là hành vi bình thường |

---

## 5. ADR — Architecture Decision Record

ADR ghi lại **tại sao** team đưa ra quyết định kỹ thuật — vô cùng quan trọng cho người join sau.

### Template ADR

```markdown
# ADR-001: Use PostgreSQL as Primary Database

## Status: Accepted

## Date: 2026-04-09

## Context
We need a relational database for our e-commerce platform.
The system requires ACID transactions, complex queries,
and JSON storage for flexible product attributes.

## Decision
We will use PostgreSQL 16 as our primary database.

## Alternatives Considered
| Option | Pros | Cons |
|--------|------|------|
| MySQL | Familiar to team, good performance | Weaker JSON support |
| MongoDB | Flexible schema, easy scaling | No ACID across collections |
| PostgreSQL | Strong JSON, ACID, extensions | Slightly harder ops |

## Consequences
### Positive
- Full ACID compliance for order transactions
- JSONB support for flexible product schemas
- Rich extension ecosystem (PostGIS, pg_vector)

### Negative
- Team needs training on PostgreSQL-specific features
- Horizontal scaling requires more planning (Citus, read replicas)

### Risks
- Vendor lock-in to PostgreSQL-specific features (JSONB operators)
```

---

## 6. Best Practices — Viết Documentation Tốt

### ✅ Nên Làm

| Practice | Ví dụ |
|---|---|
| **Use active voice** | "The system sends a notification" ✅ (không phải "A notification is sent") |
| **Be specific** | "Responds within 200ms" ✅ (không phải "Responds quickly") |
| **Include examples** | Luôn có code snippet hoặc sample request |
| **Keep it updated** | Thêm vào Definition of Done: "Update docs" |
| **Use consistent terminology** | Chọn 1 từ và dùng xuyên suốt (user vs. customer — chọn 1) |
| **Add diagrams** | "A picture is worth a thousand words" — dùng Mermaid, PlantUML |

### ❌ Không Nên

| Lỗi thường gặp | Vấn đề |
|---|---|
| "This is self-explanatory" | Không bao giờ self-explanatory cho người mới |
| Quá dài, quá chi tiết | Không ai đọc. Viết ngắn gọn, link đến chi tiết |
| Copy-paste code cũ | Code thay đổi, docs không update = misleading |
| Viết 1 lần rồi quên | Docs outdated = docs dangerous |

---

## 7. Từ Vựng Technical Writing

| English | IPA | Tiếng Việt |
|---|---|---|
| prerequisite | /priːˈrek.wɪ.zɪt/ | điều kiện tiên quyết |
| boilerplate | /ˈbɔɪ.lə.pleɪt/ | mẫu có sẵn, code/text lặp lại |
| deprecated | /ˈdep.rə.keɪ.tɪd/ | không còn được khuyên dùng |
| out of scope | /aʊt əv skoʊp/ | ngoài phạm vi |
| edge case | /edʒ keɪs/ | trường hợp biên |
| caveat | /ˈkæv.i.æt/ | lưu ý, cảnh báo |
| verbose | /vɜːrˈboʊs/ | chi tiết, dài dòng |
| concise | /kənˈsaɪs/ | ngắn gọn, súc tích |
| stakeholder | /ˈsteɪk.hoʊl.dər/ | bên liên quan |
| maintainability | /meɪnˌteɪ.nəˈbɪl.ə.ti/ | khả năng bảo trì |

---

## 8. Mẫu Câu Thường Dùng Khi Viết Docs

### Giới thiệu

- *"This document describes the architecture of..."*
- *"The purpose of this guide is to help developers..."*
- *"This section covers the setup and configuration of..."*

### Hướng dẫn

- *"To get started, you need to..."*
- *"Make sure the following dependencies are installed:..."*
- *"Run the following command to..."*
- *"See [section] for more details."*

### Cảnh báo

- *"⚠️ Note: This operation is irreversible."*
- *"⚠️ Important: Do not run this in production without..."*
- *"This feature is deprecated and will be removed in v3.0."*

### Tham khảo

- *"For further reading, see..."*
- *"Refer to the [API docs] for the full list of endpoints."*
- *"This decision is documented in ADR-001."*

---

## 9. Practice — Bài Tập Thực Hành

### Bài tập 1: Viết README
Chọn một side project của bạn và viết README theo cấu trúc ở mục 2. Đảm bảo có đủ:
- [ ] Project description
- [ ] Prerequisites
- [ ] Installation steps
- [ ] Usage examples
- [ ] Configuration table

### Bài tập 2: Viết ADR
Nghĩ về một quyết định kỹ thuật gần đây (chọn framework, database, hosting...) và viết ADR theo template ở mục 5. Bao gồm:
- [ ] Context (tại sao cần quyết định)
- [ ] Alternatives considered (so sánh ít nhất 2 lựa chọn)
- [ ] Consequences (positive + negative)

### Bài tập 3: Sửa lỗi
Các câu sau có vấn đề gì? Viết lại cho tốt hơn:

1. *"The data is processed by the system."* → Chuyển sang active voice
2. *"This is fast."* → Thêm con số cụ thể
3. *"Just run the script."* → Thêm hướng dẫn chi tiết

<details>
<summary>📝 Đáp án gợi ý</summary>

1. *"The system processes the data."* hoặc *"The system processes incoming data within 50ms."*
2. *"The API responds within 200ms at the 95th percentile."*
3. *"Run the migration script: `npm run db:migrate`. This applies all pending database migrations."*

</details>

---

## Kết Luận

> "The palest ink is better than the best memory." — Proverb

Documentation không glamorous, nhưng nó là thứ **phân biệt team chuyên nghiệp và team nghiệp dư**.

Bắt đầu nhỏ:
1. **Viết README** cho project hiện tại
2. **Ghi ADR** cho quyết định kỹ thuật tiếp theo
3. **Tạo runbook** cho service quan trọng nhất

Mỗi ngày viết thêm một chút — 6 tháng sau, team bạn sẽ cảm ơn bạn (và bạn của 6 tháng trước cũng sẽ cảm ơn chính mình) 📝✨
