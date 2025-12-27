import { User, GraduationCap, Briefcase } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Sobre <span className="text-primary text-glow">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* About card */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quem sou eu</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sou um desenvolvedor de 17 anos apaixonado por criar soluções 
              tecnológicas. Comecei a programar cedo e desde então não parei 
              de aprender e evoluir na área.
            </p>
          </div>

          {/* Education card */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Formação</h3>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>Ciência da Computação (em andamento)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>Python - Senac</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>IA e Dados - Geração Caldeira</span>
              </li>
            </ul>
          </div>

          {/* Experience card */}
          <div className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Experiência</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experiência prática com desenvolvimento fullstack, trabalhando 
              com diversas tecnologias como PHP, Node.js, React e bancos de 
              dados SQL. Focado em criar soluções eficientes e escaláveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}