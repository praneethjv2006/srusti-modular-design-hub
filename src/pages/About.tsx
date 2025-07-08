
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Award, Users, Clock, Target, Heart, CheckCircle } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const About = () => {
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

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards in our craftsmanship and materials."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our team is passionate about creating beautiful spaces that enhance our clients' lives and reflect their personalities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients throughout the process, ensuring their vision comes to life exactly as imagined."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously explore new design trends and technologies to offer cutting-edge modular solutions."
    }
  ];

  const achievements = [
    "500+ Happy Customers",
    "1000+ Projects Completed", 
    "15+ Years of Experience",
    "Award-Winning Designs"
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
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
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
              
              <Link to="/about" className="text-primary font-medium">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">About Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Crafting beautiful spaces with passion, precision, and purpose
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Srusti Modular Private Limited was founded with a vision to transform the way people experience their living and working spaces. We believe that every space has the potential to be extraordinary, and our mission is to unlock that potential through innovative modular furniture solutions and thoughtful interior design.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in the industry, we have evolved from a small design studio to a leading modular furniture company, serving hundreds of satisfied customers across the region. Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' unique needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Srusti Modular, we don't just create furniture – we craft experiences. Every piece we design is a testament to our dedication to excellence, functionality, and aesthetic appeal. Our team of skilled designers and craftsmen work tirelessly to ensure that each project exceeds expectations and stands the test of time.
              </p>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Workshop"
                className="rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-110">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-muted/20 rounded-2xl p-8 lg:p-12 transition-all duration-300 hover:shadow-lg animate-fade-in">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create exceptional modular furniture solutions that enhance the quality of life for our clients. We are committed to delivering innovative designs, superior craftsmanship, and personalized service that transforms spaces into beautiful, functional environments that reflect individual style and meet practical needs.
              </p>
            </div>
            
            <div className="bg-muted/20 rounded-2xl p-8 lg:p-12 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading modular furniture company recognized for our innovation, quality, and customer satisfaction. We envision a future where every space we touch becomes a source of joy, comfort, and inspiration for its inhabitants, setting new standards in the industry for design excellence and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center space-x-3 transition-transform duration-300 hover:scale-105 animate-fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CheckCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
                <span className="text-xl font-semibold">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's work together to create the perfect modular solution for your space
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
