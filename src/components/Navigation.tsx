import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Wedding Bar Services', description: 'Full-service bar for wedding receptions' },
    { name: 'Birthday Party Packages', description: 'Age-appropriate drinks and themed cocktails' },
    { name: 'Corporate Events', description: 'Professional service for company events' },
    { name: 'Private Parties', description: 'Customized menus for intimate gatherings' },
    { name: 'Custom Cocktail Experiences', description: 'Bespoke drink experiences' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Real Bar Logo" 
                className="h-16 w-16 object-cover rounded-lg shadow-elegant transition-all duration-300 group-hover:shadow-gold group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link to="/services" className="font-semibold mb-2 text-primary hover:underline">
                        View All Services
                      </Link>
                      {services.map((service) => (
                        <div key={service.name} className="group">
                          <h4 className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/about') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/contact') ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <a href="tel:555-0123" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (555) 012-3456
              </a>
              <Button asChild className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300 hover:scale-105">
                <Link to="/contact">Book Event</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`text-sm font-medium ${isActive('/services') ? 'text-primary' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <div className="pt-4 border-t border-border">
                <a href="tel:555-0123" className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 012-3456
                </a>
                <Button asChild className="w-full mt-4 bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Book Event</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;