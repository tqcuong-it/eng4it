---
title: "Tiếng Anh Trong Incident Response — Báo Cáo Sự Cố & Viết Post-Mortem"
slug: "tieng-anh-trong-incident-response-bao-cao-su-co-post-mortem"
date: 2026-04-09
summary: "Học tiếng Anh trong Incident Response: từ vựng, mẫu câu báo cáo sự cố, template post-mortem và communication trong khủng hoảng."
description: "Tiếng Anh cho Incident Response: từ vựng severity levels, mẫu câu báo cáo sự cố real-time, template post-mortem/blameless review, status page updates. Bảng EN-VN, ví dụ thực tế cho developer và DevOps."
tags: ["incident-response", "post-mortem", "devops", "workplace-english", "sre"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

3 giờ sáng. PagerDuty reo. Hệ thống **sập**.

Bạn vào Slack incident channel, thấy toàn tiếng Anh:

> *"P1 incident — payment service returning 503. Blast radius: all checkout flows. ETA to mitigate?"*

😰 Bạn biết cách fix, nhưng **không biết diễn đạt** bằng tiếng Anh. Thời gian quý như vàng trong incident — mỗi phút downtime là tiền mất, khách hàng bỏ đi.

Bài viết này giúp bạn:

- Nắm **từ vựng incident response** cần thiết
- Viết **báo cáo sự cố real-time** rõ ràng
- Soạn **post-mortem** chuyên nghiệp
- Giao tiếp **bình tĩnh, hiệu quả** trong khủng hoảng

---

## 1. Severity Levels — Phân Loại Mức Độ

Mọi incident đều bắt đầu bằng câu hỏi: **"Mức độ nghiêm trọng thế nào?"**

| Level | English | Tiếng Việt | Ví dụ |
|---|---|---|---|
| **P0 / SEV-0** | Critical / Catastrophic | Nghiêm trọng nhất | Toàn bộ hệ thống sập, mất dữ liệu |
| **P1 / SEV-1** | Major | Nghiêm trọng | Chức năng chính không hoạt động |
| **P2 / SEV-2** | Moderate | Trung bình | Một phần chức năng bị ảnh hưởng |
| **P3 / SEV-3** | Minor | Nhẹ | Lỗi nhỏ, có workaround |
| **P4 / SEV-4** | Low / Cosmetic | Rất nhẹ | Lỗi UI, không ảnh hưởng chức năng |

### Mẫu Câu Khai Báo Incident

- *"I'm declaring a **P1 incident** — the payment service is completely down."*
- *"This looks like a **SEV-2** — search is degraded but checkout still works."*
- *"Upgrading from P2 to **P1** — the blast radius is larger than initially assessed."*
- *"Downgrading to **P3** — we've confirmed only a small subset of users is affected."*

---

## 2. Incident Roles — Vai Trò Trong Sự Cố

| Role | IPA | Tiếng Việt | Nhiệm vụ |
|---|---|---|---|
| **Incident Commander (IC)** | /ˈɪn.sɪ.dənt kəˈmæn.dər/ | Chỉ huy sự cố | Điều phối, quyết định, timeline |
| **Communications Lead** | /kəˌmjuː.nɪˈkeɪ.ʃənz liːd/ | Phụ trách truyền thông | Cập nhật stakeholders, status page |
| **Technical Lead** | /ˈtek.nɪ.kəl liːd/ | Trưởng kỹ thuật | Debug, tìm root cause, fix |
| **Scribe** | /skraɪb/ | Thư ký | Ghi lại timeline, actions |
| **Subject Matter Expert (SME)** | /ˌsʌb.dʒekt ˈmæt.ər ˈek.spɜːrt/ | Chuyên gia lĩnh vực | Hỗ trợ kiến thức chuyên sâu |

### Mẫu Câu Phân Công

- *"I'll be **IC** for this incident. @Sarah, can you take **comms**?"*
- *"We need a **SME** for the database layer — @Mike, can you join?"*
- *"@Lisa is **scribing** — please post all updates in this channel."*
- *"I'm **handing off IC** to @Tom for the next shift."*

---

## 3. Giao Tiếp Real-Time Trong Incident

### Báo Cáo Tình Hình (Status Updates)

```
⏰ [14:05 UTC] Status Update
- What: Payment API returning 503 errors
- Impact: ~30% of checkout attempts failing
- Cause: Investigating — suspected database connection pool exhaustion
- Current action: @Mike is checking DB connection metrics
- ETA: Unknown — will update in 15 minutes
```

### Mẫu Câu Hay Dùng

| Tình huống | English | Tiếng Việt |
|---|---|---|
| Báo cáo vấn đề | *"We're seeing elevated error rates on..."* | Chúng tôi đang thấy tỷ lệ lỗi tăng cao trên... |
| Xác nhận nguyên nhân | *"Root cause identified: ..."* | Đã xác định nguyên nhân gốc: ... |
| Đang xử lý | *"We're currently mitigating by..."* | Chúng tôi đang khắc phục bằng cách... |
| Cần hỗ trợ | *"We need eyes on the database — who's available?"* | Cần người xem database — ai rảnh? |
| Đã fix tạm | *"Mitigation applied. Monitoring for stability."* | Đã áp dụng biện pháp tạm. Đang theo dõi ổn định. |
| Chờ deploy | *"Fix is in review. ETA to production: 20 minutes."* | Fix đang review. ETA lên production: 20 phút. |
| Kết thúc | *"Incident resolved. All systems nominal."* | Sự cố đã xử lý xong. Hệ thống hoạt động bình thường. |

### Từ Vựng Real-Time

| English | IPA | Tiếng Việt |
|---|---|---|
| blast radius | /blɑːst ˈreɪ.di.əs/ | phạm vi ảnh hưởng |
| mitigation | /ˌmɪt.ɪˈɡeɪ.ʃən/ | biện pháp khắc phục tạm |
| remediation | /rɪˌmiː.diˈeɪ.ʃən/ | biện pháp khắc phục triệt để |
| workaround | /ˈwɜːrk.əˌraʊnd/ | giải pháp tạm thời |
| rollback | /ˈroʊl.bæk/ | hoàn tác, quay lại phiên bản trước |
| degraded | /dɪˈɡreɪ.dɪd/ | suy giảm (chưa sập hoàn toàn) |
| outage | /ˈaʊ.tɪdʒ/ | ngừng hoạt động |
| downtime | /ˈdaʊn.taɪm/ | thời gian ngừng hoạt động |
| ETA (Estimated Time of Arrival) | /ˌiː.tiːˈeɪ/ | thời gian dự kiến hoàn thành |
| nominal | /ˈnɒm.ɪ.nəl/ | bình thường, hoạt động đúng |
| intermittent | /ˌɪn.tərˈmɪt.ənt/ | không liên tục, lúc có lúc không |
| cascading failure | /kæˈskeɪ.dɪŋ ˈfeɪ.ljər/ | lỗi lan truyền dây chuyền |

---

## 4. Status Page Updates — Thông Báo Cho Khách Hàng

Khi hệ thống gặp sự cố, bạn cần viết **status page update** cho users — **ngắn gọn, rõ ràng, không gây hoảng sợ**.

### Template Status Page

**Investigating (đang điều tra):**
> We are currently investigating reports of increased error rates affecting [service]. Some users may experience [symptoms]. Our team is actively working to resolve this issue. We will provide updates as more information becomes available.

**Identified (đã xác định nguyên nhân):**
> The issue has been identified as [brief cause]. We are implementing a fix. [Service] may continue to experience [symptoms] in the meantime. We expect to resolve this within [timeframe].

**Monitoring (đang theo dõi):**
> A fix has been implemented for the [service] issue. We are monitoring the situation to ensure stability. Some users may still see brief [symptoms] as the fix propagates.

**Resolved (đã giải quyết):**
> The issue affecting [service] has been fully resolved. All systems are operating normally. We apologize for the inconvenience. A detailed post-mortem will be published within [timeframe].

### Nguyên Tắc Viết Status Page

| ✅ Nên | ❌ Không nên |
|---|---|
| Ngắn gọn, factual | Đổ lỗi cho team hay cá nhân |
| Cập nhật đều đặn (mỗi 15-30 phút) | Im lặng quá lâu |
| Nói rõ impact cho user | Dùng jargon kỹ thuật quá nhiều |
| Xin lỗi chân thành | Nói "Chúng tôi không có lỗi" |

---

## 5. Post-Mortem — Blameless Review

Post-mortem (hay **blameless review**) là bản phân tích **sau sự cố** — không đổ lỗi, chỉ tập trung vào **học hỏi và cải thiện**.

### Template Post-Mortem

```markdown
# Post-Mortem: Payment Service Outage
**Date:** April 9, 2026
**Duration:** 2 hours 15 minutes (14:00 – 16:15 UTC)
**Severity:** P1
**Authors:** @mike, @sarah

## Executive Summary
On April 9, 2026, the payment service experienced a complete
outage lasting 2 hours and 15 minutes. Approximately 12,000
transactions failed, resulting in an estimated revenue impact
of $45,000. The root cause was a database connection pool
exhaustion triggered by a misconfigured connection timeout
after a routine deployment.

## Impact
- **Duration:** 2h 15m
- **Users affected:** ~8,500 (30% of active users)
- **Failed transactions:** ~12,000
- **Revenue impact:** ~$45,000
- **SLA breach:** Yes (99.9% → 99.74% for the month)

## Timeline (UTC)
| Time | Event |
|------|-------|
| 13:45 | Deployment of v2.3.1 (included DB timeout config change) |
| 14:00 | First alerts: elevated 503 error rates |
| 14:05 | Incident declared (P2), IC: @sarah |
| 14:15 | Upgraded to P1 after confirming checkout fully down |
| 14:30 | Root cause identified: connection pool exhausted |
| 14:45 | Mitigation: increased pool size from 20 to 50 |
| 15:00 | Partial recovery, error rates dropping |
| 15:30 | Rolled back timeout config to previous value |
| 16:00 | Full recovery confirmed |
| 16:15 | Incident resolved, monitoring continues |

## Root Cause
The deployment at 13:45 included a change to the database
connection timeout from 30s to 5s. Under normal load, this
worked fine. However, during a brief spike in traffic at 14:00,
connections that would have waited were instead terminated,
causing a cascade of retries that exhausted the connection pool.

## Contributing Factors
- No load testing of the config change before deployment
- Connection pool size (20) was already near capacity
- Alerting threshold was set too high (>50% errors)
  — should have triggered at >5%

## What Went Well
- Incident was detected within 15 minutes
- Team mobilized quickly
- Clear communication throughout
- Root cause identified within 30 minutes

## What Could Be Improved
- Config changes should be flagged for load testing
- Connection pool monitoring needs better alerting
- Rollback took too long (45 minutes)

## Action Items
| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Add connection pool metrics to dashboard | @mike | Apr 16 | TODO |
| Lower alert threshold to 5% error rate | @sarah | Apr 11 | TODO |
| Add config change to deployment checklist | @tom | Apr 14 | TODO |
| Load test timeout changes in staging | @mike | Apr 18 | TODO |
| Implement automatic rollback on error spike | @lisa | Apr 30 | TODO |
```

---

## 6. Từ Vựng Post-Mortem

| English | IPA | Tiếng Việt |
|---|---|---|
| post-mortem | /poʊst ˈmɔːr.təm/ | phân tích sau sự cố |
| blameless | /ˈbleɪm.ləs/ | không đổ lỗi |
| root cause | /ruːt kɔːz/ | nguyên nhân gốc |
| contributing factor | /kənˈtrɪb.juː.tɪŋ ˈfæk.tər/ | yếu tố góp phần |
| action item | /ˈæk.ʃən ˈaɪ.təm/ | hạng mục cần làm |
| timeline | /ˈtaɪm.laɪn/ | dòng thời gian |
| detection time | /dɪˈtek.ʃən taɪm/ | thời gian phát hiện |
| time to mitigate (TTM) | /taɪm tə ˈmɪt.ɪ.ɡeɪt/ | thời gian khắc phục tạm |
| time to resolve (TTR) | /taɪm tə rɪˈzɒlv/ | thời gian giải quyết triệt để |
| mean time to recovery (MTTR) | /miːn taɪm tə rɪˈkʌv.ər.i/ | thời gian phục hồi trung bình |
| SLA (Service Level Agreement) | /ˌes.elˈeɪ/ | cam kết chất lượng dịch vụ |
| SLO (Service Level Objective) | /ˌes.elˈoʊ/ | mục tiêu chất lượng dịch vụ |
| error budget | /ˈer.ər ˈbʌdʒ.ɪt/ | ngân sách lỗi cho phép |
| recurrence | /rɪˈkʌr.əns/ | tái phát |
| preventive measure | /prɪˈven.tɪv ˈmeʒ.ər/ | biện pháp phòng ngừa |

---

## 7. Email Thông Báo Sự Cố

### Mẫu Email Cho Management

```
Subject: [P1 RESOLVED] Payment Service Outage — April 9, 2026

Hi team,

I'm writing to provide a summary of the P1 incident that
occurred today.

**What happened:**
Our payment service experienced a complete outage from
14:00 to 16:15 UTC (2 hours 15 minutes).

**Impact:**
- ~8,500 users were unable to complete checkout
- ~12,000 transactions failed
- Estimated revenue impact: $45,000

**Root cause:**
A misconfigured database connection timeout in deployment
v2.3.1 caused connection pool exhaustion under load.

**Current status:**
Fully resolved. All systems operating normally.

**Next steps:**
- Post-mortem document will be completed by April 11
- Action items with owners and deadlines are being tracked
- A review meeting is scheduled for April 12

Please let me know if you have questions.

Best regards,
[Your name]
```

---

## 8. Practice — Bài Tập Thực Hành

### Bài tập 1: Viết Status Update
Tình huống: API gateway trả về lỗi 502 cho 10% requests. Bạn là IC. Viết 1 status update cho incident channel.

Cần có:
- [ ] Timestamp
- [ ] What (vấn đề gì)
- [ ] Impact (ảnh hưởng)
- [ ] Current action
- [ ] ETA

### Bài tập 2: Viết Status Page Update
Tình huống giống trên, nhưng viết cho **khách hàng** trên status page. Nhớ: ngắn gọn, không jargon, không gây hoảng.

### Bài tập 3: Điền từ
Điền từ thích hợp:

1. The _____ of this incident is the API service and all downstream consumers. (phạm vi ảnh hưởng)
2. We've applied a temporary _____. A permanent fix will follow. (biện pháp tạm)
3. All systems are now _____. (hoạt động bình thường)
4. The _____ was a memory leak in the cache layer. (nguyên nhân gốc)
5. Our _____ for this quarter is 99.95% uptime. (mục tiêu chất lượng)

<details>
<summary>📝 Đáp án</summary>

1. **blast radius**
2. **mitigation** (hoặc **workaround**)
3. **nominal** (hoặc **operating normally**)
4. **root cause**
5. **SLO (Service Level Objective)**

</details>

---

## Kết Luận

Incident response là lúc **áp lực cao nhất** — và cũng là lúc bạn cần giao tiếp **rõ ràng nhất**.

3 điều cần nhớ:

1. 🎯 **Be clear, be concise** — không ai muốn đọc essay lúc 3AM
2. 🤝 **Blameless culture** — tập trung vào hệ thống, không phải con người
3. 📝 **Document everything** — post-mortem tốt = không lặp lại sai lầm

Lần tới khi PagerDuty reo, bạn sẽ không chỉ fix nhanh mà còn **communicate như một pro** 🚨✨
