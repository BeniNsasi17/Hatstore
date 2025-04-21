import { Link } from 'react-router-dom';

const HomePage = () => {
  // Mock data for featured products
  const featuredProducts = [
    { id: 1, name: 'Chapeau de Paille', price: 29.99, image: 'https://placehold.co/300x300/png?text=Chapeau+Paille' },
    { id: 2, name: 'Chapeau Panama', price: 49.99, image: 'https://placehold.co/300x300/png?text=Panama' },
    { id: 3, name: 'Casquette Baseball', price: 19.99, image: 'https://placehold.co/300x300/png?text=Casquette' },
    { id: 4, name: 'Béret Français', price: 24.99, image: 'https://placehold.co/300x300/png?text=Béret' },
  ];

  // Mock data for categories
  const categories = [
    { id: 1, name: 'Chapeaux d\'été', image: 'https://placehold.co/600x400/png?text=Été' },
    { id: 2, name: 'Chapeaux d\'hiver', image: 'https://placehold.co/600x400/png?text=Hiver' },
    { id: 3, name: 'Casquettes', image: 'https://placehold.co/600x400/png?text=Casquettes' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienvenue chez HatStore</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de chapeaux pour toutes les occasions. 
            Qualité, style et confort garantis.
          </p>
          <Link 
            to="/boutique" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Découvrir la collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos produits populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map(category => (
              <Link to="/boutique" key={category.id} className="group">
                <div className="relative rounded-lg overflow-hidden shadow-md h-80">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Restez informé</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Inscrivez-vous à notre newsletter pour être informé de nos nouveautés et promotions exclusives.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow py-3 px-4 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-gray-800 hover:bg-gray-900 py-3 px-6 rounded-r-lg font-semibold transition duration-300">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 