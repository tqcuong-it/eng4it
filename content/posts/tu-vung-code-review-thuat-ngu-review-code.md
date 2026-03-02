---
title: "Code Review — 14 Thuật Ngữ Review Code Mọi Developer Phải Biết"
date: 2023-02-17
slug: "tu-vung-code-review-thuat-ngu-review-code"
description: "Học 14 thuật ngữ tiếng Anh về Code Review — từ pull request, approval, LGTM đến merge conflict, squash và revert. Dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["devops", "agile"]
ShowToc: true
TocOpen: true
draft: false
---

Code review là kỹ năng quan trọng không kém viết code. Một PR tốt giúp team maintain chất lượng, chia sẻ kiến thức, và bắt bug sớm. Hiểu đúng thuật ngữ code review bằng tiếng Anh giúp bạn participate hiệu quả hơn trong team quốc tế. Let's review! 👀

---

### 🔹 Quy trình cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pull request | /pʊl rɪˈkwɛst/ | yêu cầu merge code — đề xuất thay đổi để team review | I opened a **pull request** to add the new payment integration module. |
| reviewer | /rɪˈvjuːər/ | người review — người kiểm tra và nhận xét code | Please add two **reviewers** from the backend team before merging. |
| approval | /əˈpruːvəl/ | chấp thuận — đồng ý cho merge code | The PR needs at least two **approvals** before it can be merged to main. |
| diff | /dɪf/ | khác biệt — phần code thay đổi giữa hai phiên bản | Review the **diff** carefully — there are 200 lines changed across 8 files. |

### 🔹 Nhận xét & Phản hồi

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| comment | /ˈkɑːmɛnt/ | nhận xét — góp ý trên dòng code cụ thể | I left a **comment** suggesting we extract this logic into a separate function. |
| suggestion | /səˈdʒɛstʃən/ | đề xuất — gợi ý thay đổi code cụ thể | GitHub lets reviewers create inline **suggestions** that authors can apply with one click. |
| nit | /nɪt/ | góp ý nhỏ — vấn đề không quan trọng (style, naming) | **Nit**: consider renaming this variable to `userCount` for better readability. |
| blocking | /ˈblɑːkɪŋ/ | chặn — vấn đề nghiêm trọng cần sửa trước khi merge | This is a **blocking** comment — the SQL query is vulnerable to injection. |
| LGTM | /ˌɛl.dʒiː.tiːˈɛm/ | Looks Good To Me — code ổn, đồng ý merge | After addressing all comments, the reviewer replied "**LGTM**" and approved the PR. |

### 🔹 Xử lý code

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| refactor | /ˌriːˈfæktər/ | tái cấu trúc — viết lại code sạch hơn mà không đổi behavior | Let's **refactor** this 200-line function into smaller, testable methods. |
| merge conflict | /mɜːrdʒ ˈkɑːnflɪkt/ | xung đột merge — hai branch chỉnh cùng dòng code | Resolve the **merge conflict** in the config file before the PR can be merged. |
| commit message | /kəˈmɪt ˈmɛsɪdʒ/ | thông điệp commit — mô tả ngắn gọn thay đổi trong commit | Write a clear **commit message** like "fix: resolve null pointer in user service". |
| squash | /skwɑːʃ/ | gộp commit — gom nhiều commit thành một trước khi merge | **Squash** the 15 WIP commits into one clean commit before merging to main. |
| revert | /rɪˈvɜːrt/ | hoàn tác — tạo commit mới để undo thay đổi trước đó | We had to **revert** the last deployment because it caused a spike in error rates. |

---

## 💡 Mẹo ghi nhớ

- **Nit vs Blocking**: Nit = "tiện thể sửa luôn thì tốt" (không bắt buộc). Blocking = "phải sửa, không merge được" (bắt buộc). Ghi rõ prefix giúp author biết priority.
- **LGTM** là viết tắt phổ biến nhất trong code review. Các viết tắt khác: **PTAL** (Please Take Another Look), **WIP** (Work In Progress), **NACK** (Not Acknowledged — không đồng ý).
- **Squash**: Tưởng tượng bạn có 10 commit "fix typo", "wip", "try again" — squash gộp thành 1 commit sạch. Git history cảm ơn bạn!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. I opened a ___ ___ with the new authentication flow for the team to review.
2. This is a ___ issue — the API key is hardcoded in the source code and must be removed.
3. Please ___ all the small commits into one before merging to the main branch.
4. ___ : maybe rename `data` to `userData` for clarity, but not a big deal.
5. We need to ___ the last commit because it broke the login page in production.

---

{{< spoiler "✅ Đáp án" >}}
1. **pull request** — Pull request là cách đề xuất thay đổi code để team review trước khi merge
2. **blocking** — Blocking comment yêu cầu phải sửa trước khi được phép merge
3. **squash** — Squash gộp nhiều commit thành một để giữ git history sạch
4. **Nit** — Nit là góp ý nhỏ về style/naming, không bắt buộc sửa
5. **revert** — Revert tạo commit mới để hoàn tác thay đổi gây lỗi
{{< /spoiler >}}

---

Code review không chỉ là tìm bug — nó là cơ hội để team học hỏi lẫn nhau và nâng cao chất lượng code. Nắm vững 14 thuật ngữ này giúp bạn review và nhận review chuyên nghiệp hơn. Happy reviewing! ✅
