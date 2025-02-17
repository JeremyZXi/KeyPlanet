import Image from 'next/image'
const teamMembers = [
    {
        name: "王教授",
        role: "指导老师",
        image: "/team/professor.jpg",
        description: "海洋生物学专家，从事海洋研究20年"
    },
    {
        name: "李明",
        role: "主席",
        image: "/team/president.jpg",
        description: "海洋科学专业大四学生"
    },
    // ... 可以添加更多成员
]

export default function About() {
    return (
        <main className="min-h-screen py-12 px-4">

            {/* 使命愿景部分 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[400px]">
                        <Image
                            src="/about/mission.jpg"
                            alt="Our Mission"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                        <p className="text-gray-600 mb-6">
                            作为一个致力于海洋保护的学生组织，我们的使命是通过研究、教育和行动来保护海洋生态系统，
                            提高公众对海洋保护的认识，并培养下一代海洋保护者。
                        </p>

                        <h2 className="text-2xl font-semibold mb-4">Vision</h2>
                        <p className="text-gray-600">
                            我们期望建立一个更加可持续的海洋未来，通过科研创新和环保行动，
                            促进海洋生态系统的健康发展，实现人与海洋的和谐共处。
                        </p>
                    </div>
                </div>
            </section>

            {/* 历史发展部分 */}
            <section className="max-w-6xl mx-auto mb-16 bg-blue-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-8">发展历程</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-24 font-bold">2020年</div>
                        <div>组织成立，开展首次海滩清理活动</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 font-bold">2021年</div>
                        <div>启动珊瑚礁保护研究项目</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 font-bold">2022年</div>
                        <div>获得最佳学生环保组织奖</div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-24 font-bold">2023年</div>
                        <div>成功举办首届海洋科学研讨会</div>
                    </div>
                </div>
            </section>

            {/* 核心团队部分 */}
            <section className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Executive Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-blue-600 mb-2">{member.role}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 加入我们部分 */}
            <section className="max-w-6xl mx-auto mt-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Contect us</h2>
                <p className="text-gray-600 mb-8">
                    我们欢迎所有对海洋保护感兴趣的同学加入我们的团队！
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                    申请加入
                </button>
            </section>
        </main>
    )
}
