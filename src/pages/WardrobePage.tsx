
import ClothingItemCard from "@/components/ClothingItemCard";
import { PlusCircle } from "lucide-react";

const mockWardrobeItems = [
  { id: "1", name: "Classic White Tee", category: "Tops", color: "white", imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a5eb020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: "2", name: "Dark Wash Jeans", category: "Bottoms", color: "blue", imageUrl: "https://images.unsplash.com/photo-1604176354204-926873782855?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  { id: "3", name: "Beige Trench Coat", category: "Outerwear", color: "beige", imageUrl: "https://images.unsplash.com/photo-1572200468906-35170156a9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlbmNoJTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  { id: "4", name: "Leather Ankle Boots", category: "Shoes", color: "black", imageUrl: "https://images.unsplash.com/photo-1603108540489-443930552943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5rbGUlMjBib290c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
];

const WardrobePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">My Wardrobe</h1>
        <button className="bg-brand-purple text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 flex items-center space-x-2">
          <PlusCircle size={20} />
          <span>Add New Item</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockWardrobeItems.map(item => (
          <ClothingItemCard 
            key={item.id}
            name={item.name}
            category={item.category}
            color={item.color}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {mockWardrobeItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">Your wardrobe is empty.</p>
          <p className="text-gray-400 mt-2">Start by adding your first clothing item!</p>
        </div>
      )}
    </div>
  );
};

export default WardrobePage;
