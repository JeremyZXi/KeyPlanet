import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center">
          <Image
              src="/ocean-bg.jpg"
              alt="Ocean Background"
              fill
              className="object-cover z-0"
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">海洋学生组织</h1>
            <p className="text-xl mb-8">致力于海洋保护与研究的学生社团</p>
            <Link
                href="/about"
                className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              了解更多
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">海洋研究</h3>
              <p>参与海洋生态系统研究项目</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">环保行动</h3>
              <p>组织海滩清理等环保活动</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">教育推广</h3>
              <p>开展海洋科普教育活动</p>
            </div>
          </div>
        </section>
      </main>
  )
}
