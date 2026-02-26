import { Link } from "react-router-dom";
import logoImg from "@/assets/home/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col">
                      <img src={logoImg} alt="Thrixmate Logo" className="py-4" width={200} />
                    </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Premium clinical hair care designed to strengthen roots, support scalp health, and enhance naturally darker, fuller-looking hair.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase mb-4 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase mb-4 text-gold">Categories</h4>
            <div className="flex flex-col gap-2">
              {["Keratin Range", "Anti-Graying Range", "Champi Oil", "Wooden Comb"].map((cat) => (
                <span key={cat} className="text-sm text-secondary-foreground/70">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase mb-4 text-gold">Get In Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
              <span>thrixmate@gmail.com</span>
              <span>+91-9154391543</span>
              <span>C-8/9, Krishna Nagar, Delhi - 110051</span>
              <a
                href="https://thrixmate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Thrixmate
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Thrixmate. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            Powered by{" "}
            <a href="https://physiovits.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
              Sciwell
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
