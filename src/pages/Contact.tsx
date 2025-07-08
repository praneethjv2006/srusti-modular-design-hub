
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

const Contact = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Modular Kitchen",
    "Bedroom",
    "Wardrobes", 
    "Vanity",
    "Dining Tables & Chairs",
    "Wall/TV Paneling",
    "Living Room",
    "Office Furniture"
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 9876543210",
      subtitle: "Mon-Sat, 9AM-7PM"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+91 9876543210",
      subtitle: "Quick responses available"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@srustimodular.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Design Street, Bandra West",
      subtitle: "Mumbai, Maharashtra 400050"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Srusti Modular
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                Home
              </Link>
              
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to="/services"
                        className="block px-4 py-2 text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/about" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-green-600 font-medium">
                Contact Us
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Let's discuss your dream project and bring it to life
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="shadow-xl border-slate-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-green-600 mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{info.title}</h4>
                          <p className="text-slate-700 font-medium">{info.details}</p>
                          <p className="text-sm text-slate-600">{info.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Business Hours */}
            <div className="space-y-6">
              <Card className="shadow-xl border-slate-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Monday - Friday</span>
                      <span className="text-slate-800 font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Saturday</span>
                      <span className="text-slate-800 font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Sunday</span>
                      <span className="text-slate-800 font-medium">Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-slate-400 hover:text-green-600 transition-colors duration-200">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-green-600 transition-colors duration-200">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-green-600 transition-colors duration-200">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-green-600 transition-colors duration-200">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-xl border-slate-200">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-slate-200 to-slate-300 h-96 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Visit Our Showroom</h3>
                  <p className="text-slate-600">123 Design Street, Bandra West</p>
                  <p className="text-slate-600">Mumbai, Maharashtra 400050</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
