---
title: "AWS Cost Optimization — Thuật Ngữ Tối Ưu Chi Phí Cloud"
date: 2023-01-29
summary: "Học 10+ thuật ngữ AWS Cost Optimization quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-cost-optimization"
description: "Học 12 thuật ngữ tiếng Anh về tối ưu chi phí AWS — từ reserved instance, spot instance đến right-sizing và cost allocation, giúp developer tiết kiệm tiền cloud."
categories: ["IT English"]
tags: ["aws", "cloud-computing", "devops"]
ShowToc: true
TocOpen: true
draft: false
---

Cloud rất tiện nhưng nếu không quản lý tốt, bill AWS có thể "bay" nhanh hơn bạn tưởng. Hiểu các thuật ngữ cost optimization sẽ giúp bạn tiết kiệm đáng kể — và đây cũng là kỹ năng mà mọi công ty đều cần ở developer và DevOps engineer.

---

### 🔹 Mô hình mua tài nguyên

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| reserved instance | /rɪˈzɜːrvd ˈɪnstəns/ | máy chủ đặt trước (cam kết dài hạn) | We saved 40% by switching production servers to **reserved instances**. |
| spot instance | /spɒt ˈɪnstəns/ | máy chủ giá rẻ theo thị trường | Use **spot instances** for batch processing jobs that can handle interruptions. |
| savings plan | /ˈseɪvɪŋz plæn/ | gói tiết kiệm cam kết sử dụng | A **savings plan** offers flexible discounts across EC2, Lambda, and Fargate. |
| free tier | /friː tɪər/ | gói miễn phí | New AWS accounts get 12 months of **free tier** for many services. |

### 🔹 Giám sát & cảnh báo chi phí

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| cost explorer | /kɒst ɪkˈsplɔːrər/ | công cụ phân tích chi phí | Use **Cost Explorer** to see which service is driving up your monthly bill. |
| budget | /ˈbʌdʒɪt/ | ngân sách | Set a monthly **budget** of $500 and get notified at 80% usage. |
| billing alarm | /ˈbɪlɪŋ əˈlɑːrm/ | cảnh báo hóa đơn | Create a **billing alarm** to alert the team when costs exceed $1000. |

### 🔹 Chiến lược tối ưu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| right-sizing | /raɪt ˈsaɪzɪŋ/ | chọn đúng kích cỡ tài nguyên | **Right-sizing** analysis showed we could downgrade from m5.xlarge to m5.large. |
| idle resource | /ˈaɪdəl ˈriːsɔːrs/ | tài nguyên không sử dụng | Terminate **idle resources** like unused EBS volumes and old snapshots. |
| data transfer cost | /ˈdeɪtə ˈtrænsfɜːr kɒst/ | chi phí truyền dữ liệu | **Data transfer costs** between regions can add up quickly if you're not careful. |
| tagging | /ˈtæɡɪŋ/ | gắn nhãn tài nguyên | Use consistent **tagging** to track costs by project and team. |
| cost allocation | /kɒst ˌæləˈkeɪʃən/ | phân bổ chi phí | Enable **cost allocation** tags to see how much each department spends. |

---

## 💡 Mẹo ghi nhớ

- **Reserved** vs **Spot**: Reserved = đặt phòng khách sạn trước (rẻ hơn, cam kết), Spot = phòng last-minute (siêu rẻ nhưng có thể bị hủy bất cứ lúc nào).
- **Right-sizing** = "mặc đúng size áo" — không mua áo XL khi chỉ cần size M.
- **Tagging** = "dán nhãn" — giống việc dán nhãn đồ trong tủ lạnh để biết của ai, tốn bao nhiêu.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. We reduced our EC2 bill by 35% after switching to ___.
2. Always set up a ___ to get notified before costs go over your limit.
3. ___ helps identify oversized instances that are wasting money.
4. Apply consistent ___ to all resources so you can track costs by project.
5. Use ___ for batch jobs that can tolerate interruptions — they're up to 90% cheaper.

{{< spoiler "✅ Đáp án" >}}
1. **reserved instances** — Cam kết dài hạn giúp giảm đáng kể chi phí EC2
2. **billing alarm** — Cảnh báo chi phí giúp phát hiện sớm khi vượt ngân sách
3. **Right-sizing** — Phân tích và chọn đúng kích cỡ instance phù hợp nhu cầu
4. **tagging** — Gắn nhãn nhất quán giúp theo dõi chi phí theo project/team
5. **spot instances** — Máy chủ giá rẻ theo thị trường, rẻ hơn đến 90% so với on-demand
{{< /spoiler >}}

---

## Tổng kết

Tối ưu chi phí cloud không chỉ là việc của team finance — developer cũng cần hiểu các khái niệm như **right-sizing**, **reserved instance**, và **tagging** để viết code và thiết kế hệ thống cost-effective. Bắt đầu bằng việc setup **billing alarm** và **budget** ngay hôm nay nhé! 💰
