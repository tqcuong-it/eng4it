---
title: "Cloud Computing Cơ Bản — Thuật Ngữ Đám Mây Cho Developer"
date: 2023-01-28
summary: "Học 10+ thuật ngữ Cloud Computing Cơ Bản quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-cloud-computing-co-ban"
description: "Học 14 thuật ngữ tiếng Anh về Cloud Computing — từ IaaS, PaaS, SaaS đến elasticity, scalability và pay-as-you-go, nền tảng kiến thức cloud cho mọi developer."
categories: ["IT English"]
tags: ["cloud-computing", "aws", "devops"]
ShowToc: true
TocOpen: true
draft: false
---

Dù bạn dùng AWS, Azure hay GCP, các thuật ngữ cloud computing cơ bản đều giống nhau. Đây là những từ vựng nền tảng mà mọi developer cần biết trước khi đi sâu vào bất kỳ cloud platform nào. Nắm vững chúng sẽ giúp bạn đọc tài liệu, phỏng vấn và thảo luận kiến trúc tự tin hơn rất nhiều.

---

### 🔹 Mô hình dịch vụ Cloud

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| IaaS (Infrastructure as a Service) | /aɪæs/ | hạ tầng dưới dạng dịch vụ | EC2 is an **IaaS** product — you manage the OS and everything above it. |
| PaaS (Platform as a Service) | /pæs/ | nền tảng dưới dạng dịch vụ | Heroku is a **PaaS** — just push your code and it handles the rest. |
| SaaS (Software as a Service) | /sæs/ | phần mềm dưới dạng dịch vụ | Gmail and Slack are examples of **SaaS** applications. |

### 🔹 Mô hình triển khai

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| public cloud | /ˈpʌblɪk klaʊd/ | đám mây công cộng | AWS and Azure are the largest **public cloud** providers. |
| private cloud | /ˈpraɪvɪt klaʊd/ | đám mây riêng | The bank runs a **private cloud** to meet strict compliance requirements. |
| hybrid cloud | /ˈhaɪbrɪd klaʊd/ | đám mây kết hợp | Our **hybrid cloud** setup keeps sensitive data on-premises while running web apps on AWS. |
| multi-tenant | /ˈmʌlti ˈtɛnənt/ | nhiều khách thuê chung hạ tầng | SaaS applications are typically **multi-tenant** — all customers share the same infrastructure. |
| on-premises | /ɒn ˈprɛmɪsɪz/ | tại chỗ, máy chủ nội bộ | We are migrating from **on-premises** servers to the cloud. |

### 🔹 Đặc tính & lợi ích Cloud

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| elasticity | /ˌɪlæˈstɪsɪti/ | khả năng co giãn tự động | Cloud **elasticity** means resources scale up during peak hours and scale down at night. |
| scalability | /ˌskeɪləˈbɪləti/ | khả năng mở rộng | The system was designed for **scalability** — it can handle 10x the current load. |
| migration | /maɪˈɡreɪʃən/ | di chuyển hệ thống | The cloud **migration** project took six months to complete. |
| pay-as-you-go | /peɪ æz juː ɡoʊ/ | trả theo mức sử dụng | The **pay-as-you-go** model means you only pay for what you actually use. |
| region | /ˈriːdʒən/ | vùng trung tâm dữ liệu | Deploy your app in the Tokyo **region** for lowest latency to Japanese users. |
| edge location | /ɛdʒ loʊˈkeɪʃən/ | điểm phân phối biên | CloudFront caches content at **edge locations** close to end users. |

---

## 💡 Mẹo ghi nhớ

- **IaaS / PaaS / SaaS** — tưởng tượng như pizza: IaaS = bạn tự nướng (chỉ có nguyên liệu), PaaS = mua pizza đông lạnh (chỉ cần nướng), SaaS = gọi ship pizza (chỉ cần ăn).
- **Elasticity** vs **Scalability**: Elasticity = tự động co giãn (như dây thun), Scalability = khả năng mở rộng khi cần (như thêm tầng cho tòa nhà).
- **On-premises** — lưu ý chính tả: là "premises" (có s), KHÔNG phải "on-premise".

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. With the ___ model, you only pay for the resources you consume each month.
2. ___ allows the system to automatically add servers during traffic spikes.
3. We chose a ___ approach, keeping the database on-premises while hosting the web app on AWS.
4. Heroku is a popular ___ platform that handles server management for you.
5. Deploy to the nearest ___ to reduce latency for your users.

{{< spoiler "✅ Đáp án" >}}
1. **pay-as-you-go** — Mô hình trả theo mức sử dụng, đặc trưng của cloud
2. **elasticity** — Khả năng tự động thêm/bớt tài nguyên theo nhu cầu
3. **hybrid cloud** — Mô hình kết hợp on-premises và public cloud
4. **PaaS** — Platform as a Service giúp developer không cần quản lý server
5. **region** — Chọn region gần người dùng để giảm latency
{{< /spoiler >}}

---

## Tổng kết

Cloud computing đã trở thành kiến thức bắt buộc với mọi developer. Hiểu rõ các khái niệm nền tảng như **IaaS/PaaS/SaaS**, **elasticity**, **scalability** sẽ giúp bạn lựa chọn dịch vụ phù hợp và trao đổi kiến trúc tự tin hơn. Đây là bước đầu tiên trước khi đi sâu vào bất kỳ cloud platform nào! ☁️

---

## 📚 Bài viết liên quan

- [AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh](/posts/tu-vung-aws-cloudformation-infrastructure-as-code/)
- [AWS ECS & EKS — Thuật Ngữ Container & Kubernetes Bằng Tiếng Anh](/posts/tu-vung-aws-ecs-eks-container-kubernetes/)
- [AWS Cost Optimization — Thuật Ngữ Tối Ưu Chi Phí Cloud](/posts/tu-vung-aws-cost-optimization/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
