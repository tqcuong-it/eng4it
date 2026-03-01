---
title: "Microservices vs Monolith — khi nào nên chuyển đổi?"
date: "2023-06-29"
slug: "luyen-doc-microservices-vs-monolith-kien-truc"
description: "Luyện đọc tiếng Anh IT về cuộc tranh luận kiến trúc Microservices và Monolith. Từ vựng software architecture, cấp độ Intermediate."
categories: ["Reading Practice"]
tags: ["intermediate", "programming"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Intermediate
> ⏱️ **Thời gian đọc:** ~5 phút
> 📰 **Chủ đề:** Software Architecture

## 📰 Bài đọc (English)

The debate between {{< vocab w="microservices" ipa="/ˈmaɪkroʊˌsɜːrvɪsɪz/" vn="vi dịch vụ" t="noun" >}} and {{< vocab w="monolithic" ipa="/ˌmɒnəˈlɪθɪk/" vn="nguyên khối" t="adj" >}} architecture has intensified as companies reassess their {{< vocab w="infrastructure" ipa="/ˈɪnfrəstrʌktʃər/" vn="hạ tầng" t="noun" >}} strategies. While microservices have been praised for their {{< vocab w="scalability" ipa="/ˌskeɪləˈbɪlɪti/" vn="khả năng mở rộng" t="noun" >}}, a growing number of engineering teams are questioning whether the {{< vocab w="complexity" ipa="/kəmˈpleksɪti/" vn="sự phức tạp" t="noun" >}} is always justified.

Amazon's Prime Video team recently revealed that they had {{< vocab w="migrated" ipa="/maɪˈɡreɪtɪd/" vn="di chuyển, chuyển đổi" t="verb" >}} a key service back from microservices to a monolith, reducing costs by 90%. The team explained that the {{< vocab w="overhead" ipa="/ˈoʊvərhed/" vn="chi phí phát sinh" t="noun" >}} of managing dozens of small services, including network {{< vocab w="latency" ipa="/ˈleɪtənsi/" vn="độ trễ" t="noun" >}} and {{< vocab w="deployment" ipa="/dɪˈplɔɪmənt/" vn="triển khai" t="noun" >}} pipelines, had outweighed the benefits.

If every startup were to adopt microservices from day one, many would struggle with {{< vocab w="operational" ipa="/ˌɒpəˈreɪʃənl/" vn="vận hành" t="adj" >}} complexity before achieving product-market fit. Experts recommend that teams should start with a well-structured monolith and only {{< vocab w="decompose" ipa="/ˌdiːkəmˈpoʊz/" vn="phân tách" t="verb" >}} it when specific {{< vocab w="bottlenecks" ipa="/ˈbɒtlneks/" vn="nút thắt, điểm nghẽn" t="noun" >}} are identified.

The decision ultimately depends on team size, traffic patterns, and organizational {{< vocab w="maturity" ipa="/məˈtʃʊrɪti/" vn="sự trưởng thành" t="noun" >}}. Microservices are not inherently superior — they are a {{< vocab w="trade-off" ipa="/ˈtreɪd ɒf/" vn="sự đánh đổi" t="noun" >}} that must be evaluated carefully.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **microservices** | /ˈmaɪkroʊˌsɜːrvɪsɪz/ | vi dịch vụ | noun |
| **monolithic** | /ˌmɒnəˈlɪθɪk/ | nguyên khối | adj |
| **infrastructure** | /ˈɪnfrəstrʌktʃər/ | hạ tầng | noun |
| **scalability** | /ˌskeɪləˈbɪlɪti/ | khả năng mở rộng | noun |
| **complexity** | /kəmˈpleksɪti/ | sự phức tạp | noun |
| **migrated** | /maɪˈɡreɪtɪd/ | di chuyển, chuyển đổi | verb |
| **overhead** | /ˈoʊvərhed/ | chi phí phát sinh | noun |
| **latency** | /ˈleɪtənsi/ | độ trễ | noun |
| **deployment** | /dɪˈplɔɪmənt/ | triển khai | noun |
| **operational** | /ˌɒpəˈreɪʃənl/ | vận hành | adj |
| **decompose** | /ˌdiːkəmˈpoʊz/ | phân tách | verb |
| **bottlenecks** | /ˈbɒtlneks/ | nút thắt, điểm nghẽn | noun |
| **maturity** | /məˈtʃʊrɪti/ | sự trưởng thành | noun |
| **trade-off** | /ˈtreɪd ɒf/ | sự đánh đổi | noun |

## 🇻🇳 Bản dịch tiếng Việt

Cuộc tranh luận giữa kiến trúc microservices và monolith đã trở nên gay gắt hơn khi các công ty đánh giá lại chiến lược hạ tầng của mình. Trong khi microservices được ca ngợi vì khả năng mở rộng, ngày càng nhiều đội ngũ kỹ thuật đặt câu hỏi liệu sự phức tạp có luôn hợp lý hay không.

Đội ngũ Prime Video của Amazon gần đây tiết lộ rằng họ đã chuyển một dịch vụ chủ chốt từ microservices quay lại monolith, giảm chi phí tới 90%. Đội ngũ giải thích rằng chi phí phát sinh của việc quản lý hàng chục dịch vụ nhỏ, bao gồm độ trễ mạng và các pipeline triển khai, đã lớn hơn lợi ích mang lại.

Nếu mọi startup đều áp dụng microservices ngay từ ngày đầu, nhiều công ty sẽ vật lộn với sự phức tạp vận hành trước khi đạt được product-market fit. Các chuyên gia khuyến nghị rằng đội ngũ nên bắt đầu với một monolith có cấu trúc tốt và chỉ phân tách khi các điểm nghẽn cụ thể được xác định.

Quyết định cuối cùng phụ thuộc vào quy mô đội ngũ, mô hình lưu lượng truy cập, và mức độ trưởng thành của tổ chức. Microservices không vốn dĩ ưu việt hơn — chúng là một sự đánh đổi cần được đánh giá cẩn thận.

## 📝 Phân tích ngữ pháp

### Câu 1: "While microservices have been praised for their scalability, a growing number of engineering teams are questioning whether the complexity is always justified."
- **Cấu trúc:** While + S + have been V-ed (passive present perfect), S + are V-ing + whether + S + V
- **Ngữ pháp:** Mệnh đề nhượng bộ "While"; thì hiện tại hoàn thành bị động; mệnh đề danh từ với "whether"
- **Ví dụ tương tự:** While cloud computing has been adopted widely, many engineers are debating whether it is always cost-effective.

### Câu 2: "The team explained that the overhead of managing dozens of small services had outweighed the benefits."
- **Cấu trúc:** S + explained that + S + had + V-ed + O (past perfect in reported speech)
- **Ngữ pháp:** Câu tường thuật (Reported Speech) với thì quá khứ hoàn thành — lùi thì từ quá khứ đơn
- **Ví dụ tương tự:** The manager reported that the migration had taken longer than expected.

### Câu 3: "If every startup were to adopt microservices from day one, many would struggle with operational complexity."
- **Cấu trúc:** If + S + were to + V, S + would + V
- **Ngữ pháp:** Câu điều kiện loại 2 dạng "were to" — nhấn mạnh tính giả định; diễn tả tình huống không thực tế
- **Ví dụ tương tự:** If every developer were to write tests for every line, projects would take twice as long.

### Câu 4: "Microservices are not inherently superior — they are a trade-off that must be evaluated carefully."
- **Cấu trúc:** S + are not + adv + adj — S + are + N + that + must be + V-ed
- **Ngữ pháp:** Mệnh đề quan hệ xác định "that"; bị động với modal "must be evaluated"
- **Ví dụ tương tự:** Agile is not inherently better — it is a methodology that must be adapted to each team.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. Why did Amazon's Prime Video team migrate back to a monolith?
2. What do experts recommend for startups regarding architecture choice?
3. What factors determine whether microservices are appropriate?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. Network ___ can increase significantly when services communicate across different servers.
2. The team decided to ___ the monolith into smaller, independent services.
3. Managing multiple services introduces significant operational ___.
4. The database became a ___ as traffic increased during peak hours.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Because the overhead of managing dozens of small services, including network latency and deployment pipelines, had outweighed the benefits — reducing costs by 90%.
2. Experts recommend starting with a well-structured monolith and only decomposing it when specific bottlenecks are identified.
3. Team size, traffic patterns, and organizational maturity.

**Vocabulary:**
1. **latency** — độ trễ mạng
2. **decompose** — phân tách
3. **overhead** — chi phí phát sinh
4. **bottleneck** — nút thắt, điểm nghẽn
{{< /spoiler >}}
