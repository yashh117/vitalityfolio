import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Target, BarChart3, Shield, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: Activity,
      title: "Activity Tracking",
      description: "Monitor your daily activities, workouts, and calories burned with precision using advanced sensors and AI analysis.",
      highlight: true
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
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass text-primary text-sm font-medium mb-4">
            Core Features
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-gradient">
              Better Health
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and insights to help you achieve your wellness goals with cutting-edge technology and AI-powered analysis.
          </p>
        </div>

        {/* Bento Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={cn(
                  "group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-border/60",
                  feature.highlight
                    ? "lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-primary/10 via-card to-card"
                    : "bg-card/80 backdrop-blur-sm"
                )}
              >
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
          <div className="bg-gradient-to-r from-primary/10 to-accent-2/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already started their wellness journey with VitalityFolio's comprehensive health platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => navigate('/dashboard')}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
