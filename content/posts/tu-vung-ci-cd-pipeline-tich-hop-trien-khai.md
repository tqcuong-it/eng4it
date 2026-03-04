---
title: "Từ Vựng CI/CD Pipeline — Thuật Ngữ Tích Hợp & Triển Khai Liên Tục"
date: 2023-02-01
summary: "Học 10+ thuật ngữ Từ Vựng CI/CD Pipeline quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-ci-cd-pipeline-tich-hop-trien-khai"
description: "Tìm hiểu 13 thuật ngữ CI/CD Pipeline quan trọng: pipeline, build, deploy, artifact, rollback, blue-green, canary deployment và hơn thế."
categories: ["IT English"]
tags: ["devops", "cloud-computing", "ai", "testing", "git"]
ShowToc: true
TocOpen: true
draft: false
---

CI/CD (Continuous Integration / Continuous Delivery) là xương sống của quy trình phát triển phần mềm hiện đại. Nếu bạn muốn **đọc hiểu Jenkins, GitHub Actions hay GitLab CI** config, thì cần nắm vững các thuật ngữ dưới đây. Cùng học nào! ⚡

---

### 🔹 Quy trình cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pipeline | /ˈpaɪplaɪn/ | đường ống (chuỗi bước tự động) | The **pipeline** runs unit tests, builds the Docker image, and deploys to staging automatically. |
| build | /bɪld/ | biên dịch / đóng gói | The **build** step compiles the source code and generates a deployable artifact. |
| test | /tɛst/ | kiểm thử | All **test** stages must pass before the code can be merged into the main branch. |
| deploy | /dɪˈplɔɪ/ | triển khai | We **deploy** to the staging environment first, then promote to production after QA approval. |
| artifact | /ˈɑːrtɪfækt/ | sản phẩm đầu ra (file build) | The **artifact** from the build step is a JAR file stored in our Nexus repository. |

### 🔹 Điều khiển Pipeline

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| stage | /steɪdʒ/ | giai đoạn | Our pipeline has three **stages**: build, test, and deploy. |
| trigger | /ˈtrɪɡər/ | kích hoạt (sự kiện bắt đầu pipeline) | A push to the main branch will **trigger** the deployment pipeline automatically. |
| webhook | /ˈwɛbhʊk/ | hook web (callback URL tự động) | Configure a **webhook** on GitHub to notify Jenkins whenever a new commit is pushed. |
| environment | /ɪnˈvaɪrənmənt/ | môi trường (dev, staging, production) | Deploy to the staging **environment** first to catch issues before production. |

### 🔹 Chiến lược triển khai

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| rollback | /ˈroʊlbæk/ | quay lại phiên bản trước | We had to **rollback** to v1.3.2 because the new release caused a critical error. |
| blue-green | /bluː ɡriːn/ | triển khai xanh-xanh (hai môi trường song song) | With **blue-green** deployment, we switch traffic to the new version instantly. |
| canary | /kəˈnɛri/ | triển khai canary (phát hành từ từ) | Roll out the update as a **canary** deployment to 5% of users before going full. |
| feature flag | /ˈfiːtʃər flæɡ/ | cờ tính năng (bật/tắt feature) | Use a **feature flag** to enable the new checkout flow only for beta users. |

---

## 💡 Mẹo ghi nhớ

- **Pipeline** = dây chuyền sản xuất trong nhà máy. Code đi qua từng trạm (stage): build → test → deploy.
- **Blue-Green vs Canary**: Blue-green = chuyển **100% traffic** sang version mới cùng lúc (có thể switch back). Canary = chuyển **từ từ** (5% → 20% → 100%).
- **Feature Flag** = công tắc đèn 💡. Bật = user thấy feature mới, tắt = user dùng version cũ. Không cần deploy lại!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The CI/CD ___ automatically builds, tests, and deploys our application.
2. When the new version caused errors, we performed a ___ to the previous version.
3. Configure a ___ so that GitHub notifies our CI server on every push.
4. Use a ___ ___ to gradually roll out the new feature to a small percentage of users first.
5. The build step produces an ___ that is stored in the artifact repository.

{{< spoiler "✅ Đáp án" >}}
1. **pipeline** — Đường ống CI/CD tự động hóa toàn bộ quy trình
2. **rollback** — Quay lại phiên bản trước khi có lỗi
3. **webhook** — Hook web để thông báo tự động cho CI server
4. **canary deployment** — Triển khai canary phát hành từ từ cho một phần users
5. **artifact** — Sản phẩm đầu ra từ bước build
{{< /spoiler >}}

---

## Tổng kết

CI/CD không chỉ là tool, mà là **văn hóa phát triển phần mềm**. Hiểu rõ thuật ngữ giúp bạn cấu hình pipeline, đọc docs, và thảo luận deployment strategy với team một cách chuyên nghiệp. Hãy thử thiết lập một pipeline đơn giản với GitHub Actions để thực hành nhé! 🎯

---

## 📚 Bài viết liên quan

- [Từ Vựng Docker — Thuật Ngữ Container Mà Developer Cần Biết](/posts/tu-vung-docker-thuat-ngu-container/)
- [Hạ tầng nghìn tỷ đô đằng sau các mô hình ngôn ngữ lớn](/posts/luyen-doc-llm-infrastructure-ha-tang-nghin-ty-do/)
- [AWS Route 53 & API Gateway — Thuật Ngữ DNS & API Bằng Tiếng Anh](/posts/tu-vung-aws-route53-api-gateway-dns-api/)

---

### 💡 Mẹo học từ vựng AI/ML hiệu quả

- **Flashcard:** Tạo flashcard với Anki hoặc Quizlet cho các từ vựng trong bài, mỗi ngày ôn 10-15 từ để nhớ lâu
- **Ngữ cảnh thực tế:** Đọc thêm machine learning và artificial intelligence để thấy từ vựng được sử dụng trong context thực tế
- **Viết câu:** Với mỗi từ mới, hãy viết 1-2 câu ví dụ liên quan đến project hoặc công việc đang làm
- **Nói to:** Luyện phát âm theo IPA, đọc to các câu ví dụ để cải thiện cả pronunciation và memory retention
- **Nhóm từ:** Gom các từ theo chủ đề con (ví dụ: verbs, nouns, adjectives) để dễ hệ thống hóa kiến thức
- **Review định kỳ:** Áp dụng spaced repetition — ôn lại sau 1 ngày, 3 ngày, 7 ngày, 30 ngày để chuyển từ short-term sang long-term memory
- **Thực hành ngay:** Cố gắng sử dụng ít nhất 3-5 từ mới trong standup meeting, code review, hoặc technical discussion hàng ngày
