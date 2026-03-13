---
title: "30 Từ Vựng Docker & Container mà Developer Phải Biết"
slug: "30-tu-vung-docker-container-cho-developer"
date: 2026-03-14
summary: "Tổng hợp 30 từ vựng Docker và Container quan trọng nhất — có phiên âm IPA, giải thích tiếng Việt, ví dụ Dockerfile & docker-compose thực tế."
description: "30 từ vựng Docker & Container cho developer Việt Nam: image, container, volume, network, Dockerfile, docker-compose, orchestration — bảng EN-VN song ngữ, phiên âm IPA, ví dụ thực tế."
tags: ["docker", "container", "devops", "vocabulary", "it-english", "developer"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Docker đã trở thành **công cụ không thể thiếu** trong workflow của developer. Từ local development đến production deployment, bạn sẽ gặp Docker ở mọi nơi — CI/CD pipeline, cloud platform, microservices architecture...

Vấn đề là: documentation của Docker **100% bằng tiếng Anh**. Khi đọc Dockerfile, docker-compose.yml, hay troubleshoot container issues, bạn cần hiểu **chính xác** từng thuật ngữ.

Bài viết này giúp bạn:
- Nắm vững **30 thuật ngữ Docker & Container** quan trọng nhất
- Biết **cách phát âm** (IPA) để tự tin nói trong meeting
- Hiểu qua **ví dụ thực tế** từ Dockerfile và docker-compose
- Giao tiếp với team quốc tế về containerization **không bị ngợp**

---

## 1. Từ vựng cơ bản — Docker Core Concepts

Đây là những thuật ngữ **nền tảng** mà bất kỳ developer nào dùng Docker đều phải biết.

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 1 | **Image** | /ˈɪm.ɪdʒ/ | Ảnh (bản mẫu) — template chỉ đọc để tạo container |
| 2 | **Container** | /kənˈteɪ.nər/ | Thùng chứa — một instance đang chạy từ image |
| 3 | **Dockerfile** | /ˈdɒk.ər.faɪl/ | File cấu hình — script chứa các lệnh build image |
| 4 | **Registry** | /ˈredʒ.ɪ.stri/ | Kho lưu trữ — nơi chứa và phân phối Docker images |
| 5 | **Repository** | /rɪˈpɒz.ɪ.tər.i/ | Kho chứa — tập hợp các phiên bản (tags) của một image |
| 6 | **Tag** | /tæɡ/ | Nhãn — đánh dấu phiên bản cụ thể của image |
| 7 | **Layer** | /ˈleɪ.ər/ | Lớp — mỗi instruction trong Dockerfile tạo một layer |
| 8 | **Daemon** | /ˈdiː.mən/ | Tiến trình nền — Docker Engine chạy phía server |

### Ví dụ thực tế

```dockerfile
# Mỗi dòng tạo một LAYER trong IMAGE
FROM node:20-alpine          # Base IMAGE từ REGISTRY
WORKDIR /app
COPY package*.json ./
RUN npm ci --production       # Layer: install dependencies
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

**Giải thích cho team:**
> "I built a new **image** from the **Dockerfile**. It has 6 **layers**. I **tagged** it as `v2.1.0` and pushed it to our private **registry**."

---

## 2. Từ vựng Dockerfile — Build Instructions

Khi viết Dockerfile, bạn sẽ gặp các từ khóa (instructions) này liên tục.

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 9 | **FROM** | /frɒm/ | Từ — chỉ định base image |
| 10 | **RUN** | /rʌn/ | Chạy — thực thi lệnh khi build image |
| 11 | **COPY** | /ˈkɒp.i/ | Sao chép — copy file từ host vào image |
| 12 | **EXPOSE** | /ɪkˈspəʊz/ | Mở — khai báo port mà container lắng nghe |
| 13 | **ENTRYPOINT** | /ˈen.tri.pɔɪnt/ | Điểm vào — lệnh chính khi container khởi động |
| 14 | **CMD** | /kəˈmænd/ | Lệnh mặc định — có thể bị override khi run |
| 15 | **ENV** | /ɪnˈvaɪ.rən.mənt/ | Biến môi trường — set environment variable |
| 16 | **ARG** | /ɑːrɡ/ | Đối số — biến chỉ dùng lúc build |
| 17 | **WORKDIR** | /wɜːrk.dɪr/ | Thư mục làm việc — set working directory trong container |
| 18 | **Multi-stage build** | /ˌmʌl.ti steɪdʒ bɪld/ | Build nhiều giai đoạn — giảm kích thước image cuối |

### Ví dụ: Multi-stage Build

```dockerfile
# Stage 1: BUILD stage
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: PRODUCTION stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["dist/server.js"]
```

**Trong meeting:**
> "I used a **multi-stage build** to reduce the image size. The first stage runs `npm run build`, and the second stage only copies the **dist** folder. Final image went from 1.2GB down to 180MB."

---

## 3. Từ vựng Runtime — Container Operations

Khi container đã chạy, bạn cần biết các thuật ngữ liên quan đến vận hành.

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 19 | **Volume** | /ˈvɒl.juːm/ | Ổ đĩa ảo — lưu trữ dữ liệu persistent |
| 20 | **Bind mount** | /baɪnd maʊnt/ | Gắn thư mục — map folder host vào container |
| 21 | **Network** | /ˈnet.wɜːrk/ | Mạng — cho phép containers giao tiếp |
| 22 | **Port mapping** | /pɔːrt ˈmæp.ɪŋ/ | Ánh xạ cổng — kết nối port host với port container |
| 23 | **Environment variable** | /ɪnˈvaɪ.rən.mənt ˈveə.ri.ə.bəl/ | Biến môi trường — cấu hình runtime |
| 24 | **Health check** | /helθ tʃek/ | Kiểm tra sức khỏe — xác nhận container hoạt động tốt |
| 25 | **Log** | /lɒɡ/ | Nhật ký — output từ stdout/stderr của container |

### Ví dụ: docker-compose.yml

```yaml
services:
  api:
    image: myapp:latest
    ports:
      - "8080:3000"        # PORT MAPPING: host:container
    volumes:
      - ./data:/app/data   # BIND MOUNT
      - db-data:/var/lib/postgresql  # VOLUME
    environment:           # ENVIRONMENT VARIABLES
      - DATABASE_URL=postgresql://db:5432/myapp
      - NODE_ENV=production
    networks:
      - backend            # NETWORK
    healthcheck:           # HEALTH CHECK
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  db-data:                 # Named VOLUME — persistent storage

networks:
  backend:                 # Custom NETWORK
    driver: bridge
```

**Chat với team:**
> "The API container's **health check** is failing. Can you check the **logs**? Also, make sure the **volume** is mounted correctly — we might be losing data on restart."

---

## 4. Từ vựng nâng cao — Orchestration & Optimization

Khi bạn làm việc với production environment, Docker Compose, hay Kubernetes, các thuật ngữ này sẽ xuất hiện thường xuyên.

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 26 | **Orchestration** | /ˌɔːr.kɪˈstreɪ.ʃən/ | Điều phối — quản lý nhiều containers tự động |
| 27 | **Scaling** | /ˈskeɪ.lɪŋ/ | Mở rộng — tăng/giảm số lượng container instances |
| 28 | **Service** | /ˈsɜːr.vɪs/ | Dịch vụ — một ứng dụng/component trong compose/swarm |
| 29 | **Build context** | /bɪld ˈkɒn.tekst/ | Ngữ cảnh build — thư mục được gửi đến Docker daemon |
| 30 | **Cache** | /kæʃ/ | Bộ nhớ đệm — Docker tái sử dụng layer đã build |

### Ví dụ: Tối ưu Build Cache

```dockerfile
# ❌ Bad: Cache bị invalidate mỗi khi code thay đổi
COPY . .
RUN npm install

# ✅ Good: Chỉ install lại khi package.json thay đổi
COPY package*.json ./
RUN npm ci
COPY . .
```

**Trong pull request review:**
> "Good use of **build cache** optimization! By copying `package.json` first, we avoid re-installing dependencies on every build. This should improve **CI/CD** build times by 60%."

---

## 5. Các câu giao tiếp thường dùng

### 5.1 Khi debug container issues

| Tình huống | Câu tiếng Anh | Nghĩa |
|------------|---------------|-------|
| Container không start | "The container keeps **crashing** on startup. Let me check the **logs**." | Container cứ crash khi khởi động. Để tôi check log. |
| Port conflict | "Port 8080 is already **in use**. We need to change the **port mapping**." | Port 8080 đã bị dùng. Cần đổi port mapping. |
| Volume issue | "Data is not **persisting** between restarts. Is the **volume** mounted correctly?" | Dữ liệu không được giữ giữa các lần restart. Volume đã mount đúng chưa? |
| Image too large | "The image is 2GB. We should use a **multi-stage build** and switch to an **alpine** base." | Image 2GB. Nên dùng multi-stage build và chuyển sang base alpine. |

### 5.2 Khi thảo luận architecture

| Tình huống | Câu tiếng Anh | Nghĩa |
|------------|---------------|-------|
| Chọn base image | "Let's use the **slim** variant instead of the full image." | Dùng bản slim thay vì image đầy đủ. |
| Setup networking | "Both **services** need to be on the same **network** to communicate." | Cả hai service cần chung network để giao tiếp. |
| Scale service | "We need to **scale** the worker service to 5 **replicas**." | Cần scale worker service lên 5 bản sao. |
| CI/CD pipeline | "The **build context** is too large. Add a `.dockerignore` to exclude `node_modules`." | Build context quá lớn. Thêm .dockerignore để loại trừ node_modules. |

---

## 6. Bảng tổng hợp 30 từ vựng

| # | Thuật ngữ | Phát âm | Nghĩa ngắn |
|---|-----------|---------|-------------|
| 1 | Image | /ˈɪm.ɪdʒ/ | Bản mẫu chỉ đọc |
| 2 | Container | /kənˈteɪ.nər/ | Instance đang chạy |
| 3 | Dockerfile | /ˈdɒk.ər.faɪl/ | Script build image |
| 4 | Registry | /ˈredʒ.ɪ.stri/ | Kho lưu trữ image |
| 5 | Repository | /rɪˈpɒz.ɪ.tər.i/ | Tập hợp versions |
| 6 | Tag | /tæɡ/ | Nhãn version |
| 7 | Layer | /ˈleɪ.ər/ | Lớp trong image |
| 8 | Daemon | /ˈdiː.mən/ | Tiến trình nền |
| 9 | FROM | /frɒm/ | Base image |
| 10 | RUN | /rʌn/ | Chạy lệnh build |
| 11 | COPY | /ˈkɒp.i/ | Sao chép file |
| 12 | EXPOSE | /ɪkˈspəʊz/ | Khai báo port |
| 13 | ENTRYPOINT | /ˈen.tri.pɔɪnt/ | Lệnh chính |
| 14 | CMD | /kəˈmænd/ | Lệnh mặc định |
| 15 | ENV | /ɪnˈvaɪ.rən.mənt/ | Biến môi trường |
| 16 | ARG | /ɑːrɡ/ | Biến lúc build |
| 17 | WORKDIR | /wɜːrk.dɪr/ | Thư mục làm việc |
| 18 | Multi-stage build | /ˌmʌl.ti steɪdʒ bɪld/ | Build nhiều giai đoạn |
| 19 | Volume | /ˈvɒl.juːm/ | Ổ đĩa persistent |
| 20 | Bind mount | /baɪnd maʊnt/ | Gắn thư mục host |
| 21 | Network | /ˈnet.wɜːrk/ | Mạng container |
| 22 | Port mapping | /pɔːrt ˈmæp.ɪŋ/ | Ánh xạ cổng |
| 23 | Environment variable | /ɪnˈvaɪ.rən.mənt ˈveə.ri.ə.bəl/ | Biến cấu hình |
| 24 | Health check | /helθ tʃek/ | Kiểm tra sức khỏe |
| 25 | Log | /lɒɡ/ | Nhật ký |
| 26 | Orchestration | /ˌɔːr.kɪˈstreɪ.ʃən/ | Điều phối container |
| 27 | Scaling | /ˈskeɪ.lɪŋ/ | Mở rộng |
| 28 | Service | /ˈsɜːr.vɪs/ | Dịch vụ/component |
| 29 | Build context | /bɪld ˈkɒn.tekst/ | Ngữ cảnh build |
| 30 | Cache | /kæʃ/ | Bộ nhớ đệm |

---

## 7. Practice — Bài tập thực hành

### Bài 1: Điền từ vào chỗ trống

Hoàn thành các câu sau bằng từ vựng Docker phù hợp:

1. "Each instruction in the Dockerfile creates a new _____ in the image."
2. "We need to add a _____ to make sure the API is responding before routing traffic."
3. "Use a _____ to persist database data across container restarts."
4. "The _____ is too large because `node_modules` is included. Add a `.dockerignore` file."
5. "I _____ the image as `v3.0.0` and pushed it to Docker Hub."

### Bài 2: Đọc hiểu Dockerfile

Đọc Dockerfile dưới đây và trả lời câu hỏi:

```dockerfile
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
RUN python -m pytest tests/

FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /app .
EXPOSE 8000
HEALTHCHECK CMD curl -f http://localhost:8000/health || exit 1
ENTRYPOINT ["uvicorn"]
CMD ["main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**Câu hỏi:**
1. Dockerfile này sử dụng kỹ thuật gì để giảm kích thước image?
2. Port nào được **expose**?
3. **Health check** kiểm tra URL nào?
4. Sự khác biệt giữa **ENTRYPOINT** và **CMD** ở đây là gì?
5. Stage `builder` làm gì mà stage production không cần?

### Bài 3: Viết câu giải thích

Sử dụng từ vựng Docker để giải thích cho đồng nghiệp quốc tế:

1. Tại sao nên copy `package.json` trước khi copy toàn bộ source code?
2. Khi nào nên dùng **volume** vs **bind mount**?
3. Tại sao image production nên dùng **alpine** base?

---

## Đáp án

### Bài 1
1. **layer**
2. **health check**
3. **volume**
4. **build context**
5. **tagged**

### Bài 2
1. **Multi-stage build** — 2 stages: builder và production
2. Port **8000**
3. `http://localhost:8000/health`
4. **ENTRYPOINT** (`uvicorn`) là lệnh cố định, **CMD** (`main:app...`) là arguments mặc định có thể override
5. Chạy **tests** (`pytest`) — không cần trong production image

---

## Kết luận

Docker vocabulary không quá nhiều, nhưng **hiểu đúng** và **dùng đúng ngữ cảnh** sẽ giúp bạn:

- ✅ Đọc hiểu Docker documentation nhanh hơn
- ✅ Viết Dockerfile tối ưu hơn
- ✅ Debug container issues tự tin hơn
- ✅ Giao tiếp với team quốc tế chuyên nghiệp hơn

**Tip:** Bookmark bài này và quay lại mỗi khi gặp thuật ngữ Docker không chắc chắn. Practice makes perfect! 🐳

---

*Bạn thấy bài viết hữu ích? Hãy chia sẻ cho đồng nghiệp developer cùng học nhé!*
