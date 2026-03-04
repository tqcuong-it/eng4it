---
title: "Technical Debt — 12 Thuật Ngữ Nợ Kỹ Thuật Developer Cần Hiểu"
date: 2023-02-18
summary: "Học 12 thuật ngữ Technical Debt quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-technical-debt-thuat-ngu-no-ky-thuat"
description: "Học 12 thuật ngữ tiếng Anh về Technical Debt — từ legacy code, refactor, deprecate đến code smell, breaking change và backward compatible."
categories: ["IT English"]
tags: ["backend", "agile", "testing"]
ShowToc: true
TocOpen: true
draft: false
---

"Move fast and break things" nghe cool, nhưng để lại một đống technical debt thì không cool chút nào. Mọi team đều phải đối mặt với nợ kỹ thuật — vấn đề là biết gọi tên nó và có kế hoạch trả nợ. Cùng học thuật ngữ nhé! 💳

---

### 🔹 Code cũ & Cải thiện

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| legacy code | /ˈlɛɡəsi koʊd/ | code cũ — code lâu đời, khó maintain, thiếu test | The **legacy code** was written 8 years ago in PHP 5 with no unit tests. |
| refactor | /ˌriːˈfæktər/ | tái cấu trúc — cải thiện code mà không thay đổi behavior | We spent two sprints to **refactor** the payment module and add proper error handling. |
| deprecate | /ˈdɛprɪkeɪt/ | ngưng hỗ trợ — đánh dấu sẽ bị loại bỏ trong tương lai | The v1 API has been **deprecated** — please migrate to v2 before December. |
| migration | /maɪˈɡreɪʃən/ | di chuyển — chuyển đổi hệ thống/dữ liệu sang platform mới | The database **migration** from MySQL to PostgreSQL took three months to complete. |

### 🔹 Giải pháp tạm thời

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| workaround | /ˈwɜːrkəˌraʊnd/ | giải pháp tạm — cách xử lý tạm thời khi chưa có fix chính thức | We implemented a **workaround** by caching the response to avoid the slow query. |
| hack | /hæk/ | mẹo tạm — code xấu nhưng chạy được, cần sửa lại sau | This is a dirty **hack** — it works for now but we need a proper solution next sprint. |
| TODO | /tuː duː/ | ghi chú việc cần làm — đánh dấu code cần quay lại sửa | There are 147 **TODO** comments in the codebase that nobody has addressed. |

### 🔹 Đo lường & Tương thích

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| tech debt ratio | /tɛk dɛt ˈreɪʃioʊ/ | tỷ lệ nợ kỹ thuật — chỉ số đo mức nợ kỹ thuật so với cost | SonarQube reports a **tech debt ratio** of 12%, which means significant remediation effort is needed. |
| code smell | /koʊd smɛl/ | mùi code — dấu hiệu code có vấn đề tiềm ẩn | Long methods and deep nesting are common **code smells** that indicate poor design. |
| maintainability | /meɪnˌteɪnəˈbɪləti/ | khả năng bảo trì — mức độ dễ dàng sửa đổi và mở rộng code | High test coverage and clean architecture improve the **maintainability** of the system. |
| backward compatible | /ˈbækwərd kəmˈpætəbl/ | tương thích ngược — phiên bản mới vẫn hoạt động với phiên bản cũ | The new API version is **backward compatible**, so existing clients don't need to change anything. |
| breaking change | /ˈbreɪkɪŋ tʃeɪndʒ/ | thay đổi phá vỡ — thay đổi làm hỏng code/tính năng hiện tại | Renaming the `user_id` field to `userId` is a **breaking change** for all API consumers. |

---

## 💡 Mẹo ghi nhớ

- **Technical Debt = Nợ tài chính**: Viết code nhanh = vay tiền (được lợi ngắn hạn). Không refactor = trả lãi (tốn thời gian maintain). Để quá lâu = phá sản (rewrite toàn bộ).
- **Workaround vs Hack**: Workaround = cách đi vòng hợp lý khi đường chính bị chặn. Hack = "cứ nhét vào cho chạy đã, tính sau". Cả hai đều tạm, nhưng hack rủi ro hơn nhiều.
- **Breaking change vs Backward compatible**: Breaking = "update xong là hỏng". Backward compatible = "update thoải mái, cái cũ vẫn chạy". Luôn ưu tiên backward compatible khi thiết kế API!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The v1 endpoint has been ___ and will be removed in the next major release.
2. We need to ___ the authentication module — it's become a tangled mess of if-else statements.
3. This is just a temporary ___ until the vendor fixes the bug in their SDK.
4. Long methods and duplicated logic are common ___ ___ that reduce code quality.
5. Make sure the API change is ___ ___ so existing mobile apps don't break.

---

{{< spoiler "✅ Đáp án" >}}
1. **deprecated** — Deprecate nghĩa là đánh dấu tính năng sẽ bị loại bỏ trong tương lai
2. **refactor** — Refactor là viết lại code sạch hơn mà không thay đổi chức năng
3. **workaround** — Workaround là giải pháp tạm thời khi chưa có fix chính thức
4. **code smells** — Code smell là dấu hiệu cho thấy code có vấn đề thiết kế tiềm ẩn
5. **backward compatible** — Backward compatible đảm bảo phiên bản mới không phá vỡ client cũ
{{< /spoiler >}}

---

Technical debt là thực tế không thể tránh khỏi — nhưng quản lý nó thông minh thì có thể. Nắm vững 12 thuật ngữ này giúp bạn discuss về tech debt với PM và team một cách chuyên nghiệp. Pay off your debt! 💪

---

## 📚 Bài viết liên quan

- [Từ Vựng Docker — Thuật Ngữ Container Mà Developer Cần Biết](/posts/tu-vung-docker-thuat-ngu-container/)
- [Agile & Scrum — 12 Thuật Ngữ Quản Lý Dự Án Mà Developer Nên Biết](/posts/tu-vung-agile-scrum-quan-ly-du-an/)
- [Bug Report — 15 Thuật Ngữ Báo Cáo Lỗi Mà Developer Nào Cũng Phải Biết](/posts/tu-vung-bug-report-bao-cao-loi/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
