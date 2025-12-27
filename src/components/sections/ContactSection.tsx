import { Linkedin, Mail, Phone, Heart, Code } from "lucide-react";

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-4 border-t border-border bg-card/30">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-primary text-glow">
              Yuri Zambrano
            </h3>
            <p className="text-sm text-muted-foreground">Desenvolvedor Fullstack</p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/yuri-zambrano-b93441350"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yuri.trabalho.zambrano@gmail.com"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5551994066221"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            <Code className="w-4 h-4" />
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-glow-pulse" />
            <span>por Yuri Zambrano © {currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}