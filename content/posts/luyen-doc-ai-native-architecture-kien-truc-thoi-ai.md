---
title: "Tái tư duy kiến trúc phần mềm cho kỷ nguyên AI"
date: "2023-09-19"
summary: "Luyện đọc tiếng Anh IT: Tái tư duy kiến trúc phần mềm cho kỷ nguyên AI — kèm từ vựng, phát âm IPA và bài tập."
slug: "luyen-doc-ai-native-architecture-kien-truc-thoi-ai"
description: "Luyện đọc tiếng Anh IT qua bài phân tích kiến trúc phần mềm AI-native. Từ vựng software architecture, cấp độ Master, dành cho developer Việt Nam muốn nâng ca..."
categories: ["Reading Practice"]
tags: ["master", "ai", "backend"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Master
> ⏱️ **Thời gian đọc:** ~12 phút
> 📰 **Chủ đề:** Software Architecture / AI

## 📰 Bài đọc (English)

For the better part of two decades, the software industry has organized itself around a set of {{< vocab w="architectural" ipa="/ˌɑːr.kɪˈtek.tʃər.əl/" vn="thuộc kiến trúc" t="adj" >}} principles — microservices, RESTful APIs, event-driven messaging — that emerged from the era of web-scale computing. These patterns served the industry {{< vocab w="admirably" ipa="/ˈæd.mɪr.ə.bli/" vn="đáng ngưỡng mộ, xuất sắc" t="adv" >}}, enabling companies to build systems of extraordinary scale and resilience. But the rise of AI, and large language models in particular, is forcing a fundamental {{< vocab w="reckoning" ipa="/ˈrek.ən.ɪŋ/" vn="sự đánh giá lại, thanh toán" t="noun" >}} with assumptions that architects have long taken for granted.

The most {{< vocab w="disruptive" ipa="/dɪsˈrʌp.tɪv/" vn="mang tính đột phá, phá vỡ" t="adj" >}} shift concerns the nature of software interfaces themselves. Traditional systems communicate through {{< vocab w="deterministic" ipa="/dɪˌtɜː.mɪˈnɪs.tɪk/" vn="xác định, cho kết quả cố định" t="adj" >}} protocols: a function receives defined inputs and produces predictable outputs. AI components, by contrast, are fundamentally {{< vocab w="probabilistic" ipa="/ˌprɒb.ə.bɪˈlɪs.tɪk/" vn="xác suất, mang tính ngẫu nhiên" t="adj" >}} — the same input may yield subtly different outputs on successive invocations. It is this {{< vocab w="non-determinism" ipa="/ˌnɒn.dɪˈtɜː.mɪ.nɪz.əm/" vn="tính không xác định" t="noun" >}} that renders conventional testing, monitoring, and debugging {{< vocab w="paradigms" ipa="/ˈpær.ə.daɪmz/" vn="mô hình, khuôn mẫu" t="noun" >}} inadequate for AI-native systems.

Consider the {{< vocab w="implications" ipa="/ˌɪm.plɪˈkeɪ.ʃənz/" vn="hàm ý, tác động" t="noun" >}} for error handling alone. In a traditional microservice, an unexpected response triggers a well-defined retry or fallback mechanism. When an LLM produces a {{< vocab w="hallucination" ipa="/həˌluː.sɪˈneɪ.ʃən/" vn="ảo giác (AI tạo thông tin sai)" t="noun" >}} — a confidently stated falsehood — the system may have no reliable means of detecting the error, let alone recovering from it. Were engineers to apply conventional {{< vocab w="idempotency" ipa="/ˌaɪ.dəmˈpoʊ.tən.si/" vn="tính lũy đẳng (gọi nhiều lần cho cùng kết quả)" t="noun" >}} guarantees to LLM calls, they would find the concept fundamentally inapplicable.

This has given rise to an entirely new category of architectural patterns. {{< vocab w="Retrieval-augmented generation" ipa="/rɪˈtriː.vəl ˌɔːɡ.men.tɪd ˌdʒen.əˈreɪ.ʃən/" vn="sinh văn bản tăng cường bởi truy xuất (RAG)" t="noun" >}}, or RAG, has emerged as a {{< vocab w="cornerstone" ipa="/ˈkɔː.nə.stoʊn/" vn="nền tảng, trụ cột" t="noun" >}} of AI-native architecture, combining the generative capabilities of LLMs with grounded, {{< vocab w="verifiable" ipa="/ˈver.ɪ.faɪ.ə.bəl/" vn="có thể xác minh" t="adj" >}} data sources. Similarly, agentic frameworks — in which AI models {{< vocab w="orchestrate" ipa="/ˈɔːr.kɪ.streɪt/" vn="điều phối, phối hợp" t="verb" >}} multi-step workflows, invoking tools and making decisions autonomously — represent a {{< vocab w="paradigm" ipa="/ˈpær.ə.daɪm/" vn="mô hình" t="noun" >}} shift as significant as the transition from {{< vocab w="monolithic" ipa="/ˌmɒn.əˈlɪθ.ɪk/" vn="nguyên khối, monolithic" t="adj" >}} applications to microservices.

Had the industry anticipated this shift even five years ago, the transition might have been more {{< vocab w="graceful" ipa="/ˈɡreɪs.fəl/" vn="duyên dáng, mượt mà" t="adj" >}}. Instead, organizations find themselves {{< vocab w="retrofitting" ipa="/ˈret.roʊˌfɪt.ɪŋ/" vn="trang bị thêm, cải tạo" t="verb" >}} AI capabilities onto systems designed under fundamentally different assumptions. The result is a generation of "AI-{{< vocab w="bolted-on" ipa="/ˌboʊl.tɪd ˈɒn/" vn="gắn thêm vào (không phải thiết kế gốc)" t="adj" >}}" applications that are brittle, difficult to maintain, and prone to failure modes that their architects never {{< vocab w="envisioned" ipa="/ɪnˈvɪʒ.ənd/" vn="hình dung, dự đoán" t="verb" >}}.

The {{< vocab w="observability" ipa="/əbˌzɜː.vəˈbɪl.ɪ.ti/" vn="khả năng quan sát (giám sát hệ thống)" t="noun" >}} challenge is particularly acute. Traditional application performance monitoring tracks latency, error rates, and throughput — metrics that, while necessary, are wholly insufficient for AI systems. What is needed is a new generation of tools capable of evaluating {{< vocab w="semantic" ipa="/sɪˈmæn.tɪk/" vn="ngữ nghĩa" t="adj" >}} correctness: did the model's output actually answer the user's question accurately? Companies like LangSmith and Weights & Biases have begun building these tools, but the discipline of AI observability remains in its {{< vocab w="infancy" ipa="/ˈɪn.fən.si/" vn="giai đoạn sơ khai" t="noun" >}}.

Not only must architects rethink how systems are built, but they must also {{< vocab w="reconceptualize" ipa="/ˌriː.kənˈsep.tʃu.ə.laɪz/" vn="tái hình dung, xây dựng lại khái niệm" t="verb" >}} what "correct behavior" means. In deterministic systems, correctness is binary — an output is either right or wrong. In AI-native systems, correctness exists on a {{< vocab w="spectrum" ipa="/ˈspek.trəm/" vn="phổ, dải" t="noun" >}}, mediated by confidence scores, context windows, and the inherent {{< vocab w="ambiguity" ipa="/æmˈbɪɡ.ju.ɪ.ti/" vn="sự mơ hồ, không rõ ràng" t="noun" >}} of natural language. Architects who fail to internalize this shift will find themselves building systems that are technically functional yet fundamentally unfit for purpose.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **architectural** | /ˌɑːr.kɪˈtek.tʃər.əl/ | thuộc kiến trúc | adj |
| **deterministic** | /dɪˌtɜː.mɪˈnɪs.tɪk/ | xác định, kết quả cố định | adj |
| **probabilistic** | /ˌprɒb.ə.bɪˈlɪs.tɪk/ | xác suất, ngẫu nhiên | adj |
| **non-determinism** | /ˌnɒn.dɪˈtɜː.mɪ.nɪz.əm/ | tính không xác định | noun |
| **paradigms** | /ˈpær.ə.daɪmz/ | mô hình, khuôn mẫu | noun |
| **hallucination** | /həˌluː.sɪˈneɪ.ʃən/ | ảo giác AI | noun |
| **idempotency** | /ˌaɪ.dəmˈpoʊ.tən.si/ | tính lũy đẳng | noun |
| **retrieval-augmented generation** | /rɪˈtriː.vəl ˌɔːɡ.men.tɪd ˌdʒen.əˈreɪ.ʃən/ | RAG | noun |
| **cornerstone** | /ˈkɔː.nə.stoʊn/ | nền tảng, trụ cột | noun |
| **orchestrate** | /ˈɔːr.kɪ.streɪt/ | điều phối | verb |
| **monolithic** | /ˌmɒn.əˈlɪθ.ɪk/ | nguyên khối | adj |
| **retrofitting** | /ˈret.roʊˌfɪt.ɪŋ/ | trang bị thêm, cải tạo | verb |
| **bolted-on** | /ˌboʊl.tɪd ˈɒn/ | gắn thêm vào | adj |
| **envisioned** | /ɪnˈvɪʒ.ənd/ | hình dung, dự đoán | verb |
| **observability** | /əbˌzɜː.vəˈbɪl.ɪ.ti/ | khả năng quan sát | noun |
| **semantic** | /sɪˈmæn.tɪk/ | ngữ nghĩa | adj |
| **infancy** | /ˈɪn.fən.si/ | giai đoạn sơ khai | noun |
| **reconceptualize** | /ˌriː.kənˈsep.tʃu.ə.laɪz/ | tái hình dung | verb |
| **spectrum** | /ˈspek.trəm/ | phổ, dải | noun |
| **ambiguity** | /æmˈbɪɡ.ju.ɪ.ti/ | sự mơ hồ | noun |
| **disruptive** | /dɪsˈrʌp.tɪv/ | mang tính đột phá | adj |

## 🇻🇳 Bản dịch tiếng Việt

Trong phần lớn hai thập kỷ qua, ngành phần mềm đã tổ chức xung quanh một tập hợp các nguyên tắc kiến trúc — microservices, RESTful API, messaging hướng sự kiện — nổi lên từ kỷ nguyên tính toán quy mô web. Những mẫu thiết kế này đã phục vụ ngành một cách xuất sắc, cho phép các công ty xây dựng hệ thống có quy mô và khả năng phục hồi phi thường. Nhưng sự trỗi dậy của AI, đặc biệt là các mô hình ngôn ngữ lớn, đang buộc phải đánh giá lại căn bản những giả định mà các kiến trúc sư lâu nay xem là hiển nhiên.

Sự thay đổi mang tính đột phá nhất liên quan đến bản chất của chính các giao diện phần mềm. Hệ thống truyền thống giao tiếp qua các giao thức xác định: hàm nhận đầu vào đã định nghĩa và tạo ra đầu ra có thể dự đoán. Ngược lại, các thành phần AI về cơ bản mang tính xác suất — cùng một đầu vào có thể cho ra kết quả khác biệt tinh tế qua các lần gọi liên tiếp. Chính tính không xác định này khiến các mô hình kiểm thử, giám sát và gỡ lỗi thông thường trở nên bất cập cho hệ thống AI-native.

Hãy xem xét tác động chỉ riêng với xử lý lỗi. Trong microservice truyền thống, phản hồi bất ngờ kích hoạt cơ chế thử lại hoặc dự phòng được định nghĩa rõ ràng. Khi LLM tạo ra ảo giác — một khẳng định sai nhưng đầy tự tin — hệ thống có thể không có phương tiện đáng tin cậy nào để phát hiện lỗi, chứ chưa nói đến phục hồi. Nếu kỹ sư áp dụng đảm bảo lũy đẳng thông thường cho các lời gọi LLM, họ sẽ thấy khái niệm này về cơ bản không áp dụng được.

Điều này đã sinh ra một loại mẫu kiến trúc hoàn toàn mới. Sinh văn bản tăng cường truy xuất (RAG) đã nổi lên như trụ cột của kiến trúc AI-native, kết hợp khả năng sinh của LLM với các nguồn dữ liệu có căn cứ, có thể xác minh. Tương tự, các framework agentic — trong đó mô hình AI điều phối quy trình nhiều bước, gọi công cụ và ra quyết định tự chủ — đại diện cho sự chuyển đổi mô hình quan trọng ngang bằng bước chuyển từ ứng dụng nguyên khối sang microservices.

Nếu ngành dự đoán được sự chuyển đổi này dù chỉ năm năm trước, quá trình chuyển tiếp có lẽ đã mượt mà hơn. Thay vào đó, các tổ chức thấy mình đang cải tạo thêm khả năng AI vào các hệ thống được thiết kế dưới những giả định hoàn toàn khác. Kết quả là một thế hệ ứng dụng "gắn-thêm-AI" giòn, khó bảo trì, và dễ mắc các dạng lỗi mà kiến trúc sư chưa bao giờ hình dung.

Thách thức về khả năng quan sát đặc biệt nghiêm trọng. Giám sát hiệu năng ứng dụng truyền thống theo dõi độ trễ, tỷ lệ lỗi và thông lượng — các chỉ số tuy cần thiết nhưng hoàn toàn không đủ cho hệ thống AI. Cần một thế hệ công cụ mới có khả năng đánh giá tính đúng đắn về ngữ nghĩa: đầu ra của mô hình có thực sự trả lời chính xác câu hỏi người dùng không? Các công ty như LangSmith và Weights & Biases đã bắt đầu xây dựng những công cụ này, nhưng lĩnh vực quan sát AI vẫn còn trong giai đoạn sơ khai.

Không chỉ phải tư duy lại cách xây dựng hệ thống, kiến trúc sư còn phải tái hình dung ý nghĩa của "hành vi đúng." Trong hệ thống xác định, tính đúng đắn là nhị phân — đầu ra hoặc đúng hoặc sai. Trong hệ thống AI-native, tính đúng đắn tồn tại trên một phổ, được điều chỉnh bởi điểm tin cậy, cửa sổ ngữ cảnh và sự mơ hồ vốn có của ngôn ngữ tự nhiên. Kiến trúc sư nào không nội hóa được sự thay đổi này sẽ thấy mình xây dựng các hệ thống hoạt động về mặt kỹ thuật nhưng về cơ bản không phù hợp với mục đích.

## 📝 Phân tích ngữ pháp

### Câu 1: "It is this non-determinism that renders conventional testing, monitoring, and debugging paradigms inadequate for AI-native systems."
- **Cấu trúc:** Cleft sentence: It is + focused NP + that-clause
- **Ngữ pháp:** Cleft sentence nhấn mạnh "this non-determinism" — tách ra từ câu gốc "This non-determinism renders... inadequate" để làm nổi bật nguyên nhân
- **Ví dụ tương tự:** "It is the lack of reproducibility that makes AI testing fundamentally different from traditional QA."

### Câu 2: "Were engineers to apply conventional idempotency guarantees to LLM calls, they would find the concept fundamentally inapplicable."
- **Cấu trúc:** Subjunctive conditional inversion (Were + S + to V) thay cho If + S + were to V
- **Ngữ pháp:** Formal subjunctive — giả định trái thực tế hiện tại, đảo "were" bỏ "if," mang tính học thuật
- **Ví dụ tương tự:** "Were developers to treat LLM outputs as deterministic, their applications would break unpredictably."

### Câu 3: "Had the industry anticipated this shift even five years ago, the transition might have been more graceful."
- **Cấu trúc:** Inverted third conditional (Had + S + V3) thay cho If + S + had V3
- **Ngữ pháp:** Past unreal conditional inversion — giả định trái với quá khứ, "had" đảo lên đầu bỏ "if"
- **Ví dụ tương tự:** "Had companies invested in AI infrastructure earlier, they would not be scrambling to catch up now."

### Câu 4: "Not only must architects rethink how systems are built, but they must also reconceptualize what 'correct behavior' means."
- **Cấu trúc:** Not only + modal inversion + but also (correlative conjunction)
- **Ngữ pháp:** Paired conjunction inversion — "Not only" buộc đảo modal "must" lên trước chủ ngữ "architects"
- **Ví dụ tương tự:** "Not only must teams learn new tools, but they must also adopt fundamentally different mindsets."

### Câu 5: "Architects who fail to internalize this shift will find themselves building systems that are technically functional yet fundamentally unfit for purpose."
- **Cấu trúc:** Relative clause (who fail to...) + find + reflexive + present participle (building) + parallel adjectives (technically... yet fundamentally...)
- **Ngữ pháp:** Complex sentence with "find + oneself + V-ing" (discover unintentionally) và tương phản "yet" nối hai adj phrases đối lập
- **Ví dụ tương tự:** "Companies that ignore security best practices often find themselves dealing with breaches that are costly yet entirely preventable."

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. Why are traditional testing and debugging approaches inadequate for AI-native systems?
2. What is RAG, and why has it become a cornerstone of AI-native architecture?
3. How does the concept of "correctness" differ between deterministic systems and AI-native systems?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. Traditional systems produce ___ outputs — the same input always yields the same result.
2. The LLM produced a ___ — a factual-sounding statement that was completely false.
3. Rather than building AI-native systems, most companies are ___ AI onto existing architectures.
4. The field of AI ___ — monitoring semantic correctness — remains in its early stages.
5. The framework allows AI agents to ___ complex multi-step workflows autonomously.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Because AI components are fundamentally probabilistic — the same input may produce different outputs. This non-determinism means traditional approaches like unit testing (expecting fixed outputs), idempotency guarantees, and conventional error detection don't work reliably.
2. RAG (Retrieval-Augmented Generation) combines LLM generative capabilities with grounded, verifiable data sources. It's a cornerstone because it addresses hallucination by anchoring model outputs to real data, improving accuracy and trustworthiness.
3. In deterministic systems, correctness is binary (right or wrong). In AI-native systems, correctness exists on a spectrum, mediated by confidence scores, context windows, and the inherent ambiguity of natural language.

**Vocabulary:**
1. **deterministic** — xác định, kết quả cố định
2. **hallucination** — ảo giác AI
3. **retrofitting** — trang bị thêm, cải tạo
4. **observability** — khả năng quan sát
5. **orchestrate** — điều phối
{{< /spoiler >}}

---

## 📚 Bài viết liên quan

- [Nghịch lý nghiên cứu an toàn AI — làm AI an toàn hơn có thể](/posts/luyen-doc-ai-safety-paradox-nghich-ly-an-toan-ai/)
- [Japan's tech immigration policy — Nhật Bản thu hút nhân tài IT](/posts/luyen-doc-japan-tech-immigration-nhat-ban-thu-hut-nhan-tai/)
- [Hạ tầng nghìn tỷ đô đằng sau các mô hình ngôn ngữ lớn](/posts/luyen-doc-llm-infrastructure-ha-tang-nghin-ty-do/)


---

## 🎯 Kết luận

Bạn vừa luyện đọc xong một bài báo tiếng Anh IT! Hãy quay lại đọc thêm các bài khác để nâng cao kỹ năng nhé.

👉 [Xem thêm bài luyện đọc](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
