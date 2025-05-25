
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All', icon: '🏪' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'restaurant', name: 'Restaurant', icon: '🏮' },
    { id: 'chef', name: 'Kitchen', icon: '👨‍🍳' }
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
      title: "Masala Dosa",
      category: "food"
    },
    {
      id: 2,
      url: "https://assets.architecturaldigest.in/photos/6008202a345ead69c9c1ab91/master/w_1600%2Cc_limit/Bandra-Madras-Diaries-Interior-5.jpg",
      title: "Restaurant Interior",
      category: "restaurant"
    },
    {
      id: 3,
      url: "https://wallpaperaccess.com/full/1972917.jpg",
      title: "Biryani Special",
      category: "food"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1556909114-4ee7ca324a82?w=600&h=400&fit=crop",
      title: "Kitchen Excellence",
      category: "chef"
    },
    {
      id: 5,
      url: "https://th.bing.com/th/id/OIP.KtEm98mF6k9lTSax8mcTfQHaHa?cb=iwc2&rs=1&pid=ImgDetMain",
      title: "Traditional Thali",
      category: "food"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      title: "Dining Experience",
      category: "restaurant"
    },
    {
      id: 7,
      url: "https://www.bing.com/images/search?view=detailV2&ccid=KtEm98mF&id=2A37A9224BE4AC9D6CC35AB4C13FD93946FE44DA&thid=OIP.KtEm98mF6k9lTSax8mcTfQHaHa&mediaurl=https%3a%2f%2ftraditionallymodernfood.com%2fwp-content%2fuploads%2f2023%2f01%2fcooking-for-guests-south-indian-lunch-combo-1-scaled.jpeg&exph=2560&expw=2560&q=south+indian+thali&simid=608004672562994091&FORM=IRPRST&ck=7A10391AD52546C5B62260B35DDAAD57&selectedIndex=1&itb=0",
      title: "Sambar & Rice",
      category: "food"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=400&fit=crop",
      title: "Chef at Work",
      category: "chef"
    },
    {
      id: 9,
      url: "https://static.vecteezy.com/system/resources/previews/013/754/794/large_2x/south-indian-filter-coffee-served-in-a-traditional-brass-or-stainless-steel-cup-free-photo.jpg",
      title: "Filter Coffee",
      category: "food"
    },
    {
      id: 10,
      url: "https://thearchitectsdiary.com/wp-content/uploads/2019/12/triple-A.jpg",
      title: "Cozy Ambiance",
      category: "restaurant"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1627308595127-d9acf19107ce?w=600&h=400&fit=crop",
      title: "Sweet Delights",
      category: "food"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=400&fit=crop",
      title: "Kitchen Team",
      category: "chef"
    }
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold mb-4 animate-fade-in gradient-text">
            Gallery
          </h1>
          <p className="text-gray-600 text-lg animate-fade-in">
            A visual journey through our culinary world
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 sticky top-16 bg-white/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${activeFilter === filter.id
                    ? 'bg-spice-gradient text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                <span>{filter.icon}</span>
                <span className="font-medium">{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-playfair text-lg font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
            Experience the Magic
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Visit us to experience these flavors and moments firsthand.
            Every dish tells a story, and every visit creates a memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-spice-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Reserve a Table
            </button>
            <button className="px-8 py-3 border border-spice-paprika text-spice-paprika rounded-lg font-semibold hover:bg-spice-paprika hover:text-white transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
