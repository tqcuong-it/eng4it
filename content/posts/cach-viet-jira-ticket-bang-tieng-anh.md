---
title: "Cách Viết Jira Ticket Bằng Tiếng Anh — User Story, Task & Bug"
slug: "cach-viet-jira-ticket-bang-tieng-anh"
date: 2026-04-11
summary: "Hướng dẫn viết Jira ticket chuẩn tiếng Anh: User Story, Task, Bug. Mẫu câu, từ vựng, ví dụ thực tế cho developer & PM."
description: "Cách viết Jira ticket bằng tiếng Anh chuẩn: User Story format, Task description, Bug report. Từ vựng project management, mẫu câu acceptance criteria, definition of done. Bảng EN-VN cho developer Việt Nam."
tags: ["jira", "project-management", "workplace-english", "developer", "agile"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn đã bao giờ mở Jira và thấy những ticket kiểu này chưa?

```
Title: Fix bug
Description: (trống)
```

Hay:

```
Title: Làm tính năng login
Description: Anh cần tính năng login, em fix giúp nhé
```

😅 Không ai hiểu phải làm gì, scope tới đâu, test thế nào.

Trong môi trường làm việc quốc tế, **viết Jira ticket rõ ràng bằng tiếng Anh** là kỹ năng quan trọng mà developer, QA, và PM đều cần. Ticket tốt giúp team hiểu chính xác cần làm gì, giảm meeting, giảm miscommunication.

Bài viết này hướng dẫn bạn cách viết **3 loại ticket phổ biến nhất**: User Story, Task, và Bug — với mẫu câu, từ vựng, và ví dụ thực tế.

---

## 1. User Story — Mô Tả Tính Năng Từ Góc Nhìn Người Dùng

### Format chuẩn

```
As a [role], I want to [action], so that [benefit].
```

### Ví dụ thực tế

| User Story | Giải thích |
|-----------|-----------|
| As a **logged-in user**, I want to **reset my password via email**, so that **I can regain access if I forget it**. | Người dùng đã đăng nhập muốn đổi mật khẩu qua email |
| As an **admin**, I want to **export user data as CSV**, so that **I can generate monthly reports**. | Admin muốn xuất dữ liệu người dùng dạng CSV |
| As a **mobile user**, I want to **receive push notifications for order updates**, so that **I can track my delivery in real time**. | Người dùng mobile muốn nhận thông báo đơn hàng |

### Acceptance Criteria (Tiêu chí chấp nhận)

Đây là phần **quan trọng nhất** — nếu thiếu, developer không biết khi nào thì "xong".

**Format Given-When-Then:**

```
Given [precondition]
When [action]
Then [expected result]
```

**Ví dụ:**

```
Acceptance Criteria:

Given the user is on the login page
When they click "Forgot Password" and enter their email
Then they receive a password reset link within 5 minutes

Given the reset link is valid
When the user sets a new password (min 8 characters)
Then they are redirected to the login page with a success message

Given the reset link has expired (after 24 hours)
When the user clicks the link
Then they see an error message: "This link has expired"
```

### Các mẫu câu hay dùng trong User Story

| English | Tiếng Việt |
|---------|-----------|
| As a user, I want to... | Là người dùng, tôi muốn... |
| So that I can... | Để tôi có thể... |
| This feature should... | Tính năng này nên... |
| The system shall... | Hệ thống sẽ... |
| Out of scope: ... | Ngoài phạm vi: ... |
| Edge case: ... | Trường hợp biên: ... |
| Dependencies: ... | Phụ thuộc: ... |
| Priority: Critical / High / Medium / Low | Mức ưu tiên: Nghiêm trọng / Cao / Trung bình / Thấp |

---

## 2. Task — Công Việc Kỹ Thuật Cụ Thể

Task khác User Story ở chỗ: nó **không viết từ góc nhìn người dùng**, mà mô tả **công việc kỹ thuật** cần làm.

### Template

```
Title: [Verb] + [Object] + [Context]

Description:
## Objective
[What needs to be done and why]

## Technical Details
- [Detail 1]
- [Detail 2]

## Definition of Done
- [ ] [Checklist item 1]
- [ ] [Checklist item 2]

## Notes
[Any additional context]
```

### Ví dụ thực tế

```
Title: Set up CI/CD pipeline for staging environment

Description:
## Objective
Configure GitHub Actions to automatically deploy the staging
branch to our AWS staging environment, reducing manual deployment
time from 30 minutes to under 5 minutes.

## Technical Details
- Create `.github/workflows/staging-deploy.yml`
- Use AWS ECS Fargate for container deployment
- Add Slack notification on deployment success/failure
- Environment variables stored in GitHub Secrets

## Definition of Done
- [ ] Pipeline triggers on push to `staging` branch
- [ ] Docker image built and pushed to ECR
- [ ] ECS service updated with new task definition
- [ ] Slack notification sent on success and failure
- [ ] Pipeline runs under 10 minutes
- [ ] Documentation updated in README

## Notes
- Reuse existing Dockerfile from production pipeline
- Staging DB credentials in AWS Secrets Manager
```

### Động từ hay dùng trong Task title

| Verb | Nghĩa | Ví dụ |
|------|--------|-------|
| Set up | Thiết lập | Set up monitoring dashboard |
| Implement | Triển khai | Implement caching layer |
| Configure | Cấu hình | Configure SSL certificates |
| Migrate | Di chuyển | Migrate database to PostgreSQL |
| Refactor | Tái cấu trúc | Refactor authentication module |
| Optimize | Tối ưu | Optimize image loading performance |
| Upgrade | Nâng cấp | Upgrade Node.js to v20 LTS |
| Integrate | Tích hợp | Integrate Stripe payment gateway |
| Investigate | Điều tra | Investigate memory leak in production |
| Document | Viết tài liệu | Document API endpoints |

---

## 3. Bug Report — Báo Cáo Lỗi

### Template

```
Title: [Component] — [Brief description of the bug]

Description:
## Environment
- Browser/Device: [e.g., Chrome 120, iPhone 15]
- OS: [e.g., macOS 14.2, Android 14]
- Environment: [staging/production]
- Version/Build: [e.g., v2.3.1]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Screenshots/Logs
[Attach evidence]

## Severity
[Critical / Major / Minor / Trivial]

## Additional Context
[Any other relevant info]
```

### Ví dụ thực tế

```
Title: Checkout — Payment fails silently when using Visa cards

## Environment
- Browser: Chrome 122 on macOS 14.3
- Environment: Production
- Version: v3.1.0

## Steps to Reproduce
1. Add any item to cart
2. Proceed to checkout
3. Select "Credit Card" as payment method
4. Enter a valid Visa card number
5. Click "Place Order"

## Expected Behavior
Order is processed and user sees confirmation page.

## Actual Behavior
Page reloads without any error message. Order is NOT created.
Console shows: `Uncaught TypeError: Cannot read property
'token' of undefined`

## Screenshots/Logs
- Console error: [screenshot attached]
- Network tab shows 500 error on POST /api/payments

## Severity
Critical — Affects all Visa card payments (est. 60% of transactions)

## Additional Context
- Mastercard payments work correctly
- Issue started after deployment on 2026-04-09
- Possibly related to Stripe SDK upgrade in PR #847
```

### Mức độ nghiêm trọng (Severity)

| Severity | Nghĩa | Khi nào dùng |
|----------|--------|--------------|
| **Critical** /ˈkrɪtɪkəl/ | Nghiêm trọng | Hệ thống sập, mất dữ liệu, không dùng được |
| **Major** /ˈmeɪdʒər/ | Lớn | Tính năng chính bị lỗi, có workaround |
| **Minor** /ˈmaɪnər/ | Nhỏ | Tính năng phụ bị lỗi, ít ảnh hưởng |
| **Trivial** /ˈtrɪviəl/ | Rất nhỏ | Lỗi UI nhỏ, typo, cosmetic |

---

## 4. Bảng Từ Vựng Jira Quan Trọng

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt |
|---------|--------------|-------------------|
| **Ticket** | /ˈtɪkɪt/ | Phiếu công việc |
| **User Story** | /ˈjuːzər ˈstɔːri/ | Câu chuyện người dùng |
| **Epic** | /ˈɛpɪk/ | Nhóm tính năng lớn |
| **Sprint** | /sprɪnt/ | Giai đoạn phát triển (1-4 tuần) |
| **Backlog** | /ˈbæklɒɡ/ | Danh sách công việc chờ |
| **Acceptance Criteria** | /əkˈsɛptəns kraɪˈtɪəriə/ | Tiêu chí chấp nhận |
| **Definition of Done** | /ˌdɛfɪˈnɪʃən əv dʌn/ | Định nghĩa hoàn thành |
| **Blocker** | /ˈblɒkər/ | Vấn đề chặn tiến độ |
| **Assignee** | /ˌæsaɪˈniː/ | Người được giao việc |
| **Reporter** | /rɪˈpɔːrtər/ | Người báo cáo/tạo ticket |
| **Story Points** | /ˈstɔːri pɔɪnts/ | Điểm ước lượng độ phức tạp |
| **Subtask** | /ˈsʌbtɑːsk/ | Công việc con |
| **Linked Issue** | /lɪŋkt ˈɪʃuː/ | Vấn đề liên quan |
| **Due Date** | /djuː deɪt/ | Hạn chót |
| **Workflow** | /ˈwɜːrkfloʊ/ | Quy trình làm việc |
| **Resolution** | /ˌrɛzəˈluːʃən/ | Cách giải quyết |
| **Reproduce** | /ˌriːprəˈdjuːs/ | Tái hiện (lỗi) |
| **Workaround** | /ˈwɜːrkəˌraʊnd/ | Giải pháp tạm thời |
| **Regression** | /rɪˈɡrɛʃən/ | Lỗi quay lại (do code mới) |
| **Scope** | /skoʊp/ | Phạm vi công việc |

---

## 5. Những Lỗi Thường Gặp Khi Viết Ticket

### ❌ Sai → ✅ Đúng

| Sai | Đúng | Tại sao |
|-----|------|---------|
| "Fix login bug" | "Login — Users cannot log in with Google SSO on mobile" | Cụ thể component, vấn đề, platform |
| "Add new feature" | "Implement export-to-PDF for invoice page" | Nói rõ tính năng gì, ở đâu |
| "It doesn't work" | "API returns 500 when request body exceeds 10MB" | Mô tả chính xác lỗi gì |
| "ASAP" | "Priority: Critical — Blocking release v3.2" | Dùng severity level chuẩn |
| Description trống | Đủ Steps to Reproduce + Expected/Actual | Không ai đoán được ý bạn |
| "Em test thấy lỗi" | "Tested on Chrome 122, macOS 14.3, staging env" | Ghi rõ environment |

### Tips viết ticket tốt

1. **Một ticket = một việc** — Đừng gộp nhiều bug vào 1 ticket
2. **Title phải self-explanatory** — Đọc title là hiểu cần làm gì
3. **Luôn có Acceptance Criteria** — Không có = không biết khi nào xong
4. **Attach evidence** — Screenshot, log, video recording
5. **Link related tickets** — "Blocked by PROJ-123", "Related to PROJ-456"
6. **Update status** — Đừng để ticket "In Progress" 3 tuần không update

---

## 6. Mẫu Comment Trong Jira

Khi update tiến độ hoặc thảo luận trong ticket:

### Báo cáo tiến độ

```
Update: Completed the database migration script.
Currently running integration tests.
ETA for completion: Tomorrow EOD.
```

### Hỏi clarification

```
@PM — Could you clarify the expected behavior when the user
has multiple addresses? Should we:
a) Use the most recent address as default, or
b) Prompt the user to select one?

This affects the checkout flow and estimated effort.
```

### Báo blocker

```
⚠️ Blocked: Cannot proceed with payment integration.
The Stripe API key for staging is expired.

Action needed: @DevOps please update the key in AWS Secrets Manager.
Ref: PROJ-890
```

### Đóng ticket

```
Resolved in PR #523.
- Tested on staging ✅
- QA verified ✅
- Ready for production deployment.
```

---

## 7. Practice — Bài Tập Thực Hành

### Bài 1: Viết User Story

Viết User Story cho tính năng: **"Người dùng muốn lọc sản phẩm theo giá"**

Gợi ý format:
```
As a [___], I want to [___], so that [___].

Acceptance Criteria:
Given [___]
When [___]
Then [___]
```

### Bài 2: Viết Bug Report

Bạn phát hiện lỗi: **Nút "Add to Cart" không hoạt động trên Safari mobile**. Hãy viết bug report đầy đủ.

### Bài 3: Sửa ticket title

Sửa các title sau cho đúng chuẩn:

1. "bug" → ___
2. "update database" → ___
3. "khách hàng phàn nàn" → ___
4. "todo" → ___

<details>
<summary>📝 Đáp án gợi ý</summary>

**Bài 1:**
```
As a shopper, I want to filter products by price range,
so that I can quickly find items within my budget.

Acceptance Criteria:
Given the user is on the product listing page
When they set the price filter from $10 to $50
Then only products within that range are displayed
And the product count updates accordingly
```

**Bài 3:**
1. "Login — Google SSO returns 403 error on production"
2. "Migrate user table from MySQL 5.7 to MySQL 8.0"
3. "Dashboard — Page load time exceeds 10s for accounts with 1000+ records"
4. "Implement email notification for order status changes"

</details>

---

## Kết Luận

Viết Jira ticket tốt bằng tiếng Anh không khó — chỉ cần **follow template** và **đủ thông tin**. Nhớ 3 nguyên tắc:

1. **Clear** — Rõ ràng, ai đọc cũng hiểu
2. **Complete** — Đủ thông tin để bắt tay vào làm
3. **Concise** — Ngắn gọn, không lan man

Ticket tốt = ít meeting hơn = ship nhanh hơn = team vui hơn! 🚀

---

*Bài viết thuộc series [Workplace English](/categories/workplace-english/) — Tiếng Anh cho dân IT đi làm. Theo dõi eng4it.com để cập nhật bài mới mỗi ngày!*
