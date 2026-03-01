import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2, Users, Briefcase, FileText, CheckCircle2,
  PenTool, Video, Globe, Smartphone, BarChart3, Database, Mic, ArrowRight
} from "lucide-react";

export default function Teen() {
  const stats = [
    { label: "Companies", value: "4,000+" },
    { label: "Categories", value: "12" },
    { label: "Teenlancers", value: "50,00,000+" },
    { label: "Live projects", value: "1000+" },
  ];

  const reasons = [
    { title: "First income", desc: "Work with real companies and Earn money" },
    { title: "Passion", desc: "Make your passion as your profession" },
    { title: "Learning", desc: "Experiential Learning by working on real projects" },
    { title: "Certification", desc: "Build your profile by getting experience certificates" },
  ];

  const categories = [
    { title: "Social media marketing", icon: <Users className="w-6 h-6" /> },
    { title: "Video Creation", icon: <Video className="w-6 h-6" /> },
    { title: "Website Design", icon: <Globe className="w-6 h-6" /> },
    { title: "Mobile App Dev", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Research & Survey", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Data Entry", icon: <Database className="w-6 h-6" /> },
    { title: "Voice Over", icon: <Mic className="w-6 h-6" /> },
    { title: "Content Writing", icon: <FileText className="w-6 h-6" /> },
    { title: "Graphics Design", icon: <PenTool className="w-6 h-6" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="pt-24 pb-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase">
                Start Your Journey
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1]">
                TEENLANCERS
              </h1>
              <p className="text-2xl font-bold text-primary leading-snug">
                Real companies, real projects, <br /> real earnings and real money
              </p>
              <p className="text-xl text-muted-foreground max-w-lg">
                Smart opportunities for the smart generation. Be independent before 18!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-secondary/20">
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex gap-3 items-center">
                  <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" alt="Google Play" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
                  <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" alt="App Store" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png"
                alt="Funngro App"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card py-16 text-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-4xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 underline decoration-primary decoration-8 underline-offset-8">
              Why work in your teenage?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Warren Buffet, Bill Gates, Steve Jobs, all started working in their Teens, do you need a better reason?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-background p-8 rounded-3xl shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center font-black text-2xl mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">Project Categories</h2>
              <p className="text-xl text-muted-foreground">
                Hundreds of live project in each category. Register and start working with real companies.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-primary text-primary font-bold hover:bg-primary hover:text-foreground px-8 h-12">
              View All Categories
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="group p-8 rounded-[32px] border-2 border-border hover:border-primary bg-card/50 hover:bg-background transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-background shadow-sm flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-foreground transition-all mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                <div className="mt-4 flex items-center text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
