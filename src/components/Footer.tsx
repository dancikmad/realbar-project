import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              Real Bar
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium mobile bartending services bringing craft cocktails and professional service 
              to your special events. Making every celebration memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Services</h3>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">Wedding Bar Services</p>
              <p className="text-sm text-primary-foreground/80">Birthday Parties</p>
              <p className="text-sm text-primary-foreground/80">Corporate Events</p>
              <p className="text-sm text-primary-foreground/80">Private Parties</p>
              <p className="text-sm text-primary-foreground/80">Custom Experiences</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 mr-3 text-secondary" />
                <a href="tel:555-0123" className="hover:text-secondary transition-colors">
                  (555) 012-3456
                </a>
              </div>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 mr-3 text-secondary" />
                <a href="mailto:info@realbar.com" className="hover:text-secondary transition-colors">
                  info@realbar.com
                </a>
              </div>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mr-3 text-secondary" />
                <span>Serving Greater Metro Area</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Real Bar. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;