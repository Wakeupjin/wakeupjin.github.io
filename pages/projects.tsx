import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <Layout 
      title="Projects - 이강진"
      description="미믹 프랜차이즈와 토스페이먼츠에서 진행한 프로젝트들을 소개합니다."
    >
      {/* 준비중 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">준비중입니다</h2>
            <p className="text-gray-600 mb-6">
              프로젝트 포트폴리오를 준비하고 있습니다.<br />
              미믹이라는 서비스와 토스페이먼츠 프로젝트를 곧 공유할 예정입니다.
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

      {/* 기본 레이아웃 */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
          <p className="text-xl text-gray-600">
            곧 만나볼 수 있습니다! 🚀
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default ProjectsPage;
