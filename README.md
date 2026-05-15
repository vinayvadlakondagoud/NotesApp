Overview

The **Notes Management System** is a full-stack web application developed as part of a technical assessment.
It enables users to efficiently **create, manage, search, and organize notes** with a clean UI and robust backend.

This project demonstrates strong fundamentals in **problem-solving, API design, database integration, and UI development**.

---

## 🎯 Key Highlights

* Fixed and improved a **buggy codebase** (Core Task)
* Built a **complete Notes API (CRUD operations)**
* Developed a **responsive and modern frontend UI**
* Integrated **MongoDB for persistent storage**
* Implemented **user-based note management**

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## ✨ Features

### 📝 Notes Functionality

* Create new notes
* View all notes
* View individual note details
* Edit/update notes
* Delete notes (with confirmation)

---

### 🔍 Search Capability

* Search notes by:

  * Title
  * Content
* Real-time filtering

---

### 📊 Data Handling

* Notes sorted by latest updates
* Efficient CRUD operations
* Clean API responses

---

### 🔐 User Management (Enhanced Feature)

* User registration and login
* Notes linked to specific users
* Session handled via local storage

---

### ⚠️ Validation & Error Handling

* Required field validation (title)
* Input validation on both frontend & backend
* Proper error messages

---

### 🎨 UI/UX Design

* Responsive layout (mobile-friendly)
* Modern design with Tailwind CSS
* Clean dashboard interface
* Loading states & empty states
* Smooth navigation

---

## 🔌 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| POST   | /notes     | Create a note     |
| GET    | /notes     | Fetch all notes   |
| GET    | /notes/:id | Fetch single note |
| PUT    | /notes/:id | Update note       |
| DELETE | /notes/:id | Delete note       |

---

## 🧠 Database Schema

### Note Model

* `title` (String)
* `content` (String)
* `userId` (Reference)
* `createdAt` (Timestamp)
* `updatedAt` (Timestamp)

---

## 🐞 Core Task – Bug Fixing

The initial codebase contained multiple issues such as:

* Incorrect variable references
* Logical errors (assignment vs comparison)
* Missing validations
* Improper API responses
* Inconsistent data handling

### ✅ Improvements

* Fixed all logical and syntax errors
* Refactored API structure
* Improved validation logic
* Ensured stable and predictable behavior

---

## 📁 Project Structure

```
Notes-App/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
node server.js
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 📊 Evaluation Criteria Coverage

This project addresses all key evaluation areas:

* ✔ Problem Solving
* ✔ Code Quality
* ✔ API Design
* ✔ Database Integration
* ✔ Validation
* ✔ UI/UX Design
* ✔ Search Functionality
* ✔ Responsiveness
* ✔ Learning & Implementation Effort

---

## 💡 Learning Outcomes

Through this project, I strengthened:

* Debugging and code analysis skills
* REST API development
* Full-stack integration
* State management in React
* UI/UX design principles

---

## 📌 Conclusion

This project showcases the ability to:

* Transform a buggy codebase into a working system
* Design scalable backend APIs
* Build an interactive frontend
* Integrate database operations effectively

---

## 🔗 Submission

* GitHub Repository: *https://github.com/vinayvadlakondagoud/NotesApp*
* Live Demo: *https://notesapp-g47d.onrender.com*

---

# 🚀 Final Note

This project reflects **practical full-stack development skills**, attention to detail, and the ability to deliver a complete, user-focused application within a limited time frame.



👉 I can make **GitHub description (short)**
👉 Or prepare **interview answers based on this project**

Just say 👍
