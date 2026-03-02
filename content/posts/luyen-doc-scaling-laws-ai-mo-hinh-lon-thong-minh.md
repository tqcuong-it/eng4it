---
title: "Scaling Laws in AI — Tại sao mô hình lớn hơn lại thông minh hơn"
date: "2023-08-21"
slug: "luyen-doc-scaling-laws-ai-mo-hinh-lon-thong-minh"
description: "Khám phá scaling laws trong AI — tại sao tăng kích thước mô hình và dữ liệu lại cải thiện hiệu suất LLM, qua bài đọc song ngữ Advanced."
categories: ["Reading Practice"]
tags: ["advanced", "ai"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Advanced
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** LLM Scaling

## 📰 Bài đọc (English)

Among the most {{< vocab w="consequential" ipa="/ˌkɒnsɪˈkwenʃəl/" vn="có hệ quả lớn" t="adj" >}} discoveries in modern artificial intelligence is the observation that model performance improves {{< vocab w="predictably" ipa="/prɪˈdɪktəbli/" vn="một cách có thể dự đoán" t="adv" >}} as three variables increase: the number of parameters, the volume of training data, and the amount of {{< vocab w="compute" ipa="/kəmˈpjuːt/" vn="năng lực tính toán" t="noun" >}} expended during training. These relationships, known as scaling laws, have fundamentally altered the {{< vocab w="trajectory" ipa="/trəˈdʒektəri/" vn="quỹ đạo" t="noun" >}} of AI research.

The {{< vocab w="seminal" ipa="/ˈsemɪnəl/" vn="nền tảng, đột phá" t="adj" >}} paper published by researchers at OpenAI in January 2020 established that loss — a mathematical {{< vocab w="proxy" ipa="/ˈprɒksi/" vn="đại diện, chỉ số thay thế" t="noun" >}} for how poorly a model performs — decreases as a smooth power law function of scale. So {{< vocab w="robust" ipa="/roʊˈbʌst/" vn="vững chắc, đáng tin cậy" t="adj" >}} were these relationships that researchers could predict a model's capabilities before it had finished training, merely by {{< vocab w="extrapolating" ipa="/ɪkˈstræpəleɪtɪŋ/" vn="ngoại suy" t="verb" >}} from smaller-scale experiments.

This discovery precipitated what critics have termed the "scaling {{< vocab w="hypothesis" ipa="/haɪˈpɒθəsɪs/" vn="giả thuyết" t="noun" >}}" — the proposition that {{< vocab w="sufficiently" ipa="/səˈfɪʃəntli/" vn="đủ" t="adv" >}} large models trained on sufficiently vast datasets will eventually exhibit general intelligence. Proponents contend that no fundamental {{< vocab w="algorithmic" ipa="/ˌælɡəˈrɪðmɪk/" vn="thuật toán" t="adj" >}} breakthrough is necessary; rather, intelligence {{< vocab w="emerges" ipa="/ɪˈmɜːrdʒɪz/" vn="xuất hiện, nổi lên" t="verb" >}} as an inevitable consequence of scale itself.

Had the AI community not discovered these scaling laws, the massive investments in training infrastructure — totaling tens of billions of dollars annually — would be far more difficult to justify. It is precisely because larger models yield {{< vocab w="quantifiably" ipa="/ˈkwɒntɪfaɪəbli/" vn="một cách có thể đo lường" t="adv" >}} better results that companies such as Google, Meta, and Anthropic continue to pursue ever-larger architectures.

Yet the scaling paradigm faces mounting {{< vocab w="skepticism" ipa="/ˈskeptɪsɪzəm/" vn="sự hoài nghi" t="noun" >}}. Researchers at DeepMind demonstrated with the Chinchilla paper that many existing models were dramatically {{< vocab w="undertrained" ipa="/ˌʌndərˈtreɪnd/" vn="huấn luyện chưa đủ" t="adj" >}} relative to their size — suggesting that data efficiency matters as much as raw scale. Furthermore, {{< vocab w="emergent" ipa="/ɪˈmɜːrdʒənt/" vn="nổi lên, phát sinh" t="adj" >}} capabilities, such as chain-of-thought reasoning, appear at {{< vocab w="unpredictable" ipa="/ˌʌnprɪˈdɪktəbl/" vn="không thể dự đoán" t="adj" >}} thresholds, complicating the neat narrative that more compute automatically yields smarter systems.

Nowhere is the tension between scaling {{< vocab w="optimism" ipa="/ˈɒptɪmɪzəm/" vn="sự lạc quan" t="noun" >}} and practical constraints more visible than in the economics of training. Were current trends to continue unabated, the cost of training a frontier model could exceed one billion dollars by 2026 — raising fundamental questions about who can afford to participate in cutting-edge AI research and whether the scaling approach will ultimately encounter {{< vocab w="diminishing returns" ipa="/dɪˈmɪnɪʃɪŋ rɪˈtɜːrnz/" vn="lợi ích giảm dần" t="noun" >}}.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **consequential** | /ˌkɒnsɪˈkwenʃəl/ | có hệ quả lớn | adj |
| **predictably** | /prɪˈdɪktəbli/ | một cách có thể dự đoán | adv |
| **compute** | /kəmˈpjuːt/ | năng lực tính toán | noun |
| **trajectory** | /trəˈdʒektəri/ | quỹ đạo | noun |
| **seminal** | /ˈsemɪnəl/ | nền tảng, đột phá | adj |
| **proxy** | /ˈprɒksi/ | đại diện, chỉ số thay thế | noun |
| **robust** | /roʊˈbʌst/ | vững chắc, đáng tin cậy | adj |
| **extrapolating** | /ɪkˈstræpəleɪtɪŋ/ | ngoại suy | verb |
| **hypothesis** | /haɪˈpɒθəsɪs/ | giả thuyết | noun |
| **sufficiently** | /səˈfɪʃəntli/ | đủ | adv |
| **algorithmic** | /ˌælɡəˈrɪðmɪk/ | thuật toán | adj |
| **emerges** | /ɪˈmɜːrdʒɪz/ | xuất hiện, nổi lên | verb |
| **quantifiably** | /ˈkwɒntɪfaɪəbli/ | một cách có thể đo lường | adv |
| **skepticism** | /ˈskeptɪsɪzəm/ | sự hoài nghi | noun |
| **undertrained** | /ˌʌndərˈtreɪnd/ | huấn luyện chưa đủ | adj |
| **emergent** | /ɪˈmɜːrdʒənt/ | nổi lên, phát sinh | adj |
| **unpredictable** | /ˌʌnprɪˈdɪktəbl/ | không thể dự đoán | adj |
| **optimism** | /ˈɒptɪmɪzəm/ | sự lạc quan | noun |
| **diminishing returns** | /dɪˈmɪnɪʃɪŋ rɪˈtɜːrnz/ | lợi ích giảm dần | noun |

## 🇻🇳 Bản dịch tiếng Việt

Trong số những phát hiện có hệ quả lớn nhất trong trí tuệ nhân tạo hiện đại là quan sát rằng hiệu suất mô hình cải thiện một cách có thể dự đoán khi ba biến tăng: số lượng tham số, khối lượng dữ liệu huấn luyện, và lượng năng lực tính toán sử dụng trong quá trình huấn luyện. Các mối quan hệ này, được gọi là quy luật scaling, đã thay đổi căn bản quỹ đạo nghiên cứu AI.

Bài báo nền tảng được các nhà nghiên cứu tại OpenAI công bố vào tháng 1 năm 2020 đã thiết lập rằng loss — chỉ số toán học đại diện cho mức độ kém hiệu quả của mô hình — giảm theo hàm power law mượt mà của quy mô. Các mối quan hệ này vững chắc đến mức các nhà nghiên cứu có thể dự đoán khả năng của mô hình trước khi nó hoàn thành huấn luyện, chỉ bằng cách ngoại suy từ các thí nghiệm quy mô nhỏ hơn.

Phát hiện này đã dẫn đến cái mà những người phê bình gọi là "giả thuyết scaling" — mệnh đề rằng các mô hình đủ lớn được huấn luyện trên tập dữ liệu đủ rộng cuối cùng sẽ thể hiện trí thông minh tổng quát. Những người ủng hộ cho rằng không cần bước đột phá thuật toán căn bản nào; thay vào đó, trí thông minh xuất hiện như hệ quả tất yếu của chính quy mô.

Nếu cộng đồng AI không phát hiện ra các quy luật scaling này, những khoản đầu tư khổng lồ vào hạ tầng huấn luyện — tổng cộng hàng chục tỷ đô la mỗi năm — sẽ khó biện minh hơn nhiều. Chính vì các mô hình lớn hơn cho kết quả tốt hơn có thể đo lường được mà các công ty như Google, Meta và Anthropic tiếp tục theo đuổi kiến trúc ngày càng lớn.

Tuy nhiên, mô hình scaling đối mặt với sự hoài nghi ngày càng tăng. Các nhà nghiên cứu tại DeepMind đã chứng minh qua bài báo Chinchilla rằng nhiều mô hình hiện tại bị huấn luyện chưa đủ đáng kể so với kích thước — gợi ý rằng hiệu quả dữ liệu quan trọng ngang với quy mô thô. Hơn nữa, các khả năng nổi lên, như suy luận chuỗi tư duy, xuất hiện ở ngưỡng không thể dự đoán, làm phức tạp câu chuyện gọn gàng rằng nhiều compute hơn tự động tạo ra hệ thống thông minh hơn.

Không nơi nào căng thẳng giữa lạc quan scaling và ràng buộc thực tế rõ ràng hơn kinh tế học của huấn luyện. Nếu xu hướng hiện tại tiếp tục không suy giảm, chi phí huấn luyện mô hình tiên phong có thể vượt một tỷ đô la vào năm 2026 — đặt ra câu hỏi căn bản về ai có thể tham gia nghiên cứu AI tiên tiến và liệu cách tiếp cận scaling có cuối cùng gặp phải lợi ích giảm dần hay không.

## 📝 Phân tích ngữ pháp

### Câu 1: "So robust were these relationships that researchers could predict a model's capabilities before it had finished training."
- **Cấu trúc:** So + adj + were + S + that clause (đảo ngữ nhấn mạnh)
- **Ngữ pháp:** So...that inversion — đảo "so robust" lên đầu, đảo "were" trước chủ ngữ. Nhấn mạnh mức độ vững chắc của mối quan hệ.
- **Ví dụ tương tự:** "So accurate were the predictions that investors committed billions based on extrapolation alone."

### Câu 2: "Had the AI community not discovered these scaling laws, the massive investments... would be far more difficult to justify."
- **Cấu trúc:** Had + S + not + V3, S + would + be (đảo ngữ điều kiện loại 3 phủ định)
- **Ngữ pháp:** Third conditional inversion — giả định trái với quá khứ. "Had...not" = "If...had not."
- **Ví dụ tương tự:** "Had researchers not published their findings, the industry would have taken a different direction."

### Câu 3: "It is precisely because larger models yield quantifiably better results that companies... continue to pursue ever-larger architectures."
- **Cấu trúc:** It is + precisely because + clause + that + clause (cấu trúc nhấn mạnh cleft sentence)
- **Ngữ pháp:** Cleft sentence with "because" — dùng "It is...that" để nhấn mạnh lý do. "Precisely" tăng cường sự chính xác.
- **Ví dụ tương tự:** "It is precisely because data is so valuable that companies invest heavily in collection infrastructure."

### Câu 4: "Nowhere is the tension between scaling optimism and practical constraints more visible than in the economics of training."
- **Cấu trúc:** Nowhere + be + S + more adj + than (đảo ngữ với trạng từ phủ định)
- **Ngữ pháp:** Negative adverb inversion — "Nowhere" đầu câu buộc đảo "is" trước chủ ngữ. So sánh hơn "more visible than" bổ sung.
- **Ví dụ tương tự:** "Nowhere is the gap between theory and practice wider than in AI safety research."

### Câu 5: "Were current trends to continue unabated, the cost of training a frontier model could exceed one billion dollars by 2026."
- **Cấu trúc:** Were + S + to V, S + could + V (đảo ngữ điều kiện loại 2)
- **Ngữ pháp:** Subjunctive inversion — dạng formal giả định về tương lai. "Unabated" (không suy giảm) là trạng từ bổ sung.
- **Ví dụ tương tự:** "Were energy costs to double, only the largest corporations could afford frontier AI training."

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. Ba biến nào tăng sẽ cải thiện hiệu suất mô hình theo scaling laws?
2. Bài báo Chinchilla của DeepMind đã chứng minh điều gì?
3. Tại sao emergent capabilities lại làm phức tạp câu chuyện scaling?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. Loss is a mathematical ___ for model performance.
2. Researchers can predict results by ___ from smaller experiments.
3. The scaling ___ suggests that bigger models will become generally intelligent.
4. Many models are ___ relative to their parameter count.
5. The approach may eventually encounter ___ as costs become prohibitive.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Số lượng tham số (parameters), khối lượng dữ liệu huấn luyện (training data), và lượng compute.
2. Nhiều mô hình hiện tại bị huấn luyện chưa đủ so với kích thước — hiệu quả dữ liệu quan trọng ngang quy mô thô.
3. Vì chúng xuất hiện ở ngưỡng không thể dự đoán, không tuân theo đường cong mượt mà — làm suy yếu quan điểm "nhiều compute = thông minh hơn" một cách tự động.

**Vocabulary:**
1. **proxy** — đại diện, chỉ số thay thế
2. **extrapolating** — ngoại suy
3. **hypothesis** — giả thuyết
4. **undertrained** — huấn luyện chưa đủ
5. **diminishing returns** — lợi ích giảm dần
{{< /spoiler >}}
