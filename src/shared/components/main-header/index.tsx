import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "thon-ui";
import minhaImagem from "./assets/Face-perfil.jpeg";

function NavigatorItem({href, children}: {href: string, children: React.ReactNode}){
  return <Link href={href} className="py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-300 transition duration-200 ease-in-out"><Text variant="sm" className="font-bold">{children}</Text></Link>
}

export default function MainHeader() {
  return (
    <header
      className={`lg:h-screen relative lg:fixed lg:w-[34.25rem]
      left-0 top-0
      pt-8  pb-6 px-7 lg:pb-0 lg:pt-0
    flex flex-col items-center justify-center
    bg-slate-900`}
    >
      <div className="flex items-center gap-3">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
        <Image
          src={minhaImagem}
          alt="Foto lucas almeida"
          className="object-cover object-center h-full w-full"
        />
        </div>
        
        <div >
          <Text as="h1" variant="3xl" className="text-sky-100">
            Wédley Santos
          </Text>
          <Text as="div" variant="xs" className="text-gray-100 italic -mt-0.5">
            Engenheiro de Computação <br />
            eng.wed@outlook.com
          </Text>
        </div>
      </div>
      <div className="w-[18rem] lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-100 italic">
        Fascinado por música, curioso e metódico por natureza, sou cristão, gosto de um bom café e como dizia Raul "eu prefiro ser, essa metamorfose ambulante".🎶💻
        </Text>
        <Text as="p" variant="sm" className="text-gray-100 italic mt-2">
          Pode me chamar de Eddie!
        </Text>
      </div>
      <nav className="flex gap-2 w-[18rem] lg:w-[20rem] mt-6 ">
        <NavigatorItem href="/">Home</NavigatorItem>
        <NavigatorItem href="/blog">Blog</NavigatorItem>
        
      </nav>
    </header>
  );
}
