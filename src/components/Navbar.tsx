import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '아카데미 소개', href: '#' },
        { name: '레슨 프로그램', href: '#' },
        { name: '스크린 테니스', href: '#' },
        { name: '커뮤니티', href: '#' },
    ];

    return (
        <nav
            className={cn(
                'fixed w-full z-50 transition-all duration-300',
                isScrolled ? 'bg-forest/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="font-display font-bold text-2xl tracking-tighter text-white">
                    THESIS <span className="text-tennis">TENNIS</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-sm font-medium hover:text-tennis transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-tennis text-forest font-bold px-6 py-2 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95">
                        1:1 상담문의
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-forest p-6 flex flex-col space-y-4 md:hidden shadow-xl border-t border-forest-light">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-medium hover:text-tennis"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-tennis text-forest font-bold px-6 py-3 rounded-md w-full mt-4">
                        1:1 상담문의
                    </button>
                </div>
            )}
        </nav>
    );
}
