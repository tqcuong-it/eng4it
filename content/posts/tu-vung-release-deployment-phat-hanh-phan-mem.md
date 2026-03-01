---
title: "Release & Deployment — 12 Thuật Ngữ Phát Hành Phần Mềm Developer Cần Biết"
date: 2023-03-05
slug: "tu-vung-release-deployment-phat-hanh-phan-mem"
description: "Học 12 thuật ngữ tiếng Anh về Release & Deployment — từ hotfix, rollback, feature flag đến blue-green deployment, canary release, semantic versioning."
categories: ["IT English"]
tags: ["devops", "workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

Deploy xong mà app sập là ác mộng của mọi developer. Để release an toàn, bạn cần hiểu các thuật ngữ từ hotfix, rollback đến blue-green deployment. Cùng học để deploy mà không run! 🚀

---

### 🔹 Phát hành & Bản vá

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| release notes | /rɪˈliːs noʊts/ | ghi chú phát hành — tài liệu mô tả các thay đổi trong phiên bản mới | The **release notes** for v3.1 include five new features and three bug fixes. |
| hotfix | /ˈhɑːtfɪks/ | bản sửa nóng — bản vá khẩn cấp cho bug nghiêm trọng trên production | We deployed a **hotfix** at 2 AM to fix the payment processing crash. |
| patch | /pætʃ/ | bản vá — bản cập nhật nhỏ sửa lỗi, không thêm tính năng mới | The security **patch** fixes two critical vulnerabilities in the authentication module. |
| rollback | /ˈroʊlbæk/ | quay lại — hoàn tác deployment, trở về phiên bản trước | The new release caused 500 errors, so we did a **rollback** to the previous version immediately. |
| semantic versioning | /sɪˈmæntɪk ˈvɜːrʒənɪŋ/ | đánh số phiên bản theo ngữ nghĩa — quy tắc MAJOR.MINOR.PATCH | Following **semantic versioning**, we bumped from 2.3.1 to 3.0.0 because of breaking changes. |
| changelog | /ˈtʃeɪndʒlɔːɡ/ | nhật ký thay đổi — danh sách tất cả thay đổi qua các phiên bản | Always update the **changelog** before creating a release tag. |

### 🔹 Chiến lược deploy

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| feature flag | /ˈfiːtʃər flæɡ/ | cờ tính năng — toggle để bật/tắt tính năng mà không cần deploy lại | We hid the new dashboard behind a **feature flag** and only enabled it for beta testers. |
| blue-green deployment | /bluː ɡriːn dɪˈplɔɪmənt/ | triển khai xanh lam-xanh lục — chạy 2 môi trường song song, chuyển traffic khi sẵn sàng | With **blue-green deployment**, we can switch traffic to the new version instantly and roll back if needed. |
| canary release | /kəˈnɛri rɪˈliːs/ | phát hành canary — deploy cho một phần nhỏ user trước để kiểm tra | We did a **canary release** to 5% of users first, then gradually increased to 100% over two days. |

### 🔹 Vận hành & Bảo trì

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| downtime | /ˈdaʊntaɪm/ | thời gian ngưng hoạt động — khoảng thời gian hệ thống không khả dụng | The deployment caused 10 minutes of **downtime** because we didn't use zero-downtime strategy. |
| maintenance window | /ˈmeɪntənəns ˈwɪndoʊ/ | khung giờ bảo trì — thời gian được lên lịch trước để bảo trì hệ thống | We schedule the **maintenance window** from 2 AM to 4 AM on Sundays when traffic is lowest. |
| post-deployment | /poʊst dɪˈplɔɪmənt/ | sau triển khai — các hoạt động kiểm tra và giám sát sau khi deploy | Our **post-deployment** checklist includes monitoring error rates, checking logs, and verifying key user flows. |

---

## 💡 Mẹo ghi nhớ

- **Hotfix vs Patch**: Hotfix = "lửa cháy, chữa ngay" (khẩn cấp, deploy ngoài kế hoạch). Patch = "sửa lỗi theo kế hoạch" (không gấp). Cả hai đều sửa bug, nhưng hotfix có mức độ khẩn cấp cao hơn.
- **Blue-Green vs Canary**: Blue-Green = chuyển 100% traffic cùng lúc sang version mới. Canary = chuyển từ từ (5% → 25% → 100%). Canary an toàn hơn vì phát hiện lỗi sớm với ít user bị ảnh hưởng.
- **SemVer dễ nhớ**: MAJOR.MINOR.PATCH = "Phá.Thêm.Sửa". MAJOR tăng khi breaking change. MINOR tăng khi thêm feature. PATCH tăng khi fix bug.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The critical bug in production was fixed with a ___ deployed within one hour.
2. We use ___ to gradually roll out new features to a small percentage of users first.
3. After the failed deployment, the team performed a ___ to restore the previous stable version.
4. The new feature is ready but hidden behind a ___ until the marketing team is ready to announce it.
5. Our scheduled ___ is every Sunday from 2 AM to 4 AM for system updates.

{{< spoiler "✅ Đáp án" >}}
1. **hotfix** — Hotfix là bản sửa khẩn cấp cho bug nghiêm trọng trên production
2. **canary release** — Canary release deploy cho một phần nhỏ user trước
3. **rollback** — Rollback là hoàn tác về phiên bản ổn định trước đó
4. **feature flag** — Feature flag cho phép bật/tắt tính năng mà không cần deploy
5. **maintenance window** — Maintenance window là khung giờ bảo trì định kỳ
{{< /spoiler >}}

---

## Tổng kết

Release và deployment là giai đoạn quan trọng nhất trong software development lifecycle. Hiểu rõ các thuật ngữ giúp bạn giao tiếp chính xác với team và thực hiện deployment an toàn hơn. Ship it with confidence! 🎉
