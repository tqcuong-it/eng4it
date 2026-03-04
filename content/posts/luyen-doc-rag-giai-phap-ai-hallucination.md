---
title: "Retrieval-Augmented Generation (RAG) — Giải pháp cho AI"
date: 2023-09-06
summary: "Luyện đọc tiếng Anh IT: Giải pháp cho AI — kèm từ vựng, phát âm IPA và bài tập."
slug: "luyen-doc-rag-giai-phap-ai-hallucination"
description: "Tìm hiểu về Retrieval-Augmented Generation (RAG) — kiến trúc giúp giảm thiểu hiện tượng AI hallucination bằng cách kết hợp truy xuất dữ liệu thực."
categories: ["Reading Practice"]
tags: ["advanced", "ai", "reading-practice"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Advanced
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** AI / RAG Architecture

## 📰 Bài đọc (English)

As large language models (LLMs) become {{< vocab w="ubiquitous" ipa="/juːˈbɪkwɪtəs/" vn="có mặt khắp nơi" t="adj" >}} across industries, one persistent problem continues to undermine their reliability: {{< vocab w="hallucination" ipa="/həˌluːsɪˈneɪʃən/" vn="ảo giác, bịa đặt" t="noun" >}}. AI models sometimes generate confident-sounding but entirely fabricated information, posing serious risks for enterprise applications.

Enter {{< vocab w="retrieval-augmented generation" ipa="/rɪˈtriːvəl ɔːɡˈmentɪd ˌdʒenəˈreɪʃən/" vn="sinh văn bản tăng cường bằng truy xuất" t="noun" >}}, or RAG — an {{< vocab w="architectural pattern" ipa="/ˌɑːrkɪˈtektʃərəl ˈpætərn/" vn="mẫu kiến trúc" t="noun" >}} that is rapidly gaining traction as the most practical solution to this challenge. Rather than relying solely on a model's {{< vocab w="parametric knowledge" ipa="/ˌpærəˈmetrɪk ˈnɑːlɪdʒ/" vn="tri thức tham số" t="noun" >}} — the information encoded during training — RAG systems {{< vocab w="augment" ipa="/ɔːɡˈment/" vn="tăng cường, bổ sung" t="verb" >}} the generation process by retrieving relevant documents from external knowledge bases in real time.

The architecture works in three stages. First, a user's query is converted into a {{< vocab w="vector embedding" ipa="/ˈvektər ɪmˈbedɪŋ/" vn="biểu diễn vector" t="noun" >}} and used to search a {{< vocab w="vector database" ipa="/ˈvektər ˈdeɪtəbeɪs/" vn="cơ sở dữ liệu vector" t="noun" >}} containing pre-indexed documents. Second, the most relevant {{< vocab w="chunks" ipa="/tʃʌŋks/" vn="đoạn dữ liệu" t="noun" >}} are retrieved and injected into the model's {{< vocab w="context window" ipa="/ˈkɑːntekst ˈwɪndoʊ/" vn="cửa sổ ngữ cảnh" t="noun" >}}. Third, the LLM generates a response {{< vocab w="grounded" ipa="/ɡraʊndɪd/" vn="dựa trên cơ sở thực tế" t="adj" >}} in the retrieved evidence.

Companies like {{< vocab w="enterprise" ipa="/ˈentərpraɪz/" vn="doanh nghiệp" t="noun" >}} software vendors are integrating RAG into their products at an accelerating pace. Databricks recently announced its {{< vocab w="open-source" ipa="/ˌoʊpən ˈsɔːrs/" vn="mã nguồn mở" t="adj" >}} RAG framework, while Microsoft has embedded RAG capabilities into Azure AI Search, allowing organizations to connect their {{< vocab w="proprietary" ipa="/prəˈpraɪəteri/" vn="độc quyền, riêng" t="adj" >}} data to GPT-4 without fine-tuning.

However, RAG is not without {{< vocab w="limitations" ipa="/ˌlɪmɪˈteɪʃənz/" vn="hạn chế" t="noun" >}}. The quality of retrieval directly impacts output accuracy — poorly {{< vocab w="curated" ipa="/ˈkjʊreɪtɪd/" vn="được chọn lọc" t="adj" >}} knowledge bases or inadequate {{< vocab w="chunking strategies" ipa="/ˈtʃʌŋkɪŋ ˈstrætədʒiz/" vn="chiến lược chia đoạn" t="noun" >}} can lead to irrelevant context being fed to the model. Additionally, {{< vocab w="latency" ipa="/ˈleɪtənsi/" vn="độ trễ" t="noun" >}} increases as the retrieval step adds processing time.

Despite these challenges, RAG represents a {{< vocab w="paradigm shift" ipa="/ˈpærədaɪm ʃɪft/" vn="sự thay đổi mô hình" t="noun" >}} in how organizations deploy generative AI. By combining the {{< vocab w="fluency" ipa="/ˈfluːənsi/" vn="sự trôi chảy" t="noun" >}} of language models with the {{< vocab w="fidelity" ipa="/fɪˈdeləti/" vn="độ trung thực" t="noun" >}} of verified data sources, RAG offers a pragmatic path toward trustworthy AI systems.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **ubiquitous** | /juːˈbɪkwɪtəs/ | có mặt khắp nơi | adj |
| **hallucination** | /həˌluːsɪˈneɪʃən/ | ảo giác, bịa đặt | noun |
| **retrieval-augmented generation** | /rɪˈtriːvəl ɔːɡˈmentɪd ˌdʒenəˈreɪʃən/ | sinh văn bản tăng cường bằng truy xuất | noun |
| **architectural pattern** | /ˌɑːrkɪˈtektʃərəl ˈpætərn/ | mẫu kiến trúc | noun |
| **parametric knowledge** | /ˌpærəˈmetrɪk ˈnɑːlɪdʒ/ | tri thức tham số | noun |
| **augment** | /ɔːɡˈment/ | tăng cường, bổ sung | verb |
| **vector embedding** | /ˈvektər ɪmˈbedɪŋ/ | biểu diễn vector | noun |
| **vector database** | /ˈvektər ˈdeɪtəbeɪs/ | cơ sở dữ liệu vector | noun |
| **chunks** | /tʃʌŋks/ | đoạn dữ liệu | noun |
| **context window** | /ˈkɑːntekst ˈwɪndoʊ/ | cửa sổ ngữ cảnh | noun |
| **grounded** | /ɡraʊndɪd/ | dựa trên cơ sở thực tế | adj |
| **enterprise** | /ˈentərpraɪz/ | doanh nghiệp | noun |
| **open-source** | /ˌoʊpən ˈsɔːrs/ | mã nguồn mở | adj |
| **proprietary** | /prəˈpraɪəteri/ | độc quyền, riêng | adj |
| **limitations** | /ˌlɪmɪˈteɪʃənz/ | hạn chế | noun |
| **curated** | /ˈkjʊreɪtɪd/ | được chọn lọc | adj |
| **chunking strategies** | /ˈtʃʌŋkɪŋ ˈstrætədʒiz/ | chiến lược chia đoạn | noun |
| **latency** | /ˈleɪtənsi/ | độ trễ | noun |
| **paradigm shift** | /ˈpærədaɪm ʃɪft/ | sự thay đổi mô hình | noun |
| **fidelity** | /fɪˈdeləti/ | độ trung thực | noun |

## 🇻🇳 Bản dịch tiếng Việt

Khi các mô hình ngôn ngữ lớn (LLM) trở nên phổ biến trong mọi ngành, một vấn đề dai dẳng vẫn tiếp tục làm suy giảm độ tin cậy của chúng: hiện tượng ảo giác. Các mô hình AI đôi khi tạo ra thông tin nghe rất tự tin nhưng hoàn toàn bịa đặt, gây ra rủi ro nghiêm trọng cho các ứng dụng doanh nghiệp.

Giải pháp chính là Retrieval-Augmented Generation, hay RAG — một mẫu kiến trúc đang nhanh chóng thu hút sự chú ý như giải pháp thực tế nhất cho thách thức này. Thay vì chỉ dựa vào tri thức tham số của mô hình — thông tin được mã hóa trong quá trình huấn luyện — hệ thống RAG bổ sung quá trình sinh văn bản bằng cách truy xuất các tài liệu liên quan từ cơ sở tri thức bên ngoài theo thời gian thực.

Kiến trúc hoạt động qua ba giai đoạn. Đầu tiên, truy vấn của người dùng được chuyển đổi thành biểu diễn vector và dùng để tìm kiếm trong cơ sở dữ liệu vector chứa các tài liệu đã được đánh chỉ mục. Thứ hai, các đoạn dữ liệu liên quan nhất được truy xuất và đưa vào cửa sổ ngữ cảnh của mô hình. Thứ ba, LLM sinh ra câu trả lời dựa trên bằng chứng đã truy xuất.

Các công ty phần mềm doanh nghiệp đang tích hợp RAG vào sản phẩm của họ với tốc độ ngày càng nhanh. Databricks gần đây đã công bố framework RAG mã nguồn mở, trong khi Microsoft đã nhúng khả năng RAG vào Azure AI Search, cho phép các tổ chức kết nối dữ liệu riêng của họ với GPT-4 mà không cần tinh chỉnh.

Tuy nhiên, RAG không phải không có hạn chế. Chất lượng truy xuất ảnh hưởng trực tiếp đến độ chính xác đầu ra — cơ sở tri thức được chọn lọc kém hoặc chiến lược chia đoạn không phù hợp có thể dẫn đến ngữ cảnh không liên quan được đưa vào mô hình. Ngoài ra, độ trễ tăng lên vì bước truy xuất thêm thời gian xử lý.

Bất chấp những thách thức này, RAG đại diện cho một sự thay đổi mô hình trong cách các tổ chức triển khai AI tạo sinh. Bằng cách kết hợp sự trôi chảy của mô hình ngôn ngữ với độ trung thực của nguồn dữ liệu đã xác minh, RAG mang đến con đường thực tế hướng tới các hệ thống AI đáng tin cậy.

## 📝 Phân tích ngữ pháp

### Câu 1: "Rather than relying solely on a model's parametric knowledge, RAG systems augment the generation process by retrieving relevant documents."
- **Cấu trúc:** Rather than + V-ing, S + V + O + by + V-ing
- **Ngữ pháp:** "Rather than" dùng để so sánh hai hành động, nhấn mạnh sự lựa chọn thay thế. "By + V-ing" chỉ phương tiện/cách thức.
- **Ví dụ tương tự:** Rather than building from scratch, the team accelerated development by using open-source libraries.

### Câu 2: "The quality of retrieval directly impacts output accuracy — poorly curated knowledge bases can lead to irrelevant context being fed to the model."
- **Cấu trúc:** S + adv + V + O — adv + V-ed + N + can lead to + N + being + V-ed
- **Ngữ pháp:** Em dash (—) dùng để giải thích/bổ sung. "Lead to + N + being + past participle" là cấu trúc bị động với gerund.
- **Ví dụ tương tự:** Poor testing directly affects software quality — unchecked bugs can lead to critical data being exposed.

### Câu 3: "AI models sometimes generate confident-sounding but entirely fabricated information, posing serious risks for enterprise applications."
- **Cấu trúc:** S + V + compound adj + but + adv + adj + N, V-ing + O (present participle phrase)
- **Ngữ pháp:** Compound adjective "confident-sounding" dùng nối hyphen. Mệnh đề phân từ hiện tại (posing...) bổ sung kết quả.
- **Ví dụ tương tự:** The update introduced seemingly minor but fundamentally breaking changes, causing widespread outages.

### Câu 4: "By combining the fluency of language models with the fidelity of verified data sources, RAG offers a pragmatic path toward trustworthy AI systems."
- **Cấu trúc:** By + V-ing + N + with + N, S + V + O + toward + N
- **Ngữ pháp:** "By + V-ing" mở đầu câu chỉ phương tiện. "Toward" chỉ hướng/mục tiêu trừu tượng.
- **Ví dụ tương tự:** By integrating automated testing with continuous deployment, teams achieve a reliable path toward production-ready code.

### Câu 5: "Databricks recently announced its open-source RAG framework, while Microsoft has embedded RAG capabilities into Azure AI Search."
- **Cấu trúc:** S1 + recently + V-ed + O, while + S2 + has + V-ed + O + into + N
- **Ngữ pháp:** "While" nối hai mệnh đề song song, thể hiện sự đồng thời. Present perfect (has embedded) nhấn mạnh kết quả còn hiệu lực.
- **Ví dụ tương tự:** Google recently released its new model, while OpenAI has integrated multimodal features into ChatGPT.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What is the main problem that RAG aims to solve?
2. What are the three stages of the RAG architecture?
3. Why can RAG systems still produce inaccurate results despite using external data?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The ___ of the AI model sometimes produces completely fabricated answers.
2. We need to ___ our training data with external sources for better accuracy.
3. The company uses a ___ database to store document embeddings for search.
4. Poor ___ strategies can result in irrelevant information being retrieved.
5. The shift to RAG represents a ___ ___ in enterprise AI deployment.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. RAG aims to solve AI hallucination — the problem of models generating confident but fabricated information.
2. Three stages: (1) Convert query to vector embedding and search vector database, (2) Retrieve relevant chunks into context window, (3) LLM generates response grounded in retrieved evidence.
3. Because poorly curated knowledge bases or inadequate chunking strategies can lead to irrelevant context being fed to the model.

**Vocabulary:**
1. **hallucination** — hiện tượng bịa đặt thông tin
2. **augment** — tăng cường, bổ sung
3. **vector** — cơ sở dữ liệu vector
4. **chunking** — chiến lược chia đoạn
5. **paradigm shift** — sự thay đổi mô hình
{{< /spoiler >}}
