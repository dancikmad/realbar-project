import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Shield, 
  Clock,
  MapPin,
  CheckCircle,
  Star,
  Trophy,
  Heart
} from 'lucide-react';
import cocktail1 from '@/assets/cocktail_1.jpg';
import cocktail2 from '@/assets/cocktail_2.jpg';
import realBarBartender from '@/assets/real-bar-bartender.jpg';
import logo from '@/assets/logo.jpg';

const About = () => {
  const team = [
    {
      name: 'Michael Rodriguez',
      role: 'Master Bartender & Founder',
      image: realBarBartender,
      description: 'With over 15 years of experience in premium hospitality, Michael founded Real Bar to bring craft cocktail excellence to private events.',
      certifications: ['Certified Mixologist', 'Event Management', 'Food Safety Certified']
    },
    {
      name: 'Sarah Chen',
      role: 'Event Specialist',
      image: cocktail1,
      description: 'Sarah specializes in wedding and corporate events, ensuring every detail is perfect for your special celebration.',
      certifications: ['Wedding Planning', 'Corporate Events', 'Customer Service Excellence']
    },
    {
      name: 'David Thompson',
      role: 'Senior Bartender',
      image: cocktail2,
      description: 'David brings creativity and flair to every event, specializing in custom cocktail creation and interactive experiences.',
      certifications: ['Flair Bartending', 'Craft Cocktails', 'Entertainment Services']
    }
  ];

  const stats = [
    { number: '500+', label: 'Events Served' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Service Area Miles' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service, from ingredients to presentation.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for mixology and creating memorable experiences drives everything we do.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Fully licensed, insured, and committed to showing up prepared for your special day.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'We believe exceptional service means anticipating needs and exceeding expectations.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mx-auto mb-6 w-20 h-20">
            <img 
              src={logo} 
              alt="Real Bar Logo" 
              className="w-20 h-20 object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-gold opacity-20"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Real Bar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Founded on passion for mixology and dedication to exceptional service, 
            we've been elevating events across the region for over 15 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Real Bar was born from a simple belief: every celebration deserves exceptional drinks 
                  and professional service. What started as a passion project by master bartender 
                  Michael Rodriguez has grown into the region's premier mobile bartending service.
                </p>
                <p>
                  After years of working in high-end hotels and restaurants, Michael realized that 
                  private events deserved the same level of cocktail craftsmanship and professional 
                  service. In 2009, he founded Real Bar to bring that expertise directly to people's 
                  most important celebrations.
                </p>
                <p>
                  Today, our team of certified mixologists has served over 500 events, from intimate 
                  dinner parties to grand weddings. We've built our reputation on quality ingredients, 
                  innovative cocktails, and service that goes above and beyond expectations.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={realBarBartender} 
                alt="Master bartender crafting cocktails"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are passionate about creating exceptional experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-60"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every event we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <MapPin className="w-12 h-12 text-secondary mb-6" />
              <h2 className="text-4xl font-bold mb-6">Service Area</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We proudly serve the greater metropolitan area and surrounding regions. 
                Our mobile service means we bring the bar to you, whether you're hosting 
                an intimate backyard gathering or a grand ballroom celebration.
              </p>
              <div className="space-y-3">
                {[
                  'Metropolitan area (50-mile radius)',
                  'Suburban venues and private homes',
                  'Outdoor locations and parks',
                  'Hotels and event centers',
                  'Corporate facilities',
                  'Destination events (travel fees apply)'
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 text-secondary mr-3" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={cocktail2} 
                alt="Mobile bar setup at venue"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can make your event extraordinary. 
            Contact us today for a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 text-lg px-8 py-4">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;