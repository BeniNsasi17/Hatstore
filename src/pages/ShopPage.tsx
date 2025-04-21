import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  // Mock data for products
  const allProducts = [
    { id: 1, name: 'Chapeau de Paille', price: 29.99, category: 'été', image: 'https://placehold.co/300x300/png?text=Chapeau+Paille' },
    { id: 2, name: 'Chapeau Panama', price: 49.99, category: 'été', image: 'https://placehold.co/300x300/png?text=Panama' },
    { id: 3, name: 'Casquette Baseball', price: 19.99, category: 'casquette', image: 'https://placehold.co/300x300/png?text=Casquette' },
    { id: 4, name: 'Béret Français', price: 24.99, category: 'classique', image: 'https://placehold.co/300x300/png?text=Béret' },
    { id: 5, name: 'Chapeau Fedora', price: 39.99, category: 'classique', image: 'https://placehold.co/300x300/png?text=Fedora' },
    { id: 6, name: 'Bonnet Hiver', price: 15.99, category: 'hiver', image: 'https://placehold.co/300x300/png?text=Bonnet' },
    { id: 7, name: 'Chapeau Cowboy', price: 59.99, category: 'western', image: 'https://placehold.co/300x300/png?text=Cowboy' },
    { id: 8, name: 'Chapeau Haut-de-forme', price: 79.99, category: 'soirée', image: 'https://placehold.co/300x300/png?text=Haut-de-forme' },
  ];

  // State for filters
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState('default');

  // Get all unique categories
  const categories = [...new Set(allProducts.map(product => product.category))];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => categoryFilter === '' || product.category === categoryFilter)
    .filter(product => product.price >= priceRange.min && product.price <= priceRange.max)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // Default
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catalogue des chapeaux</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Filtres</h2>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Catégories</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="all-categories"
                  name="category"
                  checked={categoryFilter === ''}
                  onChange={() => setCategoryFilter('')}
                  className="mr-2"
                />
                <label htmlFor="all-categories">Toutes les catégories</label>
              </div>
              
              {categories.map(category => (
                <div key={category} className="flex items-center">
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    checked={categoryFilter === category}
                    onChange={() => setCategoryFilter(category)}
                    className="mr-2"
                  />
                  <label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Prix</h3>
            <div className="flex items-center justify-between mb-2">
              <span>{priceRange.min}€</span>
              <span>{priceRange.max}€</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
          
          {/* Sort By */}
          <div>
            <h3 className="font-semibold mb-2">Trier par</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="default">Pertinence</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucun produit ne correspond à vos critères.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Link to={`/produit/${product.id}`} key={product.id} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-blue-600 font-bold">{product.price.toFixed(2)} €</p>
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mt-2">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 