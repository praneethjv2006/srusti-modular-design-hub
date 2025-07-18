
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';

const Services = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

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

  const serviceImages = [
    {
      title: "Modern L-Shaped Kitchen",
      category: "Modular Kitchen",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sleek modular kitchen with premium finishes"
    },
    {
      title: "Parallel Kitchen Design",
      category: "Modular Kitchen", 
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Space-efficient parallel kitchen layout"
    },
    {
      title: "Island Kitchen",
      category: "Modular Kitchen",
      image: "https://images.unsplash.com/photo-1571986413577-cb55094b755c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxurious kitchen with central island"
    },
    {
      title: "Master Bedroom Suite",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete bedroom furniture set"
    },
    {
      title: "Kids Bedroom Design",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Colorful and functional kids room"
    },
    {
      title: "Walk-in Wardrobe",
      category: "Wardrobes",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Spacious walk-in closet design"
    },
    {
      title: "Built-in Wardrobe",
      category: "Wardrobes",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom built-in storage solution"
    },
    {
      title: "Modern Vanity Unit",
      category: "Vanity",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant bathroom vanity design"
    },
    {
      title: "Double Vanity Design",
      category: "Vanity",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Spacious his and hers vanity"
    },
    {
      title: "Dining Table Set",
      category: "Dining Tables & Chairs",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Elegant dining furniture collection"
    },
    {
      title: "Round Dining Table",
      category: "Dining Tables & Chairs",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Classic round dining table with chairs"
    },
    {
      title: "TV Wall Panel",
      category: "Wall/TV Paneling",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern TV wall mounting solution"  
    },
    {
      title: "Feature Wall Design",
      category: "Wall/TV Paneling",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Decorative wall paneling design"
    },
    {
      title: "Living Room Set",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete living room furniture"
    },
    {
      title: "Modern Sofa Design",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Contemporary sofa and seating"
    },
    {
      title: "Office Workstation",
      category: "Office Furniture",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ergonomic office furniture setup"
    },
    {
      title: "Executive Office",
      category: "Office Furniture", 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium executive office design"
    }
  ];

  const filteredImages = serviceImages.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                  className="flex items-center text-primary font-medium"
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
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(service)}
                        className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {service}
                      </button>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Explore our comprehensive range of modular furniture solutions
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between animate-fade-in">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('All')}
                className={`transition-all duration-200 hover:scale-105 ${selectedCategory === 'All' ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/10 hover:text-primary'}`}
              >
                All
              </Button>
              {services.map((service) => (
                <Button
                  key={service}
                  variant={selectedCategory === service ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(service)}
                  className={`transition-all duration-200 hover:scale-105 ${selectedCategory === service ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/10 hover:text-primary'}`}
                >
                  {service}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`transition-all duration-200 ${viewMode === 'grid' ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/10'}`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`transition-all duration-200 ${viewMode === 'list' ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/10'}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {selectedCategory === 'All' ? 'All Projects' : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredImages.length} projects found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-card hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{item.category}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredImages.map((item, index) => (
                <div 
                  key={index} 
                  className="flex bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className="w-48 h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-2">{item.category}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
