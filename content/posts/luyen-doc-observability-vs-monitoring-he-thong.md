---
title: "Observability vs Monitoring — sự khác biệt quan trọng"
date: "2023-07-15"
slug: "luyen-doc-observability-vs-monitoring-he-thong"
description: "Luyện đọc tiếng Anh IT qua bài so sánh observability và monitoring trong quản lý hệ thống. Từ vựng DevOps, cấp độ Intermediate."
categories: ["Reading Practice"]
tags: ["intermediate", "cloud", "programming"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Intermediate
> ⏱️ **Thời gian đọc:** ~5 phút
> 📰 **Chủ đề:** DevOps / System Engineering

## 📰 Bài đọc (English)

As modern software systems become increasingly {{< vocab w="distributed" ipa="/dɪˈstrɪbjuːtɪd/" vn="phân tán" t="adj" >}}, the distinction between {{< vocab w="monitoring" ipa="/ˈmɑːnɪtərɪŋ/" vn="giám sát" t="noun" >}} and {{< vocab w="observability" ipa="/əbˌzɜːrvəˈbɪləti/" vn="khả năng quan sát" t="noun" >}} has become a critical topic among DevOps engineers. While both concepts aim to ensure system {{< vocab w="reliability" ipa="/rɪˌlaɪəˈbɪləti/" vn="độ tin cậy" t="noun" >}}, they differ fundamentally in approach and scope.

Monitoring has traditionally been defined as the practice of collecting {{< vocab w="predefined" ipa="/ˌpriːdɪˈfaɪnd/" vn="được định nghĩa trước" t="adj" >}} {{< vocab w="metrics" ipa="/ˈmetrɪks/" vn="chỉ số" t="noun" >}} and setting {{< vocab w="alerts" ipa="/əˈlɜːrts/" vn="cảnh báo" t="noun" >}} when those metrics exceed certain {{< vocab w="thresholds" ipa="/ˈθreʃhoʊldz/" vn="ngưỡng" t="noun" >}}. It was designed to answer known questions: Is the server up? Is CPU usage too high?

Observability, on the other hand, was described by engineers at {{< vocab w="prominent" ipa="/ˈprɑːmɪnənt/" vn="nổi bật" t="adj" >}} companies like Honeycomb and Datadog as the ability to understand a system's internal state by examining its {{< vocab w="outputs" ipa="/ˈaʊtpʊts/" vn="đầu ra" t="noun" >}} — specifically {{< vocab w="logs" ipa="/lɔːɡz/" vn="nhật ký" t="noun" >}}, metrics, and {{< vocab w="traces" ipa="/treɪsɪz/" vn="dấu vết, trace" t="noun" >}}. These three {{< vocab w="pillars" ipa="/ˈpɪlərz/" vn="trụ cột" t="noun" >}} enable teams to investigate unknown problems they had never anticipated.

A staff engineer at Netflix explained that if their team had only relied on traditional monitoring, they would have missed numerous {{< vocab w="subtle" ipa="/ˈsʌtəl/" vn="tinh vi, khó nhận thấy" t="adj" >}} performance issues that observability tools helped {{< vocab w="uncover" ipa="/ʌnˈkʌvər/" vn="phát hiện, khám phá" t="verb" >}}. The consensus among experts was that monitoring remained necessary but insufficient for managing complex {{< vocab w="microservices" ipa="/ˈmaɪkroʊˌsɜːrvɪsɪz/" vn="vi dịch vụ" t="noun" >}} architectures.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **distributed** | /dɪˈstrɪbjuːtɪd/ | phân tán | adj |
| **monitoring** | /ˈmɑːnɪtərɪŋ/ | giám sát | noun |
| **observability** | /əbˌzɜːrvəˈbɪləti/ | khả năng quan sát | noun |
| **reliability** | /rɪˌlaɪəˈbɪləti/ | độ tin cậy | noun |
| **predefined** | /ˌpriːdɪˈfaɪnd/ | được định nghĩa trước | adj |
| **metrics** | /ˈmetrɪks/ | chỉ số | noun |
| **alerts** | /əˈlɜːrts/ | cảnh báo | noun |
| **thresholds** | /ˈθreʃhoʊldz/ | ngưỡng | noun |
| **prominent** | /ˈprɑːmɪnənt/ | nổi bật | adj |
| **logs** | /lɔːɡz/ | nhật ký | noun |
| **traces** | /treɪsɪz/ | dấu vết, trace | noun |
| **pillars** | /ˈpɪlərz/ | trụ cột | noun |
| **subtle** | /ˈsʌtəl/ | tinh vi, khó nhận thấy | adj |
| **microservices** | /ˈmaɪkroʊˌsɜːrvɪsɪz/ | vi dịch vụ | noun |

## 🇻🇳 Bản dịch tiếng Việt

Khi các hệ thống phần mềm hiện đại ngày càng trở nên phân tán, sự khác biệt giữa giám sát (monitoring) và khả năng quan sát (observability) đã trở thành chủ đề quan trọng trong giới kỹ sư DevOps. Mặc dù cả hai khái niệm đều nhằm đảm bảo độ tin cậy của hệ thống, chúng khác nhau cơ bản về cách tiếp cận và phạm vi.

Monitoring truyền thống được định nghĩa là việc thu thập các chỉ số được định nghĩa trước và thiết lập cảnh báo khi các chỉ số đó vượt quá ngưỡng nhất định. Nó được thiết kế để trả lời những câu hỏi đã biết: Máy chủ có hoạt động không? CPU có quá tải không?

Mặt khác, observability được các kỹ sư tại các công ty nổi bật như Honeycomb và Datadog mô tả là khả năng hiểu trạng thái nội bộ của hệ thống bằng cách kiểm tra đầu ra — cụ thể là nhật ký, chỉ số và dấu vết (traces). Ba trụ cột này cho phép các đội ngũ điều tra các vấn đề chưa biết mà họ chưa bao giờ dự đoán trước.

Một kỹ sư cấp cao tại Netflix giải thích rằng nếu đội ngũ của họ chỉ dựa vào giám sát truyền thống, họ sẽ bỏ lỡ nhiều vấn đề hiệu suất tinh vi mà các công cụ observability giúp phát hiện. Sự đồng thuận giữa các chuyên gia là monitoring vẫn cần thiết nhưng không đủ để quản lý các kiến trúc microservices phức tạp.

## 📝 Phân tích ngữ pháp

### Câu 1: "As modern software systems become increasingly distributed, the distinction between monitoring and observability has become a critical topic among DevOps engineers."
- **Cấu trúc:** As + S + V (present), S + has become + O
- **Ngữ pháp:** Mệnh đề trạng ngữ chỉ thời gian với "As" (khi, trong khi); Present Perfect "has become" chỉ sự thay đổi kéo dài đến hiện tại
- **Ví dụ tương tự:** As cloud adoption grows, the demand for skilled DevOps engineers has increased significantly.

### Câu 2: "Observability was described by engineers at prominent companies as the ability to understand a system's internal state by examining its outputs."
- **Cấu trúc:** S + was described + by + agent + as + noun phrase + by + V-ing
- **Ngữ pháp:** Passive voice với "describe... as" — định nghĩa khái niệm; "by examining" chỉ phương thức
- **Ví dụ tương tự:** Machine learning was described by researchers as the ability to learn from data without being explicitly programmed.

### Câu 3: "A staff engineer at Netflix explained that if their team had only relied on traditional monitoring, they would have missed numerous subtle performance issues."
- **Cấu trúc:** S + explained + that + if S + had + V(pp), S + would have + V(pp)
- **Ngữ pháp:** Conditional Type 3 trong reported speech — diễn tả tình huống giả định trong quá khứ không xảy ra; "would have missed" là hậu quả trái thực tế
- **Ví dụ tương tự:** The architect explained that if they had only used monolithic architecture, they would have encountered serious scaling problems.

### Câu 4: "The consensus among experts was that monitoring remained necessary but insufficient for managing complex microservices architectures."
- **Cấu trúc:** S + was + that + S + V(past) + adj + but + adj + for + V-ing
- **Ngữ pháp:** Noun clause sau "was that"; cặp tính từ đối lập "necessary but insufficient" tạo sự nhượng bộ
- **Ví dụ tương tự:** The conclusion was that unit testing remained valuable but inadequate for ensuring overall system quality.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What is the fundamental difference between monitoring and observability?
2. What are the three pillars of observability?
3. Why did the Netflix engineer say observability was important for their team?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The team set up ___ to notify them when CPU usage exceeded the defined ___.
2. Engineers analyzed ___, ___, and ___ to debug the production incident.
3. Traditional ___ answers known questions, while ___ helps investigate unknown problems.
4. The bug was too ___ to be caught by standard automated tests.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Monitoring collects predefined metrics and alerts on known issues, while observability enables understanding internal system state and investigating unknown problems.
2. Logs, metrics, and traces.
3. Because observability tools helped uncover numerous subtle performance issues that traditional monitoring would have missed.

**Vocabulary:**
1. **alerts** / **thresholds** — cảnh báo / ngưỡng
2. **logs** / **metrics** / **traces** — nhật ký / chỉ số / dấu vết
3. **monitoring** / **observability** — giám sát / khả năng quan sát
4. **subtle** — tinh vi, khó nhận thấy
{{< /spoiler >}}
