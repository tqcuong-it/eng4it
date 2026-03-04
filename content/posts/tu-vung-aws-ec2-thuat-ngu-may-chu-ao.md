---
title: "AWS EC2 — Thuật Ngữ Máy Chủ Ảo Mà Developer Nào Cũng Phải Biết"
date: 2023-01-15
summary: "Học 10+ thuật ngữ AWS EC2 quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-ec2-thuat-ngu-may-chu-ao"
description: "Học 15 thuật ngữ tiếng Anh quan trọng nhất về AWS EC2 — từ instance, AMI đến auto scaling. Giải thích dễ hiểu kèm ví dụ thực tế cho developer Việt Nam."
categories: ["IT English"]
tags: ["aws", "cloud-computing", "devops"]
ShowToc: true
TocOpen: true
draft: false
---

Nếu bạn làm việc với cloud, đặc biệt là AWS, thì **EC2 (Elastic Compute Cloud)** là service bạn sẽ gặp đầu tiên. Hiểu đúng thuật ngữ EC2 bằng tiếng Anh giúp bạn đọc docs nhanh hơn, communicate với team hiệu quả hơn, và tự tin hơn khi phỏng vấn. Cùng mình học 15 từ vựng quan trọng nhất nhé! 🚀

---

### 🔹 Khái niệm cốt lõi

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| instance | /ˈɪnstəns/ | phiên bản máy chủ ảo | We need to launch a new **instance** for the staging environment. |
| AMI | /ˌeɪ.em.ˈaɪ/ | Amazon Machine Image — ảnh máy ảo | Create a custom **AMI** from the production server before upgrading. |
| key pair | /kiː pɛr/ | cặp khóa (public/private) | Make sure you download the **key pair** — you can't retrieve it later. |
| user data | /ˈjuːzər ˈdeɪtə/ | script khởi tạo khi boot | We use **user data** to install Nginx automatically on launch. |

### 🔹 Networking & Bảo mật

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| security group | /sɪˈkjʊərɪti ɡruːp/ | nhóm bảo mật (firewall ảo) | Open port 443 in the **security group** to allow HTTPS traffic. |
| elastic IP | /ɪˈlæstɪk aɪ piː/ | IP tĩnh có thể gán lại | Attach an **elastic IP** so the address doesn't change after reboot. |
| ENI | /ˌiː.en.ˈaɪ/ | Elastic Network Interface — card mạng ảo | Each instance has a primary **ENI** that you cannot detach. |
| availability zone | /əˌveɪləˈbɪləti zoʊn/ | vùng khả dụng trong region | Spread your instances across multiple **availability zones** for high availability. |

### 🔹 Lưu trữ & Hiệu năng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| EBS | /ˌiː.biː.ˈɛs/ | Elastic Block Store — ổ đĩa ảo | Increase the **EBS** volume size to 100 GB for the database server. |
| launch template | /lɔːntʃ ˈtɛmplɪt/ | mẫu cấu hình khởi tạo | Use a **launch template** to standardize instance configurations. |
| placement group | /ˈpleɪsmənt ɡruːp/ | nhóm vị trí đặt instance | A cluster **placement group** reduces network latency between instances. |

### 🔹 Tối ưu chi phí & Mở rộng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| spot instance | /spɒt ˈɪnstəns/ | instance giá rẻ theo đấu giá | We run batch jobs on **spot instances** to save up to 90% on costs. |
| reserved instance | /rɪˈzɜːrvd ˈɪnstəns/ | instance đặt trước (giảm giá) | Switching to **reserved instances** saved us $2,000 per month. |
| auto scaling | /ˈɔːtoʊ ˈskeɪlɪŋ/ | tự động tăng/giảm số instance | **Auto scaling** adds more instances during peak traffic hours. |
| load balancer | /loʊd ˈbælənsər/ | bộ cân bằng tải | The **load balancer** distributes incoming requests evenly across all instances. |

---

## 💡 Mẹo ghi nhớ

- **Instance** = "phiên bản" — giống như bạn copy một bản máy ảo ra chạy. Mỗi lần launch là một instance mới.
- **AMI** nghĩ như "ảnh chụp" toàn bộ máy — giống snapshot của cả hệ điều hành. Từ 1 AMI có thể tạo ra hàng trăm instance giống nhau.
- **Spot vs Reserved**: Spot = mua vé máy bay last-minute (rẻ nhưng có thể bị hủy). Reserved = mua vé trước (rẻ hơn giá gốc, cam kết dùng lâu dài).

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. We launched a new EC2 ___ in the us-east-1 region.
2. Always restrict SSH access in the ___ to your office IP only.
3. Use a ___ to keep the same public IP after stopping and starting your instance.
4. The ___ automatically adds more instances when CPU usage exceeds 80%.
5. We saved 70% by running our data processing pipeline on ___ instances.

---

{{< spoiler "✅ Đáp án" >}}
1. **instance** — EC2 instance là một máy chủ ảo đang chạy trên AWS
2. **security group** — Security group hoạt động như firewall, kiểm soát traffic vào/ra
3. **elastic IP** — Elastic IP là địa chỉ IP tĩnh, không thay đổi khi restart instance
4. **auto scaling** — Auto scaling tự động điều chỉnh số lượng instance theo nhu cầu
5. **spot** — Spot instances có giá rẻ hơn nhiều so với on-demand nhưng có thể bị thu hồi
{{< /spoiler >}}

---

## Tổng kết

EC2 là nền tảng compute của AWS — hiểu rõ 15 thuật ngữ trên sẽ giúp bạn tự tin hơn khi đọc documentation, trao đổi với team, hay trả lời câu hỏi phỏng vấn về cloud. Hãy thử dùng những từ này trong daily standup hoặc khi viết technical docs nhé! 💪

---

## 📚 Bài viết liên quan

- [AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh](/posts/tu-vung-aws-cloudformation-infrastructure-as-code/)
- [Cloud Computing Cơ Bản — Thuật Ngữ Đám Mây Cho Developer](/posts/tu-vung-cloud-computing-co-ban/)
- [AWS ECS & EKS — Thuật Ngữ Container & Kubernetes Bằng Tiếng Anh](/posts/tu-vung-aws-ecs-eks-container-kubernetes/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
