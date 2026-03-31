---
title: "Cách Viết Số, Ngày Tháng, Đơn Vị Trong Tiếng Anh IT — Chuẩn Quốc Tế"
slug: "cach-viet-so-ngay-thang-don-vi-trong-tieng-anh-it"
date: 2026-04-01
summary: "Hướng dẫn cách viết số, ngày tháng, đơn vị đo lường trong tài liệu IT tiếng Anh — chuẩn quốc tế, không lo sai format."
description: "Cách viết số, ngày tháng, đơn vị trong tiếng Anh IT: format ISO 8601, số thập phân, đơn vị dung lượng (KB/MB/GB), thời gian, tiền tệ. Bảng so sánh chuẩn Mỹ-Anh-ISO, ví dụ thực tế trong documentation, email, code comment."
tags: ["technical-writing", "numbers", "date-format", "tieng-anh-can-ban", "developer"]
categories: ["tieng-anh-can-ban"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn viết trong docs: **"03/04/2026"** — Khách hàng Mỹ đọc là **tháng 3 ngày 4**, khách hàng Anh đọc là **ngày 3 tháng 4**. Ai đúng? 😅

Hay trong email: *"The file size is 1.500 KB"* — Người Mỹ hiểu là **1 phẩy 5 KB**, người Đức hiểu là **1500 KB**.

Viết số, ngày tháng, đơn vị tưởng đơn giản nhưng lại là **nguồn gây hiểu nhầm lớn nhất** trong giao tiếp IT quốc tế. Bài này sẽ giúp bạn nắm vững cách viết **chuẩn quốc tế**, áp dụng ngay trong documentation, email, code comment, và specs.

---

## 1. Cách Viết Số (Numbers)

### 1.1 Quy tắc cơ bản

| Quy tắc | Ví dụ | Ghi chú |
|---|---|---|
| Số từ 1–9: viết chữ | *three servers, five bugs* | Trong văn bản thông thường |
| Số từ 10 trở lên: viết số | *15 endpoints, 200 users* | Dễ đọc hơn |
| Đầu câu: luôn viết chữ | *Twenty users reported...* | Không bắt đầu câu bằng số |
| Trong code/docs kỹ thuật: luôn viết số | *3 retries, 5 seconds* | Precision quan trọng hơn style |

### 1.2 Dấu phẩy và dấu chấm — Khác nhau hoàn toàn!

Đây là **lỗi phổ biến nhất** của developer Việt:

| Quốc gia | Dấu ngàn (thousands) | Dấu thập phân (decimal) | Ví dụ |
|---|---|---|---|
| 🇺🇸 Mỹ / 🇬🇧 Anh | **Dấu phẩy** `,` | **Dấu chấm** `.` | 1,500.75 |
| 🇻🇳 Việt Nam / 🇩🇪 Đức | **Dấu chấm** `.` | **Dấu phẩy** `,` | 1.500,75 |
| 🌐 Chuẩn ISO (khuyên dùng) | **Khoảng trắng** ` ` | **Dấu chấm** `.` | 1 500.75 |

> 💡 **Tip cho developer:** Trong tài liệu IT tiếng Anh, **luôn dùng format Mỹ/Anh** — dấu phẩy ngàn, dấu chấm thập phân. Đây là chuẩn phổ biến nhất trong ngành.

### 1.3 Ví dụ thực tế

```
❌ Sai: "Response time is 2.500 ms" (Người Mỹ đọc: 2.5 ms!)
✅ Đúng: "Response time is 2,500 ms" (hoặc "2500 ms")

❌ Sai: "The API handles 1.000.000 requests/day"
✅ Đúng: "The API handles 1,000,000 requests/day"

❌ Sai: "Price: $10.500,00"
✅ Đúng: "Price: $10,500.00"
```

### 1.4 Trong code comment

```javascript
// ❌ Process 1.000 records in batch
// ✅ Process 1,000 records in batch (hoặc 1000)

// ❌ Timeout: 2,5 seconds
// ✅ Timeout: 2.5 seconds

// ❌ Max file size: 10.485.760 bytes
// ✅ Max file size: 10,485,760 bytes (or ~10 MB)
```

---

## 2. Cách Viết Ngày Tháng (Dates)

### 2.1 Các format phổ biến

| Format | Ví dụ | Dùng ở đâu |
|---|---|---|
| 🇺🇸 **MM/DD/YYYY** | 04/01/2026 | Mỹ — email, docs nội bộ |
| 🇬🇧 **DD/MM/YYYY** | 01/04/2026 | Anh, Úc, châu Âu |
| 🌐 **YYYY-MM-DD** (ISO 8601) | 2026-04-01 | **Chuẩn IT quốc tế** ⭐ |
| Viết đầy đủ | April 1, 2026 | Email formal, blog, report |
| Viết tắt | Apr 1, 2026 | Email, chat, comments |

> 🎯 **Best Practice trong IT:** Luôn dùng **ISO 8601 (YYYY-MM-DD)** trong code, database, API, log, documentation kỹ thuật. Format này **không bao giờ gây nhầm lẫn**.

### 2.2 Bảng so sánh: Cùng một ngày, viết khác nhau

| Ngày | Format Mỹ 🇺🇸 | Format Anh 🇬🇧 | ISO 8601 🌐 |
|---|---|---|---|
| Ngày 1 tháng 4 | 04/01/2026 | 01/04/2026 | 2026-04-01 |
| Ngày 12 tháng 3 | 03/12/2026 | 12/03/2026 | 2026-03-12 |
| Ngày 5 tháng 11 | 11/05/2026 | 05/11/2026 | 2026-11-05 |

> ⚠️ **Nhìn kỹ:** `03/12/2026` — là tháng 3 ngày 12, hay ngày 3 tháng 12? **Không thể biết** nếu không biết format! Đây là lý do ISO 8601 tồn tại.

### 2.3 Ví dụ thực tế

**Trong email:**
```
❌ "The deadline is 05/06/2026" (Tháng 5 hay tháng 6?)
✅ "The deadline is June 5, 2026" (Rõ ràng!)
✅ "The deadline is 2026-06-05" (ISO — dùng trong kỹ thuật)
```

**Trong API response:**
```json
{
  "created_at": "2026-04-01T10:30:00Z",
  "updated_at": "2026-04-01T14:45:30+07:00"
}
```

**Trong code comment:**
```python
# ❌ Fixed login bug on 1/4/2026
# ✅ Fixed login bug on 2026-04-01
# ✅ Fixed login bug on Apr 1, 2026
```

### 2.4 Từ vựng ngày tháng

| Tiếng Anh | Phát âm IPA | Tiếng Việt |
|---|---|---|
| date | /deɪt/ | ngày tháng |
| deadline | /ˈdɛd.laɪn/ | hạn chót |
| timestamp | /ˈtaɪm.stæmp/ | mốc thời gian |
| timezone | /ˈtaɪm.zoʊn/ | múi giờ |
| epoch | /ˈiː.pɒk/ | thời điểm gốc (Unix) |
| UTC | /juː.tiː.ˈsiː/ | giờ phối hợp quốc tế |
| fiscal year | /ˈfɪs.kəl jɪr/ | năm tài chính |
| quarter (Q1-Q4) | /ˈkwɔːr.tər/ | quý |
| business day | /ˈbɪz.nɪs deɪ/ | ngày làm việc |
| calendar day | /ˈkæl.ən.dər deɪ/ | ngày dương lịch |

---

## 3. Cách Viết Thời Gian (Time)

### 3.1 Format thời gian

| Format | Ví dụ | Khi nào dùng |
|---|---|---|
| 12-hour (AM/PM) | 3:00 PM | Email, chat, meeting |
| 24-hour | 15:00 | Kỹ thuật, server, log |
| ISO 8601 | 15:00:00Z | API, database |
| Với timezone | 3:00 PM JST (UTC+9) | Email quốc tế |

### 3.2 Viết AM/PM đúng cách

```
❌ "Meeting at 3pm" (thiếu khoảng trắng, viết thường)
❌ "Meeting at 3 P.M." (có dấu chấm — cũ)
✅ "Meeting at 3:00 PM" (chuẩn nhất)
✅ "Meeting at 3 PM" (chấp nhận được)
```

### 3.3 Timezone — Yếu tố quan trọng nhất!

```
❌ "Deploy at 10:00 AM" (múi giờ nào?)
✅ "Deploy at 10:00 AM JST (UTC+9)"
✅ "Deploy at 10:00 AM JST / 8:00 AM ICT / 1:00 AM UTC"
```

> 💡 **Pro tip:** Khi làm việc với team quốc tế, luôn ghi kèm **UTC** để mọi người tự quy đổi.

---

## 4. Đơn Vị Dung Lượng (Storage Units)

### 4.1 Bảng đơn vị

| Đơn vị | Viết tắt | Giá trị (thập phân) | Giá trị (nhị phân) |
|---|---|---|---|
| Byte | B | 1 B | 1 B |
| Kilobyte | KB | 1,000 B | KiB = 1,024 B |
| Megabyte | MB | 1,000,000 B | MiB = 1,048,576 B |
| Gigabyte | GB | 1,000,000,000 B | GiB = 1,073,741,824 B |
| Terabyte | TB | 10¹² B | TiB = 2⁴⁰ B |

> 📌 **Lưu ý:** KB, MB, GB (hệ thập phân — chuẩn SI) và KiB, MiB, GiB (hệ nhị phân — chuẩn IEC) là **khác nhau**! Ổ cứng dùng hệ thập phân, OS thường dùng hệ nhị phân. Đây là lý do ổ cứng 1 TB chỉ hiện ~931 GB trên máy tính.

### 4.2 Cách viết đúng

```
❌ "File size: 5 mb" (viết thường — sai)
❌ "File size: 5Mb" (Mb = Megabit, không phải Megabyte!)
✅ "File size: 5 MB" (đúng — có khoảng trắng, viết hoa đúng)

❌ "Bandwidth: 100 MB" (dung lượng, không phải tốc độ)
✅ "Bandwidth: 100 Mbps" (Megabits per second)
```

### 4.3 Phân biệt Bit vs Byte

| Đơn vị | Viết tắt | Dùng cho |
|---|---|---|
| Bit | **b** (chữ thường) | Tốc độ mạng: Mbps, Gbps |
| Byte | **B** (chữ HOA) | Dung lượng file: KB, MB, GB |

```
✅ "Internet speed: 100 Mbps" (100 Megabits per second)
✅ "File size: 100 MB" (100 Megabytes)
⚠️ 100 Mbps ≈ 12.5 MB/s (chia 8, vì 1 Byte = 8 bits)
```

---

## 5. Đơn Vị Thời Gian Trong IT

### 5.1 Viết tắt chuẩn

| Đơn vị | Viết tắt | Ví dụ |
|---|---|---|
| milliseconds | ms | Response time: 200 ms |
| seconds | s (hoặc sec) | Timeout: 30 s |
| minutes | min | Build time: 5 min |
| hours | h (hoặc hr) | Uptime: 720 h |

### 5.2 Trong documentation

```
✅ "Average response time: 150 ms"
✅ "Session timeout: 30 minutes"
✅ "Cache TTL: 3600 seconds (1 hour)"
✅ "SLA uptime: 99.9% (max 8.76 hours downtime/year)"
```

---

## 6. Đơn Vị Khác Trong IT

### 6.1 Tần suất & Performance

| Metric | Cách viết | Ví dụ |
|---|---|---|
| Requests per second | RPS / req/s | 10,000 RPS |
| Transactions per second | TPS | 500 TPS |
| Queries per second | QPS | 2,000 QPS |
| Pages per minute | ppm | 60 ppm |
| Frames per second | FPS / fps | 60 FPS |

### 6.2 Phần trăm và tỷ lệ

```
✅ "CPU usage: 85%"
✅ "Error rate: 0.5%"
✅ "Uptime: 99.99% (four nines)"
✅ "Conversion rate: 3.2%"
```

> 📌 **Cách đọc:** 99.99% = "four nines" /fɔːr naɪnz/, 99.999% = "five nines"

### 6.3 Tiền tệ

| Cách viết | Ví dụ | Ghi chú |
|---|---|---|
| Ký hiệu trước số | $10,500.00 | USD — chuẩn Mỹ |
| Ký hiệu trước số | ¥402,858 | JPY — không có thập phân |
| Mã tiền sau số | 10,500.00 USD | Formal / invoice |
| Viết đầy đủ | 10,500 US dollars | Văn bản dài |

```
❌ "Cost: 10.500$ per month"
✅ "Cost: $10,500 per month"
✅ "Cost: 10,500 USD/month"
```

---

## 7. Bảng Từ Vựng Tổng Hợp

| Tiếng Anh | Phát âm IPA | Tiếng Việt |
|---|---|---|
| decimal point | /ˈdɛs.ɪ.məl pɔɪnt/ | dấu thập phân |
| thousands separator | /ˈθaʊ.zəndz ˈsɛp.ə.reɪ.tər/ | dấu phân cách hàng nghìn |
| bandwidth | /ˈbænd.wɪdθ/ | băng thông |
| throughput | /ˈθruː.pʊt/ | thông lượng |
| latency | /ˈleɪ.tən.si/ | độ trễ |
| uptime | /ˈʌp.taɪm/ | thời gian hoạt động |
| downtime | /ˈdaʊn.taɪm/ | thời gian ngừng |
| precision | /prɪˈsɪʒ.ən/ | độ chính xác |
| round (v.) | /raʊnd/ | làm tròn |
| truncate (v.) | /ˈtrʌŋ.keɪt/ | cắt bớt |
| abbreviation | /əˌbriː.viˈeɪ.ʃən/ | viết tắt |
| notation | /noʊˈteɪ.ʃən/ | ký hiệu |

---

## 8. Practice — Bài Tập Thực Hành

### Bài 1: Sửa lỗi format

Tìm và sửa lỗi trong các câu sau:

1. *"The server processes 2.500.000 requests per day"*
2. *"Deploy is scheduled for 05/06/2026"*
3. *"File size limit: 10mb"*
4. *"Response time: 2,5 ms"*
5. *"Meeting at 3pm tokyo time"*
6. *"Cost: 15.000$ per month"*

### Bài 2: Viết lại cho chuẩn

Chuyển các thông tin sau sang format tiếng Anh IT chuẩn:

1. Ngày 15 tháng 7 năm 2026, lúc 2 giờ chiều giờ Việt Nam
2. Dung lượng file: 2 tỷ 500 triệu bytes
3. Tốc độ mạng: 1 tỷ bits mỗi giây
4. Chi phí: mười nghìn năm trăm đô la mỗi tháng
5. Thời gian phản hồi: 0 phẩy 5 giây

<details>
<summary>📝 Đáp án Bài 1</summary>

1. ✅ "The server processes **2,500,000** requests per day"
2. ✅ "Deploy is scheduled for **June 5, 2026**" hoặc "**2026-06-05**"
3. ✅ "File size limit: **10 MB**"
4. ✅ "Response time: **2.5 ms**"
5. ✅ "Meeting at **3:00 PM JST (UTC+9)**"
6. ✅ "Cost: **$15,000 per month**"

</details>

<details>
<summary>📝 Đáp án Bài 2</summary>

1. ✅ **July 15, 2026, at 2:00 PM ICT (UTC+7)** hoặc **2026-07-15T14:00:00+07:00**
2. ✅ **2.5 GB** (hoặc **2,500 MB**)
3. ✅ **1 Gbps** (1 Gigabit per second)
4. ✅ **$10,500/month** hoặc **$10,500 per month**
5. ✅ **500 ms** hoặc **0.5 seconds**

</details>

---

## Tổng Kết

| Loại | Best Practice | Ví dụ |
|---|---|---|
| 📊 Số | Dấu phẩy hàng nghìn, dấu chấm thập phân | 1,500.75 |
| 📅 Ngày | ISO 8601 cho kỹ thuật, viết đầy đủ cho email | 2026-04-01 / April 1, 2026 |
| ⏰ Giờ | 24h cho kỹ thuật, AM/PM cho email + timezone | 15:00 UTC / 3:00 PM JST |
| 💾 Dung lượng | Viết hoa đúng, có khoảng trắng | 10 MB, 1.5 GB |
| ⚡ Tốc độ | Bit (b) cho mạng, Byte (B) cho file | 100 Mbps, 50 MB/s |
| 💰 Tiền | Ký hiệu trước, dấu phẩy hàng nghìn | $10,500.00 |

Nhớ quy tắc vàng: **Khi không chắc, dùng ISO format hoặc viết đầy đủ** — an toàn nhất, không ai hiểu nhầm! 🎯

---

*Bạn thấy bài này hữu ích? Hãy bookmark lại để dùng khi cần viết docs hoặc email bằng tiếng Anh nhé!* 💕
