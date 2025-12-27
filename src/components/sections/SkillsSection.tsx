import { useState } from "react";
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiReact, 
  SiPhp,
  SiPostgresql,
  SiCss3,
  SiGit
} from "react-icons/si";
import { Brain } from "lucide-react";

const skills = [
  { name: "Python", icon: SiPython, color: "#3776ab", level: 90 },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 85 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", level: 80 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80 },
  { name: "React", icon: SiReact, color: "#61dafb", level: 75 },
  { name: "SQL", icon: SiPostgresql, color: "#4479a1", level: 85 },
  { name: "PHP", icon: SiPhp, color: "#777bb4", level: 70 },
  { name: "CSS", icon: SiCss3, color: "#1572b6", level: 85 },
  { name: "Git", icon: SiGit, color: "#f05032", level: 80 },
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-primary text-glow">Skills</span> & Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tecnologias que domino e utilizo para criar soluções incríveis
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* AI Highlight */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 box-glow animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Inteligência Artificial & Dados</h3>
              <p className="text-muted-foreground text-sm">
                Formado pelo programa Geração Caldeira com foco em IA e análise de dados. 
                Conhecimento em machine learning, análise de dados e automação inteligente.
              </p>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}40` : undefined
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex flex-col items-center gap-2">
                <skill.icon 
                  className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <span className="text-xs md:text-sm font-medium text-center">{skill.name}</span>
                
                {/* Level bar */}
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color 
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}