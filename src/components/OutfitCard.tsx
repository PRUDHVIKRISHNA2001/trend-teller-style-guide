
import { Sun, Cloud, Shirt } from "lucide-react"; // Example icons

interface OutfitCardProps {
  name: string;
  description: string;
  items: { name: string; imageUrl: string }[];
  occasion: string;
  weatherIcon?: "sun" | "cloud"; // Example
}

const OutfitCard: React.FC<OutfitCardProps> = ({ name, description, items, occasion, weatherIcon }) => {
  return (
    <div className="bg-gradient-to-br from-brand-purple via-purple-500 to-brand-blue text-white rounded-xl shadow-xl overflow-hidden p-6 transform transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 animate-fade-in-up">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        {weatherIcon === "sun" && <Sun size={28} className="text-yellow-300" />}
        {weatherIcon === "cloud" && <Cloud size={28} className="text-gray-300" />}
      </div>
      <p className="text-purple-100 mb-4 text-sm">{description}</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
        {items.slice(0,3).map((item, index) => (
          <div key={index} className="rounded overflow-hidden shadow-md bg-white/20 backdrop-blur-sm">
            <img src={item.imageUrl} alt={item.name} className="w-full h-24 object-cover" />
            <p className="text-xs text-center p-1 text-purple-50">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/30">
        <p className="text-sm text-purple-200"><span className="font-semibold">Occasion:</span> {occasion}</p>
      </div>
       <button className="mt-4 w-full bg-white text-brand-purple font-semibold py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors duration-200 flex items-center justify-center space-x-2">
        <Shirt size={18}/>
        <span>View Details</span>
      </button>
    </div>
  );
};

export default OutfitCard;
