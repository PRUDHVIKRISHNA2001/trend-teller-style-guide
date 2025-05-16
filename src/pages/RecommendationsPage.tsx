
import OutfitCard from "@/components/OutfitCard";
import { SlidersHorizontal } from "lucide-react";

const mockOutfits = [
  { 
    id: "1", 
    name: "Sunny Day Casual", 
    description: "Perfect for a relaxed weekend outing or a coffee run.",
    items: [
      { name: "White Tee", imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a5eb020?w=100&h=100&fit=crop" },
      { name: "Light Jeans", imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100&h=100&fit=crop" },
      { name: "Sneakers", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop" },
    ],
    occasion: "Weekend Casual",
    weatherIcon: "sun" as "sun" | "cloud" | undefined,
  },
  { 
    id: "2", 
    name: "Smart Office Look", 
    description: "A chic and professional ensemble for your workday.",
    items: [
      { name: "Silk Blouse", imageUrl: "https://images.unsplash.com/photo-1589358793282-58f75086a381?w=100&h=100&fit=crop" },
      { name: "Tailored Trousers", imageUrl: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=100&h=100&fit=crop" },
      { name: "Heeled Loafers", imageUrl: "https://images.unsplash.com/photo-1580894894513-531996141c4e?w=100&h=100&fit=crop" },
    ],
    occasion: "Work / Office",
    weatherIcon: "cloud" as "sun" | "cloud" | undefined,
  },
  { 
    id: "3", 
    name: "Evening Elegance", 
    description: "Turn heads at your next dinner party or special event.",
    items: [
      { name: "Little Black Dress", imageUrl: "https://images.unsplash.com/photo-1590484796242-1159f1800359?w=100&h=100&fit=crop" },
      { name: "Statement Heels", imageUrl: "https://images.unsplash.com/photo-1590099033615-51979733442c?w=100&h=100&fit=crop" },
      { name: "Clutch Bag", imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=100&h=100&fit=crop" },
    ],
    occasion: "Evening Event",
  },
];

const RecommendationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Outfit Recommendations</h1>
        <button className="bg-brand-blue text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
          <SlidersHorizontal size={20} />
          <span>Filter Styles</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockOutfits.map(outfit => (
          <OutfitCard 
            key={outfit.id}
            name={outfit.name}
            description={outfit.description}
            items={outfit.items}
            occasion={outfit.occasion}
            weatherIcon={outfit.weatherIcon}
          />
        ))}
      </div>
      {mockOutfits.length === 0 && (
         <div className="text-center py-12">
          <p className="text-xl text-gray-500">No recommendations for you yet.</p>
          <p className="text-gray-400 mt-2">Tell us more about your style or add items to your wardrobe!</p>
        </div>
      )}
    </div>
  );
};

export default RecommendationsPage;
