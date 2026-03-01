---
title: "AWS S3 — Thuật Ngữ Lưu Trữ Đám Mây Dành Cho Developer"
date: 2023-01-16
slug: "tu-vung-aws-s3-thuat-ngu-luu-tru-dam-may"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về AWS S3 — từ bucket, object đến lifecycle policy. Kèm ví dụ thực tế và bài tập cho developer Việt Nam."
categories: ["IT English"]
tags: ["aws", "cloud-computing", "devops"]
ShowToc: true
TocOpen: true
draft: false
---

**S3 (Simple Storage Service)** là dịch vụ lưu trữ phổ biến nhất trên AWS — gần như project nào cũng dùng. Từ lưu ảnh user, host static website, đến backup database, S3 xuất hiện ở khắp nơi. Nắm vững từ vựng S3 giúp bạn đọc docs và troubleshoot nhanh hơn rất nhiều! 📦

---

### 🔹 Khái niệm cơ bản

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| bucket | /ˈbʌkɪt/ | "thùng chứa" — container cấp cao nhất | Create a new **bucket** with a globally unique name for the project assets. |
| object | /ˈɒbdʒɪkt/ | đối tượng — file được lưu trong bucket | Each uploaded file is stored as an **object** with a unique key. |
| prefix | /ˈpriːfɪks/ | tiền tố — mô phỏng thư mục | Use the **prefix** `images/2023/` to organize photos by year. |
| storage class | /ˈstɔːrɪdʒ klæs/ | lớp lưu trữ (theo tần suất truy cập) | Move infrequently accessed data to a cheaper **storage class** like S3 Infrequent Access. |

### 🔹 Quản lý dữ liệu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| versioning | /ˈvɜːrʒənɪŋ/ | quản lý phiên bản | Enable **versioning** to recover accidentally deleted files. |
| lifecycle policy | /ˈlaɪfˌsaɪkəl ˈpɒləsi/ | chính sách vòng đời dữ liệu | Set up a **lifecycle policy** to move objects to Glacier after 90 days. |
| replication | /ˌrɛplɪˈkeɪʃən/ | sao chép dữ liệu sang region khác | Cross-region **replication** ensures data survives a regional outage. |
| Glacier | /ˈɡleɪʃər/ | lớp lưu trữ lạnh, chi phí rất thấp | Archive old log files to **Glacier** to reduce monthly storage costs. |

### 🔹 Truy cập & Bảo mật

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| presigned URL | /priːˈsaɪnd juː.ɑːr.ˈɛl/ | URL ký trước, có thời hạn | Generate a **presigned URL** so the client can upload directly to S3. |
| ACL | /ˌeɪ.siː.ˈɛl/ | Access Control List — danh sách quyền | The **ACL** grants public-read access to the bucket's static assets. |
| encryption | /ɪnˈkrɪpʃən/ | mã hóa dữ liệu | Enable server-side **encryption** to protect data at rest. |
| CORS | /kɔːrz/ | Cross-Origin Resource Sharing — chia sẻ tài nguyên khác nguồn | Configure **CORS** rules to allow the frontend to fetch images from S3. |

### 🔹 Upload & Tối ưu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| multipart upload | /ˌmʌltipɑːrt ˈʌploʊd/ | upload nhiều phần (file lớn) | Use **multipart upload** for files larger than 100 MB to improve reliability. |
| transfer acceleration | /ˈtrænsfɜːr əkˌsɛləˈreɪʃən/ | tăng tốc truyền tải qua CloudFront edge | Enable **transfer acceleration** to speed up uploads from overseas users. |

---

## 💡 Mẹo ghi nhớ

- **Bucket** = cái xô/thùng. Bạn bỏ đồ (objects) vào thùng. Tên thùng phải unique toàn cầu — giống tên miền vậy.
- **Prefix** không phải folder thật — S3 là flat storage. `images/cat.jpg` chỉ là key có prefix `images/`.
- **Presigned URL** = "vé vào cửa có thời hạn". Ai có link thì truy cập được, nhưng hết hạn là mất quyền.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. All files in S3 are stored as ___ inside a bucket.
2. Enable ___ on the bucket to keep previous versions of overwritten files.
3. We use a ___ to let users download private files without exposing our credentials.
4. The ___ moves old backups to Glacier automatically after 30 days.
5. For uploading a 2 GB video file, you should use ___ upload.

---

{{< spoiler "✅ Đáp án" >}}
1. **objects** — Mỗi file trong S3 được gọi là một object, bao gồm data + metadata
2. **versioning** — Versioning giữ lại tất cả phiên bản cũ, giúp khôi phục khi cần
3. **presigned URL** — Presigned URL cho phép truy cập tạm thời mà không cần public bucket
4. **lifecycle policy** — Lifecycle policy tự động chuyển hoặc xóa objects theo quy tắc
5. **multipart** — Multipart upload chia file lớn thành nhiều phần, upload song song
{{< /spoiler >}}

---

## Tổng kết

S3 là service "không thể thiếu" trên AWS — hiểu 14 thuật ngữ trên sẽ giúp bạn tự tin hơn khi làm việc với storage, đọc hiểu AWS docs, và giải thích kiến trúc cho team. Bài tiếp theo mình sẽ cùng học về AWS Lambda — thế giới serverless! ⚡
