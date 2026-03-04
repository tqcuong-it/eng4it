---
title: "Cách viết Pull Request Description bằng tiếng Anh"
slug: "cach-viet-pull-request-description-bang-tieng-anh"
date: 2023-03-11
summary: "Hướng dẫn viết Pull Request Description tiếng Anh chuẩn — title convention, body template, reviewer notes và 15+ mẫu câu copy-paste."
description: "Học cách viết Pull Request Description bằng tiếng Anh cho developer. Bao gồm title convention, body template (what/why/how), reviewer notes."
tags: ["workplace-english", "networking", "it-english"]
categories: ["Workplace English"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Pull Request (PR) là cầu nối giữa code bạn viết và codebase chung của team. Một PR description tốt giúp reviewer **hiểu nhanh** bạn đã làm gì, tại sao, và cần review những gì. Ngược lại, PR description kém khiến reviewer mất thời gian, dễ bỏ sót bug, và làm chậm cả team.

Bài viết này sẽ giúp bạn:
- Viết **PR title** chuẩn convention
- Sử dụng **body template** What/Why/How
- Viết **reviewer notes** rõ ràng
- Có sẵn **15+ mẫu câu** dùng ngay

---

## 1. PR Title Convention

PR title là thứ đầu tiên reviewer nhìn thấy. Hãy viết ngắn gọn, mô tả chính xác thay đổi.

### Cấu trúc phổ biến

```
<type>(<scope>): <short description>
```

| Type | Nghĩa | Ví dụ |
|------|--------|-------|
| feat | Thêm tính năng mới | `feat(auth): add Google OAuth login` |
| fix | Sửa bug | `fix(cart): resolve negative quantity issue` |
| refactor | Tái cấu trúc, không đổi logic | `refactor(api): extract validation middleware` |
| docs | Cập nhật tài liệu | `docs(readme): update setup instructions` |
| chore | Công việc maintenance | `chore(deps): upgrade React to v18` |
| test | Thêm/sửa test | `test(user): add unit tests for signup flow` |
| perf | Cải thiện hiệu suất | `perf(query): add index on users.email` |

### Quy tắc viết title

- **Dùng imperative mood** (dạng mệnh lệnh): "Add feature" ❌ "Added feature"
- **Không kết thúc bằng dấu chấm**
- **Giới hạn 50-72 ký tự**
- **Viết thường chữ cái đầu** sau colon: `feat: add login` ❌ `feat: Add login`

---

## 2. Body Template — What / Why / How

### Template chuẩn

```markdown
## What
Brief description of the changes.

## Why
The motivation or context. Link to ticket/issue.

## How
Technical approach and key decisions.

## Testing
How this was tested.

## Screenshots (if applicable)
Before/after screenshots for UI changes.

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes
```

### Ví dụ thực tế

```markdown
## What
Add rate limiting to the public API endpoints using Redis-based token bucket algorithm.

## Why
We've been experiencing abuse on the `/api/search` endpoint (see incident #INC-234).
Current traffic from a single IP can reach 1000+ req/min, causing service degradation.

Ticket: PROJ-567

## How
- Implemented token bucket algorithm using Redis MULTI/EXEC for atomicity
- Default limit: 100 requests per minute per IP
- Configurable via environment variables (`RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW`)
- Returns `429 Too Many Requests` with `Retry-After` header

## Testing
- Added unit tests for the rate limiter middleware
- Load tested with k6 — verified limits are enforced correctly
- Tested Redis failover scenario — falls back to in-memory store

## Checklist
- [x] Tests added/updated
- [x] Documentation updated
- [x] No breaking changes
```

---

## 3. Reviewer Notes

Reviewer notes giúp người review biết **tập trung vào đâu** và **cẩn thận chỗ nào**.

### Mẫu câu cho Reviewer Notes

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| Please pay extra attention to the error handling in `service.go`. | Xin hãy chú ý kỹ phần error handling trong `service.go`. |
| The main logic change is in `processOrder()` — the rest is just renaming. | Thay đổi logic chính nằm trong `processOrder()` — phần còn lại chỉ là đổi tên. |
| I'm not 100% sure about the caching strategy — would love your input. | Tôi chưa chắc lắm về chiến lược caching — muốn nghe ý kiến bạn. |
| This is a large PR. I recommend reviewing commit by commit. | PR này khá lớn. Tôi khuyến nghị review từng commit. |
| The database migration is irreversible — please review carefully. | Migration database này không thể rollback — xin review cẩn thận. |

---

## 4. Mẫu câu hay dùng trong PR Description

### Mô tả thay đổi (What)

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| This PR **introduces** a new caching layer for the user service. | PR này giới thiệu một lớp caching mới cho user service. |
| This PR **adds support for** multi-language error messages. | PR này thêm hỗ trợ thông báo lỗi đa ngôn ngữ. |
| This PR **refactors** the authentication module to improve testability. | PR này tái cấu trúc module xác thực để dễ test hơn. |
| This PR **fixes** a race condition in the payment processing pipeline. | PR này sửa race condition trong pipeline xử lý thanh toán. |
| This PR **removes** the deprecated v1 API endpoints. | PR này xóa các endpoint API v1 đã deprecated. |

### Giải thích lý do (Why)

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| The current implementation **doesn't scale well** beyond 10K concurrent users. | Implementation hiện tại **không scale tốt** quá 10K user đồng thời. |
| This change is **required for** the upcoming GDPR compliance deadline. | Thay đổi này **cần thiết cho** deadline tuân thủ GDPR sắp tới. |
| We've received **multiple bug reports** about this behavior (see #123, #456). | Chúng tôi nhận được **nhiều báo cáo lỗi** về hành vi này (xem #123, #456). |
| This is a **prerequisite for** the new notification system. | Đây là **điều kiện tiên quyết cho** hệ thống notification mới. |

### Mô tả cách làm (How)

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| I **opted for** a decorator pattern to keep the changes minimal. | Tôi **chọn** decorator pattern để giữ thay đổi tối thiểu. |
| The migration **runs in batches** of 1000 to avoid locking the table. | Migration **chạy theo batch** 1000 records để tránh lock bảng. |
| I **added a feature flag** so we can roll this out gradually. | Tôi **thêm feature flag** để có thể triển khai dần dần. |

### Ghi chú cho reviewer

| Tiếng Anh | Tiếng Việt |
|-----------|------------|
| **Note:** This is a draft PR — feedback on the approach is welcome. | **Lưu ý:** Đây là draft PR — hoan nghênh góp ý về cách tiếp cận. |
| **Heads up:** This PR depends on #789 being merged first. | **Lưu ý:** PR này phụ thuộc vào #789 được merge trước. |
| **Breaking change:** The response format for `/api/users` has changed. | **Breaking change:** Format response cho `/api/users` đã thay đổi. |

---

## 5. Bảng từ vựng PR Description

| Từ/Cụm từ | Phát âm IPA | Nghĩa tiếng Việt |
|-----------|-------------|-------------------|
| pull request | /pʊl rɪˈkwest/ | yêu cầu merge code |
| merge conflict | /mɜːrdʒ ˈkɒn.flɪkt/ | xung đột khi merge |
| breaking change | /ˈbreɪ.kɪŋ tʃeɪndʒ/ | thay đổi gây lỗi tương thích |
| backward compatible | /ˈbæk.wərd kəmˈpæt.ə.bəl/ | tương thích ngược |
| prerequisite | /priːˈrek.wɪ.zɪt/ | điều kiện tiên quyết |
| scope | /skoʊp/ | phạm vi ảnh hưởng |
| roll out | /roʊl aʊt/ | triển khai dần dần |
| feature flag | /ˈfiː.tʃər flæɡ/ | cờ bật/tắt tính năng |
| draft PR | /dræft piːˈɑːr/ | PR nháp chưa hoàn chỉnh |
| stale PR | /steɪl piːˈɑːr/ | PR lâu không được cập nhật |

---

## 6. Những lỗi phổ biến cần tránh

| ❌ Sai | ✅ Đúng | Giải thích |
|--------|---------|-----------|
| "Fix stuff" | "fix(auth): resolve token expiration bug" | Title quá chung chung |
| "Updated code" | "refactor(api): extract shared validation logic" | Không mô tả cụ thể |
| Không có body | Có đầy đủ What/Why/How | Reviewer không biết bắt đầu từ đâu |
| "Please review ASAP!!!" | "This is time-sensitive due to [reason]." | Thiếu chuyên nghiệp |
| PR 2000+ dòng không giải thích | Chia nhỏ hoặc ghi rõ review guide | PR quá lớn khó review |

---

## 7. Bài tập thực hành

### Exercise 1: Viết PR Title

Viết PR title cho các tình huống sau:

1. Bạn thêm tính năng export PDF cho trang báo cáo
2. Bạn sửa bug hiển thị sai ngày tháng trên mobile
3. Bạn nâng cấp thư viện axios từ v0.21 lên v1.0

<details>
<summary>📝 Đáp án gợi ý</summary>

1. `feat(report): add PDF export functionality`
2. `fix(mobile): correct date display format on report page`
3. `chore(deps): upgrade axios from v0.21 to v1.0`

</details>

### Exercise 2: Viết PR Description

Bạn vừa thêm chức năng gửi email thông báo khi đơn hàng được giao. Hãy viết PR description đầy đủ bằng tiếng Anh (What/Why/How).

<details>
<summary>📝 Đáp án gợi ý</summary>

```markdown
## What
Add email notification when an order status changes to "delivered".

## Why
Customers have been requesting delivery confirmation emails (see feedback #892).
Currently, they have to manually check the app for order status updates.

Ticket: PROJ-234

## How
- Integrated with SendGrid API for email delivery
- Created an email template using the existing design system
- Added an event listener on the `order.statusChanged` event
- Emails are sent asynchronously via a background job queue

## Testing
- Unit tests for the email service
- Integration test verifying email is triggered on status change
- Tested with SendGrid sandbox mode

## Checklist
- [x] Tests added
- [x] Documentation updated
- [x] No breaking changes
```

</details>

---

## Tổng kết

PR Description chất lượng giúp **review nhanh hơn**, **ít bug hơn**, và **team hiểu nhau hơn**. Hãy đầu tư 5 phút viết description tốt để tiết kiệm 30 phút giải thích sau.

**Nhớ 3 nguyên tắc:** Title chuẩn convention — Body có What/Why/How — Reviewer notes rõ ràng.

Chúc bạn viết PR description ngày càng pro! 🚀

---

## 📚 Bài viết liên quan

- [Cách viết Weekly Report / Progress Update bằng tiếng Anh](/posts/cach-viet-weekly-report-progress-update-bang-tieng-anh/)
- [Cách viết Slack/Teams message chuyên nghiệp bằng tiếng Anh](/posts/cach-viet-slack-teams-message-chuyen-nghiep-bang-tieng-anh/)
- [Cách viết Technical Proposal / RFC bằng tiếng Anh](/posts/cach-viet-technical-proposal-rfc-bang-tieng-anh/)
