import { Link } from "react-router-dom";
import { Shirt, Sparkles, Home } from "lucide-react"; // Using Shirt for Wardrobe, Sparkles for AI/Recommendations

const Navbar = () => {
  return <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-purple hover:text-brand-blue transition-colors">AI powered Stylish App</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors flex items-center space-x-1">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/wardrobe" className="text-gray-700 hover:text-brand-purple transition-colors flex items-center space-x-1">
            <Shirt size={20} />
            <span>Wardrobe</span>
          </Link>
          <Link to="/recommendations" className="text-gray-700 hover:text-brand-purple transition-colors flex items-center space-x-1">
            <Sparkles size={20} />
            <span>Recommendations</span>
          </Link>
        </div>
      </div>
    </nav>;
};
export default Navbar;