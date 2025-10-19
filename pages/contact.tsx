import React, { useState } from 'react';
import Layout from '@/components/Layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 구현에서는 이메일 전송 로직 추가
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'wakeupjin@gmail.com',
      action: 'mailto:wakeupjin@gmail.com',
      isModal: false
    },
    {
      icon: '🏢',
      title: '모국어 습득 원리',
      description: '영어교육 방법론과 프랜차이즈 운영',
      action: '#',
      isModal: true
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: '프로필 보기',
      action: 'https://www.linkedin.com/in/kangjin-lee-241417258',
      isModal: false
    }
  ];

  return (
    <Layout 
      title="Contact - 이강진"
      description="영어교육과 관련된 문의는 언제든 연락주세요!"
    >
      {/* 준비중 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">준비중입니다</h2>
            <p className="text-gray-600 mb-6">
              모국어 습득 원리 관련 페이지를 준비중으로<br />
              영어교육 방법론과 프랜차이즈 운영 계획을 공유할 예정입니다.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="btn-primary"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact</h1>
            <p className="text-xl text-gray-600">
              영어교육, 주식투자 관련 문의나 협업 제안은 언제든 연락주세요!<br />
              <br />
              특히 영어교육 방법론이나 프랜차이즈 운영에 대한 상담이 필요하시면 언제든 연락주세요.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">메시지 보내기</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-4xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">메시지가 전송되었습니다!</h3>
                  <p className="text-green-700">빠른 시일 내에 답변드리겠습니다.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-green-600 hover:text-green-700 font-medium"
                  >
                    다른 메시지 보내기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="미믹"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mimic@mimic.ai"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      제목 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">주제를 선택해주세요</option>
                      <option value="education">영어교육 문의</option>
                      <option value="franchise">프랜차이즈 문의</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="메시지를 입력해주세요..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                    }`}
                  >
                    {isSubmitting ? '전송 중...' : '메시지 보내기'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">다른 연락 방법</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    onClick={() => method.isModal ? setShowModal(true) : null}
                    className={`flex items-center p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors group ${
                      method.isModal ? 'cursor-pointer' : ''
                    }`}
                  >
                    {!method.isModal && (
                      <a
                        href={method.action}
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center w-full"
                      >
                        <div className="text-3xl mr-4">{method.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                            {method.title}
                          </h3>
                          <p className="text-gray-600">{method.description}</p>
                        </div>
                        <svg 
                          className="w-5 h-5 ml-auto text-gray-400 group-hover:text-primary-600" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {method.isModal && (
                      <>
                        <div className="text-3xl mr-4">{method.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                            {method.title}
                          </h3>
                          <p className="text-gray-600">{method.description}</p>
                        </div>
                        <svg 
                          className="w-5 h-5 ml-auto text-gray-400 group-hover:text-primary-600" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">⏰ 응답 시간</h3>
                <p className="text-gray-600 text-sm">
                  일반적으로 24-48시간 내에 답변드립니다. 
                  급한 문의사항은 이메일로 연락해주세요.
                </p>
              </div>

              {/* FAQ */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">💡 자주 묻는 질문</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">어떤 분야 협업이 가능한가요?</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      영어교육, 프랜차이즈 운영, 주식 투자 관련 프로젝트에 관심이 많습니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">교육 상담도 가능한가요?</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      네! 영어교육 방법론이나 프랜차이즈에 대한 상담이 필요하시면 언제든 연락주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
