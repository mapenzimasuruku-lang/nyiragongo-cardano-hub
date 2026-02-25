import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="Cardano Nyiragongo Hub community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        </div>

        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Communauté Blockchain à Nyiragongo
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connecter Nyiragongo au futur du{" "}
              <span className="text-gradient">Web3 avec Cardano</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Le Cardano Nyiragongo Hub est un espace communautaire dédié à l'apprentissage, 
              à l'innovation et à la collaboration autour de la blockchain Cardano.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-hero border-0 hover:opacity-90 transition-opacity">
                <Link to="/newsletter">
                  S'inscrire à la newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                <Link to="/evenements">Voir les événements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Pillars */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Communauté",
                desc: "Nous équipons les jeunes, étudiants et entrepreneurs locaux pour participer activement à l'écosystème mondial du Web3.",
              },
              {
                icon: BookOpen,
                title: "Formation",
                desc: "Des masterclass, ateliers techniques et sessions de mentorat pour maîtriser la blockchain Cardano.",
              },
              {
                icon: Calendar,
                title: "Événements",
                desc: "Hackathons, meetups et conférences pour connecter la communauté locale à l'écosystème Cardano international.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez le mouvement</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Participez à la construction du Web3 en Afrique. Que vous soyez développeur, étudiant ou entrepreneur, il y a une place pour vous.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-hero border-0 hover:opacity-90">
              <Link to="/contact">Nous rejoindre</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/equipe">Découvrir l'équipe</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
