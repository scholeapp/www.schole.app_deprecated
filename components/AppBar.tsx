import Link from "next/link";
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

import MobileMenu from "./MobileMenu";

export function AppBar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  }
  const navs = [
    { href: "/", title: "ホーム", jpTitle: "ホーム" },
    { href: "/event", title: "イベント", jpTitle: "イベント" },
    { href: "/works", title: "作品", jpTitle: "作品" },
    { href: "/faq", title: "FAQ", jpTitle: "FAQ"},
    { href: "/team", title: "私たちについて", jpTitle: "私たちについて"},
    { href: "/#contact", title: "お問い合わせ", jpTitle: "お問い合わせ"},
  ]
  return (
    <>
      <div className="bg-white/90 py-2 w-full sticky top-0 shadow z-10 bavkdrop-blur">
        <header className="myContainer flex justify-between items-center">
          <h1 style={{ fontFamily: 'Fredoka One', color:"#8dc63f" }}  className="text-4xl"><Link href="/">Schole</Link></h1>
          <button
            className='inline-flex p-1 hover:bg-gray-100 sm:hidden outline-none rounded duration-200 mr-4'
            onClick={handleClick}
          >
            <Bars3Icon className="h-8 w-8 text-gray-500" />
          </button>
          {/* desktop menu */}
          <ul className="text-gray-500 mr-4 tracking-tighter  sm:inline-flex sm:ml-auto hidden sm:visible">
            {
              navs.map( nav => (
                <li key={nav.href} className="ml-4">
                  <Link href={`${nav.href}`}>
                    {nav.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </header>
      </div>
      <MobileMenu navs={navs} active={active} handleClick={handleClick}/>
    </>
  );
};