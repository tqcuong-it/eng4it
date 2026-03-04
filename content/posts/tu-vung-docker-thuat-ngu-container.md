---
title: "Từ Vựng Docker — Thuật Ngữ Container Mà Developer Cần Biết"
date: 2023-01-30
summary: "Học 10+ thuật ngữ Từ Vựng Docker quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-docker-thuat-ngu-container"
description: "Học 14 thuật ngữ Docker quan trọng nhất cho developer: image, container, volume, Dockerfile, multi-stage build và nhiều hơn nữa."
categories: ["IT English"]
tags: ["devops", "cloud-computing", "backend", "testing", "workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

Docker đã trở thành công cụ **không thể thiếu** trong workflow của developer hiện đại. Dù bạn đang build microservices hay chỉ muốn setup môi trường dev nhanh gọn, việc hiểu rõ thuật ngữ Docker bằng tiếng Anh sẽ giúp bạn đọc docs, communicate với team quốc tế tự tin hơn rất nhiều. Cùng tìm hiểu nhé! 🐳

---

### 🔹 Khái niệm cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| image | /ˈɪmɪdʒ/ | ảnh (bản mẫu chỉ đọc) | We need to pull the latest **image** from Docker Hub before deploying. |
| container | /kənˈteɪnər/ | container (thể hiện đang chạy của image) | The **container** crashed because it ran out of memory. |
| layer | /ˈleɪər/ | lớp (tầng trong image) | Each instruction in a Dockerfile creates a new **layer** in the image. |
| tag | /tæɡ/ | thẻ (nhãn phiên bản) | Always use a specific **tag** like `v1.2.3` instead of `latest` in production. |

### 🔹 Lưu trữ & Mạng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| volume | /ˈvɒljuːm/ | ổ đĩa ảo (lưu trữ persistent) | Mount a **volume** to persist database data between container restarts. |
| network | /ˈnetwɜːrk/ | mạng (kết nối giữa các container) | Create a custom **network** so the API container can talk to the database container. |
| port mapping | /pɔːrt ˈmæpɪŋ/ | ánh xạ cổng | Use **port mapping** `-p 8080:80` to expose the container's port 80 on the host's port 8080. |

### 🔹 Dockerfile & Build

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| Dockerfile | /ˈdɒkərfaɪl/ | tệp cấu hình Docker | The **Dockerfile** defines all the steps needed to build our application image. |
| build context | /bɪld ˈkɒntekst/ | ngữ cảnh build (thư mục gửi đến Docker daemon) | Keep the **build context** small by using a `.dockerignore` file. |
| entrypoint | /ˈentripɔɪnt/ | điểm khởi chạy | Set the **entrypoint** to `node server.js` so the container starts the app automatically. |
| CMD | /siː.ɛm.diː/ | lệnh mặc định | The **CMD** instruction provides default arguments that can be overridden at runtime. |
| multi-stage build | /ˌmʌlti steɪdʒ bɪld/ | build nhiều giai đoạn | Use a **multi-stage build** to keep the final image small by discarding build dependencies. |

### 🔹 Registry & Orchestration

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| registry | /ˈredʒɪstri/ | kho lưu trữ image | We pushed the image to our private **registry** on AWS ECR. |
| compose | /kəmˈpoʊz/ | biên soạn (Docker Compose — công cụ quản lý multi-container) | Define all services in a **compose** file and run them with `docker compose up`. |

---

## 💡 Mẹo ghi nhớ

- **Image vs Container**: Image giống như **class** trong OOP, còn container giống như **instance** — image là bản thiết kế, container là thứ đang chạy thực tế.
- **Entrypoint vs CMD**: Entrypoint là "chương trình chính" luôn chạy, CMD là "tham số mặc định" có thể ghi đè. Nhớ: **Entry** = cửa vào bắt buộc, **CMD** = command tùy chọn.
- **Layer**: Mỗi dòng trong Dockerfile = 1 layer. Gộp các `RUN` command lại bằng `&&` để giảm số layer → image nhỏ hơn.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Each instruction in a Dockerfile creates a new ___ in the image.
2. We should use a ___ to persist data even after the container is removed.
3. The ___ file defines how to build our application step by step.
4. Use ___ `-p 3000:80` to make the web server accessible on port 3000.
5. A ___ build helps reduce the final image size by separating build and runtime stages.

{{< spoiler "✅ Đáp án" >}}
1. **layer** — Mỗi instruction tạo ra một layer mới trong image
2. **volume** — Volume giúp dữ liệu tồn tại sau khi container bị xóa
3. **Dockerfile** — Dockerfile chứa các bước để build image
4. **port mapping** — Ánh xạ cổng từ host vào container
5. **multi-stage** — Multi-stage build tách giai đoạn build và runtime
{{< /spoiler >}}

---

## Tổng kết

Docker có hệ thống thuật ngữ khá rõ ràng và nhất quán. Khi đã nắm vững 14 từ trên, bạn sẽ đọc Docker documentation dễ dàng hơn rất nhiều. Hãy thử viết một Dockerfile cho project của mình và áp dụng ngay những từ vựng này nhé! 🚀
