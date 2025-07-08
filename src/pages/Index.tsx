
import { useState } from 'react';
import { ArrowRight, Star, Users, Shield, Zap, Heart, FileText, Calendar, Stethoscope, Award, Activity, UserCheck, Database, Building2, Syringe, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import FeatureCard from '@/components/FeatureCard';
import heroWomen from '@/assets/hero-women.jpg';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState("Priya");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // If logged in, show dashboard
  if (isLoggedIn) {
    return (
      <>
        <Header 
          isLoggedIn={isLoggedIn} 
          userDashboard={true}
          onLogin={handleLogin} 
          onLogout={handleLogout} 
        />
        <Dashboard userName={userName} />
      </>
    );
  }

  // Feature cards with creative artistic icons and actual links
  const features = [
    {
      icon: Calendar,
      title: "SheCycle+",
      description: "Period & mood tracker with flow logs",
      fullDescription: "Complete period tracking with mood analysis, flow logs, and smart reminders to help you understand your cycle patterns better",
      users: "25k+ users",
      color: "from-rose-400 to-pink-500",
      link: "https://feminine-she-care-vpg6.vercel.app/"
    },
    {
      icon: Activity,
      title: "SymptoScan",
      description: "AI symptom scanner with health insights",
      fullDescription: "AI-powered symptom analysis offering verified health insights and personalized recommendations from medical experts",
      users: "18k+ users",
      color: "from-blue-400 to-cyan-500",
      link: "https://symptoscan-2mg1.onrender.com/"
    },
    {
      icon: Stethoscope,
      title: "GynConnect",
      description: "Video & chat with verified gynecologists",
      fullDescription: "Professional video consultations and secure chat with certified gynecologists for expert medical advice",
      users: "12k+ users",
      color: "from-emerald-400 to-green-500",
      link: "https://gyno-connect-oasis.vercel.app/"
    },
    {
      icon: Database,
      title: "MediVault",
      description: "Digital locker for health records",
      fullDescription: "Secure digital vault for prescriptions, medical reports, vitals, and health logs with encrypted storage",
      users: "30k+ users",
      color: "from-purple-400 to-violet-500",
      link: "https://medi-safe-journal-vault.vercel.app/"
    },
    {
      icon: Shield,
      title: "HealthYojana",
      description: "Discover govt. health schemes",
      fullDescription: "Navigate women-centric government health schemes with application assistance and eligibility guidance",
      users: "8k+ users",
      color: "from-amber-400 to-orange-500",
      link: "http://health-yojana.vercel.app/"
    },
    {
      icon: Building2,
      title: "NGOHeal",
      description: "Connect with NGOs for support",
      fullDescription: "Connect with verified NGOs for emergency shelter, legal aid, counseling, and community support resources",
      users: "15k+ users",
      color: "from-teal-400 to-cyan-500",
      link: "https://ngo-heal.vercel.app/"
    },
    {
      icon: MessageCircle,
      title: "CareCircle",
      description: "Peer support for mental health",
      fullDescription: "Anonymous peer support groups for emotional wellness with trained moderators and mental health resources",
      users: "20k+ users",
      color: "from-indigo-400 to-purple-500",
      link: "https://carecircle-women-unite.vercel.app/"
    },
    {
      icon: Heart,
      title: "VaxAlert",
      description: "Women's vaccine schedules & updates",
      fullDescription: "Personalized vaccination schedules, reminders, and updates on latest women-specific vaccines and health recommendations",
      users: "10k+ users",
      color: "from-pink-400 to-rose-500",
      link: "https://vaxalert2.vercel.app/"
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Women Trust Us" },
    { icon: Star, value: "98%", label: "Satisfaction Rate" },
    { icon: Zap, value: "24/7", label: "Support Available" },
    { icon: Award, value: "25+", label: "Health Services" }
  ];

  const testimonials = [
    {
      name: "Dr. Meera Patel",
      role: "Gynecologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      quote: "Saarthi is revolutionizing how women access healthcare. The quality of consultations and user engagement is remarkable."
    },
    {
      name: "Priya Sharma",
      role: "Health Advocate",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      quote: "This platform changed my understanding of my own health. The period tracking and AI insights are incredibly accurate."
    },
    {
      name: "Ritu Agarwal",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      quote: "Finally found government health schemes I didn't know existed. The platform made everything so accessible."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Empowering Women's Health Since 2024</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                  Digital Saarthi
                </span>
                for Complete Women's Wellness
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From period tracking to expert consultations, government health schemes to peer support — 
                experience comprehensive women's healthcare designed by women, for women.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleLogin} className="btn-hero text-lg px-8 py-4">
                  Join Saarthi Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => {
                  const aboutSection = document.getElementById('about-section');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }} variant="outline" className="btn-elegant text-lg px-8 py-4">
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 mt-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroWomen} 
                alt="Professional women's health consultation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-elegant">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/20 text-accent-foreground rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">⭐ Featured Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Revolutionary Health Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience cutting-edge women's healthcare technology designed by top medical experts 
              and AI specialists. Each feature is crafted to empower your health journey.
            </p>
          </div>

          {/* Feature Cards Grid - 2 rows of 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.slice(0, 4).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(4, 8).map((feature, index) => (
              <FeatureCard key={index + 4} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              See what doctors and women are saying about Saarthi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Moved here from duplicate */}
      <section id="about-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Saarthi Digital Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Saarthi Digital Hub is India's leading women's health platform, combining cutting-edge technology 
              with compassionate care to empower women across the country. Our mission is to make quality 
              healthcare accessible, affordable, and approachable for every woman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Impact</h3>
              <p className="text-muted-foreground mb-6">
                Since our inception, we've conducted numerous health drives, awareness campaigns, and 
                community outreach programs. Our team of certified healthcare professionals and 
                technology experts work tirelessly to bridge the gap between women and quality healthcare.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  50,000+ women served across India
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  200+ health camps conducted
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  98% user satisfaction rate
                </li>
              </ul>
            </div>
            <div>
              <img 
                src={heroWomen} 
                alt="Saarthi health drives and community impact"
                className="rounded-xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of women who trust Saarthi for their complete health and wellness needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleLogin} className="btn-hero text-lg px-8 py-4">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => {
              const aboutSection = document.getElementById('about-section');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} variant="outline" className="btn-elegant text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-white/80" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Saarthi Digital Hub</h3>
              <p className="text-primary-foreground/80 text-sm">
                Empowering women through technology and community support for better health outcomes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Period Tracking</li>
                <li>Doctor Consultations</li>
                <li>Health Records</li>
                <li>Government Schemes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>1800-SAARTHI</li>
                <li>hello@saarthi.health</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Saarthi Digital Hub. All rights reserved. Made with ❤️ for women's health.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
