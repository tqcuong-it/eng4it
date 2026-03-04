---
title: "AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh"
date: 2023-01-21
summary: "Học 10+ thuật ngữ AWS CloudFormation quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-cloudformation-infrastructure-as-code"
description: "Học 12 thuật ngữ tiếng Anh về AWS CloudFormation — stack, template, drift detection và hơn thế. Dành cho dev Việt làm IaC."
categories: ["IT English"]
tags: ["aws", "devops", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

**Infrastructure as Code (IaC)** là cách quản lý hạ tầng bằng code thay vì click tay trên console. AWS CloudFormation là dịch vụ IaC native của AWS, và nếu bạn đọc docs hay trao đổi với team global, bạn sẽ gặp những thuật ngữ này liên tục. Cùng học nhé!

---

## 📚 Bảng Từ Vựng

### 🔹 Khái niệm cốt lõi (Core Concepts)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| stack | /stæk/ | ngăn xếp (tập hợp tài nguyên được quản lý) | We deployed the entire backend as a single CloudFormation **stack**. |
| template | /ˈtemplət/ | mẫu (file YAML/JSON mô tả hạ tầng) | The **template** defines an EC2 instance, a security group, and an S3 bucket. |
| resource | /ˈriːsɔːrs/ | tài nguyên (thành phần AWS trong template) | Each **resource** block in the template maps to an actual AWS service component. |
| parameter | /pəˈræmətər/ | tham số (giá trị truyền vào khi tạo stack) | We use a **parameter** for the environment name so the same template works for dev and prod. |

### 🔹 Đầu ra & Ánh xạ (Outputs & Mappings)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| output | /ˈaʊtpʊt/ | đầu ra (giá trị xuất từ stack) | The stack **output** exports the load balancer DNS name for other stacks to use. |
| mapping | /ˈmæpɪŋ/ | ánh xạ (bảng tra cứu key-value) | We use a **mapping** to select the correct AMI ID based on the AWS region. |
| cross-stack reference | /krɔːs stæk ˈrefərəns/ | tham chiếu chéo stack | The frontend stack uses a **cross-stack reference** to get the API endpoint from the backend stack. |

### 🔹 Thay đổi & Kiểm soát (Changes & Control)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| change set | /tʃeɪndʒ set/ | bộ thay đổi (preview trước khi apply) | Always create a **change set** before updating production — review what will be modified. |
| drift detection | /drɪft dɪˈtekʃən/ | phát hiện trôi cấu hình | Run **drift detection** weekly to catch any manual changes made outside CloudFormation. |
| rollback | /ˈroʊlbæk/ | hoàn tác (quay về trạng thái trước) | The stack update failed, so CloudFormation triggered an automatic **rollback**. |
| nested stack | /ˈnestɪd stæk/ | stack lồng nhau | We broke the monolithic template into **nested stacks** for networking, compute, and database. |
| custom resource | /ˈkʌstəm ˈriːsɔːrs/ | tài nguyên tùy chỉnh (chạy Lambda khi deploy) | We created a **custom resource** backed by Lambda to run database migrations during deployment. |

---

## 💡 Mẹo Ghi Nhớ

- **Stack = Template + thực tế**: Template là bản thiết kế, stack là ngôi nhà đã xây xong. Update template → update stack.
- **Change Set giống PR review**: Trước khi merge code bạn review PR, trước khi update stack bạn review change set.
- **Drift = ai đó sửa tay**: Bạn dùng IaC nhưng ai đó vào console chỉnh tay → cấu hình bị "drift" khỏi template.

---

## 📝 Bài Tập

**Điền từ thích hợp vào chỗ trống:**

1. Define your infrastructure in a YAML ___ and let CloudFormation create the resources.
2. Before updating production, create a ___ ___ to preview what changes will be applied.
3. The update failed, triggering an automatic ___ to the previous state.
4. Run ___ ___ to check if anyone modified resources manually outside CloudFormation.
5. Use ___ ___ to break a large template into smaller, reusable components.

{{< spoiler "✅ Đáp án" >}}
1. **template** — Template là file YAML/JSON mô tả toàn bộ hạ tầng
2. **change set** — Change set cho phép preview thay đổi trước khi apply
3. **rollback** — CloudFormation tự động rollback khi update thất bại
4. **drift detection** — Phát hiện cấu hình bị thay đổi ngoài CloudFormation
5. **nested stacks** — Chia template lớn thành các stack nhỏ lồng nhau
{{< /spoiler >}}

---

## Tổng Kết

CloudFormation là công cụ IaC mạnh mẽ nhất trong hệ sinh thái AWS. 12 thuật ngữ trên bao phủ toàn bộ lifecycle: từ viết template, tạo stack, đến quản lý thay đổi và phát hiện drift. Hãy nhớ: **IaC không chỉ là viết code — mà là quản lý thay đổi một cách có kiểm soát** 🏗️
