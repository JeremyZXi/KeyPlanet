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

        {/*Gallery*/}
        <section className="text-gray-600 body-font py-16 px-4">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"></img>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"></img>
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"></img>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"></img>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"></img>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"></img>
                </div>
              </div>
            </div>
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

        {/* Event section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -my-8">

              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a className="inline-flex items-center">
                      <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a className="inline-flex items-center">
                      <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a className="inline-flex items-center">
                      <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* 重复的博客卡片部分 */}
              {/* ... 其他两个博客卡片的代码 ... */}
            </div>
          </div>
        </section>

      </main>
  )
}
