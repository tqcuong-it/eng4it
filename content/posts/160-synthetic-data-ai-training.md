---
title: "Bài 160: Synthetic Data — Dữ liệu tổng hợp thay thế dữ liệu thật để train AI"
date: 2023-08-16
slug: "luyen-doc-ai-synthetic-data-training"
description: "Luyện đọc tiếng Anh IT về synthetic data — dữ liệu tổng hợp dùng để huấn luyện AI thay thế dữ liệu thật, từ vựng chuyên ngành AI cho dân IT."
categories: ["Reading Practice"]
tags: ["upper-intermediate", "ai"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Upper-Intermediate
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** AI

## 📰 Bài đọc (English)

As artificial intelligence models grow larger and more capable, the demand for high-quality training data has become one of the industry's most pressing {{< vocab w="bottleneck" ipa="/ˈbɑːtlnek/" vn="nút thắt cổ chai" t="noun" >}}. In response, a growing number of AI labs and enterprises are turning to {{< vocab w="synthetic data" ipa="/sɪnˈθetɪk ˈdeɪtə/" vn="dữ liệu tổng hợp" t="noun" >}} — artificially generated information designed to {{< vocab w="mimic" ipa="/ˈmɪmɪk/" vn="mô phỏng" t="verb" >}} the statistical properties of real-world datasets.

The concept is not entirely new, but recent breakthroughs in {{< vocab w="generative" ipa="/ˈdʒenərətɪv/" vn="sinh tạo" t="adj" >}} AI have made synthetic data far more {{< vocab w="viable" ipa="/ˈvaɪəbl/" vn="khả thi" t="adj" >}} at scale. Companies like Mostly AI, Gretel, and Tonic have built platforms that can produce {{< vocab w="realistic" ipa="/ˌriːəˈlɪstɪk/" vn="chân thực" t="adj" >}} tabular, text, and image data while preserving the {{< vocab w="underlying" ipa="/ˌʌndərˈlaɪɪŋ/" vn="nền tảng, cơ bản" t="adj" >}} patterns needed for effective model training.

One of the primary drivers behind this shift is {{< vocab w="privacy compliance" ipa="/ˈpraɪvəsi kəmˈplaɪəns/" vn="tuân thủ quyền riêng tư" t="noun" >}}. Regulations such as GDPR and CCPA {{< vocab w="impose" ipa="/ɪmˈpoʊz/" vn="áp đặt" t="verb" >}} strict limits on how personal data can be collected and used. Synthetic data offers a compelling {{< vocab w="workaround" ipa="/ˈwɜːrkəraʊnd/" vn="giải pháp thay thế" t="noun" >}}: because it is generated rather than collected, it {{< vocab w="sidesteps" ipa="/ˈsaɪdsteps/" vn="tránh, lách" t="verb" >}} many of the legal constraints associated with real user data.

Beyond privacy, synthetic data also addresses the problem of {{< vocab w="data scarcity" ipa="/ˈdeɪtə ˈskersəti/" vn="sự khan hiếm dữ liệu" t="noun" >}}. In specialized domains such as medical imaging or autonomous driving, obtaining sufficient labeled data is both expensive and time-consuming. Synthetic {{< vocab w="augmentation" ipa="/ˌɔːɡmenˈteɪʃən/" vn="sự tăng cường" t="noun" >}} allows researchers to generate thousands of {{< vocab w="annotated" ipa="/ˈænəteɪtɪd/" vn="được chú thích" t="adj" >}} samples in a fraction of the time.

However, the approach is not without {{< vocab w="drawbacks" ipa="/ˈdrɔːbæks/" vn="nhược điểm" t="noun" >}}. Critics warn that models trained {{< vocab w="predominantly" ipa="/prɪˈdɑːmɪnəntli/" vn="chủ yếu" t="adv" >}} on synthetic data may develop subtle {{< vocab w="biases" ipa="/ˈbaɪəsɪz/" vn="sự thiên lệch" t="noun" >}} or fail to capture the full complexity of real-world scenarios. A phenomenon known as "model collapse" can occur when AI systems are recursively trained on their own outputs, leading to {{< vocab w="degraded" ipa="/dɪˈɡreɪdɪd/" vn="suy giảm chất lượng" t="adj" >}} performance over successive generations.

Despite these challenges, Gartner estimates that by 2030, synthetic data will {{< vocab w="outpace" ipa="/ˌaʊtˈpeɪs/" vn="vượt qua" t="verb" >}} real data in AI training pipelines. The key, experts say, lies in combining both data types — using synthetic data to fill gaps while anchoring models with carefully curated real-world datasets.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **bottleneck** | /ˈbɑːtlnek/ | nút thắt cổ chai | noun |
| **synthetic data** | /sɪnˈθetɪk ˈdeɪtə/ | dữ liệu tổng hợp | noun |
| **mimic** | /ˈmɪmɪk/ | mô phỏng | verb |
| **generative** | /ˈdʒenərətɪv/ | sinh tạo | adj |
| **viable** | /ˈvaɪəbl/ | khả thi | adj |
| **realistic** | /ˌriːəˈlɪstɪk/ | chân thực | adj |
| **underlying** | /ˌʌndərˈlaɪɪŋ/ | nền tảng, cơ bản | adj |
| **privacy compliance** | /ˈpraɪvəsi kəmˈplaɪəns/ | tuân thủ quyền riêng tư | noun |
| **impose** | /ɪmˈpoʊz/ | áp đặt | verb |
| **workaround** | /ˈwɜːrkəraʊnd/ | giải pháp thay thế | noun |
| **sidesteps** | /ˈsaɪdsteps/ | tránh, lách | verb |
| **data scarcity** | /ˈdeɪtə ˈskersəti/ | sự khan hiếm dữ liệu | noun |
| **augmentation** | /ˌɔːɡmenˈteɪʃən/ | sự tăng cường | noun |
| **annotated** | /ˈænəteɪtɪd/ | được chú thích | adj |
| **drawbacks** | /ˈdrɔːbæks/ | nhược điểm | noun |
| **predominantly** | /prɪˈdɑːmɪnəntli/ | chủ yếu | adv |
| **biases** | /ˈbaɪəsɪz/ | sự thiên lệch | noun |
| **degraded** | /dɪˈɡreɪdɪd/ | suy giảm chất lượng | adj |
| **outpace** | /ˌaʊtˈpeɪs/ | vượt qua | verb |

## 🇻🇳 Bản dịch tiếng Việt

Khi các mô hình trí tuệ nhân tạo ngày càng lớn và mạnh hơn, nhu cầu về dữ liệu huấn luyện chất lượng cao đã trở thành một trong những nút thắt cổ chai cấp bách nhất của ngành. Để đáp ứng, ngày càng nhiều phòng nghiên cứu AI và doanh nghiệp đang chuyển sang dữ liệu tổng hợp — thông tin được tạo ra nhân tạo, được thiết kế để mô phỏng các đặc tính thống kê của tập dữ liệu thực tế.

Khái niệm này không hoàn toàn mới, nhưng những đột phá gần đây trong AI sinh tạo đã khiến dữ liệu tổng hợp trở nên khả thi hơn nhiều ở quy mô lớn. Các công ty như Mostly AI, Gretel và Tonic đã xây dựng nền tảng có thể tạo ra dữ liệu bảng, văn bản và hình ảnh chân thực, đồng thời bảo toàn các mẫu hình nền tảng cần thiết cho việc huấn luyện mô hình hiệu quả.

Một trong những động lực chính đằng sau xu hướng này là tuân thủ quyền riêng tư. Các quy định như GDPR và CCPA áp đặt giới hạn nghiêm ngặt về cách thu thập và sử dụng dữ liệu cá nhân. Dữ liệu tổng hợp mang đến một giải pháp thay thế hấp dẫn: vì được tạo ra chứ không phải thu thập, nó tránh được nhiều ràng buộc pháp lý liên quan đến dữ liệu người dùng thật.

Ngoài quyền riêng tư, dữ liệu tổng hợp còn giải quyết vấn đề khan hiếm dữ liệu. Trong các lĩnh vực chuyên biệt như hình ảnh y tế hay lái xe tự hành, việc thu thập đủ dữ liệu đã gắn nhãn vừa tốn kém vừa mất thời gian. Tăng cường bằng dữ liệu tổng hợp cho phép nhà nghiên cứu tạo ra hàng nghìn mẫu đã chú thích chỉ trong một phần nhỏ thời gian.

Tuy nhiên, phương pháp này không phải không có nhược điểm. Các nhà phê bình cảnh báo rằng mô hình được huấn luyện chủ yếu trên dữ liệu tổng hợp có thể phát triển những thiên lệch tinh vi hoặc không nắm bắt được toàn bộ sự phức tạp của thực tế. Một hiện tượng gọi là "model collapse" (sụp đổ mô hình) có thể xảy ra khi hệ thống AI được huấn luyện đệ quy trên chính đầu ra của mình, dẫn đến hiệu suất suy giảm qua các thế hệ.

Bất chấp những thách thức này, Gartner ước tính rằng đến năm 2030, dữ liệu tổng hợp sẽ vượt qua dữ liệu thật trong các pipeline huấn luyện AI. Chìa khóa, theo các chuyên gia, nằm ở việc kết hợp cả hai loại dữ liệu — dùng dữ liệu tổng hợp để lấp đầy khoảng trống, đồng thời neo giữ mô hình bằng các tập dữ liệu thực tế được tuyển chọn kỹ lưỡng.

## 📝 Phân tích ngữ pháp

### Câu 1: "As artificial intelligence models grow larger and more capable, the demand for high-quality training data has become one of the industry's most pressing bottlenecks."

- **Cấu trúc:** As + S + V (simple present), S + has become + O (present perfect)
- **Ngữ pháp:** "As" mở đầu mệnh đề chỉ sự đồng thời/nguyên nhân; present perfect "has become" diễn tả kết quả tích lũy đến hiện tại
- **Ví dụ tương tự:** As cloud adoption accelerates, security concerns have become a top priority for enterprises.

### Câu 2: "Synthetic data offers a compelling workaround: because it is generated rather than collected, it sidesteps many of the legal constraints associated with real user data."

- **Cấu trúc:** S + V + O: because-clause, S + V + O + past participle phrase
- **Ngữ pháp:** Dấu hai chấm (:) dùng để giải thích/mở rộng ý; "rather than" so sánh hai hành động đối lập; "associated with" — past participle làm hậu bổ ngữ cho "constraints"
- **Ví dụ tương tự:** The API provides a clean abstraction: because it handles authentication internally, developers avoid many of the complexities associated with OAuth flows.

### Câu 3: "In specialized domains such as medical imaging or autonomous driving, obtaining sufficient labeled data is both expensive and time-consuming."

- **Cấu trúc:** Prepositional phrase, gerund phrase (subject) + is + both...and... (complement)
- **Ngữ pháp:** Gerund phrase "obtaining sufficient labeled data" làm chủ ngữ; "both...and..." — correlative conjunction liên kết hai tính từ
- **Ví dụ tương tự:** In enterprise environments, migrating legacy systems is both technically challenging and financially risky.

### Câu 4: "Critics warn that models trained predominantly on synthetic data may develop subtle biases or fail to capture the full complexity of real-world scenarios."

- **Cấu trúc:** S + V + that-clause [S + past participle phrase + may + V₁ or V₂ + O]
- **Ngữ pháp:** "trained predominantly on synthetic data" — reduced relative clause (= which are trained...); "may develop...or fail" — modal + hai động từ song song
- **Ví dụ tương tự:** Researchers caution that algorithms optimized purely for engagement may amplify misinformation or erode user trust.

### Câu 5: "A phenomenon known as 'model collapse' can occur when AI systems are recursively trained on their own outputs, leading to degraded performance over successive generations."

- **Cấu trúc:** S + past participle phrase + can + V + when-clause, present participle phrase (result)
- **Ngữ pháp:** "known as" — reduced relative clause bổ nghĩa cho "phenomenon"; "leading to" — present participle diễn tả kết quả (result participle clause)
- **Ví dụ tương tự:** A bug known as a "race condition" can emerge when multiple threads access shared memory simultaneously, leading to unpredictable behavior.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What are the two main reasons companies are turning to synthetic data?
2. What is "model collapse" and how does it happen?
3. According to Gartner, what is the projected future of synthetic data in AI training?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The shortage of labeled images has become a major ___ for the research team.
2. GDPR ___ strict rules on how companies handle personal information.
3. The generated samples closely ___ the distribution of the original dataset.
4. Training on AI-generated outputs can lead to ___ model quality over time.
5. This privacy-first approach provides an effective ___ for data collection challenges.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Privacy compliance (regulations like GDPR/CCPA restrict real data usage) and data scarcity (in specialized domains, labeled data is expensive and time-consuming to obtain).
2. Model collapse occurs when AI systems are recursively trained on their own synthetic outputs, causing performance to degrade over successive generations.
3. Gartner estimates that by 2030, synthetic data will outpace real data in AI training pipelines, though experts recommend combining both types.

**Vocabulary:**
1. **bottleneck** — nút thắt cổ chai
2. **imposes** — áp đặt
3. **mimic** — mô phỏng
4. **degraded** — suy giảm chất lượng
5. **workaround** — giải pháp thay thế
{{< /spoiler >}}
