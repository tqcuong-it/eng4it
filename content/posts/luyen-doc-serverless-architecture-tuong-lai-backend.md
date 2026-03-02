---
title: "Serverless architecture — tương lai của backend"
date: "2023-06-11"
slug: "luyen-doc-serverless-architecture-tuong-lai-backend"
description: "Bài luyện đọc về xu hướng serverless architecture và tác động đến phát triển backend, cấp độ Intermediate."
categories: ["Reading Practice"]
tags: ["intermediate", "cloud", "programming"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Intermediate
> ⏱️ **Thời gian đọc:** ~5 phút
> 📰 **Chủ đề:** Cloud / Programming

## 📰 Bài đọc (English)

{{< vocab w="Serverless" ipa="/ˈsɜːrvərləs/" vn="không máy chủ" t="adj" >}} architecture has rapidly become one of the most discussed trends in modern software development. Despite its name, serverless computing does not {{< vocab w="eliminate" ipa="/ɪˈlɪmɪneɪt/" vn="loại bỏ" t="verb" >}} servers entirely — instead, it {{< vocab w="abstracts" ipa="/æbˈstrækts/" vn="trừu tượng hóa" t="verb" >}} server management away from developers, allowing them to focus {{< vocab w="exclusively" ipa="/ɪkˈskluːsɪvli/" vn="hoàn toàn, duy nhất" t="adv" >}} on writing code.

Platforms like AWS Lambda, Google Cloud Functions, and Azure Functions have {{< vocab w="revolutionized" ipa="/ˌrevəˈluːʃənaɪzd/" vn="cách mạng hóa" t="verb" >}} the way applications are built and {{< vocab w="scaled" ipa="/skeɪld/" vn="mở rộng quy mô" t="verb" >}}. In a serverless environment, code is executed in response to events, and users are only charged for the actual {{< vocab w="compute time" ipa="/kəmˈpjuːt taɪm/" vn="thời gian xử lý" t="noun" >}} consumed. This {{< vocab w="pay-per-use" ipa="/peɪ pɜːr juːs/" vn="trả theo sử dụng" t="adj" >}} model has proven especially attractive to startups and small teams with limited budgets.

However, serverless is not without its {{< vocab w="drawbacks" ipa="/ˈdrɔːbæks/" vn="nhược điểm" t="noun" >}}. {{< vocab w="Cold starts" ipa="/koʊld stɑːrts/" vn="khởi động nguội" t="noun" >}} — the delay that occurs when a function is invoked after a period of {{< vocab w="inactivity" ipa="/ˌɪnækˈtɪvəti/" vn="không hoạt động" t="noun" >}} — remain a significant concern for latency-sensitive applications. Additionally, {{< vocab w="vendor lock-in" ipa="/ˈvendər lɑːk ɪn/" vn="phụ thuộc nhà cung cấp" t="noun" >}} continues to be debated, as migrating between cloud providers can be extremely complex.

Industry analysts {{< vocab w="predict" ipa="/prɪˈdɪkt/" vn="dự đoán" t="verb" >}} that the serverless market will exceed $30 billion by 2026. As {{< vocab w="tooling" ipa="/ˈtuːlɪŋ/" vn="bộ công cụ" t="noun" >}} improves and cold start latencies decrease, serverless architecture is expected to become the default choice for a growing number of backend workloads.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **serverless** | /ˈsɜːrvərləs/ | không máy chủ | adj |
| **eliminate** | /ɪˈlɪmɪneɪt/ | loại bỏ | verb |
| **abstracts** | /æbˈstrækts/ | trừu tượng hóa | verb |
| **exclusively** | /ɪkˈskluːsɪvli/ | hoàn toàn, duy nhất | adv |
| **revolutionized** | /ˌrevəˈluːʃənaɪzd/ | cách mạng hóa | verb |
| **scaled** | /skeɪld/ | mở rộng quy mô | verb |
| **compute time** | /kəmˈpjuːt taɪm/ | thời gian xử lý | noun |
| **pay-per-use** | /peɪ pɜːr juːs/ | trả theo sử dụng | adj |
| **drawbacks** | /ˈdrɔːbæks/ | nhược điểm | noun |
| **cold starts** | /koʊld stɑːrts/ | khởi động nguội | noun |
| **inactivity** | /ˌɪnækˈtɪvəti/ | không hoạt động | noun |
| **vendor lock-in** | /ˈvendər lɑːk ɪn/ | phụ thuộc nhà cung cấp | noun |
| **predict** | /prɪˈdɪkt/ | dự đoán | verb |
| **tooling** | /ˈtuːlɪŋ/ | bộ công cụ | noun |

## 🇻🇳 Bản dịch tiếng Việt

Kiến trúc serverless đã nhanh chóng trở thành một trong những xu hướng được thảo luận nhiều nhất trong phát triển phần mềm hiện đại. Dù mang tên gọi như vậy, serverless computing không loại bỏ hoàn toàn máy chủ — thay vào đó, nó trừu tượng hóa việc quản lý máy chủ khỏi lập trình viên, cho phép họ tập trung hoàn toàn vào việc viết code.

Các nền tảng như AWS Lambda, Google Cloud Functions và Azure Functions đã cách mạng hóa cách ứng dụng được xây dựng và mở rộng quy mô. Trong môi trường serverless, code được thực thi để phản hồi các sự kiện, và người dùng chỉ bị tính phí cho thời gian xử lý thực tế tiêu thụ. Mô hình trả theo sử dụng này đã chứng minh sức hấp dẫn đặc biệt đối với các startup và đội nhóm nhỏ có ngân sách hạn chế.

Tuy nhiên, serverless không phải không có nhược điểm. Khởi động nguội — độ trễ xảy ra khi một hàm được gọi sau một khoảng thời gian không hoạt động — vẫn là mối lo ngại đáng kể đối với các ứng dụng nhạy cảm về độ trễ. Ngoài ra, vấn đề phụ thuộc nhà cung cấp tiếp tục được tranh luận, vì việc di chuyển giữa các nhà cung cấp đám mây có thể cực kỳ phức tạp.

Các nhà phân tích ngành dự đoán rằng thị trường serverless sẽ vượt 30 tỷ đô la vào năm 2026. Khi bộ công cụ được cải thiện và độ trễ khởi động nguội giảm, kiến trúc serverless được kỳ vọng sẽ trở thành lựa chọn mặc định cho ngày càng nhiều khối lượng công việc backend.

## 📝 Phân tích ngữ pháp

### Câu 1: "Despite its name, serverless computing does not eliminate servers entirely — instead, it abstracts server management away from developers, allowing them to focus exclusively on writing code."
- **Cấu trúc:** Despite + N, S + V — instead, S + V, V-ing phrase
- **Ngữ pháp:** "Despite" + danh từ diễn tả sự tương phản. Dấu gạch ngang nối hai ý đối lập. "allowing them to focus" — mệnh đề phân từ hiện tại chỉ kết quả.
- **Ví dụ tương tự:** "Despite its high price, the product continues to sell well, attracting customers who value quality."

### Câu 2: "In a serverless environment, code is executed in response to events, and users are only charged for the actual compute time consumed."
- **Cấu trúc:** Prepositional phrase, S + passive + and + S + passive
- **Ngữ pháp:** Hai mệnh đề bị động song song. "in response to" — cụm giới từ (để phản hồi lại). "consumed" — quá khứ phân từ rút gọn (= that is consumed).
- **Ví dụ tương tự:** "In a microservices setup, requests are routed to specific services, and resources are allocated dynamically."

### Câu 3: "Cold starts — the delay that occurs when a function is invoked after a period of inactivity — remain a significant concern for latency-sensitive applications."
- **Cấu trúc:** S — appositive phrase — V + complement
- **Ngữ pháp:** Cụm đồng vị (appositive) giữa hai dấu gạch ngang giải thích "cold starts". Mệnh đề quan hệ "that occurs when..." lồng nhau. "latency-sensitive" — tính từ ghép.
- **Ví dụ tương tự:** "Memory leaks — errors that happen when allocated memory is not properly released — can crash applications unexpectedly."

### Câu 4: "As tooling improves and cold start latencies decrease, serverless architecture is expected to become the default choice for a growing number of backend workloads."
- **Cấu trúc:** As + clause1 + and + clause2, S + passive (be expected to) + V
- **Ngữ pháp:** "As" mở đầu mệnh đề điều kiện/thời gian. "is expected to become" — bị động với "expect" + to V, diễn tả dự đoán. "a growing number of" — cụm lượng từ tăng dần.
- **Ví dụ tương tự:** "As internet speeds increase and prices drop, cloud gaming is expected to replace traditional consoles."

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What does "serverless" actually mean in terms of server management?
2. What is the main advantage of the pay-per-use model?
3. Name two drawbacks of serverless architecture mentioned in the article.

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The new tool ___ the need for manual configuration.
2. The application experienced ___ due to a function being idle for too long.
3. One major ___ of this approach is the difficulty of switching providers.
4. Analysts ___ that the market will double in size by next year.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Serverless does not eliminate servers — it abstracts server management away from developers so they can focus on writing code.
2. Startups and small teams with limited budgets benefit because they only pay for actual compute time consumed.
3. Cold starts (latency when functions are invoked after inactivity) and vendor lock-in (difficulty migrating between cloud providers).

**Vocabulary:**
1. **eliminates** — loại bỏ
2. **cold starts** — khởi động nguội
3. **drawback** — nhược điểm
4. **predict** — dự đoán
{{< /spoiler >}}
