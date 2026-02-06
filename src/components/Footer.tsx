export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-display font-bold text-3xl mb-6">
                            THESIS <span className="text-tennis">TENNIS</span>
                        </h2>
                        <p className="text-gray-400 max-w-sm mb-8 break-keep">
                            테시스 테니스는 모든 레벨의 플레이어들이 테니스를 배우고, 성장하고, 즐길 수 있는 최고의 환경을 제공하는 프리미엄 실내 테니스 시설입니다.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tennis hover:text-forest transition-colors cursor-pointer">IG</div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tennis hover:text-forest transition-colors cursor-pointer">YT</div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tennis hover:text-forest transition-colors cursor-pointer">FB</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-tennis">MENU</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">아카데미 소개</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">프로그램</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">시설 안내</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">코치진</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">상담 문의</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-tennis">CONTACT</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>02-1234-5678</li>
                            <li>info@thesistennis.com</li>
                            <li>서울시 강남구 테니스로 123</li>
                            <li className="pt-4">
                                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">운영 시간</span>
                                평일: 06:00 - 23:00<br />
                                주말: 08:00 - 22:00
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 THESIS TENNIS. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">개인정보처리방침</a>
                        <a href="#" className="hover:text-white">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
