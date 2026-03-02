---
title: "AI Chip Wars — NVIDIA vs AMD vs Google TPU vs Apple Neural Engine"
date: 2023-09-09
slug: "luyen-doc-ai-chip-wars-nvidia-amd-google-apple"
description: "Cuộc chiến chip AI giữa NVIDIA, AMD, Google TPU và Apple Neural Engine — ai sẽ thống trị thị trường AI accelerator?"
categories: ["Reading Practice"]
tags: ["advanced", "ai"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Advanced
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** AI / AI Accelerator

## 📰 Bài đọc (English)

The race to build the fastest {{< vocab w="AI accelerator" ipa="/eɪaɪ ækˈseləreɪtər/" vn="bộ tăng tốc AI" t="noun" >}} has become one of the most consequential competitions in the technology industry. As AI workloads grow exponentially, the companies that control the {{< vocab w="silicon" ipa="/ˈsɪlɪkən/" vn="chip bán dẫn" t="noun" >}} powering these models hold enormous {{< vocab w="leverage" ipa="/ˈlevərɪdʒ/" vn="đòn bẩy, ảnh hưởng" t="noun" >}} over the future of computing.

NVIDIA currently {{< vocab w="dominates" ipa="/ˈdɑːmɪneɪts/" vn="thống trị" t="verb" >}} the AI chip market with an estimated 80% share. Its H100 {{< vocab w="GPU" ipa="/ˌdʒiːpiːˈjuː/" vn="bộ xử lý đồ họa" t="noun" >}}, based on the Hopper architecture, has become the {{< vocab w="de facto" ipa="/deɪ ˈfæktoʊ/" vn="trên thực tế" t="adj" >}} standard for training large language models. The company's {{< vocab w="CUDA ecosystem" ipa="/ˈkuːdə ˈiːkoʊsɪstəm/" vn="hệ sinh thái CUDA" t="noun" >}} — a software {{< vocab w="moat" ipa="/moʊt/" vn="hào bảo vệ, lợi thế cạnh tranh" t="noun" >}} built over 15 years — makes switching to competitors exceptionally difficult.

AMD is mounting its most serious challenge yet with the MI300X {{< vocab w="accelerator" ipa="/ækˈseləreɪtər/" vn="bộ tăng tốc" t="noun" >}}. Featuring 192GB of HBM3 memory — significantly more than the H100's 80GB — the MI300X targets {{< vocab w="inference" ipa="/ˈɪnfərəns/" vn="suy luận" t="noun" >}} workloads where memory capacity is the primary {{< vocab w="constraint" ipa="/kənˈstreɪnt/" vn="ràng buộc, giới hạn" t="noun" >}}. AMD's ROCm software stack, while less mature than CUDA, is rapidly closing the gap.

Google takes a fundamentally different approach with its {{< vocab w="Tensor Processing Units" ipa="/ˈtensər ˈprɑːsesɪŋ ˈjuːnɪts/" vn="đơn vị xử lý tensor" t="noun" >}} (TPUs). Rather than selling chips, Google offers TPU access exclusively through its cloud platform, creating a {{< vocab w="vertically integrated" ipa="/ˈvɜːrtɪkəli ˈɪntɪɡreɪtɪd/" vn="tích hợp dọc" t="adj" >}} AI stack from hardware to software. The latest TPU v5p delivers {{< vocab w="unprecedented" ipa="/ʌnˈpresɪdentɪd/" vn="chưa từng có" t="adj" >}} performance for training while keeping costs competitive.

Apple, meanwhile, has quietly built the industry's most efficient {{< vocab w="on-device" ipa="/ɑːn dɪˈvaɪs/" vn="trên thiết bị" t="adj" >}} AI processor. Its Neural Engine, integrated into the M-series and A-series chips, can perform 15.8 {{< vocab w="trillion operations per second" ipa="/ˈtrɪljən ˌɑːpəˈreɪʃənz pɜːr ˈsekənd/" vn="nghìn tỷ phép tính mỗi giây" t="noun" >}} while consuming minimal power — a critical advantage for {{< vocab w="edge AI" ipa="/edʒ eɪaɪ/" vn="AI biên" t="noun" >}} applications.

The {{< vocab w="geopolitical" ipa="/ˌdʒiːoʊpəˈlɪtɪkl/" vn="địa chính trị" t="adj" >}} dimension adds further complexity. U.S. export controls restricting advanced chip sales to China have {{< vocab w="fragmented" ipa="/ˈfræɡmentɪd/" vn="phân mảnh" t="verb" >}} the global market, pushing Chinese firms like Huawei to develop domestic alternatives. The chip wars are no longer just about {{< vocab w="throughput" ipa="/ˈθruːpʊt/" vn="thông lượng" t="noun" >}} and {{< vocab w="efficiency" ipa="/ɪˈfɪʃənsi/" vn="hiệu suất" t="noun" >}} — they are reshaping international technology {{< vocab w="supply chains" ipa="/səˈplaɪ tʃeɪnz/" vn="chuỗi cung ứng" t="noun" >}}.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **AI accelerator** | /eɪaɪ ækˈseləreɪtər/ | bộ tăng tốc AI | noun |
| **silicon** | /ˈsɪlɪkən/ | chip bán dẫn | noun |
| **leverage** | /ˈlevərɪdʒ/ | đòn bẩy, ảnh hưởng | noun |
| **dominates** | /ˈdɑːmɪneɪts/ | thống trị | verb |
| **GPU** | /ˌdʒiːpiːˈjuː/ | bộ xử lý đồ họa | noun |
| **de facto** | /deɪ ˈfæktoʊ/ | trên thực tế | adj |
| **CUDA ecosystem** | /ˈkuːdə ˈiːkoʊsɪstəm/ | hệ sinh thái CUDA | noun |
| **moat** | /moʊt/ | hào bảo vệ, lợi thế cạnh tranh | noun |
| **inference** | /ˈɪnfərəns/ | suy luận | noun |
| **constraint** | /kənˈstreɪnt/ | ràng buộc, giới hạn | noun |
| **Tensor Processing Units** | /ˈtensər ˈprɑːsesɪŋ ˈjuːnɪts/ | đơn vị xử lý tensor | noun |
| **vertically integrated** | /ˈvɜːrtɪkəli ˈɪntɪɡreɪtɪd/ | tích hợp dọc | adj |
| **unprecedented** | /ʌnˈpresɪdentɪd/ | chưa từng có | adj |
| **on-device** | /ɑːn dɪˈvaɪs/ | trên thiết bị | adj |
| **trillion operations per second** | /ˈtrɪljən ˌɑːpəˈreɪʃənz pɜːr ˈsekənd/ | nghìn tỷ phép tính mỗi giây | noun |
| **edge AI** | /edʒ eɪaɪ/ | AI biên | noun |
| **geopolitical** | /ˌdʒiːoʊpəˈlɪtɪkl/ | địa chính trị | adj |
| **fragmented** | /ˈfræɡmentɪd/ | phân mảnh | verb |
| **throughput** | /ˈθruːpʊt/ | thông lượng | noun |
| **supply chains** | /səˈplaɪ tʃeɪnz/ | chuỗi cung ứng | noun |

## 🇻🇳 Bản dịch tiếng Việt

Cuộc đua xây dựng bộ tăng tốc AI nhanh nhất đã trở thành một trong những cuộc cạnh tranh có hệ quả lớn nhất trong ngành công nghệ. Khi khối lượng công việc AI tăng theo cấp số nhân, các công ty kiểm soát chip bán dẫn cung cấp năng lượng cho các mô hình này nắm giữ đòn bẩy khổng lồ đối với tương lai của điện toán.

NVIDIA hiện đang thống trị thị trường chip AI với ước tính 80% thị phần. GPU H100 của họ, dựa trên kiến trúc Hopper, đã trở thành tiêu chuẩn thực tế cho việc huấn luyện các mô hình ngôn ngữ lớn. Hệ sinh thái CUDA của công ty — một hào bảo vệ phần mềm được xây dựng trong 15 năm — khiến việc chuyển sang đối thủ cạnh tranh cực kỳ khó khăn.

AMD đang tung ra thách thức nghiêm túc nhất với bộ tăng tốc MI300X. Với 192GB bộ nhớ HBM3 — nhiều hơn đáng kể so với 80GB của H100 — MI300X nhắm vào khối lượng công việc suy luận, nơi dung lượng bộ nhớ là ràng buộc chính. Stack phần mềm ROCm của AMD, dù chưa trưởng thành bằng CUDA, đang nhanh chóng thu hẹp khoảng cách.

Google áp dụng cách tiếp cận khác biệt căn bản với Đơn vị Xử lý Tensor (TPU). Thay vì bán chip, Google cung cấp quyền truy cập TPU độc quyền qua nền tảng cloud của mình, tạo ra stack AI tích hợp dọc từ phần cứng đến phần mềm. TPU v5p mới nhất mang lại hiệu năng chưa từng có cho huấn luyện trong khi giữ chi phí cạnh tranh.

Apple, trong khi đó, đã âm thầm xây dựng bộ xử lý AI trên thiết bị hiệu quả nhất ngành. Neural Engine, được tích hợp trong chip dòng M và A, có thể thực hiện 15.8 nghìn tỷ phép tính mỗi giây trong khi tiêu thụ điện năng tối thiểu — một lợi thế quan trọng cho ứng dụng AI biên.

Khía cạnh địa chính trị thêm phần phức tạp. Các hạn chế xuất khẩu của Mỹ cấm bán chip tiên tiến cho Trung Quốc đã phân mảnh thị trường toàn cầu, thúc đẩy các hãng Trung Quốc như Huawei phát triển giải pháp thay thế nội địa. Cuộc chiến chip không còn chỉ về thông lượng và hiệu suất — chúng đang định hình lại chuỗi cung ứng công nghệ quốc tế.

## 📝 Phân tích ngữ pháp

### Câu 1: "As AI workloads grow exponentially, the companies that control the silicon powering these models hold enormous leverage over the future of computing."
- **Cấu trúc:** As + S + V + adv, S + relative clause + V + O + over + N
- **Ngữ pháp:** "As" chỉ thời gian/nguyên nhân. "That control..." mệnh đề quan hệ xác định. "Powering" là present participle bổ nghĩa cho "silicon".
- **Ví dụ tương tự:** As cloud adoption accelerates, the providers that own the infrastructure supporting enterprise workloads hold significant influence over IT strategy.

### Câu 2: "Its CUDA ecosystem — a software moat built over 15 years — makes switching to competitors exceptionally difficult."
- **Cấu trúc:** S — appositive phrase — V + gerund phrase + adv + adj
- **Ngữ pháp:** Dấu em dash bao quanh appositive phrase giải thích. "Makes + gerund + adj" = cấu trúc make + O + complement.
- **Ví dụ tương tự:** Its developer community — a network cultivated over a decade — makes migrating to alternatives extremely challenging.

### Câu 3: "Featuring 192GB of HBM3 memory — significantly more than the H100's 80GB — the MI300X targets inference workloads where memory capacity is the primary constraint."
- **Cấu trúc:** Present participle phrase — parenthetical comparison — S + V + O + where-clause
- **Ngữ pháp:** "Featuring" mở đầu câu bổ sung thông tin. Mệnh đề "where" bổ nghĩa cho "workloads", giải thích điều kiện.
- **Ví dụ tương tự:** Offering 256GB of unified memory — double that of the previous generation — the new chip targets training scenarios where model size is the critical bottleneck.

### Câu 4: "Rather than selling chips, Google offers TPU access exclusively through its cloud platform, creating a vertically integrated AI stack."
- **Cấu trúc:** Rather than + V-ing, S + V + O + adv + through + N, V-ing + O
- **Ngữ pháp:** "Rather than" = thay vì. "Exclusively through" chỉ phương tiện duy nhất. Mệnh đề phân từ "creating" chỉ kết quả.
- **Ví dụ tương tự:** Rather than licensing its technology, Apple delivers AI capabilities exclusively through its devices, maintaining a tightly controlled ecosystem.

### Câu 5: "The chip wars are no longer just about throughput and efficiency — they are reshaping international technology supply chains."
- **Cấu trúc:** S + be + no longer + just about + N — S + be + V-ing + O
- **Ngữ pháp:** "No longer just about" = không còn chỉ về. Em dash tạo sự tương phản mạnh, nâng tầm ý nghĩa từ kỹ thuật sang địa chính trị.
- **Ví dụ tương tự:** The cloud wars are no longer just about pricing and features — they are determining which nations lead in digital infrastructure.

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What gives NVIDIA its dominant position in the AI chip market?
2. How does Google's approach to AI chips differ from NVIDIA and AMD?
3. What role do U.S. export controls play in the AI chip landscape?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. NVIDIA's CUDA ecosystem acts as a competitive ___, making it hard for rivals to attract developers.
2. The H100 GPU has become the ___ ___ standard for LLM training.
3. AMD's MI300X targets ___ workloads that require large memory capacity.
4. Apple's Neural Engine focuses on ___ AI, running models directly on the device.
5. U.S. export restrictions have ___ the global AI chip market.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. NVIDIA dominates due to its ~80% market share, the H100 GPU's performance, and the CUDA ecosystem — a software moat built over 15 years that makes switching difficult.
2. Google doesn't sell chips directly; it offers TPU access exclusively through its cloud platform, creating a vertically integrated AI stack from hardware to software.
3. U.S. export controls restrict advanced chip sales to China, fragmenting the global market and pushing Chinese firms to develop domestic alternatives.

**Vocabulary:**
1. **moat** — hào bảo vệ, lợi thế cạnh tranh
2. **de facto** — trên thực tế
3. **inference** — suy luận
4. **edge** — AI biên
5. **fragmented** — phân mảnh
{{< /spoiler >}}
