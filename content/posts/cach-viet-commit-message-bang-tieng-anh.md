---
title: "Cách Viết Commit Message Bằng Tiếng Anh — Chuẩn Conventional Commits"
slug: "cach-viet-commit-message-bang-tieng-anh"
date: 2026-04-02
summary: "Hướng dẫn viết Git commit message chuẩn tiếng Anh: Conventional Commits, từ vựng, ví dụ thực tế cho developer Việt."
description: "Cách viết Git commit message bằng tiếng Anh chuẩn Conventional Commits: feat, fix, refactor, chore. Từ vựng, mẫu câu, best practices, lỗi thường gặp. Bảng EN-VN, ví dụ thực tế cho developer."
tags: ["git", "commit-message", "workplace-english", "developer", "best-practices"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn mở git log và thấy:

```
fix bug
update
done
aaa
wip
.
```

😱 Không ai hiểu bạn đã làm gì, kể cả chính bạn 3 tháng sau.

So sánh với:

```
fix(auth): resolve token expiration check on refresh
feat(dashboard): add real-time notification badge
refactor(api): extract validation logic to middleware
docs: update API rate-limiting section in README
```

Rõ ràng, dễ tìm, chuyên nghiệp. Đó là sức mạnh của **commit message chuẩn**.

Bài này hướng dẫn bạn viết commit message **chuẩn Conventional Commits**, bằng tiếng Anh tự nhiên, kèm từ vựng và mẫu câu thực tế.

---

## 1. Cấu Trúc Commit Message Chuẩn

### 1.1 Format cơ bản

```
<type>(<scope>): <subject>

[body]

[footer]
```

| Phần | Bắt buộc? | Mô tả |
|---|---|---|
| **type** | ✅ Có | Loại thay đổi: feat, fix, docs... |
| **scope** | ❌ Không | Phạm vi ảnh hưởng: auth, api, ui... |
| **subject** | ✅ Có | Mô tả ngắn gọn (< 72 ký tự) |
| **body** | ❌ Không | Giải thích chi tiết (tại sao, như thế nào) |
| **footer** | ❌ Không | Breaking changes, issue references |

### 1.2 Ví dụ đầy đủ

```
feat(cart): add quantity validation before checkout

Previously, users could set quantity to 0 or negative numbers
and still proceed to checkout, causing payment errors.

This commit adds client-side and server-side validation
to ensure quantity is between 1 and 99.

Closes #1234
```

---

## 2. Commit Types — Bảng Từ Vựng

| Type | Phát âm IPA | Nghĩa | Khi nào dùng |
|---|---|---|---|
| **feat** | /fiːt/ | tính năng mới | Thêm feature mới cho user |
| **fix** | /fɪks/ | sửa lỗi | Fix bug, hotfix |
| **docs** | /dɒks/ | tài liệu | Cập nhật README, API docs |
| **style** | /staɪl/ | định dạng code | Indent, spacing, formatting (không đổi logic) |
| **refactor** | /ˌriːˈfæk.tər/ | tái cấu trúc | Đổi code nhưng không đổi behavior |
| **test** | /test/ | kiểm thử | Thêm/sửa unit test, integration test |
| **chore** | /tʃɔːr/ | việc vặt | Build config, CI, dependencies |
| **perf** | /pɜːrf/ | hiệu năng | Cải thiện performance |
| **ci** | /siː aɪ/ | CI/CD | Thay đổi CI pipeline, GitHub Actions |
| **build** | /bɪld/ | build system | Webpack, Vite, Docker config |
| **revert** | /rɪˈvɜːrt/ | hoàn tác | Revert commit trước đó |

---

## 3. Viết Subject Line — Động Từ Nên Dùng

### 3.1 Quy tắc quan trọng

Subject line luôn dùng **imperative mood** (câu mệnh lệnh):

| ❌ Sai | ✅ Đúng | Giải thích |
|---|---|---|
| Added login feature | **Add** login feature | Imperative mood |
| Fixes the bug | **Fix** the bug | Không chia thì |
| Adding validation | **Add** validation | Không dùng -ing |
| Fixed authentication | **Fix** authentication | Không dùng past tense |

💡 **Mẹo nhớ:** Hoàn thành câu "This commit will **___**" — phần blank chính là subject:
- This commit will **add login feature** ✅
- This commit will ~~added login feature~~ ❌

### 3.2 Động từ phổ biến trong commit

| Động từ | Phát âm IPA | Nghĩa | Ví dụ |
|---|---|---|---|
| **add** | /æd/ | thêm | add user avatar upload |
| **remove** | /rɪˈmuːv/ | xóa bỏ | remove deprecated API endpoints |
| **update** | /ʌpˈdeɪt/ | cập nhật | update error handling logic |
| **fix** | /fɪks/ | sửa | fix null pointer in search query |
| **refactor** | /ˌriːˈfæk.tər/ | tái cấu trúc | refactor auth middleware |
| **implement** | /ˈɪm.plɪ.ment/ | triển khai | implement rate limiting |
| **improve** | /ɪmˈpruːv/ | cải thiện | improve query performance |
| **replace** | /rɪˈpleɪs/ | thay thế | replace moment.js with date-fns |
| **migrate** | /ˈmaɪ.ɡreɪt/ | di chuyển | migrate database to PostgreSQL |
| **extract** | /ɪkˈstrækt/ | tách ra | extract validation to shared util |
| **rename** | /ˌriːˈneɪm/ | đổi tên | rename UserService to AuthService |
| **simplify** | /ˈsɪm.plɪ.faɪ/ | đơn giản hóa | simplify error response format |
| **optimize** | /ˈɒp.tɪ.maɪz/ | tối ưu | optimize image lazy loading |
| **handle** | /ˈhæn.dl/ | xử lý | handle edge case for empty cart |
| **prevent** | /prɪˈvent/ | ngăn chặn | prevent duplicate form submission |
| **resolve** | /rɪˈzɒlv/ | giải quyết | resolve merge conflict in config |
| **deprecate** | /ˈdep.rɪ.keɪt/ | đánh dấu lỗi thời | deprecate legacy payment API |
| **bump** | /bʌmp/ | nâng version | bump lodash to 4.17.21 |
| **configure** | /kənˈfɪɡ.ər/ | cấu hình | configure CORS for production |
| **ensure** | /ɪnˈʃɔːr/ | đảm bảo | ensure graceful shutdown on SIGTERM |

---

## 4. Viết Body — Giải Thích Chi Tiết

Khi thay đổi phức tạp, thêm **body** để giải thích **WHY** (tại sao) và **HOW** (như thế nào).

### 4.1 Mẫu body hay dùng

**Giải thích nguyên nhân:**
```
fix(payment): prevent duplicate charges on retry

The payment service was not checking for existing pending
transactions before creating a new one. When users clicked
"Pay" multiple times due to slow response, duplicate charges
were created.

This fix adds an idempotency key check before processing
any new payment request.
```

**So sánh trước-sau:**
```
refactor(api): replace callback-based auth with async/await

Before: Nested callbacks made error handling inconsistent
and the code difficult to test.

After: Clean async/await flow with centralized error handling
through middleware.
```

**Liệt kê thay đổi:**
```
feat(dashboard): redesign analytics overview

Changes:
- Replace bar chart with interactive line chart
- Add date range picker (7d, 30d, 90d, custom)
- Show comparison with previous period
- Add export to CSV functionality
```

### 4.2 Từ nối hữu ích trong body

| Cụm từ | Nghĩa | Ví dụ |
|---|---|---|
| Previously, ... | Trước đây, ... | Previously, the cache TTL was hardcoded. |
| This commit ... | Commit này ... | This commit extracts the logic to a config file. |
| This is needed because ... | Cần thiết vì ... | This is needed because the old API is deprecated. |
| Without this change, ... | Nếu không thay đổi, ... | Without this change, the build fails on Node 20. |
| This addresses ... | Điều này giải quyết ... | This addresses the race condition in #456. |

---

## 5. Footer — Tham Chiếu & Breaking Changes

### 5.1 Tham chiếu issue

```
fix(auth): handle expired refresh token gracefully

Closes #789
Refs #456, #123
```

| Keyword | Nghĩa | Tác dụng trên GitHub |
|---|---|---|
| **Closes #123** | Đóng issue #123 | Tự động close issue khi merge |
| **Fixes #123** | Sửa issue #123 | Tự động close issue |
| **Refs #123** | Tham khảo issue #123 | Tạo link nhưng không close |
| **Resolves #123** | Giải quyết issue #123 | Tự động close issue |
| **Related to #123** | Liên quan đến #123 | Chỉ tạo link |

### 5.2 Breaking changes

```
feat(api): change response format to JSON:API spec

BREAKING CHANGE: The API response structure has changed.
All endpoints now return data in JSON:API format.

Before: { "user": { "name": "John" } }
After:  { "data": { "type": "user", "attributes": { "name": "John" } } }

Migration guide: docs/migration-v3.md
```

---

## 6. Lỗi Thường Gặp — Và Cách Sửa

### 6.1 Message quá chung chung

| ❌ Sai | ✅ Đúng |
|---|---|
| fix bug | fix(cart): resolve negative quantity validation |
| update code | refactor(auth): extract JWT verification to middleware |
| changes | feat(search): add autocomplete suggestions |
| WIP | feat(upload): add drag-and-drop file upload (WIP) |

### 6.2 Message quá dài

| ❌ Sai | ✅ Đúng |
|---|---|
| fix the bug where users cannot login when they use special characters in their password because the validation regex was wrong | fix(auth): allow special characters in password validation |

💡 **Subject line tối đa 72 ký tự.** Chi tiết để trong body.

### 6.3 Dùng sai thì / mood

| ❌ Sai | ✅ Đúng |
|---|---|
| **Added** new endpoint | **Add** new endpoint |
| **Fixes** login issue | **Fix** login issue |
| **Adding** dark mode | **Add** dark mode |

### 6.4 Mix ngôn ngữ

| ❌ Sai | ✅ Đúng |
|---|---|
| fix: sửa lỗi đăng nhập | fix(auth): resolve login validation error |
| feat: thêm chức năng upload | feat(upload): add file upload with drag-and-drop |

---

## 7. Quick Reference — Mẫu Commit Theo Tình Huống

### 🐛 Fix bugs

```
fix(auth): resolve token refresh race condition
fix(ui): correct alignment of modal on mobile devices
fix(api): handle null response from payment gateway
fix(db): prevent connection pool exhaustion under load
```

### ✨ New features

```
feat(search): add fuzzy search with typo tolerance
feat(notification): implement real-time push notifications
feat(export): add bulk CSV export for transaction history
feat(i18n): add Japanese language support
```

### 🔧 Refactoring

```
refactor(api): replace REST calls with GraphQL queries
refactor(auth): consolidate duplicate validation logic
refactor(config): migrate from .env to YAML configuration
refactor(tests): extract shared fixtures to conftest
```

### 📝 Documentation

```
docs: add API authentication guide
docs: update deployment instructions for Kubernetes
docs(readme): add badges and contributing guidelines
docs(api): add OpenAPI spec for v3 endpoints
```

### 🔨 Chores & maintenance

```
chore: upgrade dependencies to latest stable versions
chore(deps): bump axios from 0.27 to 1.6
ci: add automated security scanning to PR pipeline
build: configure tree-shaking for production builds
```

---

## 8. Practice — Viết Commit Message 📝

### Bài 1: Viết commit message cho các tình huống sau

1. Bạn thêm nút "Dark Mode" vào trang Settings.
2. Bạn sửa lỗi user không logout được trên Safari.
3. Bạn cập nhật README thêm hướng dẫn cài đặt Docker.
4. Bạn đổi tên bảng `users` thành `accounts` trong database.
5. Bạn nâng phiên bản React từ 18 lên 19.

<details>
<summary>📖 Đáp án gợi ý</summary>

1. `feat(settings): add dark mode toggle`
2. `fix(auth): resolve logout failure on Safari`
3. `docs(readme): add Docker installation guide`
4. `refactor(db): rename users table to accounts`
5. `chore(deps): upgrade React from v18 to v19`

</details>

### Bài 2: Sửa commit message sai

1. `Fixed the bug in login page`
2. `update`
3. `add some new features and fix some bugs and update docs`
4. `feat: thêm chức năng tìm kiếm sản phẩm`

<details>
<summary>📖 Đáp án gợi ý</summary>

1. `fix(auth): resolve login page validation error` (imperative mood, thêm scope)
2. `refactor(config): update environment variable naming` (cụ thể hơn)
3. Tách thành 3 commits riêng:
   - `feat(search): add product search with filters`
   - `fix(cart): resolve quantity update on mobile`
   - `docs: update API endpoint documentation`
4. `feat(search): add product search functionality` (viết bằng tiếng Anh)

</details>

---

## Kết Luận

Commit message tốt không phải để "cho đẹp" — nó giúp bạn **debug nhanh hơn**, **review dễ hơn**, và **chứng minh năng lực** khi ai đó xem git log của bạn.

**3 quy tắc vàng:**
1. 🏷️ **Type + scope:** Phân loại rõ ràng (feat, fix, docs...)
2. ✍️ **Imperative mood:** Viết dạng mệnh lệnh (add, fix, remove)
3. 📏 **Ngắn gọn, cụ thể:** Subject < 72 ký tự, chi tiết để trong body

**Bài liên quan:**
- [50 Thuật Ngữ Git Mà Developer Hay Dùng](/posts/50-thuat-ngu-git-developer-hay-dung/)
- [Cách Viết Pull Request Description Chuyên Nghiệp](/posts/cach-viet-pull-request-description-chuyen-nghiep/)
- [Cách Viết README.md Bằng Tiếng Anh](/posts/cach-viet-readme-bang-tieng-anh/)

---

*Bắt đầu từ commit tiếp theo — hãy viết message chuẩn nhé! Team bạn sẽ cảm ơn đấy 😄* 🔖
