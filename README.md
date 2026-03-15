# Playwright Automation Framework

This project demonstrates an **end-to-end UI automation framework** built using Playwright for the demo application **SauceDemo**.

The framework follows the **Page Object Model (POM)** design pattern and includes multiple test scenarios covering login, product management, cart operations, and checkout flow.

---

# Tech Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Playwright Test Runner
- HTML Reporting
- Cross Browser Testing

---

# Project Structure
# Playwright Automation Framework

This project demonstrates an **end-to-end UI automation framework** built using Playwright for the demo application **SauceDemo**.

The framework follows the **Page Object Model (POM)** design pattern and includes multiple test scenarios covering login, product management, cart operations, and checkout flow.

---

# Tech Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Playwright Test Runner
- HTML Reporting
- Cross Browser Testing

---

# Project Structure
PLAYWRIGHT_AUTO
│
├── pages
│ ├── LoginPage.js
│ ├── InventoryPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
│
├── tests
│ ├── login.spec.js
│ ├── inventory.spec.js
│ ├── cart.spec.js
│ └── checkout.spec.js
│
├── test-data
│ ├── loginData.js
│ └── checkoutData.js
│
├── playwright.config.js
├── package.json
└── README.md


---

# Automated Test Coverage

## Login Tests

- Successful login with valid credentials
- Login fails with invalid password
- Login fails with locked user
- Login fails with empty username
- Login fails with empty password
- Login fails with empty credentials

---

## Inventory Tests

- Verify inventory page loads successfully
- Validate total number of products displayed
- Add product to cart
- Verify cart badge count
- Remove product from inventory page
- Verify selected product in cart

---

## Cart Tests

- Continue shopping from cart page
- Remove product from cart
- Navigate to checkout from cart

---

## Checkout Tests

- Fill checkout information
- Continue to checkout overview
- Complete order successfully
- Verify order confirmation message

---

# End-to-End Test Flow
Login
↓
Inventory Page
↓
Add Product to Cart
↓
Cart Page
↓
Checkout Information
↓
Checkout Overview
↓
Order Confirmation


---

# Installation

Clone the repository
git clone <your-repo-url>

Navigate into the project
cd PLAYWRIGHT_AUTO

Install dependencies
npm install

Install Playwright browsers
npx playwright install

---

# Running Tests

- Run all tests  
  `npx playwright test`

- Run specific test file  
  `npx playwright test tests/login.spec.js`

- Run tests in headed mode  
  `npx playwright test --headed`

---

# Test Reports

Playwright automatically generates an HTML report.

Open the report with:
npx playwright show-report


---

# Key Framework Features

- Page Object Model architecture
- Reusable page methods
- Test data separation
- Cross-browser testing
- Playwright HTML reporting
- Clean and maintainable test structure

---

# Future Improvements

- CI/CD integration using GitHub Actions
- API automation with Playwright
- Dockerized test execution
- Data driven testing

---

# Author

M Zakria  Zaheer 
Software Quality Assurance Engineer  
Automation Testing | Playwright | JavaScript
Linkedin: 

