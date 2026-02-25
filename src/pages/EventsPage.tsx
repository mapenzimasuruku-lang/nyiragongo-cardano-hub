import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventHackathon from "@/assets/event-hackathon.jpg";
import eventMasterclass from "@/assets/event-masterclass.jpg";

const upcomingEvents = [
  {
    title: "Hackathon CATS 2025",
    date: "1er novembre – 15 décembre 2025",
    location: "En ligne + Nyiragongo",
    desc: "Une série de hackathons à travers l'Afrique pour transformer les idées locales en prototypes fonctionnels sur Cardano.",
    image: eventHackathon,
  },
  {
    title: "Masterclass Smart Contracts",
    date: "À venir",
    location: "Nyiragongo Hub",
    desc: "Atelier technique sur le développement de smart contracts avec Plutus et Aiken sur Cardano.",
    image: eventMasterclass,
  },
];

const pastEvents = [
  {
    title: "Événement du 29 juin 2024",
    desc: "Session communautaire autour de Cardano et l'écosystème blockchain à Nyiragongo.",
    link: "https://updciongandintersectmbo.blogspot.com/2024/07/evenement-du-29-juin-2024-dans-le.html",
  },
  {
    title: "Hackathon Local CATS 2026 – Jour 3",
    desc: "Consolidation technique et structuration des équipes lors du hackathon local.",
    link: "https://forum.cardano.org/t/jour-3-du-hackathon-local-cats-2026-consolidation-technique-et-structuration-des-equipes/151107?u=baudouin_augustin",
  },
];

const EventsPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Événements & Masterclass</h1>
          <p className="text-muted-foreground max-w-2xl">
            Découvrez nos hackathons, ateliers techniques et sessions de mentorat pour rester connecté avec la communauté Cardano.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-accent" />
            Événements à venir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:border-primary/30 transition-all">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs font-medium text-accent mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
                  <p className="text-sm text-muted-foreground">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Événements passés</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <a
                key={event.title}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.desc}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
