import { motion } from 'framer-motion';
import { Target, Users, Zap, Trophy, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const programs = [
    {
        icon: <Target className="w-8 h-8 text-tennis" />,
        title: '1:1 개인 레슨',
        description: '개인의 목표와 실력에 맞춘 맞춤형 코칭으로, 빠르고 정확하게 기술을 습득할 수 있습니다.',
        details: ['자세 교정 및 기본기 집중 훈련', '개인별 맞춤 커리큘럼 제공', '비디오 분석 피드백']
    },
    {
        icon: <Users className="w-8 h-8 text-tennis" />,
        title: '그룹 레슨',
        description: '소수 정예 그룹 수업을 통해 함께 배우는 즐거움과 건전한 경쟁을 경험하세요.',
        details: ['2~4인 소수 정예 그룹', '파트너와 함께하는 실전 훈련', '다양한 게임 상황 연습']
    },
    {
        icon: <Zap className="w-8 h-8 text-tennis" />,
        title: '키즈 테니스',
        description: '아이들의 눈높이에 맞춘 특수 장비와 프로그램으로 쉽고 재미있게 테니스를 시작합니다.',
        details: ['성장기 어린이를 위한 맞춤 프로그램', '매직 테니스 장비 사용', '흥미 유발 게임형 수업']
    },
    {
        icon: <Trophy className="w-8 h-8 text-tennis" />,
        title: '스크린 테니스',
        description: '최첨단 시뮬레이터를 활용하여 혼자서도 실전 같은 연습과 데이터 분석이 가능합니다.',
        details: ['실시간 구질 및 데이터 분석', '다양한 연습 모드 지원', '24시간 자유로운 이용']
    },
];

export default function ProgramPage() {
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
                        LESSON PROGRAM
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        체계적이고 전문적인 커리큘럼으로<br />
                        테니스의 즐거움과 실력 향상을 동시에 경험하세요.
                    </p>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-forest"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 bg-white rounded-full text-forest group-hover:bg-tennis group-hover:text-forest-dark transition-colors shadow-sm">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-dark group-hover:text-forest">
                                        {program.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 mb-8 leading-relaxed break-keep">
                                    {program.description}
                                </p>
                                <ul className="space-y-3">
                                    {program.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-tennis flex-shrink-0 mt-0.5" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-forest text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                        지금 바로 시작하세요
                    </h2>
                    <p className="text-white/80 mb-8 text-lg">
                        전문 코치진과 함께하는 맞춤형 레슨으로 여러분의 테니스 라이프를 시작해보세요.
                    </p>
                    <a href="/contact" className="inline-block bg-tennis text-forest-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg">
                        레슨 상담 신청하기
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
