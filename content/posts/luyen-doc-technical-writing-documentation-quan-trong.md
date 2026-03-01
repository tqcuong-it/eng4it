---
title: "Bài 185: Technical Writing in Tech — Tại sao Documentation quan trọng"
date: 2023-09-10
slug: "luyen-doc-technical-writing-documentation-quan-trong"
description: "Tìm hiểu tầm quan trọng của technical writing và documentation trong ngành công nghệ — kỹ năng bị đánh giá thấp nhưng tạo ra giá trị khổng lồ."
categories: ["Reading Practice"]
tags: ["advanced", "programming"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Advanced
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** Programming / Technical Writing

## 📰 Bài đọc (English)

Ask any developer what they dislike most about their job, and {{< vocab w="documentation" ipa="/ˌdɑːkjumenˈteɪʃən/" vn="tài liệu" t="noun" >}} will likely rank near the top. Yet paradoxically, poor documentation is also one of the most frequently cited sources of {{< vocab w="frustration" ipa="/frʌˈstreɪʃən/" vn="sự bực bội" t="noun" >}} when working with other people's code. This tension reveals a fundamental truth: {{< vocab w="technical writing" ipa="/ˈteknɪkl ˈraɪtɪŋ/" vn="viết kỹ thuật" t="noun" >}} is one of the most undervalued yet {{< vocab w="impactful" ipa="/ɪmˈpæktfəl/" vn="có tác động lớn" t="adj" >}} skills in software engineering.

The cost of poor documentation is {{< vocab w="staggering" ipa="/ˈstæɡərɪŋ/" vn="đáng kinh ngạc" t="adj" >}}. A 2022 survey by Stripe found that developers spend an average of 17.3 hours per week dealing with {{< vocab w="technical debt" ipa="/ˈteknɪkl det/" vn="nợ kỹ thuật" t="noun" >}}, much of which stems from undocumented decisions, unclear {{< vocab w="APIs" ipa="/ˌeɪpiːˈaɪz/" vn="giao diện lập trình" t="noun" >}}, and missing {{< vocab w="onboarding" ipa="/ˈɑːnbɔːrdɪŋ/" vn="hướng dẫn nhập môn" t="noun" >}} materials. For a team of ten engineers, that translates to roughly $1.2 million in lost {{< vocab w="productivity" ipa="/ˌprɑːdʌkˈtɪvəti/" vn="năng suất" t="noun" >}} annually.

Good technical writing follows several key principles. First, it is {{< vocab w="audience-aware" ipa="/ˈɔːdiəns əˈwer/" vn="nhận thức đối tượng" t="adj" >}} — an API reference for external developers requires different depth and tone than an internal {{< vocab w="runbook" ipa="/ˈrʌnbʊk/" vn="sổ tay vận hành" t="noun" >}} for on-call engineers. Second, it follows the principle of {{< vocab w="progressive disclosure" ipa="/prəˈɡresɪv dɪsˈkloʊʒər/" vn="tiết lộ dần dần" t="noun" >}}, presenting essential information first and deeper details on demand.

Modern documentation practices have evolved significantly. {{< vocab w="Docs-as-code" ipa="/dɑːks æz koʊd/" vn="tài liệu như code" t="noun" >}} workflows treat documentation with the same {{< vocab w="rigor" ipa="/ˈrɪɡər/" vn="sự chặt chẽ" t="noun" >}} as source code — version-controlled in Git, reviewed through pull requests, and tested with {{< vocab w="linting" ipa="/ˈlɪntɪŋ/" vn="kiểm tra lỗi tự động" t="noun" >}} tools. Companies like GitLab and Stripe require documentation updates as part of every {{< vocab w="merge request" ipa="/mɜːrdʒ rɪˈkwest/" vn="yêu cầu hợp nhất" t="noun" >}}.

The rise of {{< vocab w="AI-assisted writing" ipa="/eɪaɪ əˈsɪstɪd ˈraɪtɪŋ/" vn="viết có AI hỗ trợ" t="noun" >}} tools like GitHub Copilot and Mintlify is also transforming the field. These tools can generate initial drafts, suggest improvements, and even keep documentation {{< vocab w="synchronized" ipa="/ˈsɪŋkrənaɪzd/" vn="đồng bộ" t="adj" >}} with code changes. However, the {{< vocab w="editorial judgment" ipa="/ˌedɪˈtɔːriəl ˈdʒʌdʒmənt/" vn="khả năng phán đoán biên tập" t="noun" >}} — deciding what to document, for whom, and at what level of detail — remains a distinctly human skill.

Organizations that invest in technical writing {{< vocab w="reap" ipa="/riːp/" vn="gặt hái" t="verb" >}} measurable returns: faster onboarding, fewer support tickets, higher API adoption rates, and reduced {{< vocab w="cognitive load" ipa="/ˈkɑːɡnɪtɪv loʊd/" vn="tải nhận thức" t="noun" >}} on senior engineers who would otherwise answer the same questions repeatedly.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **documentation** | /ˌdɑːkjumenˈteɪʃən/ | tài liệu | noun |
| **frustration** | /frʌˈstreɪʃən/ | sự bực bội | noun |
| **technical writing** | /ˈteknɪkl ˈraɪtɪŋ/ | viết kỹ thuật | noun |
| **impactful** | /ɪmˈpæktfəl/ | có tác động lớn | adj |
| **staggering** | /ˈstæɡərɪŋ/ | đáng kinh ngạc | adj |
| **technical debt** | /ˈteknɪkl det/ | nợ kỹ thuật | noun |
| **onboarding** | /ˈɑːnbɔːrdɪŋ/ | hướng dẫn nhập môn | noun |
| **productivity** | /ˌprɑːdʌkˈtɪvəti/ | năng suất | noun |
| **audience-aware** | /ˈɔːdiəns əˈwer/ | nhận thức đối tượng | adj |
| **runbook** | /ˈrʌnbʊk/ | sổ tay vận hành | noun |
| **progressive disclosure** | /prəˈɡresɪv dɪsˈkloʊʒər/ | tiết lộ dần dần | noun |
| **docs-as-code** | /dɑːks æz koʊd/ | tài liệu như code | noun |
| **rigor** | /ˈrɪɡər/ | sự chặt chẽ | noun |
| **linting** | /ˈlɪntɪŋ/ | kiểm tra lỗi tự động | noun |
| **merge request** | /mɜːrdʒ rɪˈkwest/ | yêu cầu hợp nhất | noun |
| **AI-assisted writing** | /eɪaɪ əˈsɪstɪd ˈraɪtɪŋ/ | viết có AI hỗ trợ | noun |
| **synchronized** | /ˈsɪŋkrənaɪzd/ | đồng bộ | adj |
| **editorial judgment** | /ˌedɪˈtɔːriəl ˈdʒʌdʒmənt/ | khả năng phán đoán biên tập | noun |
| **reap** | /riːp/ | gặt hái | verb |
| **cognitive load** | /ˈkɑːɡnɪtɪv loʊd/ | tải nhận thức | noun |

## 🇻🇳 Bản dịch tiếng Việt

Hỏi bất kỳ developer nào về điều họ ghét nhất trong công việc, và tài liệu hóa sẽ có khả năng nằm gần đầu danh sách. Nhưng nghịch lý thay, tài liệu kém cũng là một trong những nguồn bực bội được nhắc đến nhiều nhất khi làm việc với code của người khác. Sự mâu thuẫn này phơi bày một sự thật cơ bản: viết kỹ thuật là một trong những kỹ năng bị đánh giá thấp nhất nhưng có tác động lớn nhất trong kỹ thuật phần mềm.

Chi phí của tài liệu kém thật đáng kinh ngạc. Một khảo sát năm 2022 của Stripe cho thấy developer trung bình dành 17.3 giờ mỗi tuần xử lý nợ kỹ thuật, phần lớn bắt nguồn từ các quyết định không được ghi lại, API không rõ ràng, và tài liệu hướng dẫn nhập môn bị thiếu. Với một đội 10 kỹ sư, điều đó tương đương khoảng 1.2 triệu đô la năng suất mất đi hàng năm.

Viết kỹ thuật tốt tuân theo một số nguyên tắc chính. Thứ nhất, nó nhận thức đối tượng — tài liệu tham khảo API cho developer bên ngoài đòi hỏi độ sâu và giọng văn khác so với sổ tay vận hành nội bộ cho kỹ sư trực. Thứ hai, nó tuân theo nguyên tắc tiết lộ dần dần, trình bày thông tin thiết yếu trước và chi tiết sâu hơn khi cần.

Các thực hành tài liệu hiện đại đã phát triển đáng kể. Quy trình docs-as-code đối xử với tài liệu cùng sự chặt chẽ như mã nguồn — quản lý phiên bản trong Git, review qua pull request, và kiểm tra bằng công cụ linting. Các công ty như GitLab và Stripe yêu cầu cập nhật tài liệu như một phần của mọi merge request.

Sự phát triển của các công cụ viết có AI hỗ trợ như GitHub Copilot và Mintlify cũng đang biến đổi lĩnh vực này. Các công cụ này có thể tạo bản nháp ban đầu, đề xuất cải tiến, và thậm chí giữ tài liệu đồng bộ với thay đổi code. Tuy nhiên, khả năng phán đoán biên tập — quyết định tài liệu hóa cái gì, cho ai, và ở mức độ chi tiết nào — vẫn là kỹ năng thuần túy của con người.

Các tổ chức đầu tư vào viết kỹ thuật gặt hái lợi ích đo lường được: onboarding nhanh hơn, ít ticket hỗ trợ hơn, tỷ lệ áp dụng API cao hơn, và giảm tải nhận thức cho kỹ sư cấp cao, những người nếu không sẽ phải trả lời cùng câu hỏi liên tục.

## 📝 Phân tích ngữ pháp

### Câu 1: "Ask any developer what they dislike most about their job, and documentation will likely rank near the top."
- **Cấu trúc:** Imperative + wh-clause, and S + will + adv + V
- **Ngữ pháp:** Mệnh lệnh cách (Ask) dùng tu từ, không thực sự ra lệnh mà tạo giả thuyết. "What they dislike" là noun clause làm tân ngữ.
- **Ví dụ tương tự:** Ask any SRE what keeps them up at night, and incident response will inevitably come up.

### Câu 2: "This tension reveals a fundamental truth: technical writing is one of the most undervalued yet impactful skills in software engineering."
- **Cấu trúc:** S + V + O: S + be + one of the most + adj + yet + adj + N
- **Ngữ pháp:** Dấu hai chấm giới thiệu giải thích/mở rộng. "Most undervalued yet impactful" — hai tính từ superlative đối lập nối bằng "yet".
- **Ví dụ tương tự:** The data reveals an uncomfortable truth: testing is one of the most neglected yet critical practices in modern development.

### Câu 3: "Docs-as-code workflows treat documentation with the same rigor as source code — version-controlled in Git, reviewed through pull requests, and tested with linting tools."
- **Cấu trúc:** S + V + O + with the same N as N — V-ed, V-ed, and V-ed (parallel past participles)
- **Ngữ pháp:** "The same... as..." so sánh ngang bằng. Em dash mở ra liệt kê ba past participle phrase song song.
- **Ví dụ tương tự:** Infrastructure-as-code treats server configuration with the same discipline as application code — stored in repositories, reviewed by peers, and deployed through pipelines.

### Câu 4: "However, the editorial judgment — deciding what to document, for whom, and at what level of detail — remains a distinctly human skill."
- **Cấu trúc:** However, S — gerund phrase — V + complement
- **Ngữ pháp:** Appositive phrase giữa em dash giải thích "editorial judgment". Ba wh-phrases song song: what, for whom, at what level.
- **Ví dụ tương tự:** However, the architectural vision — deciding what to build, how to scale, and when to refactor — remains a uniquely senior responsibility.

### Câu 5: "Organizations that invest in technical writing reap measurable returns: faster onboarding, fewer support tickets, higher API adoption rates, and reduced cognitive load."
- **Cấu trúc:** S + relative clause + V + adj + N: comparative list
- **Ngữ pháp:** "That invest in" mệnh đề quan hệ xác định. Dấu hai chấm dẫn vào danh sách kết quả cụ thể với các comparative adjectives song song.
- **Ví dụ tương tự:** Teams that prioritize code review achieve measurable gains: cleaner codebases, fewer production bugs, stronger knowledge sharing, and improved developer confidence.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. How much time do developers spend dealing with technical debt per week, according to the Stripe survey?
2. What is the "docs-as-code" approach?
3. What aspect of documentation remains a distinctly human skill despite AI tools?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The company's poor ___ led to new engineers taking months to become productive.
2. A good API reference follows the principle of ___ ___, showing basics first.
3. Modern teams treat docs with the same ___ as source code.
4. Investing in documentation helps reduce ___ ___ on senior engineers.
5. Companies that prioritize technical writing ___ significant benefits in team efficiency.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Developers spend an average of 17.3 hours per week dealing with technical debt.
2. Docs-as-code treats documentation with the same rigor as source code — version-controlled in Git, reviewed through pull requests, and tested with linting tools.
3. Editorial judgment — deciding what to document, for whom, and at what level of detail — remains a distinctly human skill.

**Vocabulary:**
1. **documentation** — tài liệu
2. **progressive disclosure** — tiết lộ dần dần
3. **rigor** — sự chặt chẽ
4. **cognitive load** — tải nhận thức
5. **reap** — gặt hái
{{< /spoiler >}}
