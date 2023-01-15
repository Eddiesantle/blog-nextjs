import Image from "next/image";
import minhaImagem from './assets/Face-perfil.png'

export default function MainHeader() {
    return <header className="w-full lg:w-[26.5rem] xl:w-[34.25rem] flex items-center h-screen bg-gray-100">
        <Image src={minhaImagem} alt="Foto lucas almeida" className="w-[5.5rem] h-[5.5rem]"/>
        Lais a melhor do mundo!
    </header>
}