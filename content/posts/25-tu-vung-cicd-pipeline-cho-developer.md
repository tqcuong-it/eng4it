---
title: "25 Từ Vựng CI/CD Pipeline Mà Developer Phải Biết"
slug: "25-tu-vung-cicd-pipeline-cho-developer"
date: 2026-03-16
summary: "Tổng hợp 25 từ vựng CI/CD Pipeline quan trọng nhất cho developer — phiên âm IPA, giải thích tiếng Việt, ví dụ thực tế từ GitHub Actions, Jenkins, GitLab CI."
description: "25 từ vựng CI/CD Pipeline quan trọng cho developer Việt Nam — Continuous Integration, Continuous Delivery, build, deploy, artifact, pipeline stage. Bảng EN-VN song ngữ, phiên âm IPA, ví dụ YAML thực tế."
tags: ["cicd", "devops", "pipeline", "vocabulary", "it-english", "developer", "github-actions"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

CI/CD Pipeline là **xương sống** của quy trình phát triển phần mềm hiện đại. Dù bạn dùng GitHub Actions, Jenkins, GitLab CI, hay CircleCI — tất cả docs, config, và log đều viết bằng **tiếng Anh**.

Khi pipeline fail lúc 11h đêm, bạn cần **đọc hiểu log ngay lập tức** — không có thời gian tra từ điển. Khi viết `.github/workflows/`, bạn cần biết chính xác từng keyword nghĩa là gì.

Bài viết này giúp bạn:
- Nắm **25 từ vựng CI/CD** quan trọng nhất (có IPA phiên âm)
- Hiểu cách dùng trong **config file thực tế** (YAML)
- Đọc được **pipeline logs** khi build fail
- Tự tin **thảo luận CI/CD** với team bằng tiếng Anh

---

## 1. Từ vựng nền tảng — CI/CD Fundamentals

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt |
|---|-----------|-----|-------------------|
| 1 | **Continuous Integration (CI)** | /kənˈtɪnjuəs ˌɪntɪˈɡreɪʃən/ | Tích hợp liên tục — tự động merge & test code thường xuyên |
| 2 | **Continuous Delivery (CD)** | /kənˈtɪnjuəs dɪˈlɪvəri/ | Phân phối liên tục — code luôn sẵn sàng deploy bất cứ lúc nào |
| 3 | **Continuous Deployment** | /kənˈtɪnjuəs dɪˈplɔɪmənt/ | Triển khai liên tục — tự động deploy mỗi khi code pass tests |
| 4 | **Pipeline** | /ˈpaɪplaɪn/ | Đường ống — chuỗi các bước tự động từ code → production |
| 5 | **Workflow** | /ˈwɜːrkfloʊ/ | Luồng công việc — tập hợp các jobs trong CI/CD |

### 💡 Phân biệt quan trọng: Delivery vs Deployment

```
Continuous Delivery:    Code → Build → Test → [Ready to Deploy] → Manual approval → Production
Continuous Deployment:  Code → Build → Test → [Auto Deploy] → Production
```

- **Delivery**: Code **sẵn sàng** deploy, nhưng cần người bấm nút
- **Deployment**: Code **tự động** lên production — không cần ai approve

> **Trong meeting:** "We practice continuous delivery — every merge to main is deployable, but we manually trigger production releases."

---

## 2. Pipeline Structure — Cấu trúc Pipeline

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt |
|---|-----------|-----|-------------------|
| 6 | **Stage** | /steɪdʒ/ | Giai đoạn — nhóm các jobs cùng mục đích (build, test, deploy) |
| 7 | **Job** | /dʒɑːb/ | Công việc — một đơn vị thực thi trong pipeline |
| 8 | **Step** | /stɛp/ | Bước — một lệnh cụ thể trong job |
| 9 | **Runner** | /ˈrʌnər/ | Máy chạy — server thực thi pipeline jobs |
| 10 | **Agent** | /ˈeɪdʒənt/ | Tác tử — tương tự runner (dùng trong Jenkins) |

### Ví dụ thực tế — GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
name: CI Pipeline          # Tên workflow

on:                         # Trigger - khi nào chạy
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:                       # Danh sách jobs
  build:                    # Job name
    runs-on: ubuntu-latest  # Runner
    steps:                  # Các bước trong job
      - uses: actions/checkout@v4    # Step 1: Checkout code
      - name: Install dependencies   # Step 2
        run: npm install
      - name: Run tests              # Step 3
        run: npm test
      - name: Build                   # Step 4
        run: npm run build
```

> **Đọc log:** "Job 'build' failed at step 'Run tests'" → Job tên 'build' fail ở bước 'Run tests'

---

## 3. Build & Test — Xây dựng và Kiểm thử

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt |
|---|-----------|-----|-------------------|
| 11 | **Build** | /bɪld/ | Xây dựng — biên dịch source code thành artifact |
| 12 | **Artifact** | /ˈɑːrtɪfækt/ | Sản phẩm — file output sau khi build (JAR, Docker image, binary) |
| 13 | **Test Suite** | /tɛst swiːt/ | Bộ kiểm thử — tập hợp tất cả test cases |
| 14 | **Code Coverage** | /koʊd ˈkʌvərɪdʒ/ | Độ phủ code — phần trăm code được test kiểm tra |
| 15 | **Lint / Linting** | /lɪnt/ | Kiểm tra cú pháp — phân tích static code cho lỗi & style |

### Ví dụ — Build stage trong pipeline

```yaml
  build:
    stage: build
    steps:
      - name: Lint code
        run: npm run lint          # Kiểm tra coding style

      - name: Run unit tests
        run: npm test -- --coverage  # Chạy tests + đo coverage

      - name: Build artifact
        run: npm run build         # Tạo production build

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: ./dist             # Lưu artifact để deploy stage dùng
```

> **Trong code review:** "The build is passing but code coverage dropped to 65%. Can we add tests for the new module?"

---

## 4. Deployment — Triển khai

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt |
|---|-----------|-----|-------------------|
| 16 | **Deploy** | /dɪˈplɔɪ/ | Triển khai — đưa code lên server/production |
| 17 | **Environment** | /ɪnˈvaɪrənmənt/ | Môi trường — nơi code chạy (dev, staging, production) |
| 18 | **Rollback** | /ˈroʊlbæk/ | Quay lại — revert về version trước khi có lỗi |
| 19 | **Blue-Green Deployment** | /bluː ɡriːn dɪˈplɔɪmənt/ | Triển khai xanh-lam — 2 môi trường chạy song song, chuyển traffic |
| 20 | **Canary Release** | /kəˈnɛri rɪˈliːs/ | Phát hành canary — deploy cho một phần nhỏ users trước |

### Ví dụ — Deploy stage với environments

```yaml
  deploy-staging:
    stage: deploy
    environment: staging           # Môi trường staging
    needs: [build]                 # Chờ build job xong
    steps:
      - name: Deploy to staging
        run: ./deploy.sh staging

  deploy-production:
    stage: deploy
    environment: production        # Môi trường production
    needs: [deploy-staging]        # Chờ staging pass
    if: github.ref == 'refs/heads/main'  # Chỉ deploy từ main
    steps:
      - name: Deploy to production
        run: ./deploy.sh production
```

> **Khi incident xảy ra:** "The canary release showed increased error rates. Let's rollback to the previous version."

---

## 5. Pipeline Management — Quản lý Pipeline

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt |
|---|-----------|-----|-------------------|
| 21 | **Trigger** | /ˈtrɪɡər/ | Kích hoạt — sự kiện bắt đầu pipeline (push, PR, schedule) |
| 22 | **Secret** | /ˈsiːkrɪt/ | Bí mật — biến bảo mật (API keys, tokens) lưu encrypted |
| 23 | **Cache** | /kæʃ/ | Bộ nhớ đệm — lưu dependencies giữa các lần build để tăng tốc |
| 24 | **Matrix Build** | /ˈmeɪtrɪks bɪld/ | Build ma trận — chạy cùng job trên nhiều OS/version cùng lúc |
| 25 | **Gate / Quality Gate** | /ɡeɪt/ | Cổng chất lượng — điều kiện phải pass trước khi tiếp tục |

### Ví dụ — Matrix build + secrets

```yaml
  test:
    strategy:
      matrix:                         # Matrix build
        node-version: [18, 20, 22]    # Test trên 3 versions
        os: [ubuntu-latest, windows-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'                # Cache node_modules
      - run: npm test
    env:
      API_KEY: ${{ secrets.API_KEY }} # Secret từ repo settings
```

> **Trong standup:** "The matrix build caught a regression on Node 18 — works fine on 20 and 22. We need to check the polyfill."

---

## 6. Bảng tổng hợp — Quick Reference

| Thuật ngữ | Viết tắt | Nhớ nhanh |
|-----------|----------|-----------|
| Continuous Integration | CI | Merge & test thường xuyên |
| Continuous Delivery | CD | Luôn sẵn sàng deploy |
| Continuous Deployment | CD | Auto deploy lên production |
| Pipeline | — | Chuỗi bước tự động |
| Workflow | — | Tập hợp jobs |
| Stage | — | Giai đoạn (build/test/deploy) |
| Job | — | Một công việc cụ thể |
| Step | — | Một lệnh trong job |
| Runner / Agent | — | Máy chạy pipeline |
| Build | — | Compile source code |
| Artifact | — | Output file sau build |
| Test Suite | — | Bộ tests |
| Code Coverage | — | % code được test |
| Lint | — | Check code style |
| Deploy | — | Đưa code lên server |
| Environment | env | Dev / staging / prod |
| Rollback | — | Quay lại version cũ |
| Blue-Green | — | 2 env song song |
| Canary Release | — | Deploy nhỏ trước |
| Trigger | — | Sự kiện bắt đầu pipeline |
| Secret | — | Biến bảo mật |
| Cache | — | Nhớ đệm tăng tốc build |
| Matrix Build | — | Test nhiều version cùng lúc |
| Quality Gate | — | Điều kiện pass/fail |

---

## 7. Đọc Pipeline Logs — Thực chiến

Khi pipeline fail, bạn sẽ thấy log kiểu này:

```
❌ Pipeline #1234 failed

Stage: test
Job: unit-tests
Step: Run npm test
Exit code: 1

Error: 3 of 150 tests failed
  ✗ UserService.create should validate email
  ✗ AuthController.login should return 401 for invalid credentials
  ✗ OrderService.calculate should handle empty cart
```

**Cách đọc:**
1. **Pipeline #1234 failed** → Pipeline số 1234 thất bại
2. **Stage: test** → Fail ở giai đoạn test
3. **Job: unit-tests** → Cụ thể job unit-tests
4. **Exit code: 1** → Mã thoát 1 (lỗi, 0 là thành công)
5. **3 of 150 tests failed** → 3 trong 150 test cases fail

> **Báo team:** "Pipeline failed on the test stage — 3 unit tests are broken. The failures are in UserService, AuthController, and OrderService. I'll fix them in the next commit."

---

## 8. Câu nói hay dùng — CI/CD Conversations

### Khi pipeline fail
| English | Tiếng Việt |
|---------|------------|
| "The pipeline is broken / red." | Pipeline đang fail. |
| "The build failed on the lint stage." | Build fail ở bước lint. |
| "Can you check the pipeline logs?" | Bạn check log pipeline được không? |
| "I'll fix the failing test and re-trigger the pipeline." | Mình sẽ fix test fail rồi chạy lại pipeline. |

### Khi thảo luận CI/CD
| English | Tiếng Việt |
|---------|------------|
| "Let's add a quality gate for code coverage." | Thêm quality gate cho code coverage đi. |
| "We should cache dependencies to speed up the build." | Mình nên cache dependencies để build nhanh hơn. |
| "The matrix build tests across Node 18 and 20." | Matrix build test trên cả Node 18 và 20. |
| "Secrets should never be hardcoded — use environment variables." | Secrets không bao giờ hardcode — dùng env variables. |

### Khi deploy
| English | Tiếng Việt |
|---------|------------|
| "The staging deployment looks good. Ready for production." | Deploy staging OK rồi. Sẵn sàng lên production. |
| "We need to rollback — the canary shows increased latency." | Cần rollback — canary cho thấy latency tăng. |
| "Let's do a blue-green deployment to minimize downtime." | Dùng blue-green deploy để giảm downtime. |

---

## 9. Practice — Bài tập thực hành

### Bài 1: Điền từ vào chỗ trống

1. When code is pushed to main, the _______ automatically starts building and testing.
2. The _______ stores compiled files so the deploy stage can use them.
3. We should _______ to the previous version because the new release has a critical bug.
4. _______ variables like API keys should be stored as _______ in the CI/CD system.
5. The _______ build tests our app on both Ubuntu and Windows simultaneously.

### Bài 2: Đọc hiểu YAML

```yaml
name: Release
on:
  push:
    tags: ['v*']
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
      - run: npm publish
    env:
      NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

**Trả lời câu hỏi:**
1. Pipeline này được trigger bởi sự kiện gì?
2. Có bao nhiêu steps?
3. Secret nào đang được sử dụng?
4. Pipeline chạy trên runner nào?

### 🔑 Đáp án

**Bài 1:**
1. pipeline  2. artifact  3. rollback  4. Environment, secrets  5. matrix

**Bài 2:**
1. Push tags bắt đầu bằng `v` (ví dụ: v1.0.0)
2. 4 steps (checkout, npm ci, npm test, npm publish)
3. NPM_TOKEN (lưu trong repo secrets)
4. ubuntu-latest

---

## Kết luận

CI/CD Pipeline không chỉ là tool — nó là **ngôn ngữ chung** của development team hiện đại. Khi bạn nắm vững 25 từ vựng này, bạn sẽ:

- **Đọc hiểu** pipeline config & logs ngay lập tức
- **Thảo luận** CI/CD strategy với team bằng tiếng Anh
- **Viết** workflow files chính xác hơn
- **Debug** pipeline failures nhanh hơn

Hãy bắt đầu bằng cách đọc lại file `.github/workflows/` trong project của bạn — áp dụng từ vựng hôm nay vào ngay! 🚀
