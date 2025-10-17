# Product Management Frontend

React frontend application untuk Product Management System dengan Spring Boot backend.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Create React App
- **HTTP Client**: Axios
- **UI Framework**: Bootstrap 5
- **Styling**: CSS3 dengan Bootstrap
- **State Management**: React Hooks (useState, useEffect)

## ⚙️ Prerequisites

- **Node.js** 16.0 or higher
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Navigate to Frontend Directory
```bash
cd frontend

# Using npm
npm install

# Or using yarn
yarn install

# Using npm
npm start

# Or using yarn
yarn start

# Create production build
npm run build

# Serve production build locally
npm install -g serve
serve -s build
```

## 🎨 UI Components
### ProductList Component
Displays products in a sortable table

Action buttons for edit and delete

Responsive design for mobile devices

Loading state handling

### ProductForm Component
Handles both create and edit operations

Real-time form validation

Auto-generates handle from title

Price validation and formatting

### SearchBar Component
Real-time search functionality

Search across title, vendor, and handle

Clear search option

## 🔌 API Integration
Service Configuration
The frontend communicates with the backend API using Axios: 
```
// Base URL configuration
const API_BASE_URL = 'http://localhost:8080';
```
### Available Methods
getAllProducts() - Fetch all products

getProductById(id) - Get single product

createProduct(product) - Create new product

updateProduct(id, product) - Update existing product

deleteProduct(id) - Delete product

searchProducts(query) - Search products

## ⚡ Environment Configuration
Environment Variables
Create a .env file in the frontend directory:
```
BASE_URL = http://localhost:8080/api
```

## 🛠️ Run
```bash
npm start
```
