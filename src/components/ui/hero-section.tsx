import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";
import { useToast } from "@/hooks/use-toast";

const stats = [
  { value: "10k+", label: "Active Users" },
  { value: "50M+", label: "Data Points" },
  { value: "4.9/5", label: "Avg. Rating" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleWatchDemo = () => {
    toast({
      title: "Demo video coming soon",
      description: "In the meantime, explore the live dashboard to see VitalityFolio in action.",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full glass text-primary text-sm font-medium">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                Now Live - VitalityFolio v2.0
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Your Health,{" "}
                <span className="text-gradient">
                  Your Journey
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Take control of your wellness with VitalityFolio - the comprehensive health tracking platform designed for your success. Monitor, analyze, and optimize your health journey with cutting-edge AI insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group shadow-[0_0_40px_hsl(var(--primary-glow)/0.4)]" onClick={() => navigate('/dashboard')}>
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg" className="group" onClick={handleWatchDemo}>
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border/60">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up [animation-delay:150ms]">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="VitalityFolio Healthcare Dashboard"
                className="rounded-2xl shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-4 right-4 sm:-top-6 sm:-right-6 z-20 glass p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Health Monitoring</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 z-20 glass p-4 rounded-xl shadow-lg animate-float [animation-delay:2s]">
              <div className="text-2xl font-bold text-gradient">127 BPM</div>
              <div className="text-sm text-muted-foreground">Heart Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
