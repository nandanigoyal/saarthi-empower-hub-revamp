import { X, Star, Users, Calendar, Stethoscope, FileText, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExploreModal = ({ isOpen, onClose }: ExploreModalProps) => {
  if (!isOpen) return null;

  const experiences = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      service: "SheCycle+ Period Tracking",
      rating: 5,
      review: "This app changed my life! Finally, accurate predictions and helpful health insights. The mood tracking feature is amazing.",
      location: "Mumbai, Maharashtra",
      verified: true
    },
    {
      id: 2,
      name: "Dr. Meera Patel",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      service: "GynConnect Consultation",
      rating: 5,
      review: "As a gynecologist, I'm impressed by the quality of consultations. Patients come well-prepared with their symptoms documented.",
      location: "Ahmedabad, Gujarat",
      verified: true
    },
    {
      id: 3,
      name: "Ritu Agarwal",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      service: "HealthYojana Government Schemes",
      rating: 4,
      review: "Found government health schemes I never knew existed! Got my mother enrolled in the senior citizen health program.",
      location: "Delhi, NCR",
      verified: true
    },
    {
      id: 4,
      name: "Sunita Reddy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      service: "SymptoScan AI Analysis",
      rating: 5,
      review: "The AI symptom checker caught early signs of PCOS. Early detection helped me get proper treatment quickly.",
      location: "Hyderabad, Telangana",
      verified: true
    },
    {
      id: 5,
      name: "Kavitha Nair",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
      service: "CareCircle Support Group",
      rating: 5,
      review: "Connected with amazing women facing similar challenges. The peer support helped me through my toughest times.",
      location: "Kochi, Kerala",
      verified: true
    },
    {
      id: 6,
      name: "Dr. Anita Gupta",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      service: "MediVault Health Records",
      rating: 4,
      review: "Secure, organized medical records. Easy to share with doctors and track health history over time.",
      location: "Jaipur, Rajasthan",
      verified: true
    }
  ];

  const features = [
    { icon: Calendar, name: "Period Tracking", users: "25k+" },
    { icon: Stethoscope, name: "Doctor Consultations", users: "18k+" },
    { icon: FileText, name: "Health Records", users: "30k+" },
    { icon: Shield, name: "Govt. Schemes", users: "8k+" },
    { icon: Heart, name: "Peer Support", users: "15k+" },
    { icon: Users, name: "Community", users: "50k+" }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Explore Women's Experiences</h2>
            <p className="text-muted-foreground mt-1">Real stories from real women using Saarthi</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Features Overview */}
        <div className="p-6 border-b border-border/50">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="card-elegant p-4 text-center">
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm">{feature.name}</h4>
                <p className="text-xs text-muted-foreground">{feature.users} users</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Experiences */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">What Women Are Saying</h3>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="card-feature p-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={exp.image} 
                    alt={exp.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{exp.name}</h4>
                      {exp.verified && (
                        <div className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < exp.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">({exp.rating}.0)</span>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                        {exp.service}
                      </span>
                    </div>
                    
                    <p className="text-foreground text-sm leading-relaxed">"{exp.review}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="p-6 border-t border-border/50 bg-gradient-warm">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-4">Join thousands of women who trust Saarthi for their health</p>
            <div className="flex gap-3 justify-center">
              <Button className="btn-hero">Get Started Today</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;