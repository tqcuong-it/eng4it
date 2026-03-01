---
title: "Technical Documentation — 12 Thuật Ngữ Viết Tài Liệu Kỹ Thuật"
date: 2023-03-04
slug: "tu-vung-technical-documentation-viet-tai-lieu"
description: "Học 12 thuật ngữ tiếng Anh về Technical Documentation — từ README, changelog, specification đến API docs, runbook, architecture decision record. Dành cho developer."
categories: ["IT English"]
tags: ["workplace-english", "backend"]
ShowToc: true
TocOpen: true
draft: false
---

"Code tự giải thích" là lời nói dối lớn nhất ngành IT. Dù code clean đến đâu, bạn vẫn cần documentation. Từ README, changelog đến API docs — cùng học các thuật ngữ để viết tài liệu như một pro! 📄

---

### 🔹 Tài liệu dự án

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| README | /ˈriːdmiː/ | tệp giới thiệu — file đầu tiên mô tả project, cách cài đặt và sử dụng | Every open-source project should have a clear **README** with setup instructions. |
| changelog | /ˈtʃeɪndʒlɔːɡ/ | nhật ký thay đổi — file ghi lại các thay đổi qua từng phiên bản | Check the **changelog** to see what's new in version 3.2.0. |
| specification | /ˌspɛsɪfɪˈkeɪʃən/ | đặc tả — tài liệu mô tả chi tiết yêu cầu hoặc thiết kế | The API **specification** follows the OpenAPI 3.0 standard. |
| wiki | /ˈwɪki/ | wiki — hệ thống tài liệu dạng web có thể chỉnh sửa cộng tác | Our team maintains a Confluence **wiki** with all the onboarding guides and architecture docs. |
| version | /ˈvɜːrʒən/ | phiên bản — số hiệu đánh dấu trạng thái của phần mềm tại một thời điểm | We're currently on **version** 2.4.1 — the next major release will be 3.0. |

### 🔹 Sơ đồ & Thiết kế

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| diagram | /ˈdaɪəɡræm/ | sơ đồ — hình vẽ minh họa kiến trúc hoặc quy trình | I drew a system **diagram** to show how the microservices communicate with each other. |
| sequence diagram | /ˈsiːkwəns ˈdaɪəɡræm/ | sơ đồ tuần tự — sơ đồ thể hiện thứ tự tương tác giữa các thành phần | The **sequence diagram** shows the request flow from the client to the database and back. |
| flowchart | /ˈfloʊtʃɑːrt/ | lưu đồ — sơ đồ thể hiện các bước trong một quy trình | We created a **flowchart** to document the user registration process step by step. |
| architecture decision record | /ˈɑːrkɪtɛktʃər dɪˈsɪʒən ˈrɛkərd/ | bản ghi quyết định kiến trúc — tài liệu ghi lại lý do chọn giải pháp kỹ thuật | We wrote an **architecture decision record** explaining why we chose Kafka over RabbitMQ. |

### 🔹 Tài liệu vận hành

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| API docs | /eɪ piː aɪ dɑːks/ | tài liệu API — tài liệu mô tả endpoints, request/response của API | Our **API docs** are auto-generated from Swagger annotations in the code. |
| runbook | /ˈrʌnbʊk/ | sổ tay vận hành — hướng dẫn từng bước xử lý sự cố hoặc tác vụ vận hành | The on-call engineer followed the **runbook** to restart the crashed service in under 5 minutes. |
| deprecation notice | /ˌdɛprɪˈkeɪʃən ˈnoʊtɪs/ | thông báo ngưng hỗ trợ — thông báo một tính năng sẽ bị loại bỏ | We published a **deprecation notice** giving users 6 months to migrate from API v1 to v2. |

---

## 💡 Mẹo ghi nhớ

- **README = Tấm danh thiếp**: README là thứ đầu tiên người ta đọc khi vào repo. README tốt = first impression tốt. Luôn có: What, Why, How to install, How to use.
- **ADR (Architecture Decision Record)**: Khi ai hỏi "tại sao dùng Kafka mà không dùng RabbitMQ?", ADR trả lời thay bạn. Viết ADR = save future-you khỏi phải giải thích lại.
- **Runbook vs README**: README = "project này là gì, dùng sao". Runbook = "server sập thì làm gì". README cho developer, Runbook cho ops/on-call.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The project ___ explains how to install dependencies and run the application locally.
2. We use a ___ to visualize the request flow between microservices.
3. The ___ for version 4.0 lists all new features, bug fixes, and breaking changes.
4. Our on-call team follows a detailed ___ when the database connection pool is exhausted.
5. We posted a ___ announcing that the legacy REST endpoint will be removed in 6 months.

{{< spoiler "✅ Đáp án" >}}
1. **README** — README là file đầu tiên mô tả project và hướng dẫn cài đặt
2. **sequence diagram** — Sequence diagram thể hiện thứ tự tương tác giữa các service
3. **changelog** — Changelog ghi lại tất cả thay đổi qua từng version
4. **runbook** — Runbook là hướng dẫn từng bước xử lý sự cố
5. **deprecation notice** — Deprecation notice thông báo tính năng sắp bị loại bỏ
{{< /spoiler >}}

---

## Tổng kết

Documentation tốt là dấu hiệu của một team chuyên nghiệp. Viết tài liệu không chỉ giúp người khác — mà còn giúp chính bạn trong tương lai khi quay lại đọc code cũ. Write docs, save lives! 📝
