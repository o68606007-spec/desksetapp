import Image from 'next/image';
import { getHomeContentImage } from "../../lib/GetHomeContentImage"

export function HomeContent() {
    const homeImage = getHomeContentImage();
    return (
        <>
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* 左：説明カード */}
                <div className="md:w-1/2 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">
                            理想のデスク環境を見つけよう
                        </h2>

                        <p className="text-gray-600 leading-7 text-sm">
                            予算・スペース・用途から、<br />
                            あなたに合ったデスクセットを提案します。
                        </p>
                    </div>
                </div>

                {/* 右：画像 */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={homeImage}
                        alt="deskset"
                        width={400}
                        height={300}
                        className="w-full max-w-xl rounded-xl shadow-lg"
                    />
                </div>

            </div>
            <section className="max-w-5xl mx-auto text-center py-10 px-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    こんな人におすすめ
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="text-3xl mb-3">👨‍💻</div>
                        <h3 className="font-bold text-lg mb-2">
                            エンジニア
                        </h3>
                        <p className="text-gray-600 text-sm">
                            長時間の作業でも<br />
                            快適に集中できる環境へ
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="text-3xl mb-3">🎨</div>
                        <h3 className="font-bold text-lg mb-2">
                            デザイナー
                        </h3>
                        <p className="text-gray-600 text-sm">
                            クリエイティブを広げる<br />
                            作業スペースを実現
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="text-3xl mb-3">🎮</div>
                        <h3 className="font-bold text-lg mb-2">
                            ゲーマー
                        </h3>
                        <p className="text-gray-600 text-sm">
                            快適で没入できる<br />
                            ゲーミング環境を構築
                        </p>
                    </div>

                </div>

            </section>
            
        </>
    )
}