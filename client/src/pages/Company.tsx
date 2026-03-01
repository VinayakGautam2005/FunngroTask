import { Button } from "@/components/ui/button";
import {
  Zap, Shield, Users, Rocket,
  CheckCircle2, TrendingUp, BarChart3, ArrowRight, Play
} from "lucide-react";

export default function Company() {
  const benefits = [
    {
      title: "Cost-Effective",
      desc: "Get your projects done at a fraction of the cost compared to traditional agencies.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "Vibrant Energy",
      desc: "Tap into the fresh perspectives and high energy of the digital-native generation.",
      icon: <Zap className="w-6 h-6 text-secondary" />
    },
    {
      title: "Scalable Talent",
      desc: "Scale your workforce up or down instantly based on your project requirements.",
      icon: <Users className="w-6 h-6 text-foreground" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground font-bold text-sm mb-8">
              <Rocket className="w-4 h-4" />
              <span>Smart Talent Solution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
              Hire the <span className="text-primary">Smart Generation</span> for your projects
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Connect with 50 Lakh+ enthusiastic teenagers ready to help your company grow with fresh ideas and digital skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-secondary/20">
                Post a Project
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-primary font-bold h-16 text-lg">
                <Play className="mr-3 fill-primary text-primary" /> Watch How it Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className="py-16 border-y border-border bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">Trusted by 4,000+ Forward-Thinking Companies</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50">
            <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png" alt="CarDekho" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png" alt="Enerzy" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c231131a1e105d55f450_Mobigic%20logo.png" alt="Mobigic" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e236fced422c7e558_StockPe%20Logo.png" alt="StockPe" className="h-8 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-background rounded-[28px] shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-card rounded-[48px] p-12 md:p-20 text-foreground flex flex-col lg:flex-row items-center gap-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="flex-1 space-y-8 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Quality work, <br />
                <span className="text-primary">Milestone payments.</span>
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-lg">
                Our platform manages the entire workflow. You only pay when the milestones are achieved and you're satisfied with the results.
              </p>
              <ul className="space-y-4">
                {['Direct access to 5M+ Talent', 'Project Management Dashboard', 'Milestone based tracking', 'Secure Payment Gateway'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 h-14 font-bold shadow-lg shadow-secondary/20">
                Get Started Free
              </Button>
            </div>

            <div className="flex-1 relative">
              <div className="bg-background/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
                <BarChart3 className="w-20 h-20 text-primary mb-8" />
                <p className="text-3xl font-black mb-2 text-foreground">4.9/5</p>
                <p className="text-foreground/60 font-bold uppercase tracking-widest text-sm">Average Project Rating</p>
                <div className="mt-10 h-2 bg-background/20 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
