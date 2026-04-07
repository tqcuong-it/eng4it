---
title: "Cách Viết Code Comment Bằng Tiếng Anh — Dễ Hiểu, Chuyên Nghiệp"
slug: "cach-viet-code-comment-bang-tieng-anh"
date: 2026-04-08
summary: "Hướng dẫn viết code comment chuẩn tiếng Anh: khi nào cần comment, cách diễn đạt, từ vựng thường dùng, ví dụ thực tế cho developer Việt."
description: "Cách viết code comment bằng tiếng Anh chuyên nghiệp cho developer. Khi nào cần comment, inline comment, block comment, JSDoc, docstring. Bảng từ vựng EN-VN, ví dụ thực tế, lỗi thường gặp và best practices."
tags: ["code-comment", "clean-code", "workplace-english", "developer", "best-practices"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Code comment là một trong những kỹ năng viết tiếng Anh **developer dùng hàng ngày** — nhiều hơn cả email hay meeting. Nhưng rất nhiều developer Việt mắc lỗi:

- Comment bằng tiếng Việt (đồng nghiệp quốc tế không đọc được)
- Comment dài dòng, thừa thãi ("This function returns true" — ai cũng thấy rồi!)
- Comment sai ngữ pháp khiến người đọc hiểu nhầm
- Không comment những chỗ thật sự cần giải thích

Bài này hướng dẫn bạn viết code comment bằng tiếng Anh **rõ ràng, chuyên nghiệp**, đúng ngữ cảnh — kèm bảng từ vựng và ví dụ thực tế.

---

## 1. Khi Nào Cần Comment (và Khi Nào Không)

### 1.1 NÊN comment khi

| Tình huống | Ví dụ |
|---|---|
| **Giải thích WHY (tại sao)** | `// Use binary search here because the list is always sorted by createdAt` |
| **Business logic phức tạp** | `// Tax rate changes after 6 months per government regulation §12.3` |
| **Workaround / hack** | `// HACK: API returns null for empty arrays, so we default to []` |
| **TODO / FIXME** | `// TODO(cuong): Replace with batch API when available` |
| **Regex hoặc magic number** | `// Match emails: local-part@domain.tld` |
| **Public API / Library** | JSDoc, docstring cho consumer đọc |

### 1.2 KHÔNG NÊN comment khi

Code đã tự giải thích (self-documenting):

```javascript
// ❌ Bad — comment thừa
// Check if user is active
if (user.isActive) { ... }

// ✅ Good — code tự rõ, không cần comment
if (user.isActive) { ... }
```

```python
# ❌ Bad — diễn tả lại code
# Increment counter by 1
counter += 1

# ✅ Good — giải thích WHY
# Reset attempt counter after successful login to prevent lockout carry-over
counter = 0
```

> 💡 **Golden rule:** *Comment the WHY, not the WHAT.*

---

## 2. Các Loại Comment Thường Gặp

### 2.1 Inline Comment (comment cuối dòng)

```javascript
const MAX_RETRIES = 3; // Limit retries to prevent infinite loops
const timeout = 5000;  // Milliseconds — matches API gateway timeout
```

**Quy tắc:**
- Ngắn gọn (< 60 ký tự)
- Dùng `//` (JS, Java, C#) hoặc `#` (Python, Ruby)
- Cách code ít nhất 2 spaces

### 2.2 Block Comment (comment nhiều dòng)

```java
/*
 * Calculate the shipping cost based on weight and destination zone.
 * Uses tiered pricing: first 5kg at base rate, additional weight at
 * reduced rate. International zones add a 15% surcharge.
 */
public double calculateShippingCost(double weight, int zone) { ... }
```

### 2.3 Documentation Comment (JSDoc / Docstring)

**JavaScript / TypeScript (JSDoc):**

```typescript
/**
 * Send a password reset email to the user.
 *
 * @param email - The user's registered email address
 * @param locale - Language code for the email template (default: "en")
 * @returns A promise that resolves to true if the email was sent successfully
 * @throws {UserNotFoundError} If no account matches the email
 *
 * @example
 * await sendPasswordReset("user@example.com", "vi");
 */
async function sendPasswordReset(email: string, locale?: string): Promise<boolean> { ... }
```

**Python (Docstring):**

```python
def calculate_discount(price: float, tier: str) -> float:
    """Calculate the discount amount based on the customer's membership tier.

    Uses a tiered discount system:
    - Silver: 5%
    - Gold: 10%
    - Platinum: 15%

    Args:
        price: The original price before discount.
        tier: The customer's membership tier ("silver", "gold", or "platinum").

    Returns:
        The discount amount in the same currency as the input price.

    Raises:
        ValueError: If the tier is not recognized.
    """
```

### 2.4 TODO / FIXME / HACK / NOTE

```javascript
// TODO: Migrate to WebSocket for real-time updates (tracking: JIRA-1234)
// FIXME: Race condition when two users submit at the same time
// HACK: Workaround for Chrome 120 flexbox rendering bug
// NOTE: This endpoint is deprecated — use /v2/users instead
// WARNING: Do not change the order of these operations — it will break idempotency
```

---

## 3. Bảng Từ Vựng Comment Thường Dùng

| Tiếng Anh | Phát âm (IPA) | Tiếng Việt | Ngữ cảnh |
|---|---|---|---|
| workaround | /ˈwɜːrk.ə.raʊnd/ | giải pháp tạm | `// Workaround for API bug` |
| deprecated | /ˈdep.rə.keɪ.tɪd/ | không còn dùng nữa | `// Deprecated: use newMethod() instead` |
| fallback | /ˈfɔːl.bæk/ | phương án dự phòng | `// Fallback to default config` |
| sentinel value | /ˈsen.tɪ.nəl ˈvæl.juː/ | giá trị canh gác | `// -1 is the sentinel value for "not found"` |
| idempotent | /ˌaɪ.dɛmˈpoʊ.tənt/ | lặp lại cho kết quả giống | `// This operation is idempotent` |
| side effect | /saɪd ɪˈfekt/ | tác dụng phụ | `// NOTE: This function has side effects (writes to DB)` |
| invariant | /ɪnˈver.i.ənt/ | bất biến | `// Invariant: list is always sorted` |
| edge case | /edʒ keɪs/ | trường hợp biên | `// Handle edge case: empty input array` |
| boilerplate | /ˈbɔɪ.lər.pleɪt/ | code mẫu lặp lại | `// Boilerplate — required by the framework` |
| trade-off | /ˈtreɪd.ɑːf/ | đánh đổi | `// Trade-off: faster but uses more memory` |
| throttle | /ˈθrɒt.əl/ | giới hạn tần suất | `// Throttle API calls to 10 req/sec` |
| debounce | /diːˈbaʊns/ | chờ ổn định rồi thực thi | `// Debounce search input (300ms)` |
| assertion | /əˈsɜːr.ʃən/ | kiểm tra điều kiện | `// Assertion: user must be authenticated` |
| sanitize | /ˈsæn.ɪ.taɪz/ | làm sạch input | `// Sanitize user input to prevent XSS` |
| normalize | /ˈnɔːr.mə.laɪz/ | chuẩn hóa | `// Normalize email to lowercase` |

---

## 4. Mẫu Câu Hay Dùng Trong Comment

### 4.1 Giải thích lý do (WHY)

```
// We use X because Y
// This is necessary because ...
// Required by [spec/regulation/API contract]
// Intentionally left blank — handled by the parent component
// Chosen over X for better performance in high-traffic scenarios
```

### 4.2 Cảnh báo

```
// WARNING: Changing this will break backward compatibility
// IMPORTANT: This must run before database migration
// Do NOT remove — required for legacy client support
// Order matters here — see incident report #452
```

### 4.3 Trạng thái & kế hoạch

```
// TODO(author): Brief description (ticket: PROJ-123)
// FIXME: Describe the bug — fails when input > 10MB
// HACK: Temporary fix until upstream library patches issue #789
// DEPRECATED: Use calculateTaxV2() instead — will be removed in v3.0
```

### 4.4 Giải thích thuật toán

```
// Algorithm: Two-pointer approach — O(n) time, O(1) space
// Step 1: Sort the array in ascending order
// Step 2: Use binary search to find the target
// We iterate backwards to preserve insertion order
```

---

## 5. Lỗi Thường Gặp (Common Mistakes)

### ❌ Comment dịch code sang tiếng Anh

```python
# Bad
# Set x to 5
x = 5

# Loop through the list
for item in items:
    process(item)
```

### ❌ Comment bằng tiếng Việt trong codebase quốc tế

```javascript
// Kiểm tra xem user có active không
// → Đồng nghiệp nước ngoài không đọc được!
```

### ❌ Comment lỗi thời (stale comment)

```java
// Returns the user's full name
// → Nhưng function đã đổi sang return nickname 3 tháng trước!
public String getDisplayName() {
    return user.getNickname(); // Comment nói "full name" nhưng code trả về nickname
}
```

> ⚠️ **A wrong comment is worse than no comment.** Comment sai còn nguy hiểm hơn không có comment.

### ❌ Comment quá dài dòng

```javascript
// ❌ Too much
// This function is used to validate the email address that the user
// enters into the registration form on the signup page. It checks
// whether the email contains an @ symbol and a valid domain name
// using a regular expression pattern.
function validateEmail(email) { ... }

// ✅ Just right
// Validate email format using RFC 5322 simplified regex
function validateEmail(email) { ... }
```

---

## 6. Best Practices — Tóm Tắt

| # | Best Practice | Giải thích |
|---|---|---|
| 1 | **Comment the WHY, not the WHAT** | Giải thích lý do, không mô tả lại code |
| 2 | **Keep comments up to date** | Comment lỗi thời = bug documentation |
| 3 | **Use TODO/FIXME consistently** | Kèm tên người và ticket number |
| 4 | **Write in English** | Dù team Việt — codebase nên dùng tiếng Anh |
| 5 | **Be concise** | Ngắn gọn, đi thẳng vào vấn đề |
| 6 | **Use proper grammar** | Comment cũng cần đúng ngữ pháp cơ bản |
| 7 | **Prefer self-documenting code** | Đặt tên biến/hàm rõ ràng trước khi nghĩ đến comment |
| 8 | **Document public APIs** | JSDoc / Docstring cho function public |

---

## 7. Practice — Bài Tập Thực Hành

### Bài 1: Sửa comment

Các comment sau đây có vấn đề. Hãy viết lại cho đúng:

```javascript
// 1. Comment thừa
// Add 1 to count
count++;

// 2. Comment tiếng Việt
// Lấy danh sách user từ database
const users = await db.query("SELECT * FROM users");

// 3. Comment mơ hồ
// Fix the thing
if (data.length === 0) return [];
```

<details>
<summary>💡 Gợi ý đáp án</summary>

```javascript
// 1. Xóa comment (code đã tự rõ ràng)
count++;

// 2. Viết bằng tiếng Anh, giải thích WHY nếu cần
// Fetch all users — no pagination needed, max 100 records per org
const users = await db.query("SELECT * FROM users");

// 3. Giải thích context cụ thể
// Return early for empty datasets to avoid division by zero in chart rendering
if (data.length === 0) return [];
```

</details>

### Bài 2: Viết comment cho code sau

```python
def retry(func, max_attempts=3, delay=1):
    for attempt in range(max_attempts):
        try:
            return func()
        except Exception:
            if attempt == max_attempts - 1:
                raise
            time.sleep(delay * (2 ** attempt))
```

<details>
<summary>💡 Gợi ý đáp án</summary>

```python
def retry(func, max_attempts=3, delay=1):
    """Retry a function with exponential backoff.

    Calls the given function up to max_attempts times. On failure,
    waits with exponential backoff (delay * 2^attempt) before retrying.
    Raises the last exception if all attempts fail.

    Args:
        func: A callable with no arguments to execute.
        max_attempts: Maximum number of retry attempts (default: 3).
        delay: Base delay in seconds between retries (default: 1).

    Raises:
        Exception: The last exception raised by func after all retries.
    """
    for attempt in range(max_attempts):
        try:
            return func()
        except Exception:
            if attempt == max_attempts - 1:
                raise
            # Exponential backoff: 1s, 2s, 4s, ...
            time.sleep(delay * (2 ** attempt))
```

</details>

### Bài 3: Dịch comment sang tiếng Anh

```java
// Kiểm tra xem token có hết hạn chưa, nếu hết hạn thì refresh
// Cần refresh trước 5 phút để tránh bị lỗi giữa chừng
if (token.expiresAt < now + 300) {
    token = refreshToken(token);
}
```

<details>
<summary>💡 Gợi ý đáp án</summary>

```java
// Proactively refresh token 5 minutes before expiry to prevent
// mid-request failures caused by token expiration during processing
if (token.expiresAt < now + 300) {
    token = refreshToken(token);
}
```

</details>

---

## Kết Luận

Code comment tốt giúp cả team hiểu **tại sao** code viết như vậy — không chỉ hôm nay mà còn 6 tháng sau. Hãy nhớ:

1. **WHY > WHAT** — giải thích lý do, không lặp lại code
2. **English always** — dù team toàn người Việt
3. **Keep it fresh** — update comment khi đổi code
4. **Less is more** — code tự giải thích + comment tinh gọn = perfect combo

> *"Code tells you how; comments tell you why."* — Jeff Atwood

Chúc bạn viết code (và comment) ngày càng chuyên nghiệp! 💪
