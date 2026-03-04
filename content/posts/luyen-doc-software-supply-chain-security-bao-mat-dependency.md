---
title: "Bài 142: Software Supply Chain Security — Bảo mật từ dependency"
date: "2023-07-29"
summary: "Luyện đọc tiếng Anh IT: Bảo mật từ dependency — kèm từ vựng, phát âm IPA và bài tập."
slug: "luyen-doc-software-supply-chain-security-bao-mat-dependency"
description: "Luyện đọc tiếng Anh IT chủ đề bảo mật chuỗi cung ứng phần mềm — SBOM, SCA và cách phòng chống tấn công qua dependency, dành cho developer Việt Nam muốn nâng ..."
categories: ["Reading Practice"]
tags: ["upper-intermediate", "cybersecurity", "security"]
ShowToc: true
TocOpen: true
draft: false
---

> 📖 **Cấp độ:** Upper-Intermediate
> ⏱️ **Thời gian đọc:** ~8 phút
> 📰 **Chủ đề:** Software Supply Chain Security

## 📰 Bài đọc (English)

**Software Supply Chain Attacks Surge as Industry Scrambles to Adopt SBOM Standards**

The software industry has been hit by a dramatic increase in {{< vocab w="supply chain" ipa="/səˈplaɪ tʃeɪn/" vn="chuỗi cung ứng" t="noun" >}} attacks, prompting organizations worldwide to {{< vocab w="scrutinize" ipa="/ˈskruːtɪnaɪz/" vn="kiểm tra kỹ lưỡng" t="verb" >}} the open-source {{< vocab w="dependencies" ipa="/dɪˈpendənsiz/" vn="thư viện phụ thuộc" t="noun" >}} embedded in their codebases. According to a recent report by Sonatype, {{< vocab w="malicious" ipa="/məˈlɪʃəs/" vn="độc hại" t="adj" >}} packages uploaded to public registries have increased by 700% over the past three years.

It has been widely acknowledged that the SolarWinds breach of 2020 served as a {{< vocab w="wake-up call" ipa="/ˈweɪk ʌp kɔːl/" vn="hồi chuông cảnh tỉnh" t="phrase" >}} for the entire industry. Had security teams been required to maintain a Software Bill of Materials ({{< vocab w="SBOM" ipa="/ˈɛsˌbɒm/" vn="danh mục thành phần phần mềm" t="noun" >}}) at that time, the {{< vocab w="compromised" ipa="/ˈkɑːmprəmaɪzd/" vn="bị xâm nhập" t="adj" >}} components could have been identified far more rapidly. An SBOM functions as a comprehensive {{< vocab w="inventory" ipa="/ˈɪnvəntɔːri/" vn="danh mục, kho" t="noun" >}} of every library, framework, and tool used in a software product.

Software Composition Analysis ({{< vocab w="SCA" ipa="/ˌɛsˌsiːˈeɪ/" vn="phân tích thành phần phần mềm" t="noun" >}}) tools have been increasingly adopted to {{< vocab w="automate" ipa="/ˈɔːtəmeɪt/" vn="tự động hóa" t="verb" >}} the detection of {{< vocab w="vulnerabilities" ipa="/ˌvʌlnərəˈbɪlɪtiz/" vn="lỗ hổng bảo mật" t="noun" >}} in third-party code. These tools are designed to scan {{< vocab w="repositories" ipa="/rɪˈpɑːzɪtɔːriz/" vn="kho mã nguồn" t="noun" >}} and flag outdated or {{< vocab w="compromised" ipa="/ˈkɑːmprəmaɪzd/" vn="bị xâm nhập" t="adj" >}} packages before they are deployed to production.

The U.S. government's executive order on cybersecurity, signed in 2021, {{< vocab w="mandated" ipa="/ˈmændeɪtɪd/" vn="bắt buộc" t="verb" >}} that all software vendors selling to federal agencies must provide SBOMs. Industry experts have suggested that if this requirement had been {{< vocab w="imposed" ipa="/ɪmˈpoʊzd/" vn="áp đặt" t="verb" >}} a decade earlier, the {{< vocab w="proliferation" ipa="/prəˌlɪfəˈreɪʃən/" vn="sự phổ biến, lan rộng" t="noun" >}} of unvetted dependencies would not have reached such alarming levels. Critics, however, have argued that SBOMs alone are insufficient — they must be {{< vocab w="complemented" ipa="/ˈkɑːmplɪmentɪd/" vn="bổ sung" t="verb" >}} by continuous monitoring and {{< vocab w="remediation" ipa="/rɪˌmiːdiˈeɪʃən/" vn="khắc phục" t="noun" >}} workflows to be truly effective.

## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **supply chain** | /səˈplaɪ tʃeɪn/ | chuỗi cung ứng | noun |
| **scrutinize** | /ˈskruːtɪnaɪz/ | kiểm tra kỹ lưỡng | verb |
| **dependencies** | /dɪˈpendənsiz/ | thư viện phụ thuộc | noun |
| **malicious** | /məˈlɪʃəs/ | độc hại | adj |
| **wake-up call** | /ˈweɪk ʌp kɔːl/ | hồi chuông cảnh tỉnh | phrase |
| **SBOM** | /ˈɛsˌbɒm/ | danh mục thành phần phần mềm | noun |
| **compromised** | /ˈkɑːmprəmaɪzd/ | bị xâm nhập | adj |
| **inventory** | /ˈɪnvəntɔːri/ | danh mục, kho | noun |
| **SCA** | /ˌɛsˌsiːˈeɪ/ | phân tích thành phần phần mềm | noun |
| **automate** | /ˈɔːtəmeɪt/ | tự động hóa | verb |
| **vulnerabilities** | /ˌvʌlnərəˈbɪlɪtiz/ | lỗ hổng bảo mật | noun |
| **repositories** | /rɪˈpɑːzɪtɔːriz/ | kho mã nguồn | noun |
| **mandated** | /ˈmændeɪtɪd/ | bắt buộc | verb |
| **imposed** | /ɪmˈpoʊzd/ | áp đặt | verb |
| **proliferation** | /prəˌlɪfəˈreɪʃən/ | sự phổ biến, lan rộng | noun |
| **complemented** | /ˈkɑːmplɪmentɪd/ | bổ sung | verb |
| **remediation** | /rɪˌmiːdiˈeɪʃən/ | khắc phục | noun |

## 🇻🇳 Bản dịch tiếng Việt

**Tấn công chuỗi cung ứng phần mềm tăng vọt khi ngành công nghiệp chạy đua áp dụng tiêu chuẩn SBOM**

Ngành công nghiệp phần mềm đã bị tấn công bởi sự gia tăng đáng kể các cuộc tấn công chuỗi cung ứng, thúc đẩy các tổ chức trên toàn thế giới kiểm tra kỹ lưỡng các thư viện phụ thuộc mã nguồn mở được nhúng trong codebase của họ. Theo báo cáo gần đây của Sonatype, các gói phần mềm độc hại được tải lên các registry công khai đã tăng 700% trong ba năm qua.

Người ta đã thừa nhận rộng rãi rằng vụ vi phạm SolarWinds năm 2020 đã đóng vai trò như hồi chuông cảnh tỉnh cho toàn ngành. Nếu các đội bảo mật đã được yêu cầu duy trì Danh mục Thành phần Phần mềm (SBOM) vào thời điểm đó, các thành phần bị xâm nhập đã có thể được xác định nhanh hơn nhiều. SBOM hoạt động như một danh mục toàn diện của mọi thư viện, framework và công cụ được sử dụng trong sản phẩm phần mềm.

Các công cụ Phân tích Thành phần Phần mềm (SCA) ngày càng được áp dụng để tự động hóa việc phát hiện lỗ hổng bảo mật trong mã bên thứ ba. Các công cụ này được thiết kế để quét kho mã nguồn và đánh dấu các gói lỗi thời hoặc bị xâm nhập trước khi chúng được triển khai lên môi trường production.

Sắc lệnh hành pháp về an ninh mạng của Chính phủ Mỹ, ký năm 2021, bắt buộc tất cả nhà cung cấp phần mềm bán cho cơ quan liên bang phải cung cấp SBOM. Các chuyên gia trong ngành đã gợi ý rằng nếu yêu cầu này đã được áp đặt sớm hơn một thập kỷ, sự phổ biến của các dependency không được kiểm tra đã không đạt đến mức đáng báo động như vậy. Tuy nhiên, những người phản biện cho rằng SBOM đơn thuần là chưa đủ — chúng phải được bổ sung bởi quy trình giám sát liên tục và khắc phục để thực sự hiệu quả.

## 📝 Phân tích ngữ pháp

### Câu 1: "Had security teams been required to maintain a Software Bill of Materials at that time, the compromised components could have been identified far more rapidly."
- **Cấu trúc:** Conditional Type 3 — đảo ngữ + Passive Voice
- **Ngữ pháp:** "Had + S + been V3, S + could have been V3" — câu điều kiện loại 3 đảo ngữ kết hợp bị động kép, diễn tả giả định không xảy ra trong quá khứ
- **Ví dụ tương tự:** "Had the logs been reviewed regularly, the intrusion could have been detected earlier."

### Câu 2: "It has been widely acknowledged that the SolarWinds breach served as a wake-up call for the entire industry."
- **Cấu trúc:** Impersonal Passive + Reported Speech
- **Ngữ pháp:** "It has been + adv + V3 + that clause" — cấu trúc bị động vô nhân xưng dùng để tường thuật ý kiến chung mà không chỉ rõ nguồn
- **Ví dụ tương tự:** "It has been widely reported that the vulnerability affected millions of devices."

### Câu 3: "These tools are designed to scan repositories and flag outdated or compromised packages before they are deployed to production."
- **Cấu trúc:** Passive + purpose infinitive + temporal clause
- **Ngữ pháp:** "are designed to + V" — bị động chỉ mục đích thiết kế; "before they are deployed" — mệnh đề thời gian với thì hiện tại đơn mang nghĩa tương lai
- **Ví dụ tương tự:** "The CI pipeline is configured to run tests before changes are merged."

### Câu 4: "Industry experts have suggested that if this requirement had been imposed a decade earlier, the proliferation of unvetted dependencies would not have reached such alarming levels."
- **Cấu trúc:** Reported Speech + Conditional Type 3 + Passive
- **Ngữ pháp:** "have suggested that + if + had been V3, would not have V3" — tường thuật gián tiếp chứa câu điều kiện loại 3, diễn tả hối tiếc về chính sách quá khứ
- **Ví dụ tương tự:** "Researchers have argued that if encryption had been mandated earlier, fewer data breaches would have occurred."

### Câu 5: "They must be complemented by continuous monitoring and remediation workflows to be truly effective."
- **Cấu trúc:** Modal Passive + purpose infinitive
- **Ngữ pháp:** "must be V3 + by" — bị động với modal verb chỉ sự cần thiết; "to be truly effective" — mệnh đề mục đích dạng infinitive
- **Ví dụ tương tự:** "Automated tests must be supplemented by manual code reviews to catch edge cases."

## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. By how much have malicious packages on public registries increased according to Sonatype?
2. What role does an SBOM play in software security?
3. Why do critics argue that SBOMs alone are insufficient?

### Vocabulary (Từ vựng)
Điền từ thích hợp:

1. The security audit revealed several ___ in the legacy codebase.
2. The government ___ that all contractors use multi-factor authentication.
3. The breach served as a ___ for companies that had neglected cybersecurity.
4. Developers must carefully ___ all third-party libraries before adding them to the project.
5. Static analysis tools should be ___ by peer code reviews for maximum coverage.

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. Malicious packages have increased by 700% over the past three years.
2. An SBOM functions as a comprehensive inventory of every library, framework, and tool used in a software product, helping identify compromised components quickly.
3. Because SBOMs must be complemented by continuous monitoring and remediation workflows to be truly effective — they are only one piece of the security puzzle.

**Vocabulary:**
1. **vulnerabilities** — lỗ hổng bảo mật
2. **mandated** — bắt buộc
3. **wake-up call** — hồi chuông cảnh tỉnh
4. **scrutinize** — kiểm tra kỹ lưỡng
5. **complemented** — bổ sung
{{< /spoiler >}}

---

## 📚 Bài viết liên quan

- [Zero trust security — không tin ai, xác thực mọi thứ](/posts/luyen-doc-zero-trust-security-xac-thuc-moi-thu/)
- [Bài 147: Passkey thay thế password — Tương lai không mật khẩu](/posts/luyen-doc-passkey-thay-the-password-tuong-lai-khong-mat-khau/)
- [Bài 152: Sovereign Cloud — Chính Phủ Tự Xây Cloud Riêng](/posts/luyen-doc-sovereign-cloud-chinh-phu-xay-cloud-rieng/)


---

## 🎯 Kết luận

Bạn vừa luyện đọc xong một bài báo tiếng Anh IT! Hãy quay lại đọc thêm các bài khác để nâng cao kỹ năng nhé.

👉 [Xem thêm bài luyện đọc](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
