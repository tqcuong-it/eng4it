---
title: "AWS IAM — Thuật Ngữ Bảo Mật & Phân Quyền Bằng Tiếng Anh"
date: 2023-01-20
summary: "Học 10+ thuật ngữ AWS IAM quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-iam-bao-mat-phan-quyen"
description: "Học 14 thuật ngữ tiếng Anh về AWS IAM — user, role, policy, MFA và hơn thế. Dành cho developer Việt muốn master cloud security."
categories: ["IT English"]
tags: ["aws", "cybersecurity", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

Nếu bạn làm việc với AWS, **IAM (Identity and Access Management)** là thứ bạn chạm vào hàng ngày — từ tạo user, gán quyền, đến cấu hình MFA. Hiểu đúng thuật ngữ tiếng Anh sẽ giúp bạn đọc docs nhanh hơn và trao đổi chính xác hơn với team. Cùng bắt đầu nhé!

---

## 📚 Bảng Từ Vựng

### 🔹 Danh tính & Nhóm (Identity & Groups)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| user | /ˈjuːzər/ | người dùng (tài khoản IAM) | Each developer should have their own IAM **user** instead of sharing credentials. |
| group | /ɡruːp/ | nhóm người dùng | We added all backend devs to the "Developers" **group** so they share the same permissions. |
| principal | /ˈprɪnsəpəl/ | chủ thể (thực thể được cấp quyền) | The **principal** in this policy refers to the Lambda execution role. |
| identity provider | /aɪˈdentəti prəˈvaɪdər/ | nhà cung cấp danh tính | We configured Google Workspace as an **identity provider** for SSO into AWS. |

### 🔹 Vai trò & Phân quyền (Roles & Permissions)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| role | /roʊl/ | vai trò (bộ quyền tạm thời) | The EC2 instance uses an IAM **role** to access S3 without hardcoded keys. |
| policy | /ˈpɑːləsi/ | chính sách (tài liệu định nghĩa quyền) | Attach a read-only **policy** to the auditor group. |
| permission | /pərˈmɪʃən/ | quyền truy cập | This role doesn't have **permission** to delete objects from the production bucket. |
| resource-based policy | /ˈriːsɔːrs beɪst ˈpɑːləsi/ | chính sách gắn trên tài nguyên | We used a **resource-based policy** on the S3 bucket to allow cross-account access. |
| condition | /kənˈdɪʃən/ | điều kiện (trong policy) | The **condition** block restricts access to requests coming from our office IP range. |

### 🔹 Bảo mật & Uỷ quyền (Security & Delegation)

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| MFA | /ˌem ef ˈeɪ/ | xác thực đa yếu tố | Enable **MFA** on the root account — it's the first thing you should do. |
| access key | /ˈækses kiː/ | khoá truy cập (cho API/CLI) | Rotate your **access keys** every 90 days as a security best practice. |
| trust relationship | /trʌst rɪˈleɪʃənʃɪp/ | mối quan hệ tin cậy (giữa role và principal) | Edit the **trust relationship** to allow the CI/CD account to assume this role. |
| STS | /ˌes tiː ˈes/ | dịch vụ cấp token tạm thời | **STS** issues temporary credentials when a user assumes a cross-account role. |
| assume role | /əˈsuːm roʊl/ | nhận vai trò (lấy quyền tạm thời) | The deployment script calls **assume role** to get temporary credentials for production. |

---

## 💡 Mẹo Ghi Nhớ

- **Policy vs Permission**: Policy là "tài liệu" chứa các rules, còn permission là "quyền cụ thể" bên trong policy đó. Một policy có thể chứa nhiều permissions.
- **User vs Role**: User là danh tính cố định (dùng password/access key), còn Role là bộ quyền tạm thời mà ai đó "assume" khi cần — giống như mượn thẻ ra vào rồi trả lại.
- **STS + Assume Role** luôn đi cùng nhau: STS là dịch vụ phát hành "vé tạm", assume role là hành động xin vé đó.

---

## 📝 Bài Tập

**Điền từ thích hợp vào chỗ trống:**

1. Each developer should have their own IAM ___ with unique credentials.
2. Attach a read-only ___ to restrict what the auditor can do.
3. Enable ___ on the root account for an extra layer of security.
4. The CI/CD pipeline calls ___ ___ to get temporary production credentials.
5. We set a ___ in the policy to only allow access from the company VPN.

{{< spoiler "✅ Đáp án" >}}
1. **user** — Mỗi dev nên có IAM user riêng, không share credentials
2. **policy** — Policy định nghĩa quyền truy cập cụ thể
3. **MFA** — Multi-Factor Authentication bảo vệ tài khoản root
4. **assume role** — Nhận vai trò tạm thời để truy cập môi trường production
5. **condition** — Condition block trong policy giới hạn điều kiện truy cập
{{< /spoiler >}}

---

## Tổng Kết

IAM là nền tảng bảo mật của mọi hệ thống AWS. Nắm vững 14 thuật ngữ trên sẽ giúp bạn tự tin đọc tài liệu, viết policy, và thảo luận về security architecture với team quốc tế. Hãy bắt đầu từ việc **hiểu rõ sự khác nhau giữa user, role, và policy** — ba khái niệm nền tảng nhất! 🔐

---

## 📚 Bài viết liên quan

- [AWS VPC — Thuật Ngữ Mạng Đám Mây Mà Developer Không Thể Bỏ Qua](/posts/tu-vung-aws-vpc-thuat-ngu-mang-dam-may/)
- [AWS DynamoDB — Thuật Ngữ NoSQL Database Cho Developer](/posts/tu-vung-aws-dynamodb-nosql-database/)
- [AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh](/posts/tu-vung-aws-cloudformation-infrastructure-as-code/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
