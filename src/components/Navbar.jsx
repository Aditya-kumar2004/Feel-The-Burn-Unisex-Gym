import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;
  return (<motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
    <div className="container-gym">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Logo className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (<a key={link.name} href={link.href} className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300">
            {link.name}
          </a>))}

          {/* Theme Toggle Desktop */}
          <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#pricing" className="btn-primary text-sm">
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme} className="text-foreground p-2">
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden pb-6">
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (<a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-body text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 py-2">
            {link.name}
          </a>))}
          <a href="#pricing" className="btn-primary text-sm text-center mt-4">
            Join Now
          </a>
        </div>
      </motion.div>)}
    </div>
  </motion.nav>);
};
export default Navbar;
