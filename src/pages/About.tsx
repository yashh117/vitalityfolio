import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import ChatBot from "@/components/ui/chat-bot";
import TeamSection from "@/components/ui/team-section";
import { 
  Shield, 
  Award, 
  Users, 
  Globe,
  CheckCircle,
  Heart,
  Target,
  Zap
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "We prioritize your health and well-being above everything else, ensuring every feature serves your wellness journey."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your health data is encrypted and protected with industry-leading security measures. Your privacy is non-negotiable."
    },
    {
      icon: Target,
      title: "Personalized Care",
      description: "Every recommendation and insight is tailored to your unique health profile and personal wellness goals."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously innovate with cutting-edge AI and medical research to provide the best health tracking experience."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Active Users" },
    { number: "50M+", label: "Health Data Points" },
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "4.9/5", label: "User Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChatBot />
      
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About VitalityFolio
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Health Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              VitalityFolio is more than just a health tracking platform. We're your dedicated partner in achieving optimal wellness through intelligent technology, personalized insights, and comprehensive health management.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To democratize healthcare by making comprehensive health tracking accessible, secure, and actionable for everyone. We believe that when people have the right tools and insights, they can take control of their health and live their best lives.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Overview */}
          <Card className="mb-16 bg-gradient-to-br from-card to-card/80">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Why Choose VitalityFolio?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Comprehensive Health Tracking</h4>
                      <p className="text-sm text-muted-foreground">Monitor vitals, activities, nutrition, and more in one place.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">AI-Powered Insights</h4>
                      <p className="text-sm text-muted-foreground">Get personalized recommendations based on your health data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">24/7 Health Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Continuous monitoring with emergency alerts and notifications.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Secure Data Protection</h4>
                      <p className="text-sm text-muted-foreground">Military-grade encryption keeps your health data safe and private.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Expert Team Support</h4>
                      <p className="text-sm text-muted-foreground">Healthcare professionals and tech experts at your service.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Seamless Integration</h4>
                      <p className="text-sm text-muted-foreground">Works with popular fitness devices and health apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <TeamSection />

          {/* Contact CTA */}
          <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Health Journey?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of users who have transformed their health with VitalityFolio. Start tracking, analyzing, and optimizing your wellness today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')}>
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:yashgupta72003@gmail.com">Contact Our Team</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;