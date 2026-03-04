---
title: "Cách viết Technical Proposal / RFC bằng tiếng Anh"
slug: "cach-viet-technical-proposal-rfc-bang-tieng-anh"
date: 2023-03-13
summary: "Hướng dẫn viết Technical Proposal / RFC bằng tiếng Anh — problem statement, proposed solution, alternatives, timeline và template copy-paste."
description: "Học cách viết Technical Proposal và RFC bằng tiếng Anh cho developer. Bao gồm template chuẩn, mẫu câu cho problem statement, proposed solution."
tags: ["workplace-english", "networking", "it-english"]
categories: ["Workplace English"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Technical Proposal (hay RFC — Request for Comments) là tài liệu đề xuất giải pháp kỹ thuật cho một vấn đề cụ thể. Đây là kỹ năng viết quan trọng cho **Senior Developer, Tech Lead, và Architect** — đặc biệt khi làm việc trong môi trường quốc tế.

Bài viết này giúp bạn:
- Nắm **cấu trúc chuẩn** của Technical Proposal / RFC
- Có **template** dùng ngay
- Biết **mẫu câu** cho từng phần
- Viết proposal thuyết phục, rõ ràng

---

## 1. Cấu trúc Technical Proposal / RFC

| Phần | Mục đích |
|------|----------|
| **Title & Metadata** | Tên, tác giả, ngày, trạng thái |
| **Summary / TL;DR** | Tóm tắt 2-3 câu |
| **Problem Statement** | Vấn đề cần giải quyết |
| **Proposed Solution** | Giải pháp đề xuất |
| **Alternatives Considered** | Các phương án khác đã cân nhắc |
| **Technical Design** | Chi tiết kỹ thuật |
| **Migration / Rollout Plan** | Kế hoạch triển khai |
| **Timeline** | Thời gian dự kiến |
| **Risks & Mitigations** | Rủi ro và cách giảm thiểu |
| **Open Questions** | Câu hỏi chưa có đáp án |

---

## 2. Template đầy đủ

```markdown
# RFC: [Title]

| Field | Value |
|-------|-------|
| Author | [Your name] |
| Status | Draft / In Review / Approved / Rejected |
| Created | [Date] |
| Last Updated | [Date] |
| Reviewers | [Names] |

## Summary
[2-3 sentences describing what this RFC proposes and why.]

## Problem Statement
[Describe the current problem. Include data, metrics, or user feedback if available.]

## Proposed Solution
[Describe your recommended approach in detail.]

### Technical Design
[Architecture diagrams, data flow, API contracts, schema changes, etc.]

## Alternatives Considered

### Alternative 1: [Name]
- **Pros:** ...
- **Cons:** ...
- **Why not:** ...

### Alternative 2: [Name]
- **Pros:** ...
- **Cons:** ...
- **Why not:** ...

## Migration / Rollout Plan
[How will this be deployed? Feature flags? Gradual rollout? Data migration?]

## Timeline
| Phase | Description | Duration |
|-------|-------------|----------|
| Phase 1 | [Description] | [X weeks] |
| Phase 2 | [Description] | [X weeks] |

## Risks & Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| [Risk 1] | [High/Medium/Low] | [How to mitigate] |

## Open Questions
- [ ] [Question 1]
- [ ] [Question 2]
```

---

## 3. Mẫu câu cho Problem Statement

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| Our current system **struggles to handle** more than 5K concurrent connections. | Hệ thống hiện tại **khó xử lý** hơn 5K kết nối đồng thời. |
| The existing architecture **doesn't support** horizontal scaling. | Kiến trúc hiện tại **không hỗ trợ** horizontal scaling. |
| We've observed a **30% increase** in error rates over the past month. | Chúng tôi nhận thấy **tỉ lệ lỗi tăng 30%** trong tháng qua. |
| Customers have reported **frequent timeouts** when accessing the dashboard. | Khách hàng báo cáo **timeout thường xuyên** khi truy cập dashboard. |
| The current deployment process **takes 45 minutes** and requires manual intervention. | Quy trình deploy hiện tại **mất 45 phút** và cần can thiệp thủ công. |
| This has resulted in **$50K/month** in lost revenue due to failed transactions. | Điều này gây ra **mất $50K/tháng** doanh thu do giao dịch thất bại. |

---

## 4. Mẫu câu cho Proposed Solution

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| I **propose** migrating from a monolithic architecture to microservices. | Tôi **đề xuất** chuyển từ monolithic sang microservices. |
| The recommended approach is to **introduce** a message queue between services. | Cách tiếp cận đề xuất là **giới thiệu** message queue giữa các service. |
| This solution **leverages** existing infrastructure to minimize costs. | Giải pháp này **tận dụng** hạ tầng hiện có để giảm chi phí. |
| We can **achieve this by** implementing a CQRS pattern with event sourcing. | Chúng ta có thể **đạt được điều này bằng cách** implement CQRS pattern với event sourcing. |
| The key benefit is **a 10x improvement** in query response time. | Lợi ích chính là **cải thiện 10 lần** thời gian phản hồi query. |
| This approach **aligns with** our long-term goal of cloud-native architecture. | Cách tiếp cận này **phù hợp với** mục tiêu dài hạn về cloud-native architecture. |

---

## 5. Mẫu câu cho Alternatives Considered

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| We **also evaluated** using a third-party service like Algolia. | Chúng tôi **cũng đánh giá** việc dùng dịch vụ bên thứ ba như Algolia. |
| **While this approach** is simpler, it introduces vendor lock-in. | **Dù cách này** đơn giản hơn, nó tạo ra vendor lock-in. |
| The **trade-off** is higher initial cost but lower maintenance overhead. | **Sự đánh đổi** là chi phí ban đầu cao hơn nhưng bảo trì nhẹ hơn. |
| We **ruled out** Option B because it doesn't meet our latency requirements. | Chúng tôi **loại** Phương án B vì không đáp ứng yêu cầu latency. |
| This was **rejected due to** licensing costs exceeding our budget. | Phương án này **bị loại do** chi phí license vượt ngân sách. |

---

## 6. Mẫu câu cho Timeline & Risks

### Timeline

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| The estimated timeline is **8 weeks** from approval to production. | Thời gian ước tính là **8 tuần** từ khi được duyệt đến production. |
| Phase 1 will **focus on** building the core infrastructure. | Phase 1 sẽ **tập trung vào** xây dựng hạ tầng cốt lõi. |
| We plan to **roll out** to 10% of users in the first week. | Chúng tôi dự định **triển khai** cho 10% người dùng trong tuần đầu. |

### Risks

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| The main risk is **data consistency** during the migration window. | Rủi ro chính là **tính nhất quán dữ liệu** trong thời gian migration. |
| To **mitigate** this, we'll implement a dual-write strategy. | Để **giảm thiểu**, chúng tôi sẽ implement chiến lược dual-write. |
| There's a risk of **scope creep** if requirements change mid-project. | Có rủi ro **phình phạm vi** nếu yêu cầu thay đổi giữa dự án. |
| **Worst case scenario:** rollback to the previous system within 2 hours. | **Trường hợp xấu nhất:** rollback về hệ thống cũ trong 2 giờ. |

---

## 7. Bảng từ vựng Technical Proposal

| Từ/Cụm từ | Phát âm IPA | Nghĩa tiếng Việt |
|-----------|-------------|-------------------|
| RFC | /ˌɑːr.ef.ˈsiː/ | Request for Comments — tài liệu đề xuất |
| proposal | /prəˈpoʊ.zəl/ | đề xuất |
| trade-off | /ˈtreɪd.ɒf/ | sự đánh đổi |
| scope creep | /skoʊp kriːp/ | phình phạm vi dự án |
| mitigation | /ˌmɪt.ɪˈɡeɪ.ʃən/ | giảm thiểu rủi ro |
| rollout | /ˈroʊl.aʊt/ | triển khai |
| vendor lock-in | /ˈven.dər lɒk ɪn/ | phụ thuộc nhà cung cấp |
| dual-write | /ˈduː.əl raɪt/ | ghi song song |
| bottleneck | /ˈbɒt.əl.nek/ | điểm nghẽn |
| feasibility | /ˌfiː.zəˈbɪl.ə.ti/ | tính khả thi |

---

## 8. Ví dụ RFC thực tế (tóm tắt)

### RFC: Migrate Search from SQL to Elasticsearch

**Summary:** Propose migrating our product search from SQL LIKE queries to Elasticsearch to improve search relevance and reduce query latency from 2s to under 200ms.

**Problem:** Current SQL-based search is slow (avg 2s), doesn't support fuzzy matching, and causes high CPU usage on the primary database during peak hours.

**Proposed Solution:** Deploy a 3-node Elasticsearch cluster, sync data via Change Data Capture (CDC), and introduce a search API gateway.

**Alternatives:**
- **Algolia** — faster to implement but costs $2K/month at our scale
- **PostgreSQL Full-Text Search** — lower cost but limited fuzzy matching

**Timeline:** 6 weeks (2 weeks infra + 2 weeks integration + 2 weeks testing)

**Key Risk:** Data sync lag during peak hours → Mitigated by CDC with sub-second replication.

---

## 9. Bài tập thực hành

### Exercise 1: Viết Problem Statement

Viết problem statement cho tình huống sau: Hệ thống CI/CD hiện tại dùng Jenkins, mất 40 phút để build và deploy, thường xuyên bị lỗi do plugin cũ.

<details>
<summary>📝 Đáp án gợi ý</summary>

"Our current CI/CD pipeline, built on Jenkins, takes an average of 40 minutes per build-deploy cycle. Over the past quarter, we've experienced 15+ build failures caused by outdated and incompatible plugins. This has led to slower release cycles (bi-weekly instead of our target of daily deployments) and significant developer frustration, with engineers spending approximately 5 hours per week troubleshooting pipeline issues."

</details>

### Exercise 2: So sánh Alternatives

Viết phần Alternatives Considered so sánh GitHub Actions vs GitLab CI cho tình huống trên.

<details>
<summary>📝 Đáp án gợi ý</summary>

**Alternative 1: GitHub Actions**
- **Pros:** Native integration with our GitHub repos, generous free tier, large marketplace of actions, YAML-based configuration
- **Cons:** Limited self-hosted runner support, potential vendor lock-in
- **Why not:** This is actually our recommended option

**Alternative 2: GitLab CI**
- **Pros:** Built-in container registry, strong security scanning features, self-hosted option
- **Cons:** Would require migrating our repos from GitHub to GitLab, team has no GitLab experience
- **Why not:** The migration effort and learning curve outweigh the benefits for our team size

</details>

---

## Tổng kết

Viết Technical Proposal / RFC tốt là kỹ năng giúp bạn **thăng tiến** từ developer lên Tech Lead và Architect. Một proposal rõ ràng, có data, so sánh alternatives sẽ thuyết phục stakeholders nhanh hơn.

**Nhớ 3 nguyên tắc:** Problem có data — Solution có trade-offs — Timeline có milestones.

Chúc bạn viết proposal ngày càng thuyết phục! 📝
