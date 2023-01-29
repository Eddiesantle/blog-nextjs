import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "thon-ui";
import minhaImagem from "./assets/Face-perfil.png";

function NavigatorItem({href, children}: {href: string, children: React.ReactNode}){
  return <Link href={href} className="py-2 px-3 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out"><Text variant="sm" className="font-bold ">{children}</Text></Link>
}

export default function MainHeader() {
  return (
    <header
      className={`lg:h-screen relative lg:fixed lg:w-[34.25rem]
      left-0 top-0
      pt-8  pb-6 px-7 lg:pb-0 lg:pt-0
    flex flex-col items-center justify-center
    bg-gray-100`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={minhaImagem}
          alt="Foto lucas almeida"
          className="w-[5.5rem] h-[5.5rem] rounded-full"
        />
        <div >
          <Text as="h1" variant="3xl" className="text-gray-800">
            Lais Pereira
          </Text>
          <Text as="div" variant="xs" className="text-gray-500 italic -mt-0.5">
            Generalista gene@lastRadius
          </Text>
        </div>
      </div>
      <div className="w-[18rem] lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-500 italic">
          Fala mané eu sou a melhor do mundo e vou ensinar minhas manhas
        </Text>
        <Text as="p" variant="sm" className="text-gray-500 italic mt-2">
          Pode me chamar de mita!
        </Text>
      </div>
      <nav className="flex gap-2 w-[18rem] lg:w-[20rem] mt-6 ">
        <NavigatorItem href="/">Home</NavigatorItem>
        <NavigatorItem href="/blog">Blog</NavigatorItem>
        
      </nav>
    </header>
  );
}
