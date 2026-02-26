import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Quote } from "lucide-react";
import founderThoughtImg from "@/assets/about/founder.jpg";
import founderImg from "@/assets/about/profile.png";
import visionary1Img from "@/assets/about/Dr.Mohit Bhatia.png";
import visionary2Img from "@/assets/about/paras.png";
import visionary3Img from "@/assets/about/harsimran.png";
import visionary4Img from "@/assets/about/megha.png";
import visionary5Img from "@/assets/about/Shreya Sawhney.jpeg";
import advisor1Img from "@/assets/advisor-1.jpg";
import advisor2Img from "@/assets/advisor-2.jpg";
import advisor3Img from "@/assets/advisor-3.jpg";
import award1Img from "@/assets/award-1.jpg";
import award2Img from "@/assets/award-2.jpg";
import award3Img from "@/assets/award-3.jpg";
import award4Img from "@/assets/award-4.jpg";
import award5Img from "@/assets/award-5.jpg";
import award6Img from "@/assets/award-6.jpg";
import collab1Img from "@/assets/collab-1.jpg";
import collab2Img from "@/assets/collab-2.jpg";
import collab3Img from "@/assets/collab-3.jpg";
import collab4Img from "@/assets/collab-4.jpg";
import collab5Img from "@/assets/collab-5.jpg";
import collab6Img from "@/assets/collab-6.jpg";

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const visionaries = [
    {
      name: "Dr. Girish Pasricha",
      designation: "Founder & CEO",
      image: founderImg,
      description: "A visionary entrepreneur passionate about merging Ayurvedic wisdom with modern science to revolutionize hair wellness across India and beyond.",
    }, 
    {
      name: "Dr.Mohit Bhatia",
      designation: "Co-Founder & COO",
      image: visionary1Img,
      description: "With over a decade of experience in beauty innovation, Dr.Mohit Bhatia drives product development and ensures every formula meets the highest standards of purity.",
    },
    {
      name: "Dr.Paras Bhatia",
      designation: "Co-Founder & COO",
      image: visionary2Img,
      description: "Leads Operations and Digital Marketing with a strong blend of tech and marketing expertise. Focused on streamlining processes and delivering impactful customer experiences.",
    },
    {
      name: "Harsimran Kaur",
      designation: "Co-Founder & CTO",
      image: visionary3Img,
      description: "Heads Content, Strategy, and Design with a unique blend of scientific insight and creative vision. Drives brand excellence by ensuring product efficacy and elevating visual identity across all portfolio brands.",
    },
    {
      name: "Megha Singh",
      designation: "Co-Founder & CMO",
      image: visionary4Img,
      description: "Oversees the company’s legal affairs with expertise in corporate law, contracts, and intellectual property. Brings strategic legal insight and a strong compliance focus to support business operations and mitigate risks.",
    },
     {
      name: "Shreya Sawhney",
      designation: "HEAD - DESIGN",
      image: visionary5Img,
      description: "Leads design with a strong foundation in branding and visual storytelling. She creates digital experiences that strengthen brand identity and drive engagement, blending creativity with insight to deliver impactful solutions.",
    },
  ];

  const advisors = [
    {
      name: "Dr. Rajit Jhingan",
      designation: "",
      image: advisor1Img,
      description: "An Interventional Pain Specialist and CIPS-certified expert, he is the Founder and Director of Pain Medics, Chandigarh’s pioneering pain clinic.",
    },
    {
      name: "Dr. Amit Jarewal",
      designation: "",
      image: advisor2Img,
      description: "A clinical cosmetologist and industry leader, actively advancing innovative healthcare solutions while supporting the growth of key biotech and wellness brands globally.",
    },
    {
      name: "Dr. Amol Sehgal",
      designation: "",
      image: advisor3Img,
      description: "A veteran in patient safety and pharmacovigilance with 17+ years of global experience, recognized by leading health authorities in India for his contributions.",
    },
  ];

  const awards = [
    { title: "Best Hair Wellness Brand", image: award1Img },
    { title: "Beauty Excellence Award", image: award2Img },
    { title: "Innovation in Ayurvedic Science", image: award3Img },
    { title: "Clean Beauty Pioneer", image: award4Img },
    { title: "Top Emerging D2C Brand", image: award5Img },
    { title: "Consumer Choice Award", image: award6Img },
  ];

  const collaborations = [
    { image: collab1Img, caption: "Pharma Ratna Universe Awards", tall: false },
    { image: collab2Img, caption: "Product Launch Event", tall: true },
    { image: collab3Img, caption: "R&D Lab Collaboration", tall: false },
    { image: collab4Img, caption: "Strategic Partnership Signing", tall: true },
    { image: collab5Img, caption: "Industry Conference Panel", tall: false },
    { image: collab6Img, caption: "Botanical Sourcing Partners", tall: true },
  ];

  return (
    <main className="pt-24">
      <section className="section-padding bg-cream-dark text-center">
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-4">
            About Thrixmate
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Premium clinical hair wellness, crafted for those who refuse to compromise on quality.
          </p>
        </ScrollReveal>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={founderThoughtImg} alt="Founder in lab" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              </div>
              <div>
                <Quote size={48} className="text-primary/30 mb-4" />
                <blockquote className="font-heading text-2xl md:text-3xl text-secondary leading-snug mb-6 italic">
                  "We didn't start Thrixmate to sell products. We started it to solve a problem — greying hair treated with harmful chemicals. Nature already had the answer; we just needed science to unlock it."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img src={founderImg} alt="Dr. Girish Pasricha" className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                  <div>
                    <p className="font-heading font-bold text-secondary">Dr. Girish Pasricha</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO, Thrixmate</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet Our Visionaries */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Leadership</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">Meet Our Visionaries</h2>
              <p className="text-muted-foreground max-w-md mx-auto">The minds behind the mission — driven by passion, powered by purpose.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {visionaries.map((v, i) => (
              <ScrollReveal key={v.name} delay={i * 150}>
                <div className="glass-card rounded-2xl overflow-hidden hover-lift gold-border-glow transition-all duration-500 group">
                  <div className="relative h-72 overflow-hidden">
                    <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <h3 className="font-heading text-xl font-bold text-primary-foreground">{v.name}</h3>
                      <p className="text-sm text-primary-foreground/80">{v.designation}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Expert Panel</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">Board of Advisors</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Guided by world-class dermatologists, scientists, and Ayurveda practitioners.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 120}>
                <div className="glass-card rounded-2xl p-6 text-center hover-lift gold-border-glow transition-all duration-500 group">
                  <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-[3px] border-primary/40 group-hover:border-primary transition-colors duration-500">
                    <img src={a.image} alt={a.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-secondary mb-1">{a.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{a.designation}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards — Image + Name */}
      <section className="section-padding bg-secondary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Recognition</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Awards & Achievements</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                Awards are not just milestones but the proof of our dedication, innovation, and relentless pursuit of excellence.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {awards.map((award, i) => (
              <ScrollReveal key={award.title} delay={i * 80}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 border border-primary/20 group-hover:border-primary/60 transition-all duration-500 group-hover:shadow-[0_0_20px_-5px_hsl(var(--gold)/0.4)]">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-heading text-sm font-semibold text-primary-foreground/90 leading-tight">{award.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations — Masonry Gallery */}
      <section className="section-padding bg-cream-dark">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Together We Grow</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">Collaborations</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Building meaningful partnerships with industry leaders, research institutions, and sustainability advocates.
              </p>
            </div>
          </ScrollReveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {collaborations.map((c, i) => (
              <ScrollReveal key={c.caption} delay={i * 100}>
                <div className="break-inside-avoid rounded-2xl overflow-hidden group relative">
                  <img
                    src={c.image}
                    alt={c.caption}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${c.tall ? "h-80" : "h-56"}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <p className="font-heading text-primary-foreground font-semibold text-lg">{c.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
