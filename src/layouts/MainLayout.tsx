import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">HatStore</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
              <li><Link to="/boutique" className="hover:text-gray-300">Boutique</Link></li>
              <li><Link to="/panier" className="hover:text-gray-300">Panier</Link></li>
              <li><Link to="/connexion" className="hover:text-gray-300">Connexion</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HatStore</h3>
              <p>Votre boutique en ligne spécialisée dans les chapeaux de qualité pour tous les styles.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
                <li><Link to="/boutique" className="hover:text-gray-300">Boutique</Link></li>
                <li><Link to="/panier" className="hover:text-gray-300">Panier</Link></li>
                <li><Link to="/connexion" className="hover:text-gray-300">Connexion</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: contact@hatstore.com</p>
              <p>Téléphone: 01 23 45 67 89</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} HatStore. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 