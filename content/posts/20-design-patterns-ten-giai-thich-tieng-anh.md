---
title: "20 Design Patterns — Tên & Giải Thích Bằng Tiếng Anh Cho Developer"
slug: "20-design-patterns-ten-giai-thich-tieng-anh"
date: 2026-03-21
summary: "Tổng hợp 20 design patterns phổ biến nhất — có phiên âm IPA, giải thích tiếng Anh-Việt song ngữ, ví dụ code thực tế để bạn tự tin thảo luận kiến trúc."
description: "20 design patterns cho developer Việt Nam: Singleton, Factory, Observer, Strategy, Adapter — bảng EN-VN song ngữ, phiên âm IPA, ví dụ code thực tế, cách giải thích trong technical interview."
tags: ["design-patterns", "software-architecture", "vocabulary", "it-english", "developer", "oop"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

Design patterns là **ngôn ngữ chung** của developer trên toàn thế giới. Khi ai đó nói "Let's use the Observer pattern here" hay "This is a classic Factory method", bạn cần hiểu **ngay lập tức** — không chỉ ý nghĩa kỹ thuật mà còn cách **phát âm** và **giải thích** bằng tiếng Anh.

Vấn đề là: nhiều developer Việt Nam hiểu pattern nhưng **không diễn đạt được** bằng tiếng Anh trong code review, technical interview, hay design discussion.

Bài viết này giúp bạn:
- Nắm vững **20 design patterns phổ biến nhất** với giải thích song ngữ
- Biết **cách phát âm** (IPA) để tự tin nói trong meeting
- Có **ví dụ code** minh họa từng pattern
- **Câu mẫu tiếng Anh** để thảo luận kiến trúc chuyên nghiệp

---

## 1. Creational Patterns — Nhóm Khởi Tạo

Creational patterns /kriˈeɪ.ʃən.əl ˈpæt.ənz/ xử lý việc **tạo đối tượng** — giúp hệ thống linh hoạt, không phụ thuộc vào cách tạo cụ thể.

| # | Pattern | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|---------|-----------------|-------------------|
| 1 | **Singleton** | /ˈsɪŋ.ɡəl.tən/ | Đơn thể — đảm bảo một class chỉ có duy nhất một instance |
| 2 | **Factory Method** | /ˈfæk.tər.i ˈmeθ.əd/ | Phương thức nhà máy — để subclass quyết định tạo đối tượng nào |
| 3 | **Abstract Factory** | /ˈæb.strækt ˈfæk.tər.i/ | Nhà máy trừu tượng — tạo họ các đối tượng liên quan |
| 4 | **Builder** | /ˈbɪl.dər/ | Trình xây dựng — tách việc xây dựng đối tượng phức tạp khỏi biểu diễn |
| 5 | **Prototype** | /ˈproʊ.tə.taɪp/ | Nguyên mẫu — tạo đối tượng mới bằng cách sao chép (clone) |

### Ví dụ: Singleton Pattern

```java
// Singleton: ensures only ONE instance exists globally
public class DatabaseConnection {
    private static DatabaseConnection instance;

    private DatabaseConnection() {} // private constructor

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}
```

**Cách giải thích trong meeting:**
> "We use the **Singleton pattern** for the database connection pool. It **ensures** there's only **one instance** shared across the entire application, which **prevents** resource waste from creating multiple connections."

### Ví dụ: Factory Method

```python
# Factory Method: lets subclasses decide which object to create
class NotificationFactory:
    def create_notification(self, channel):
        if channel == "email":
            return EmailNotification()
        elif channel == "sms":
            return SMSNotification()
        elif channel == "push":
            return PushNotification()
        raise ValueError(f"Unknown channel: {channel}")
```

**Câu mẫu:**
> "I'd suggest applying the **Factory Method** here. Instead of hardcoding the notification type, we let the factory **decide at runtime** which concrete class to instantiate."

---

## 2. Structural Patterns — Nhóm Cấu Trúc

Structural patterns /ˈstrʌk.tʃər.əl ˈpæt.ənz/ xử lý **cách các class và object kết hợp** thành cấu trúc lớn hơn.

| # | Pattern | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|---------|-----------------|-------------------|
| 6 | **Adapter** | /əˈdæp.tər/ | Bộ chuyển đổi — cho phép hai interface không tương thích làm việc cùng nhau |
| 7 | **Decorator** | /ˈdek.ə.reɪ.tər/ | Bộ trang trí — thêm chức năng mới cho object mà không thay đổi cấu trúc |
| 8 | **Facade** | /fəˈsɑːd/ | Mặt tiền — cung cấp interface đơn giản cho một hệ thống phức tạp |
| 9 | **Proxy** | /ˈprɒk.si/ | Đại diện — kiểm soát quyền truy cập đến đối tượng gốc |
| 10 | **Composite** | /kəmˈpɒz.ɪt/ | Tổ hợp — xử lý đối tượng đơn lẻ và nhóm đối tượng theo cùng một cách |
| 11 | **Bridge** | /brɪdʒ/ | Cầu nối — tách abstraction khỏi implementation để cả hai biến đổi độc lập |

### Ví dụ: Adapter Pattern

```typescript
// Adapter: makes incompatible interfaces work together
// Old payment system returns XML
class LegacyPaymentGateway {
  processXML(xmlData: string): string { /* ... */ }
}

// New system expects JSON
class PaymentAdapter {
  private legacy: LegacyPaymentGateway;

  constructor(legacy: LegacyPaymentGateway) {
    this.legacy = legacy;
  }

  processJSON(jsonData: object): object {
    const xml = this.convertToXML(jsonData);
    const result = this.legacy.processXML(xml);
    return this.convertToJSON(result);
  }
}
```

**Cách giải thích:**
> "We wrapped the legacy payment gateway in an **Adapter**. It **converts** our JSON requests into the XML format the old system expects, so we don't have to **rewrite** the entire payment module."

### Ví dụ: Facade Pattern

```python
# Facade: simplifies a complex subsystem
class OrderFacade:
    def __init__(self):
        self.inventory = InventoryService()
        self.payment = PaymentService()
        self.shipping = ShippingService()
        self.notification = NotificationService()

    def place_order(self, order):
        """One simple method hides all the complexity"""
        self.inventory.check_stock(order)
        self.payment.process(order)
        self.shipping.schedule(order)
        self.notification.send_confirmation(order)
```

**Câu mẫu:**
> "The `OrderFacade` provides a **single entry point** for placing orders. It **hides the complexity** of inventory checks, payment processing, and shipping behind one clean interface."

---

## 3. Behavioral Patterns — Nhóm Hành Vi

Behavioral patterns /bɪˈheɪ.vjər.əl ˈpæt.ənz/ xử lý **giao tiếp giữa các object** — ai làm gì, khi nào, và như thế nào.

| # | Pattern | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|---------|-----------------|-------------------|
| 12 | **Observer** | /əbˈzɜːr.vər/ | Quan sát — khi một object thay đổi, tự động thông báo tất cả dependents |
| 13 | **Strategy** | /ˈstræt.ə.dʒi/ | Chiến lược — định nghĩa họ các thuật toán, đóng gói từng cái, và hoán đổi được |
| 14 | **Command** | /kəˈmænd/ | Lệnh — đóng gói request thành object, hỗ trợ undo/redo |
| 15 | **Iterator** | /ˈɪt.ər.eɪ.tər/ | Bộ duyệt — truy cập tuần tự các phần tử mà không lộ cấu trúc bên trong |
| 16 | **State** | /steɪt/ | Trạng thái — cho phép object thay đổi hành vi khi trạng thái nội bộ thay đổi |
| 17 | **Template Method** | /ˈtem.plɪt ˈmeθ.əd/ | Phương thức mẫu — định nghĩa khung thuật toán, để subclass tùy chỉnh các bước |
| 18 | **Chain of Responsibility** | /tʃeɪn əv rɪˌspɒn.sɪˈbɪl.ɪ.ti/ | Chuỗi trách nhiệm — chuyền request qua chuỗi handlers cho đến khi được xử lý |
| 19 | **Mediator** | /ˈmiː.di.eɪ.tər/ | Trung gian — giảm kết nối trực tiếp giữa các object, giao tiếp qua mediator |
| 20 | **Dependency Injection** | /dɪˈpen.dən.si ɪnˈdʒek.ʃən/ | Tiêm phụ thuộc — truyền dependency từ bên ngoài thay vì tạo bên trong |

### Ví dụ: Observer Pattern

```java
// Observer: automatic notifications when state changes
public interface OrderObserver {
    void onOrderStatusChanged(Order order, String newStatus);
}

public class Order {
    private List<OrderObserver> observers = new ArrayList<>();
    private String status;

    public void addObserver(OrderObserver observer) {
        observers.add(observer);
    }

    public void setStatus(String status) {
        this.status = status;
        // Notify ALL observers automatically
        observers.forEach(o -> o.onOrderStatusChanged(this, status));
    }
}

// Usage:
order.addObserver(emailService);    // sends email on change
order.addObserver(dashboardService); // updates UI on change
order.addObserver(analyticsService); // tracks metrics on change
```

**Cách giải thích:**
> "We implemented the **Observer pattern** for order status updates. Whenever the status changes, it **automatically notifies** all registered listeners — email, dashboard, and analytics — without the Order class needing to know about them."

### Ví dụ: Strategy Pattern

```python
# Strategy: swap algorithms at runtime
class PricingStrategy:
    def calculate(self, base_price): pass

class RegularPricing(PricingStrategy):
    def calculate(self, base_price):
        return base_price

class PremiumDiscount(PricingStrategy):
    def calculate(self, base_price):
        return base_price * 0.8  # 20% off

class BlackFridaySale(PricingStrategy):
    def calculate(self, base_price):
        return base_price * 0.5  # 50% off

# Switch strategy without changing ShoppingCart code
cart = ShoppingCart(pricing=BlackFridaySale())
```

**Câu mẫu:**
> "We use the **Strategy pattern** for pricing. The shopping cart doesn't care **which** pricing algorithm is used — we can **swap** between regular, premium, or sale pricing **at runtime** without modifying any existing code."

---

## 4. Bảng Tổng Hợp — Quick Reference

| Pattern | Loại | Một câu giải thích tiếng Anh |
|---------|------|-------------------------------|
| Singleton | Creational | Ensures a class has only **one instance** with a global access point |
| Factory Method | Creational | Defines an interface for creating objects, letting **subclasses decide** |
| Abstract Factory | Creational | Creates **families** of related objects without specifying concrete classes |
| Builder | Creational | Constructs complex objects **step by step** |
| Prototype | Creational | Creates new objects by **cloning** an existing instance |
| Adapter | Structural | Converts one interface into another that clients **expect** |
| Decorator | Structural | Adds responsibilities to objects **dynamically** |
| Facade | Structural | Provides a **simplified interface** to a complex subsystem |
| Proxy | Structural | Controls **access** to another object |
| Composite | Structural | Treats individual objects and compositions **uniformly** |
| Bridge | Structural | Separates **abstraction** from **implementation** |
| Observer | Behavioral | Defines a **one-to-many dependency** so dependents are notified automatically |
| Strategy | Behavioral | Encapsulates algorithms and makes them **interchangeable** |
| Command | Behavioral | Encapsulates a request as an **object**, supporting undo/redo |
| Iterator | Behavioral | Accesses elements **sequentially** without exposing internals |
| State | Behavioral | Allows an object to **alter its behavior** when its state changes |
| Template Method | Behavioral | Defines the **skeleton** of an algorithm, deferring steps to subclasses |
| Chain of Responsibility | Behavioral | Passes a request along a **chain of handlers** |
| Mediator | Behavioral | Reduces **direct coupling** between objects via a central mediator |
| Dependency Injection | Behavioral | Supplies dependencies **from outside** rather than creating internally |

---

## 5. Phrases Hay Dùng Khi Thảo Luận Design Patterns

Khi thảo luận kiến trúc trong code review hay design meeting, bạn sẽ cần những cụm từ này:

| Tình huống | Câu tiếng Anh | Nghĩa |
|------------|----------------|--------|
| Đề xuất pattern | "I think we should apply the **Strategy pattern** here." | "Mình nghĩ nên áp dụng Strategy pattern ở đây." |
| Giải thích lý do | "This **decouples** the algorithm from the client code." | "Điều này tách biệt thuật toán khỏi code phía client." |
| Nhận diện pattern | "This looks like a classic **Observer** implementation." | "Cái này trông giống implementation Observer kinh điển." |
| Cảnh báo lạm dụng | "I think this is **over-engineered** — a simple if-else would suffice." | "Mình nghĩ cái này quá phức tạp — if-else đơn giản là đủ." |
| So sánh | "**Strategy** and **State** are similar, but State **manages transitions** between states." | "Strategy và State tương tự nhau, nhưng State quản lý chuyển đổi giữa các trạng thái." |
| Refactor | "We should **refactor** this into a **Factory** to reduce duplication." | "Mình nên refactor cái này thành Factory để giảm lặp code." |
| Trade-off | "The **Decorator** adds flexibility but increases **complexity**." | "Decorator tăng tính linh hoạt nhưng cũng tăng độ phức tạp." |

---

## 6. Practice — Luyện Tập

### Exercise 1: Chọn Pattern phù hợp

Đọc mô tả bằng tiếng Anh và chọn design pattern đúng:

1. "We need to **notify** multiple services whenever a user signs up."
2. "The report can be exported as PDF, CSV, or Excel — we should be able to **switch formats easily**."
3. "The legacy API returns XML but our frontend expects JSON."
4. "We want to **log every user action** and support **undo/redo**."
5. "Multiple classes need access to the same **configuration object**."

<details>
<summary>Đáp án</summary>

1. **Observer** — one-to-many notification
2. **Strategy** — interchangeable algorithms
3. **Adapter** — convert incompatible interfaces
4. **Command** — encapsulate actions as objects with undo support
5. **Singleton** — single shared instance

</details>

### Exercise 2: Giải thích bằng tiếng Anh

Hãy viết **1-2 câu** giải thích từng pattern cho đồng nghiệp nước ngoài:

1. Giải thích tại sao bạn chọn **Facade** cho payment module.
2. Giải thích sự khác biệt giữa **Factory Method** và **Abstract Factory**.
3. Giải thích khi nào **không nên** dùng Singleton.

<details>
<summary>Gợi ý</summary>

1. "I chose the **Facade pattern** for the payment module because it **hides the complexity** of multiple payment providers behind a single, clean interface. The rest of the app only needs to call `paymentFacade.process(order)`."

2. "**Factory Method** lets a single class defer object creation to subclasses. **Abstract Factory** goes further — it creates **entire families** of related objects. Use Abstract Factory when you need to ensure that related objects are **compatible** with each other."

3. "Avoid Singleton when you need **testability** — singletons create **hidden global state** that makes unit testing difficult. Consider **Dependency Injection** instead, which gives you the same shared instance but with better **test isolation**."

</details>

---

## Kết luận

Design patterns không chỉ là kiến thức kỹ thuật — chúng còn là **từ vựng chuyên ngành** mà developer toàn cầu dùng để giao tiếp. Khi bạn nói "Let's use an Adapter here" thay vì giải thích dài dòng, bạn đang nói cùng ngôn ngữ với đồng nghiệp quốc tế.

**3 điều cần nhớ:**
1. **Hiểu** pattern trước, rồi mới áp dụng — đừng dùng pattern chỉ vì nó "nghe pro"
2. **Phát âm đúng** — đặc biệt Facade /fəˈsɑːd/, Singleton /ˈsɪŋ.ɡəl.tən/, Iterator /ˈɪt.ər.eɪ.tər/
3. **Luyện giải thích** bằng tiếng Anh — khả năng diễn đạt pattern là kỹ năng interview cực kỳ quan trọng

> **Mẹo:** Bookmark bài này và mỗi tuần pick **2-3 patterns** để luyện giải thích bằng tiếng Anh cho đồng nghiệp. Practice makes perfect! 💪
