import { Calendar, Heart, FileText, Users, TrendingUp, Bell, Settings, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface DashboardProps {
  userName: string;
}

const Dashboard = ({ userName }: DashboardProps) => {
  const quickActions = [
    {
      icon: Calendar,
      title: "Track Period",
      description: "Log your cycle data",
      action: "Track Now",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: Heart,
      title: "Symptom Check",
      description: "AI-powered analysis",
      action: "Start Scan",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "View your history",
      action: "Open Vault",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with others",
      action: "Join Chat",
      color: "from-purple-400 to-violet-400"
    }
  ];

  const recentActivity = [
    { 
      type: "period",
      message: "Period tracking updated",
      time: "2 hours ago",
      icon: Calendar
    },
    {
      type: "consultation", 
      message: "Dr. Sharma consultation completed",
      time: "1 day ago",
      icon: Heart
    },
    {
      type: "community",
      message: "New message in PCOS Support Group",
      time: "2 days ago", 
      icon: Users
    }
  ];

  const healthInsights = [
    {
      title: "Next Period",
      value: "In 5 days",
      trend: "On track",
      positive: true
    },
    {
      title: "Health Score",
      value: "85/100",
      trend: "+5 from last month",
      positive: true
    },
    {
      title: "Consultation Credits",
      value: "3 remaining",
      trend: "Expires in 30 days",
      positive: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {userName}! 👋
              </h1>
              <p className="text-white/80">
                Here's what's happening with your health today
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Health Insights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Health Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {healthInsights.map((insight, index) => (
              <Card key={index} className="card-elegant p-4">
                <h3 className="font-medium text-muted-foreground text-sm mb-1">
                  {insight.title}
                </h3>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {insight.value}
                </div>
                <div className={`text-sm ${insight.positive ? 'text-green-600' : 'text-orange-600'}`}>
                  {insight.trend}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="card-feature p-6 text-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center mx-auto mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                <Button className="btn-feature w-full">
                  {action.action}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity & Features */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <Card className="card-elegant p-4">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <activity.icon className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Health Services */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recommended Services</h2>
              <Button variant="ghost" size="sm">
                <HelpCircle className="w-4 h-4 mr-1" />
                Help
              </Button>
            </div>
            <Card className="card-elegant p-4">
              <div className="space-y-4">
                <div className="border border-border/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h3 className="font-medium">Health Trend Analysis</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get personalized insights based on your health data
                  </p>
                  <Button size="sm" className="btn-feature">
                    View Analysis
                  </Button>
                </div>
                
                <div className="border border-border/50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <h3 className="font-medium">Expert Consultation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Book a session with our certified gynecologists
                  </p>
                  <Button size="sm" className="btn-feature">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;