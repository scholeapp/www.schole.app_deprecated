import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Footer } from "/components/Footer.tsx";
import { SeoTag } from "/components/SeoTag.tsx";
import { AppBar } from "/components/AppBar.tsx";

const Work = () => (
  <div className="py-20">
    <div className="max-w-2xl mx-auto px-4 md:px-0">
      <p className="mySectionTytle">Works</p>
      <p className="mt-2 text-xl text-center font-bold text-cyan-700 mb-6">
        みんなの作品
      </p>
      <p className="text-center mb-8">
        体験イベントで子供たちがつくった作品と、実際に書いたプログラムの一部を掲載しています。
      </p>
      <ul className="grid md:grid-cols-3 grid-cols-2 gap-6 text-center text-gray-700">
        <li>
          <Link href="https://bit.ly/3ztNW1L">
            <Image
              src="/1.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            英単語クイズ
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3U4QlrB">
            <Image
              src="/2.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            sana
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3VWg3zW">
            <Image
              src="/3.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            好きなお菓子
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3W4JXCq">
            <Image
              src="/4.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            カリー
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3VXaP75 ">
            <Image
              src="/5.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            My Page
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3PdHbGz">
            <Image
              src="/6.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            takumitv
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3nVBQrH">
            <Image
              src="/7.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            Dolphins
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3AT0FfZ">
            <Image
              src="/8.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            Rui（イタリア）
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3yoXvO5">
            <Image
              src="/9.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            れんのす（モリモリの森）
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3PhSSw7">
            <Image
              src="/10.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            やんす（地球の上）
          </Link>
        </li>
        <li>
          <Link href="https://bit.ly/3AC5qdn">
            <Image
              src="/11.png"
              width={300}
              height={150}
              objectFit="contain"
              className="shadow-md rounded-sm mb-0.5"
            />
            Nasubi
          </Link>
        </li>
      </ul>
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
        <Work />
      </main>
      <Footer />
    </>
  );
}
