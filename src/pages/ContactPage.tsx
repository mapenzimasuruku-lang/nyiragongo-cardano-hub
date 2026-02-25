import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, ExternalLink } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-muted-foreground max-w-2xl">
            Posez vos questions ou proposez des collaborations. Nous serions ravis de vous entendre.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-8 shadow-card">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Sujet de votre message" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Votre message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-gradient-hero border-0 hover:opacity-90">
                Envoyer
              </Button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-sm text-muted-foreground">N°752, Not. MAPENDO, TURUNGA<br />Nyiragongo, RDC</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Réseaux sociaux</h3>
                    <div className="space-y-2 mt-2">
                      <a href="https://x.com/CARD_Nyiragongo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" /> X / Twitter
                      </a>
                      <a href="https://www.linkedin.com/in/cardano-nyiragongo-522b38379/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" /> LinkedIn
                      </a>
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
};

export default ContactPage;
