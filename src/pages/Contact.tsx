
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ReservationDialog from '@/components/ReservationDialog';

const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Us",
      details: [
        "123 Spice Street",
        "T. Nagar, Chennai",
        "Tamil Nadu 600017"
      ],
      icon: "📍"
    },
    {
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211",
        "Reservations: +91 98765 43212"
      ],
      icon: "📞"
    },
    {
      title: "Hours",
      details: [
        "Mon - Thu: 11:30 AM - 10:00 PM",
        "Fri - Sat: 11:30 AM - 11:00 PM",
        "Sunday: 12:00 PM - 9:00 PM"
      ],
      icon: "🕒"
    },
    {
      title: "Email Us",
      details: [
        "info@spicegarden.com",
        "reservations@spicegarden.com",
        "events@spicegarden.com"
      ],
      icon: "✉️"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold mb-4 animate-fade-in gradient-text">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg animate-fade-in">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 bg-white/80 backdrop-blur-sm"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-gray-800">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is this regarding?"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-700">Message</Label>
                      <textarea 
                        id="message" 
                        rows={5}
                        placeholder="Your message..."
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-paprika focus:border-transparent"
                      />
                    </div>
                    
                    <Button className="w-full bg-spice-gradient text-white hover:opacity-90 py-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Info */}
            <div className="animate-slide-in-right space-y-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
                    Find Us
                  </h2>
                  <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-gray-600">Interactive Map Coming Soon</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-spice-paprika text-xl">📍</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Address</h4>
                        <p className="text-gray-600">123 Spice Street, T. Nagar, Chennai, Tamil Nadu 600017</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-spice-paprika text-xl">🚇</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Nearest Metro</h4>
                        <p className="text-gray-600">T. Nagar Metro Station (5 minutes walk)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-spice-paprika text-xl">🅿️</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">Parking</h4>
                        <p className="text-gray-600">Complimentary valet parking available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-800">
                    Make a Reservation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Book your table in advance to ensure the best dining experience.
                  </p>
                  <div className="space-y-4">
                    <ReservationDialog>
                      <Button className="w-full bg-spice-gradient text-black hover:opacity-90">
                        Reserve Online
                      </Button>
                    </ReservationDialog>
                    <Button variant="outline" className="w-full border-spice-paprika text-spice-paprika hover:bg-spice-paprika hover:text-white">
                      Call for Reservation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
