📘 README.md — Registration Form Validation
markdown
# 📝 Registration Form Validation (JavaScript)

A fully client‑side registration form validation project built with **HTML**, **CSS**, and **JavaScript**.  
This project demonstrates real‑world form validation techniques, including required fields, length checks, email format validation, and password matching.  
It provides instant visual feedback using success/error states and prevents form submission until all fields are valid.

---

## 🚀 Features

- Required field validation
- Username length validation
- Email format validation using regex
- Password length validation
- Password confirmation check
- Visual success/error indicators
- Prevents submission until all fields pass validation
- Automatic form reset on success

---

## 🧠 How It Works

### ✔ 1. Required Fields  
The script checks that all fields contain values.  
If any field is empty, an error message appears and validation stops.

### ✔ 2. Username Validation  
The username must be between **3 and 15 characters**.

### ✔ 3. Email Validation  
A simple but effective regex checks for a valid email format:

example@domain.com

Code

### ✔ 4. Password Validation  
Password must be between **6 and 25 characters**.

### ✔ 5. Password Match  
The "Confirm Password" field must match the original password.

### ✔ 6. Visual Feedback  
Each input’s parent `.form-group` receives either:

- `.success` → green border  
- `.error` → red border + error message  

This makes validation clear and user‑friendly.

---

## 📂 Project Structure

/registration-form
│── index.html
│── style.css
│── script.js
└── README.md

Code

---

## 🧩 JavaScript Architecture

### **Main Validation Flow**
Triggered on form submission:

- Prevent default submission  
- Run required field check  
- If required fields are valid:
  - Validate username length  
  - Validate email format  
  - Validate password length  
  - Validate password match  
- If all checks pass:
  - Show success alert  
  - Reset form and UI  

### **Helper Functions**

| Function | Purpose |
|---------|---------|
| `checkRequired()` | Ensures no field is empty |
| `checkLength()` | Validates min/max length |
| `checkEmail()` | Validates email with regex |
| `checkPasswordsMatch()` | Ensures passwords match |
| `showError()` | Displays error message + red styling |
| `showSuccess()` | Displays green success styling |
| `formatFieldName()` | Capitalizes field names for messages |

---
## ▶️ Getting Started

1. Clone or download the project  
2. Open `index.html` in your browser  
3. Try submitting the form with different inputs  
4. Watch the validation feedback update in real time  

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 💡 Possible Future Enhancements

- Live validation (validate while typing)
- Password strength meter
- Show/hide password toggle
- More advanced email validation
- Username availability check (API simulation)
- Dark mode
- A strength score (0–100)
-A color gradient instead of solid colors
---

## 📜 License

This project is free to use, modify, and learn from.