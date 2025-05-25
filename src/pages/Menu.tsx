
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'dosa', name: 'Dosa & Uttapam', icon: '🫓' },
    { id: 'rice', name: 'Rice Dishes', icon: '🍚' },
    { id: 'curries', name: 'Curries', icon: '🍛' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🍮' }
  ];

  const menuItems = {
    appetizers: [
      { name: 'Medu Vada', description: 'Crispy lentil donuts served with sambar and chutneys', price: '₹80', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop' },
      { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil curry', price: '₹70', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=200&fit=crop' },
      { name: 'Rasam Vada', description: 'Lentil donuts soaked in tangy tomato rasam', price: '₹90', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' }
    ],
    dosa: [
      { name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: '₹120', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop' },
      { name: 'Mysore Masala Dosa', description: 'Spicy red chutney dosa with potato curry', price: '₹140', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop' },
      { name: 'Rava Dosa', description: 'Crispy semolina crepe with onions and herbs', price: '₹110', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' }
    ],
    rice: [
      { name: 'Hyderabadi Biryani', description: 'Aromatic basmati rice with tender meat', price: '₹280', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
      { name: 'Curd Rice', description: 'Cooling yogurt rice with curry leaves', price: '₹100', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' },
      { name: 'Lemon Rice', description: 'Tangy rice with peanuts and spices', price: '₹90', image: 'https://images.unsplash.com/photo-1631166528181-47bdd9a7bf48?w=300&h=200&fit=crop' }
    ],
    curries: [
      { name: 'Sambar', description: 'Traditional lentil curry with vegetables', price: '₹80', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' },
      { name: 'Paneer Butter Masala', description: 'Creamy tomato curry with cottage cheese', price: '₹180', image: 'https://images.unsplash.com/photo-1631166528181-47bdd9a7bf48?w=300&h=200&fit=crop' },
      { name: 'Fish Curry', description: 'Kerala style coconut fish curry', price: '₹220', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' }
    ],
    beverages: [
      { name: 'Filter Coffee', description: 'Traditional South Indian filter coffee', price: '₹40', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop' },
      { name: 'Masala Chai', description: 'Spiced tea with milk and aromatic spices', price: '₹35', image: 'https://images.unsplash.com/photo-1576175709423-41ad39b6ad28?w=300&h=200&fit=crop' },
      { name: 'Tender Coconut', description: 'Fresh coconut water straight from the shell', price: '₹60', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=200&fit=crop' }
    ],
    desserts: [
      { name: 'Gulab Jamun', description: 'Sweet milk dumplings in rose syrup', price: '₹80', image: 'https://images.unsplash.com/photo-1627308595127-d9acf19107ce?w=300&h=200&fit=crop' },
      { name: 'Payasam', description: 'Traditional rice pudding with cardamom', price: '₹70', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop' },
      { name: 'Kesari', description: 'Semolina sweet with ghee and saffron', price: '₹60', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold mb-4 animate-fade-in gradient-text">
            Our Menu
          </h1>
          <p className="text-gray-600 text-lg animate-fade-in">
            Authentic South Indian delicacies prepared with traditional recipes
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 sticky top-16 bg-white/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-spice-gradient text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-spice-gradient text-white px-3 py-1 rounded-full font-semibold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
