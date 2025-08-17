import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Twitter } from "lucide-react";
import teamShivam from "@/assets/team-shivam.jpg";
import teamHarshit from "@/assets/team-harshit.jpg";
import teamRaghav from "@/assets/team-raghav.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Yash Gupta",
      role: "Main Developer",
      image: teamShivam,
      bio: "Lead developer and architect behind VitalityFolio. Expert in full-stack development, health technology, and system design.",
      specialties: ["Full-Stack Development", "Health Technology", "System Architecture"],
      social: {
        linkedin: "#",
        email: "yashgupta72003@gmail.com",
        twitter: "#"
      }
    },
    {
      name: "Shivam",
      role: "Team Member",
      image: teamShivam,
      bio: "Health technology specialist contributing to AI-driven wellness solutions and innovative health tracking technologies.",
      specialties: ["Health AI", "Data Analytics", "Wellness Tech"],
      social: {
        linkedin: "#",
        email: "shivam@vitalityfolio.com",
        twitter: "#"
      }
    },
    {
      name: "Harshit Gupta",
      role: "Team Member",
      image: teamHarshit,
      bio: "Healthcare developer specializing in secure medical data management and healthcare application development.",
      specialties: ["Healthcare Systems", "Data Security", "Frontend Development"],
      social: {
        linkedin: "#",
        email: "harshit@vitalityfolio.com",
        twitter: "#"
      }
    },
    {
      name: "Raghav Sharma",
      role: "Team Member",
      image: teamRaghav,
      bio: "Medical technology consultant with expertise in digital health solutions and patient care optimization.",
      specialties: ["Digital Health", "Patient Care", "Medical Consulting"],
      social: {
        linkedin: "#",
        email: "raghav@vitalityfolio.com",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meet Our Team
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Healthcare Experts Behind{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              VitalityFolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our passionate team of healthcare professionals and technology experts are dedicated to revolutionizing digital health management.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-b from-card to-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.specialties.map((specialty) => (
                    <Badge 
                      key={specialty}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t border-border">
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in joining our team?
          </p>
          <a
            href="mailto:careers@vitalityfolio.com"
            className="inline-flex items-center text-primary hover:text-primary-glow font-medium transition-colors"
          >
            View Open Positions
            <Mail className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;