import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-slate-300 pt-16 pb-8 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-3 rounded-xl inline-block w-fit">
              <img
                src="/logo.png"
                alt="Funngro Logo"
                className="h-12 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Funngro is a mission to enable Teenagers to become Financially empowered and grow up to be responsible citizens.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Quick Links</h4>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Home</span></Link>
            <Link href="/teen"><span className="hover:text-white transition-colors cursor-pointer text-sm">Teenlancer</span></Link>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Company</span></Link>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Parent</span></Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Legal</h4>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Privacy Policy</span></Link>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Terms of Service</span></Link>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Refund Policy</span></Link>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer text-sm">Contact Us</span></Link>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Download App</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" alt="Get it on Google Play" className="h-12 object-contain" />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-105">
                <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" alt="Download on the App Store" className="h-12 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} FUNNGRO Wishbanc Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made by Vinayak Gautam
          </p>
        </div>
      </div>
    </footer>
  );
}
