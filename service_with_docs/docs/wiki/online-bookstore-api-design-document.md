# Online Bookstore - Design Document

[[_TOC_]]

## Overview
The **Online Bookstore** system allows customers to browse, select, and purchase books online. It also provides administrative capabilities for managing books and categories.

**Features:**
- User registration & authentication  
- Book browsing & categorization  
- Shopping cart and checkout  
- Order processing  

---

## Architecture
The system follows a layered architecture:

- **Presentation Layer** – Handles user interface and interactions  
- **Business Logic Layer** – Implements services for books, orders, users, and shopping cart  
- **Data Access Layer** – Interfaces with the database for persistence  

---

## Class Diagram
```
@startuml
class Book {
  +Id: int
  +Title: string
  +Author: string
  +ISBN: string
  +Price: decimal
  +Description: string
  +CategoryId: int
  +GetById()
  +Update() 
  +Delete()
}

class Category {
  +Id: int
  +Name: string
  +Description: string
  +Books: List<Book>
  +GetAll()
  +Add()
}

class Order {
  +Id: int
  +UserId: string
  +OrderDate: DateTime
  +TotalAmount: decimal
  +OrderDetails: List<OrderDetail>
  +ProcessOrder()
  +CalculateTotal()
}

class OrderDetail {
  +Id: int
  +OrderId: int
  +BookId: int
  +Quantity: int
  +UnitPrice: decimal
}

class User {
  +Id: string
  +Email: string
  +Password: string
  +FirstName: string
  +LastName: string
  +Login()
  +Register()
}

class ShoppingCart {
  +UserId: string
  +Items: List<CartItem>
  +AddItem()
  +RemoveItem()
  +GetTotal()
}

class CartItem {
  +BookId: int
  +Quantity: int
  +Price: decimal
}

Book "1" -- "1" Category
Order "1" -- "*" OrderDetail
OrderDetail "1" -- "1" Book 
ShoppingCart "1" -- "*" CartItem
CartItem "1" -- "1" Book
Order "*" -- "1" User
@enduml
```
![==image_0==.png](/.attachments/==image_0==-d49706fb-cac3-4e49-985f-991db6d9ee24.png) 

##Sequence Diagrams
-----------------

### Purchase Flow


```
@startuml
actor User
participant UI
participant CartController
participant BookService
participant ShoppingCart
participant OrderService
participant Database

User -> UI: Browse Books
UI -> BookService: GetBooks()
BookService -> Database: Query Books
Database --> BookService: Return Books
BookService --> UI: Display Books

User -> UI: Add to Cart
UI -> CartController: AddToCart(bookId)
CartController -> ShoppingCart: AddItem(book)
ShoppingCart --> CartController: Updated Cart
CartController --> UI: Success Message

User -> UI: Checkout
UI -> OrderService: CreateOrder(cart)
OrderService -> Database: Save Order
Database --> OrderService: Order Confirmation
OrderService --> UI: Order Complete
UI --> User: Order Confirmation
@enduml
```
![==image_0==.png](/.attachments/==image_0==-95189d56-f72e-4665-95b6-1bce7d46c2d0.png) 
###User Registration Flow

```
@startuml
actor User
participant UI
participant AccountController
participant UserService
participant Database

User -> UI: Fill Registration Form
UI -> AccountController: Register(userDto)
AccountController -> UserService: ValidateUser(userDto)
UserService -> UserService: Hash Password
UserService -> Database: Create User
Database --> UserService: User Created
UserService --> AccountController: Success
AccountController --> UI: Redirect to Login
UI --> User: Registration Complete
@enduml
```
![==image_0==.png](/.attachments/==image_0==-4b958a4e-fc38-4a3b-bed1-b50c6cfddcdd.png) 

###Book Management Flow (Admin)

```
@startuml
actor Admin
participant UI
participant BookController
participant BookService
participant Database

Admin -> UI: Create/Edit Book
UI -> BookController: SaveBook(bookDto)
BookController -> BookService: ValidateBook(bookDto)
BookService -> Database: Save Book
Database --> BookService: Book Saved
BookService --> BookController: Success
BookController --> UI: Refresh Book List
UI --> Admin: Operation Complete
@enduml
```
![==image_0==.png](/.attachments/==image_0==-f5039c61-fa6f-4db9-9d29-7a4823156394.png)
