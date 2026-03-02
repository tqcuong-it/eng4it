---
title: "AWS VPC — Thuật Ngữ Mạng Đám Mây Mà Developer Không Thể Bỏ Qua"
date: 2023-01-19
slug: "tu-vung-aws-vpc-thuat-ngu-mang-dam-may"
description: "Học 13 thuật ngữ tiếng Anh quan trọng về AWS VPC — từ subnet, route table đến NAT gateway. Kèm ví dụ thực tế và bài tập cho developer Việt Nam."
categories: ["IT English"]
tags: ["aws", "cloud-computing"]
ShowToc: true
TocOpen: true
draft: false
---

**VPC (Virtual Private Cloud)** là nền tảng networking của AWS — mọi resource như EC2, RDS, Lambda đều chạy bên trong VPC. Nếu bạn không hiểu VPC, bạn sẽ rất khó debug khi gặp lỗi kết nối. Cùng học 13 thuật ngữ networking quan trọng nhất nhé! 🌐

---

### 🔹 Nền tảng mạng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| subnet | /ˈsʌbnɛt/ | mạng con — phân vùng trong VPC | Place the database in a private **subnet** that has no direct internet access. |
| CIDR block | /ˈsaɪdər blɒk/ | dải địa chỉ IP (ký hiệu CIDR) | The VPC uses the **CIDR block** 10.0.0.0/16 which provides 65,536 IP addresses. |
| route table | /ruːt ˈteɪbl/ | bảng định tuyến | Add a rule to the **route table** to direct traffic to the internet gateway. |
| elastic IP | /ɪˈlæstɪk aɪ piː/ | IP tĩnh gán cho resource | Assign an **elastic IP** to the NAT gateway so outbound traffic uses a fixed address. |

### 🔹 Kết nối Internet

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| internet gateway | /ˈɪntərnɛt ˈɡeɪtweɪ/ | cổng kết nối VPC ra internet | Attach an **internet gateway** to the VPC to allow public subnet resources to reach the internet. |
| NAT gateway | /næt ˈɡeɪtweɪ/ | cổng NAT — cho private subnet ra internet | Use a **NAT gateway** so instances in private subnets can download software updates. |
| VPN | /ˌviː.piː.ˈɛn/ | kết nối mạng riêng ảo | Set up a site-to-site **VPN** to connect the on-premises data center to the VPC. |

### 🔹 Bảo mật mạng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| security group | /sɪˈkjʊərɪti ɡruːp/ | nhóm bảo mật — firewall cấp instance | The **security group** only allows inbound traffic on ports 80 and 443. |
| network ACL | /ˈnɛtwɜːrk ˌeɪ.siː.ˈɛl/ | Access Control List cấp subnet | The **network ACL** blocks all inbound traffic from the suspicious IP range. |
| flow logs | /floʊ lɒɡz/ | nhật ký lưu lượng mạng | Enable VPC **flow logs** to investigate why the connection is being rejected. |

### 🔹 Kết nối nâng cao

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| peering | /ˈpɪərɪŋ/ | kết nối ngang hàng giữa 2 VPC | Set up VPC **peering** to allow the staging VPC to communicate with the production VPC. |
| transit gateway | /ˈtrænzɪt ˈɡeɪtweɪ/ | hub kết nối nhiều VPC và on-premises | Use a **transit gateway** instead of multiple peering connections when you have more than 3 VPCs. |
| private link | /ˈpraɪvɪt lɪŋk/ | kết nối riêng đến AWS service, không qua internet | Access S3 via **private link** to keep traffic within the AWS network. |

---

## 💡 Mẹo ghi nhớ

- **Subnet** = "phòng" trong một "tòa nhà" (VPC). Public subnet = phòng có cửa ra đường. Private subnet = phòng trong, chỉ đi qua sảnh (NAT gateway).
- **Security group** vs **Network ACL**: Security group = bảo vệ ở cửa phòng (instance-level, stateful). Network ACL = bảo vệ ở cổng tầng (subnet-level, stateless).
- **CIDR block** — đọc là "cider" 🍎. `/16` = ~65k IPs, `/24` = 256 IPs. Số sau dấu `/` càng lớn thì dải IP càng nhỏ.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Place backend servers in a private ___ to prevent direct access from the internet.
2. A ___ allows instances in private subnets to download packages from the internet.
3. Check the ___ to see if there is a rule directing traffic to the correct destination.
4. Enable ___ to capture and analyze all network traffic in the VPC.
5. Use ___ to connect two VPCs so they can communicate as if they were on the same network.

---

{{< spoiler "✅ Đáp án" >}}
1. **subnet** — Private subnet không có route trực tiếp đến internet gateway
2. **NAT gateway** — NAT gateway cho phép outbound traffic nhưng chặn inbound từ internet
3. **route table** — Route table quyết định traffic đi đâu dựa trên destination IP
4. **flow logs** — Flow logs ghi lại metadata của mọi kết nối (source, dest, port, action)
5. **peering** — VPC peering tạo kết nối private giữa 2 VPC, traffic không đi qua internet
{{< /spoiler >}}

---

## Tổng kết

VPC là "hệ thống mạng ảo" của bạn trên AWS — nắm vững 13 thuật ngữ trên giúp bạn thiết kế network architecture đúng cách, debug connectivity issues nhanh chóng, và tự tin khi thảo luận infrastructure với team. Networking có thể khó ban đầu, nhưng hiểu đúng concept thì mọi thứ sẽ logic! 💪
