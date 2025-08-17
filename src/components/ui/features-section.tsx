import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Target, BarChart3, Shield, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Activity Tracking",
      description: "Monitor your daily activities, workouts, and calories burned with precision using advanced sensors and AI analysis."
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Keep track of your heart rate, blood pressure, and other vital signs with real-time monitoring and alerts."
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and achieve your wellness goals with our smart tracking system and personalized recommendations."
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visualize your progress with detailed charts, insights, and AI-powered health trend analysis."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your health data is secure and private, always under your control with end-to-end encryption."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock health monitoring and emergency alerts to keep you safe and informed."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Core Features
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Better Health
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and insights to help you achieve your wellness goals with cutting-edge technology and AI-powered analysis.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-b from-card to-card/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already started their wellness journey with VitalityFolio's comprehensive health platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-glow text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;