---
title: "Từ Vựng Linux & Terminal — Thuật Ngữ Dòng Lệnh Cho Developer"
date: 2023-02-03
slug: "tu-vung-linux-terminal-thuat-ngu-dong-lenh"
description: "Học 15 thuật ngữ Linux và Terminal quan trọng: shell, pipe, permission, process, daemon, cron, grep, SSH và nhiều hơn nữa."
categories: ["IT English"]
tags: ["devops"]
ShowToc: true
TocOpen: true
draft: false
---

Dù bạn là backend developer, DevOps engineer hay chỉ đơn giản là muốn **deploy app lên server**, bạn sẽ cần làm việc với Linux terminal. Hiểu rõ thuật ngữ tiếng Anh sẽ giúp bạn đọc man page, Stack Overflow và giao tiếp với team hiệu quả hơn. Let's go! 🐧

---

### 🔹 Môi trường Terminal

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| shell | /ʃɛl/ | trình thông dịch lệnh | Bash is the default **shell** on most Linux distributions. |
| terminal | /ˈtɜːrmɪnəl/ | cửa sổ dòng lệnh | Open a **terminal** window and navigate to the project directory. |
| command | /kəˈmænd/ | lệnh | Run the `ls` **command** to list all files in the current directory. |
| flag | /flæɡ/ | cờ (tùy chọn của lệnh) | Add the `-a` **flag** to show hidden files when listing directory contents. |
| alias | /ˈeɪliəs/ | bí danh (tên tắt cho lệnh) | Create an **alias** `alias ll='ls -la'` so you don't have to type the full command. |

### 🔹 Luồng dữ liệu

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pipe | /paɪp/ | ống dẫn (nối output lệnh này sang lệnh khác) | Use a **pipe** to send the output of `cat` into `grep` for filtering. |
| redirect | /ˌriːdəˈrɛkt/ | chuyển hướng (ghi output ra file) | **Redirect** the error output to a log file using `2> error.log`. |
| grep | /ɡrɛp/ | tìm kiếm văn bản | Use **grep** to search for the error message across all log files. |

### 🔹 Hệ thống & Quyền

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| permission | /pərˈmɪʃən/ | quyền truy cập (read, write, execute) | Change the file **permission** to `755` so the script can be executed. |
| process | /ˈprɒsɛs/ | tiến trình (chương trình đang chạy) | Use `ps aux` to list all running **processes** on the server. |
| daemon | /ˈdiːmən/ | tiến trình nền (chạy liên tục) | Nginx runs as a **daemon** that listens for incoming HTTP requests. |
| sudo | /ˈsuːduː/ | chạy với quyền root | Use **sudo** to install packages because it requires administrator privileges. |
| environment variable | /ɪnˈvaɪrənmənt ˈvɛriəbl/ | biến môi trường | Set the `DATABASE_URL` **environment variable** in the `.env` file. |

### 🔹 Tự động hóa & Kết nối

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| cron | /krɒn/ | cron (bộ lập lịch chạy tự động) | Set up a **cron** job to run the database backup script every night at 2 AM. |
| SSH | /ɛs.ɛs.eɪtʃ/ | kết nối bảo mật từ xa | Use **SSH** to connect to the production server and check the application logs. |

---

## 💡 Mẹo ghi nhớ

- **Pipe** (`|`) = ống nước nối hai vòi lại. Output của lệnh trước chảy thẳng vào input của lệnh sau: `cat log.txt | grep "error" | wc -l`.
- **Daemon** phát âm là "dee-mon" 👹, không phải "day-mon". Đây là các process chạy ngầm — giống nhân viên trực ca đêm, luôn sẵn sàng phục vụ.
- **sudo** = "**S**uper **U**ser **DO**" — làm gì đó với quyền super user (root). Cẩn thận khi dùng!

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Use the `|` (___ ) operator to pass the output of one command to another.
2. Nginx runs as a background ___ that handles web requests continuously.
3. Set up a ___ job to automatically clean up temp files every Sunday.
4. Add the `-r` ___ to the `cp` command to copy directories recursively.
5. Connect to the remote server securely using ___.

{{< spoiler "✅ Đáp án" >}}
1. **pipe** — Ống dẫn nối output lệnh này sang input lệnh khác
2. **daemon** — Tiến trình nền chạy liên tục trên server
3. **cron** — Bộ lập lịch tự động chạy task định kỳ
4. **flag** — Cờ tùy chọn thêm vào lệnh
5. **SSH** — Secure Shell, kết nối bảo mật từ xa
{{< /spoiler >}}

---

## Tổng kết

Linux terminal là **môi trường làm việc chính** của rất nhiều developer. 15 thuật ngữ trên sẽ giúp bạn tự tin hơn khi đọc tài liệu, viết script, và quản lý server. Hãy mở terminal lên và thử kết hợp `pipe` + `grep` — bạn sẽ thấy sức mạnh thực sự của command line! 💻
