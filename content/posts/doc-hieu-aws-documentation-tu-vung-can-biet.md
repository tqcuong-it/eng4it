---
title: "Đọc Hiểu AWS Documentation — Từ Vựng Cần Biết cho Developer"
slug: "doc-hieu-aws-documentation-tu-vung-can-biet"
date: 2026-03-09
summary: "Tổng hợp từ vựng quan trọng để đọc hiểu AWS Documentation — phiên âm IPA, giải thích bằng tiếng Việt, và ví dụ thực tế từ AWS docs."
description: "Hướng dẫn đọc hiểu AWS Documentation cho developer Việt Nam. Từ vựng AWS quan trọng nhất: IAM, EC2, S3, Lambda, VPC — bảng EN-VN song ngữ, phiên âm IPA, ví dụ thực tế."
tags: ["aws", "cloud", "vocabulary", "it-english", "documentation", "developer"]
categories: ["Workplace English"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

AWS (Amazon Web Services) là nền tảng cloud **phổ biến nhất thế giới**, và documentation của họ cực kỳ chi tiết — nhưng cũng **rất dài và đầy thuật ngữ chuyên ngành**.

Với developer Việt Nam, rào cản lớn nhất không phải là kỹ thuật, mà là **từ vựng tiếng Anh**. Bạn biết cách dùng EC2, nhưng khi đọc docs gặp "provisioning", "throttling", "idempotent" — bạn phải dừng lại Google. Điều đó **làm chậm workflow** đáng kể.

Bài này giúp bạn **master từ vựng AWS Documentation**, chia theo nhóm:
- Từ vựng chung trong AWS docs
- Thuật ngữ theo từng service
- Cách đọc & navigate AWS docs hiệu quả

---

## 1. Từ vựng chung trong AWS Documentation

Những từ này **xuất hiện ở mọi trang** AWS docs, bất kể service nào:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ngữ cảnh trong AWS |
|---|-----------|-----|-------------------|---------------------|
| 1 | **Provision** | /prəˈvɪʒ.ən/ | Cung cấp, khởi tạo tài nguyên | *"Provision an EC2 instance in us-east-1."* |
| 2 | **Deploy** | /dɪˈplɔɪ/ | Triển khai ứng dụng/hạ tầng | *"Deploy your application using CloudFormation."* |
| 3 | **Configuration** | /kənˌfɪɡ.jəˈreɪ.ʃən/ | Cấu hình — thiết lập tham số | *"Review the configuration settings before launch."* |
| 4 | **Credentials** | /krɪˈden.ʃəlz/ | Thông tin xác thực (access key, secret) | *"Never hardcode credentials in your application."* |
| 5 | **Endpoint** | /ˈend.pɔɪnt/ | Điểm truy cập dịch vụ (URL) | *"Use the regional endpoint for lower latency."* |
| 6 | **Throttling** | /ˈθrɒt.lɪŋ/ | Giới hạn tốc độ gọi API | *"You're being throttled — implement exponential backoff."* |
| 7 | **Idempotent** | /ˌaɪ.demˈpəʊ.tənt/ | Bất biến kết quả — gọi nhiều lần vẫn cùng kết quả | *"This API is idempotent — safe to retry on failure."* |
| 8 | **Latency** | /ˈleɪ.tən.si/ | Độ trễ — thời gian phản hồi | *"Choose a region with low latency to your users."* |
| 9 | **Throughput** | /ˈθruː.pʊt/ | Thông lượng — lượng dữ liệu xử lý được | *"DynamoDB provisioned throughput: 5 read capacity units."* |
| 10 | **Availability** | /əˌveɪ.ləˈbɪl.ə.ti/ | Tính sẵn sàng — % thời gian hoạt động | *"S3 provides 99.99% availability."* |
| 11 | **Durability** | /ˌdjʊə.rəˈbɪl.ə.ti/ | Độ bền dữ liệu — khả năng không mất data | *"S3 offers 99.999999999% (11 9's) durability."* |
| 12 | **Scalability** | /ˌskeɪ.ləˈbɪl.ə.ti/ | Khả năng mở rộng | *"Auto Scaling ensures horizontal scalability."* |
| 13 | **Redundancy** | /rɪˈdʌn.dən.si/ | Dự phòng — bản sao để tránh mất data | *"Multi-AZ provides redundancy for high availability."* |
| 14 | **Deprecated** | /ˈdep.rə.keɪ.tɪd/ | Ngừng hỗ trợ — sẽ bị loại bỏ | *"This API version is deprecated. Migrate to v2."* |
| 15 | **Quota (limit)** | /ˈkwəʊ.tə/ | Hạn mức — giới hạn tài nguyên | *"Request a quota increase for your account."* |

---

## 2. IAM — Identity & Access Management

IAM là service **bắt buộc phải hiểu** — mọi thứ trên AWS đều liên quan đến quyền truy cập:

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 16 | **Principal** | /ˈprɪn.sɪ.pəl/ | Chủ thể — ai/cái gì đang request | *"The principal in this policy is the Lambda function."* |
| 17 | **Policy** | /ˈpɒl.ə.si/ | Chính sách — quy tắc cho phép/từ chối | *"Attach the S3ReadOnly policy to the user."* |
| 18 | **Role** | /rəʊl/ | Vai trò — identity tạm thời cho service/user | *"Create an IAM role for the EC2 instance."* |
| 19 | **Permission** | /pəˈmɪʃ.ən/ | Quyền — hành động được phép thực hiện | *"The user doesn't have permission to access this bucket."* |
| 20 | **Assume role** | /əˈsjuːm rəʊl/ | Đảm nhận vai trò — chuyển sang identity khác | *"The Lambda function assumes a role to access DynamoDB."* |
| 21 | **Least privilege** | /liːst ˈprɪv.ɪ.lɪdʒ/ | Quyền tối thiểu — chỉ cấp đúng quyền cần | *"Follow the principle of least privilege."* |
| 22 | **ARN** | /ɑːrn/ | Amazon Resource Name — định danh tài nguyên | *"The ARN format: `arn:aws:s3:::my-bucket`"* |

---

## 3. Compute & Networking

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 23 | **Instance** | /ˈɪn.stəns/ | Máy ảo — server chạy trên cloud | *"Launch a t3.medium instance in ap-northeast-1."* |
| 24 | **AMI (Amazon Machine Image)** | /ˌeɪ.emˈaɪ/ | Ảnh máy — template để tạo instance | *"Use the latest Amazon Linux 2 AMI."* |
| 25 | **Security Group** | /sɪˈkjʊə.rə.ti ɡruːp/ | Nhóm bảo mật — firewall ảo cho instance | *"Open port 443 in the security group."* |
| 26 | **VPC (Virtual Private Cloud)** | /ˌviː.piːˈsiː/ | Mạng ảo riêng — network isolation | *"Create a VPC with CIDR block 10.0.0.0/16."* |
| 27 | **Subnet** | /ˈsʌb.net/ | Mạng con — chia nhỏ VPC | *"Place the database in a private subnet."* |
| 28 | **Load Balancer** | /ləʊd ˈbæl.ən.sər/ | Bộ cân bằng tải — phân phối traffic | *"The ALB distributes traffic across 3 instances."* |
| 29 | **Auto Scaling** | /ˌɔː.təʊ ˈskeɪ.lɪŋ/ | Tự động mở rộng/thu nhỏ tài nguyên | *"Auto Scaling adds instances when CPU > 70%."* |
| 30 | **Serverless** | /ˈsɜːv.ə.ləs/ | Không cần quản lý server | *"Lambda is a serverless compute service."* |
| 31 | **Cold start** | /kəʊld stɑːt/ | Khởi động nguội — delay khi function chưa warm | *"Cold start latency is ~200ms for Python Lambda."* |
| 32 | **Invocation** | /ˌɪn.vəˈkeɪ.ʃən/ | Lần gọi — mỗi lần function được trigger | *"You're billed per invocation and execution time."* |

---

## 4. Storage & Database

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 33 | **Bucket** | /ˈbʌk.ɪt/ | Thùng chứa — container cho S3 objects | *"Create a bucket with versioning enabled."* |
| 34 | **Object** | /ˈɒb.dʒɪkt/ | Đối tượng — file lưu trong S3 | *"Each object has a unique key within the bucket."* |
| 35 | **Partition key** | /pɑːˈtɪʃ.ən kiː/ | Khóa phân vùng — DynamoDB primary key | *"Choose a partition key with high cardinality."* |
| 36 | **Replication** | /ˌrep.lɪˈkeɪ.ʃən/ | Sao chép dữ liệu sang nơi khác | *"Enable cross-region replication for disaster recovery."* |
| 37 | **Snapshot** | /ˈsnæp.ʃɒt/ | Ảnh chụp nhanh — backup tại thời điểm | *"Take a snapshot of the RDS instance before upgrading."* |
| 38 | **Lifecycle policy** | /ˈlaɪf.saɪ.kəl ˈpɒl.ə.si/ | Chính sách vòng đời — tự động chuyển/xóa data | *"Set a lifecycle policy to move objects to Glacier after 90 days."* |

---

## 5. Monitoring & Deployment

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 39 | **Metric** | /ˈmet.rɪk/ | Chỉ số đo lường | *"Monitor the CPUUtilization metric in CloudWatch."* |
| 40 | **Alarm** | /əˈlɑːm/ | Cảnh báo — trigger khi metric vượt ngưỡng | *"Set an alarm when error rate exceeds 5%."* |
| 41 | **Log group** | /lɒɡ ɡruːp/ | Nhóm log — tập hợp log streams | *"Check the log group for Lambda execution errors."* |
| 42 | **Stack** | /stæk/ | Ngăn xếp tài nguyên — CloudFormation unit | *"Deploy the infrastructure stack to production."* |
| 43 | **Template** | /ˈtem.plət/ | Mẫu — file YAML/JSON định nghĩa infrastructure | *"The CloudFormation template defines all resources."* |
| 44 | **Drift** | /drɪft/ | Trôi — khi thực tế khác với template | *"Detect drift to find manual changes outside CloudFormation."* |
| 45 | **Blue/Green deployment** | /bluː ɡriːn/ | Triển khai xanh — chuyển traffic sang bản mới | *"Use blue/green deployment for zero-downtime releases."* |

---

## 6. Các cụm từ hay gặp trong AWS Docs

Khi đọc AWS Documentation, bạn sẽ liên tục gặp những pattern sau:

### Prerequisite & Requirements

| Câu trong docs | Nghĩa | Hành động |
|----------------|-------|-----------|
| *"Before you begin, ensure that..."* | Trước khi bắt đầu, hãy đảm bảo... | Kiểm tra điều kiện tiên quyết |
| *"You must have the following permissions..."* | Bạn cần có các quyền sau... | Kiểm tra IAM policy |
| *"This feature is available in the following Regions..."* | Tính năng này có ở các Region sau... | Kiểm tra Region hỗ trợ |

### Warnings & Best Practices

| Câu trong docs | Nghĩa | Mức độ |
|----------------|-------|--------|
| *"Important: This action is irreversible."* | Quan trọng: Hành động này không thể hoàn tác. | ⚠️ Cẩn thận |
| *"We recommend that you..."* | Chúng tôi khuyến nghị... | 💡 Best practice |
| *"Do not use this in production."* | Không dùng cho production. | 🚫 Cảnh báo |
| *"As a best practice, enable..."* | Theo best practice, hãy bật... | 💡 Nên làm |

### Pricing & Limits

| Câu trong docs | Nghĩa |
|----------------|-------|
| *"You are charged for..."* | Bạn bị tính phí cho... |
| *"Free tier eligible"* | Nằm trong gói miễn phí |
| *"Subject to service quotas"* | Chịu giới hạn hạn mức dịch vụ |
| *"Pricing varies by Region"* | Giá khác nhau theo Region |

---

## 7. Cách navigate AWS Documentation hiệu quả

### Cấu trúc docs AWS

Mỗi service có cấu trúc docs tương tự:

```
📂 Service Documentation
├── 📄 What is [Service]?          ← Tổng quan
├── 📄 Getting Started             ← Hướng dẫn bắt đầu
├── 📂 User Guide                  ← Hướng dẫn chi tiết
│   ├── Concepts                   ← Khái niệm
│   ├── Tutorials                  ← Bài hướng dẫn từng bước
│   └── Best Practices             ← Cách dùng tối ưu
├── 📂 API Reference               ← Tham chiếu API
├── 📂 CLI Reference               ← Lệnh AWS CLI
└── 📄 Troubleshooting             ← Xử lý lỗi
```

### Tips đọc nhanh

1. **Đọc "What is..." trước** — nắm khái niệm cốt lõi
2. **Skip to examples** — phần code/CLI examples thường rõ nhất
3. **Ctrl+F thuật ngữ** — tìm keyword thay vì đọc hết
4. **Chú ý "Note" và "Important"** — thông tin quan trọng hay bị bỏ qua
5. **Đọc FAQ/Troubleshooting cuối** — giải đáp 80% thắc mắc phổ biến

---

## 8. Bài tập thực hành (Practice)

### Exercise 1: Dịch đoạn AWS docs

Đọc đoạn sau và trả lời câu hỏi:

> *"Before you create an EC2 instance, ensure that you have an IAM role with the necessary permissions. The instance will be provisioned in the specified subnet within your VPC. You are charged per hour of usage. Pricing varies by instance type and Region."*

**Câu hỏi:**
1. Bạn cần gì trước khi tạo EC2 instance?
2. Instance sẽ được tạo ở đâu?
3. Bạn bị tính phí như thế nào?

### Exercise 2: Điền thuật ngữ

1. S3 có độ bền dữ liệu ______ (11 nines).
2. Khi API bị gọi quá nhiều, AWS sẽ ______ request của bạn.
3. Lambda có thể bị ______ khi function chưa được warm up.
4. Dùng ______ để backup RDS trước khi upgrade.
5. Nguyên tắc ______ nghĩa là chỉ cấp đúng quyền cần thiết.

### Đáp án

**Exercise 1:**
1. IAM role với permissions cần thiết
2. Trong subnet được chỉ định, nằm trong VPC của bạn
3. Tính phí theo giờ sử dụng, giá khác nhau theo instance type và Region

**Exercise 2:** 1. durability, 2. throttle, 3. cold start, 4. snapshot, 5. least privilege

---

## Tổng kết

Đọc AWS Documentation không khó — khó ở chỗ **từ vựng**. Khi bạn nắm vững các thuật ngữ trong bài này, việc đọc docs sẽ nhanh hơn **gấp 2-3 lần**.

Một số tips cuối:
- **Bookmark bài này** — tra cứu khi gặp từ lạ
- **Đọc docs bằng tiếng Anh** — AWS docs tiếng Anh luôn đầy đủ nhất
- **Thực hành hàng ngày** — mở docs AWS và đọc 15 phút/ngày
- **Ghi chú từ mới** — tạo flashcard cho thuật ngữ hay gặp

Tiếp theo, hãy thử đọc [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) — đây là tài liệu **phải đọc** cho mọi developer làm việc với AWS! 📚

---

*Bài tiếp theo: [40 Từ Vựng Database cho Backend Developer](/posts/40-tu-vung-database-cho-backend-developer/) — master từ vựng SQL, NoSQL, và database design!*
