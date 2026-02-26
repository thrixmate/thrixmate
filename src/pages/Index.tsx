import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import GoldParticles from "@/components/GoldParticles";
import productStackImg from "@/assets/home/thrixmate.png";
import antiGrayingImg from "@/assets/anti-graying-system.jpg";
import champiOilImg1 from "@/assets/home/champi-oil.png";
import champiOilImg from "@/assets/champi-oil-hero.jpg";
import champiOilImg2 from "@/assets/home/homeoil.jpg";
// import woodenCombImg from "@/assets/wooden-comb.jpg";
import combImg from "@/assets/home/comb.png";
import keratinImg from "@/assets/keratin-range.jpg";
import antiGrayingVideo from "@/assets/home/1G.mp4";
import {
  Leaf,
  FlaskConical,
  Sparkles,
  Zap,
  Wheat,
  ShowerHead,
  Star,
  Check,
} from "lucide-react";

const SHOP_URL = "https://sciwell.black";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        <GoldParticles />
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-24 pb-16">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-medium">
              Premium Hair Wellness
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-secondary mb-6">
              Stronger Roots.
              <br />
              Healthier Scalp.
              <br />
              <span className="gold-text">Naturally Darker Hair.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Science-backed Formulation For root to tip hair wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/products"
                className="px-8 py-3.5 rounded-full border-2 border-primary text-secondary text-sm font-medium tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Explore Products
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Shop Now →
              </a>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-up-delay-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl gold-glow opacity-40" />
              <img
                src={productStackImg}
                alt="Thrixmate product collection"
                className="relative rounded-2xl glass-card w-full max-w-md animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="products" className="section-padding bg-cream-dark">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                Our Collection
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
                Product Categories
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Keratin Range",
                desc: "Color protection & frizz-free smoothness",
                img: keratinImg,
                url: "https://amazon.com",
              },
              {
                title: "Anti-Graying Range",
                desc: "Delay grays naturally with clinical actives",
                img: antiGrayingImg,
                url: "https://amazon.com",
              },
              {
                title: "Champi Oil",
                desc: "Traditional Ayurvedic scalp nourishment",
                img: champiOilImg1,
                url: "https://amazon.com",
              },
              {
                title: "Wooden Comb",
                desc: "Scalp stimulation & reduced breakage",
                img: combImg,
                url: "https://amazon.com",
              },
            ].map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 100}>
                <a
                  href={cat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="rounded-xl overflow-hidden glass-card hover-lift gold-border-glow border transition-all duration-500">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-secondary mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cat.desc}
                      </p>
                      <div className="mt-3 h-0.5 w-0 group-hover:w-full gold-gradient transition-all duration-500" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ANTI-GRAYING RITUAL */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                Signature System
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
                Complete 3-Step Anti-Graying System
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <video
                  src={antiGrayingVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    "Delay Grays",
                    "Promote Hair Growth",
                    "Toxin Free",
                    "Vegan",
                  ].map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-2 text-secondary-foreground text-sm"
                    >
                      <Check size={16} className="text-gold" /> {b}
                    </span>
                  ))}
                </div>
                <a
                  href={"https://amzn.in/d/06MdsIca"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Start Your Routine →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CHAMPI OIL */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={champiOilImg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden gold-glow">
              <img
                src={champiOilImg2}
                alt="Champi Oil"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">
              Ayurvedic Heritage
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Rediscover the Power of Traditional Champi
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Strengthens roots",
                "Reduces breakage",
                "Deep scalp nourishment",
                "Botanical blend",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-secondary-foreground/90"
                >
                  <span className="w-2 h-2 rounded-full gold-gradient flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={"https://amzn.in/d/0000V6d1"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Shop Champi Oil →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* WOODEN COMB */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
              Natural Tools
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
              Natural Wooden Comb
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Scalp stimulation & reduced breakage — the way nature intended.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Anti-static",
                "Promotes blood circulation",
                "Prevents hair fall",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary" /> {b}
                </li>
              ))}
            </ul>
            <a
              href={"https://amzn.in/d/0000V6d1"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Shop Comb →
            </a>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden hover-lift">
              <img
                src={combImg}
                alt="Wooden Comb"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* KERATIN RANGE */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden hover-lift">
              <img
                src={keratinImg}
                alt="Keratin Range"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
              Premium Care
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
              Keratin Color Protection Range
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Color Protection",
                "Frizz-Free Smoothness",
                "Shine & Strength",
                "Suitable for all hair types",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <Sparkles size={18} className="text-primary" /> {b}
                </li>
              ))}
            </ul>
            <a
              href={"https://amzn.in/d/0000V6d1"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Explore Keratin Range →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY THRIXMATE */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                Our Promise
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
                Why Thrixmate?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, label: "Vegan" },
              { icon: FlaskConical, label: "Dermatologically Tested" },
              { icon: Sparkles, label: "Paraben-Free" },
              { icon: Zap, label: "Anti-Graying Technology" },
              { icon: Wheat, label: "Ayurvedic Botanicals" },
              { icon: ShowerHead, label: "Suitable for All Hair Types" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div className="glass-card rounded-xl p-6 text-center hover-lift gold-border-glow border transition-all duration-500">
                  <item.icon size={32} className="mx-auto mb-4 text-primary" />
                  <p className="text-sm font-medium text-secondary">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                Reviews
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
                What Our Customers Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Visible reduction in grey hair in just 6 weeks. Absolutely incredible results!",
                name: "Priya M.",
              },
              {
                text: "My scalp feels healthier than ever. The Champi Oil is a game changer for my hair routine.",
                name: "Arjun S.",
              },
              {
                text: "The Keratin range gave my color-treated hair the best shine and protection I've ever experienced.",
                name: "Neha K.",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card rounded-xl p-8 hover-lift">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">
                    "{t.text}"
                  </p>
                  <p className="text-sm font-medium text-primary">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <GoldParticles />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
              Healthy Hair Begins
              <br />
              at the Root.
            </h2>
            <a
              href={"https://amzn.in/d/0000V6d1"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Shop Now →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
