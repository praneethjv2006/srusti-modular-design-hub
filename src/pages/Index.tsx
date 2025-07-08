import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Star, Award, Users, Clock, Facebook, Instagram, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

const Index = () => {
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

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We use only the finest materials and craftsmanship in every project"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team", 
      description: "Our experienced designers bring your vision to life with precision"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "We complete projects on schedule without compromising quality"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority with 100% satisfaction guarantee"
    }
  ];

  const featuredProjects = [
    {
      title: "Modern Kitchen Design",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Kitchen"
    },
    {
      title: "Luxury Bedroom Suite",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bedroom"
    },
    {
      title: "Custom Wardrobe",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wardrobe"
    },
    {
      title: "Elegant Dining Space",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Dining"
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
              <Link to="/contact" className="text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium">
                Contact Us
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-emerald-100/20"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Srusti Modular
            <span className="block text-3xl md:text-4xl text-green-600 font-medium mt-2">
              Private Limited
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your spaces with our premium modular furniture and interior design solutions. 
            We create functional, beautiful environments that reflect your style and enhance your lifestyle.
          </p>
        </div>
      </section>

      {/* Why Choose Srusti */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Why Choose Srusti?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine innovation, quality, and craftsmanship to deliver exceptional modular solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-green-200">
                <CardContent className="p-8 text-center">
                  <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive modular solutions for every space in your home or office
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-green-200 text-center"
              >
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-green-600 transition-colors duration-200">
                  {service}
                </h3>
                <p className="text-slate-600 mt-2 text-sm">Custom designs & installations</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                What We Do
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Srusti Modular, we specialize in creating bespoke modular furniture solutions that maximize space efficiency while maintaining aesthetic appeal. Our team of expert designers and craftsmen work closely with clients to understand their unique requirements and deliver personalized solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Custom modular furniture design and manufacturing
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Complete interior design consultations
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Professional installation and after-sales support
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Space optimization solutions for homes and offices
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Interior Design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our latest modular furniture installations and interior design projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-green-200">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our expert team for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-green-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                Get Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 9876543210
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Srusti Modular</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Creating beautiful, functional spaces with premium modular furniture and interior design solutions. 
                Your dream space is just a consultation away.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-200">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white transition-colors duration-200">Home</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors duration-200">Services</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <Phone className="h-4 w-4 mr-2 text-green-400" />
                  +91 9876543210
                </li>
                <li className="flex items-center text-slate-300">
                  <MessageSquare className="h-4 w-4 mr-2 text-green-400" />
                  WhatsApp Us
                </li>
                <li className="flex items-center text-slate-300">
                  <Mail className="h-4 w-4 mr-2 text-green-400" />
                  info@srustimodular.com
                </li>
                <li className="flex items-center text-slate-300">
                  <MapPin className="h-4 w-4 mr-2 text-green-400" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Srusti Modular Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
