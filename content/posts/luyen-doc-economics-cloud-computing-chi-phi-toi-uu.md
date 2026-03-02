---
title: "The Economics of Cloud Computing — Chi phí ẩn và tối ưu hóa"
date: "2023-08-29"
slug: "luyen-doc-economics-cloud-computing-chi-phi-toi-uu"
description: "Bài luyện đọc cấp độ Advanced về kinh tế cloud computing, các chi phí ẩn và chiến lược tối ưu hóa chi phí đám mây."
categories: ["Reading Practice"]
tags: ["advanced", "cloud"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Advanced
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** Cloud Economics

## 📰 Bài đọc (English)

**The Hidden Costs of Cloud Computing and the Rise of Repatriation**

Scarcely a decade ago, the migration to cloud infrastructure was heralded as an unequivocal cost-saving measure. Today, a growing number of enterprises are discovering that the {{< vocab w="economics" ipa="/ˌiːkəˈnɒmɪks/" vn="kinh tế học" t="noun" >}} of cloud computing are far more {{< vocab w="nuanced" ipa="/ˈnjuːɑːnst/" vn="tinh tế, nhiều sắc thái" t="adj" >}} than initial projections suggested, with some companies reporting annual cloud expenditures exceeding what their on-premises infrastructure would have cost by a factor of three.

The phenomenon, increasingly termed "cloud {{< vocab w="repatriation" ipa="/riːˌpeɪtriˈeɪʃən/" vn="hồi hương, đưa trở về" t="noun" >}}," has gained {{< vocab w="momentum" ipa="/moʊˈmentəm/" vn="đà, động lực" t="noun" >}} following high-profile cases. Basecamp's parent company 37signals, having migrated its {{< vocab w="workloads" ipa="/ˈwɜːrkloʊdz/" vn="khối lượng công việc" t="noun" >}} off AWS, reported saving over $7 million across five years. Dropbox's earlier departure from the cloud yielded {{< vocab w="comparable" ipa="/ˈkɒmpərəbl/" vn="tương đương" t="adj" >}} savings, challenging the assumption that cloud adoption represents an irreversible trajectory.

At the heart of the issue lies {{< vocab w="vendor lock-in" ipa="/ˈvendər lɒk ɪn/" vn="bị ràng buộc nhà cung cấp" t="noun" >}} — a predicament wherein organizations, having built their systems atop {{< vocab w="proprietary" ipa="/prəˈpraɪəteri/" vn="độc quyền" t="adj" >}} services, find migration prohibitively expensive. {{< vocab w="Egress" ipa="/ˈiːɡres/" vn="lưu lượng ra" t="noun" >}} fees — charges for transferring data out of a cloud provider's network — exemplify this dynamic. Were a mid-sized company to migrate 500 terabytes from AWS, egress charges alone could exceed $40,000, creating what critics describe as a "data {{< vocab w="hostage" ipa="/ˈhɒstɪdʒ/" vn="con tin" t="noun" >}}" scenario.

The {{< vocab w="opacity" ipa="/oʊˈpæsəti/" vn="sự thiếu minh bạch" t="noun" >}} of cloud pricing further compounds the problem. With hundreds of individual services, each carrying its own pricing {{< vocab w="tiers" ipa="/tɪrz/" vn="các mức, bậc" t="noun" >}} and variables, organizations frequently discover unexpected charges months after {{< vocab w="provisioning" ipa="/prəˈvɪʒənɪŋ/" vn="cấp phát tài nguyên" t="noun" >}} resources. Not until the monthly bill arrives do many teams realize the true cost of their architectural decisions.

However, {{< vocab w="proponents" ipa="/prəˈpoʊnənts/" vn="người ủng hộ" t="noun" >}} of cloud computing argue that repatriation narratives oversimplify a complex calculus. The total cost of ownership for on-premises infrastructure — encompassing hardware procurement, facilities management, security {{< vocab w="compliance" ipa="/kəmˈplaɪəns/" vn="tuân thủ" t="noun" >}}, and the opportunity cost of engineering talent diverted from product development — often exceeds cloud expenditure when properly accounted for.

A {{< vocab w="hybrid" ipa="/ˈhaɪbrɪd/" vn="lai, kết hợp" t="adj" >}} approach, combining reserved cloud instances for variable workloads with on-premises infrastructure for {{< vocab w="predictable" ipa="/prɪˈdɪktəbl/" vn="có thể dự đoán" t="adj" >}} baseline capacity, has emerged as the prevailing strategy among {{< vocab w="sophisticated" ipa="/səˈfɪstɪkeɪtɪd/" vn="tinh vi, phức tạp" t="adj" >}} enterprises. Were the industry to develop truly {{< vocab w="interoperable" ipa="/ˌɪntərˈɒpərəbl/" vn="có khả năng tương tác" t="adj" >}} standards, the competitive landscape — and pricing — might look radically different.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **economics** | /ˌiːkəˈnɒmɪks/ | kinh tế học | noun |
| **nuanced** | /ˈnjuːɑːnst/ | tinh tế, nhiều sắc thái | adj |
| **repatriation** | /riːˌpeɪtriˈeɪʃən/ | hồi hương, đưa trở về | noun |
| **momentum** | /moʊˈmentəm/ | đà, động lực | noun |
| **workloads** | /ˈwɜːrkloʊdz/ | khối lượng công việc | noun |
| **comparable** | /ˈkɒmpərəbl/ | tương đương | adj |
| **vendor lock-in** | /ˈvendər lɒk ɪn/ | bị ràng buộc nhà cung cấp | noun |
| **proprietary** | /prəˈpraɪəteri/ | độc quyền | adj |
| **egress** | /ˈiːɡres/ | lưu lượng ra | noun |
| **hostage** | /ˈhɒstɪdʒ/ | con tin | noun |
| **opacity** | /oʊˈpæsəti/ | sự thiếu minh bạch | noun |
| **tiers** | /tɪrz/ | các mức, bậc | noun |
| **provisioning** | /prəˈvɪʒənɪŋ/ | cấp phát tài nguyên | noun |
| **proponents** | /prəˈpoʊnənts/ | người ủng hộ | noun |
| **compliance** | /kəmˈplaɪəns/ | tuân thủ | noun |
| **hybrid** | /ˈhaɪbrɪd/ | lai, kết hợp | adj |
| **predictable** | /prɪˈdɪktəbl/ | có thể dự đoán | adj |
| **sophisticated** | /səˈfɪstɪkeɪtɪd/ | tinh vi, phức tạp | adj |
| **interoperable** | /ˌɪntərˈɒpərəbl/ | có khả năng tương tác | adj |

## 🇻🇳 Bản dịch tiếng Việt

**Chi phí ẩn của điện toán đám mây và xu hướng hồi hương hạ tầng**

Mới chỉ một thập kỷ trước, việc di chuyển sang hạ tầng đám mây được ca ngợi như một biện pháp tiết kiệm chi phí rõ ràng. Ngày nay, ngày càng nhiều doanh nghiệp nhận ra rằng kinh tế học của điện toán đám mây phức tạp hơn nhiều so với dự đoán ban đầu, với một số công ty báo cáo chi tiêu đám mây hàng năm vượt quá chi phí hạ tầng tại chỗ gấp ba lần.

Hiện tượng này, ngày càng được gọi là "hồi hương đám mây," đã tăng đà sau các trường hợp nổi bật. Công ty mẹ của Basecamp là 37signals, sau khi chuyển khối lượng công việc khỏi AWS, báo cáo tiết kiệm hơn 7 triệu đô la trong năm năm. Việc Dropbox rời đám mây trước đó mang lại khoản tiết kiệm tương đương, thách thức giả định rằng việc áp dụng đám mây là quỹ đạo không thể đảo ngược.

Cốt lõi của vấn đề nằm ở sự ràng buộc nhà cung cấp — tình cảnh mà các tổ chức, sau khi xây hệ thống trên các dịch vụ độc quyền, thấy chi phí di chuyển cao đến mức không khả thi. Phí lưu lượng ra — phí chuyển dữ liệu ra khỏi mạng nhà cung cấp đám mây — minh họa cho động lực này. Nếu một công ty quy mô trung bình chuyển 500 terabyte khỏi AWS, chỉ riêng phí lưu lượng ra có thể vượt quá 40.000 đô la, tạo ra tình huống mà giới phê bình mô tả là "dữ liệu bị bắt làm con tin."

Sự thiếu minh bạch trong giá đám mây càng làm trầm trọng thêm vấn đề. Với hàng trăm dịch vụ riêng lẻ, mỗi dịch vụ có các mức giá và biến số riêng, các tổ chức thường phát hiện phí phát sinh bất ngờ nhiều tháng sau khi cấp phát tài nguyên. Phải đến khi hóa đơn hàng tháng đến, nhiều đội mới nhận ra chi phí thực của các quyết định kiến trúc.

Tuy nhiên, những người ủng hộ điện toán đám mây lập luận rằng các câu chuyện hồi hương đang đơn giản hóa quá mức một phép tính phức tạp. Tổng chi phí sở hữu hạ tầng tại chỗ — bao gồm mua sắm phần cứng, quản lý cơ sở vật chất, tuân thủ bảo mật và chi phí cơ hội của nhân tài kỹ thuật bị chuyển hướng khỏi phát triển sản phẩm — thường vượt quá chi tiêu đám mây khi tính toán đầy đủ.

Cách tiếp cận kết hợp, kết hợp các phiên bản đám mây đặt trước cho khối lượng công việc biến đổi với hạ tầng tại chỗ cho công suất nền có thể dự đoán, đã nổi lên như chiến lược phổ biến tại các doanh nghiệp tinh vi. Nếu ngành phát triển được các tiêu chuẩn tương tác thực sự, bức tranh cạnh tranh — và giá cả — có thể hoàn toàn khác.

## 📝 Phân tích ngữ pháp

### Câu 1: "Scarcely a decade ago, the migration to cloud infrastructure was heralded as an unequivocal cost-saving measure."
- **Cấu trúc:** Negative adverb + time phrase, S + passive voice
- **Ngữ pháp:** "Scarcely" nhấn mạnh khoảng thời gian ngắn. "Was heralded as" là bị động với giới từ, nghĩa "được ca ngợi như."
- **Ví dụ tương tự:** "Barely five years ago, this technology was considered experimental."

### Câu 2: "Basecamp's parent company 37signals, having migrated its workloads off AWS, reported saving over $7 million across five years."
- **Cấu trúc:** S + appositive + perfect participial phrase + V
- **Ngữ pháp:** "Having migrated" — phân từ hoàn thành chèn giữa diễn tả hành động hoàn tất trước hành động chính "reported". Appositive "37signals" giải thích thêm cho chủ ngữ.
- **Ví dụ tương tự:** "Netflix, having rebuilt its architecture on microservices, achieved unprecedented scalability."

### Câu 3: "Were a mid-sized company to migrate 500 terabytes from AWS, egress charges alone could exceed $40,000."
- **Cấu trúc:** Subjunctive inversion — Were + S + to V, S + could V
- **Ngữ pháp:** Đảo ngữ điều kiện loại 2. "Alone" đứng sau chủ ngữ để nhấn mạnh "chỉ riêng phí egress".
- **Ví dụ tương tự:** "Were a startup to scale without optimization, costs could spiral out of control."

### Câu 4: "Not until the monthly bill arrives do many teams realize the true cost of their architectural decisions."
- **Cấu trúc:** Not until + clause + auxiliary + S + V
- **Ngữ pháp:** Đảo ngữ với "Not until" — mệnh đề phụ giữ trật tự bình thường, mệnh đề chính đảo "do" lên trước "many teams". Nhấn mạnh sự chậm trễ nhận ra.
- **Ví dụ tương tự:** "Not until the system crashed did the team discover the memory leak."

### Câu 5: "Were the industry to develop truly interoperable standards, the competitive landscape — and pricing — might look radically different."
- **Cấu trúc:** Subjunctive inversion + dash parenthetical
- **Ngữ pháp:** Đảo ngữ điều kiện loại 2 kết hợp dấu gạch ngang chèn thông tin bổ sung "— and pricing —". "Might" thay "would" để giảm mức chắc chắn.
- **Ví dụ tương tự:** "Were open-source alternatives to mature, enterprise adoption — and vendor dependency — would change dramatically."

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. What is "cloud repatriation" and why is it gaining momentum?
2. How does vendor lock-in affect organizations' ability to leave cloud providers?
3. What argument do cloud proponents make against the repatriation narrative?

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The company's ___ pricing made it impossible to predict monthly costs.
2. High ___ fees discourage companies from transferring data to competing providers.
3. A ___ infrastructure combines both cloud and on-premises resources.
4. The platform uses ___ formats that are incompatible with other services.
5. Automated ___ of cloud resources can lead to unexpected charges if not monitored.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Cloud repatriation is the movement of workloads from public cloud back to on-premises infrastructure. It is gaining momentum because companies like 37signals and Dropbox have reported significant cost savings after leaving the cloud.
2. Vendor lock-in makes migration prohibitively expensive through proprietary services and egress fees, effectively holding organizations' data hostage.
3. Cloud proponents argue that the total cost of ownership for on-premises infrastructure — including hardware, facilities, security compliance, and engineering opportunity cost — often exceeds cloud expenditure when fully accounted for.

**Vocabulary:**
1. **opacity** — sự thiếu minh bạch trong giá cả
2. **egress** — lưu lượng dữ liệu ra
3. **hybrid** — lai, kết hợp
4. **proprietary** — độc quyền
5. **provisioning** — cấp phát tài nguyên
{{< /spoiler >}}
