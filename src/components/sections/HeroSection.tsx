import { Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InteractiveCube } from "@/components/3d/InteractiveCube";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in-left">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                &lt;Desenvolvedor Fullstack /&gt;
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                <span className="text-foreground">Yuri</span>{" "}
                <span className="text-primary text-glow">Zambrano</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
                17 anos • Estudante de Ciência da Computação
              </p>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              Desenvolvedor apaixonado por tecnologia, especializado em{" "}
              <span className="text-primary font-medium">Python</span>,{" "}
              <span className="text-primary font-medium">JavaScript</span> e{" "}
              <span className="text-primary font-medium">IA</span>. 
              Construindo o futuro, uma linha de código por vez.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button
                asChild
                className="gap-2 box-glow hover:scale-105 transition-transform"
              >
                <a
                  href="https://www.linkedin.com/in/yuri-zambrano-b93441350"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all"
              >
                <a href="mailto:yuri.trabalho.zambrano@gmail.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all"
              >
                <a
                  href="https://wa.me/5551994066221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Right - 3D Cube */}
          <div className="animate-fade-in-right">
            <InteractiveCube />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ChevronDown className="w-8 h-8 text-primary animate-glow-pulse" />
      </a>
    </section>
  );
}