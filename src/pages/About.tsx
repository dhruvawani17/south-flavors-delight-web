
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const chefs = [
    {
      name: "Chef Ramesh Kumar",
      title: "Head Chef",
      experience: "25+ years",
      specialty: "Traditional Tamil Nadu cuisine",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=300&h=300&fit=crop"
    },
    {
      name: "Chef Lakshmi Nair",
      title: "Sous Chef",
      experience: "15+ years",
      specialty: "Kerala seafood dishes",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop"
    },
    {
      name: "Chef Suresh Reddy",
      title: "Spice Master",
      experience: "20+ years",
      specialty: "Andhra Pradesh spice blends",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-light animate-fade-in">
            Three decades of passion, tradition, and authentic flavors
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in-left">
                <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
                  A Journey of Flavors
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Spice Garden was born in 1994 from a simple dream - to bring the authentic 
                  tastes of South India to food lovers everywhere. What started as a small 
                  family restaurant has grown into a beloved culinary destination.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our founders, originally from Chennai, wanted to recreate the warmth and 
                  flavors of their grandmother's kitchen. Every recipe in our menu has been 
                  carefully preserved and passed down through generations.
                </p>
              </div>
              <div className="animate-slide-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop" 
                  alt="Traditional cooking"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop" 
                  alt="Spice collection"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="animate-slide-in-right order-1 md:order-2">
                <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
                  Our Philosophy
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We believe that food is more than sustenance - it's a celebration of 
                  culture, tradition, and community. Every dish we serve carries the 
                  soul of South Indian heritage.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From sourcing the finest spices directly from Indian farms to 
                  maintaining traditional cooking methods, we ensure that every bite 
                  tells a story of authenticity and love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Meet Our Chefs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in">
              Our talented team brings decades of experience and passion for South Indian cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 bg-white/80 backdrop-blur-sm"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <img 
                      src={chef.image} 
                      alt={chef.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-spice-turmeric/20"></div>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2 text-gray-800">
                    {chef.name}
                  </h3>
                  <p className="text-spice-paprika font-medium mb-2">{chef.title}</p>
                  <p className="text-gray-600 mb-2">{chef.experience} of experience</p>
                  <p className="text-gray-500 text-sm">{chef.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4 gradient-text">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-spice-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌿</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                Every recipe follows traditional methods passed down through generations
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-16 h-16 bg-spice-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌾</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We source the finest ingredients and spices for exceptional taste
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-16 h-16 bg-spice-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">❤️</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                Every dish is prepared with love and dedication to our craft
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
