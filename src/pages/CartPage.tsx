import { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // Mock data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chapeau Panama Premium',
      price: 49.99,
      image: 'https://placehold.co/100x100/png?text=Panama',
      quantity: 1,
      size: 'M',
      color: 'Naturel'
    },
    {
      id: 3,
      name: 'Casquette Baseball',
      price: 19.99,
      image: 'https://placehold.co/100x100/png?text=Casquette',
      quantity: 2,
      size: 'L',
      color: 'Noir'
    }
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">Vous n'avez pas encore ajouté d'articles à votre panier.</p>
          <Link 
            to="/boutique" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-4 text-left">Produit</th>
                    <th className="py-4 px-4 text-center">Quantité</th>
                    <th className="py-4 px-4 text-right">Prix</th>
                    <th className="py-4 px-4 text-right">Total</th>
                    <th className="py-4 px-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded mr-4" />
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-600">Taille: {item.size}, Couleur: {item.color}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center">
                          <button 
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="w-10 text-center">{item.quantity}</span>
                          <button 
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">{item.price.toFixed(2)} €</td>
                      <td className="py-4 px-4 text-right font-semibold">{(item.price * item.quantity).toFixed(2)} €</td>
                      <td className="py-4 px-4 text-right">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Récapitulatif de la commande</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b pb-4">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span>Frais de livraison</span>
                  <span>{shipping.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>
              
              <Link 
                to="/paiement" 
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-lg transition duration-300"
              >
                Procéder au paiement
              </Link>
              
              <Link 
                to="/boutique" 
                className="block w-full py-3 px-4 mt-4 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center font-bold rounded-lg transition duration-300"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 