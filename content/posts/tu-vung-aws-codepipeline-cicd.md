---
title: "AWS CodePipeline — Thuật Ngữ CI/CD Trên AWS Cho Developer"
date: 2023-01-27
slug: "tu-vung-aws-codepipeline-cicd"
description: "Học 12 thuật ngữ tiếng Anh về AWS CodePipeline và CI/CD — từ pipeline, artifact đến buildspec và webhook, giúp developer tự tin triển khai CI/CD trên AWS."
categories: ["IT English"]
tags: ["aws", "devops", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

CI/CD là xương sống của quy trình phát triển phần mềm hiện đại. AWS cung cấp bộ công cụ **CodePipeline**, **CodeBuild**, **CodeDeploy** để xây dựng pipeline hoàn chỉnh ngay trên cloud. Nắm vững thuật ngữ CI/CD trên AWS sẽ giúp bạn setup và troubleshoot pipeline nhanh hơn.

---

### 🔹 Cấu trúc Pipeline

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pipeline | /ˈpaɪplaɪn/ | quy trình tự động hóa | Our **pipeline** automatically builds and deploys code on every push. |
| source stage | /sɔːrs steɪdʒ/ | giai đoạn lấy mã nguồn | The **source stage** pulls the latest code from the GitHub repository. |
| build stage | /bɪld steɪdʒ/ | giai đoạn biên dịch | The **build stage** compiles the code and runs unit tests. |
| deploy stage | /dɪˈplɔɪ steɪdʒ/ | giai đoạn triển khai | The **deploy stage** pushes the new version to the production servers. |
| artifact | /ˈɑːrtɪfækt/ | sản phẩm đầu ra của build | The build **artifact** is stored in S3 before deployment. |

### 🔹 Actions & Controls

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| action | /ˈækʃən/ | hành động trong stage | Add a test **action** between the build and deploy stages. |
| approval | /əˈpruːvəl/ | phê duyệt thủ công | The pipeline pauses at the **approval** action and waits for a manager to review. |
| webhook | /ˈwɛbhʊk/ | hook thông báo tự động | Configure a **webhook** so the pipeline triggers on every git push. |

### 🔹 Công cụ Build & Deploy

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| CodeBuild | /koʊd bɪld/ | dịch vụ build của AWS | **CodeBuild** spins up a fresh container for each build. |
| CodeDeploy | /koʊd dɪˈplɔɪ/ | dịch vụ deploy của AWS | Use **CodeDeploy** to perform rolling deployments across EC2 instances. |
| buildspec | /ˈbɪldspɛk/ | file cấu hình build | Define your build commands in the **buildspec**.yml file. |
| appspec | /ˈæpspɛk/ | file cấu hình deploy | The **appspec**.yml file tells CodeDeploy which files to copy and which hooks to run. |

---

## 💡 Mẹo ghi nhớ

- **Pipeline** = đường ống — code chảy qua từng stage như nước chảy qua ống: Source → Build → Deploy.
- **Artifact** = "sản phẩm" — giống file zip chứa kết quả build, được truyền từ stage này sang stage khác.
- **buildspec** vs **appspec**: "build" + "spec" = cấu hình cho build, "app" + "spec" = cấu hình cho deploy app.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The ___ automatically triggers when new code is pushed to the repository.
2. Build output is packaged as an ___ and stored in S3.
3. Add a manual ___ action before deploying to production for safety.
4. Define your build commands in the ___ file at the root of your project.
5. ___ performs blue/green deployments to minimize downtime.

{{< spoiler "✅ Đáp án" >}}
1. **pipeline** — Pipeline tự động chạy khi có code mới push lên repo
2. **artifact** — Sản phẩm build được đóng gói và lưu trên S3
3. **approval** — Approval action yêu cầu phê duyệt thủ công trước khi deploy production
4. **buildspec** — File buildspec.yml chứa các lệnh build ở root project
5. **CodeDeploy** — CodeDeploy hỗ trợ blue/green deployment giảm downtime
{{< /spoiler >}}

---

## Tổng kết

AWS CodePipeline cùng CodeBuild và CodeDeploy tạo thành bộ ba CI/CD mạnh mẽ trên cloud. Hiểu rõ các thuật ngữ như **pipeline**, **artifact**, **buildspec** sẽ giúp bạn tự tin setup và debug pipeline. Bắt đầu với một pipeline đơn giản Source → Build → Deploy rồi mở rộng dần nhé! 🔧
