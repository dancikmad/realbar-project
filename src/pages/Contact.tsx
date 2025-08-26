import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  Users,
  Wine,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a custom quote.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 012-3456',
      description: 'Call us for immediate assistance',
      action: 'tel:555-0123'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@realbar.com',
      description: 'Send us your event details',
      action: 'mailto:info@realbar.com'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'Greater Metro Area',
      description: '50-mile radius coverage',
      action: null
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sun: 9AM-11PM',
      description: 'Available for events',
      action: null
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 4-6 weeks in advance, especially for wedding season (May-October). However, we can often accommodate shorter notice for smaller events.'
    },
    {
      question: 'Do you provide all the alcohol?',
      answer: 'We can provide all alcohol and mixers, or we can work with alcohol you provide. We\'ll discuss the best option based on your budget and preferences.'
    },
    {
      question: 'What equipment do you bring?',
      answer: 'We bring all bar equipment, glassware, mixers, garnishes, and setup materials. We also handle all cleanup afterward.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed for mobile bartending and carry comprehensive liability insurance for all events.'
    },
    {
      question: 'Can you create custom cocktails?',
      answer: 'Absolutely! We love creating signature cocktails that reflect your personality or event theme. This is included in all our packages.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Real Bar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your event? Let's discuss your vision and create 
            a custom quote for your special celebration.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Send className="w-8 h-8 text-secondary mr-3" />
                    Get Your Free Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a custom quote.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="eventType">Event Type *</Label>
                        <Select value={formData.eventType} onValueChange={(value) => handleChange('eventType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="birthday">Birthday Party</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="private">Private Party</SelectItem>
                            <SelectItem value="custom">Custom Experience</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventDate">Event Date *</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => handleChange('eventDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guestCount">Number of Guests *</Label>
                        <Select value={formData.guestCount} onValueChange={(value) => handleChange('guestCount', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guest count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10-25">10-25 guests</SelectItem>
                            <SelectItem value="26-50">26-50 guests</SelectItem>
                            <SelectItem value="51-100">51-100 guests</SelectItem>
                            <SelectItem value="101-200">101-200 guests</SelectItem>
                            <SelectItem value="200+">200+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location">Event Location *</Label>
                      <Input
                        id="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        placeholder="City, State or Full Address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your vision, special requests, or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
                      <Send className="w-5 h-5 mr-2" />
                      Send Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-secondary hover:underline font-medium text-lg"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-secondary font-medium text-lg">{info.content}</p>
                          )}
                          <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Wine className="w-5 h-5 text-secondary mr-2" />
                    Why Choose Real Bar?
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Calendar, text: '500+ successful events' },
                      { icon: Users, text: '15+ years experience' },
                      { icon: Wine, text: '98% client satisfaction' },
                      { icon: Clock, text: '24-hour response time' }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <stat.icon className="w-4 h-4 text-secondary" />
                        <span className="text-sm">{stat.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-black text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
          <p className="text-primary-foreground/90 mb-6">
            For urgent requests or same-day events, call us directly
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
            <a href="tel:555-0123">Call Now: (555) 012-3456</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;