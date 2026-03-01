---
title: "Frontend Development — 14 Thuật Ngữ Lập Trình Giao Diện Developer Phải Biết"
date: 2023-02-09
slug: "tu-vung-frontend-development-thuat-ngu-lap-trinh-giao-dien"
description: "Học 14 thuật ngữ tiếng Anh quan trọng về Frontend Development — từ component, state, props đến virtual DOM, hook và hydration. Dễ hiểu cho developer Việt Nam."
categories: ["IT English"]
tags: ["frontend"]
ShowToc: true
TocOpen: true
draft: false
---

Frontend là nơi user nhìn thấy và tương tác trực tiếp — một button lag, một layout vỡ là user bỏ đi ngay. Với sự phổ biến của React, Vue, Angular, việc hiểu thuật ngữ frontend bằng tiếng Anh là bắt buộc nếu bạn muốn đọc docs, trao đổi với team quốc tế, hay phỏng vấn remote. Let's dive in! 🎨

---

### 🔹 Component & Rendering

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| component | /kəmˈpoʊnənt/ | thành phần giao diện có thể tái sử dụng | Each page is built from reusable **components** like Header, Footer, and Sidebar. |
| render | /ˈrɛndər/ | hiển thị giao diện lên màn hình | React **renders** the component tree whenever state changes. |
| DOM | /dɒm/ | Document Object Model — cây cấu trúc của trang web | JavaScript manipulates the **DOM** to update content without reloading the page. |
| virtual DOM | /ˈvɜːrtʃuəl dɒm/ | bản sao nhẹ của DOM thật, dùng để tối ưu cập nhật | React uses a **virtual DOM** to compare changes before updating the real DOM. |

### 🔹 State & Data Flow

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| state | /steɪt/ | trạng thái dữ liệu của component | When the user clicks the button, the **state** updates and the counter increments. |
| props | /prɒps/ | dữ liệu truyền từ component cha sang con | The parent passes the user's name as **props** to the ProfileCard component. |
| hook | /hʊk/ | hàm đặc biệt để dùng state và lifecycle trong function component | Use the useState **hook** to manage local state in a functional component. |
| event handler | /ɪˈvɛnt ˈhændlər/ | hàm xử lý sự kiện từ user | Attach an onClick **event handler** to the button to trigger the form submission. |

### 🔹 Lifecycle & Patterns

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| lifecycle | /ˈlaɪfˌsaɪkəl/ | vòng đời component — từ mount đến unmount | Fetch API data in the componentDidMount **lifecycle** method. |
| hydration | /haɪˈdreɪʃən/ | gắn logic JS vào HTML đã render từ server | After server-side rendering, **hydration** attaches event listeners to the static HTML. |
| responsive | /rɪˈspɒnsɪv/ | thiết kế tương thích mọi kích thước màn hình | The layout must be **responsive** so it works on both mobile and desktop. |

### 🔹 Build & Optimization

| English | IPA | Tiếng Việt | Example |
|---------|-----|------------|---------|
| bundler | /ˈbʌndlər/ | công cụ đóng gói code thành file tối ưu | We switched from Webpack to Vite as our **bundler** for faster build times. |
| tree shaking | /triː ˈʃeɪkɪŋ/ | loại bỏ code không sử dụng khỏi bundle | Enable **tree shaking** to remove unused utility functions and reduce bundle size. |
| CSS-in-JS | /ˌsiː.ɛs.ˈɛs ɪn ˌdʒeɪ.ˈɛs/ | viết CSS trực tiếp trong JavaScript | We use styled-components, a **CSS-in-JS** library, to scope styles to each component. |

---

## 💡 Mẹo ghi nhớ

- **State vs Props**: State = ví tiền của bạn (tự quản lý, tự thay đổi). Props = tiền bố mẹ cho (nhận từ bên ngoài, không tự đổi được). Muốn thay props? Phải nhờ component cha thay đổi.
- **DOM vs Virtual DOM**: DOM = nhà thật (sửa tốn công). Virtual DOM = bản vẽ nhà (vẽ thử trước, chỉ sửa chỗ khác biệt). Đó là lý do React nhanh!
- **Hydration** — nghĩa gốc là "cấp nước". Tưởng tượng HTML từ server là cây khô, JS là nước — hydration làm cây sống lại (có tương tác).

---

## 📝 Bài tập

**Điền từ thích hợp vào chỗ trống:**

1. Each button, card, and modal is a reusable ___ in our design system.
2. The parent component passes the username as ___ to the child component.
3. Use the useState ___ to manage form input values in React.
4. We enabled ___ ___ to remove unused code and reduce the final bundle size.
5. After server-side rendering, ___ makes the page interactive by attaching event listeners.

{{< spoiler "✅ Đáp án" >}}
1. **component** — Mỗi phần giao diện tái sử dụng là một component
2. **props** — Dữ liệu truyền từ cha sang con qua props
3. **hook** — useState là một React hook phổ biến nhất
4. **tree shaking** — Loại bỏ dead code để giảm bundle size
5. **hydration** — Gắn JS logic vào HTML tĩnh từ server
{{< /spoiler >}}

---

## 🎯 Tổng kết

Frontend development ngày càng phức tạp — từ quản lý state, tối ưu rendering đến build optimization. Nắm vững 14 thuật ngữ này giúp bạn đọc hiểu documentation, tham gia code review, và tự tin trao đổi kỹ thuật bằng tiếng Anh. Hãy thử dùng chúng trong daily standup nhé! 💪
