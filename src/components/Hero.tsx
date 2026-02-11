// Framer Motion: 애니메이션 라이브러리
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-forest-dark">
            {/* 배경 이미지 설정 및 오버레이 적용 */}
            <div className="absolute inset-0 z-0">
                {/* 그라데이션 오버레이로 텍스트 가독성 확보 */}
                <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 to-forest/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=2070&auto=format&fit=crop"
                    alt="Tennis Court"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 메인 컨텐츠 영역 */}
            <div className="relative z-20 container mx-auto px-6 text-white pt-20">
                {/* 텍스트 등장 애니메이션 (투명도 0->1, Y축 이동) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h2 className="text-tennis font-display font-medium text-xl md:text-2xl mb-4 tracking-widest">
                        RALLY TENNIS STUDIO
                    </h2>
                    <h1 className="font-display font-bold text-6xl md:text-8xl leading-none mb-8">
                        도심 속 <br />
                        프리미엄 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tennis to-white">테니스 라운지</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed break-keep">
                        최고의 코칭 스태프와 쾌적한 실내 코트에서 즐기는 테니스.<br className="hidden md:block" />
                        실력 향상은 물론, 테니스의 즐거움까지 경험해보세요.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-tennis text-forest px-8 py-4 rounded-none font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all">
                            상담 신청하기 <ArrowRight size={20} />
                        </button>
                        <button className="border border-white text-white px-8 py-4 rounded-none font-bold text-lg hover:bg-white/10 transition-all">
                            프로그램 보기
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* 하단 스크롤 유도 인디케이터 애니메이션 */}
            <motion.div
                animate={{ y: [0, 10, 0] }} // 위아래 반복 움직임
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-[1px] h-16 bg-white/30 mx-auto mb-2"></div>
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
}
