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
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd client
   npm install
   ```

3. Configure environment variables for the backend:
   Create a `.env` file in the `backend` folder and add:
   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

5. Start the frontend:
   ```bash
   cd client
   npm start
   ```

6. Open the app in your browser at `http://localhost:5173`.

---

## API Endpoints

| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| GET    | `/api/task/`           | Fetch all tasks      |
| POST   | `/api/task/`           | Add a new task       |
| PUT    | `/api/task/update/:id` | Update a task        |
| DELETE | `/api/task/delete/:id` | Delete a task        |

---


## Screenshots

![Screenshot (174)](https://github.com/user-attachments/assets/9a6045c2-2c4d-4b41-8718-edd61362eb48)

![Screenshot (175)](https://github.com/user-attachments/assets/720f8645-6760-4a92-a4ab-9f7ca0da5627)

![Screenshot (176)](https://github.com/user-attachments/assets/f7c3f96c-8166-4207-a305-22032f84a887)


---


