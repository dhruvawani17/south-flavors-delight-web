
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredDishes = [
    {
      id: 1,
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato curry",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      price: "₹120"
    },
    {
      id: 2,
      name: "Hyderabadi Biryani",
      description: "Aromatic basmati rice with tender lamb and exotic spices",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      price: "₹280"
    },
    {
      id: 3,
      name: "Filter Coffee",
      description: "Traditional South Indian filter coffee with chicory",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      price: "₹40"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white px-4 max-w-4xl transition-all duration-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Authentic South Indian
            <span className="block gradient-text">Flavors</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience the rich heritage of South Indian cuisine in every bite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-spice-gradient text-white hover:opacity-90">
              <Link to="/menu" className="flex items-center">
                View Menu <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-red hover:bg-white hover:text-black">
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Signature Dishes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in">
              Discover our chef's specialties, crafted with traditional recipes and the finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card 
                key={dish.id} 
                className="group hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 bg-white/80 backdrop-blur-sm"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-spice-gradient text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-3 text-gray-800">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {dish.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-spice-paprika text-spice-paprika hover:bg-spice-paprika hover:text-white">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                For over three decades, Spice Garden has been serving authentic South Indian cuisine 
                that celebrates the rich culinary traditions of Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every dish is prepared with love, using time-honored recipes passed down through generations 
                and the finest spices sourced directly from Indian farms.
              </p>
              <Button className="bg-spice-gradient text-white hover:opacity-90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop" 
                alt="Traditional South Indian cooking"
                className="rounded-lg shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold gradient-text mb-4">Spice Garden</h3>
              <p className="text-gray-400">
                Authentic South Indian cuisine in the heart of the city.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/menu" className="block text-gray-400 hover:text-white transition-colors">Menu</Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <div className="text-gray-400 space-y-1">
                <p>Mon - Thu: 11:30 AM - 10:00 PM</p>
                <p>Fri - Sat: 11:30 AM - 11:00 PM</p>
                <p>Sunday: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-1">
                <p>123 Spice Street</p>
                <p>Chennai, Tamil Nadu 600001</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Spice Garden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
