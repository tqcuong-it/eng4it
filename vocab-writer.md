# Task: Viết bài từ vựng IT cho eng4it.com

## Yêu cầu chung
Viết bài blog tiếng Việt dạy từ vựng tiếng Anh chuyên ngành IT. Target: developer Việt Nam muốn improve English.

## Format Hugo front matter
```yaml
---
title: "[TITLE]"
date: "[DATE]"
slug: "[SEO-SLUG]"
description: "[META DESCRIPTION ~155 chars]"
categories: ["IT English"]
tags: ["[relevant tags]"]
---
```

## Format nội dung

### Cấu trúc bài viết:
1. **Giới thiệu** (2-3 câu) — tại sao topic này quan trọng với dev
2. **Bảng từ vựng** (10-20 từ) — chia theo nhóm nhỏ 3-5 từ

Mỗi nhóm:
```markdown
### 🔹 [Tên nhóm]

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| instance | /ˈɪnstəns/ | phiên bản (máy chủ ảo) | We need to launch a new **instance** for the staging environment. |
```

3. **💡 Mẹo ghi nhớ** — 2-3 tips ngắn
4. **📝 Bài tập** — 5 câu Fill in the blank

```markdown
## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. We need to create a new S3 ___ to store the uploaded files.
2. The ___ policy allows read-only access to the database.
...
```

5. **Đáp án** — dùng spoiler shortcode

```markdown
{{< spoiler "✅ Đáp án" >}}
1. **bucket** — S3 bucket dùng để lưu trữ objects
2. **IAM** — IAM policy định nghĩa quyền truy cập
...
{{< /spoiler >}}
```

6. **Tổng kết** — 2-3 câu kết

## Rules:
- Viết bằng tiếng Việt, thuật ngữ giữ nguyên tiếng Anh
- IPA phải chính xác
- Example sentences phải tự nhiên, real-world context
- Slug phải SEO-friendly: `tu-vung-aws-ec2-thuat-ngu-may-chu-ao`
- Date dùng đúng date được assign
- KHÔNG dùng markdown table có dấu `|` trong example (gây lỗi Hugo)
- Target 800-1200 từ mỗi bài
- Tags tối đa 3, chọn từ: aws, cloud-computing, devops, docker, git, networking, database, api, security, frontend, backend, testing, agile, workplace-english, interview, linux
- Giọng văn thân thiện, dễ hiểu, như senior dev giải thích cho junior
