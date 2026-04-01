Finance Data Processing and Access Control Backend
A robust Node.js backend built for financial record management, featuring Role-Based Access Control (RBAC) and data persistence.

🚀 Features
RBAC Authentication: Middleware-driven security using an x-role header to distinguish between admin and user permissions.

Financial Records CRUD: Full ability to create, read, and manage financial data.

Dashboard Analytics: Admin-only endpoint providing summarized totals of financial records grouped by type.

Portable Database: Uses SQLite with Sequelize ORM for a zero-setup review experience.

🛠️ Tech Stack
Runtime: Node.js

Framework: Express.js

ORM: Sequelize

Database: SQLite

⚙️ Setup Instructions
Clone the repository:

Bash
git clone https://github.com/Laxmi-sahani52/zorvyn-finance-backend.git
Install dependencies:

Bash
npm install
Start the server:

Bash
node server.js
The server will run on http://localhost:3000.

🧪 API Usage & Testing
Since this is a screening task, authentication is simulated via headers:

Header Key: x-role

Values: admin (to create/view dashboard) or user (read-only).
