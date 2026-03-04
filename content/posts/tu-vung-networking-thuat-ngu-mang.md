---
title: "Networking — 15 Thuật Ngữ Mạng Mà Developer Nào Cũng Phải Biết"
date: 2023-02-04
summary: "Học 15 thuật ngữ Networking quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-networking-thuat-ngu-mang"
description: "Học 15 thuật ngữ tiếng Anh quan trọng nhất về Networking — từ TCP, DNS đến load balancer và CDN. Giải thích dễ hiểu kèm ví dụ thực tế cho developer Việt Nam."
categories: ["IT English"]
tags: ["backend", "devops", "frontend", "networking"]
ShowToc: true
TocOpen: true
draft: false
---

Dù bạn là frontend hay backend developer, **networking** là nền tảng mà mọi thứ trên internet đều dựa vào. Hiểu rõ thuật ngữ mạng bằng tiếng Anh giúp bạn debug nhanh hơn, đọc docs chuẩn hơn, và tự tin hơn khi discuss kiến trúc hệ thống. Cùng mình khám phá 15 từ vựng quan trọng nhất nhé! 🌐

---

### 🔹 Giao thức cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| TCP | /ˌtiː.siː.ˈpiː/ | Transmission Control Protocol — giao thức truyền tin cậy | **TCP** ensures all packets arrive in the correct order. |
| UDP | /ˌjuː.diː.ˈpiː/ | User Datagram Protocol — giao thức truyền nhanh, không đảm bảo | Video streaming uses **UDP** because speed matters more than reliability. |
| IP address | /ˌaɪ.ˈpiː əˈdrɛs/ | địa chỉ IP — định danh thiết bị trên mạng | Each server has a unique **IP address** to receive incoming traffic. |
| port | /pɔːrt/ | cổng kết nối mạng | The web server listens on **port** 80 for HTTP and 443 for HTTPS. |

### 🔹 DNS & Truy cập web

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| DNS | /ˌdiː.en.ˈɛs/ | Domain Name System — hệ thống phân giải tên miền | **DNS** translates domain names like google.com into IP addresses. |
| HTTP | /ˌeɪtʃ.tiː.tiː.ˈpiː/ | HyperText Transfer Protocol — giao thức truyền tải web | The browser sends an **HTTP** request to fetch the webpage. |
| HTTPS | /ˌeɪtʃ.tiː.tiː.piː.ˈɛs/ | HTTP Secure — HTTP có mã hóa SSL/TLS | Always use **HTTPS** in production to encrypt data in transit. |
| SSL/TLS | /ˌɛs.ɛs.ˈɛl ˌtiː.ɛl.ˈɛs/ | giao thức mã hóa kết nối | We renewed the **SSL/TLS** certificate before it expired. |

### 🔹 Hạ tầng mạng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| firewall | /ˈfaɪərwɔːl/ | tường lửa — lọc traffic vào/ra | The **firewall** blocks all incoming traffic except port 443. |
| load balancer | /loʊd ˈbælənsər/ | bộ cân bằng tải | Our **load balancer** distributes requests across three backend servers. |
| proxy | /ˈprɒksi/ | máy chủ trung gian (phía client) | The company uses a **proxy** to filter outbound web requests. |
| reverse proxy | /rɪˈvɜːrs ˈprɒksi/ | proxy ngược (phía server) | Nginx acts as a **reverse proxy** in front of our application servers. |

### 🔹 Hiệu năng mạng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| CDN | /ˌsiː.diː.ˈɛn/ | Content Delivery Network — mạng phân phối nội dung | We serve static assets through a **CDN** to reduce page load time globally. |
| latency | /ˈleɪtənsi/ | độ trễ mạng | The **latency** between our server in Tokyo and users in Vietnam is about 50ms. |
| bandwidth | /ˈbændwɪdθ/ | băng thông — dung lượng truyền tải | We upgraded our **bandwidth** to handle the traffic spike during Black Friday. |

---

## 💡 Mẹo ghi nhớ

- **TCP vs UDP**: TCP giống gửi thư bảo đảm (chậm nhưng chắc chắn đến). UDP giống hét qua cửa sổ (nhanh nhưng có thể mất). Video call dùng UDP vì mất 1-2 frame không sao, nhưng chuyển tiền phải dùng TCP!
- **Proxy vs Reverse Proxy**: Proxy đứng phía client (bảo vệ người dùng). Reverse proxy đứng phía server (bảo vệ server). Nhớ: "reverse" = đảo ngược vị trí.
- **Latency vs Bandwidth**: Latency = thời gian nước chảy từ đầu ống đến cuối ống. Bandwidth = độ rộng của ống. Ống to mà dài thì vẫn chậm!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Our API response time increased because of high network ___.
2. We use Cloudflare as a ___ to cache static files closer to users worldwide.
3. The ___ resolved the domain name to the correct IP address.
4. Nginx works as a ___ ___, forwarding client requests to the upstream application servers.
5. Make sure the ___ allows inbound traffic on port 22 only from the VPN IP range.

---

{{< spoiler "✅ Đáp án" >}}
1. **latency** — Latency cao nghĩa là mạng bị trễ, response time tăng
2. **CDN** — CDN cache nội dung ở nhiều vị trí để giảm thời gian tải
3. **DNS** — DNS phân giải tên miền thành địa chỉ IP
4. **reverse proxy** — Reverse proxy nhận request từ client rồi chuyển đến server phía sau
5. **firewall** — Firewall kiểm soát traffic vào/ra dựa trên rules
{{< /spoiler >}}

---

Networking là nền tảng của mọi ứng dụng web. Nắm vững 15 thuật ngữ này, bạn sẽ tự tin hơn rất nhiều khi đọc docs, troubleshoot, hay discuss system design với team. Hãy thử dùng chúng trong daily standup nhé! 💪

---

## 📚 Bài viết liên quan

- [Từ Vựng Linux & Terminal — Thuật Ngữ Dòng Lệnh Cho Developer](/posts/tu-vung-linux-terminal-thuat-ngu-dong-lenh/)
- [API & REST — 15 Thuật Ngữ Giao Tiếp Hệ Thống Developer Cần Nắm](/posts/tu-vung-api-rest-thuat-ngu-giao-tiep-he-thong/)
- [Từ Vựng Kubernetes — Thuật Ngữ K8s Dành Cho Developer](/posts/tu-vung-kubernetes-thuat-ngu-k8s/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
