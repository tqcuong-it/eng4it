---
title: "Testing & QA — 14 Thuật Ngữ Kiểm Thử Developer Phải Biết"
date: 2023-02-11
summary: "Học 14 thuật ngữ Testing & QA quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-testing-qa-thuat-ngu-kiem-thu"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về Testing & QA — từ unit test, integration test, mock đến TDD, BDD và test coverage. Dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["devops", "testing", "workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

"Code mà không test thì cũng như nấu mà không nếm" — testing là kỹ năng sống còn của mọi developer. Dù bạn viết unit test cho function nhỏ hay chạy e2e test cho cả flow, hiểu thuật ngữ testing bằng tiếng Anh giúp bạn đọc hiểu test report, viết test plan, và trao đổi với QA team dễ dàng. Let's test your vocabulary! 🧪

---

### 🔹 Các loại Test

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| unit test | /ˈjuːnɪt tɛst/ | kiểm thử đơn vị — test từng function riêng lẻ | Write a **unit test** to verify that the calculateTotal function returns the correct sum. |
| integration test | /ˌɪntɪˈɡreɪʃən tɛst/ | kiểm thử tích hợp — test nhiều module kết hợp | The **integration test** checks that the API endpoint correctly saves data to the database. |
| e2e test | /ˌiː.tuː.ˈiː tɛst/ | end-to-end test — kiểm thử toàn bộ flow từ UI đến DB | Our **e2e tests** simulate a user logging in, adding items to cart, and completing checkout. |
| smoke test | /smoʊk tɛst/ | kiểm thử nhanh các chức năng chính sau deploy | Run a **smoke test** after deployment to make sure the homepage and login still work. |
| load test | /loʊd tɛst/ | kiểm thử tải — đo hiệu năng dưới áp lực | The **load test** showed the server can handle 5,000 concurrent users before slowing down. |

### 🔹 Test Techniques

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| mock | /mɒk/ | đối tượng giả lập để thay thế dependency thật | Use a **mock** for the payment service so the test doesn't charge a real credit card. |
| stub | /stʌb/ | hàm giả trả về giá trị cố định | Create a **stub** that returns a fixed list of users instead of querying the database. |
| fixture | /ˈfɪkstʃər/ | dữ liệu mẫu chuẩn bị sẵn cho test | Load the test **fixtures** to populate the database with sample products before running tests. |
| assertion | /əˈsɜːrʃən/ | câu lệnh kiểm tra kết quả đúng hay sai | The **assertion** checks that the response status code equals 200. |

### 🔹 Metrics & Processes

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| coverage | /ˈkʌvərɪdʒ/ | độ phủ test — phần trăm code được test | We need at least 80% test **coverage** before merging to the main branch. |
| regression | /rɪˈɡrɛʃən/ | lỗi tái phát — bug cũ xuất hiện lại sau khi thay đổi code | The new feature caused a **regression** — the search function stopped working. |
| test suite | /tɛst swiːt/ | bộ test — tập hợp các test case liên quan | Run the full **test suite** before every release to catch any regressions. |

### 🔹 Phương pháp phát triển

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| TDD | /ˌtiː.diː.ˈdiː/ | Test-Driven Development — viết test trước, code sau | With **TDD**, you write the failing test first, then write code to make it pass. |
| BDD | /ˌbiː.diː.ˈdiː/ | Behavior-Driven Development — viết test theo hành vi mong muốn | **BDD** scenarios are written in plain English: "Given a logged-in user, when they click logout..." |

---

## 💡 Mẹo ghi nhớ

- **Mock vs Stub**: Mock = diễn viên đóng thế (kiểm tra có được gọi đúng không). Stub = mannequin (chỉ đứng đó trả giá trị cố định, không kiểm tra gì). Mock verify behavior, stub provide data.
- **Unit → Integration → E2E** = Kim tự tháp test: Unit test nhiều nhất (đáy), e2e test ít nhất (đỉnh). Càng lên cao càng chậm và tốn chi phí.
- **TDD** nhớ quy trình: 🔴 Red (test fail) → 🟢 Green (viết code cho pass) → 🔵 Refactor (tối ưu code).

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Write a ___ ___ to verify that the validateEmail function rejects invalid formats.
2. Use a ___ for the email service so the test doesn't actually send emails.
3. The CI pipeline requires at least 80% ___ before allowing a merge.
4. After fixing the login bug, a ___ appeared in the registration flow.
5. In ___, you write the test before writing the actual implementation code.

{{< spoiler "✅ Đáp án" >}}
1. **unit test** — Test từng function riêng lẻ
2. **mock** — Giả lập service để test không gọi service thật
3. **coverage** — Độ phủ test đảm bảo code được kiểm tra đầy đủ
4. **regression** — Lỗi tái phát ở chức năng khác sau khi sửa code
5. **TDD** — Test-Driven Development: viết test trước, code sau
{{< /spoiler >}}

---

## 🎯 Tổng kết

Testing không chỉ là "chạy cho pass" — nó là văn hóa chất lượng. Nắm 14 thuật ngữ này giúp bạn viết test hiệu quả, đọc hiểu test report, và communicate với QA team bằng tiếng Anh một cách tự tin. Remember: untested code is broken code! 🎯
