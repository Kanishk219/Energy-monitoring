# Smart Home Energy Monitoring

## 📌 Project Overview
This project is a **Smart Home Energy Monitoring System** that tracks and displays energy consumption of various devices in real-time. It is built using the **MERN Stack (MongoDB, Express, React, Node.js)** and deployed on **AWS**.

---

## 📁 Project Structure
```
smart-home-energy/
│-- client/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── EnergyUsage.js  # UI for displaying energy data
│   │   ├── App.js  # Main frontend component
│   │   ├── index.js  # React entry point
│   ├── package.json  # React dependencies
│-- server/            # Node.js Backend
│   ├── models/
│   │   ├── EnergyUsage.js  # Mongoose schema for energy data
│   ├── routes/
│   │   ├── energyRoutes.js  # API endpoints
│   ├── server.js  # Main server file
│   ├── package.json  # Backend dependencies
│-- README.md          # Project documentation
```

---

## 🚀 Features
✅ **Energy Usage Tracking** - Monitor energy consumption of smart devices.  
✅ **REST API** - Fetch and update energy data.  
✅ **MongoDB Atlas Integration** - Cloud database for storing energy usage data.  
✅ **React UI** - Frontend to display energy usage with a clean UI.  
✅ **Deployment on AWS** - Hosted on AWS (EC2 + MongoDB Atlas).  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** AWS (EC2, S3), Docker

---

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/smart-home-energy.git
cd smart-home-energy
```

### 2️⃣ Setup Backend
```sh
cd server
npm install  # Install dependencies
```
Create a **.env** file in the `server/` folder and add:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/energy
PORT=5000
```
Start the backend server:
```sh
npm start
```

### 3️⃣ Setup Frontend
```sh
cd client
npm install  # Install dependencies
npm start  # Run React frontend
```

---

## 🔗 API Endpoints
| Method | Endpoint        | Description                  |
|--------|----------------|------------------------------|
| GET    | /api/energy    | Fetch all energy usage data |
| POST   | /api/energy    | Add new energy data         |

---

## 📡 Deployment on AWS
1. **Backend**: Deploy Node.js API on AWS EC2.
2. **Frontend**: Deploy React app using AWS S3 & CloudFront.
3. **Database**: Use MongoDB Atlas for cloud storage.

---

## 👨‍💻 Contributors
- **Kanishk** *(Developer & Project Owner)*  

---

## 📝 License
This project is **MIT Licensed**.

