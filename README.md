# 🚑 **Emergency Contact Directory**

A full-stack web application built to manage emergency contacts and send emails using the **MERN** stack (MongoDB, Express, React, Node.js). This app allows users to store and manage emergency contact details, as well as send an email to any contact directly from the app.

## 📋 **Features**

- **Add, View, Edit, and Delete Contacts** 📞
- **Send Emergency Emails** 📧
- **Responsive Design** 🖥️📱
- **Simple and Clean UI** 🎨

## 🧑‍💻 **Tech Stack**

- **Frontend**: 
  - React (with Vite) ⚛️
  - TailwindCSS 🪶
  - TypeScript 📝
  
- **Backend**:
  - Express.js 🚀
  - MongoDB 🗃️
  - Nodemailer 📧

- **Development Tools**:
  - Vite ⚡
  - Postman 🛠️ (for API testing)
  - dotenv 🌿 (for environment variables)
  
## 📦 **Packages Used**

### Frontend (Client)

- **React** ⚛️
- **TailwindCSS** 🪶
- **Axios** 📦 (for API requests)
- **TypeScript** 📝

### Backend (Server)

- **Express** 🚀
- **Mongoose** 🔗 (for MongoDB interaction)
- **Nodemailer** 📧 (for email functionality)
- **Cors** 🔒 (Cross-origin resource sharing)
- **dotenv** 🌿 (for environment variable management)

## 🛠️ **Installation & Setup**

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/emergency-contact-app.git
cd emergency-contact-app
```

## 2. Setup the Backend (Server)

### 📁 Navigate to the `backend` folder:
```bash
cd backend
```
⚙️ Create a .env file
In the root directory of the server folder, create a .env file and add the following environment variables:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
