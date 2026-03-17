---
title: "40 Từ Vựng Cloud Computing (AWS/GCP/Azure) Cho Developer"
slug: "40-tu-vung-cloud-computing-aws-gcp-azure"
date: 2026-03-18
summary: "Nắm vững 40 thuật ngữ Cloud Computing quan trọng nhất — từ IaaS, serverless đến auto-scaling, giúp developer Việt tự tin đọc docs và làm việc với cloud."
description: "Học 40 từ vựng Cloud Computing tiếng Anh cho developer Việt Nam. Giải thích thuật ngữ AWS, GCP, Azure — IaaS, PaaS, serverless, auto-scaling, load balancer — kèm phát âm IPA, ví dụ thực tế, bảng so sánh 3 nhà cloud."
tags: ["cloud-computing", "aws", "gcp", "azure", "it-english", "developer", "devops", "infrastructure"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Cloud computing đã trở thành **nền tảng bắt buộc** cho mọi developer. Dù bạn làm backend, DevOps hay fullstack, sớm muộn gì cũng phải đụng AWS, GCP, hoặc Azure. Nhưng khi đọc documentation hay tham gia meeting với team nước ngoài, bạn có thực sự hiểu **nghĩa chính xác** của những thuật ngữ cloud?

Rất nhiều developer Việt dùng cloud **theo hướng dẫn** — copy config, paste command — mà không hiểu bản chất. Khi gặp vấn đề mới, **không đủ từ vựng để search hay hỏi** đúng câu.

Bài viết này giúp bạn:
- Hiểu rõ **40 thuật ngữ cloud computing** quan trọng nhất
- Biết **cách phát âm** chuẩn IPA — không đọc sai khi meeting
- Nắm **tên tương đương** trên AWS, GCP, Azure
- Tự tin **đọc docs, viết proposal, và trao đổi** về cloud bằng tiếng Anh

---

## 1. Mô hình dịch vụ Cloud — Service Models

Trước khi đi vào từ vựng cụ thể, cần hiểu 3 mô hình nền tảng:

| Thuật ngữ | IPA | Nghĩa | Ví dụ |
|-----------|-----|-------|-------|
| **IaaS** (Infrastructure as a Service) | /ˌaɪ.æz.ə.ˈɛs/ | Hạ tầng dạng dịch vụ — bạn quản lý OS trở lên | AWS EC2, GCP Compute Engine, Azure VMs |
| **PaaS** (Platform as a Service) | /ˌpiː.æz.ə.ˈɛs/ | Nền tảng dạng dịch vụ — chỉ lo code, cloud lo infra | Heroku, Google App Engine, Azure App Service |
| **SaaS** (Software as a Service) | /ˌɛs.æz.ə.ˈɛs/ | Phần mềm dạng dịch vụ — dùng ngay, không cài đặt | Gmail, Slack, Salesforce |
| **FaaS** (Function as a Service) | /ˌɛf.æz.ə.ˈɛs/ | Hàm dạng dịch vụ — chạy code theo event, không quản lý server | AWS Lambda, Google Cloud Functions, Azure Functions |
| **Serverless** | /ˈsɜːrvərlɛs/ | Không cần quản lý server — cloud tự scale và quản lý | Lambda, Cloud Run, Azure Functions |

### 💡 Phân biệt nhanh

> **IaaS** = bạn thuê đất, tự xây nhà  
> **PaaS** = bạn thuê căn hộ, chỉ lo nội thất  
> **SaaS** = bạn thuê khách sạn, vào ở luôn  
> **FaaS** = bạn thuê phòng họp theo giờ  

---

## 2. Từ vựng Compute — Tính toán

| Thuật ngữ | IPA | Nghĩa | AWS / GCP / Azure |
|-----------|-----|-------|--------------------|
| **Instance** | /ˈɪnstəns/ | Một máy ảo đang chạy trên cloud | EC2 Instance / VM Instance / Virtual Machine |
| **Virtual Machine (VM)** | /ˈvɜːrtʃuəl məˈʃiːn/ | Máy ảo — giả lập một máy tính hoàn chỉnh | EC2 / Compute Engine / Azure VMs |
| **Container** | /kənˈteɪnər/ | Đóng gói ứng dụng + dependencies chạy độc lập | ECS, EKS / GKE / AKS |
| **Auto-scaling** | /ˌɔːtoʊ ˈskeɪlɪŋ/ | Tự động tăng/giảm tài nguyên theo nhu cầu | Auto Scaling Group / Autoscaler / VM Scale Sets |
| **Spot Instance** | /spɒt ˈɪnstəns/ | Máy ảo giá rẻ, có thể bị thu hồi bất cứ lúc nào | Spot Instances / Preemptible VMs / Spot VMs |
| **Reserved Instance** | /rɪˈzɜːrvd ˈɪnstəns/ | Máy ảo đặt trước 1-3 năm, giá rẻ hơn | Reserved Instances / Committed Use / Reserved VMs |
| **Bare Metal** | /bɛr ˈmɛtəl/ | Server vật lý, không chia sẻ với ai | EC2 Bare Metal / Bare Metal Solution / Dedicated Host |

### Ví dụ thực tế — Meeting discussion

> **"We need to set up auto-scaling for the API servers. During peak hours, traffic increases 5x, and we can't afford downtime."**  
> *(Chúng ta cần thiết lập auto-scaling cho API servers. Giờ cao điểm, traffic tăng gấp 5 lần, không thể để downtime.)*

> **"Let's use spot instances for the batch processing jobs — they're 70% cheaper and we don't mind if they get interrupted."**  
> *(Dùng spot instances cho batch processing nhé — rẻ hơn 70% và bị gián đoạn cũng không sao.)*

---

## 3. Từ vựng Storage — Lưu trữ

| Thuật ngữ | IPA | Nghĩa | AWS / GCP / Azure |
|-----------|-----|-------|--------------------|
| **Object Storage** | /ˈɒbdʒɪkt ˈstɔːrɪdʒ/ | Lưu trữ dạng object — file, ảnh, video, backup | S3 / Cloud Storage / Blob Storage |
| **Block Storage** | /blɒk ˈstɔːrɪdʒ/ | Lưu trữ dạng block — ổ đĩa gắn vào VM | EBS / Persistent Disk / Managed Disks |
| **Bucket** | /ˈbʌkɪt/ | "Thùng chứa" — container cấp cao nhất trong object storage | S3 Bucket / GCS Bucket / Blob Container |
| **CDN** (Content Delivery Network) | /ˌsiː.diː.ˈɛn/ | Mạng phân phối nội dung — cache gần user | CloudFront / Cloud CDN / Azure CDN |
| **Replication** | /ˌrɛplɪˈkeɪʃən/ | Sao chép dữ liệu sang nhiều vùng/region | Cross-Region Replication / Multi-region / Geo-replication |
| **Durability** | /ˌdjʊərəˈbɪləti/ | Độ bền dữ liệu — khả năng không mất data | 99.999999999% (11 nines) cho S3 |

### 💡 Tip đọc docs

Khi thấy "**eleven nines of durability**" (99.999999999%), nghĩa là trong 10 triệu object, bạn có thể mất **1 object mỗi 10,000 năm**. Đây là cách cloud vendor diễn đạt **data cực kỳ an toàn**.

---

## 4. Từ vựng Networking — Mạng

| Thuật ngữ | IPA | Nghĩa | AWS / GCP / Azure |
|-----------|-----|-------|--------------------|
| **VPC** (Virtual Private Cloud) | /ˌviː.piː.ˈsiː/ | Mạng riêng ảo — network cô lập trên cloud | VPC / VPC / VNet |
| **Subnet** | /ˈsʌbnɛt/ | Mạng con trong VPC | Subnet / Subnet / Subnet |
| **Load Balancer** | /loʊd ˈbælənsər/ | Bộ cân bằng tải — phân phối traffic đều | ALB, NLB / Cloud Load Balancing / Azure Load Balancer |
| **Firewall** | /ˈfaɪərwɔːl/ | Tường lửa — kiểm soát traffic ra/vào | Security Groups / Firewall Rules / NSG |
| **DNS** (Domain Name System) | /ˌdiː.ɛn.ˈɛs/ | Hệ thống phân giải tên miền | Route 53 / Cloud DNS / Azure DNS |
| **Ingress / Egress** | /ˈɪnɡrɛs/ /ˈiːɡrɛs/ | Lưu lượng vào (ingress) / ra (egress) | Thường tính phí egress, ingress miễn phí |
| **Peering** | /ˈpɪərɪŋ/ | Kết nối trực tiếp giữa 2 mạng VPC | VPC Peering / VPC Peering / VNet Peering |

### Ví dụ thực tế — Slack message

> **"The load balancer health check is failing for 2 instances in us-east-1. Can someone check the security group rules? We might have blocked port 443 by accident."**  
> *(Load balancer health check đang fail cho 2 instance ở us-east-1. Ai check security group rules được không? Có thể mình chặn port 443 nhầm.)*

---

## 5. Từ vựng Database & Data — Dữ liệu

| Thuật ngữ | IPA | Nghĩa | AWS / GCP / Azure |
|-----------|-----|-------|--------------------|
| **Managed Database** | /ˈmænɪdʒd ˈdeɪtəbeɪs/ | Database do cloud quản lý — auto backup, patching | RDS / Cloud SQL / Azure SQL Database |
| **Data Warehouse** | /ˈdeɪtə ˈwɛərhaʊs/ | Kho dữ liệu lớn — phân tích, reporting | Redshift / BigQuery / Synapse Analytics |
| **Data Lake** | /ˈdeɪtə leɪk/ | "Hồ dữ liệu" — lưu raw data mọi định dạng | S3 + Athena / Cloud Storage + BigQuery / ADLS |
| **NoSQL** | /noʊ ˌɛs.kjuː.ˈɛl/ | Database phi quan hệ — flexible schema | DynamoDB / Firestore, Bigtable / Cosmos DB |
| **Cache** | /kæʃ/ | Bộ nhớ đệm — truy xuất nhanh, giảm tải DB | ElastiCache / Memorystore / Azure Cache for Redis |

---

## 6. Từ vựng Security & IAM — Bảo mật

| Thuật ngữ | IPA | Nghĩa | Giải thích |
|-----------|-----|-------|------------|
| **IAM** (Identity & Access Management) | /ˌaɪ.eɪ.ˈɛm/ | Quản lý danh tính & quyền truy cập | Ai được làm gì trên cloud |
| **Role** | /roʊl/ | Vai trò — tập hợp quyền gán cho user/service | IAM Role / Service Account / Managed Identity |
| **Policy** | /ˈpɒləsi/ | Chính sách — quy tắc cho phép/từ chối hành động | IAM Policy / IAM Policy / RBAC Policy |
| **Encryption at Rest** | /ɪnˈkrɪpʃən ət rɛst/ | Mã hóa dữ liệu khi lưu trữ | Data được mã hóa trên ổ đĩa |
| **Encryption in Transit** | /ɪnˈkrɪpʃən ɪn ˈtrænzɪt/ | Mã hóa dữ liệu khi truyền | HTTPS, TLS — data mã hóa trên đường truyền |
| **Principle of Least Privilege** | /ˈprɪnsəpəl əv liːst ˈprɪvəlɪdʒ/ | Nguyên tắc quyền tối thiểu — chỉ cấp đúng quyền cần | Best practice bảo mật số 1 |

### Ví dụ thực tế — Code review comment

> **"This Lambda function has AdministratorAccess policy — that violates the principle of least privilege. Please scope it down to only the S3 and DynamoDB permissions it actually needs."**  
> *(Lambda function này có policy AdministratorAccess — vi phạm nguyên tắc quyền tối thiểu. Hãy giới hạn chỉ S3 và DynamoDB permissions mà nó cần.)*

---

## 7. Từ vựng Deployment & Operations

| Thuật ngữ | IPA | Nghĩa | Giải thích |
|-----------|-----|-------|------------|
| **Region** | /ˈriːdʒən/ | Vùng — khu vực địa lý có data center | us-east-1, ap-northeast-1, etc. |
| **Availability Zone (AZ)** | /əˌveɪləˈbɪləti zoʊn/ | Vùng khả dụng — data center riêng trong region | Mỗi region có 2-6 AZ |
| **High Availability (HA)** | /haɪ əˌveɪləˈbɪləti/ | Tính sẵn sàng cao — hệ thống luôn hoạt động | Multi-AZ, failover, redundancy |
| **Disaster Recovery (DR)** | /dɪˈzæstər rɪˈkʌvəri/ | Khôi phục sau thảm họa — kế hoạch backup cross-region | RTO, RPO là metrics chính |
| **Provisioning** | /prəˈvɪʒənɪŋ/ | Cung cấp, thiết lập tài nguyên | "Provision a new EC2 instance" |
| **Infrastructure as Code (IaC)** | /ˈɪnfrəstrʌktʃər æz koʊd/ | Hạ tầng dạng code — quản lý infra bằng file config | Terraform, CloudFormation, Pulumi |
| **Throughput** | /ˈθruːpʊt/ | Thông lượng — lượng data xử lý trong đơn vị thời gian | "The database throughput is 10,000 IOPS" |
| **Latency** | /ˈleɪtənsi/ | Độ trễ — thời gian phản hồi | "API latency is under 100ms" |

### Ví dụ thực tế — Technical proposal

> **"For disaster recovery, we recommend deploying a standby environment in ap-southeast-1 with an RPO of 1 hour and RTO of 15 minutes. All infrastructure will be managed as code using Terraform."**  
> *(Cho disaster recovery, chúng tôi đề xuất deploy môi trường standby ở ap-southeast-1 với RPO 1 giờ và RTO 15 phút. Toàn bộ hạ tầng quản lý bằng code dùng Terraform.)*

---

## 8. Bảng so sánh tên dịch vụ — 3 Cloud Providers

Cùng một concept nhưng **mỗi cloud đặt tên khác nhau**. Bảng này giúp bạn "dịch" nhanh:

| Concept | AWS | GCP | Azure |
|---------|-----|-----|-------|
| Virtual Machine | EC2 | Compute Engine | Virtual Machines |
| Serverless Functions | Lambda | Cloud Functions | Azure Functions |
| Object Storage | S3 | Cloud Storage | Blob Storage |
| Managed SQL DB | RDS | Cloud SQL | Azure SQL Database |
| NoSQL DB | DynamoDB | Firestore | Cosmos DB |
| Container Orchestration | EKS | GKE | AKS |
| DNS | Route 53 | Cloud DNS | Azure DNS |
| CDN | CloudFront | Cloud CDN | Azure CDN |
| IAM | IAM | IAM | Azure AD / Entra ID |
| IaC | CloudFormation | Deployment Manager | ARM Templates / Bicep |
| Message Queue | SQS | Cloud Tasks / Pub/Sub | Service Bus |
| Monitoring | CloudWatch | Cloud Monitoring | Azure Monitor |

---

## 9. Cách phát âm chuẩn — Pronunciation Guide

Những từ hay bị đọc sai:

| Từ | ❌ Sai | ✅ Đúng (IPA) | Ghi chú |
|----|--------|---------------|---------|
| Cache | /kæ.tʃeɪ/ | /kæʃ/ | Một âm tiết, giống "cash" |
| Latency | /lɑː.ten.si/ | /ˈleɪ.tən.si/ | Nhấn âm đầu |
| Throughput | /θruː.pʊt/ | /ˈθruː.pʊt/ | "Through" + "put" |
| Queue | /kjuːiː/ | /kjuː/ | Giống chữ "Q" |
| Subnet | /sʌb.nɛt/ | /ˈsʌb.nɛt/ | Nhấn âm đầu |
| Azure | /ə.zjʊr/ | /ˈæʒ.ər/ | "AZH-er", không phải "a-ZURE" |
| Kubernetes | nhiều cách sai | /kuːbərˈnɛtiːz/ | "koo-ber-NET-eez" |
| Nginx | /ɛn.ɡɪŋks/ | /ˌɛndʒɪnˈɛks/ | "engine-X" |

---

## 10. Practice — Bài tập thực hành

### Exercise 1: Điền từ vào chỗ trống

1. We store all static assets in an S3 _______ (thùng chứa trong object storage).
2. The API _______ (độ trễ) increased to 500ms after the deployment.
3. Each _______ (vùng) has multiple _______ (vùng khả dụng) for redundancy.
4. We need to set up _______ (tự động tăng/giảm tài nguyên) to handle traffic spikes.
5. Following the _______ (nguyên tắc quyền tối thiểu), this service should only access its own database.

### Exercise 2: Chọn dịch vụ đúng

Bạn cần lưu trữ 10TB ảnh user upload. Dùng dịch vụ nào?
- a) EBS (Block Storage)
- b) S3 (Object Storage)
- c) DynamoDB (NoSQL)

Bạn cần chạy một function mỗi khi có file upload lên S3. Dùng gì?
- a) EC2 Instance
- b) Lambda (FaaS)
- c) RDS

### Exercise 3: Viết email đề xuất cloud migration

Viết email ngắn (5-7 câu) đề xuất migrate từ on-premise sang cloud. Dùng ít nhất 5 thuật ngữ đã học.

**Gợi ý mở đầu:**
> "Hi team, I'd like to propose migrating our current on-premise infrastructure to AWS..."

### Đáp án Exercise 1
1. **bucket** 2. **latency** 3. **region**, **availability zones** 4. **auto-scaling** 5. **principle of least privilege**

### Đáp án Exercise 2
1. **b) S3** — Object Storage phù hợp cho lưu file lớn, durability cao, giá rẻ.
2. **b) Lambda** — Event-driven, chạy khi có trigger, không cần quản lý server.

---

## Kết luận

Cloud computing là lĩnh vực **không thể tránh** cho developer hiện đại. Nắm vững 40 thuật ngữ trong bài này giúp bạn:

✅ **Đọc docs** AWS/GCP/Azure không cần dịch  
✅ **Tham gia meeting** cloud architecture tự tin  
✅ **Viết proposal** và technical documents chuyên nghiệp  
✅ **Phỏng vấn** cloud-related positions dễ dàng hơn  

Đừng chỉ đọc — hãy **dùng ngay** trong công việc hàng ngày. Lần tới deploy lên cloud, thử diễn đạt bằng tiếng Anh xem!

---

*Bài tiếp theo: [Cách đọc hiểu RFC & Technical Specifications](/posts/cach-doc-hieu-rfc-technical-specifications/) — kỹ năng đọc hiểu tài liệu kỹ thuật chuẩn quốc tế.*
