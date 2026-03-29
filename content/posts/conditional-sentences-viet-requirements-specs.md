---
title: "Conditional Sentences — Viết Requirements & Specs Bằng Tiếng Anh"
slug: "conditional-sentences-viet-requirements-specs"
date: 2026-03-30
summary: "Hướng dẫn dùng câu điều kiện (If/When/Unless) để viết requirements, specs, và test cases bằng tiếng Anh. Ví dụ thực tế cho developer."
description: "Cách dùng Conditional Sentences (Type 0, 1, 2, 3) trong requirements, technical specs, test cases, và error handling. Bảng từ vựng EN-VN, mẫu câu thực tế cho developer, bài tập practice."
tags: ["grammar", "conditional-sentences", "requirements", "technical-writing", "tieng-anh-can-ban", "developer"]
categories: ["tieng-anh-can-ban"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn đang viết requirements cho feature mới. Bạn cần diễn đạt:

> *"Nếu user nhập sai password 5 lần thì khóa tài khoản."*

Bằng tiếng Anh, bạn viết thế nào? 🤔

> ✅ *"**If** the user enters an incorrect password 5 times, the account **shall be** locked."*

Câu điều kiện (**Conditional Sentences**) là xương sống của requirements, specs, test cases, và error handling trong IT. Hầu hết mọi logic nghiệp vụ đều có dạng **"Nếu A thì B"**. Viết đúng câu điều kiện = specs rõ ràng, ít bug, ít misunderstanding.

Bài này hướng dẫn cách dùng từng loại Conditional phù hợp trong từng ngữ cảnh IT thực tế.

---

## 1. Tổng Quan 4 Loại Câu Điều Kiện

| Loại | Cấu trúc | Dùng khi | Ví dụ IT |
|---|---|---|---|
| **Type 0** (sự thật) | If + present, present | Quy luật luôn đúng | "If the server crashes, the watchdog restarts it." |
| **Type 1** (có thể xảy ra) | If + present, will/shall + V | Tình huống thực tế có thể xảy ra | "If the user clicks Submit, the form will be validated." |
| **Type 2** (giả định) | If + past, would + V | Tình huống giả định / không chắc | "If we had more budget, we would hire another developer." |
| **Type 3** (quá khứ không xảy ra) | If + past perfect, would have + V3 | Phân tích lỗi đã qua | "If we had added rate limiting, the server wouldn't have crashed." |

💡 **Trong IT:** Type 0 và Type 1 chiếm **90%** các câu điều kiện bạn sẽ viết. Type 2 dùng trong discussions, Type 3 dùng trong post-mortems.

---

## 2. Type 0 — Sự Thật & System Behavior

### Khi nào dùng?

Mô tả hành vi **luôn luôn xảy ra** — quy tắc hệ thống, logic cố định, default behavior.

### Công thức

```
If + Subject + V(present), Subject + V(present)
When + Subject + V(present), Subject + V(present)
```

### Ví dụ trong IT

| Câu điều kiện | Ngữ cảnh |
|---|---|
| "**If** the cache expires, the system **fetches** data from the database." | System architecture |
| "**When** a request times out, the client **retries** automatically." | API behavior |
| "**If** disk usage **exceeds** 90%, an alert **is triggered**." | Monitoring rules |
| "**When** the container **starts**, environment variables **are loaded** from `.env`." | Docker config |
| "**If** the JWT token **is invalid**, the API **returns** a 401 error." | Auth logic |

📌 **Lưu ý:** Với Type 0, **"When"** và **"If"** dùng thay thế được vì sự việc **luôn xảy ra**.

---

## 3. Type 1 — Requirements & Specifications

### Khi nào dùng?

Viết **requirements**, **user stories**, **acceptance criteria** — những điều kiện **có thể xảy ra** trong tương lai.

### Công thức

```
If + Subject + V(present), Subject + will/shall + V
```

💡 **"shall" vs "will":** Trong requirements formal (RFC, contract), **"shall"** = bắt buộc. **"will"** = dự kiến. Trong specs thông thường, dùng "will" là đủ.

### Ví dụ — User Stories & Acceptance Criteria

```markdown
## User Story
As a user, I want to reset my password so that I can regain
access to my account.

## Acceptance Criteria
1. If the user clicks "Forgot Password", the system shall
   display a password reset form.

2. If the user enters a valid email, a reset link will be
   sent within 60 seconds.

3. If the email is not registered, the system shall display
   a generic message (for security).

4. If the reset link expires (after 24h), the user will be
   asked to request a new one.

5. If the new password does not meet complexity requirements,
   an error message will be displayed.
```

### Ví dụ — Technical Specs

| Requirement | Conditional Sentence |
|---|---|
| Validate input | "**If** the input **contains** special characters, the system **will reject** the request." |
| Rate limiting | "**If** a user **exceeds** 100 requests/minute, the API **will return** a 429 status." |
| Auto-scaling | "**If** CPU usage **reaches** 80%, a new instance **will be** provisioned." |
| Data backup | "**If** the backup **fails**, the admin **will be** notified via email." |
| Feature flag | "**If** the feature flag **is** enabled, the new UI **will be** displayed." |

---

## 4. Type 2 — Discussions & Proposals

### Khi nào dùng?

Thảo luận **giả định**, **đề xuất giải pháp**, bàn về options chưa quyết định.

### Công thức

```
If + Subject + V(past), Subject + would + V
```

### Ví dụ trong Meeting & Email

| Tình huống | Câu điều kiện |
|---|---|
| Đề xuất tech stack | "**If** we **used** GraphQL, we **would reduce** the number of API calls." |
| Bàn về timeline | "**If** we **had** two more sprints, we **would be able** to add full test coverage." |
| Xin thêm resource | "**If** we **hired** a DevOps engineer, deployments **would be** much smoother." |
| So sánh options | "**If** we **switched** to PostgreSQL, we **would get** better JSON support." |
| Risk assessment | "**If** the database **went** down, we **would lose** all real-time data." |

**Email mẫu — Đề xuất giải pháp:**

```
Subject: Proposal — Caching strategy for product API

Hi team,

I've been analyzing our API response times. Currently, the
product endpoint takes ~800ms on average.

If we implemented Redis caching, we would reduce response
times to under 50ms for cached requests. If we used a TTL
of 5 minutes, we would still maintain data freshness while
reducing database load by ~70%.

If the team agrees, I would like to create a proof of concept
this sprint.

What do you think?

Best regards,
Cuong
```

---

## 5. Type 3 — Post-Mortems & Retrospectives

### Khi nào dùng?

Phân tích **sự cố đã xảy ra** — incident reports, retrospectives, lessons learned.

### Công thức

```
If + Subject + had + V3, Subject + would have + V3
```

### Ví dụ — Incident Post-Mortem

```markdown
## Incident Report — Production Outage (March 15)

### What Happened
The production database ran out of disk space at 2:00 AM,
causing all API requests to fail for 45 minutes.

### Root Cause Analysis
The log rotation was not configured, and log files grew
to 500GB over 3 months.

### What Could Have Prevented This

1. If we had configured log rotation, the disk would not
   have filled up.

2. If we had set up disk usage monitoring, we would have
   received an alert before it reached critical levels.

3. If we had implemented a circuit breaker, the cascade
   failure would not have affected all services.

### Action Items
- [ ] Configure log rotation (max 10GB)
- [ ] Add disk usage alert at 80% threshold
- [ ] Implement circuit breaker for critical services
```

---

## 6. Ngoài "If" — Các Từ Điều Kiện Khác Trong IT

### Unless (= If not)

| Unless | Tương đương If not |
|---|---|
| "**Unless** the token is valid, the request **will be** rejected." | "If the token is **not** valid..." |
| "**Unless** the user confirms, the data **will not be** deleted." | "If the user does **not** confirm..." |
| "**Unless** otherwise specified, the default timeout is 30s." | "If not otherwise specified..." |

### Provided that / As long as (miễn là)

```
"The API will accept the request provided that the
Content-Type header is set to application/json."

"Users can upload files as long as the file size
does not exceed 10MB."
```

### In case (trong trường hợp / phòng khi)

```
"In case the primary server fails, traffic will be
redirected to the backup server."

"We should add error logging in case the payment
gateway returns unexpected responses."
```

---

## 7. Bảng Từ Vựng — Conditional Patterns Trong IT

| Cụm từ | IPA | Nghĩa tiếng Việt | Ngữ cảnh |
|---|---|---|---|
| if...then | /ɪf...ðen/ | nếu...thì | Logic, requirements |
| unless | /ʌnˈles/ | trừ khi | Negative conditions |
| provided that | /prəˈvaɪdɪd ðæt/ | miễn là | Formal specs |
| as long as | /æz lɒŋ æz/ | miễn là | Informal specs |
| in case | /ɪn keɪs/ | trong trường hợp | Error handling |
| otherwise | /ˈʌðəwaɪz/ | nếu không thì | Default behavior |
| on condition that | /ɒn kənˈdɪʃən ðæt/ | với điều kiện | Contracts, SLAs |
| shall | /ʃæl/ | sẽ (bắt buộc) | Formal requirements |
| given that | /ˈɡɪvən ðæt/ | cho rằng / với điều kiện | Test scenarios |
| assuming | /əˈsjuːmɪŋ/ | giả sử | Discussions |
| acceptance criteria | /əkˈseptəns kraɪˈtɪəriə/ | tiêu chí chấp nhận | User stories |
| edge case | /edʒ keɪs/ | trường hợp biên | Testing |
| happy path | /ˈhæpi pɑːθ/ | luồng chính (không lỗi) | Test cases |
| fallback | /ˈfɔːlbæk/ | phương án dự phòng | Error handling |
| threshold | /ˈθreʃhəʊld/ | ngưỡng | Monitoring, limits |

---

## 8. Viết Test Cases Bằng Câu Điều Kiện

Test cases chính là câu điều kiện! Format **Given-When-Then** cực kỳ phổ biến:

### Given-When-Then (BDD Style)

```gherkin
Feature: User Login

Scenario: Successful login
  Given the user has a valid account
  When the user enters correct credentials
  Then the user should be redirected to the dashboard

Scenario: Account lockout
  Given the user has entered wrong password 4 times
  When the user enters wrong password the 5th time
  Then the account should be locked for 30 minutes
  And an email notification should be sent to the user

Scenario: Expired session
  Given the user session has been inactive for 30 minutes
  When the user tries to access a protected page
  Then the user should be redirected to the login page
  And a "Session expired" message should be displayed
```

### If-based Test Cases (Traditional)

```markdown
## Test Cases — Shopping Cart

| # | Condition (If...) | Expected Result (Then...) |
|---|---|---|
| TC-01 | If the cart is empty | "Your cart is empty" message is displayed |
| TC-02 | If the user adds an item | Cart count increases by 1 |
| TC-03 | If the item is out of stock | "Add to Cart" button is disabled |
| TC-04 | If the coupon code is valid | Discount is applied to the total |
| TC-05 | If the coupon code is expired | "Invalid coupon" error is shown |
| TC-06 | If the quantity exceeds stock | Quantity is set to max available |
```

---

## 9. Lỗi Thường Gặp

### ❌ Lỗi 1: Dùng "will" trong mệnh đề If

```
❌ "If the user will click Submit, the form will be saved."
✅ "If the user clicks Submit, the form will be saved."
```

📌 **Quy tắc:** Mệnh đề **If** không dùng **will** (trừ khi "will" mang nghĩa "sẵn lòng").

### ❌ Lỗi 2: Nhầm Type 1 và Type 2

```
❌ "If we would use Docker, it will be easier." (trộn Type 1 + 2)
✅ "If we used Docker, it would be easier." (Type 2 — giả định)
✅ "If we use Docker, it will be easier." (Type 1 — có thể xảy ra)
```

### ❌ Lỗi 3: Thiếu "will/shall" trong mệnh đề chính

```
❌ "If the file is too large, the system rejects it."
   (Đây là Type 0 — OK nếu mô tả behavior luôn xảy ra)
✅ "If the file is too large, the system will reject it."
   (Type 1 — requirement cho tương lai)
```

### ❌ Lỗi 4: Dùng "unless" rồi phủ định thêm

```
❌ "Unless the user doesn't confirm, the data will not be deleted."
   (Double negative = khó hiểu)
✅ "Unless the user confirms, the data will not be deleted."
```

---

## 10. Practice — Bài Tập Thực Hành

### Exercise 1: Xác định loại Conditional

Mỗi câu sau thuộc Type mấy?

1. "If the build fails, the deployment is automatically cancelled."
2. "If we migrated to Kubernetes, we would have better auto-scaling."
3. "If we had written integration tests, we would have caught the bug earlier."
4. "If the user uploads a file larger than 5MB, the system will show an error."

<details>
<summary>📝 Đáp án</summary>

1. **Type 0** — Sự thật / behavior luôn xảy ra (present + present)
2. **Type 2** — Giả định (past + would)
3. **Type 3** — Quá khứ không xảy ra (past perfect + would have V3)
4. **Type 1** — Requirement có thể xảy ra (present + will)

</details>

### Exercise 2: Viết Requirements bằng Conditional

Chuyển các yêu cầu sau sang câu điều kiện tiếng Anh:

1. Nếu user chưa đăng nhập → redirect về trang login
2. Nếu password dưới 8 ký tự → hiện lỗi validation
3. Nếu server không phản hồi trong 30s → hiện timeout error
4. Trừ khi admin approve → user không thể truy cập
5. Miễn là API key hợp lệ → request được xử lý

<details>
<summary>📝 Đáp án</summary>

1. "If the user is not logged in, the system shall redirect to the login page."
2. "If the password is less than 8 characters, a validation error will be displayed."
3. "If the server does not respond within 30 seconds, a timeout error will be shown."
4. "Unless the admin approves, the user will not be able to access the resource."
5. "As long as the API key is valid, the request will be processed."

</details>

### Exercise 3: Viết Post-Mortem

Tình huống: API bị down 2 tiếng vì deploy code chưa test kỹ.

Viết 3 câu Type 3 phân tích nguyên nhân:

<details>
<summary>📝 Đáp án gợi ý</summary>

1. "If we had run the full test suite before deploying, we would have caught the breaking change."
2. "If we had used a canary deployment strategy, the impact would have been limited to a small percentage of users."
3. "If we had set up automated rollback, the downtime would have been reduced to minutes instead of hours."

</details>

---

## Tổng Kết

| Loại | Dùng trong IT khi | Ví dụ |
|---|---|---|
| **Type 0** | System behavior, monitoring rules | "If the CPU exceeds 90%, an alert is sent." |
| **Type 1** | Requirements, specs, test cases | "If the user clicks Delete, a confirmation dialog will appear." |
| **Type 2** | Proposals, discussions, planning | "If we used microservices, we would scale better." |
| **Type 3** | Post-mortems, retrospectives | "If we had added monitoring, we would have detected it sooner." |

**Mẹo cuối:** Hầu hết requirements dùng **Type 1** + **shall/will**. Khi viết specs, hãy nghĩ theo pattern: **"If [condition], the system shall [action]."** Đơn giản, rõ ràng, không gây hiểu nhầm! 💪

---

📌 **Bài liên quan:**
- [Passive Voice Trong Technical Writing](/posts/passive-voice-trong-technical-writing/)
- [Cách Dùng Modal Verbs Trong Email Công Việc](/posts/cach-dung-modal-verbs-trong-email-cong-viec/)

📌 **Bookmark** bài này để dùng khi viết requirements & specs nhé! Chia sẻ cho team nếu bạn thấy hữu ích. 🚀
