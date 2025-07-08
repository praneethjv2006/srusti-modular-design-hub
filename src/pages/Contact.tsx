
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter, Linkedin, Home, Briefcase, Users, Building2 } from 'lucide-react';
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
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-border transition-all duration-500 hover:shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent transition-all duration-500 hover:scale-110 transform">
                <Building2 className="h-8 w-8 text-primary animate-pulse" />
                <span className="transition-all duration-300 hover:tracking-wide">Srusti Modular</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1">
                <Home className="h-4 w-4 transition-transform duration-200" />
                <span>Home</span>
              </Link>
              
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1"
                >
                  <Briefcase className="h-4 w-4 transition-transform duration-200" />
                  <span>Services</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                </button>
                
                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 bg-background rounded-lg shadow-xl border border-border py-2 z-50 animate-fade-in transform transition-all duration-500 hover:shadow-2xl"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to="/services"
                        className="block px-4 py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                        style={{animationDelay: `${index * 0.05}s`}}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/about" className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1">
                <Users className="h-4 w-4 transition-transform duration-200" />
                <span>About Us</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-1 text-primary font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <Phone className="h-4 w-4 animate-bounce" />
                <span>Contact Us</span>
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-green-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in transform transition-all duration-700 hover:scale-105">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in transform transition-all duration-700 hover:scale-102" style={{animationDelay: '0.2s'}}>
            Let's discuss your dream project and bring it to life
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="shadow-xl border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20 transform hover:scale-105 hover:-translate-y-2 animate-fade-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6 transition-colors duration-300">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-4 group transition-all duration-300 hover:scale-105 transform hover:translate-x-2 animate-fade-in"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <div className="text-primary mt-1 group-hover:scale-125 transition-all duration-300 group-hover:rotate-12">
                          {info.icon}
                        </div>
                        <div className="transition-all duration-300 group-hover:translate-x-1">
                          <h4 className="font-semibold text-card-foreground transition-colors duration-300 group-hover:text-primary">{info.title}</h4>
                          <p className="text-card-foreground font-medium transition-all duration-300">{info.details}</p>
                          <p className="text-sm text-muted-foreground transition-colors duration-300">{info.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Business Hours */}
            <div className="space-y-6">
              <Card className="shadow-xl border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20 transform hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6 transition-colors duration-300">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between group transition-all duration-300 hover:text-primary transform hover:scale-105 hover:translate-x-2">
                      <span className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">Monday - Friday</span>
                      <span className="text-card-foreground font-medium transition-colors duration-300">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between group transition-all duration-300 hover:text-primary transform hover:scale-105 hover:translate-x-2">
                      <span className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">Saturday</span>
                      <span className="text-card-foreground font-medium transition-colors duration-300">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between group transition-all duration-300 hover:text-primary transform hover:scale-105 hover:translate-x-2">
                      <span className="text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">Sunday</span>
                      <span className="text-card-foreground font-medium transition-colors duration-300">Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-card-foreground mb-4 transition-colors duration-300">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform hover:rotate-12 hover:-translate-y-1">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform hover:rotate-12 hover:-translate-y-1">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform hover:rotate-12 hover:-translate-y-1">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform hover:rotate-12 hover:-translate-y-1">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-xl border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20 transform hover:scale-102 animate-fade-in">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-muted/40 to-muted/60 h-96 flex items-center justify-center rounded-lg transition-all duration-500 hover:from-muted/60 hover:to-muted/80">
                <div className="text-center transform transition-all duration-500 hover:scale-110">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4 transition-all duration-500 hover:scale-125 animate-bounce" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 transition-all duration-300 hover:text-primary">Visit Our Showroom</h3>
                  <p className="text-muted-foreground transition-colors duration-300">123 Design Street, Bandra West</p>
                  <p className="text-muted-foreground transition-colors duration-300">Mumbai, Maharashtra 400050</p>
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
