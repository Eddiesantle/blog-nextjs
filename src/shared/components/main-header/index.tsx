import Image from "next/image";
import { Text } from "thon-ui";
import minhaImagem from "./assets/Face-perfil.png";

export default function MainHeader() {
  return (
    <header
      className={`lg:h-screen
      pt-8 pb-6 px-7 lg:pt-0 lg:pb-0
    flex flex-col justify-center items-center  
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
      <div className="w-full lg:w-[20rem] mt-6 lg:mt-12">
        <Text as="p" variant="sm" className="text-gray-500 italic">
          Fala mané eu sou a melhor do mundo e vou ensinar minhas manhas
        </Text>
        <Text as="p" variant="sm" className="text-gray-500 italic mt-2">
          Pode me chamar de mita!
        </Text>
      </div>
    </header>
  );
}
