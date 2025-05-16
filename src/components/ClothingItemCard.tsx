
import { Tag } from "lucide-react";

interface ClothingItemCardProps {
  name: string;
  category: string;
  color: string;
  imageUrl: string;
}

const ClothingItemCard: React.FC<ClothingItemCardProps> = ({ name, category, color, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 animate-fade-in-up">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2 flex items-center">
          <Tag size={16} className="mr-1 text-brand-purple" /> {category}
        </p>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Color:</span>
          <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }}></div>
          <span className="ml-2 text-sm text-gray-700">{color.charAt(0).toUpperCase() + color.slice(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ClothingItemCard;
