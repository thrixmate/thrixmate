import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      <section className="section-padding bg-cream-dark text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Reach Out</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-secondary mb-2 tracking-wider uppercase">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder={`Your ${f.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2 tracking-wider uppercase">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@thrixmate.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={20} className="text-primary" /> thrixmate@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone size={20} className="text-primary" /> +91-9154391543
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-4">Shop Online</h3>
                <a
                  href="https://sciwell.black"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold-dark transition-colors font-medium"
                >
                  sciwell.black →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
