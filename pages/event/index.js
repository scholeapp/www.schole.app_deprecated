import Link from "next/link";
import Head from "next/head";
import { Footer } from "/components/Footer.tsx";
import { SeoTag } from "/components/SeoTag.tsx";
import { AppBar } from "/components/AppBar.tsx";

const Article = () => (
  <div className="py-20 bg-amber-100">
    <div className="max-w-2xl mx-auto px-4 md:px-0">
      <p className="mySectionTytle">Event</p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        これまでのイベント
      </p>
      <p className="text-center mb-80">
        これまで実施したイベントについては、
        <a
          target="_blank"
          href="https://note.com/schole_pg"
          rel="noopener noreferrer"
          className="underline text-cyan-700 font-bold"
        >
          こちら
        </a>
        に掲載しております。
        <br />
        ぜひご覧ください。
      </p>
    </div>
  </div>
);

export default function Event() {
  return (
    <>
      <Head>
        <SeoTag />
      </Head>
      <AppBar />
      <main>
        <Article />
      </main>
      <Footer />
    </>
  );
}
