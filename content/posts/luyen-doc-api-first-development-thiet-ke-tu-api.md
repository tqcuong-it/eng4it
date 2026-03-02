---
title: "The API-First Development Approach — Thiết kế từ API trước"
date: 2023-09-08
slug: "luyen-doc-api-first-development-thiet-ke-tu-api"
description: "Tìm hiểu API-first development — phương pháp thiết kế API trước khi viết code, giúp tăng tốc phát triển và cải thiện collaboration giữa các team."
categories: ["Reading Practice"]
tags: ["advanced", "programming"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Advanced
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** Programming / API-first Design

## 📰 Bài đọc (English)

For decades, APIs were an {{< vocab w="afterthought" ipa="/ˈæftərθɔːt/" vn="điều nghĩ đến sau" t="noun" >}} — bolted onto applications once the core logic was built. That era is ending. A growing number of engineering organizations are embracing {{< vocab w="API-first development" ipa="/ˌeɪpiːaɪ fɜːrst dɪˈveləpmənt/" vn="phát triển ưu tiên API" t="noun" >}}, a methodology where the API contract is designed, documented, and {{< vocab w="validated" ipa="/ˈvælɪdeɪtɪd/" vn="xác thực, kiểm tra" t="verb" >}} before a single line of implementation code is written.

The approach draws heavily from the principles of {{< vocab w="contract-first design" ipa="/ˈkɑːntrækt fɜːrst dɪˈzaɪn/" vn="thiết kế ưu tiên hợp đồng" t="noun" >}}. Teams begin by authoring an {{< vocab w="OpenAPI specification" ipa="/ˌoʊpən eɪpiːaɪ ˌspesɪfɪˈkeɪʃən/" vn="đặc tả OpenAPI" t="noun" >}} (formerly Swagger) that defines every {{< vocab w="endpoint" ipa="/ˈendpɔɪnt/" vn="điểm cuối API" t="noun" >}}, request {{< vocab w="payload" ipa="/ˈpeɪloʊd/" vn="dữ liệu tải" t="noun" >}}, response schema, and error format. This specification becomes the single {{< vocab w="source of truth" ipa="/sɔːrs əv truːθ/" vn="nguồn sự thật duy nhất" t="noun" >}} shared between frontend, backend, QA, and even external partners.

The benefits are {{< vocab w="compelling" ipa="/kəmˈpelɪŋ/" vn="thuyết phục" t="adj" >}}. Frontend teams can begin building UIs immediately using {{< vocab w="mock servers" ipa="/mɑːk ˈsɜːrvərz/" vn="máy chủ giả lập" t="noun" >}} generated from the spec, eliminating the traditional {{< vocab w="bottleneck" ipa="/ˈbɑːtlnek/" vn="nút thắt cổ chai" t="noun" >}} of waiting for backend APIs to be ready. QA engineers can write automated tests against the contract before implementation begins. And {{< vocab w="stakeholders" ipa="/ˈsteɪkhoʊldərz/" vn="các bên liên quan" t="noun" >}} can review the API design for usability issues early, when changes are cheap.

Stripe, often cited as the gold standard for developer experience, has been an API-first company since its {{< vocab w="inception" ipa="/ɪnˈsepʃən/" vn="sự thành lập" t="noun" >}}. Twilio, Shopify, and Plaid follow similar philosophies. These companies treat their APIs as {{< vocab w="first-class products" ipa="/fɜːrst klæs ˈprɑːdʌkts/" vn="sản phẩm hạng nhất" t="noun" >}}, complete with {{< vocab w="versioning" ipa="/ˈvɜːrʒənɪŋ/" vn="quản lý phiên bản" t="noun" >}}, {{< vocab w="deprecation" ipa="/ˌdeprɪˈkeɪʃən/" vn="ngừng hỗ trợ" t="noun" >}} policies, and comprehensive developer portals.

Tooling has matured significantly. Postman now supports collaborative API design workflows. Stoplight offers visual OpenAPI editors. And platforms like {{< vocab w="API gateways" ipa="/eɪpiːaɪ ˈɡeɪtweɪz/" vn="cổng API" t="noun" >}} from Kong and AWS automatically enforce rate limiting, authentication, and {{< vocab w="schema validation" ipa="/ˈskiːmə ˌvælɪˈdeɪʃən/" vn="xác thực lược đồ" t="noun" >}} based on the published spec.

The transition is not without friction. Legacy teams accustomed to {{< vocab w="code-first" ipa="/koʊd fɜːrst/" vn="ưu tiên viết code trước" t="adj" >}} workflows often resist the upfront investment in specification authoring. Yet organizations that make the shift consistently report faster delivery cycles, fewer integration bugs, and dramatically improved {{< vocab w="developer experience" ipa="/dɪˈveləpər ɪkˈspɪriəns/" vn="trải nghiệm nhà phát triển" t="noun" >}}.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **afterthought** | /ˈæftərθɔːt/ | điều nghĩ đến sau | noun |
| **API-first development** | /ˌeɪpiːaɪ fɜːrst dɪˈveləpmənt/ | phát triển ưu tiên API | noun |
| **validated** | /ˈvælɪdeɪtɪd/ | xác thực, kiểm tra | verb |
| **contract-first design** | /ˈkɑːntrækt fɜːrst dɪˈzaɪn/ | thiết kế ưu tiên hợp đồng | noun |
| **OpenAPI specification** | /ˌoʊpən eɪpiːaɪ ˌspesɪfɪˈkeɪʃən/ | đặc tả OpenAPI | noun |
| **endpoint** | /ˈendpɔɪnt/ | điểm cuối API | noun |
| **payload** | /ˈpeɪloʊd/ | dữ liệu tải | noun |
| **source of truth** | /sɔːrs əv truːθ/ | nguồn sự thật duy nhất | noun |
| **compelling** | /kəmˈpelɪŋ/ | thuyết phục | adj |
| **mock servers** | /mɑːk ˈsɜːrvərz/ | máy chủ giả lập | noun |
| **bottleneck** | /ˈbɑːtlnek/ | nút thắt cổ chai | noun |
| **stakeholders** | /ˈsteɪkhoʊldərz/ | các bên liên quan | noun |
| **inception** | /ɪnˈsepʃən/ | sự thành lập | noun |
| **first-class products** | /fɜːrst klæs ˈprɑːdʌkts/ | sản phẩm hạng nhất | noun |
| **versioning** | /ˈvɜːrʒənɪŋ/ | quản lý phiên bản | noun |
| **deprecation** | /ˌdeprɪˈkeɪʃən/ | ngừng hỗ trợ | noun |
| **API gateways** | /eɪpiːaɪ ˈɡeɪtweɪz/ | cổng API | noun |
| **schema validation** | /ˈskiːmə ˌvælɪˈdeɪʃən/ | xác thực lược đồ | noun |
| **code-first** | /koʊd fɜːrst/ | ưu tiên viết code trước | adj |
| **developer experience** | /dɪˈveləpər ɪkˈspɪriəns/ | trải nghiệm nhà phát triển | noun |

## 🇻🇳 Bản dịch tiếng Việt

Trong nhiều thập kỷ, API chỉ là điều nghĩ đến sau — được gắn thêm vào ứng dụng sau khi logic cốt lõi đã được xây dựng. Thời đại đó đang kết thúc. Ngày càng nhiều tổ chức kỹ thuật đang áp dụng phát triển ưu tiên API, một phương pháp luận trong đó hợp đồng API được thiết kế, tài liệu hóa và xác thực trước khi viết bất kỳ dòng code triển khai nào.

Phương pháp này rút ra nhiều từ nguyên tắc thiết kế ưu tiên hợp đồng. Các team bắt đầu bằng việc soạn thảo đặc tả OpenAPI (trước đây là Swagger), định nghĩa mọi endpoint, payload request, schema response và định dạng lỗi. Đặc tả này trở thành nguồn sự thật duy nhất được chia sẻ giữa frontend, backend, QA, và thậm chí cả đối tác bên ngoài.

Lợi ích rất thuyết phục. Team frontend có thể bắt đầu xây dựng UI ngay lập tức bằng mock server được tạo từ spec, loại bỏ nút thắt cổ chai truyền thống là phải chờ API backend sẵn sàng. Kỹ sư QA có thể viết test tự động dựa trên hợp đồng trước khi triển khai bắt đầu. Và các bên liên quan có thể đánh giá thiết kế API về vấn đề usability sớm, khi thay đổi còn rẻ.

Stripe, thường được trích dẫn là chuẩn vàng về trải nghiệm nhà phát triển, đã là công ty API-first từ khi thành lập. Twilio, Shopify, và Plaid theo triết lý tương tự. Các công ty này coi API là sản phẩm hạng nhất, hoàn chỉnh với quản lý phiên bản, chính sách ngừng hỗ trợ, và cổng thông tin dành cho developer toàn diện.

Công cụ đã trưởng thành đáng kể. Postman giờ hỗ trợ quy trình thiết kế API cộng tác. Stoplight cung cấp trình chỉnh sửa OpenAPI trực quan. Và các nền tảng như cổng API từ Kong và AWS tự động thực thi giới hạn tốc độ, xác thực, và xác thực lược đồ dựa trên spec đã công bố.

Quá trình chuyển đổi không phải không có ma sát. Các team cũ quen với quy trình code-first thường chống lại khoản đầu tư ban đầu vào việc soạn thảo đặc tả. Tuy nhiên, các tổ chức thực hiện chuyển đổi luôn báo cáo chu kỳ phát hành nhanh hơn, ít lỗi tích hợp hơn, và trải nghiệm nhà phát triển được cải thiện đáng kể.

## 📝 Phân tích ngữ pháp

### Câu 1: "For decades, APIs were an afterthought — bolted onto applications once the core logic was built."
- **Cấu trúc:** For + time period, S + V + complement — V-ed + onto + N + once + clause
- **Ngữ pháp:** Em dash giới thiệu past participle phrase bổ sung. "Once" = khi/sau khi. "Bolted onto" — phrasal verb dạng bị động.
- **Ví dụ tương tự:** For years, security was an afterthought — added to applications once the features were complete.

### Câu 2: "This specification becomes the single source of truth shared between frontend, backend, QA, and even external partners."
- **Cấu trúc:** S + V + complement + past participle phrase
- **Ngữ pháp:** "Shared between..." là reduced relative clause (= that is shared between...). Liệt kê song song với "even" nhấn mạnh phạm vi rộng.
- **Ví dụ tương tự:** The database schema becomes the single reference point maintained across development, staging, and production environments.

### Câu 3: "Frontend teams can begin building UIs immediately using mock servers generated from the spec, eliminating the traditional bottleneck."
- **Cấu trúc:** S + can + V + V-ing + N + adv + using + N + V-ed + from + N, V-ing + O
- **Ngữ pháp:** Chuỗi gerund: "begin building" (bắt đầu xây), "using" (bằng cách dùng), "eliminating" (từ đó loại bỏ). Mệnh đề phân từ cuối chỉ kết quả.
- **Ví dụ tương tự:** Developers can start testing features immediately using stubs generated from the contract, reducing the feedback loop significantly.

### Câu 4: "These companies treat their APIs as first-class products, complete with versioning, deprecation policies, and comprehensive developer portals."
- **Cấu trúc:** S + treat + O + as + N, complete with + N1, N2, and N3
- **Ngữ pháp:** "Treat... as" = coi... như. "Complete with" = đầy đủ với, là adjective phrase bổ nghĩa.
- **Ví dụ tương tự:** Modern platforms treat observability as a first-class concern, complete with distributed tracing, metrics dashboards, and alerting pipelines.

### Câu 5: "Yet organizations that make the shift consistently report faster delivery cycles, fewer integration bugs, and dramatically improved developer experience."
- **Cấu trúc:** Yet + S + relative clause + adv + V + O1, O2, and O3
- **Ngữ pháp:** "That make the shift" — mệnh đề quan hệ xác định. Ba object song song với comparative/superlative forms khác nhau.
- **Ví dụ tương tự:** Yet companies that adopt continuous deployment consistently achieve shorter release times, fewer production incidents, and significantly higher team velocity.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What is the key difference between API-first and traditional development approaches?
2. How does an OpenAPI specification benefit cross-team collaboration?
3. Why do legacy teams sometimes resist the API-first approach?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. In traditional development, APIs were often treated as an ___.
2. The API spec serves as the single ___ ___ ___ for all teams.
3. Frontend teams use ___ ___ to start building before the backend is ready.
4. When an API version is no longer supported, the process is called ___.
5. A ___ in the development process slows down the entire team.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. In API-first, the API contract is designed and validated before implementation code is written, whereas traditional approaches build APIs after the core logic.
2. It becomes the single source of truth shared between frontend, backend, QA, and external partners, enabling parallel development.
3. They are accustomed to code-first workflows and resist the upfront investment in specification authoring.

**Vocabulary:**
1. **afterthought** — điều nghĩ đến sau
2. **source of truth** — nguồn sự thật duy nhất
3. **mock servers** — máy chủ giả lập
4. **deprecation** — ngừng hỗ trợ
5. **bottleneck** — nút thắt cổ chai
{{< /spoiler >}}
