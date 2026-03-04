---
title: "Từ Vựng Git — Thuật Ngữ Version Control Cho Developer"
date: 2023-01-31
summary: "Học 10+ thuật ngữ Từ Vựng Git quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-git-thuat-ngu-version-control"
description: "Nắm vững 15 thuật ngữ Git quan trọng: repository, commit, branch, merge, rebase, cherry-pick, pull request và hơn thế nữa."
categories: ["IT English"]
tags: ["devops", "git", "it-english"]
ShowToc: true
TocOpen: true
draft: false
---

Git là công cụ quản lý mã nguồn mà **developer nào cũng phải dùng**. Nhưng nhiều bạn chỉ biết `git add`, `git commit`, `git push` mà chưa thực sự hiểu rõ nghĩa các thuật ngữ đằng sau. Bài này sẽ giúp bạn hiểu sâu từ vựng Git để tự tin hơn khi làm việc với team quốc tế. 💪

---

### 🔹 Nền tảng Git

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| repository | /rɪˈpɒzɪtɔːri/ | kho lưu trữ mã nguồn | Clone the **repository** and check out the develop branch to start working. |
| commit | /kəˈmɪt/ | lưu thay đổi (một snapshot) | Each **commit** should represent a single logical change with a clear message. |
| branch | /brɑːntʃ/ | nhánh (phiên bản phát triển song song) | Create a feature **branch** from `main` before making any changes. |
| HEAD | /hɛd/ | con trỏ (vị trí hiện tại trong lịch sử) | **HEAD** points to the latest commit on the current branch. |
| remote | /rɪˈmoʊt/ | kho từ xa | Add a new **remote** to push your code to both GitHub and GitLab. |
| origin | /ˈɒrɪdʒɪn/ | nguồn gốc (remote mặc định) | By default, `git push` sends your commits to **origin**. |

### 🔹 Thao tác nhánh

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| merge | /mɜːrdʒ/ | hợp nhất (gộp nhánh) | **Merge** the feature branch into `main` after the code review is approved. |
| rebase | /riːˈbeɪs/ | tái cơ sở (đặt lại gốc nhánh) | **Rebase** your branch on top of `main` to keep a linear commit history. |
| cherry-pick | /ˈtʃeri pɪk/ | chọn lọc commit | We need to **cherry-pick** that hotfix commit into the release branch. |
| conflict | /ˈkɒnflɪkt/ | xung đột (khi hai nhánh sửa cùng file) | Resolve the merge **conflict** in `app.js` before pushing your changes. |
| stash | /stæʃ/ | cất tạm (lưu thay đổi chưa commit) | **Stash** your changes before switching branches so you don't lose any work. |

### 🔹 Collaboration & Review

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| pull request | /pʊl rɪˈkwɛst/ | yêu cầu gộp code (PR) | Open a **pull request** and assign two reviewers before merging. |
| tag | /tæɡ/ | thẻ (đánh dấu phiên bản) | Create a **tag** `v2.0.0` to mark the production release. |
| diff | /dɪf/ | khác biệt (so sánh thay đổi) | Review the **diff** carefully to make sure no debug code is left. |
| blame | /bleɪm/ | truy vết (xem ai sửa dòng nào) | Use `git **blame**` to find out who introduced this bug and when. |

---

## 💡 Mẹo ghi nhớ

- **Merge vs Rebase**: Merge tạo "nút giao" (merge commit), rebase "xếp lại" commit thành đường thẳng. Team thích clean history → rebase, team thích giữ nguyên lịch sử → merge.
- **Stash** = "nhét vào ngăn kéo tạm". Bạn đang code dở, cần switch branch → stash lại, xong việc thì `git stash pop` để lấy ra.
- **Blame** nghe "đổ lỗi" nhưng thực ra là công cụ **truy vết** cực kỳ hữu ích — ai sửa dòng này, khi nào, trong commit nào.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Before starting a new feature, always create a new ___ from the main branch.
2. Use `git ___` to save your uncommitted changes temporarily.
3. After code review, ___ the feature branch into the main branch.
4. Open a ___ ___ on GitHub so the team can review your code.
5. Use `git ___` to see who last modified each line of a file.

{{< spoiler "✅ Đáp án" >}}
1. **branch** — Tạo nhánh mới để phát triển feature riêng biệt
2. **stash** — Cất tạm thay đổi chưa commit
3. **merge** — Hợp nhất nhánh feature vào nhánh chính
4. **pull request** — Yêu cầu gộp code để team review
5. **blame** — Truy vết xem ai sửa từng dòng code
{{< /spoiler >}}

---

## Tổng kết

Git là công cụ bạn dùng **mỗi ngày**, nên việc hiểu rõ thuật ngữ tiếng Anh sẽ giúp bạn đọc docs, trao đổi với team, và debug hiệu quả hơn. Hãy thử dùng `git blame` và `git stash` nếu chưa quen — hai lệnh này cực kỳ hữu ích! 🔥

---

## 📚 Bài viết liên quan

- [Performance Review — 13 Thuật Ngữ Đánh Giá Hiệu Suất Developer Cần Biết](/posts/tu-vung-performance-review-danh-gia-hieu-suat/)
- [Release & Deployment — 12 Thuật Ngữ Phát Hành Phần Mềm Developer Cần Biết](/posts/tu-vung-release-deployment-phat-hanh-phan-mem/)
- [Code Review — 14 Thuật Ngữ Review Code Mọi Developer Phải Biết](/posts/tu-vung-code-review-thuat-ngu-review-code/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts.eng4it.com)
