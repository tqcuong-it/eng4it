---
title: "API Documentation — Cách Đọc và Viết cho Developer"
slug: "api-documentation-cach-doc-va-viet"
date: 2026-03-14
summary: "Hướng dẫn đọc hiểu và viết API Documentation bằng tiếng Anh — từ vựng, cấu trúc, ví dụ REST API, OpenAPI/Swagger thực tế."
description: "Hướng dẫn developer Việt Nam đọc hiểu và viết API Documentation tiếng Anh. Từ vựng API, cấu trúc endpoint docs, ví dụ REST API, OpenAPI spec — bảng EN-VN song ngữ, phiên âm IPA."
tags: ["api", "documentation", "rest-api", "vocabulary", "it-english", "developer"]
categories: ["workplace-english"]
ShowToc: true
TocOpen: true
draft: false
---

> 📱 **Học IELTS miễn phí:** [App IELTS 6.0](https://ielts.eng4it.com)

## Giới thiệu

API Documentation là **cầu nối** giữa người viết API và người sử dụng API. Cho dù bạn là backend developer viết docs cho team frontend, hay là người integrate third-party API — bạn đều cần đọc và viết API docs **bằng tiếng Anh**.

Thực tế: **99% API documentation trên thế giới** viết bằng tiếng Anh. Stripe, Twilio, GitHub, AWS — tất cả đều English. Nếu bạn không đọc được API docs, bạn sẽ mất **hàng giờ** để hiểu một endpoint đơn giản.

Bài viết này giúp bạn:
- Nắm **từ vựng API** quan trọng nhất (có IPA phiên âm)
- Hiểu **cấu trúc chuẩn** của API Documentation
- Đọc được docs từ **Stripe, GitHub, Swagger** — các API phổ biến
- Tự tin **viết API docs** cho project của mình

---

## 1. Từ vựng cơ bản — API Fundamentals

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 1 | **API** (Application Programming Interface) | /ˌeɪ.piːˈaɪ/ | Giao diện lập trình ứng dụng |
| 2 | **Endpoint** | /ˈend.pɔɪnt/ | Điểm cuối — URL cụ thể của API |
| 3 | **Request** | /rɪˈkwest/ | Yêu cầu — dữ liệu gửi đến server |
| 4 | **Response** | /rɪˈspɒns/ | Phản hồi — dữ liệu server trả về |
| 5 | **HTTP Method** | /ˌeɪtʃ.tiː.tiːˈpiː ˈmeθ.əd/ | Phương thức HTTP (GET, POST, PUT, DELETE) |
| 6 | **Status Code** | /ˈsteɪ.təs kəʊd/ | Mã trạng thái — 200 OK, 404 Not Found... |
| 7 | **Header** | /ˈhed.ər/ | Tiêu đề — metadata đi kèm request/response |
| 8 | **Body** | /ˈbɒd.i/ | Thân — dữ liệu chính của request/response |
| 9 | **Query parameter** | /ˈkwɪə.ri pəˈræm.ɪ.tər/ | Tham số truy vấn — `?key=value` trên URL |
| 10 | **Path parameter** | /pɑːθ pəˈræm.ɪ.tər/ | Tham số đường dẫn — `/users/{id}` |

### Ví dụ: Đọc một API endpoint

```
GET /api/v2/users/{userId}/orders?status=pending&limit=10

HTTP Method:      GET
Base URL:         /api/v2
Path parameter:   {userId} = ID của user
Endpoint:         /users/{userId}/orders
Query parameters: status=pending, limit=10
```

**Giải thích cho team:**
> "This **endpoint** accepts a **GET request** with a **path parameter** for the user ID. You can filter results using **query parameters** like `status` and `limit`."

---

## 2. Từ vựng nâng cao — Authentication & Data Format

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 11 | **Authentication** | /ɔːˌθen.tɪˈkeɪ.ʃən/ | Xác thực — chứng minh bạn là ai |
| 12 | **Authorization** | /ˌɔː.θər.aɪˈzeɪ.ʃən/ | Phân quyền — bạn được làm gì |
| 13 | **Bearer token** | /ˈbeə.rər ˈtəʊ.kən/ | Token mang theo — dùng trong header `Authorization` |
| 14 | **API key** | /ˌeɪ.piːˈaɪ kiː/ | Khóa API — chuỗi ký tự xác thực |
| 15 | **Rate limiting** | /reɪt ˈlɪm.ɪ.tɪŋ/ | Giới hạn tốc độ — số request tối đa/thời gian |
| 16 | **Payload** | /ˈpeɪ.ləʊd/ | Tải trọng — dữ liệu chính trong request body |
| 17 | **Schema** | /ˈskiː.mə/ | Lược đồ — cấu trúc dữ liệu (fields, types) |
| 18 | **Pagination** | /ˌpædʒ.ɪˈneɪ.ʃən/ | Phân trang — chia kết quả thành nhiều trang |
| 19 | **Webhook** | /ˈweb.hʊk/ | Hook web — server gọi ngược đến URL của bạn |
| 20 | **Idempotent** | /ˌaɪ.dɪmˈpəʊ.tənt/ | Lũy đẳng — gọi nhiều lần cho cùng kết quả |

### Authentication trong docs — cách đọc

```
Authentication
--------------
All API requests require authentication via Bearer token.

Include the token in the Authorization header:

  Authorization: Bearer your_api_token_here

To generate an API key, go to Settings > API Keys > Create New Key.

Rate Limits:
  - Free tier: 100 requests/minute
  - Pro tier: 1,000 requests/minute
  - Enterprise: Unlimited
```

**Bạn cần làm:**
1. Đọc phần **Authentication** trước tiên
2. Lấy **API key** hoặc **Bearer token**
3. Thêm vào **Header** của mọi request
4. Chú ý **Rate limiting** để không bị block

---

## 3. Cấu trúc chuẩn của API Documentation

Mỗi API endpoint thường được document theo cấu trúc:

### 3.1 Endpoint Reference Template

```markdown
## Create a new order

Creates a new order for the specified user.

**Endpoint:** `POST /api/v2/users/{userId}/orders`

### Path Parameters

| Parameter | Type   | Required | Description          |
|-----------|--------|----------|----------------------|
| userId    | string | Yes      | The unique user ID   |

### Request Headers

| Header        | Value              | Required | Description        |
|---------------|--------------------|----------|--------------------|
| Authorization | Bearer {token}     | Yes      | API authentication |
| Content-Type  | application/json   | Yes      | Request body format|

### Request Body

| Field     | Type    | Required | Description                    |
|-----------|---------|----------|--------------------------------|
| productId | string  | Yes      | ID of the product to order     |
| quantity  | integer | Yes      | Number of items (min: 1)       |
| notes     | string  | No       | Optional order notes           |
| coupon    | string  | No       | Discount coupon code           |

### Example Request

    curl -X POST https://api.example.com/api/v2/users/usr_123/orders \
      -H "Authorization: Bearer sk_live_xxx" \
      -H "Content-Type: application/json" \
      -d '{
        "productId": "prod_456",
        "quantity": 2,
        "notes": "Gift wrap please"
      }'

### Response

**Status: 201 Created**

    {
      "id": "ord_789",
      "userId": "usr_123",
      "productId": "prod_456",
      "quantity": 2,
      "status": "pending",
      "createdAt": "2026-03-14T10:30:00Z"
    }

### Error Responses

| Status | Code              | Description               |
|--------|-------------------|---------------------------|
| 400    | invalid_request   | Missing required fields   |
| 401    | unauthorized      | Invalid or expired token  |
| 404    | user_not_found    | User ID does not exist    |
| 429    | rate_limit        | Too many requests         |
```

### 3.2 Các phần quan trọng cần đọc

| Phần | Tiếng Anh | Đọc khi nào |
|------|-----------|-------------|
| **Overview** | Tổng quan | Đọc đầu tiên — hiểu API làm gì |
| **Authentication** | Xác thực | Đọc ngay — cần để gọi API |
| **Endpoints** | Điểm cuối | Đọc endpoint bạn cần dùng |
| **Parameters** | Tham số | Xem required fields |
| **Response** | Phản hồi | Xem data structure trả về |
| **Error codes** | Mã lỗi | Bookmark — dùng khi debug |
| **Rate limits** | Giới hạn | Đọc trước khi implement |
| **Changelog** | Nhật ký thay đổi | Đọc khi upgrade version |

---

## 4. Từ vựng khi viết API Documentation

| # | Thuật ngữ | Phiên âm (IPA) | Nghĩa tiếng Việt |
|---|-----------|-----------------|-------------------|
| 21 | **Deprecated** | /ˈdep.rɪ.keɪ.tɪd/ | Ngừng hỗ trợ — sẽ bị xóa trong tương lai |
| 22 | **Breaking change** | /ˈbreɪ.kɪŋ tʃeɪndʒ/ | Thay đổi phá vỡ — không tương thích ngược |
| 23 | **Versioning** | /ˈvɜːr.ʒən.ɪŋ/ | Quản lý phiên bản — v1, v2... |
| 24 | **SDK** (Software Development Kit) | /ˌes.diːˈkeɪ/ | Bộ công cụ phát triển |
| 25 | **Sandbox** | /ˈsænd.bɒks/ | Môi trường thử nghiệm |
| 26 | **Required** | /rɪˈkwaɪəd/ | Bắt buộc — field phải có |
| 27 | **Optional** | /ˈɒp.ʃən.əl/ | Tùy chọn — có thể bỏ qua |
| 28 | **Nullable** | /ˈnʌl.ə.bəl/ | Cho phép null |
| 29 | **Enum** | /ˈiː.nʌm/ | Danh sách giá trị cho phép |
| 30 | **Callback** | /ˈkɔːl.bæk/ | Gọi lại — URL server sẽ gọi đến |

### Ví dụ: Viết docs cho API của bạn

```yaml
# OpenAPI 3.0 Specification
openapi: 3.0.3
info:
  title: User Management API
  description: API for managing users and their profiles.
  version: 2.1.0

paths:
  /users/{userId}:
    get:
      summary: Get user by ID
      description: |
        Returns a single user object. Requires authentication.
        **Note:** This endpoint is rate-limited to 100 req/min.
      parameters:
        - name: userId
          in: path
          required: true
          description: Unique identifier of the user
          schema:
            type: string
            example: "usr_abc123"
      responses:
        '200':
          description: User found successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found

components:
  schemas:
    User:
      type: object
      required:
        - id
        - email
      properties:
        id:
          type: string
          description: Unique user ID
        email:
          type: string
          format: email
          description: User's email address
        name:
          type: string
          nullable: true
          description: Display name (optional)
        role:
          type: string
          enum: [admin, editor, viewer]
          description: User's role in the system
        createdAt:
          type: string
          format: date-time
```

---

## 5. Mẫu câu giao tiếp về API Documentation

### 5.1 Khi đọc docs và cần hỏi

| Tình huống | Câu tiếng Anh | Nghĩa |
|------------|---------------|-------|
| Không hiểu endpoint | "What's the **expected payload** for this endpoint?" | Payload mong đợi cho endpoint này là gì? |
| Thiếu docs | "Is there documentation for the **webhook** events?" | Có docs cho các webhook events không? |
| API lỗi | "I'm getting a **401 Unauthorized**. Is the **bearer token** format correct?" | Tôi bị lỗi 401. Format bearer token đúng chưa? |
| Rate limit | "What are the **rate limits** for the free tier?" | Rate limit của free tier là bao nhiêu? |

### 5.2 Khi viết docs cho team

| Tình huống | Câu tiếng Anh | Nghĩa |
|------------|---------------|-------|
| Thêm endpoint mới | "I've added docs for the new **endpoint**. Please review the **request schema**." | Tôi đã thêm docs cho endpoint mới. Hãy review request schema. |
| Deprecate API | "The v1 **endpoint** is now **deprecated**. Please migrate to v2 by June." | Endpoint v1 đã deprecated. Hãy migrate sang v2 trước tháng 6. |
| Breaking change | "Heads up: this is a **breaking change**. The `status` field is now an **enum** instead of a free string." | Lưu ý: đây là breaking change. Field `status` giờ là enum thay vì string tự do. |
| Cập nhật docs | "Updated the **API reference** with the new **pagination** parameters." | Đã cập nhật API reference với các tham số pagination mới. |

---

## 6. HTTP Status Codes — Developer phải nhớ

| Code | Tên | Nghĩa | Khi nào gặp |
|------|-----|-------|-------------|
| **200** | OK | Thành công | Request xử lý thành công |
| **201** | Created | Đã tạo | POST tạo resource mới thành công |
| **204** | No Content | Không có nội dung | DELETE thành công, không trả data |
| **400** | Bad Request | Yêu cầu sai | Thiếu field, sai format |
| **401** | Unauthorized | Chưa xác thực | Token sai hoặc hết hạn |
| **403** | Forbidden | Bị cấm | Không có quyền truy cập |
| **404** | Not Found | Không tìm thấy | URL hoặc resource không tồn tại |
| **409** | Conflict | Xung đột | Duplicate data |
| **422** | Unprocessable Entity | Không xử lý được | Validation failed |
| **429** | Too Many Requests | Quá nhiều yêu cầu | Vượt rate limit |
| **500** | Internal Server Error | Lỗi server | Bug phía server |
| **502** | Bad Gateway | Gateway lỗi | Server upstream không phản hồi |
| **503** | Service Unavailable | Dịch vụ không khả dụng | Server đang bảo trì |

---

## 7. Practice — Bài tập thực hành

### Bài 1: Đọc API Documentation

Đọc đoạn API docs sau và trả lời câu hỏi:

```
## Delete a user

Permanently deletes a user and all associated data.
This action is irreversible.

Endpoint: DELETE /api/v2/users/{userId}

Headers:
  Authorization: Bearer {token} (required)
  X-Confirm-Delete: true (required)

Path Parameters:
  userId (string, required) — The user's unique identifier

Response: 204 No Content

Errors:
  401 Unauthorized — Invalid token
  403 Forbidden — Insufficient permissions
  404 Not Found — User does not exist

Rate Limit: 10 requests/minute

Note: This endpoint is idempotent. Calling it multiple
times with the same userId will not produce an error
if the user has already been deleted.
```

**Câu hỏi:**
1. HTTP Method nào được sử dụng?
2. Header nào **bắt buộc** ngoài Authorization?
3. Response trả về status code gì khi thành công?
4. Tại sao docs nói endpoint này là **idempotent**?
5. **Rate limit** là bao nhiêu?

### Bài 2: Viết API Documentation

Viết docs cho endpoint sau bằng tiếng Anh:

- Chức năng: Cập nhật thông tin profile user
- Method: PUT
- URL: `/api/v2/users/{userId}/profile`
- Body: `name` (string, optional), `avatar` (string/URL, optional), `bio` (string, max 500 chars, optional)
- Response: 200 với user object đã cập nhật
- Lỗi: 400, 401, 404

### Bài 3: Điền từ vựng

1. "The API returns a **429** status code because we hit the _____."
2. "This field is _____ — you can set it to `null` or omit it entirely."
3. "The v1 endpoint is _____. Please use v2 instead."
4. "Send your API key in the _____ header as a Bearer token."
5. "The `role` field only accepts values from a predefined _____: admin, editor, or viewer."

---

## Đáp án

### Bài 1
1. **DELETE**
2. **X-Confirm-Delete: true**
3. **204 No Content**
4. Vì gọi nhiều lần với cùng userId sẽ **không gây lỗi** — nếu user đã bị xóa, API không trả error
5. **10 requests/minute**

### Bài 3
1. **rate limit**
2. **nullable** (hoặc optional)
3. **deprecated**
4. **Authorization**
5. **enum**

---

## Kết luận

Đọc và viết API Documentation là **kỹ năng sống còn** cho developer. Với 30 từ vựng trong bài này, bạn đã có đủ nền tảng để:

- ✅ Đọc hiểu API docs của **Stripe, GitHub, AWS** — bất kỳ API nào
- ✅ Viết docs rõ ràng cho API của **project mình**
- ✅ Giao tiếp với team về **API design** một cách chuyên nghiệp
- ✅ Debug **API errors** nhanh hơn nhờ hiểu status codes

**Tip thực tế:** Khi integrate một API mới, đọc theo thứ tự: **Overview → Authentication → Endpoint bạn cần → Error codes**. Đừng đọc toàn bộ docs — chỉ đọc phần bạn cần dùng! 📚

---

*Bạn thấy bài viết hữu ích? Hãy chia sẻ cho đồng nghiệp developer cùng học nhé!*
