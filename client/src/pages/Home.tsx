import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ArrowRight, Play, Star, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 animate-in fade-in slide-in-from-bottom-4">
            <Star className="w-4 h-4 fill-primary" />
            <span>As seen on Shark Tank India</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 max-w-4xl mx-auto leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-5 delay-75">
            A trusted platform to <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">LEARN, EARN, and GROW</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 delay-150">
            Join 50+ lakh youth building their future today. Earn REAL money by working with REAL companies!
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-7 delay-200">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-xl shadow-primary/25">
              Start Earning Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto border-2 border-slate-200 hover:border-slate-300">
              Hire Smart Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Smart Opportunities for the Smart Generation</h2>
            <p className="text-lg text-slate-600">Choose your path to success with Funngro</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Teenlancer */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-slate-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <CardContent className="p-8 relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">TEENLANCERS</h3>
                <p className="text-slate-600 mb-8 flex-grow">Be Independent. Work with real companies, gain experience, and earn your first income.</p>
                <Link href="/teen">
                  <Button variant="ghost" className="p-0 text-primary font-bold hover:text-primary/80 hover:bg-transparent justify-start mt-auto">
                    Explore Teenlancer <ChevronRight className="ml-1 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Company */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-slate-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <CardContent className="p-8 relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">COMPANY</h3>
                <p className="text-slate-600 mb-8 flex-grow">Smart Talent Solution. Hire enthusiastic, energetic youth for your projects cost-effectively.</p>
                <Button variant="ghost" className="p-0 text-blue-600 font-bold hover:text-blue-700 hover:bg-transparent justify-start mt-auto">
                  Hire Talent <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Shelancer */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-slate-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <CardContent className="p-8 relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">SHELANCER</h3>
                <p className="text-slate-600 mb-8 flex-grow">Empowering Women. Restart your career with flexible projects matching your skills.</p>
                <Button variant="ghost" className="p-0 text-purple-600 font-bold hover:text-purple-700 hover:bg-transparent justify-start mt-auto">
                  Join Shelancer <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Shark Tank Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-md border border-white/10">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Funngro @ Shark Tank India
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Loved by 50Lakh+ users <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">and now loved by SHARKS</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Watch our journey on Shark Tank India where we showcased how we are changing the lives of millions of teenagers.
              </p>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold shadow-xl">
                <Play className="mr-2 w-5 h-5 text-primary fill-primary" /> Watch Full Pitch
              </Button>
            </div>
            
            <div className="flex-1 w-full max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-800 border-4 border-slate-800 group cursor-pointer">
                <img 
                  src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf3f03e4e4d213cda423f_Funngro%20-%20Shark%20Tank.png" 
                  alt="Funngro on Shark Tank" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center pl-1">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
