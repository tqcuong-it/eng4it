---
title: "Cách viết Bug Report bằng tiếng Anh — Template & Từ vựng cho Developer"
slug: "cach-viet-bug-report-bang-tieng-anh"
date: 2026-03-04
summary: "Hướng dẫn viết Bug Report tiếng Anh chuẩn — template, từ vựng severity/priority, mẫu câu mô tả bug và bài tập thực hành."
description: "Học cách viết Bug Report bằng tiếng Anh cho developer và QA. Bao gồm template chuẩn, cách phân loại severity/priority, từ vựng chuyên ngành."
tags: ["workplace-english", "bug-report", "jira", "qa"]
categories: ["Workplace English"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Bug Report (báo cáo lỗi) là một trong những loại document mà developer và QA viết **nhiều nhất** mỗi ngày. Một bug report tốt giúp team **tìm và fix bug nhanh hơn**, trong khi bug report kém khiến developer phải hỏi lại liên tục, làm chậm cả sprint.

Bài viết này sẽ giúp bạn:
- Viết bug report **rõ ràng, đầy đủ** bằng tiếng Anh
- Nắm vững **từ vựng severity/priority**
- Có sẵn **template và mẫu câu** dùng ngay trên Jira, GitHub Issues, Bugzilla
- Tránh những **lỗi phổ biến** khi mô tả bug

---

## 1. Cấu trúc Bug Report chuẩn

Một bug report tốt cần có đủ các phần sau:

| Phần | Tiếng Anh | Mô tả |
|------|-----------|--------|
| Tiêu đề | **Title / Summary** | Mô tả ngắn gọn bug |
| Môi trường | **Environment** | OS, browser, version |
| Các bước tái hiện | **Steps to Reproduce** | Từng bước cụ thể |
| Kết quả thực tế | **Actual Result** | Chuyện gì xảy ra |
| Kết quả mong đợi | **Expected Result** | Lẽ ra phải như thế nào |
| Mức độ | **Severity / Priority** | Nghiêm trọng đến đâu |
| Bằng chứng | **Attachments** | Screenshot, video, log |

### Template mẫu

```markdown
## Bug Report

**Title:** [Component] — Short description of the issue

**Environment:**
- OS: Windows 11 / macOS 14.2 / Ubuntu 22.04
- Browser: Chrome 122.0 / Firefox 123.0
- App Version: v2.3.1
- Device: Desktop / iPhone 15 / Samsung Galaxy S24

**Steps to Reproduce:**
1. Navigate to the login page
2. Enter valid email and password
3. Click the "Sign In" button
4. Observe the error

**Actual Result:**
The page shows a 500 Internal Server Error after clicking "Sign In".

**Expected Result:**
The user should be redirected to the dashboard after successful login.

**Severity:** Critical
**Priority:** P1 — High

**Attachments:**
- Screenshot: [error-screenshot.png]
- Console log: [console-output.txt]

**Additional Notes:**
This issue occurs only on Chrome. Firefox works as expected.
```

---

## 2. Cách viết Title hiệu quả

Title là thứ mọi người đọc **đầu tiên**. Hãy viết rõ ràng, cụ thể.

### Công thức

```
[Component/Page] — What happens + When/Where
```

### Ví dụ tốt vs kém

| ❌ Title kém | ✅ Title tốt |
|-------------|-------------|
| Login doesn't work | [Login Page] — 500 error when signing in with valid credentials on Chrome |
| Bug in cart | [Shopping Cart] — Item quantity resets to 1 after page refresh |
| Upload broken | [File Upload] — PDF files over 10MB fail to upload with timeout error |
| API error | [User API] — GET /users/profile returns 403 for authenticated users |
| Page crash | [Dashboard] — App crashes when filtering by date range > 1 year |

### Quy tắc viết Title

- **Cụ thể** — nói rõ chuyện gì xảy ra, ở đâu
- **Không dùng "doesn't work"** — quá mơ hồ
- **Bao gồm điều kiện** — khi nào bug xảy ra
- **Dùng present tense** — "returns 403" thay vì "returned 403"

---

## 3. Steps to Reproduce — Chi tiết là vàng

Đây là phần **quan trọng nhất** của bug report. Developer cần tái hiện được bug mới fix được.

### Mẫu câu hay dùng

| Tiếng Anh | Tiếng Việt | IPA |
|-----------|-----------|-----|
| Navigate to [page] | Truy cập trang [page] | /ˈnæv.ɪ.ɡeɪt/ |
| Click on the [button] | Click vào nút [button] | /klɪk/ |
| Enter [value] in the [field] | Nhập [value] vào ô [field] | /ˈen.tər/ |
| Select [option] from the dropdown | Chọn [option] từ dropdown | /sɪˈlekt/ |
| Scroll down to [section] | Kéo xuống phần [section] | /skroʊl/ |
| Wait for [X] seconds | Đợi [X] giây | /weɪt/ |
| Observe the [behavior] | Quan sát [behavior] | /əbˈzɜːrv/ |
| Refresh the page | Tải lại trang | /rɪˈfreʃ/ |
| Log in as [role] | Đăng nhập với role [role] | /lɒɡ ɪn/ |
| Toggle [feature] on/off | Bật/tắt [feature] | /ˈtɒɡ.əl/ |

### Ví dụ thực tế

```markdown
**Steps to Reproduce:**
1. Log in as admin (admin@test.com / test123)
2. Navigate to Settings > User Management
3. Click "Add New User"
4. Fill in all required fields (name, email, role)
5. Click "Save"
6. Observe: the form submits but no success message appears
7. Refresh the page — the new user is NOT in the list
```

**Lưu ý quan trọng:**
- Đánh số **từng bước**
- Mỗi bước là **một hành động**
- Ghi rõ **test data** nếu cần (email, password)
- Nói rõ bước nào **bug xuất hiện**

---

## 4. Severity vs Priority — Phân biệt rõ

Nhiều developer nhầm lẫn hai khái niệm này:

| | Severity (Mức nghiêm trọng) | Priority (Độ ưu tiên) |
|---|---|---|
| **Định nghĩa** | Bug ảnh hưởng hệ thống đến mức nào | Bug cần fix sớm đến mức nào |
| **Ai quyết định** | QA / Developer | Product Owner / Manager |
| **Dựa trên** | Tác động kỹ thuật | Tác động kinh doanh |

### Severity Levels

| Level | Tiếng Anh | Nghĩa | Ví dụ |
|-------|-----------|-------|-------|
| S1 | **Critical / Blocker** | Hệ thống sập, không dùng được | App crash on launch, data loss |
| S2 | **Major** | Tính năng chính không hoạt động | Cannot checkout, payment fails |
| S3 | **Minor** | Tính năng phụ lỗi, có workaround | Sort order wrong, filter not working |
| S4 | **Trivial / Cosmetic** | Lỗi giao diện, typo | Misaligned button, wrong color |

### Priority Levels

| Level | Tiếng Anh | Nghĩa |
|-------|-----------|-------|
| P1 | **Urgent / Critical** | Fix ngay, block release |
| P2 | **High** | Fix trong sprint này |
| P3 | **Medium** | Fix khi có thời gian |
| P4 | **Low** | Nice to have, backlog |

### Kết hợp Severity + Priority

| Tình huống | Severity | Priority |
|-----------|----------|----------|
| App crash khi thanh toán | Critical | P1 |
| Logo sai trên trang admin (ít người dùng) | Trivial | P4 |
| Typo trên landing page (nhiều khách thấy) | Trivial | P2 |
| Tính năng export CSV lỗi (có thể export Excel thay) | Major | P3 |

---

## 5. Bảng từ vựng Bug Report

| Từ / Cụm từ | IPA | Nghĩa |
|-------------|-----|-------|
| bug | /bʌɡ/ | Lỗi phần mềm |
| defect | /ˈdiː.fekt/ | Khiếm khuyết, lỗi |
| issue | /ˈɪʃ.uː/ | Vấn đề, lỗi |
| regression | /rɪˈɡreʃ.ən/ | Lỗi quay lại (tính năng cũ hỏng) |
| intermittent | /ˌɪn.tərˈmɪt.ənt/ | Lỗi xảy ra không đều, lúc có lúc không |
| reproducible | /ˌriː.prəˈdjuː.sə.bəl/ | Có thể tái hiện |
| flaky | /ˈfleɪ.ki/ | Không ổn định (test lúc pass lúc fail) |
| root cause | /ruːt kɔːz/ | Nguyên nhân gốc |
| workaround | /ˈwɜːrk.ə.raʊnd/ | Giải pháp tạm thời |
| hotfix | /ˈhɒt.fɪks/ | Bản vá khẩn cấp |
| edge case | /edʒ keɪs/ | Trường hợp biên, hiếm gặp |
| stack trace | /stæk treɪs/ | Thông tin lỗi chi tiết từ hệ thống |
| to reproduce | /tə ˌriː.prəˈdjuːs/ | Tái hiện (lỗi) |
| to escalate | /tə ˈes.kə.leɪt/ | Đẩy lên cấp cao hơn |
| to triage | /tə triˈɑːʒ/ | Phân loại và ưu tiên bug |
| blocker | /ˈblɒk.ər/ | Lỗi chặn không thể tiếp tục |
| showstopper | /ˈʃoʊˌstɒp.ər/ | Lỗi nghiêm trọng, dừng cả release |

---

## 6. Mẫu câu dùng trong Bug Report

### Mô tả Actual Result

- *The page returns a **500 Internal Server Error**.*
- *The application **crashes** when clicking the submit button.*
- *The data is **not saved** to the database.*
- *The API **returns an empty response** instead of the user list.*
- *The file upload **hangs indefinitely** without any error message.*
- *The page **redirects to a 404** after form submission.*

### Mô tả Expected Result

- *The user **should be redirected** to the dashboard.*
- *The form **should display** a success message.*
- *The API **should return** a 200 status with the updated data.*
- *The file **should be uploaded** and appear in the file list.*
- *The error message **should be shown** to the user.*

### Ghi thêm thông tin

- *This issue is **reproducible 100%** of the time.*
- *This issue occurs **intermittently** — approximately 3 out of 10 attempts.*
- *This seems to be a **regression** introduced in v2.3.0.*
- *The issue **only occurs** on mobile devices / Chrome / production environment.*
- *I was **unable to reproduce** this on staging.*
- *See attached **screenshot / video / console log** for reference.*
- *This is a **blocker** for the upcoming release.*
- *A possible **workaround** is to clear the cache and retry.*

---

## 7. Ví dụ Bug Report thực tế

### Ví dụ 1 — Jira Issue

```markdown
**Title:** [Checkout] — Payment fails with 502 error for orders over $500

**Environment:**
- Production (app.example.com)
- Chrome 122.0, macOS 14.3
- App version: v3.1.2

**Steps to Reproduce:**
1. Log in as a regular user
2. Add items to cart (total > $500)
3. Proceed to checkout
4. Select "Credit Card" as payment method
5. Enter valid card details
6. Click "Place Order"

**Actual Result:**
A 502 Bad Gateway error is displayed. The order is NOT created.
Console shows: `POST /api/orders — 502 (Bad Gateway)`

**Expected Result:**
The order should be created and the user should see the order confirmation page.

**Severity:** Critical (S1)
**Priority:** P1 — Urgent

**Additional Notes:**
- Orders under $500 work fine
- This started happening after the deployment on March 1st
- Likely a regression from PR #1247 (payment gateway timeout change)
- Affects approximately 15% of daily orders
```

### Ví dụ 2 — GitHub Issue

```markdown
## Bug: Dark mode toggle doesn't persist after page refresh

### Environment
- Browser: Firefox 123.0
- OS: Ubuntu 22.04
- Version: v1.8.0

### Steps to Reproduce
1. Open the app in Firefox
2. Go to Settings > Appearance
3. Toggle "Dark Mode" ON
4. Confirm the UI switches to dark theme
5. Refresh the page (F5)

### Actual Result
The app reverts to light mode after refresh. The toggle is OFF.

### Expected Result
Dark mode preference should persist across sessions
(stored in localStorage or user preferences).

### Severity
Minor (S3) — workaround: toggle dark mode each time

### Screenshots
| Before refresh | After refresh |
|---------------|--------------|
| 🌙 Dark mode ON | ☀️ Light mode (reverted) |
```

---

## 8. Những lỗi phổ biến khi viết Bug Report

| ❌ Sai | ✅ Đúng | Tại sao |
|--------|---------|---------|
| "It doesn't work" | "Returns 500 error when..." | Quá mơ hồ, developer không biết fix gì |
| Không ghi steps | Liệt kê từng bước | Developer không thể tái hiện |
| "I think it's a backend bug" | Mô tả hiện tượng, để dev phân tích | Đừng đoán root cause |
| Không ghi environment | Ghi rõ OS, browser, version | Bug có thể chỉ xảy ra trên 1 môi trường |
| Gộp nhiều bug vào 1 ticket | Mỗi bug 1 ticket riêng | Dễ track, dễ assign, dễ close |
| Screenshot không có context | Screenshot + highlight vùng lỗi | Hình phải chỉ rõ vấn đề |

---

## 9. Bài tập thực hành

### Bài 1: Viết Bug Title

Viết lại title cho các bug sau:

1. "Upload doesn't work" → ___
2. "Error on dashboard" → ___
3. "Slow page" → ___
4. "Can't login" → ___

<details>
<summary>💡 Gợi ý đáp án</summary>

1. *[File Upload] — JPEG files fail to upload with "File too large" error (actual size: 2MB, limit: 10MB)*
2. *[Dashboard] — Charts fail to render with TypeError when date range exceeds 30 days*
3. *[Product List] — Page takes 15+ seconds to load when displaying 1000+ items*
4. *[Login] — "Invalid credentials" error for valid accounts after password reset*

</details>

### Bài 2: Viết Bug Report hoàn chỉnh

**Tình huống:** Bạn đang test tính năng search trên trang e-commerce. Khi tìm kiếm với keyword có ký tự đặc biệt (ví dụ: `"iPhone 15" case`), kết quả trả về trống dù có sản phẩm match.

Hãy viết một bug report đầy đủ bằng tiếng Anh bao gồm: Title, Environment, Steps to Reproduce, Actual Result, Expected Result, Severity, Priority.

### Bài 3: Phân loại Severity + Priority

| Bug | Severity | Priority |
|-----|----------|----------|
| App crash khi mở camera trên iOS 17 | ___ | ___ |
| Favicon hiển thị sai trên tab trình duyệt | ___ | ___ |
| Không thể reset password qua email | ___ | ___ |
| Thanh search không align đúng trên mobile | ___ | ___ |

<details>
<summary>💡 Gợi ý đáp án</summary>

| Bug | Severity | Priority |
|-----|----------|----------|
| App crash khi mở camera trên iOS 17 | Critical (S1) | P1 |
| Favicon hiển thị sai trên tab trình duyệt | Trivial (S4) | P4 |
| Không thể reset password qua email | Major (S2) | P1 |
| Thanh search không align đúng trên mobile | Minor (S3) | P3 |

</details>

---

## Kết luận

Viết Bug Report tốt là một **kỹ năng chuyên nghiệp** — không chỉ cho QA mà cho cả developer. Một bug report rõ ràng giúp tiết kiệm hàng giờ debug và giảm back-and-forth trong team.

**Checklist trước khi submit bug:**
- ✅ Title cụ thể, rõ ràng
- ✅ Steps to Reproduce đầy đủ, đánh số
- ✅ Actual vs Expected Result rõ ràng
- ✅ Severity + Priority phù hợp
- ✅ Có screenshot/log/video nếu cần
- ✅ Ghi rõ environment

Hãy lưu template ở phần 1 và dùng cho mọi bug report từ hôm nay nhé! 🐛

---

*Bạn thấy bài viết hữu ích? Hãy chia sẻ cho đồng nghiệp developer cùng đọc!*
