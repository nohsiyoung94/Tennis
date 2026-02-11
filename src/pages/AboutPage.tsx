import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Page Header */}
            <section className="bg-forest-dark pt-64 pb-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 50, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-5xl font-bold mb-4"
                    >
                        ACADEMY
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        랠리 테니스 스튜디오는 테니스를 사랑하는 모든 분들을 위해<br />
                        최고의 환경과 체계적인 교육을 제공합니다.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">


                        <div className="lg:w-3/5">

                            <h1 className="font-display text-10xl md:text-5xl font-bold text-dark mb-6 leading-tight break-keep">
                                <span className="text-forest text-10xl">RALLY TENNIS STUDIO</span>
                            </h1>


                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <div className="border-l-4 border-tennis pl-6 py-2">
                                        <h3 className="font-display text-2xl md:text-3xl font-bold text-dark leading-tight break-keep">
                                            <span className="text-forest block text-sm font-bold tracking-widest mb-2 uppercase">Philosophy</span>
                                            테니스의 본질인<br />
                                            <span className="text-forest">랠리에 집중하는</span> 스튜디오
                                        </h3>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed break-keep">
                                        <strong>
                                            안녕하세요,<br />
                                            <span className="text-forest">RALLY TENNIS STUDIO</span>입니다.<br />
                                            저희는 테니스의 가장 기본이자 핵심인 '랠리'를 통해<br />
                                            테니스의 진정한 즐거움을 찾아드리고자 합니다.<br /><br />
                                            한 번의 강한 샷보다 상대와 공을 주고받으며 이어지는 흐름,<br />
                                            실전에서 끊기지 않는 랠리를 만드는 것이
                                            <span className="text-forest-dark font-semibold"> 테니스 실력의 핵심</span>입니다.<br /><br />
                                            집중도 높은 실내 환경에서 개인의 레벨과 목적에 맞춘<br />
                                            체계적인 커리큘럼으로 레슨을 진행합니다.<br /><br />
                                            <p className="text-2xl font-display font-bold text-dark mb-2">
                                                "테니스를 더 쉽게, 더 오래."
                                            </p><br />
                                            랠리테니스스튜디오는 지속 가능한 테니스를 만들어갑니다.
                                        </strong>

                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
