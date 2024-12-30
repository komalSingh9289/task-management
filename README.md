# Task Management App

A modern, responsive **Task Management App** designed to streamline your productivity. Built using **React**, **Tailwind CSS**, and **Node.js**, it provides essential features like adding, updating, deleting, and searching tasks while offering a light/dark theme toggle for enhanced usability.

---

## Features

- **Add Tasks**: Quickly create new tasks with a title.
- **Search Tasks**: Find tasks efficiently using the search bar.
- **Update Tasks**: Edit task titles directly.
- **Mark as Complete**: Easily toggle tasks between complete and incomplete.
- **Delete Tasks**: Remove unnecessary tasks with a single click.
- **Responsive Design**: Optimized for desktop and mobile screens.
- **Toast Notifications**: Real-time feedback on actions (add, update, delete) using `react-toastify`.

---

## Technologies Used

### Frontend
- **React**: For building interactive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for modern styling.
- **Axios**: To handle API requests seamlessly.
- **React Icons**: For intuitive and clean action buttons.
- **React Toastify**: Provides elegant toast notifications.

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Framework to define API routes.
- **MongoDB**: NoSQL database for efficient data storage.
- **Mongoose**: ODM for structured MongoDB interaction.

---

## Getting Started

### Prerequisites

- **Node.js** (>=16.x) and **npm** installed.
- **MongoDB** running locally or on a cloud service (e.g., MongoDB Atlas).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
  # Install backend dependencies
  cd backend
  npm install
  
  # Install frontend dependencies
  cd ../frontend
  npm install

  #Configure environment variables for the backend: Create a .env file in the backend folder and add:
  MONGO_URI=your-mongodb-connection-string
  PORT=5000
  
  #start the server
  cd backend
  npm start

  #start the client 
  cd ../frontend
  npm start
