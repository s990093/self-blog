import React from "react";

export default function Home() {
  return (
    <div className="bg-navyBlue min-h-screen text-babyBlue p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">我的自我介紹</h1>

        <div className="bg-blueGrotto p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">關於我</h2>
          <p className="text-lg">
            我是一名熱衷於開發的軟體工程師，擅長使用 Next.js、React 和 Tailwind
            CSS。 我喜歡探索新技術並應用在實際專案中，不斷挑戰自我。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-blueGreen p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">個人專案 1</h3>
            <p className="text-lg">
              這是我的第一個專案。這個專案使用了最新的技術，包含 Next.js 和
              Tailwind CSS。
            </p>
            <a
              href="#"
              className="text-navyBlue underline hover:text-babyBlue mt-4 inline-block"
            >
              查看詳情
            </a>
          </div>

          <div className="bg-blueGreen p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">個人專案 2</h3>
            <p className="text-lg">
              這是我的第二個專案，專注於使用 TypeScript 和 React 進行開發。
            </p>
            <a
              href="#"
              className="text-navyBlue underline hover:text-babyBlue mt-4 inline-block"
            >
              查看詳情
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
