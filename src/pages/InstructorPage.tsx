import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 더미 강사 데이터
const instructors = [
    {
        name: '김철수',
        position: 'Head Coach',
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        career: [
            'USPTA P1 Certified Professional',
            '선수 출신 (전국대회 입상 다수)',
            '테니스 지도 경력 10년',
            '전 국가대표 상비군 코치'
        ],
        philosophy: '기본기에 충실하되, 각자의 개성을 살린 플레이를 만들어드립니다.'
    },
    {
        name: '이영희',
        position: 'Senior Coach',
        image: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        career: [
            'ITF Level 2 Coach',
            '생활체육지도자 1급',
            '유소년 테니스 전문 지도',
            '다수 동호인 대회 우승 지도'
        ],
        philosophy: '즐겁게 배우는 테니스가 가장 빨리 느는 테니스입니다.'
    },
    {
        name: '박민준',
        position: 'Pro Coach',
        image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        career: [
            'KTA 공인 심판',
            '엘리트 선수 출신',
            '실전 전술 및 게임 운영 전문',
            '초보자 맞춤형 레슨 전문'
        ],
        philosophy: '정확한 분석과 피드백으로 최단 기간 실력 향상을 약속합니다.'
    }
];

export default function InstructorPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Page Header */}
            <section className="bg-forest-dark pt-64 pb-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-5xl font-bold mb-4"
                    >
                        INSTRUCTORS
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        최고의 실력과 티칭 노하우를 겸비한<br />
                        랠리 테니스 스튜디오의 전문 코치진을 소개합니다.
                    </p>
                </div>
            </section>

            {/* Instructors List */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid gap-16">
                        {instructors.map((coach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                            >
                                <div className="lg:w-1/3 w-full">
                                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group">
                                        <img
                                            src={coach.image}
                                            alt={coach.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <p className="text-tennis font-medium mb-1">{coach.position}</p>
                                            <h3 className="text-3xl font-display font-bold">{coach.name} 코치</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 w-full">
                                    <h3 className="text-3xl font-bold text-dark mb-6">
                                        "{coach.philosophy}"
                                    </h3>

                                    <div className="mb-8">
                                        <h4 className="text-forest font-bold text-lg mb-4 border-b border-gray-200 pb-2 inline-block">CAREER & CERTIFICATION</h4>
                                        <ul className="space-y-3">
                                            {coach.career.map((item, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700 text-lg">
                                                    <span className="w-2 h-2 bg-tennis rounded-full mr-3"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-display text-3xl font-bold text-dark mb-8">
                        저희와 함께 테니스의 즐거움을 느껴보세요
                    </h2>
                    <a href="/contact" className="inline-flex items-center justify-center border-2 border-dark text-dark font-bold px-8 py-3 rounded-full hover:bg-dark hover:text-white transition-all">
                        상담 예약하기
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
