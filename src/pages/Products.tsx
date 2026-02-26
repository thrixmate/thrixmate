import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import antiGrayingImg from "@/assets/anti-graying-system.jpg";
import antiGrayingShampoo from "@/assets/products/sampo1.png";
import antiGrayingConditioner from "@/assets/products/Conditioner.png";
import antiGrayingSerum from "@/assets/products/Serum.png";
import antiGrayingCombo from "@/assets/products/Combo.jpg";
import champiOilImg from "@/assets/home/homeoil.jpg";
import woodenCombImg from "@/assets/wooden-comb.jpg";
import hairComb from "@/assets/products/haircomb.jpg";
import keratinImg from "@/assets/keratin-range.jpg";
import antiGrayingVideo from "@/assets/home/1G.mp4";

const products = [
  {
    name: "Anti-Graying Shampoo",
    benefit: "Delays premature graying",
    category: "Anti-Graying",
    img: antiGrayingShampoo,
    vegan: true,
    url: "https://sciwell.black/products/anti-graying-shampoo",
  },
  {
    name: "Anti-Graying Conditioner",
    benefit: "Nourishes & protects melanin",
    category: "Anti-Graying",
    img: antiGrayingConditioner,
    vegan: true,
    url: "https://sciwell.black/products/anti-graying-conditioner",
  },
  {
    name: "Anti-Graying Serum",
    benefit: "Concentrated gray-delay treatment",
    category: "Anti-Graying",
    img: antiGrayingSerum,
    vegan: true,
    url: "https://sciwell.black/products/anti-graying-serum",
  },
  {
    name: "Anti-Graying Combo",
    benefit: "Concentrated gray-delay treatment",
    category: "Combo",
    img: antiGrayingCombo,
    vegan: true,
    url: "https://sciwell.black/products/anti-graying-serum",
  },
  {
    name: "Keratin Shampoo",
    benefit: "Color protection & smoothness",
    category: "Keratin",
    img: keratinImg,
    vegan: true,
    url: "https://sciwell.black/products/keratin-shampoo",
  },
  {
    name: "Keratin Conditioner",
    benefit: "Deep frizz control & shine",
    category: "Keratin",
    img: keratinImg,
    vegan: true,
    url: "https://sciwell.black/products/keratin-conditioner",
  },
  {
    name: "Keratin Combo",
    benefit: "Deep frizz control & shine",
    category: "Combo",
    img: keratinImg,
    vegan: true,
    url: "https://sciwell.black/products/keratin-conditioner",
  },
  {
    name: "Champi Hair Oil",
    benefit: "Traditional Ayurvedic nourishment",
    category: "Oils",
    img: champiOilImg,
    vegan: true,
    url: "https://sciwell.black/products/champi-hair-oil",
  },
  {
    name: "Natural Wooden Comb",
    benefit: "Stimulates scalp, reduces breakage",
    category: "Tools",
    img: woodenCombImg,
    vegan: false,
    url: "https://amzn.in/d/0000V6d1",
  },
  {
    name: "Natural Wooden Comb 2",
    benefit: "Stimulates scalp, reduces breakage",
    category: "Tools",
    img: hairComb,
    vegan: false,
    url: "https://amzn.in/d/0000V6d1",
  },
];

const categories = ["All", "Anti-Graying", "Keratin", "Oils", "Tools", "Combo"];

const Products = () => {
  const [active, setActive] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);
  const antiGraying = products.filter((p) => p.category === "Anti-Graying");
  const others = products.filter((p) => p.category !== "Anti-Graying");

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-cream-dark text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
            Shop
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-4">
            Our Complete Hair Wellness Collection
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each product is crafted with clinical actives and Ayurvedic
            botanicals for visible results.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  active === cat
                    ? "gold-gradient text-primary-foreground shadow-md"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {active === "All" ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {antiGraying.map((p, i) => (
                  <ScrollReveal key={p.name} delay={i * 80}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="rounded-xl overflow-hidden glass-card hover-lift gold-border-glow border transition-all duration-500">
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          {p.vegan && (
                            <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium tracking-wider">
                              VEGAN
                            </span>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-heading text-lg font-semibold text-secondary mb-1">
                            {p.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {p.benefit}
                          </p>
                          <span className="text-sm font-medium text-primary tracking-wider uppercase group-hover:underline">
                            Buy Now →
                          </span>
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              {/* Anti-Graying System Section */}
              <section className="bg-background rounded-2xl p-6 md:p-10 mb-12">
                <div className="container mx-auto px-2 md:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                        Complete 3-Step Anti-Graying System
                      </h2>
                      <ol className="space-y-4 text-foreground">
                        <li className="flex items-start gap-4">
                          <span className="min-w-[36px] h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            1
                          </span>
                          <div>
                            <h4 className="font-medium text-secondary">
                              Anti-Graying Shampoo
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Cleanses gently while preserving melanin and
                              delaying gray onset.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="min-w-[36px] h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            2
                          </span>
                          <div>
                            <h4 className="font-medium text-secondary">
                              Anti-Graying Conditioner
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Nourishes and protects hair to maintain pigment
                              and strength.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="min-w-[36px] h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                            3
                          </span>
                          <div>
                            <h4 className="font-medium text-secondary">
                              Anti-Graying Serum
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Concentrated actives to support scalp health and
                              delay graying.
                            </p>
                          </div>
                        </li>
                      </ol>
                      <div className="mt-6">
                        <a
                          href={"#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-8 py-3 rounded-full gold-gradient text-primary-foreground text-sm font-medium tracking-wider uppercase hover:shadow-lg transition-all duration-300"
                        >
                          Start Your Routine →
                        </a>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden">
                      <div className="w-full h-64 md:h-80 bg-black">
                        <video
                          src={antiGrayingVideo}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* remaining products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {others.map((p, i) => (
                  <ScrollReveal key={p.name} delay={i * 80}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="rounded-xl overflow-hidden glass-card hover-lift gold-border-glow border transition-all duration-500">
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          {p.vegan && (
                            <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium tracking-wider">
                              VEGAN
                            </span>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-heading text-lg font-semibold text-secondary mb-1">
                            {p.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {p.benefit}
                          </p>
                          <span className="text-sm font-medium text-primary tracking-wider uppercase group-hover:underline">
                            Buy Now →
                          </span>
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 80}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="rounded-xl overflow-hidden glass-card hover-lift gold-border-glow border transition-all duration-500">
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        {p.vegan && (
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium tracking-wider">
                            VEGAN
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-lg font-semibold text-secondary mb-1">
                          {p.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {p.benefit}
                        </p>
                        <span className="text-sm font-medium text-primary tracking-wider uppercase group-hover:underline">
                          Buy Now →
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Products;
