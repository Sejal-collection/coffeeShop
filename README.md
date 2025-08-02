# ☕ Coffee Shop - Open Source E-commerce Platform

A modern, full-stack coffee shop e-commerce application built with React.js and Node.js.

![Coffee Shop Banner](./public/3817208_coffee_cup_drink_icon.png)

## 🚀 Features

- **User Authentication**: Email/Password and Google OAuth login
- **Product Catalog**: Browse coffee, cakes, milkshakes, and soups  
- **Shopping Cart**: Add/remove items with real-time updates
- **Order Management**: Place and track orders
- **Product Reviews**: Rate and review products
- **Admin Panel**: Manage products, orders, and users
- **Responsive Design**: Mobile-friendly interface
- **Customer Support**: Interactive chatbot

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Framework
- **Redux Toolkit** - State Management  
- **Tailwind CSS** - Styling
- **React Router** - Navigation

### Backend
- **Node.js & Express.js** - Server
- **MongoDB** - Database
- **JWT & Passport.js** - Authentication
- **PM2** - Process Management

## 📦 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Mujtabaa07/coffeeShop.git
cd coffeeShop
```

2. **Setup Backend**
```bash
cd backend
npm install

# Create your local environment file
cp .env.example .env
# OR copy from the local example
cp .env.local.example .env

# Edit .env with your actual values (MongoDB URI, JWT secret, Google OAuth, etc.)
nano .env

# Start the backend server
npm start
```

3. **Setup Frontend**
```bash
# In project root directory
npm install

# Create your local environment file
cp .env.example .env.local
# OR copy from the local example  
cp .env.local.example .env.local

# Edit .env.local with your API URL and Google Client ID
nano .env.local

# Start the frontend
npm start
```

4. **Open your browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3000/api

## ⚙️ Environment Configuration

### Backend (.env)
Create a `.env` file in the `backend/` directory:
```env
MONGODB_URI=mongodb://localhost:27017/mscafe_coffeeshop
JWT_SECRET=your-jwt-secret-key
GOOGLE_CLIENT_ID=your-google-client-id  
GOOGLE_CLIENT_SECRET=your-google-client-secret
PORT=3000
NODE_ENV=development
```

### Frontend (.env.local)
Create a `.env.local` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

**Note**: Your local `.env` files are ignored by Git for security. Use the provided `.env.example` files as templates.

## 🌐 Live Demo

- **Frontend**: [https://coffee-shop-teal.vercel.app](https://coffee-shop-teal.vercel.app)
- **API**: Contact for backend access

## 📱 Screenshots

*Coming soon - Add your screenshots here*

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`) 
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mujtabaa07** - [GitHub](https://github.com/Mujtabaa07)

## ⭐ Support

If you find this project helpful, please give it a star! ⭐

---

Made with ❤️ and lots of ☕
