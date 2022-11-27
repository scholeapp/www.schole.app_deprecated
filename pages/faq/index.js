import Image from "next/image";
import Head from "next/head";
import { Footer } from "/components/Footer.tsx";
import { SeoTag } from "/components/SeoTag.tsx";
import { AppBar } from "/components/AppBar.tsx";

const QA = () => (
  <div className="bg-emerald-50 py-20">
    <div className="max-w-2xl mx-auto px-4 md:px-0">
      <p className="mySectionTytle">Q&A</p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        よくあるご質問
      </p>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 my-4">
        <div className="my-2 flex items-center font-bold">
          <div className="ml-2 text-cyan-500 mr-2 text-2xl">Q.</div>
          <div className="text-lg text-gray-700">
            プログラミングスクールは全部同じではないの？
          </div>
        </div>
        <hr />
        <p className="my-1">
          プログラミングスクールには、それぞれ違いがあります。ご自身にあったところを選ぶことが大事です。Scholeの特徴は、最初から
          <strong>テキスト・プログラミング</strong>
          に取り組む点です。また、パソコンやタブレットがあれば、
          <strong>ご自宅でも学習が進められます</strong>
          。対面もしくはオンラインでのサポートを実施しています。
        </p>
        <div className="bg-sky-100 py-2 font-bold pl-2 text-cyan-900 my-2">
          プログラミングの種類の違い
        </div>
        <div className="grid sm:grid-cols-2 gap-1">
          <div>
            <p className="my-1 text-cyan-800 font-bold">
              ビジュアル・プログラミング
            </p>
            <p>
              子ども向けの、教育目的で開発されたもの。ブロックを動かすだけで簡単なプログラムを作ることができます。できあがるものは、子供の興味をひくような、ゲームなどの視覚的に訴えるものが多いのですが、
              <strong>実際に仕事に役立つような実務的なものは作れない</strong>
              という特徴もあります。ほとんどの子ども向けプログラミングスクールは、ビジュアルプログラミング教材を用いています。
            </p>
          </div>
          <div className="my-2">
            <Image
              src="/visual.png"
              width={300}
              height={150}
              objectFit="contain"
            />
          </div>
          <div id="text-programming" className="pt-14 -mt-14">
            <p className="my-1 text-cyan-800 font-bold">
              テキスト・プログラミング
            </p>
            <p>
              実際にソフトウェアエンジニアが人工知能開発や、WEB開発に用いているものです。
              <strong>
                世の中のほぼ全てのソフトウェアやシステムは、このテキストプログラミングで書かれています。
              </strong>
              プログラミングスクールによっては、ビジュアルプログラミングの次の段階にテキストプログラミングを用意しているところもあります。
            </p>
          </div>
          <div className="my-2">
            <Image
              src="/text.png"
              width={300}
              height={150}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="bg-sky-100 py-2 font-bold pl-2 text-cyan-900 my-2">
          学習の進め方の違い
        </div>
        <div className="grid sm:grid-cols-2 gap-1">
          <div>
            <p className="my-1 text-cyan-800 font-bold">スクール型</p>
            <p>
              値段は高くなってしまいますが、子どもたちは決まった時間に確実に取り組むことができます。また、そのときに分からないところを先生に聞くこともできますが、先生が必ずしもプログラミングに習熟しているとも限らないことがあります。特にビジュアルプログラミングについては、エンジニア経験のある先生が教えてくれることは少ないです。
              値段は、月4回で1万円〜3万円。コロナの影響で、最近はオンライン型のスクールもあります。対面型の教室については、都市圏には多くあります。
            </p>
          </div>
          <div className="my-2">
            <Image
              src="/school.jpeg"
              width={300}
              height={150}
              objectFit="contain"
            />
          </div>
          <div className="mt-4">
            <p className="my-1 text-cyan-800 font-bold">自宅学習型</p>
            <p>
              値段が比較的安いものが多く、子どもが自分のペースで進めることができます。そのため、子どもによっては、スクールの何倍も速く身に付けることもあります。子どもが習慣的に取り組むようにさせることは、スクール型に比べて課題となります。保護者の方にとっては、送迎が不要になるというメリットや、他の習い事の時間と被らないというメリットがあります。
            </p>
          </div>
          <div className="my-2">
            <Image
              src="/home.jpeg"
              width={300}
              height={150}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 mt-4">
        <div className="my-2 flex items-center font-bold">
          <div className="ml-2 text-cyan-500 mr-2 text-2xl">Q.</div>
          <div className="text-lg text-gray-700">
            テキストプログラミングは子どもには早すぎないの？
          </div>
        </div>
        <hr />
        <p className="my-1">
          <strong>そのようなことはありません。</strong>
          世界には、テキストプログラミングを学んでいる小学生がたくさんいます。
        </p>
        <div className="grid gap-1">
          <div className="my-2">
            <Image
              src="/world.png"
              width={300}
              height={150}
              objectFit="contain"
            />
          </div>
          <p>
            多くのプログラミングスクールでは、小・中学生の生徒には、一般的な（テキスト）プログラミングが難しすぎると考えています。なぜなら、子どもはまだタイピングができないうえ、日本の学習指導要領では「プログラミング」ではなく「プログラミング的思考」を身につけることを目標にしているからでもあります。また、そもそもテキストプログラミングを教えられる人材が不足しているというのも理由にあります。しかし、世界に目を向けると、
            <strong>
              日本は必ずしもプログラミング教育の先進国ではありません
            </strong>
            。<br />
            <br />
            現在、<strong>アメリカの50%以上の小学校</strong>
            に導入されているkodable（画像）は、4-7歳でビジュアル・プログラミングを卒業し、
            <strong>7-10歳はテキストプログラミング</strong>（Javascript, Swift,
            およびオブジェクト指向型言語）を学びます。
            <br />
            <br />
            また、<strong>中国</strong>
            はSTEM教育を推進し、AI人材の育成に力を入れています。近年、情報技術の学習開始学年が、小学2年生から小学1年生に引き下げられました。一部の省（浙江省や山东省）では、
            <strong>小学校でテキストプログラミング（Python）</strong>
            が教えられていて、AIの理解や活用について学んでいます。
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function Faq() {
  return (
    <>
      <Head>
        <SeoTag />
      </Head>
      <AppBar />
      <main>
        <QA />
      </main>
      <Footer />
    </>
  );
}
