---
title: "Cách Đọc Hiểu RFC & Technical Specifications Bằng Tiếng Anh"
slug: "cach-doc-hieu-rfc-technical-specifications"
date: 2026-03-18
summary: "Hướng dẫn developer Việt cách đọc hiểu RFC và technical specifications — từ vựng, cấu trúc, keyword quan trọng như MUST, SHALL, MAY."
description: "Cách đọc hiểu RFC và Technical Specifications cho developer Việt Nam. Giải thích cấu trúc RFC, từ vựng chuyên ngành, keyword bắt buộc (MUST, SHALL, SHOULD, MAY) theo RFC 2119, kèm bài tập thực hành đọc hiểu."
tags: ["rfc", "technical-specifications", "documentation", "reading-comprehension", "it-english", "developer", "standards"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

**RFC (Request for Comments)** là nền tảng của internet. HTTP, TCP/IP, DNS, TLS — tất cả đều được định nghĩa trong RFC. Nếu bạn muốn hiểu sâu cách công nghệ hoạt động, **đọc RFC là kỹ năng bắt buộc**.

Nhưng thực tế? Rất nhiều developer Việt **sợ đọc RFC** vì:
- Tiếng Anh "hàn lâm", khác hẳn blog hay tutorial
- Dài và khô khan — một RFC có thể **hàng trăm trang**
- Không biết bắt đầu từ đâu
- Gặp MUST, SHALL, MAY mà không rõ nghĩa chính xác

Bài viết này giúp bạn:
- Hiểu **cấu trúc chuẩn** của một RFC
- Nắm **keyword bắt buộc** theo RFC 2119 — phân biệt MUST vs SHOULD vs MAY
- Học **từ vựng** hay gặp trong technical specifications
- Biết **chiến lược đọc** hiệu quả — không cần đọc từ đầu đến cuối

---

## 1. RFC là gì? — RFC Explained

| Thuật ngữ | IPA | Nghĩa |
|-----------|-----|-------|
| **RFC** (Request for Comments) | /ˌɑːr.ɛf.ˈsiː/ | "Yêu cầu nhận xét" — tài liệu tiêu chuẩn của internet |
| **Specification** (Spec) | /ˌspɛsɪfɪˈkeɪʃən/ | Đặc tả kỹ thuật — mô tả chi tiết cách hệ thống hoạt động |
| **Standard** | /ˈstændərd/ | Tiêu chuẩn — quy tắc được cộng đồng chấp nhận |
| **Draft** | /dræft/ | Bản nháp — chưa chính thức |
| **Proposed Standard** | /prəˈpoʊzd ˈstændərd/ | Tiêu chuẩn đề xuất — đang chờ review |
| **IETF** (Internet Engineering Task Force) | /ˌaɪ.iː.tiː.ˈɛf/ | Tổ chức quản lý RFC và tiêu chuẩn internet |

### Một số RFC nổi tiếng mà developer nên biết

| RFC | Nội dung | Tại sao quan trọng |
|-----|----------|---------------------|
| RFC 2119 | Keyword conventions (MUST, SHALL, MAY...) | Nền tảng đọc mọi RFC khác |
| RFC 7230-7235 | HTTP/1.1 | Web developer cần đọc |
| RFC 9110 | HTTP Semantics | HTTP hiện đại |
| RFC 7519 | JSON Web Token (JWT) | Auth developer phải biết |
| RFC 6749 | OAuth 2.0 | Authorization framework |
| RFC 8446 | TLS 1.3 | Security/encryption |
| RFC 793 | TCP | Network fundamentals |

---

## 2. Cấu trúc một RFC — RFC Structure

Mọi RFC đều có cấu trúc tương tự. Biết cấu trúc = biết **skip** phần nào, **tập trung** phần nào:

| Section | Nghĩa | Có nên đọc? |
|---------|-------|-------------|
| **Abstract** | Tóm tắt ngắn gọn | ✅ Đọc đầu tiên — quyết định có đọc tiếp không |
| **Status of This Memo** | Trạng thái tài liệu | ⏭️ Skip — chỉ cần biết nó là standard hay draft |
| **Copyright Notice** | Bản quyền | ⏭️ Skip |
| **Table of Contents** | Mục lục | ✅ Scan nhanh để nắm outline |
| **Introduction** | Giới thiệu bối cảnh, mục tiêu | ✅ Đọc để hiểu context |
| **Terminology** | Định nghĩa thuật ngữ | ✅ Đọc kỹ — đây là "từ điển" của RFC |
| **Main Body** | Nội dung chính | ✅ Đọc phần liên quan đến vấn đề bạn cần giải quyết |
| **Security Considerations** | Các vấn đề bảo mật | ✅ Quan trọng cho production |
| **IANA Considerations** | Đăng ký tham số với IANA | ⏭️ Skip — trừ khi bạn implement protocol |
| **References** | Tài liệu tham khảo | 📖 Dùng khi cần đào sâu |
| **Appendix** | Phụ lục — ví dụ, test vectors | 📖 Rất hữu ích cho implementation |

### 💡 Chiến lược đọc RFC hiệu quả

1. **Đọc Abstract** — hiểu RFC nói về gì trong 30 giây
2. **Scan Table of Contents** — tìm section liên quan
3. **Đọc Terminology** — nắm định nghĩa chính xác
4. **Nhảy vào section cần** — không cần đọc tuần tự
5. **Đọc Security Considerations** — trước khi implement
6. **Check Appendix** — thường có ví dụ rất cụ thể

---

## 3. RFC 2119 Keywords — Từ khóa bắt buộc phải biết

Đây là phần **quan trọng nhất** của bài. RFC 2119 định nghĩa các keyword diễn đạt **mức độ bắt buộc** trong specifications. Khi thấy chúng VIẾT HOA, đó là **thuật ngữ chính thức**, không phải nhấn mạnh thông thường.

| Keyword | IPA | Mức độ | Nghĩa chính xác |
|---------|-----|--------|------------------|
| **MUST** | /mʌst/ | Bắt buộc tuyệt đối | Phải tuân thủ — không có ngoại lệ |
| **MUST NOT** | /mʌst nɒt/ | Cấm tuyệt đối | Không được làm — không có ngoại lệ |
| **SHALL** | /ʃæl/ | = MUST | Giống MUST — bắt buộc tuyệt đối |
| **SHALL NOT** | /ʃæl nɒt/ | = MUST NOT | Giống MUST NOT — cấm |
| **REQUIRED** | /rɪˈkwaɪərd/ | = MUST | Bắt buộc |
| **SHOULD** | /ʃʊd/ | Khuyến nghị mạnh | Nên tuân thủ, nhưng có thể bỏ qua nếu có lý do chính đáng |
| **SHOULD NOT** | /ʃʊd nɒt/ | Khuyến nghị không làm | Không nên, nhưng chấp nhận được trong trường hợp đặc biệt |
| **RECOMMENDED** | /ˌrɛkəˈmɛndɪd/ | = SHOULD | Khuyến nghị |
| **MAY** | /meɪ/ | Tùy chọn | Hoàn toàn optional — có thể làm hoặc không |
| **OPTIONAL** | /ˈɒpʃənəl/ | = MAY | Tùy chọn |

### ⚠️ Phân biệt quan trọng

> **MUST** = Nếu không tuân thủ → implementation **không hợp lệ** (non-compliant)  
> **SHOULD** = Nếu không tuân thủ → vẫn hợp lệ, nhưng cần **giải thích lý do**  
> **MAY** = Tùy bạn — nhưng nếu implement, **phải tương thích** với hệ thống khác  

### Ví dụ thực tế — Trích từ RFC 7519 (JWT)

> *"The JWT MUST contain exactly three parts separated by period ('.') characters."*  
> → JWT **bắt buộc** có đúng 3 phần ngăn bởi dấu chấm. Không có ngoại lệ.

> *"Implementations SHOULD reject JWTs with duplicate claims."*  
> → **Nên** reject JWT có claim trùng, nhưng nếu bạn có lý do chính đáng để chấp nhận thì OK.

> *"The 'aud' claim MAY contain an array of audience values."*  
> → Claim 'aud' **có thể** chứa mảng giá trị. Implement hay không tùy bạn.

---

## 4. Từ vựng hay gặp trong Specifications

### 4.1 Cấu trúc & Format

| Thuật ngữ | IPA | Nghĩa | Ví dụ context |
|-----------|-----|-------|----------------|
| **Syntax** | /ˈsɪntæks/ | Cú pháp — cấu trúc hợp lệ | "The syntax of a URI is..." |
| **Semantics** | /sɪˈmæntɪks/ | Ngữ nghĩa — ý nghĩa của cấu trúc | "The semantics of the GET method..." |
| **Payload** | /ˈpeɪloʊd/ | Phần dữ liệu chính trong message | "The request payload MUST be JSON" |
| **Header** | /ˈhɛdər/ | Phần đầu — metadata đi kèm payload | "The Content-Type header..." |
| **Field** | /fiːld/ | Trường — một mục dữ liệu cụ thể | "This field is OPTIONAL" |
| **Token** | /ˈtoʊkən/ | Đơn vị nhỏ nhất trong cú pháp | "Each token MUST be separated by a space" |

### 4.2 Hành vi & Xử lý

| Thuật ngữ | IPA | Nghĩa | Ví dụ context |
|-----------|-----|-------|----------------|
| **Parse** | /pɑːrs/ | Phân tích cú pháp | "The server MUST parse the request..." |
| **Validate** | /ˈvælɪdeɪt/ | Xác thực dữ liệu hợp lệ | "Implementations SHOULD validate input" |
| **Conform** | /kənˈfɔːrm/ | Tuân thủ — khớp với spec | "A conforming implementation MUST..." |
| **Deprecate** | /ˈdɛprɪkeɪt/ | Không khuyến khích dùng nữa | "This feature is deprecated in favor of..." |
| **Supersede** | /ˌsuːpərˈsiːd/ | Thay thế — phiên bản mới thay cũ | "RFC 9110 supersedes RFC 7230" |
| **Interoperable** | /ˌɪntərˈɒpərəbəl/ | Tương thích qua lại giữa các hệ thống | "Implementations MUST be interoperable" |

### 4.3 Điều kiện & Ngoại lệ

| Thuật ngữ | IPA | Nghĩa | Ví dụ context |
|-----------|-----|-------|----------------|
| **Unless** | /ənˈlɛs/ | Trừ khi — ngoại lệ | "The connection MUST be closed, unless..." |
| **Provided that** | /prəˈvaɪdɪd ðæt/ | Với điều kiện là | "MAY be cached, provided that..." |
| **Notwithstanding** | /ˌnɒtwɪθˈstændɪŋ/ | Bất chấp, mặc dù | Formal hơn "despite" |
| **Hereafter** | /hɪərˈæftər/ | Sau đây, từ đây trở đi | "Hereafter referred to as 'the server'" |
| **Aforementioned** | /əˈfɔːrmɛnʃənd/ | Đã đề cập ở trên | "The aforementioned algorithm" |
| **Respectively** | /rɪˈspɛktɪvli/ | Lần lượt, tương ứng | "Values A, B, and C represent X, Y, and Z respectively" |

---

## 5. Đọc ABNF — Cú pháp hình thức

Nhiều RFC dùng **ABNF (Augmented Backus-Naur Form)** để mô tả cú pháp chính xác. Đây là "ngôn ngữ lập trình" cho grammar:

```
; Ví dụ từ RFC 7230 — HTTP/1.1 Request Line
request-line = method SP request-target SP HTTP-version CRLF
method       = token
HTTP-version = "HTTP/" DIGIT "." DIGIT
```

| Ký hiệu ABNF | Nghĩa | Ví dụ |
|---------------|-------|-------|
| `=` | Được định nghĩa là | `method = token` |
| `/` | Hoặc (alternation) | `"yes" / "no"` |
| `*` | Lặp 0 hoặc nhiều lần | `*DIGIT` = 0 hoặc nhiều digit |
| `1*` | Lặp 1 hoặc nhiều lần | `1*DIGIT` = ít nhất 1 digit |
| `[ ]` | Optional | `[port]` = có hoặc không |
| `SP` | Space (khoảng trắng) | |
| `CRLF` | Xuống dòng | Carriage Return + Line Feed |
| `DIGIT` | Số 0-9 | |
| `ALPHA` | Chữ cái A-Z, a-z | |

### 💡 Cách đọc ABNF

Đọc ABNF giống đọc **grammar rules** trong ngôn ngữ lập trình:
- **Vế trái** = tên rule
- **Vế phải** = cách rule được cấu thành
- Đọc từ trên xuống, **rule phức tạp** được xây từ **rule đơn giản**

---

## 6. Ví dụ thực hành — Đọc đoạn RFC thật

### Đoạn trích từ RFC 6749 (OAuth 2.0), Section 4.1:

> *"The authorization server MUST support the use of the HTTP 'GET' method for the authorization endpoint and MAY support the use of the 'POST' method as well. Parameters sent without a value MUST be treated as if they were omitted from the request. The authorization server MUST ignore unrecognized request parameters."*

**Phân tích:**

| Câu | Keyword | Ý nghĩa |
|-----|---------|---------|
| "MUST support HTTP GET" | **MUST** | Bắt buộc hỗ trợ GET — không thể chỉ hỗ trợ POST |
| "MAY support POST as well" | **MAY** | POST là optional — implement hay không đều OK |
| "MUST be treated as if omitted" | **MUST** | Parameter không có value → xử lý như không gửi |
| "MUST ignore unrecognized parameters" | **MUST** | Gặp parameter lạ → bỏ qua, KHÔNG báo lỗi |

### 💡 Insight

Chú ý cách RFC dùng **MUST ignore** thay vì **MUST reject** — đây là thiết kế **forward-compatible**: hệ thống cũ vẫn hoạt động khi có parameter mới được thêm trong tương lai.

---

## 7. Technical Specifications ngoài RFC

RFC không phải nguồn spec duy nhất. Developer cần biết đọc:

| Loại | Ví dụ | Tổ chức |
|------|-------|---------|
| **W3C Specifications** | HTML, CSS, WebSocket | W3C |
| **ECMA Standards** | ECMAScript (JavaScript) | Ecma International |
| **OpenAPI Specification** | REST API docs | OpenAPI Initiative |
| **IEEE Standards** | Wi-Fi, Ethernet | IEEE |
| **ISO Standards** | Date format (ISO 8601), Character sets | ISO |
| **PEP** (Python Enhancement Proposals) | Python language changes | Python |
| **JSR** (Java Specification Requests) | Java platform features | JCP |

Tất cả đều dùng **cùng từ vựng và keyword** — học đọc RFC = đọc được mọi loại spec.

---

## 8. Practice — Bài tập thực hành

### Exercise 1: Xác định mức độ bắt buộc

Đọc các câu sau và xác định: **Bắt buộc / Khuyến nghị / Tùy chọn?**

1. "The server SHOULD return a 400 status code for malformed requests."
2. "Implementations MUST support UTF-8 encoding."
3. "The client MAY include an Accept-Language header."
4. "The password MUST NOT be stored in plaintext."
5. "It is RECOMMENDED that sessions expire after 30 minutes of inactivity."

### Exercise 2: Đọc hiểu đoạn spec

> *"A JWT MUST be rejected if the 'exp' claim is present and the current time is equal to or greater than the value. Implementations SHOULD allow a small clock skew (no more than a few minutes) to account for differences in system clocks. The 'nbf' (not before) claim MAY be used to prevent a JWT from being accepted before a specified time."*

Trả lời:
1. Khi nào JWT bị reject?
2. "Clock skew" là gì và có bắt buộc không?
3. Claim 'nbf' có bắt buộc không?

### Exercise 3: Viết mini-spec

Viết 5 câu specification cho một **Login API** sử dụng đúng keyword RFC 2119. Ví dụ:
> "The request MUST include a 'username' field and a 'password' field."

### Đáp án Exercise 1
1. **Khuyến nghị** (SHOULD) — nên trả 400, nhưng có thể xử lý khác nếu có lý do
2. **Bắt buộc** (MUST) — phải hỗ trợ UTF-8, không có ngoại lệ
3. **Tùy chọn** (MAY) — client có quyền gửi hoặc không
4. **Cấm tuyệt đối** (MUST NOT) — không được lưu password dạng plaintext
5. **Khuyến nghị** (RECOMMENDED = SHOULD) — nên expire sau 30 phút

### Đáp án Exercise 2
1. Khi claim 'exp' có mặt **VÀ** thời gian hiện tại ≥ giá trị exp → JWT **phải bị reject** (MUST)
2. **Clock skew** = sai lệch đồng hồ giữa các hệ thống. Cho phép vài phút chênh lệch. **Khuyến nghị** (SHOULD) — không bắt buộc nhưng nên implement
3. **Không bắt buộc** (MAY) — hoàn toàn tùy chọn

---

## Kết luận

Đọc RFC và technical specifications là **kỹ năng nâng cao** giúp bạn:

✅ **Hiểu sâu** cách công nghệ hoạt động — không chỉ dùng theo tutorial  
✅ **Debug chính xác** — biết cái nào đúng spec, cái nào sai  
✅ **Implement chuẩn** — tuân thủ MUST, cân nhắc SHOULD, biết MAY  
✅ **Giao tiếp chuyên nghiệp** — dùng đúng thuật ngữ khi discuss với team quốc tế  

Bắt đầu với **RFC 2119** (rất ngắn, chỉ ~2 trang), sau đó thử đọc RFC của công nghệ bạn đang dùng hàng ngày. Bạn sẽ bất ngờ vì **nó dễ hiểu hơn tưởng tượng** khi đã nắm vững từ vựng!

---

*Bài trước: [40 Từ Vựng Cloud Computing (AWS/GCP/Azure)](/posts/40-tu-vung-cloud-computing-aws-gcp-azure/) — nắm thuật ngữ cloud cho developer.*
