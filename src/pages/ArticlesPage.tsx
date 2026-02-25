const articles = [
  {
    id: 1,
    title: "Bienvenue sur le blog du Cardano Nyiragongo Hub",
    summary: "Retrouvez toutes nos actualités, tutoriels et récits d'événements pour rester connecté avec la communauté Cardano locale et internationale.",
    category: "Actualités",
    date: "25 février 2026",
  },
  {
    id: 2,
    title: "Introduction à la blockchain Cardano",
    summary: "Découvrez les fondamentaux de Cardano, son approche scientifique et pourquoi elle se distingue dans l'écosystème blockchain.",
    category: "Tutoriels",
    date: "20 février 2026",
  },
  {
    id: 3,
    title: "Retour sur le Hackathon CATS 2025",
    summary: "Des équipes africaines ont transformé des idées locales en prototypes fonctionnels sur Cardano lors de cette série de hackathons.",
    category: "Hackathons",
    date: "15 janvier 2026",
  },
  {
    id: 4,
    title: "Comment participer aux projets communautaires",
    summary: "Guide pratique pour rejoindre les initiatives du hub et contribuer à l'adoption de Cardano en RDC.",
    category: "Projets communautaires",
    date: "10 janvier 2026",
  },
];

const categories = ["Tous", "Hackathons", "Masterclass", "Actualités", "Tutoriels", "Projets communautaires"];

import { useState } from "react";

const ArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <div>
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Articles & Blog</h1>
          <p className="text-muted-foreground max-w-2xl">
            Actualités, tutoriels et récits d'événements de la communauté Cardano à Nyiragongo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="rounded-xl border border-border bg-card p-6 shadow-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aucun article dans cette catégorie pour le moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
