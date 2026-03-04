---
title: "Từ Vựng Kubernetes — Thuật Ngữ K8s Dành Cho Developer"
date: 2023-02-02
summary: "Học 10+ thuật ngữ Từ Vựng Kubernetes quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-kubernetes-thuat-ngu-k8s"
description: "Học 14 thuật ngữ Kubernetes cần biết: pod, deployment, service, ingress, configmap, helm, kubectl và nhiều hơn nữa, kèm phát âm IPA và ví dụ thực tế."
categories: ["IT English"]
tags: ["devops", "cloud-computing", "space-tech", "networking"]
ShowToc: true
TocOpen: true
draft: false
---

Kubernetes (K8s) là nền tảng **orchestration container** phổ biến nhất hiện nay. Thuật ngữ K8s khá nhiều và đặc thù, nên nếu bạn mới bắt đầu sẽ thấy hơi "ngợp". Bài này giúp bạn nắm rõ **14 thuật ngữ cốt lõi** để đọc docs và làm việc với K8s tự tin hơn. ☸️

---

### 🔹 Đơn vị cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pod | /pɒd/ | pod (đơn vị nhỏ nhất trong K8s) | Each **pod** runs one or more containers that share the same network namespace. |
| node | /noʊd/ | node (máy chủ vật lý hoặc ảo) | The scheduler assigns pods to a **node** based on available resources. |
| namespace | /ˈneɪmspeɪs/ | không gian tên (phân chia tài nguyên) | Create a separate **namespace** for each team to isolate their resources. |
| manifest | /ˈmænɪfɛst/ | tệp khai báo (YAML config) | Apply the **manifest** file to create the deployment using `kubectl apply -f`. |

### 🔹 Workload & Scaling

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| deployment | /dɪˈplɔɪmənt/ | triển khai (quản lý pod) | The **deployment** ensures three replicas of the API server are always running. |
| replica set | /ˈrɛplɪkə sɛt/ | bộ bản sao (duy trì số lượng pod) | The **replica set** automatically creates a new pod if one crashes. |
| horizontal pod autoscaler | /ˌhɒrɪˈzɒntl pɒd ˌɔːtoʊˈskeɪlər/ | bộ tự động mở rộng pod theo chiều ngang (HPA) | The **horizontal pod autoscaler** scales up to 10 pods when CPU exceeds 80%. |

### 🔹 Networking & Config

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| service | /ˈsɜːrvɪs/ | dịch vụ (expose pod ra mạng) | Create a **service** of type LoadBalancer to expose the app to the internet. |
| ingress | /ˈɪnɡrɛs/ | điểm vào (quản lý traffic HTTP) | Configure an **ingress** rule to route `/api` requests to the backend service. |
| configmap | /kənˈfɪɡmæp/ | bản đồ cấu hình (lưu config dạng key-value) | Store the database URL in a **configmap** instead of hardcoding it in the container. |
| secret | /ˈsiːkrɪt/ | bí mật (lưu thông tin nhạy cảm) | Put the API key in a Kubernetes **secret** and mount it as an environment variable. |
| persistent volume | /pərˈsɪstənt ˈvɒljuːm/ | ổ đĩa bền vững (lưu trữ lâu dài) | Attach a **persistent volume** to the database pod so data survives restarts. |

### 🔹 Công cụ quản lý

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| helm | /hɛlm/ | helm (trình quản lý package K8s) | Use **Helm** charts to deploy complex applications with a single command. |
| kubectl | /ˌkuːb ˈkʌtl/ | kubectl (CLI quản lý K8s) | Run `**kubectl** get pods` to list all running pods in the current namespace. |

---

## 💡 Mẹo ghi nhớ

- **Pod** giống như một "căn phòng" chứa 1 hoặc nhiều container cùng chia sẻ mạng và storage. Hầu hết pod chỉ chạy 1 container.
- **Service vs Ingress**: Service expose pod trong cluster (internal), Ingress expose ra ngoài internet (external) với routing rules.
- **ConfigMap vs Secret**: Cùng lưu config, nhưng Secret được **mã hóa base64** và có cơ chế bảo mật riêng — dùng cho password, API key, certificate.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. A ___ is the smallest deployable unit in Kubernetes.
2. Use a ___ to expose your application to external HTTP traffic with URL-based routing.
3. Store sensitive data like passwords in a Kubernetes ___ instead of a configmap.
4. The ___ ___ ___ automatically increases the number of pods based on CPU usage.
5. Run `___ get pods` to see all running pods in the cluster.

{{< spoiler "✅ Đáp án" >}}
1. **pod** — Pod là đơn vị triển khai nhỏ nhất trong K8s
2. **ingress** — Ingress quản lý traffic HTTP từ bên ngoài vào cluster
3. **secret** — Secret lưu trữ thông tin nhạy cảm được mã hóa
4. **horizontal pod autoscaler** — HPA tự động scale pod theo tải
5. **kubectl** — CLI chính để quản lý Kubernetes cluster
{{< /spoiler >}}

---

## Tổng kết

Kubernetes có hệ thống thuật ngữ khá đồ sộ, nhưng 14 từ trên là **nền tảng cốt lõi** mà bạn cần biết. Khi đã quen với các khái niệm này, việc đọc K8s documentation và YAML manifest sẽ dễ dàng hơn nhiều. Hãy thử deploy một ứng dụng đơn giản lên Minikube để thực hành! ☸️

---

## 📚 Bài viết liên quan

- [AWS VPC — Thuật Ngữ Mạng Đám Mây Mà Developer Không Thể Bỏ Qua](/posts/tu-vung-aws-vpc-thuat-ngu-mang-dam-may/)
- [Networking — 15 Thuật Ngữ Mạng Mà Developer Nào Cũng Phải Biết](/posts/tu-vung-networking-thuat-ngu-mang/)
- [AWS Route 53 & API Gateway — Thuật Ngữ DNS & API Bằng Tiếng Anh](/posts/tu-vung-aws-route53-api-gateway-dns-api/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
