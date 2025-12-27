import { ExternalLink, Github, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Calculadora iOS",
    description: "Calculadora completa com visual iOS, modo claro/escuro, histórico de cálculos persistente e animações fluidas.",
    tags: ["React", "JavaScript", "LocalStorage"],
    status: "ready",
    github: "https://github.com/yurizambrano",
    demo: "https://lovable.dev",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto virá aqui. Este é um placeholder para seus futuros projetos.",
    tags: ["Python", "IA", "Data"],
    status: "coming-soon",
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto virá aqui. Este é um placeholder para seus futuros projetos.",
    tags: ["TypeScript", "API", "Cloud"],
    status: "coming-soon",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meus <span className="text-primary text-glow">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl bg-card/50 border border-border overflow-hidden animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: "perspective(1000px)",
              }}
            >
              {/* Coming soon overlay - only for coming-soon projects */}
              {project.status === "coming-soon" && (
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="text-center p-4">
                    <Clock className="w-10 h-10 text-primary mx-auto mb-2 animate-glow-pulse" />
                    <p className="text-sm font-medium">Em breve</p>
                  </div>
                </div>
              )}

              {/* Project image placeholder */}
              <div className="aspect-video rounded-lg bg-muted mb-4 flex items-center justify-center border border-border/50">
                <div className="text-muted-foreground text-4xl font-display opacity-30">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                {project.status === "ready" ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Código
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 opacity-50" disabled>
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 opacity-50" disabled>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}