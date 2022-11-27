import Image from "next/image";
import { Footer } from "/components/Footer.tsx";
import Head from "next/head";
import { SeoTag } from "/components/SeoTag.tsx";
import { AppBar } from "/components/AppBar.tsx";

const Member = () => (
  <div id="team" className="py-4 bg-sky-100">
    <div className="max-w-2xl mx-auto px-4 md:px-0">
      <p className="text-center text-cyan-400 text-4xl font-bold pt-12 tracking-wider">
        TEAM
      </p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        Scholeの運営者・講師
      </p>
      <div className="grid sm:grid-cols-3 gap-2">
        <div className="my-auto px-4 sm:w-full text-center">
          <Image
            src="/morisu.jpg"
            width={300}
            height={150}
            objectFit="contain"
            className="mx-auto w-1/2 sm:w-full"
          />
        </div>
        <div className="text-sm sm:col-span-2">
          <div className="text-lg my-2">岩藤エミ | Iwado Emi</div>
          <p>
            はじめまして。Schole (スコレ)の創業者です。
            東京大学で化学を、東京藝術大学でデザインを学んだあと、外資系ITでプログラミングやITシステムの経験を積みました。
            子どもでも、楽しく学ぶことができる本格的なプログラミング学習サービスがまだ世の中にはないという思いから、スコレを立ち上げました。
            スコレを通して、日本の、ひいては世界中の子どもたちが最高レベルのプログラミング教育に触れ、新しいプロダクトやサービスを作り上げるきっかけになればと思っています。
            <br />
            また、このScholeは、とくに女の子にも興味を持ってもらえるようにしたく、日々試行錯誤しています。今でも世の中のプログラミング教材の多くは、男の子が好みそうなデザインになっていると感じています。プログラミングスキルは、出産や育児のある女性にとってかなり有益なスキルになります。ぜひ、女の子も本格的なプログラミングをはじめてみてください！（もちろん男の子も大歓迎です！）
          </p>
        </div>
      </div>
      <hr className="my-7 border-2 border-blue-200 " />
      <div className="grid sm:grid-cols-3 gap-2">
        <div className="my-auto px-4 sm:w-full text-center sm:order-last">
          <Image
            src="/watanabe.jpg"
            width={300}
            height={150}
            objectFit="contain"
            className="mx-auto w-1/2 sm:w-full"
          />
        </div>
        <div className="text-sm sm:col-span-2">
          <div className="text-lg my-2">渡邊直樹 | Watanabe Naoki</div>
          <p>
            東京大学で物理学の学士、修士課程を終了後、日本IBMでソフトウェアエンジニアとして勤務。その後、数社のスタートアップを創業。プログラミングの勉強について小学生の頃から何度も挫折してきて、ちょうど教材に合うことができなかった思いから、スコレの立ち上げに参画。
          </p>
        </div>
      </div>
      <div
        id="vision"
        className="pt-14 mt-12 mx-1 bg-white border border-2 border-gray-300 shadow-sm px-6 md:px-12 pb-12 text-sm bg-cover bg-center bg-opacity-20"
        style={{
          backgroundImage: "url(/vision-bg.png)",
          backgroundColor: "rgba(255,255,255,0.7)",
          backgroundBlendMode: "lighten",
        }}
      >
        <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
          Scholeの思い
        </p>
        <p>
          　私たちがいま開発しているSchole（スコレ）は、創業者が子どものころに欲しかったものです。小学生の当時、プログラミングに興味はあったものの、どうやって始めたら良いのか分からず、かといって子ども向けのビジュアルプログラミングのようなものは、本物のプログラミングではない気がして、取り組む気にはなれませんでした。{" "}
          <br />
          　プログラミングは子どもでも理解ができ、楽しむことができるものです。しかし、小さい頃から本格的なプログラミングが学べる機会や環境はなかなかありません。スコレは、子どもたちに本格的なプログラミングに触れる機会を提供し、将来の可能性を最大限に広げるきっかけとなることを目指しています。
          <br />
          <br />
          　また、近年子ども向けのプログラミングスクールが増えてきたものの、まだ都心に集中しており、さらに学習塾に比べても費用が非常に高いものが多いです。そういった点で、情報学習は学習機会について格差が生じてしまっていると感じています。スコレを低価格でより多くのお子様に届けることで、この格差をなくしていきたいと思っています。
          <br />
          <br />
          　特に、創業者の岩藤はこれまで化学や情報科学を学んできましたが、理系分野には女性がとても少ないと常々感じていました。子ども向けプログラミング教材についても、ロボットや対戦ゲーム、女の子のアニメキャラクターが出てくるなど、どちらかといえば男の子の興味を引きやすいものが多く、女の子が自然と使いたくなるものは多くないと考えています。スコレは、女の子でも男の子でも楽しむことができ、なおかつ、教育的価値が高いサービスとなるよう、全力を尽くしています。
        </p>
      </div>
    </div>
  </div>
);

export default function Team() {
  return (
    <>
      <Head>
        <SeoTag />
      </Head>
      <AppBar />
      <main>
        <Member />
      </main>
      <Footer />
    </>
  );
}
