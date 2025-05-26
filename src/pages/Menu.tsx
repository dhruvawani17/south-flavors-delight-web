
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
      { name: 'Medu Vada', description: 'Crispy lentil donuts served with sambar and chutneys', price: '₹80', image: 'https://foodiewish.com/wp-content/uploads/2020/05/Medu-Vada-Recipe-1.jpg' },
      { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil curry', price: '₹70', image: 'https://www.awesomecuisine.com/wp-content/uploads/2008/02/idli_sambar.jpg' },
      { name: 'Rasam Vada', description: 'Lentil donuts soaked in tangy tomato rasam', price: '₹90', image: 'https://th.bing.com/th/id/R.55377a4c91335420a8d36b902bdefcd5?rik=W8dGIfxND9dmew&riu=http%3a%2f%2fwww.nithyas-kitchen.com%2fwp-content%2fuploads%2f2016%2f08%2frasam-vada.1024x1024-1.jpg&ehk=lshXj6jyBzhT0hXT%2ffIONSf%2b6n%2b1Sytw3MrgonvEfXs%3d&risl=&pid=ImgRaw&r=0' }
    ],
    dosa: [
      { name: 'Masala Dosa', description: 'Crispy crepe with spiced potato filling', price: '₹120', image: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg' },
      { name: 'Mysore Masala Dosa', description: 'Spicy red chutney dosa with potato curry', price: '₹140', image: 'https://vismaifood.com/storage/app/uploads/public/45a/29b/a17/thumb__700_0_0_0_auto.jpg' },
      { name: 'Rava Dosa', description: 'Crispy semolina crepe with onions and herbs', price: '₹110', image: 'https://vegecravings.com/wp-content/uploads/2023/07/Rava-Dosa-Recipe-Step-By-Step-Instructions-scaled.jpg' }
    ],
    rice: [
      { name: 'Hyderabadi Biryani', description: 'Aromatic basmati rice with tender meat', price: '₹280', image: 'https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg' },
      { name: 'Curd Rice', description: 'Cooling yogurt rice with curry leaves', price: '₹100', image: 'https://th.bing.com/th/id/OIP.cJzQ-h7MG0O2-osrDcUuLgHaEn?cb=iwc2&rs=1&pid=ImgDetMain' },
      { name: 'Lemon Rice', description: 'Tangy rice with peanuts and spices', price: '₹90', image: 'https://vegecravings.com/wp-content/uploads/2018/02/Lemon-Rice-Recipe-Step-by-Step-Instructions.jpg' }
    ],
    curries: [
      { name: 'Sambar', description: 'Traditional lentil curry with vegetables', price: '₹80', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg' },
      { name: 'Paneer Butter Masala', description: 'Creamy tomato curry with cottage cheese', price: '₹180', image: 'https://myfoodstory.com/wp-content/uploads/2021/10/Paneer-Butter-Masala-1-2.jpg' },
      { name: 'Fish Curry', description: 'Kerala style coconut fish curry', price: '₹220', image: 'https://th.bing.com/th/id/OIP.DlrYNJg4bt3cn4Xr5R5gsQHaE7?cb=iwc2&rs=1&pid=ImgDetMain' }
    ],
    beverages: [
      { name: 'Filter Coffee', description: 'Traditional South Indian filter coffee', price: '₹40', image: 'https://static.vecteezy.com/system/resources/previews/013/754/794/large_2x/south-indian-filter-coffee-served-in-a-traditional-brass-or-stainless-steel-cup-free-photo.jpg' },
      { name: 'Masala Chai', description: 'Spiced tea with milk and aromatic spices', price: '₹35', image: 'https://carameltintedlife.com/wp-content/uploads/2021/01/Masala-Chai-.jpg' },
      { name: 'Tender Coconut', description: 'Fresh coconut water straight from the shell', price: '₹60', image: 'https://www.nutritionfact.in/wp-content/uploads/2023/07/Tender-Coconut-1536x864.jpg' }
    ],
    desserts: [
      { name: 'Gulab Jamun', description: 'Sweet milk dumplings in rose syrup', price: '₹80', image: 'https://images.slurrp.com/prod/articles/1m5e86yy5vl.webp' },
      { name: 'Payasam', description: 'Traditional rice pudding with cardamom', price: '₹70', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/08/semiya-payasam.jpg' },
      { name: 'Kesari', description: 'Semolina sweet with ghee and saffron', price: '₹60', image: 'https://www.tastingtable.com/img/gallery/kesari-is-the-indian-dessert-that-shines-bright-from-saffron-upgrade/l-intro-1701376057.jpg' }
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
