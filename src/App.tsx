import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PaymentPage from './pages/PaymentPage'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boutique" element={<ShopPage />} />
          <Route path="/produit/:id" element={<ProductPage />} />
          <Route path="/panier" element={<CartPage />} />
          <Route path="/paiement" element={<PaymentPage />} />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/inscription" element={<RegisterPage />} />
          <Route path="/compte" element={<div className="text-2xl font-bold text-center p-8">Mon compte</div>} />
          <Route path="*" element={<div className="text-2xl font-bold text-center p-8">Page 404 - Page non trouvée</div>} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
