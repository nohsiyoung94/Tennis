import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// lucide-react: 아이콘 라이브러리 사용

// clsx & tailwind-merge: 조건부 클래스 결합을 위한 유틸리티 함수
import { cn } from '../lib/utils';
// 이미지 import
import logoImg from '../image/흰배경.png';

export default function Navbar() {
    // 스크롤 상태 감지 (투명 -> 솔리드 배경 전환용)
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // 스크롤 이벤트 리스너: 50px 이상 스크롤 시 Navbar 스타일 변경
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '아카데미 소개', path: '/about' },
        { name: '레슨 프로그램', path: '/programs' },
        { name: '강사 소개', path: '/instructors' },
        { name: '위치 안내', path: '/location' },
        { name: '시설 안내', path: '/location' },
    ];


    return (
        <nav
            className={cn(
                'fixed w-full z-50 transition-all duration-300',
                isScrolled || location.pathname !== '/' ? 'bg-forest/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center rounded-lg overflow-hidden shrink-0"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <img
                        src={logoImg}
                        alt="RALLY TENNIS STUDIO"
                        className="h-16 md:h-36 w-auto object-contain"
                    />
                </Link>

                {/* Nav Links - 모바일에서도 동일하게 나열 */}
                <div className="bg-forest-dark pt-64 pb-20 text-white flex flex-wrap justify-center items-center gap-3 md:gap-8">

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-white text-xs md:text-sm font-medium hover:text-tennis transition-colors tracking-wide whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-tennis text-forest font-bold px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-base rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                        1:1 상담문의
                    </Link>

                </div>
            </div>
        </nav>
    );
}
