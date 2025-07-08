
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
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
                Srusti Modular
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-primary font-medium">
                Home
              </Link>
              
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                </button>
                
                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 bg-background rounded-lg shadow-xl border border-border py-2 z-50 animate-fade-in"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to="/services"
                        className="block px-4 py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
                Contact Us
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-green-600/5 transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Srusti Modular
            <span className="block text-3xl md:text-4xl text-primary font-medium mt-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Private Limited
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Transform your spaces with our premium modular furniture and interior design solutions. 
            We create functional, beautiful environments that reflect your style and enhance your lifestyle.
          </p>
        </div>
      </section>

      {/* Why Choose Srusti */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4">
              Why Choose Srusti?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, quality, and craftsmanship to deliver exceptional modular solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive modular solutions for every space in your home or office
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 text-center hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
                  {service}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">Custom designs & installations</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Srusti Modular, we specialize in creating bespoke modular furniture solutions that maximize space efficiency while maintaining aesthetic appeal. Our team of expert designers and craftsmen work closely with clients to understand their unique requirements and deliver personalized solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Custom modular furniture design and manufacturing
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Complete interior design consultations
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional installation and after-sales support
                </li>
                <li className="flex items-center text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Space optimization solutions for homes and offices
                </li>
              </ul>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Interior Design"
                className="rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest modular furniture installations and interior design projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-primary/80">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Get in touch with our expert team for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 9876543210
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-16 px-4 sm:px-6 lg:px-8 border-t border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-primary">Srusti Modular</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creating beautiful, functional spaces with premium modular furniture and interior design solutions. 
                Your dream space is just a consultation away.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">Home</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors duration-200">Services</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h4 className="text-lg font-semibold mb-4 text-primary">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  +91 9876543210
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                  WhatsApp Us
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  info@srustimodular.com
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground transition-colors duration-300">
            <p>&copy; 2024 Srusti Modular Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
