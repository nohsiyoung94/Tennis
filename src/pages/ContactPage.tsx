import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
    // 폼 입력값 상태 관리
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        alert('상담 신청이 접수되었습니다. 곧 연락드리겠습니다.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

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
                        CONTACT US
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        궁금한 점이 있으신가요? 언제든 친절하게 답변해 드립니다.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

                        {/* Info Card */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-dark mb-6">Contact Info</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center text-forest flex-shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">전화 문의</p>
                                            <p className="text-lg font-bold text-dark">02-1234-5678</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center text-forest flex-shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">이메일 문의</p>
                                            <p className="text-lg font-bold text-dark break-all">info@thesistennis.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-forest p-8 rounded-2xl shadow-lg text-white text-center">
                                <h3 className="text-xl font-bold mb-4">운영 시간 안내</h3>
                                <p className="opacity-90 mb-2">평일: 06:00 - 22:00</p>
                                <p className="opacity-90">주말: 08:00 - 20:00</p>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-dark mb-2">1:1 상담 신청</h3>
                                <p className="text-gray-500 mb-8">
                                    양식을 작성해주시면 담당 코치가 확인 후 빠르게 연락드립니다.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-dark placeholder-gray-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                                                    placeholder="홍길동"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-dark placeholder-gray-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                                                    placeholder="010-1234-5678"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">이메일 (선택)</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-dark placeholder-gray-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all"
                                                placeholder="example@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용</label>
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-dark placeholder-gray-400 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all resize-none"
                                            placeholder="상담 받고 싶은 내용이나 궁금한 점을 적어주세요."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-forest text-white font-bold py-4 rounded-lg hover:bg-forest-dark transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-forest/20"
                                    >
                                        상담 신청하기 <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
