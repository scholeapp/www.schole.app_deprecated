import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "/components/Footer.tsx";
import { SeoTag } from "/components/SeoTag.tsx";
import { AppBar } from "/components/AppBar.tsx";

const Hero = () => (
  <div className="pt-8">
    <h2 className="text-3xl font-bold text-center tracking-wide text-cyan-900 px-0.5 leading-snug">
      本格的なプログラミングを
      <br />
      すべての子どもたちに
    </h2>
    <h3 className="text-lg text-center text-cyan-700 mt-4 mx-10 font-bold">
      Schole（スコレ）は、本格的なプログラミングを学ぶための小中学生向け学習サービスです
    </h3>
    <lottie-player
      src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
      background="transparent"
      loop
      autoplay
      class="mx-auto w-80 h-80"
    ></lottie-player>
    <div>
      <Link href="#contact" className="myBtn bg-pink-300">
        体験してみる
      </Link>
    </div>
  </div>
);

const Vision = () => (
  <div className="bg-gray-100 pt-8 mt-8 pb-16">
    <div className="myContainer">
      <p className="mySectionTytle">VISION</p>
      <p className="mt-5 text-xl text-center font-bold">
        私たちはすべての子どもたちに本格的なプログラミング教育を届けます。
      </p>
      <p className="py-4">
        　今の時代、プログラミングはパソコンとインターネット環境さえあればいくらでも学ぶことができます。子どもの頃から本格的なプログラミングを習得することで、中学生や高校生でも新しいソフトウェアやサービスを開発することが可能です。これからの将来、プログラミングは生き抜くために非常に有用なスキルとなります。プログラミングは働く場所にあまりとらわれず、一つの証明しやすい能力にもなる点から、特に女性にとっては出産や子育てと両立しやすいという良さもあります。
        <br />
        <br />
        　しかし、プログラミングについて全く知識が無い状態から一人で学習を始めるのは、少し大変です。特に子ども向けの本格的なプログラミング教材はほとんどありません。最近は、子ども向けプログラミングスクールもありますが、そのほとんどが子供用に作られた簡単なプログラミング教材を扱っていて、また、授業料は高額であることが多いため、すべての家庭が払えるわけではありません。Scholeは本格的なプログラミングをできるだけ低価格で提供することで、プログラミングの教育格差をなくし、全ての子どもがプログラミングを学ぶ最初の一歩を踏み出すサポートをします。
      </p>
      <Link href="/team" className="myBtn bg-[#9ACBD1]">
        理念をもっと知る
      </Link>
    </div>
  </div>
);

const Service = () => (
  <div id="service" className="bg-amber-50">
    <div className="myContainer pt-14 -mt-14">
      <p className="mySectionTytle">SERVICE</p>
      <p className="mt-5 text-xl text-center font-bold text-cyan-900">
        Scholeでは、小中学生から科学研究や人工知能に使われている本格的なプログラミングが学べます。
      </p>
      <div className="grid grid-cols-2 my-6 gap-3">
        <Image
          src="/schole0.png"
          width={300}
          height={150}
          objectFit="contain"
          className="px-3 pt-3 shadow-md bg-amber-300 rounded-3xl"
        />
        <Image
          src="/schole1.png"
          width={300}
          height={150}
          objectFit="contain"
          className="px-3 pt-3 shadow-md bg-amber-300 rounded-3xl"
        />
      </div>
      <div className="grid grid-cols-2 my-6 gap-3">
        <Image
          src="/schole2.png"
          width={300}
          height={150}
          objectFit="contain"
          className="px-3 pt-3 shadow-md bg-amber-300 rounded-3xl"
        />
        <Image
          src="/schole3.png"
          width={300}
          height={150}
          objectFit="contain"
          className="px-3 pt-3 shadow-md bg-amber-300 rounded-3xl"
        />
      </div>
      <p className="py-4">
        Scholeは子どもの家庭学習向けに開発されており、パソコンやタブレットがあればどこでも学習できます。また、初心者でも学びやすい上に、
        <strong>本格的・実用的</strong>なプログラミングを扱います。現在は、
        <strong>科学研究や人工知能に使われているPython (パイソン）</strong>
        という言語を学ぶコースがあります。通常、Pythonを学ぼうとすると、環境構築といって様々な準備が必要で大変なのですが、Scholeはインストール不要で、
        <strong>すぐに学習を始めることができます</strong>。
      </p>
    </div>
  </div>
);

const Why = () => (
  <div className="pb-4 bg-sky-100">
    <div className="myContainer">
      <p className="mySectionTytle">Why Schole?</p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        Scholeの魅力
      </p>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 my-4">
        <div className="my-2 flex items-center font-bold">
          <div className="py-1 px-2 bg-sky-100 text-cyan-700 mr-2 flex-none">
            1
          </div>
          <div className="text-lg text-gray-700">本格的なプログラミング</div>
        </div>
        <hr />
        <p className="my-1">
          Scholeは本格的な<strong>テキストプログラミング</strong>
          が学べるサービスです（
          <Link href="#text-programming" className="underline text-cyan-800">
            テキストプログラミングとは？
          </Link>
          ）。多くの場合、小中学生が最初からテキストプログラミングを始めるのは難しいのではないかと考えられていますが、少しずつレベルアップしていけば小中学生でも十分に理解することは可能です。初学者だからといって、
          <strong>
            子供向けに開発された簡単なプログラミングを長期間学んでも、実際のプログラミングとは何なのかを知ることはできません
          </strong>
          。Scholeでは、全くの初心者の方でも、プログラマーやエンジニア実際に書いているプログラミングを最初から学ぶことができます。
        </p>
      </div>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 my-4">
        <div className="my-2 flex items-center font-bold">
          <div className="py-1 px-2 bg-sky-100 text-cyan-700 mr-2 flex-none">
            2
          </div>
          <div className="text-lg text-gray-700">学校教育では学べない内容</div>
        </div>
        <hr />
        <p className="my-1">
          学校教育ではビジュアルプログラミングを通して「プログラミング的思考」を学びますが、Scholeでは
          <strong>「プログラミングを書くこと」</strong>
          を最初から学びます。プログラミング的思考を学ぶだけでは、実用的・実務的なプログラムを書けるようにはなりません。実際にプログラミングが書けるようになるには、
          <strong>
            プログラムをたくさん書いて試行錯誤しながら動かしてみること
          </strong>
          が一番です。
        </p>
      </div>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 my-4">
        <div className="my-2 flex items-center font-bold">
          <div className="py-1 px-2 bg-sky-100 text-cyan-700 mr-2 flex-none">
            3
          </div>
          <div className="text-lg text-gray-700">
            現役のソフトウェアエンジニアが教えてくれる
          </div>
        </div>
        <hr />
        <p className="my-1">
          Scholeでは、<strong>現役のソフトウェアエンジニア</strong>
          たちが学習をサポートします。ビジュアルプログラミングは、プログラマーやエンジニアとしての経験が無くても教えることが可能ですが、テキストプログラミングは、
          <strong>ある程度経験が無いと教えることは難しい</strong>
          です。ゲーム作りから業務向けのプログラミングまで、現役ソフトウェアエンジニアならではの、
          <strong>様々な質問にお答え</strong>することができます。
        </p>
      </div>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 my-4">
        <div className="my-2 flex items-center font-bold">
          <div className="py-1 px-2 bg-sky-100 text-cyan-700 mr-2 flex-none">
            4
          </div>
          <div className="text-lg text-gray-700">
            子どもの論理的思考力を鍛え、情報教育必修化時代に備える
          </div>
        </div>
        <hr />
        <p className="my-1">
          プログラミングは、「あいまいさ」が入り込まない分野です。すべてロジックにもとづいて実行されます。Scholeは、子どもたちにとって
          <strong>抽象化・論理化された考え方</strong>
          を育むのに非常に適した教材であり、算数や数学などの他の分野にも必ず役立ちます。本格的なプログラミングを学ぶことで、
          <strong>情報教育必修化に十分に備える</strong>ことができます。
        </p>
      </div>
      <div className="bg-white px-4 py-4 outline outline-1 outline-slate-200 my-4">
        <div className="my-2 flex items-center font-bold">
          <div className="py-1 px-2 bg-sky-100 text-cyan-700 mr-2 flex-none">
            5
          </div>
          <div className="text-lg text-gray-700">
            実用的・実務的なプログラミングが学べる
          </div>
        </div>
        <hr />
        <p className="my-1">
          多くの子ども向けビジュアルプログラミング教材は、ゲーム作りやロボット開発が題材となっています。しかし、ゲームやロボットには興味がない子供や、
          <strong>
            ビジュアルプログラミングではできない、実用的・実務的なプログラミング
          </strong>
          をやってみたいと考えている子供もいます。Scholeは
          <strong>
            子ども一人一人の興味に合わせて目標を定め、学習計画を立て、
          </strong>
          実用的・実務的なプログラミングを学ぶことができます。最終的には、将来生きていくスキルとして使えるようになります。
        </p>
      </div>
      <Link href="#contact" className="myBtn bg-[#9ACBD1]">
        体験する
      </Link>
    </div>
  </div>
);

const Voices = () => (
  <div className="pb-2">
    <div className="myContainer">
      <p className="mySectionTytle">VOICES</p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        体験された方々の声
      </p>
      <div className="grid grid-cols-2">
        <div className="balloon1-left">
          <p>
            難しかったけどおもしろかった！スクラッチ（ビジュアル・プログラミング）より楽しい！
            <br />
            <br />
            小学4年生・男の子
          </p>
        </div>
        <div className="balloon1-left">
          <p>
            おもしろかった。2進数については少し難しかったけれど、理解できた。パソコンやプログラミングについて、もっといろいろと学びたいと思った。パソコンが使いこなせる人はかっこいい。
            <br />
            <br />
            中学3年生・女の子
          </p>
        </div>
        <div className="balloon1-left">
          <p>
            意外と子どもでもできるんだと思いました！子どもが楽しんで取り組んでくれてよかったです。
            <br />
            <br />
            小学5年生・男の子の保護者
          </p>
        </div>
        <div className="balloon1-left">
          <p>
            すごくおもしろかった！画像がパソコンでどうやって処理されているのかがわかった。まだまだいろいろ知りたいし、いろいろ作ってみたい。
            <br />
            <br />
            中学3年生・女の子
          </p>
        </div>
        <div className="balloon1-left">
          <p>
            ビジュアルプログラミングは簡単すぎたので、プログラミングの本を買いましたが、一人でやるには難しすぎました。（スコレは、）自分の子どもにとってちょうど良い難易度でした！
            <br />
            <br />
            中学6年生・男の子の保護者
          </p>
        </div>
        <div className="balloon1-left">
          <p>
            楽しかった。もっといろいろ作ってみたいと思った。自分でも作れることに驚いた。
            <br />
            <br />
            中学2年生・女の子
          </p>
        </div>
      </div>
      <div>
        <Link
          href="#contact"
          className="block text-center cursor-pointer bg-pink-300 py-3 w-60 text-white rounded-xl mx-auto font-bold mt-4"
        >
          体験してみる
        </Link>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="bg-stone-100 pb-10 pt-16 -mt-16" id="contact">
    <div className="myContainer pt-20 -mt-20">
      <p className="mySectionTytle">CONTACT</p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        お問い合わせ
      </p>
      <div className="googleform-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf5388_07qd4OnYCaHx49WWgWI6xgrM8ju9Hel3p-JZXPI33w/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          読み込んでいます…
        </iframe>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Head>
        <SeoTag />
      </Head>
      <AppBar />
      <main>
        <Hero />
        <Vision />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 180"
          className="bg-amber-50"
        >
          <path
            fill="#f3f4f6"
            fill-opacity="1"
            d="M0,0L120,32C240,64,480,128,720,138.7C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <Service />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="bg-sky-100"
        >
          <path
            fill="#fefbeb"
            fill-opacity="1"
            d="M0,160L120,181.3C240,203,480,245,720,245.3C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <Why />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e0f2fe"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,240C480,267,600,277,720,256C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <Voices />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f5f5f4"
            fill-opacity="1"
            d="M0,128L60,160C120,192,240,256,360,250.7C480,245,600,171,720,138.7C840,107,960,117,1080,144C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
