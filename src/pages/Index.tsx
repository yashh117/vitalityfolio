import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import FeaturesSection from "@/components/ui/features-section";
import TeamSection from "@/components/ui/team-section";
import ChatBot from "@/components/ui/chat-bot";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, ArrowRight, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "VitalityFolio has completely transformed how I track my health. The AI insights are incredibly accurate and helpful!",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Healthcare Professional",
      content: "I recommend VitalityFolio to all my patients. It's the most comprehensive and secure health platform I've seen.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Wellness Coach",
      content: "The team integration and detailed analytics make it perfect for both personal use and coaching clients.",
      rating: 5
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast({
      title: "You're subscribed!",
      description: "We'll send wellness tips and product updates to " + email,
    });
    setEmail("");
  };

  const handleComingSoon = (e: React.MouseEvent, feature: string) => {
    e.preventDefault();
    toast({
      title: `${feature} coming soon`,
      description: "This part of the site is still under construction.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChatBot />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full glass text-primary text-sm font-medium mb-4">
                What Our Users Say
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Trusted by{" "}
                <span className="text-gradient">
                  Health Enthusiasts
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of users who have transformed their health journey with VitalityFolio.
              </p>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Call to Action */}
        <section className="py-20 bg-mesh relative overflow-hidden border-y border-border/60">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the power of AI-driven health insights with our comprehensive platform.
              Track, analyze, and optimize your wellness with the guidance of our expert team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" onClick={() => navigate('/dashboard')}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/about')}>
                Schedule a Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">50M+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-md">
                    <Activity className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold text-foreground">VitalityFolio</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
                  Your comprehensive health tracking platform powered by AI and managed by healthcare experts.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <Input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                  />
                  <Button type="submit" variant="primary" size="sm">
                    Subscribe
                  </Button>
                </form>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                  <li><a href="/analytics" className="hover:text-primary transition-colors">Analytics</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Mobile App")} className="hover:text-primary transition-colors">Mobile App</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "API")} className="hover:text-primary transition-colors">API</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Careers")} className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Privacy Policy")} className="hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Terms of Service")} className="hover:text-primary transition-colors">Terms</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Help Center")} className="hover:text-primary transition-colors">Help Center</a></li>
                  <li><a href="mailto:yashgupta72003@gmail.com" className="hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Community")} className="hover:text-primary transition-colors">Community</a></li>
                  <li><a href="#" onClick={(e) => handleComingSoon(e, "Status")} className="hover:text-primary transition-colors">Status</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  © 2026 VitalityFolio. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" onClick={(e) => handleComingSoon(e, "Twitter")} className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" onClick={(e) => handleComingSoon(e, "LinkedIn")} className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
