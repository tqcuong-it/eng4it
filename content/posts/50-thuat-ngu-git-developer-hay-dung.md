---
title: "50 Thuật Ngữ Git mà Developer Hay Dùng — Bảng EN-VN & Ví Dụ Thực Tế"
slug: "50-thuat-ngu-git-developer-hay-dung"
date: 2026-03-09
summary: "Tổng hợp 50 thuật ngữ Git quan trọng nhất cho developer — phiên âm IPA, giải thích bằng tiếng Việt, và ví dụ thực tế khi làm việc với team."
description: "Học 50 thuật ngữ Git quan trọng nhất cho developer. Bảng EN-VN song ngữ, phiên âm IPA, ví dụ command thực tế. Từ cơ bản đến nâng cao: branch, merge, rebase, cherry-pick, stash, và hơn thế."
tags: ["git", "vocabulary", "it-english", "developer", "version-control", "github"]
categories: ["Workplace English"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

**Git** là công cụ version control mà **mọi developer đều phải dùng** hàng ngày. Dù bạn code Java, Python, JavaScript hay bất kỳ ngôn ngữ nào — Git là kỹ năng bắt buộc.

Nhưng khi làm việc với team quốc tế, đọc documentation, hay tham gia code review — bạn cần hiểu **thuật ngữ Git bằng tiếng Anh** một cách chính xác. Không chỉ biết nghĩa, mà còn phải **phát âm đúng** và **dùng đúng ngữ cảnh**.

Bài này tổng hợp **50 thuật ngữ Git** quan trọng nhất, chia theo nhóm, kèm:
- Phiên âm IPA
- Nghĩa tiếng Việt
- Ví dụ thực tế (command + câu giao tiếp)

---

## 1. Khái niệm cơ bản (Basic Concepts)

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 1 | **Repository (repo)** | /rɪˈpɒz.ɪ.tɔːr.i/ | Kho chứa mã nguồn | *"Clone the repo and set up your local environment."* |
| 2 | **Clone** | /kləʊn/ | Sao chép toàn bộ repo về máy | `git clone https://github.com/team/project.git` |
| 3 | **Fork** | /fɔːk/ | Tạo bản sao repo trên tài khoản cá nhân | *"Fork the repo first, then submit a PR from your fork."* |
| 4 | **Working directory** | /ˈwɜːk.ɪŋ dɪˈrek.tər.i/ | Thư mục làm việc — nơi bạn chỉnh sửa file | *"Your working directory has unstaged changes."* |
| 5 | **Staging area (index)** | /ˈsteɪ.dʒɪŋ ˈeə.ri.ə/ | Vùng chờ — nơi chuẩn bị trước khi commit | *"Add files to the staging area with `git add`."* |
| 6 | **Commit** | /kəˈmɪt/ | Lưu thay đổi vào lịch sử | `git commit -m "fix: resolve login timeout issue"` |
| 7 | **Hash (SHA)** | /hæʃ/ | Mã định danh duy nhất của commit | *"The commit hash is `a1b2c3d`. Cherry-pick it."* |
| 8 | **HEAD** | /hed/ | Con trỏ đến commit hiện tại | *"HEAD is detached — you're not on any branch."* |
| 9 | **Remote** | /rɪˈməʊt/ | Repo từ xa (thường là GitHub/GitLab) | `git remote add origin https://github.com/user/repo.git` |
| 10 | **Origin** | /ˈɒr.ɪ.dʒɪn/ | Tên mặc định của remote chính | *"Push your changes to origin."* |

---

## 2. Branching & Merging (Nhánh & Gộp)

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 11 | **Branch** | /brɑːntʃ/ | Nhánh — dòng phát triển riêng | `git branch feature/user-auth` |
| 12 | **Checkout** | /ˈtʃek.aʊt/ | Chuyển sang nhánh/commit khác | `git checkout develop` |
| 13 | **Switch** | /swɪtʃ/ | Chuyển nhánh (lệnh mới thay checkout) | `git switch feature/payment` |
| 14 | **Merge** | /mɜːdʒ/ | Gộp nhánh — kết hợp thay đổi | `git merge feature/login --no-ff` |
| 15 | **Fast-forward (FF)** | /fɑːst ˈfɔː.wəd/ | Gộp nhanh — không tạo merge commit | *"The merge was a fast-forward — no conflicts."* |
| 16 | **Merge conflict** | /mɜːdʒ ˈkɒn.flɪkt/ | Xung đột khi gộp — cần resolve thủ công | *"We have a merge conflict in `app.js`. Can you resolve it?"* |
| 17 | **Rebase** | /riːˈbeɪs/ | Đặt lại base — viết lại lịch sử commit | `git rebase main` — *"Rebase your branch before merging."* |
| 18 | **Interactive rebase** | /ˌɪn.tərˈæk.tɪv riːˈbeɪs/ | Rebase tương tác — chỉnh sửa, squash commit | `git rebase -i HEAD~5` |
| 19 | **Cherry-pick** | /ˈtʃer.i pɪk/ | Chọn commit cụ thể để apply | `git cherry-pick a1b2c3d` — *"Cherry-pick that hotfix into release."* |
| 20 | **Upstream** | /ˈʌp.striːm/ | Repo gốc (khi bạn fork) | *"Sync your fork with upstream to get the latest changes."* |

---

## 3. Staging & Committing (Chuẩn bị & Lưu)

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 21 | **Stage (add)** | /steɪdʒ/ | Thêm file vào vùng chờ | `git add src/components/Login.tsx` |
| 22 | **Unstage** | /ʌnˈsteɪdʒ/ | Bỏ file ra khỏi vùng chờ | `git restore --staged config.json` |
| 23 | **Amend** | /əˈmend/ | Sửa commit gần nhất | `git commit --amend -m "fix: correct typo in README"` |
| 24 | **Squash** | /skwɒʃ/ | Gộp nhiều commit thành một | *"Squash your commits before merging — we prefer clean history."* |
| 25 | **Stash** | /stæʃ/ | Cất tạm thay đổi chưa commit | `git stash` → `git stash pop` — *"Stash your changes and switch to hotfix branch."* |
| 26 | **Diff** | /dɪf/ | So sánh thay đổi giữa các phiên bản | `git diff HEAD~1` — *"Check the diff before pushing."* |
| 27 | **Patch** | /pætʃ/ | Bản vá — file chứa thay đổi | `git format-patch HEAD~3` |
| 28 | **Blame** | /bleɪm/ | Xem ai sửa dòng nào | `git blame src/api.js` — *"Run git blame to see who changed line 42."* |

---

## 4. Remote Operations (Thao tác với repo từ xa)

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 29 | **Push** | /pʊʃ/ | Đẩy commit lên remote | `git push origin feature/auth` |
| 30 | **Pull** | /pʊl/ | Kéo thay đổi từ remote về | `git pull origin main` |
| 31 | **Fetch** | /fetʃ/ | Lấy dữ liệu từ remote (không merge) | `git fetch --all` — *"Fetch first, then decide whether to merge."* |
| 32 | **Pull Request (PR)** | /pʊl rɪˈkwest/ | Yêu cầu gộp code — review trước khi merge | *"I've submitted a PR for the authentication feature."* |
| 33 | **Merge Request (MR)** | /mɜːdʒ rɪˈkwest/ | Giống PR — thuật ngữ GitLab | *"Please review my MR when you have time."* |
| 34 | **Force push** | /fɔːs pʊʃ/ | Đẩy cưỡng bức — ghi đè lịch sử remote | `git push --force-with-lease` — *"Never force push to main!"* |
| 35 | **Conflict resolution** | /ˈkɒn.flɪkt ˌrez.əˈluː.ʃən/ | Giải quyết xung đột | *"After conflict resolution, re-run the tests."* |

---

## 5. History & Inspection (Lịch sử & Kiểm tra)

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 36 | **Log** | /lɒɡ/ | Xem lịch sử commit | `git log --oneline --graph` |
| 37 | **Reflog** | /ˈref.lɒɡ/ | Nhật ký tham chiếu — recovery tool | `git reflog` — *"Check reflog to find the lost commit."* |
| 38 | **Tag** | /tæɡ/ | Đánh dấu phiên bản | `git tag v1.2.0` — *"Tag the release before deploying."* |
| 39 | **Annotated tag** | /ˈæn.ə.teɪ.tɪd tæɡ/ | Tag có thông tin đầy đủ (tác giả, ngày, message) | `git tag -a v2.0.0 -m "Major release"` |
| 40 | **Bisect** | /baɪˈsekt/ | Tìm commit gây bug bằng chia đôi | `git bisect start` → `git bisect bad` → `git bisect good v1.0` |

---

## 6. Advanced & Recovery (Nâng cao & Khôi phục)

| # | Thuật ngữ | IPA | Nghĩa tiếng Việt | Ví dụ |
|---|-----------|-----|-------------------|-------|
| 41 | **Reset** | /rɪˈset/ | Đặt lại — quay về commit trước | `git reset --soft HEAD~1` — *"Soft reset to unstage the last commit."* |
| 42 | **Revert** | /rɪˈvɜːt/ | Hoàn tác — tạo commit ngược lại | `git revert a1b2c3d` — *"Revert that commit instead of resetting."* |
| 43 | **Clean** | /kliːn/ | Xóa file untracked | `git clean -fd` — *"Clean the working directory before building."* |
| 44 | **Submodule** | /ˈsʌb.mɒdʒ.uːl/ | Module con — repo trong repo | `git submodule update --init --recursive` |
| 45 | **Worktree** | /ˈwɜːk.triː/ | Thư mục làm việc phụ — nhiều branch cùng lúc | `git worktree add ../hotfix hotfix/urgent-bug` |
| 46 | **Hook** | /hʊk/ | Script tự động chạy khi có event Git | *"We use a pre-commit hook to run linting."* |
| 47 | **Gitignore** | /ɡɪtɪɡˈnɔːr/ | File khai báo những gì Git bỏ qua | *"Add `node_modules/` to `.gitignore`."* |
| 48 | **LFS (Large File Storage)** | /el ef es/ | Lưu file lớn riêng biệt | *"Use Git LFS for assets over 100MB."* |
| 49 | **Shallow clone** | /ˈʃæl.əʊ kləʊn/ | Clone nông — chỉ lấy lịch sử gần nhất | `git clone --depth 1 https://github.com/team/repo.git` |
| 50 | **Sparse checkout** | /spɑːs ˈtʃek.aʊt/ | Checkout chọn lọc — chỉ lấy folder cần | `git sparse-checkout set src/backend` |

---

## 7. Các câu giao tiếp thường gặp với Git

Trong code review, Slack, hay meeting, bạn sẽ hay nghe/nói những câu này:

### Khi làm việc với branch:

| English | Tiếng Việt |
|---------|------------|
| *"Can you create a branch off main?"* | Tạo nhánh từ main được không? |
| *"Make sure to rebase before merging."* | Nhớ rebase trước khi merge nhé. |
| *"Your branch is 5 commits behind main."* | Nhánh của bạn đang sau main 5 commit. |
| *"Let's squash and merge this PR."* | Squash rồi merge PR này đi. |

### Khi có conflict:

| English | Tiếng Việt |
|---------|------------|
| *"There's a merge conflict in the config file."* | Có conflict ở file config. |
| *"Can you resolve the conflicts and push again?"* | Resolve conflict rồi push lại được không? |
| *"I'll pull the latest changes and rebase."* | Tôi sẽ pull code mới nhất rồi rebase. |

### Khi review code:

| English | Tiếng Việt |
|---------|------------|
| *"Please amend your last commit with the fix."* | Amend commit cuối với bản fix nhé. |
| *"The commit message doesn't follow our convention."* | Commit message không đúng convention. |
| *"Don't force push to the shared branch!"* | Đừng force push lên branch chung! |
| *"Can you split this into smaller commits?"* | Chia thành commit nhỏ hơn được không? |

---

## 8. Git Workflow phổ biến

Hiểu thuật ngữ thôi chưa đủ — bạn cần biết **workflow** team đang dùng:

### Git Flow

```
main ──────────────────────────────────────→
  └── develop ──────────────────────────→
        ├── feature/login ──→ merge ──→
        ├── feature/payment ──→ merge ──→
        └── release/v1.0 ──→ merge to main
```

- **Feature branch**: Nhánh tính năng — tách từ `develop`
- **Release branch**: Nhánh phát hành — chuẩn bị deploy
- **Hotfix branch**: Nhánh sửa lỗi khẩn — tách từ `main`

### Trunk-based Development

```
main ──●──●──●──●──●──●──●──●──→
       ↑  ↑  ↑
    short-lived branches (< 1 day)
```

- Commit trực tiếp vào `main` hoặc qua **short-lived branch**
- Phù hợp CI/CD, deploy liên tục

---

## 9. Bài tập thực hành (Practice)

### Exercise 1: Điền thuật ngữ

1. Tôi muốn xem ai đã sửa dòng này → dùng lệnh `git ______`
2. Gộp 5 commit thành 1 trước khi merge → gọi là `______`
3. Cất tạm code chưa commit để chuyển branch → dùng `git ______`
4. Tạo bản sao repo về máy → dùng `git ______`
5. Hoàn tác commit mà không mất lịch sử → dùng `git ______`

### Exercise 2: Chọn đúng/sai

1. `git pull` = `git fetch` + `git merge` → ✅ hay ❌?
2. `git reset --hard` có thể phục hồi bằng `reflog` → ✅ hay ❌?
3. Force push an toàn trên branch `main` → ✅ hay ❌?
4. `git stash` lưu cả file untracked → ✅ hay ❌?
5. `git revert` xóa commit khỏi lịch sử → ✅ hay ❌?

### Đáp án

**Exercise 1:** 1. blame, 2. squash, 3. stash, 4. clone, 5. revert

**Exercise 2:** 1. ✅, 2. ✅ (dùng `git reflog` rồi `git reset`), 3. ❌ (KHÔNG force push lên shared branch), 4. ❌ (mặc định không lưu untracked, cần `git stash -u`), 5. ❌ (revert tạo commit mới, không xóa lịch sử)

---

## Tổng kết

Git không chỉ là tool — nó là **ngôn ngữ chung** của developer toàn cầu. Hiểu thuật ngữ Git bằng tiếng Anh giúp bạn:

- **Giao tiếp** hiệu quả trong code review và meeting
- **Đọc documentation** nhanh hơn trên GitHub, Stack Overflow
- **Tự tin** khi làm việc với team quốc tế
- **Debug** nhanh hơn khi gặp vấn đề với Git

Hãy **bookmark bài này** và quay lại khi cần tra cứu. Thực hành mỗi ngày, bạn sẽ master Git vocabulary trong thời gian ngắn! 💪

---

*Bài tiếp theo: [Đọc hiểu AWS Documentation — từ vựng cần biết](/posts/doc-hieu-aws-documentation-tu-vung-can-biet/) — giúp bạn navigate docs AWS như pro!*
