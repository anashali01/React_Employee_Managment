<div align="center">

# 👥 React Employee Management

A modern, full-featured employee management application built with React and Vite.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)

</div>

---

## 🔗 Live Demo

| Environment | Link |
|-------------|------|
| **Live App** | [Deploy Link ->](https://react-employee-managment.vercel.app/viewEmp) |
| **Preview** | [Vercel / Netlify / GitHub Pages](https://react-employee-managment.vercel.app/viewEmp) |

> Replace the links above with your deployed URL once you publish the app (e.g., Vercel, Netlify, or GitHub Pages).

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ➕ **Add Employee** | Add new employees with image, name, email, password, gender, hobbies, city & address |
| ✏️ **Edit Employee** | Update existing employee records |
| 🗑️ **Delete Employee** | Remove employees from the list |
| 🔍 **Search** | Search employees by name |
| 👁️ **Show/Hide Password** | Toggle password visibility in the view table |
| 📄 **Pagination** | Browse employees with 5 records per page |
| 💾 **Local Storage** | Data persists in browser localStorage |

---

## 🛠️ Tech Stack

- **React 19** – UI library
- **Vite 7** – Build tool & dev server
- **React Router 7** – Client-side routing
- **Bootstrap 5** – Styling & responsive layout
- **React Icons** – Icon library

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-employee-managment.git
cd react-employee-managment

# Install dependencies
npm install
# or
bun install
```

### Run Locally

```bash
# Start development server
npm run dev
# or
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or
bun run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── Header.jsx      # App header with search
├── pages/
│   ├── AddEmp.jsx      # Add/Edit employee form
│   └── ViewEmp.jsx     # Employee list with table & pagination
├── App.jsx             # Main app & state management
└── main.jsx            # Entry point
```

---

## 📄 License

This project is private and not licensed for public use.
