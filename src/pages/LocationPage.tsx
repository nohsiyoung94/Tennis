import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LocationPage() {
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
                        LOCATION
                    </motion.h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        랠리 테니스 스튜디오 오시는 길을 안내해드립니다.
                    </p>
                </div>
            </section>

            {/* Map & Info Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {/* 카카오맵/네이버지도 영역 (임시 이미지 또는 iframe 대체 가능) */}
                    <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-2xl mb-12 flex items-center justify-center shadow-inner">
                        <p className="text-gray-500 font-medium text-lg">
                            * 지도 API 연동 영역 (카카오맵 등) *<br />
                            서울시 강남구 테니스로 123, 1층
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                                    <MapPin className="text-forest" /> 주소
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    서울특별시 강남구 테니스로 123 (역삼동 123-45)<br />
                                    랠리 테니스 스튜디오 1층
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                                    <Phone className="text-forest" /> 연락처
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    02-1234-5678<br />
                                    info@thesistennis.com
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                                    <Clock className="text-forest" /> 운영 시간
                                </h3>
                                <div className="space-y-2 text-lg text-gray-700">
                                    <div className="flex justify-between max-w-xs border-b border-gray-100 pb-2">
                                        <span className="font-medium">평일</span>
                                        <span>06:00 - 22:00</span>
                                    </div>
                                    <div className="flex justify-between max-w-xs border-b border-gray-100 pb-2">
                                        <span className="font-medium">주말/공휴일</span>
                                        <span>08:00 - 20:00</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">* 매월 첫째 주 월요일 휴관</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                                    <Car className="text-forest" /> 주차 안내
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    건물 내 지하 주차장 이용 가능 (2시간 무료)<br />
                                    만차 시 인근 공영주차장을 이용해주세요.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
