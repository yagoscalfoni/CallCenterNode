# 📞 Call Center App (Node.js)

A backend Node.js application designed to manage and organize a simple call center system. This project uses a clean architecture approach with separation of concerns and a robust database layer powered by Prisma ORM.

---

## 🚀 Features

- 📇 Client registration and management
- 👨‍💼 Operator registration and handling
- 📞 Call creation, listing, and status management
- 🧠 Separation of concerns using Controllers, Services, Repositories
- 🔐 Middleware structure for scalable logic
- 🧰 Fully typed and structured using environment configs and Prisma
- 🗃️ SQL schema ready (`call_center_db.session.sql`)

---

## 🧱 Tech Stack

| Layer        | Stack / Tools                        |
|--------------|--------------------------------------|
| Runtime      | Node.js                              |
| Language     | JavaScript                           |
| Framework    | Express.js                           |
| ORM          | Prisma                               |
| Database     | (Configure your own - SQL supported) |
| Environment  | dotenv                               |
| Architecture | MVC (Controllers, Services, Repos)   |

---

## 📂 Project Structure

src/ 
├── controllers/ 
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── app.js
└── server.js

