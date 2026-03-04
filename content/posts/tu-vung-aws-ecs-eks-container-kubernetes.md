---
title: "AWS ECS & EKS — Thuật Ngữ Container & Kubernetes Bằng Tiếng Anh"
date: 2023-01-22
summary: "Học 10+ thuật ngữ AWS ECS & EKS quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-aws-ecs-eks-container-kubernetes"
description: "Học 12 thuật ngữ tiếng Anh về AWS ECS, EKS — cluster, pod, Fargate, Helm chart. Dành cho dev Việt làm việc với container."
categories: ["IT English"]
tags: ["aws", "devops", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

Container đã thay đổi cách chúng ta deploy ứng dụng, và AWS cung cấp hai dịch vụ chính: **ECS** (Elastic Container Service) và **EKS** (Elastic Kubernetes Service). Dù bạn dùng dịch vụ nào, những thuật ngữ tiếng Anh dưới đây sẽ xuất hiện liên tục trong docs, meetings và Slack channels.

---

## 📚 Bảng Từ Vựng

### 🔹 ECS — Elastic Container Service

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| cluster | /ˈklʌstər/ | cụm (nhóm máy chạy container) | We created a new ECS **cluster** for the staging environment. |
| task definition | /tæsk ˌdefɪˈnɪʃən/ | định nghĩa tác vụ (blueprint cho container) | The **task definition** specifies the Docker image, CPU, memory, and port mappings. |
| service | /ˈsɜːrvɪs/ | dịch vụ (quản lý số lượng task chạy) | The ECS **service** ensures that exactly 3 replicas of the API container are always running. |
| container instance | /kənˈteɪnər ˈɪnstəns/ | máy chủ chạy container (EC2 trong cluster) | We need to add more **container instances** to handle the traffic spike. |
| Fargate | /ˈfɑːrɡeɪt/ | serverless container (không quản lý EC2) | Switch to **Fargate** so you don't have to manage the underlying EC2 instances. |
| sidecar | /ˈsaɪdkɑːr/ | container phụ (chạy cùng container chính) | We added a logging **sidecar** container that ships logs to CloudWatch. |

### 🔹 EKS — Elastic Kubernetes Service

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pod | /pɑːd/ | pod (đơn vị nhỏ nhất trong K8s) | Each **pod** runs one main container plus an optional sidecar for monitoring. |
| deployment | /dɪˈplɔɪmənt/ | triển khai (quản lý replicas của pod) | Update the **deployment** manifest to roll out the new image version. |
| namespace | /ˈneɪmspeɪs/ | không gian tên (phân tách logic trong cluster) | We use separate **namespaces** for dev, staging, and production workloads. |
| ingress | /ˈɪnɡres/ | điểm vào (quản lý traffic từ ngoài vào cluster) | Configure the **ingress** resource to route traffic from the domain to the correct service. |
| Helm chart | /helm tʃɑːrt/ | gói cài đặt Helm (package K8s manifests) | Install Redis using the official **Helm chart** instead of writing manifests from scratch. |
| node group | /noʊd ɡruːp/ | nhóm node (tập EC2 instances cho EKS) | Scale up the **node group** to add more compute capacity to the Kubernetes cluster. |

---

## 💡 Mẹo Ghi Nhớ

- **ECS vs EKS**: ECS là "nhà" của AWS (dễ dùng, ít config), EKS là "nhà" của Kubernetes (linh hoạt, chuẩn open-source). Task definition (ECS) ≈ Pod spec (EKS).
- **Fargate = "tôi không muốn quản lý server"**: Dùng Fargate khi bạn muốn chỉ lo code, không lo EC2. Đổi lại, chi phí cao hơn một chút.
- **Sidecar pattern**: Hình dung xe máy có thùng bên hông — container chính là xe, sidecar là thùng phụ chạy cùng (logging, proxy, monitoring).

---

## 📝 Bài Tập

**Điền từ thích hợp vào chỗ trống:**

1. The ___ ___ specifies the Docker image, CPU, and memory for each container.
2. Use ___ to run containers without managing EC2 instances.
3. Each ___ in Kubernetes can contain one or more tightly coupled containers.
4. Configure the ___ resource to route external traffic to the internal services.
5. We use separate ___ to isolate dev, staging, and production workloads in the same cluster.

{{< spoiler "✅ Đáp án" >}}
1. **task definition** — Blueprint cho container trong ECS, giống pod spec trong K8s
2. **Fargate** — Serverless compute engine, không cần quản lý EC2
3. **pod** — Đơn vị deploy nhỏ nhất trong Kubernetes
4. **ingress** — Quản lý routing traffic từ bên ngoài vào cluster
5. **namespaces** — Phân tách logic các workload trong cùng một cluster
{{< /spoiler >}}

---

## Tổng Kết

Container orchestration là kỹ năng thiết yếu của modern DevOps. Dù bạn chọn ECS hay EKS, 12 thuật ngữ trên sẽ giúp bạn đọc docs, viết config, và tham gia thiết kế hệ thống container một cách tự tin. Tip: **bắt đầu với ECS + Fargate nếu mới học, chuyển sang EKS khi cần Kubernetes ecosystem** 🐳

---

## 📚 Bài viết liên quan

- [AWS CloudFormation — Thuật Ngữ Infrastructure as Code Bằng Tiếng Anh](/posts/tu-vung-aws-cloudformation-infrastructure-as-code/)
- [Cloud Computing Cơ Bản — Thuật Ngữ Đám Mây Cho Developer](/posts/tu-vung-cloud-computing-co-ban/)
- [AWS Cost Optimization — Thuật Ngữ Tối Ưu Chi Phí Cloud](/posts/tu-vung-aws-cost-optimization/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
