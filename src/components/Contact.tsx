import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, User } from 'lucide-react';

export default function Contact() {
    // 폼 입력값 상태 관리 (이름, 전화번호, 이메일, 메시지)
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    // 폼 제출 핸들러
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 실제 구현 시 여기서 API 호출 등을 수행
        console.log('Form submitted:', formState);
        alert('상담 신청이 접수되었습니다. 곧 연락드리겠습니다.');
    };

    // 입력 필드 변경 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="py-24 bg-forest-dark text-white" id="contact">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h3 className="text-tennis font-bold tracking-widest mb-2">CONTACT US</h3>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            1:1 상담 문의
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed break-keep">
                            전문 코치진과의 심층 상담을 통해 <br />
                            당신에게 가장 적합한 프로그램을 제안해 드립니다. <br />
                            궁금한 점이 있으시다면 언제든 문의해주세요.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-tennis">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">전화 문의</p>
                                    <p className="text-xl font-bold">02-1234-5678</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-tennis">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">이메일 문의</p>
                                    <p className="text-xl font-bold">info@thesistennis.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 bg-white/5 p-8 md:p-10 rounded-xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">이름</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-tennis focus:ring-1 focus:ring-tennis transition-all"
                                        placeholder="홍길동"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">연락처</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-tennis focus:ring-1 focus:ring-tennis transition-all"
                                        placeholder="010-1234-5678"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">이메일 (선택)</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-tennis focus:ring-1 focus:ring-tennis transition-all"
                                        placeholder="example@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">문의 내용</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-tennis focus:ring-1 focus:ring-tennis transition-all"
                                    placeholder="궁금한 사항을 자유롭게 남겨주세요."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-tennis text-forest font-bold py-4 rounded-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                상담 신청하기 <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
