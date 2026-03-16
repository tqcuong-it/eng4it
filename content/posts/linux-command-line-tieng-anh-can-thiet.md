---
title: "Linux Command Line — Tiếng Anh Cần Thiết Cho Developer"
slug: "linux-command-line-tieng-anh-can-thiet"
date: 2026-03-17
summary: "Từ vựng tiếng Anh cần thiết khi dùng Linux command line — giải nghĩa lệnh, đọc man page, viết shell script chuyên nghiệp."
description: "Học tiếng Anh qua Linux command line cho developer Việt Nam. Giải nghĩa gốc tiếng Anh của các lệnh Linux, cách đọc man page, từ vựng shell scripting — giúp bạn hiểu sâu, nhớ lâu."
tags: ["linux", "command-line", "terminal", "shell", "it-english", "developer", "devops"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Bạn dùng `ls`, `grep`, `chmod` hàng ngày, nhưng có bao giờ tự hỏi: **các lệnh này viết tắt của gì?** Hiểu nghĩa gốc tiếng Anh giúp bạn **nhớ lệnh nhanh hơn, đỡ phải Google**, và tự tin đọc documentation.

Thực tế: Rất nhiều developer Việt dùng Linux command line **theo thói quen** — biết gõ nhưng không biết nghĩa, gặp lệnh mới là bối rối. Đặc biệt khi đọc man page hay viết shell script, **tiếng Anh là rào cản lớn**.

Bài viết này giúp bạn:
- Hiểu **nghĩa gốc tiếng Anh** của 40+ lệnh Linux phổ biến
- Đọc hiểu **man page** — không còn sợ wall of text
- Nắm **từ vựng shell scripting** để viết script chuyên nghiệp
- Biết cách **diễn đạt** Linux tasks bằng tiếng Anh

---

## 1. Gốc tiếng Anh của các lệnh cơ bản — Command Origins

Nhiều lệnh Linux là viết tắt tiếng Anh. Biết gốc = nhớ luôn:

| Lệnh | Viết tắt của | IPA | Nghĩa |
|-------|-------------|-----|--------|
| **ls** | list | /lɪst/ | Liệt kê file và thư mục |
| **cd** | change directory | /tʃeɪndʒ dəˈrɛktəri/ | Chuyển thư mục |
| **pwd** | print working directory | /prɪnt ˈwɜːkɪŋ dəˈrɛktəri/ | In ra thư mục hiện tại |
| **mkdir** | make directory | /meɪk dəˈrɛktəri/ | Tạo thư mục |
| **rmdir** | remove directory | /rɪˈmuːv dəˈrɛktəri/ | Xóa thư mục (rỗng) |
| **rm** | remove | /rɪˈmuːv/ | Xóa file |
| **cp** | copy | /ˈkɒpi/ | Sao chép file |
| **mv** | move | /muːv/ | Di chuyển / đổi tên file |
| **cat** | concatenate | /kənˈkætəneɪt/ | Nối và hiển thị nội dung file |
| **touch** | touch | /tʌtʃ/ | "Chạm" vào file — tạo mới hoặc cập nhật timestamp |
| **echo** | echo | /ˈɛkəʊ/ | Phản hồi — in text ra terminal |

### 💡 Bạn có biết?

- **`cat`** không liên quan đến con mèo 🐱 — nó là **concatenate** (nối chuỗi). Ban đầu dùng để nối nhiều file: `cat file1 file2 > merged`
- **`touch`** ban đầu chỉ để update timestamp, nhưng developer hay dùng để tạo file rỗng
- **`echo`** nghĩa là tiếng vọng — terminal "vọng lại" text bạn gõ

---

## 2. File Permissions & Ownership — Quyền & sở hữu file

| Lệnh / Thuật ngữ | Viết tắt của | IPA | Nghĩa |
|-------------------|-------------|-----|--------|
| **chmod** | change mode | /tʃeɪndʒ məʊd/ | Thay đổi quyền truy cập file |
| **chown** | change owner | /tʃeɪndʒ ˈəʊnər/ | Thay đổi chủ sở hữu file |
| **chgrp** | change group | /tʃeɪndʒ ɡruːp/ | Thay đổi group sở hữu file |
| **sudo** | superuser do | /ˈsuːduː/ | Thực thi lệnh với quyền superuser |
| **su** | switch user | /swɪtʃ ˈjuːzər/ | Chuyển sang user khác |
| **rwx** | read, write, execute | — | Đọc, ghi, thực thi |

### 📌 Giải nghĩa permission string

```bash
-rwxr-xr--  1  cuong  dev  4096  Mar 17  app.sh

# Chia thành 4 phần:
# -    → file type (- = regular file, d = directory, l = link)
# rwx  → owner permissions (read + write + execute)
# r-x  → group permissions (read + execute, no write)
# r--  → others permissions (read only)

# Số tương ứng:
# r = 4 (read)
# w = 2 (write)
# x = 1 (execute)
# rwx = 4+2+1 = 7
# r-x = 4+0+1 = 5
# r-- = 4+0+0 = 4
# → chmod 754 app.sh
```

### Mẫu câu hay dùng:

| English | Tiếng Việt |
|---------|------------|
| "Make the script executable." | Cho script quyền chạy (execute). |
| "Change the file owner to www-data." | Đổi chủ sở hữu file sang www-data. |
| "This file has world-readable permissions." | File này ai cũng đọc được — nguy hiểm. |
| "Run this command with elevated privileges." | Chạy lệnh với quyền nâng cao (sudo). |

---

## 3. Tìm kiếm & Xử lý text — Search & Text Processing

| Lệnh | Viết tắt của | IPA | Nghĩa |
|-------|-------------|-----|--------|
| **grep** | global regular expression print | /ɡrɛp/ | Tìm kiếm text theo pattern |
| **sed** | stream editor | /sɛd/ | Chỉnh sửa text theo luồng |
| **awk** | Aho, Weinberger, Kernighan | /ɔːk/ | Ngôn ngữ xử lý text (tên 3 tác giả) |
| **find** | find | /faɪnd/ | Tìm file theo điều kiện |
| **sort** | sort | /sɔːt/ | Sắp xếp |
| **wc** | word count | /wɜːd kaʊnt/ | Đếm dòng, từ, ký tự |
| **head** | head | /hɛd/ | Hiển thị phần đầu file |
| **tail** | tail | /teɪl/ | Hiển thị phần cuối file |
| **diff** | difference | /ˈdɪfərəns/ | So sánh sự khác nhau giữa 2 file |
| **tee** | T (hình chữ T) | /tiː/ | Chia output thành 2 nhánh — terminal + file |

### 💡 Bạn có biết?

- **`grep`** = **G**lobal **R**egular **E**xpression **P**rint — từ lệnh `g/re/p` trong editor `ed`
- **`awk`** được đặt theo tên 3 tác giả: **A**ho, **W**einberger, **K**ernighan
- **`tee`** giống ống nước hình chữ T — chia luồng data ra 2 hướng

### Ví dụ thực tế:

```bash
# Tìm tất cả file chứa "TODO" trong project
grep -rn "TODO" ./src/
# -r = recursive (đệ quy), -n = line number (số dòng)

# Đếm số dòng code trong project (không tính blank lines)
find . -name "*.py" | xargs wc -l
# "Find all Python files and count their lines"

# Xem 20 dòng cuối của log file (real-time)
tail -f -n 20 /var/log/app.log
# -f = follow (theo dõi liên tục), -n = number of lines

# Thay thế text trong file
sed -i 's/localhost/production.server.com/g' config.yml
# s = substitute (thay thế), g = global (toàn bộ)
```

---

## 4. Process & System — Quản lý tiến trình & hệ thống

| Lệnh | Viết tắt của | IPA | Nghĩa |
|-------|-------------|-----|--------|
| **ps** | process status | /ˈprɒsɛs ˈsteɪtəs/ | Trạng thái các tiến trình |
| **top** | table of processes | /teɪbl əv ˈprɒsɛsɪz/ | Bảng tiến trình real-time |
| **kill** | kill | /kɪl/ | Gửi signal dừng tiến trình |
| **bg** | background | /ˈbækɡraʊnd/ | Chạy tiến trình ở nền |
| **fg** | foreground | /ˈfɔːɡraʊnd/ | Đưa tiến trình lên nổi |
| **nohup** | no hang up | /nəʊ hæŋ ʌp/ | Không dừng khi đóng terminal |
| **df** | disk free | /dɪsk friː/ | Dung lượng ổ đĩa trống |
| **du** | disk usage | /dɪsk ˈjuːsɪdʒ/ | Dung lượng đã dùng |
| **free** | free | /friː/ | Bộ nhớ (RAM) trống |
| **uptime** | uptime | /ˈʌptaɪm/ | Thời gian hệ thống chạy liên tục |

### 📌 Signal names — Tên tín hiệu

```bash
kill -SIGTERM 1234   # TERM = terminate — yêu cầu dừng lịch sự
kill -SIGKILL 1234   # KILL = giết ngay — không thương lượng (signal 9)
kill -SIGHUP 1234    # HUP = hang up — reload config
kill -SIGINT 1234    # INT = interrupt — như nhấn Ctrl+C

# Mẹo nhớ:
# SIGTERM = "Please stop" (lịch sự, process có thể cleanup)
# SIGKILL = "STOP NOW!" (bắt buộc, không cleanup)
```

---

## 5. Networking — Mạng

| Lệnh | Viết tắt của | IPA | Nghĩa |
|-------|-------------|-----|--------|
| **ssh** | secure shell | /sɪˈkjʊər ʃɛl/ | Kết nối terminal từ xa, mã hóa |
| **scp** | secure copy | /sɪˈkjʊər ˈkɒpi/ | Sao chép file từ xa, mã hóa |
| **curl** | client URL | /kɜːl/ | Gửi request đến URL |
| **wget** | web get | /wɛb ɡɛt/ | Tải file từ web |
| **ping** | ping | /pɪŋ/ | Kiểm tra kết nối mạng |
| **netstat** | network statistics | /ˈnɛtwɜːk stəˈtɪstɪks/ | Thống kê kết nối mạng |
| **ifconfig** | interface configuration | /ˈɪntəfeɪs kənˌfɪɡjəˈreɪʃən/ | Cấu hình network interface |

### Ví dụ thực tế:

```bash
# SSH vào server
ssh deploy@production.server.com -i ~/.ssh/id_rsa
# "Secure shell into production server using private key"

# Copy file lên server
scp ./build.zip deploy@server:/var/www/
# "Securely copy the build archive to the server"

# Test API endpoint
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Cuong"}'
# -X = request method, -H = header, -d = data
```

---

## 6. Đọc Man Page — Reading Manual Pages

`man` = **manual** (tài liệu hướng dẫn). Đây là skill cực quan trọng:

### Cấu trúc man page:

| Section | Nghĩa | Ví dụ |
|---------|--------|-------|
| **NAME** | Tên lệnh + mô tả ngắn | `grep - print lines that match patterns` |
| **SYNOPSIS** | Cú pháp sử dụng | `grep [OPTION]... PATTERNS [FILE]...` |
| **DESCRIPTION** | Mô tả chi tiết | Giải thích cách lệnh hoạt động |
| **OPTIONS** | Các tùy chọn (flags) | `-i`, `-r`, `-n`, `-v` |
| **EXAMPLES** | Ví dụ sử dụng | Câu lệnh mẫu |
| **SEE ALSO** | Lệnh liên quan | `egrep(1), fgrep(1)` |
| **EXIT STATUS** | Mã trả về | `0 = success, 1 = no match, 2 = error` |

### 💡 Cách đọc SYNOPSIS:

```bash
grep [OPTION]... PATTERNS [FILE]...

# Quy ước:
# [OPTION]    → ngoặc vuông = optional (không bắt buộc)
# PATTERNS    → không ngoặc = required (bắt buộc)
# ...         → có thể lặp lại nhiều lần
# |           → hoặc (chọn 1 trong các option)
# UPPERCASE   → bạn thay bằng giá trị thực

# Ví dụ:
# cp [OPTION]... SOURCE DEST
# → cp là bắt buộc, OPTION tùy chọn, SOURCE và DEST bắt buộc
```

### Từ vựng hay gặp trong man page:

| Từ tiếng Anh | IPA | Nghĩa |
|-------------|-----|--------|
| **invoke** | /ɪnˈvəʊk/ | Gọi, thực thi (lệnh) |
| **suppress** | /səˈprɛs/ | Ẩn, không hiển thị |
| **verbose** | /vɜːˈbəʊs/ | Chi tiết, hiển thị nhiều thông tin (-v) |
| **recursive** | /rɪˈkɜːsɪv/ | Đệ quy — xử lý cả thư mục con (-r) |
| **truncate** | /ˈtrʌŋkeɪt/ | Cắt ngắn, giới hạn độ dài |
| **delimiter** | /dɪˈlɪmɪtər/ | Ký tự phân tách (comma, tab, space) |
| **pipe** | /paɪp/ | Ống dẫn — nối output lệnh này vào input lệnh kia (\|) |
| **redirect** | /ˌriːdəˈrɛkt/ | Chuyển hướng output (>, >>, <) |
| **wildcard** | /ˈwaɪldkɑːd/ | Ký tự đại diện (*, ?, []) |
| **glob** | /ɡlɒb/ | Pattern matching file name (*.txt, data??.csv) |

---

## 7. Shell Scripting — Từ vựng viết script

| Thuật ngữ | IPA | Nghĩa |
|-----------|-----|--------|
| **shebang (#!)** | /ʃɪˈbæŋ/ | Dòng đầu script chỉ định interpreter |
| **variable** | /ˈvɛəriəbl/ | Biến — lưu giá trị |
| **environment variable** | /ɪnˈvaɪrənmənt/ | Biến môi trường — cấu hình hệ thống |
| **exit code** | /ˈɛɡzɪt kəʊd/ | Mã trả về — 0 = thành công, khác 0 = lỗi |
| **stdin / stdout / stderr** | — | Input chuẩn / output chuẩn / error chuẩn |
| **daemon** | /ˈdiːmən/ | Tiến trình chạy nền (background service) |

### Ví dụ shell script với chú thích:

```bash
#!/bin/bash
# Shebang line — tells OS to use bash interpreter

# Variables (biến)
APP_NAME="my-app"
LOG_DIR="/var/log/${APP_NAME}"

# Conditional (điều kiện)
if [ -d "$LOG_DIR" ]; then
    echo "Log directory exists"       # directory exists
else
    mkdir -p "$LOG_DIR"               # make directory with parents
    echo "Created log directory"
fi

# Loop (vòng lặp)
for file in *.log; do
    echo "Processing: $file"          # iterate over log files
    gzip "$file"                      # compress each file
done

# Exit code (mã trả về)
if [ $? -eq 0 ]; then
    echo "Success"                    # $? = exit code of last command
    exit 0                            # 0 = success
else
    echo "Failed" >&2                 # >&2 = redirect to stderr
    exit 1                            # non-zero = failure
fi
```

---

## 8. Practice — Bài tập thực hành

### Bài 1: Nối lệnh với nghĩa gốc

| Lệnh | Nghĩa gốc |
|-------|-----------|
| 1. `grep` | a) change mode |
| 2. `chmod` | b) secure shell |
| 3. `ssh` | c) word count |
| 4. `wc` | d) global regular expression print |
| 5. `sudo` | e) superuser do |

<details>
<summary>📝 Đáp án</summary>

1-d, 2-a, 3-b, 4-c, 5-e

</details>

### Bài 2: Đọc hiểu man page

Đọc đoạn sau từ `man grep` và trả lời câu hỏi:

> `-i, --ignore-case`
> Ignore case distinctions in patterns and input data, so that characters that differ only in case match each other.

**Câu hỏi:** `grep -i "error" log.txt` sẽ tìm được những gì?

<details>
<summary>📝 Đáp án</summary>

Tìm được: "error", "Error", "ERROR", "eRrOr" — tất cả các biến thể hoa/thường.

`-i` = ignore case = bỏ qua phân biệt chữ hoa/thường.

</details>

### Bài 3: Dịch task sang lệnh Linux

Dịch các câu tiếng Anh sau thành lệnh Linux:

1. "List all files including hidden ones in the current directory"
2. "Find all Python files modified in the last 7 days"
3. "Count the number of lines in all JavaScript files"

<details>
<summary>📝 Đáp án</summary>

```bash
# 1. List all files including hidden ones
ls -la
# -l = long format, -a = all (including hidden)

# 2. Find Python files modified in last 7 days
find . -name "*.py" -mtime -7
# -name = filename pattern, -mtime -7 = modified time < 7 days

# 3. Count lines in all JS files
find . -name "*.js" | xargs wc -l
# find → xargs → wc: pipeline pattern
```

</details>

---

## Kết luận

Hiểu tiếng Anh đằng sau Linux command line giúp bạn:

- **Nhớ lệnh nhanh hơn** — biết `chmod` = change mode thì không bao giờ quên
- **Đọc man page tự tin** — không còn sợ wall of text tiếng Anh
- **Debug nhanh hơn** — hiểu error message, đọc log dễ dàng
- **Viết script chuyên nghiệp** — comment rõ ràng, variable naming chuẩn

📌 **Tip**: Khi gặp lệnh mới, thử `man <command>` hoặc `<command> --help` trước khi Google. Đọc man page là kỹ năng cần luyện tập!

---

*Bạn thấy bài viết hữu ích? Chia sẻ cho đồng nghiệp đang dùng Linux hàng ngày nhé!* 🐧
