import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const navigationItems = [{
    name: 'Beranda',
    href: '/'
  }, {
    name: 'Layanan',
    href: '#services'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Testimoni',
    href: '#testimonials'
  }, {
    name: 'Tentang Kami',
    href: '/about'
  }, {
    name: 'Blog',
    href: '/blog'
  }];
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      // Scroll to section on same page
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Navigate to home then scroll
        window.location.href = '/' + href;
      }
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4">
        

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col space-y-3">
              {navigationItems.map(item => item.href.startsWith('#') ? <button key={item.name} onClick={() => handleNavClick(item.href)} className="text-left text-foreground hover:text-primary transition-colors duration-200">
                    {item.name}
                  </button> : <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors duration-200">
                    {item.name}
                  </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;