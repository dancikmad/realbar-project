import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Star, 
  Users, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Award,
  ArrowRight,
  Quote
} from 'lucide-react';
import miadoraVideo from '@/assets/Miadora.mp4';
import cocktail1 from '@/assets/cocktail_1.jpg';
import cocktail2 from '@/assets/cocktail_2.jpg';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: 'Professional Bartenders',
      description: 'Certified mixologists with years of experience in high-end events'
    },
    {
      icon: Sparkles,
      title: 'Premium Equipment',
      description: 'Top-quality bar tools and equipment for the perfect drink every time'
    },
    {
      icon: Clock,
      title: 'Full Setup & Cleanup',
      description: 'We handle everything from setup to cleanup, so you can enjoy your event'
    },
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind with full licensing and comprehensive insurance'
    }
  ];

  const services = [
    {
      title: 'Wedding Bar Services',
      description: 'Make your special day perfect with signature cocktails and champagne service',
      image: cocktail1,
      features: ['Signature cocktails', 'Champagne service', 'Custom drink menus']
    },
    {
      title: 'Birthday Party Packages',
      description: 'Celebrate in style with themed cocktails and professional service',
      image: cocktail2,
      features: ['Age-appropriate options', 'Themed cocktails', 'Party atmosphere']
    },
    {
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with premium bartending services',
      image: cocktail1,
      features: ['Professional service', 'Networking events', 'Product launches']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Real Bar made our wedding absolutely perfect! The bartenders were professional, the cocktails were amazing, and our guests are still talking about it!'
    },
    {
      name: 'Jennifer Adams',
      event: 'Birthday Party',
      rating: 5,
      text: 'Incredible service from start to finish. They took care of everything and the custom cocktails were a huge hit with all our guests.'
    },
    {
      name: 'Corporate Solutions Inc.',
      event: 'Company Event',
      rating: 5,
      text: 'Professional, reliable, and exceptional quality. Real Bar elevated our corporate event and impressed all our clients.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover md:object-fill"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            minWidth: '100%', 
            minHeight: '100%', 
            width: '100%', 
            height: '100%'
          }}
        >
          <source src={miadoraVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Mobile
              <span className="bg-gradient-gold bg-clip-text text-transparent block">
                Bartending Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Professional bartenders bring craft cocktails and premium service directly to your 
              weddings, parties, and special celebrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-lg px-8 py-4">
                <Link to="/contact">Book Your Event</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Real Bar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring years of experience and premium service to make your event unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we provide tailored bartending services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from satisfied customers who trusted us with their special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Event?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Get in touch today for a custom quote and let us make your celebration unforgettable 
            with our premium mobile bartending services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-lg px-8 py-4">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
              <a href="tel:555-0123">Call Now: (555) 012-3456</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;