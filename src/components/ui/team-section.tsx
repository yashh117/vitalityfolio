import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Twitter } from "lucide-react";
import teamShivam from "@/assets/team-shivam.jpg";

const founder = {
  name: "Yash Gupta",
  role: "Founder & Lead Developer",
  image: teamShivam,
  bio: "I built VitalityFolio to make comprehensive health tracking simple, secure, and genuinely useful. I handle everything from product design and full-stack development to system architecture and health technology strategy.",
  specialties: ["Full-Stack Development", "Health Technology", "System Architecture"],
  social: {
    linkedin: "#",
    email: "yashgupta72003@gmail.com",
    twitter: "#"
  }
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass text-primary text-sm font-medium mb-4">
            The Person Behind It
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet the{" "}
            <span className="text-gradient">
              Founder
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VitalityFolio is built and maintained by a single dedicated developer, passionate about health technology.
          </p>
        </div>

        {/* Founder Spotlight */}
        <Card className="border-border/60 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover ring-4 ring-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center ring-4 ring-card">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-gradient font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {founder.specialties.map((specialty) => (
                    <Badge
                      key={specialty}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center md:justify-start space-x-3">
                  <a
                    href={founder.social.linkedin}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${founder.social.email}`}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={founder.social.twitter}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;
