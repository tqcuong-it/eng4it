---
title: "Bug Report — 15 Thuật Ngữ Báo Cáo Lỗi Mà Developer Nào Cũng Phải Biết"
date: 2023-02-24
summary: "Học 15 thuật ngữ Bug Report quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-bug-report-bao-cao-loi"
description: "Học 15 thuật ngữ tiếng Anh về Bug Report — từ reproduce, severity, priority đến root cause, stack trace và hotfix. Viết bug report chuẩn chỉnh bằng tiếng Anh."
categories: ["IT English"]
tags: ["devops", "workplace-english", "testing"]
ShowToc: true
TocOpen: true
draft: false
---

Viết bug report rõ ràng là kỹ năng quan trọng không kém viết code. Một bug report tốt giúp developer fix nhanh hơn, QA verify dễ hơn, và cả team tiết kiệm thời gian. Nắm vững 15 thuật ngữ dưới đây để viết bug report chuẩn quốc tế nhé! 🐛

---

### 🔹 Mô tả & Tái hiện lỗi

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| bug | /bʌɡ/ | lỗi phần mềm — hành vi không đúng mong đợi | We found a critical **bug** in the payment module that causes double charges. |
| reproduce | /ˌriːprəˈdjuːs/ | tái hiện — thực hiện lại các bước để lỗi xảy ra | I can **reproduce** the issue by clicking Submit twice within one second. |
| steps to reproduce | /stɛps tuː ˌriːprəˈdjuːs/ | các bước tái hiện lỗi | Please include clear **steps to reproduce** so the dev team can investigate quickly. |
| environment | /ɪnˈvaɪrənmənt/ | môi trường — cấu hình hệ thống nơi lỗi xảy ra | The **environment** is Chrome 110 on Windows 11 with staging API. |

### 🔹 Phân loại & Ưu tiên

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| severity | /sɪˈvɛrəti/ | mức độ nghiêm trọng — impact của lỗi lên hệ thống | This bug has **severity** Critical because it blocks all user transactions. |
| priority | /praɪˈɒrəti/ | mức độ ưu tiên — thứ tự cần fix | Even though the **priority** is Low, we should still fix it before release. |
| regression | /rɪˈɡrɛʃən/ | lỗi hồi quy — tính năng cũ bị hỏng sau khi thay đổi code | The latest deploy caused a **regression** — login was working fine yesterday. |
| ticket | /ˈtɪkɪt/ | phiếu công việc — đơn vị quản lý task trên Jira, Trello... | I've created a **ticket** in Jira with all the details and screenshots attached. |

### 🔹 Phân tích & Xử lý

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| root cause | /ruːt kɔːz/ | nguyên nhân gốc — lý do thực sự gây ra lỗi | After debugging, we found the **root cause** was a null pointer in the user service. |
| stack trace | /stæk treɪs/ | dấu vết ngăn xếp — log chi tiết các hàm gọi khi lỗi xảy ra | The **stack trace** shows the exception was thrown at line 42 of PaymentController. |
| workaround | /ˈwɜːrkəraʊnd/ | cách giải quyết tạm — giải pháp tạm thời chưa fix triệt để | As a **workaround**, users can clear their cache and retry the operation. |
| assign | /əˈsaɪn/ | giao việc — chỉ định người chịu trách nhiệm | I'll **assign** this bug to the backend team since it's a server-side issue. |

### 🔹 Giải quyết & Đóng ticket

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| resolution | /ˌrɛzəˈluːʃən/ | cách giải quyết — kết quả cuối cùng của việc xử lý lỗi | The **resolution** was to add input validation before saving to the database. |
| hotfix | /ˈhɒtfɪks/ | bản vá khẩn cấp — fix nhanh cho lỗi nghiêm trọng trên production | We deployed a **hotfix** at 2 AM to fix the checkout crash on production. |
| patch | /pætʃ/ | bản vá — bản cập nhật nhỏ sửa lỗi cụ thể | The security **patch** fixes the SQL injection vulnerability in the search API. |

---

## 💡 Mẹo ghi nhớ

- **Severity ≠ Priority**: Severity là mức độ nghiêm trọng kỹ thuật (Critical/Major/Minor), Priority là mức độ cần fix sớm theo business. Một bug severity thấp nhưng priority cao hoàn toàn có thể xảy ra — ví dụ logo hiển thị sai trên trang chủ. 🎯
- **Hotfix vs Patch**: Hotfix là bản vá khẩn cấp (thường deploy ngoài giờ), patch là bản vá thông thường theo lịch release. Nhớ: **hot** = nóng = gấp!
- **Steps to reproduce** là phần quan trọng nhất trong bug report. Không có steps → developer không thể reproduce → bug bị reject. Luôn viết rõ ràng từng bước! 📝

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Can you ___ the issue? I need to see it happen on my machine before I can debug it.
2. The ___ is Critical because the entire checkout flow is broken for all users.
3. Check the ___ to find exactly which function threw the exception.
4. We need to deploy a ___ tonight to fix the production outage immediately.
5. The developer found the ___ was a race condition in the payment processing service.

{{< spoiler "✅ Đáp án" >}}
1. **reproduce** — Tái hiện lỗi trên máy của mình để debug
2. **severity** — Mức độ nghiêm trọng Critical vì ảnh hưởng toàn bộ checkout
3. **stack trace** — Dấu vết ngăn xếp giúp xác định hàm gây lỗi
4. **hotfix** — Bản vá khẩn cấp deploy ngay để fix production
5. **root cause** — Nguyên nhân gốc là race condition
{{< /spoiler >}}

---

## Tổng kết

Bug report tốt = communication tốt. Khi bạn viết rõ ràng **steps to reproduce**, phân biệt được **severity** và **priority**, attach đúng **stack trace** — bạn không chỉ giúp team fix bug nhanh hơn mà còn thể hiện sự chuyên nghiệp trong môi trường làm việc quốc tế. Lần tới viết bug report, hãy áp dụng ngay nhé! 💪

---

## 📚 Bài viết liên quan

- [Từ Vựng Docker — Thuật Ngữ Container Mà Developer Cần Biết](/posts/tu-vung-docker-thuat-ngu-container/)
- [Testing & QA — 14 Thuật Ngữ Kiểm Thử Developer Phải Biết](/posts/tu-vung-testing-qa-thuat-ngu-kiem-thu/)
- [Technical Interview — 12 Thuật Ngữ Phỏng Vấn Kỹ Thuật Developer Phải Biết](/posts/tu-vung-technical-interview-phong-van-ky-thuat/)
