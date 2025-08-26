import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Cake, 
  Building, 
  Users, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Wine,
  Clock,
  Star
} from 'lucide-react';
import cocktail1 from '@/assets/cocktail_1.jpg';
import cocktail2 from '@/assets/cocktail_2.jpg';
import cocktail3 from '@/assets/cocktail_3.jpg';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Bar Services',
      description: 'Make your special day perfect with our premium wedding bar services',
      image: cocktail1,
      features: [
        'Signature wedding cocktails',
        'Champagne and wine service',
        'Custom drink menus',
        'Elegant bar setup',
        'Professional attire',
        'Cake cutting champagne service',
        'Late-night snacks pairing',
        'Bridal party special drinks'
      ],
      pricing: 'Starting from $800',
      popular: true
    },
    {
      icon: Cake,
      title: 'Birthday Party Packages',
      description: 'Celebrate in style with themed cocktails and festive atmosphere',
      image: cocktail2,
      features: [
        'Age-appropriate drink options',
        'Themed cocktail menus',
        'Birthday cake cocktails',
        'Fun party atmosphere',
        'Mocktails for all ages',
        'Custom birthday drinks',
        'Party games integration',
        'Photo-worthy presentations'
      ],
      pricing: 'Starting from $600'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with professional bartending services',
      image: cocktail3,
      features: [
        'Professional networking service',
        'Corporate branding options',
        'Product launch specialties',
        'Executive-level service',
        'Quiet, professional setup',
        'Business lunch cocktails',
        'After-work happy hours',
        'Conference break services'
      ],
      pricing: 'Starting from $900'
    },
    {
      icon: Users,
      title: 'Private Parties',
      description: 'Intimate gatherings with personalized cocktail experiences',
      image: cocktail1,
      features: [
        'Customized drink menus',
        'Intimate bar setup',
        'Personal bartender service',
        'House party atmosphere',
        'Family-friendly options',
        'Seasonal cocktail menus',
        'Interactive cocktail making',
        'Flexible timing options'
      ],
      pricing: 'Starting from $500'
    },
    {
      icon: Sparkles,
      title: 'Custom Cocktail Experiences',
      description: 'Bespoke mixology experiences tailored to your unique vision',
      image: cocktail2,
      features: [
        'Bespoke cocktail creation',
        'Mixology workshops',
        'Tasting experiences',
        'Educational components',
        'Interactive demonstrations',
        'Custom recipe cards',
        'Premium spirit selections',
        'Unique presentation styles'
      ],
      pricing: 'Custom pricing'
    }
  ];

  const addOns = [
    { name: 'Premium Spirits Upgrade', price: '$200' },
    { name: 'Extended Service Hours', price: '$150/hour' },
    { name: 'Additional Bartender', price: '$300' },
    { name: 'Custom Cocktail Menu Design', price: '$100' },
    { name: 'Glassware Upgrade', price: '$150' },
    { name: 'Ice Sculpture Bar Feature', price: '$400' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Wine className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Bartending
            <span className="bg-gradient-gold bg-clip-text text-transparent block">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Professional mobile bar services tailored to your event. From intimate gatherings 
            to grand celebrations, we bring premium cocktails and exceptional service to you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className={`overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 ${service.popular ? 'ring-2 ring-secondary' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-gold text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enhance Your Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Add these premium extras to make your event even more special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-secondary">{addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple process to get premium bartending services for your event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Us', description: 'Get in touch with your event details' },
              { step: '2', title: 'Custom Quote', description: 'Receive a tailored quote for your needs' },
              { step: '3', title: 'Menu Planning', description: 'Design your perfect cocktail menu' },
              { step: '4', title: 'Event Day', description: 'Enjoy professional service at your event' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-secondary mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and custom quote. 
            Let's make your event extraordinary with our premium bartending services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-lg px-8 py-4">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
              <a href="tel:555-0123">Call: (555) 012-3456</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;