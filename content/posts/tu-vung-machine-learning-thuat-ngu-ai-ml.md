---
title: "Machine Learning Cơ Bản — 14 Thuật Ngữ AI/ML Developer Nên Biết"
date: 2023-02-14
summary: "Học 14 thuật ngữ Machine Learning Cơ Bản quan trọng nhất cho developer — có IPA, ví dụ thực tế."
slug: "tu-vung-machine-learning-thuat-ngu-ai-ml"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về Machine Learning — từ model, training, inference đến overfitting, kèm phát âm IPA và ví dụ thực tế."
categories: ["IT English"]
tags: ["backend", "database", "ai", "devops", "data"]
ShowToc: true
TocOpen: true
draft: false
---

AI và Machine Learning đang len lỏi vào mọi sản phẩm — từ recommendation system đến chatbot. Dù bạn không làm ML full-time, việc hiểu các thuật ngữ cơ bản giúp bạn giao tiếp với data team và đọc hiểu tài liệu AI dễ dàng hơn. Let's dive in! 🤖

---

### 🔹 Khái niệm nền tảng

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| model | /ˈmɑːdl/ | mô hình — chương trình đã được huấn luyện để dự đoán | We deployed the trained **model** to production for real-time predictions. |
| training | /ˈtreɪnɪŋ/ | huấn luyện — quá trình cho model học từ dữ liệu | The **training** phase took 12 hours on a GPU cluster with 1 million samples. |
| inference | /ˈɪnfərəns/ | suy luận — dùng model đã train để dự đoán kết quả mới | After training, the **inference** time is only 50 milliseconds per request. |
| dataset | /ˈdeɪtəˌsɛt/ | tập dữ liệu dùng để huấn luyện hoặc đánh giá model | We split the **dataset** into 80% training and 20% testing. |

### 🔹 Đánh giá hiệu suất

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| accuracy | /ˈækjərəsi/ | độ chính xác — tỷ lệ dự đoán đúng trên tổng số | The classification **accuracy** reached 95% on the test set. |
| precision | /prɪˈsɪʒən/ | độ chính xác dương — tỷ lệ dự đoán positive thực sự đúng | High **precision** means fewer false positives in spam detection. |
| recall | /rɪˈkɔːl/ | độ phủ — tỷ lệ tìm được các trường hợp positive thực tế | We need high **recall** for fraud detection so we don't miss any fraudulent transactions. |
| epoch | /ˈiːpɑːk/ | vòng lặp — một lần duyệt qua toàn bộ dataset khi training | The model converged after 50 **epochs** of training on the full dataset. |

### 🔹 Vấn đề thường gặp

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| overfitting | /ˈoʊvərˌfɪtɪŋ/ | quá khớp — model học thuộc data thay vì học pattern | The model shows **overfitting** — 99% accuracy on training but only 60% on test data. |
| underfitting | /ˈʌndərˌfɪtɪŋ/ | chưa khớp — model quá đơn giản, không nắm được pattern | **Underfitting** occurs when the model is too simple to capture the underlying trends. |
| feature | /ˈfiːtʃər/ | đặc trưng — biến đầu vào của model | We engineered 20 **features** from raw user data including age, location, and click history. |
| label | /ˈleɪbl/ | nhãn — giá trị đầu ra mà model cần dự đoán | Each image in the dataset has a **label** indicating whether it contains a cat or a dog. |

### 🔹 Kiến trúc nâng cao

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| neural network | /ˈnʊrəl ˈnɛtwɜːrk/ | mạng nơ-ron — mô hình mô phỏng cấu trúc não bộ | The **neural network** has three hidden layers with 256 neurons each. |
| deep learning | /diːp ˈlɜːrnɪŋ/ | học sâu — ML dùng neural network nhiều lớp | **Deep learning** models require large datasets and powerful GPUs to train effectively. |

---

## 💡 Mẹo ghi nhớ

- **Overfitting vs Underfitting**: Overfitting = học thuộc lòng (điểm cao ở nhà, thi rớt). Underfitting = không chịu học (điểm thấp cả hai). Cần balance ở giữa!
- **Precision vs Recall**: Precision = "trong số tôi nói positive, bao nhiêu đúng?". Recall = "trong số thực sự positive, tôi tìm được bao nhiêu?". Spam filter cần precision cao, phát hiện ung thư cần recall cao.
- **Feature vs Label**: Feature = câu hỏi (input), Label = đáp án (output). Training = cho model xem câu hỏi + đáp án để nó tự học cách trả lời.

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. The ___ achieved 97% accuracy after being trained on 500,000 labeled images.
2. We need to increase the ___ because the fraud detection system is missing too many real cases.
3. The model shows signs of ___ — it performs perfectly on training data but poorly on new data.
4. Each row in the ___ contains 15 features and one target label.
5. After 100 ___, the loss function stopped decreasing, so we stopped training.

---

{{< spoiler "✅ Đáp án" >}}
1. **model** — Model là chương trình đã được huấn luyện để đưa ra dự đoán
2. **recall** — Recall cao nghĩa là ít bỏ sót các trường hợp positive thực tế
3. **overfitting** — Overfitting xảy ra khi model học thuộc training data thay vì generalize
4. **dataset** — Dataset là tập dữ liệu dùng cho training và evaluation
5. **epochs** — Epoch là một lần duyệt qua toàn bộ dataset trong quá trình training
{{< /spoiler >}}

---

AI/ML không còn là thứ xa vời — nó đang ở trong mọi sản phẩm bạn dùng hàng ngày. Nắm vững 14 thuật ngữ này giúp bạn tự tin hơn khi làm việc với data team và đọc paper. Keep learning! 🧠

---

## 📚 Bài viết liên quan

- [The rise of AI infrastructure — GPU shortage và cuộc đua data](/posts/luyen-doc-ai-infrastructure-gpu-shortage-data-center/)
- [Database Fundamentals — 14 Thuật Ngữ Cơ Sở Dữ Liệu Developer Cần Biết](/posts/tu-vung-database-thuat-ngu-co-so-du-lieu/)
- [Data Engineering — 12 Thuật Ngữ Xử Lý Dữ Liệu Developer Cần Biết](/posts/tu-vung-data-engineering-thuat-ngu-xu-ly-du-lieu/)


---

## 🎯 Kết luận

Hy vọng bài viết giúp bạn tự tin hơn khi sử dụng tiếng Anh trong công việc IT. Hãy bookmark lại để tra cứu khi cần nhé!

👉 [Xem thêm bài viết](/posts/) | 📱 [App IELTS 6.0](https://ielts-app.eng4it.com)
