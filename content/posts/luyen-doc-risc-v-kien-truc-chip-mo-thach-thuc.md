---
title: "Bài 155: RISC-V — Kiến Trúc Chip Mở Thách Thức ARM và x86"
date: "2023-08-11"
slug: "luyen-doc-risc-v-kien-truc-chip-mo-thach-thuc"
description: "Luyện đọc tiếng Anh IT bài 155: RISC-V, kiến trúc tập lệnh mã nguồn mở, đang thách thức sự thống trị của ARM và x86 trong ngành bán dẫn."
categories: ["Reading Practice"]
tags: ["upper-intermediate", "startup"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Upper-Intermediate
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** Open Chip Architecture / Semiconductors

## 📰 Bài đọc (English)

For decades, the {{< vocab w="semiconductor" ipa="/ˌsemikənˈdʌktər/" vn="chất bán dẫn" t="noun" >}} industry has been {{< vocab w="dominated" ipa="/ˈdɑːmɪneɪtɪd/" vn="bị chi phối" t="verb" >}} by two {{< vocab w="proprietary" ipa="/prəˈpraɪəteri/" vn="độc quyền" t="adj" >}} instruction set architectures: x86, controlled by Intel and AMD, and ARM, licensed by the British firm Arm Holdings. What RISC-V promises is nothing less than a fundamental disruption of this {{< vocab w="duopoly" ipa="/djuˈɑːpəli/" vn="thế độc quyền đôi" t="noun" >}} — an open-source chip architecture that anyone can use, modify, and manufacture without paying {{< vocab w="licensing fees" ipa="/ˈlaɪsənsɪŋ fiːz/" vn="phí bản quyền" t="noun" >}}.

It was at the University of California, Berkeley, that RISC-V was first conceived in 2010, initially as an academic project. Never did its creators anticipate that their research would {{< vocab w="catalyze" ipa="/ˈkætəlaɪz/" vn="xúc tác, thúc đẩy" t="verb" >}} a movement now backed by tech giants including Google, Qualcomm, and Samsung. The RISC-V International {{< vocab w="consortium" ipa="/kənˈsɔːrtiəm/" vn="tập đoàn liên doanh" t="noun" >}} has grown to over 3,000 members across 70 countries.

What makes RISC-V particularly {{< vocab w="compelling" ipa="/kəmˈpelɪŋ/" vn="hấp dẫn, thuyết phục" t="adj" >}} is its {{< vocab w="modularity" ipa="/ˌmɑːdʒʊˈlærəti/" vn="tính mô-đun" t="noun" >}}. Unlike monolithic architectures, RISC-V allows designers to select only the {{< vocab w="extensions" ipa="/ɪkˈstenʃənz/" vn="phần mở rộng" t="noun" >}} they need, resulting in chips that are more power-efficient and {{< vocab w="tailored" ipa="/ˈteɪlərd/" vn="được tùy chỉnh" t="adj" >}} to specific {{< vocab w="workloads" ipa="/ˈwɜːrkloʊdz/" vn="khối lượng công việc" t="noun" >}}. Nowhere is this advantage more {{< vocab w="pronounced" ipa="/prəˈnaʊnst/" vn="rõ rệt" t="adj" >}} than in the {{< vocab w="IoT" ipa="/aɪ oʊ tiː/" vn="Internet vạn vật" t="noun" >}} and embedded systems market, where power consumption is paramount.

Not only has China embraced RISC-V as a means of reducing dependence on Western {{< vocab w="intellectual property" ipa="/ˌɪntəˈlektʃuəl ˈprɑːpərti/" vn="sở hữu trí tuệ" t="noun" >}}, but the {{< vocab w="geopolitical" ipa="/ˌdʒiːoʊpəˈlɪtɪkəl/" vn="địa chính trị" t="adj" >}} tensions surrounding semiconductor exports have further accelerated adoption. Alibaba's Xuantie series of RISC-V processors has already demonstrated {{< vocab w="viable" ipa="/ˈvaɪəbəl/" vn="khả thi" t="adj" >}} performance for server-class applications.

Were ARM to lose its {{< vocab w="stranglehold" ipa="/ˈstræŋɡəlhoʊld/" vn="sự kiểm soát chặt" t="noun" >}} on the mobile chip market, the implications for the entire computing {{< vocab w="ecosystem" ipa="/ˈiːkoʊˌsɪstəm/" vn="hệ sinh thái" t="noun" >}} would be profound. Whether RISC-V can achieve that level of disruption remains to be seen, but the momentum is undeniable.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| semiconductor | /ˌsemikənˈdʌktər/ | chất bán dẫn | noun |
| dominated | /ˈdɑːmɪneɪtɪd/ | bị chi phối | verb |
| proprietary | /prəˈpraɪəteri/ | độc quyền | adj |
| duopoly | /djuˈɑːpəli/ | thế độc quyền đôi | noun |
| licensing fees | /ˈlaɪsənsɪŋ fiːz/ | phí bản quyền | noun |
| catalyze | /ˈkætəlaɪz/ | xúc tác, thúc đẩy | verb |
| consortium | /kənˈsɔːrtiəm/ | tập đoàn liên doanh | noun |
| compelling | /kəmˈpelɪŋ/ | hấp dẫn, thuyết phục | adj |
| modularity | /ˌmɑːdʒʊˈlærəti/ | tính mô-đun | noun |
| extensions | /ɪkˈstenʃənz/ | phần mở rộng | noun |
| tailored | /ˈteɪlərd/ | được tùy chỉnh | adj |
| workloads | /ˈwɜːrkloʊdz/ | khối lượng công việc | noun |
| pronounced | /prəˈnaʊnst/ | rõ rệt | adj |
| intellectual property | /ˌɪntəˈlektʃuəl ˈprɑːpərti/ | sở hữu trí tuệ | noun |
| geopolitical | /ˌdʒiːoʊpəˈlɪtɪkəl/ | địa chính trị | adj |
| viable | /ˈvaɪəbəl/ | khả thi | adj |
| stranglehold | /ˈstræŋɡəlhoʊld/ | sự kiểm soát chặt | noun |

## 🇻🇳 Bản dịch tiếng Việt

Suốt nhiều thập kỷ, ngành bán dẫn đã bị chi phối bởi hai kiến trúc tập lệnh độc quyền: x86, do Intel và AMD kiểm soát, và ARM, được cấp phép bởi công ty Anh Arm Holdings. Điều RISC-V hứa hẹn không gì khác hơn là một sự phá vỡ căn bản thế độc quyền đôi này — một kiến trúc chip mã nguồn mở mà bất kỳ ai cũng có thể sử dụng, chỉnh sửa và sản xuất mà không phải trả phí bản quyền.

Chính tại Đại học California, Berkeley, RISC-V được thai nghén lần đầu vào năm 2010, ban đầu như một dự án học thuật. Những người sáng lập không bao giờ lường trước rằng nghiên cứu của họ sẽ xúc tác cho một phong trào giờ đây được hậu thuẫn bởi các gã khổng lồ công nghệ bao gồm Google, Qualcomm và Samsung. Tập đoàn RISC-V International đã phát triển lên hơn 3.000 thành viên trên 70 quốc gia.

Điều khiến RISC-V đặc biệt hấp dẫn là tính mô-đun của nó. Không giống các kiến trúc nguyên khối, RISC-V cho phép nhà thiết kế chỉ chọn những phần mở rộng họ cần, tạo ra các chip tiết kiệm năng lượng hơn và được tùy chỉnh cho các khối lượng công việc cụ thể. Không đâu lợi thế này rõ rệt hơn trong thị trường IoT và hệ thống nhúng, nơi mức tiêu thụ điện năng là tối quan trọng.

Trung Quốc không chỉ đã đón nhận RISC-V như một phương tiện giảm phụ thuộc vào sở hữu trí tuệ phương Tây, mà những căng thẳng địa chính trị xung quanh xuất khẩu bán dẫn còn đẩy nhanh hơn nữa việc áp dụng. Dòng vi xử lý RISC-V Xuantie của Alibaba đã chứng minh hiệu năng khả thi cho các ứng dụng cấp server.

Nếu ARM mất đi sự kiểm soát chặt trên thị trường chip di động, những hệ quả cho toàn bộ hệ sinh thái điện toán sẽ rất sâu rộng. Liệu RISC-V có thể đạt được mức độ phá vỡ đó hay không vẫn còn phải chờ xem, nhưng đà phát triển là không thể phủ nhận.

## 📝 Phân tích ngữ pháp

### Câu 1: "What RISC-V promises is nothing less than a fundamental disruption of this duopoly."
- **Cấu trúc:** What + S + V + be + NP (nominal relative clause)
- **Ngữ pháp:** What-clause làm chủ ngữ, kết hợp idiom "nothing less than" (không gì khác ngoài) để nhấn mạnh tầm quan trọng
- **Ví dụ tương tự:** "What the open-source community offers is nothing less than a revolution in software development."

### Câu 2: "It was at the University of California, Berkeley, that RISC-V was first conceived in 2010."
- **Cấu trúc:** It was + prepositional phrase + that + S + V (cleft sentence nhấn mạnh nơi chốn)
- **Ngữ pháp:** Cleft sentence tách "at UC Berkeley" ra khỏi câu thường để nhấn mạnh địa điểm
- **Ví dụ tương tự:** "It was in a garage in Palo Alto that Apple was first founded."

### Câu 3: "Never did its creators anticipate that their research would catalyze a movement."
- **Cấu trúc:** Never + did + S + V (đảo ngữ với "never" + past simple)
- **Ngữ pháp:** Negative adverb inversion ở thì quá khứ — "did" được đưa lên trước chủ ngữ
- **Ví dụ tương tự:** "Never did we imagine that a side project would become our main product."

### Câu 4: "Not only has China embraced RISC-V as a means of reducing dependence, but the geopolitical tensions have further accelerated adoption."
- **Cấu trúc:** Not only + has + S + V3, but + S + have + V3 (đảo ngữ tương quan)
- **Ngữ pháp:** Correlative conjunction inversion — "Not only...but" với đảo ngữ ở mệnh đề đầu, hai mệnh đề đều dùng present perfect
- **Ví dụ tương tự:** "Not only has the company expanded internationally, but it has also doubled its workforce."

### Câu 5: "Were ARM to lose its stranglehold on the mobile chip market, the implications would be profound."
- **Cấu trúc:** Were + S + to V, S + would + be (đảo ngữ điều kiện loại 2 với "were to")
- **Ngữ pháp:** Formal conditional inversion — "Were...to" thay cho "If...were to", phong cách trang trọng hơn, thể hiện khả năng giả định
- **Ví dụ tương tự:** "Were Google to open-source its TPU designs, the AI landscape would change overnight."

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What are the two dominant chip architectures that RISC-V is challenging?
2. Why is RISC-V particularly attractive for IoT and embedded systems?
3. How has geopolitics influenced RISC-V adoption, particularly in China?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The company charges high ___ ___ for using its patented technology.
2. The new framework's ___ allows developers to include only the components they need.
3. The startup demonstrated a ___ alternative to existing solutions.
4. The architecture can be ___ to meet the specific needs of different industries.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. x86 (controlled by Intel and AMD) and ARM (licensed by Arm Holdings).
2. Because its modularity allows designers to select only needed extensions, resulting in more power-efficient chips — critical for IoT where power consumption is paramount.
3. China has embraced RISC-V to reduce dependence on Western intellectual property, and US-China semiconductor export tensions have further accelerated adoption.

**Vocabulary:**
1. **licensing fees** — phí bản quyền
2. **modularity** — tính mô-đun
3. **viable** — khả thi
4. **tailored** — được tùy chỉnh
{{< /spoiler >}}
