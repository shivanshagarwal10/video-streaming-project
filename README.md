# 🎥 Video Streaming Platform

A full-stack video streaming application with a **Spring Boot backend** and **React frontend**, designed to deliver high-quality video playback using **HLS (HTTP Live Streaming)**. Built to showcase skills in scalable backend development, responsive frontend design, and real-time media delivery.

---

## 🛠️ Tech Stack

### 🔹 Backend – `spring-stream-backend`
- Java 21, Spring Boot 3
- Spring Web, Spring Data JPA
- MySQL
- Lombok
- RESTful APIs for video handling
- Maven for dependency management

### 🔹 Frontend – `spring-stream-frontend`
- React 18 + Vite
- TailwindCSS + Flowbite React
- HLS.js and Video.js for streaming playback
- Axios for API communication
- Toast notifications via React Hot Toast

---

## 📁 Project Structure

video-streaming-project/
├── spring-stream-backend/ # Java backend with Spring Boot
│ ├── src/ # Source code (controllers, services, models)
│ ├── pom.xml # Maven dependencies
│ └── application.properties # DB and app configs
└── spring-stream-frontend/ # React frontend
├── src/ # Pages, components
├── public/ # Static assets
├── tailwind.config.js # Tailwind config
└── package.json # Frontend dependencies


---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js >= 18
- Java 21
- MySQL (running locally or on Docker)
- Maven

---

### 🔧 Backend Setup

cd spring-stream-backend

# Configure your DB connection in application.properties
# Example:
# spring.datasource.url=jdbc:mysql://localhost:3306/stream_db
# spring.datasource.username=root
# spring.datasource.password=yourpassword

# Run the project
mvn spring-boot:run

🌐 Frontend Setupcd 

spring-stream-frontend

# Install dependencies
npm install

# Start the development server
npm run dev

The frontend runs on http://localhost:5173 by default.

📺 Features
🔄 Stream video using HLS.js with fallback

🧠 Dynamic video metadata fetching

🌙 Responsive, dark-mode-friendly UI

🔐 Scalable architecture for future features like auth, comments, etc.

📡 Clean REST API integration between frontend and backend

💡 Possible Extensions
User authentication (JWT)

Upload & manage videos (S3, cloud storage)

Comments, likes, playlists

Video transcoding (FFmpeg)

WebSocket-based live streaming

👨‍💻 Author
Shivansh Agarwal

Java Developer | Full-Stack Enthusiast

• LinkedIn -> https://www.linkedin.com/in/shivansh-agarwal-887657234/ • GitHub -> https://github.com/shivanshagarwal10
