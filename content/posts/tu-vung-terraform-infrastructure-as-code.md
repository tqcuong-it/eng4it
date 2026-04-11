---
title: "Từ Vựng Terraform & Infrastructure as Code — Thuật Ngữ DevOps Cần Biết"
slug: "tu-vung-terraform-infrastructure-as-code"
date: 2026-04-11
summary: "40+ từ vựng Terraform và Infrastructure as Code quan trọng nhất cho DevOps engineer. Phiên âm IPA, ví dụ thực tế, bảng EN-VN."
description: "Từ vựng Terraform và Infrastructure as Code (IaC) cho DevOps: provider, resource, module, state, plan, apply. Bảng EN-VN, phiên âm IPA, ví dụ code thực tế. Hướng dẫn đọc hiểu Terraform documentation."
tags: ["terraform", "infrastructure-as-code", "devops", "cloud", "workplace-english"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới Thiệu

Bạn đang đọc Terraform documentation và gặp những câu kiểu:

> *"The provider block configures the specified provider. A resource block declares a resource of a given type with a given local name."*

Hay trong meeting:

> *"We need to refactor our modules, the state file is drifted, and the plan shows 15 resources to be destroyed."*

😵 Quá nhiều thuật ngữ chuyên ngành!

**Terraform** là công cụ Infrastructure as Code (IaC) phổ biến nhất hiện nay. Nếu bạn làm DevOps, Cloud Engineer, hay Backend Developer, bạn **chắc chắn sẽ gặp Terraform**. Và để đọc docs, viết code, hay thảo luận trong team — bạn cần hiểu từ vựng.

Bài viết này tổng hợp **40+ từ vựng Terraform & IaC quan trọng nhất**, kèm phiên âm, giải thích, và ví dụ code thực tế.

---

## 1. Infrastructure as Code (IaC) — Khái Niệm Cơ Bản

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt | Giải thích |
|---------|--------------|-------------------|------------|
| **Infrastructure as Code** | /ˈɪnfrəˌstrʌktʃər æz koʊd/ | Hạ tầng dưới dạng code | Quản lý server, network, DB bằng code thay vì click tay |
| **Declarative** | /dɪˈklærətɪv/ | Khai báo | Mô tả trạng thái mong muốn, tool tự tìm cách đạt được |
| **Imperative** | /ɪmˈpɛrətɪv/ | Mệnh lệnh | Chỉ rõ từng bước phải làm |
| **Idempotent** | /aɪˈdɛmpətənt/ | Lũy đẳng | Chạy nhiều lần cho kết quả giống nhau |
| **Provisioning** | /prəˈvɪʒənɪŋ/ | Cấp phát tài nguyên | Tạo và cấu hình hạ tầng |
| **Configuration Management** | /kənˌfɪɡjəˈreɪʃən ˈmænɪdʒmənt/ | Quản lý cấu hình | Duy trì trạng thái hệ thống nhất quán |
| **Drift** | /drɪft/ | Trôi/lệch | Hạ tầng thực tế khác với code định nghĩa |
| **Immutable Infrastructure** | /ɪˈmjuːtəbəl/ | Hạ tầng bất biến | Không sửa server, mà tạo mới và thay thế |

**Ví dụ trong context:**

> *"Our infrastructure is defined **declaratively** in Terraform. If there's any **drift** between the actual state and the desired state, Terraform will reconcile it."*
>
> → Hạ tầng của chúng tôi được định nghĩa theo kiểu khai báo trong Terraform. Nếu có sự lệch giữa trạng thái thực và trạng thái mong muốn, Terraform sẽ đồng bộ lại.

---

## 2. Terraform Core Concepts — Khái Niệm Cốt Lõi

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt | Giải thích |
|---------|--------------|-------------------|------------|
| **Provider** | /prəˈvaɪdər/ | Nhà cung cấp | Plugin kết nối Terraform với cloud (AWS, GCP, Azure) |
| **Resource** | /ˈriːsɔːrs/ | Tài nguyên | Thành phần hạ tầng (EC2, S3, VPC...) |
| **Data Source** | /ˈdeɪtə sɔːrs/ | Nguồn dữ liệu | Đọc thông tin từ hạ tầng có sẵn (không tạo mới) |
| **Module** | /ˈmɒdjuːl/ | Mô-đun | Nhóm resource có thể tái sử dụng |
| **State** | /steɪt/ | Trạng thái | File lưu trạng thái hiện tại của hạ tầng |
| **Backend** | /ˈbækɛnd/ | Backend | Nơi lưu trữ state file (local, S3, Terraform Cloud) |
| **Variable** | /ˈvɛriəbəl/ | Biến | Giá trị input cho configuration |
| **Output** | /ˈaʊtpʊt/ | Đầu ra | Giá trị export ra sau khi apply |
| **Local** | /ˈloʊkəl/ | Biến cục bộ | Giá trị tính toán dùng trong module |

### Ví dụ code

```hcl
# Provider — kết nối AWS
provider "aws" {
  region = "ap-northeast-1"  # Tokyo
}

# Resource — tạo EC2 instance
resource "aws_instance" "web_server" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t3.micro"

  tags = {
    Name = "web-server-prod"
  }
}

# Data Source — đọc thông tin VPC có sẵn
data "aws_vpc" "existing" {
  id = "vpc-123456"
}

# Output — xuất IP address
output "server_ip" {
  value = aws_instance.web_server.public_ip
}
```

---

## 3. Terraform Workflow — Quy Trình Làm Việc

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt | Giải thích |
|---------|--------------|-------------------|------------|
| **Init** | /ɪˈnɪt/ | Khởi tạo | Download provider plugins, setup backend |
| **Plan** | /plæn/ | Lên kế hoạch | Xem trước những gì sẽ thay đổi |
| **Apply** | /əˈplaɪ/ | Áp dụng | Thực thi thay đổi lên hạ tầng thật |
| **Destroy** | /dɪˈstrɔɪ/ | Hủy | Xóa toàn bộ tài nguyên |
| **Validate** | /ˈvælɪdeɪt/ | Kiểm tra | Kiểm tra syntax và logic configuration |
| **Format (fmt)** | /ˈfɔːrmæt/ | Định dạng | Tự động format code theo chuẩn |
| **Import** | /ɪmˈpɔːrt/ | Nhập | Đưa resource có sẵn vào Terraform quản lý |
| **Refresh** | /rɪˈfrɛʃ/ | Làm mới | Cập nhật state file theo hạ tầng thực |

### Workflow chuẩn

```bash
# 1. Khởi tạo project
terraform init

# 2. Kiểm tra syntax
terraform validate

# 3. Format code
terraform fmt

# 4. Xem trước thay đổi
terraform plan

# 5. Áp dụng thay đổi
terraform apply

# 6. (Khi cần) Xóa tài nguyên
terraform destroy
```

**Câu hay gặp trong meeting:**

> *"I've run `terraform plan` and it shows 3 resources to add, 1 to change, and 0 to destroy. LGTM, ready to apply."*
>
> → Tôi đã chạy plan và nó hiển thị 3 tài nguyên sẽ tạo mới, 1 sẽ thay đổi, và 0 sẽ xóa. OK, sẵn sàng apply.

---

## 4. State Management — Quản Lý Trạng Thái

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt | Giải thích |
|---------|--------------|-------------------|------------|
| **State File** | /steɪt faɪl/ | File trạng thái | File JSON lưu mapping giữa code và resource thật |
| **Remote State** | /rɪˈmoʊt steɪt/ | State từ xa | Lưu state trên cloud (S3, GCS...) để team chia sẻ |
| **State Locking** | /steɪt ˈlɒkɪŋ/ | Khóa state | Ngăn 2 người apply cùng lúc |
| **State Drift** | /steɪt drɪft/ | State bị lệch | State file không khớp với hạ tầng thực |
| **Taint** | /teɪnt/ | Đánh dấu hỏng | Đánh dấu resource cần tạo lại |
| **Untaint** | /ʌnˈteɪnt/ | Bỏ đánh dấu | Bỏ đánh dấu resource hỏng |

**Ví dụ tình huống:**

> *"Someone manually changed the security group rules in the AWS console. Now our **state has drifted**. We need to run `terraform plan` to detect the **drift** and decide whether to **reconcile** it."*
>
> → Ai đó đã sửa tay security group trên AWS console. State đã bị lệch. Cần chạy plan để phát hiện lệch và quyết định có đồng bộ lại không.

---

## 5. HCL Language — Ngôn Ngữ Cấu Hình

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt | Giải thích |
|---------|--------------|-------------------|------------|
| **HCL** | /eɪtʃ siː ɛl/ | HashiCorp Configuration Language | Ngôn ngữ cấu hình của Terraform |
| **Block** | /blɒk/ | Khối | Đơn vị cấu hình (resource block, variable block) |
| **Attribute** | /ˈætrɪbjuːt/ | Thuộc tính | Key-value trong block |
| **Expression** | /ɪkˈsprɛʃən/ | Biểu thức | Giá trị động, có thể tính toán |
| **Interpolation** | /ɪnˌtɜːrpəˈleɪʃən/ | Nội suy | Chèn giá trị biến vào string `"${var.name}"` |
| **Conditional** | /kənˈdɪʃənəl/ | Điều kiện | Biểu thức if-else: `condition ? true : false` |
| **For Each** | /fɔːr iːtʃ/ | Vòng lặp | Tạo nhiều resource từ một list/map |
| **Count** | /kaʊnt/ | Đếm | Tạo N bản sao của resource |
| **Dynamic Block** | /daɪˈnæmɪk blɒk/ | Block động | Tạo block lặp bên trong resource |
| **Lifecycle** | /ˈlaɪfsaɪkəl/ | Vòng đời | Quy tắc quản lý resource (prevent_destroy, ignore_changes) |

### Ví dụ nâng cao

```hcl
# Variable với validation
variable "environment" {
  type        = string
  description = "Deployment environment"
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

# For each — tạo nhiều S3 buckets
resource "aws_s3_bucket" "data" {
  for_each = toset(["logs", "backups", "uploads"])

  bucket = "${var.project}-${each.key}-${var.environment}"
}

# Lifecycle — không cho xóa database
resource "aws_db_instance" "main" {
  # ... config ...
  lifecycle {
    prevent_destroy = true
  }
}
```

---

## 6. Terraform trong Team — Từ Vựng Collaboration

| Từ vựng | Phiên âm IPA | Nghĩa tiếng Việt | Giải thích |
|---------|--------------|-------------------|------------|
| **Workspace** | /ˈwɜːrkspeɪs/ | Không gian làm việc | Tách biệt state cho các môi trường khác nhau |
| **Remote Backend** | /rɪˈmoʊt ˈbækɛnd/ | Backend từ xa | Lưu state trên cloud để team cùng dùng |
| **Policy as Code** | /ˈpɒlɪsi æz koʊd/ | Chính sách dạng code | Quy tắc kiểm tra tự động (Sentinel, OPA) |
| **Blast Radius** | /blæst ˈreɪdiəs/ | Phạm vi ảnh hưởng | Số resource bị ảnh hưởng khi thay đổi |
| **Terraform Cloud** | — | Terraform Cloud | SaaS platform quản lý Terraform |
| **Run** | /rʌn/ | Lần chạy | Một lần plan + apply trên Terraform Cloud |
| **Sentinel** | /ˈsɛntɪnəl/ | Sentinel | Policy as Code framework của HashiCorp |
| **Registry** | /ˈrɛdʒɪstri/ | Registry | Kho lưu trữ và chia sẻ modules |

**Câu hay dùng trong PR review:**

> *"This change has a large **blast radius** — it modifies the VPC which affects all resources in the network. Let's add a **lifecycle rule** with `prevent_destroy` on the critical resources and test in a separate **workspace** first."*
>
> → Thay đổi này có phạm vi ảnh hưởng lớn — nó sửa VPC ảnh hưởng mọi resource trong mạng. Hãy thêm lifecycle rule prevent_destroy cho resource quan trọng và test ở workspace riêng trước.

---

## 7. Câu Nói Hay Dùng Với Terraform

### Trong meeting

| English | Tiếng Việt |
|---------|-----------|
| "Let me run a plan first to see the impact." | "Để tôi chạy plan trước xem ảnh hưởng thế nào." |
| "The state is locked, someone else is applying." | "State đang bị khóa, có người khác đang apply." |
| "We should modularize this infrastructure." | "Chúng ta nên chia hạ tầng thành module." |
| "Don't forget to review the plan output before applying." | "Đừng quên review output của plan trước khi apply." |
| "This resource needs to be imported into state." | "Resource này cần được import vào state." |
| "The destroy plan looks clean, no unexpected resources." | "Plan destroy trông ổn, không có resource ngoài dự kiến." |

### Trong code review

| English | Tiếng Việt |
|---------|-----------|
| "Please add a description to this variable." | "Hãy thêm description cho variable này." |
| "This should use for_each instead of count." | "Cái này nên dùng for_each thay vì count." |
| "Missing lifecycle block — this DB should have prevent_destroy." | "Thiếu lifecycle block — DB này cần có prevent_destroy." |
| "The module version should be pinned." | "Version của module cần được pin cố định." |
| "Sensitive values should use the sensitive flag." | "Giá trị nhạy cảm cần dùng flag sensitive." |

---

## 8. Practice — Bài Tập Thực Hành

### Bài 1: Điền từ vào chỗ trống

1. Terraform uses a ___ approach — you describe what you want, not how to get there.
2. The ___ file stores the current state of your infrastructure.
3. Before applying changes, always run `terraform ___` to preview.
4. When the actual infrastructure differs from the state file, it's called ___.
5. A ___ is a reusable group of Terraform resources.

### Bài 2: Dịch sang tiếng Anh

1. "Ai đó sửa tay trên console, state bị lệch rồi."
2. "Chạy plan trước khi apply, đừng có YOLO."
3. "Module này cần thêm variable cho environment."

### Bài 3: Giải thích thuật ngữ

Giải thích bằng tiếng Anh đơn giản:
1. Idempotent
2. Blast Radius
3. State Locking

<details>
<summary>📝 Đáp án gợi ý</summary>

**Bài 1:**
1. declarative
2. state
3. plan
4. drift
5. module

**Bài 2:**
1. "Someone manually modified the resource in the console, and now the state has drifted."
2. "Always run a plan before applying — don't YOLO it."
3. "This module needs an additional variable for the environment."

**Bài 3:**
1. **Idempotent** — Running the same operation multiple times produces the same result. If you apply the same Terraform config twice, nothing changes the second time.
2. **Blast Radius** — The number of resources that could be affected by a change. A small blast radius means fewer things can break.
3. **State Locking** — A mechanism that prevents two people from modifying the infrastructure at the same time, avoiding conflicts and corruption.

</details>

---

## Kết Luận

Terraform và Infrastructure as Code đã trở thành **kỹ năng bắt buộc** cho DevOps engineer và cloud developer. Hiểu từ vựng giúp bạn:

- 📖 **Đọc documentation** nhanh hơn
- 💬 **Thảo luận trong team** tự tin hơn
- 👨‍💻 **Review code** chính xác hơn
- 🎯 **Phỏng vấn DevOps** dễ đậu hơn

Hãy bookmark bài viết này và quay lại tra cứu khi cần! 🔖

---

*Bài viết thuộc series [Workplace English](/categories/workplace-english/) — Tiếng Anh cho dân IT đi làm. Theo dõi eng4it.com để cập nhật bài mới mỗi ngày!*
