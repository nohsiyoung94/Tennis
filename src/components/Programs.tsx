import { Zap, Users, Trophy, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
    {
        icon: <Target className="w-8 h-8 text-tennis" />,
        title: '1:1 개인 레슨',
        description: '개인의 목표와 실력에 맞춘 맞춤형 코칭으로, 빠르고 정확하게 기술을 습득할 수 있습니다.',
    },
    {
        icon: <Users className="w-8 h-8 text-tennis" />,
        title: '그룹 레슨',
        description: '소수 정예 그룹 수업을 통해 함께 배우는 즐거움과 건전한 경쟁을 경험하세요.',
    },
    {
        icon: <Zap className="w-8 h-8 text-tennis" />,
        title: '키즈 테니스',
        description: '아이들의 눈높이에 맞춘 특수 장비와 프로그램으로 쉽고 재미있게 테니스를 시작합니다.',
    },
    {
        icon: <Trophy className="w-8 h-8 text-tennis" />,
        title: '스크린 테니스',
        description: '최첨단 시뮬레이터를 활용하여 혼자서도 실전 같은 연습과 데이터 분석이 가능합니다.',
    },
];

export default function Programs() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h3 className="text-forest font-bold tracking-widest mb-2">OUR PROGRAMS</h3>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-dark break-keep">
                            실력 향상을 위한 <br />
                            <span className="text-forest-light">체계적인 커리큘럼</span>
                        </h2>
                    </div>
                    <button className="hidden md:block border-b-2 border-dark pb-1 text-dark font-bold hover:text-forest hover:border-forest transition-colors mt-8 md:mt-0">
                        프로그램 전체보기
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 border border-gray-100 bg-gray-50 hover:bg-forest hover:border-forest transition-all duration-300 rounded-none cursor-pointer"
                        >
                            <div className="mb-6 p-4 bg-white inline-block rounded-full group-hover:bg-tennis/20 group-hover:text-tennis transition-colors">
                                {program.icon}
                            </div>
                            <h3 className="font-display font-bold text-xl mb-4 text-dark group-hover:text-white">
                                {program.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 break-keep">
                                {program.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
