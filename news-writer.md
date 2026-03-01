# Task: Viết bài luyện đọc News Technology song ngữ

## Hugo Front Matter
```yaml
---
title: "[TITLE — Vietnamese]"
date: "[DATE]"
slug: "[seo-slug-tieng-viet]"
description: "[Meta description ~155 chars, Vietnamese]"
categories: ["Reading Practice"]
tags: ["[level tag]", "[topic tags max 2]"]
ShowToc: true
TocOpen: true
draft: false
---
```

## Level Tags
- Level 1-30: `"starter"`
- Level 31-60: `"elementary"`
- Level 61-90: `"pre-intermediate"`
- Level 91-130: `"intermediate"`
- Level 131-160: `"upper-intermediate"`
- Level 161-185: `"advanced"`
- Level 186-200: `"master"`

## Topic Tags (chọn 1-2)
`ai`, `smartphone`, `social-media`, `cybersecurity`, `cloud`, `programming`, `big-tech`, `startup`, `space-tech`, `ev-iot`, `blockchain`, `green-tech`

## Cấu trúc mỗi bài

### 1. Header info
```markdown
> 📖 **Cấp độ:** [Starter/Elementary/Pre-Intermediate/Intermediate/Upper-Intermediate/Advanced/Master]
> ⏱️ **Thời gian đọc:** ~[X] phút
> 📰 **Chủ đề:** [Topic]
```

### 2. Bài đọc tiếng Anh
```markdown
## 📰 Bài đọc (English)

[Nội dung bài báo tiếng Anh. Các từ vựng quan trọng in đậm **bold**]
```

### 3. Từ vựng chính
```markdown
## 📚 Từ vựng chính

| English | IPA | Tiếng Việt | Loại từ |
|---------|-----|------------|---------|
| **launch** | /lɔːntʃ/ | ra mắt, phát hành | verb |
```

### 4. Bản dịch tiếng Việt
```markdown
## 🇻🇳 Bản dịch tiếng Việt

[Dịch tự nhiên, không dịch máy. Dịch sát nghĩa nhưng mượt tiếng Việt.]
```

### 5. Phân tích ngữ pháp
```markdown
## 📝 Phân tích ngữ pháp

### Câu 1: "[trích câu English]"
- **Cấu trúc:** [giải thích pattern]
- **Ngữ pháp:** [tên grammar point]
- **Ví dụ tương tự:** [1 ví dụ khác cùng cấu trúc]
```
Phân tích 3-5 câu tiêu biểu tùy level:
- Level 1-2: 3 câu, giải thích đơn giản
- Level 3-4: 4 câu, chi tiết hơn
- Level 5-7: 5 câu, phân tích sâu

### 6. Bài tập
```markdown
## ✏️ Bài tập

### Comprehension (Đọc hiểu)
1. [Câu hỏi về nội dung bài]
2. [...]
3. [...]

### Vocabulary (Từ vựng)
Điền từ thích hợp:
1. The company plans to ___ a new product next month.
2. [...]

{{< spoiler "✅ Đáp án" >}}
**Comprehension:**
1. [Đáp án + giải thích ngắn]

**Vocabulary:**
1. **launch** — ra mắt sản phẩm
{{< /spoiler >}}
```

## QUAN TRỌNG: Vocab Highlight Shortcode
Trong phần bài đọc tiếng Anh, THAY VÌ in **bold** từ vựng, dùng shortcode:
```
{{</* vocab w="launch" ipa="/lɔːntʃ/" vn="ra mắt" t="verb" */>}}
```
Tham số:
- `w` = từ tiếng Anh (bắt buộc)
- `ipa` = phiên âm IPA (bắt buộc)
- `vn` = nghĩa tiếng Việt (bắt buộc)
- `t` = loại từ: noun/verb/adj/adv/phrase (tùy chọn)

Ví dụ trong bài đọc:
```markdown
Apple has {{</* vocab w="launched" ipa="/lɔːntʃt/" vn="ra mắt" t="verb" */>}} its new iPhone with a powerful {{</* vocab w="processor" ipa="/ˈprɑːsesər/" vn="bộ xử lý" t="noun" */>}}.
```

Khi người đọc click vào từ highlighted → popup hiện nghĩa + IPA + nút nghe phát âm.

## RULES
- Nội dung bài đọc phải REALISTIC — viết như bài báo thật (TechCrunch, The Verge, Ars Technica style)
- KHÔNG copy bài báo thật, nhưng phải tự nhiên như thật
- Từ vựng PHẢI dùng shortcode `{{</* vocab */>}}` trong bài đọc (KHÔNG dùng **bold**)
- IPA phải chính xác
- Dịch tiếng Việt phải tự nhiên, KHÔNG dịch Google Translate style
- Ngữ pháp giải thích phải phù hợp level
- Level thấp: câu ngắn, từ đơn giản, giải thích nhiều
- Level cao: câu dài, từ academic, phân tích sâu
- Mỗi bài tập có 3 comprehension + 3-5 vocabulary questions
- Slug SEO-friendly: `luyen-doc-[topic]-[keyword]`
- Date format: 2023-XX-XX (dates assigned by batch)
