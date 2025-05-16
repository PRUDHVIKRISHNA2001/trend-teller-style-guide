
import { Link } from "react-router-dom";
import { Shirt, Sparkles, Image as ImageIcon, Palette } from "lucide-react";
import OutfitCard from "@/components/OutfitCard";
import ClothingItemCard from "@/components/ClothingItemCard";

const featureCards = [
  {
    icon: ImageIcon,
    title: "Digital Wardrobe",
    description: "Easily catalog your clothes, shoes, and accessories. Never forget what you own!",
    link: "/wardrobe",
    bgColor: "bg-rose-500",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Get smart outfit recommendations based on weather, occasion, and your personal style.",
    link: "/recommendations",
    bgColor: "bg-amber-500",
  },
  {
    icon: Palette,
    title: "Discover Your Style",
    description: "Explore new trends and get fashion advice tailored to your preferences.",
    link: "/recommendations",
    bgColor: "bg-teal-500",
  },
];

// Sample items for preview
const previewOutfit = { 
  id: "prev1", 
  name: "City Explorer", 
  description: "A versatile outfit for urban adventures and casual meetups.",
  items: [
    { name: "Denim Jacket", imageUrl: "https://images.unsplash.com/photo-1543072254-2934f8351183?w=100&h=100&fit=crop" },
    { name: "Striped Tee", imageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=100&h=100&fit=crop" },
    { name: "Chinos", imageUrl: "https://images.unsplash.com/photo-1600502000037-95920a9744d1?w=100&h=100&fit=crop" },
  ],
  occasion: "Casual Outing",
  weatherIcon: "cloud" as "sun" | "cloud" | undefined,
};

const previewClothingItem = { 
  id: "prev_item_1", 
  name: "Flowy Maxi Dress", 
  category: "Dresses", 
  color: "floral", // Use a descriptive name if not a single color
  imageUrl: "https://images.unsplash.com/photo-1595296549014-9d276df1973d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3JhJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
};


const Index = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-purple to-brand-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to TrendTeller</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your personal AI stylist. Manage your wardrobe, discover new trends, and get outfit recommendations tailored just for you.
          </p>
          <div className="space-x-4">
            <Link
              to="/wardrobe"
              className="bg-white text-brand-purple font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-100 transition-colors duration-300 text-lg"
            >
              My Wardrobe <Shirt size={20} className="inline ml-1" />
            </Link>
            <Link
              to="/recommendations"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-brand-blue transition-colors duration-300 text-lg"
            >
              Get Styled <Sparkles size={20} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">How TrendTeller Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <div key={index} className={`p-8 rounded-xl shadow-lg text-white text-center transform transition-all hover:scale-105 duration-300 ${feature.bgColor}`}>
                <feature.icon size={48} className="mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="mb-6 text-gray-100">{feature.description}</p>
                <Link to={feature.link} className="font-semibold hover:underline">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">See It In Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center md:text-left">Today's Top Outfit Pick</h3>
              <OutfitCard {...previewOutfit} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center md:text-left">Featured Wardrobe Item</h3>
              <ClothingItemCard {...previewClothingItem} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
