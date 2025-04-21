import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Mock product data - in a real app would be fetched from API
  const product = {
    id: parseInt(id || '1'),
    name: 'Chapeau Panama Premium',
    price: 49.99,
    description: 'Un chapeau Panama authentique, fabriqué à la main avec des matériaux de haute qualité. Parfait pour les journées ensoleillées et les tenues décontractées chic.',
    longDescription: `
      Le chapeau Panama est un accessoire indispensable pour l'été, combinant élégance et protection contre le soleil. Notre modèle Premium est tissé à la main par des artisans expérimentés, utilisant des fibres de toquilla de premier choix.
      
      Caractéristiques :
      - Matière : 100% fibres de toquilla
      - Tressage fin et régulier
      - Bandeau intérieur en cuir véritable
      - Ruban contrasté autour de la couronne
      - Bords larges pour une protection optimale contre le soleil
      
      L'histoire du chapeau Panama remonte au XIXe siècle en Équateur. Malgré son nom, ces chapeaux sont traditionnellement fabriqués en Équateur, mais ont gagné en popularité lors de la construction du canal de Panama.
      
      Entretien : Nettoyez délicatement avec un chiffon humide. Évitez l'exposition prolongée à l'eau. Rangez votre chapeau à plat ou sur un support adapté pour conserver sa forme.
    `,
    images: [
      'https://placehold.co/600x600/png?text=Panama+1',
      'https://placehold.co/600x600/png?text=Panama+2',
      'https://placehold.co/600x600/png?text=Panama+3',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Naturel', 'Noir', 'Marron'],
    inStock: true,
  };

  const [selectedSize, setSelectedSize] = useState(product.sizes[1]); // Default to M
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [currentImage, setCurrentImage] = useState(0);

  const handleAddToCart = () => {
    // In a real app, this would call a cart context/reducer function
    alert(`Ajouté au panier : ${quantity} ${product.name} (${selectedSize}, ${selectedColor})`);
  };

  const handleQuantityChange = (value: number) => {
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={product.images[currentImage]} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-24 h-24 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-transparent'}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-bold mb-6">{product.price.toFixed(2)} €</p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Taille</h3>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-full border ${selectedSize === size ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Couleur</h3>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={`px-4 py-2 rounded border ${selectedColor === color ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Quantité</h3>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 rounded-l border border-gray-300 flex items-center justify-center"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                {quantity}
              </div>
              <button 
                className="w-10 h-10 rounded-r border border-gray-300 flex items-center justify-center"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 px-6 rounded-lg font-bold text-white ${product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} transition duration-300`}
          >
            {product.inStock ? 'Ajouter au panier' : 'Produit indisponible'}
          </button>
          
          {/* Availability */}
          <p className={`mt-4 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'En stock - Livraison sous 2-3 jours' : 'Actuellement indisponible'}
          </p>
        </div>
      </div>
      
      {/* Product Details/Long Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Détails du produit</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {product.longDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 