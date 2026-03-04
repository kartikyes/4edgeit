import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import MegaMenu from '../ui/MegaMenu';
import Button from '../ui/Button';

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="30" fontFamily="Arial Black, sans-serif" fontWeight="800" fontSize="28" fill="#00B4D8">4E</text>
        <rect x="28" y="2" width="10" height="10" rx="2" fill="#2D9B4E" transform="rotate(5 33 7)" />
      </svg>
      <span className={`text-lg font-bold font-heading ${light ? 'text-white' : 'text-dark-text'}`}>
        4Edge <span className="font-normal">IT Solutions</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-md'
            : 'bg-white/0'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) =>
                item.children ? (
                  <MegaMenu key={item.label} label={item.label} items={item.children} />
                ) : (
                  <Link
                    key={item.label}
                    to={item.href || '/'}
                    className="text-sm font-medium text-dark-text hover:text-primary transition-colors nav-link-underline"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="primary" size="sm" href="/company#contact">
                Request Demo
              </Button>
              <Button variant="outline" size="sm" href="/company#contact">
                Talk to an Expert
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-dark-text hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 lg:hidden"
          >
            <div className="px-6 pb-8">
              <nav className="space-y-1">
                {navigationItems.map((item) =>
                  item.children ? (
                    <MegaMenu key={item.label} label={item.label} items={item.children} mobile />
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href || '/'}
                      className="block py-3 text-lg font-semibold text-dark-text"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="mt-8 space-y-3">
                <Button variant="primary" size="lg" href="/company#contact" className="w-full">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg" href="/company#contact" className="w-full">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
