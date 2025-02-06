import { Transition } from "../Transition";
import Image from "next/image";

export function About() {
    return (
        <Transition className="grid px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 md:gap-4">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7">
                <h4 className="text-secondary">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Conoce nuestra historia y nuestro equipo</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit animi blanditiis officia explicabo alias quam totam, quae vel recusandae cumque, architecto amet voluptates dolorum dignissimos eveniet deleniti. Ipsa, amet.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar más</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/house.jpeg" alt="About" width={350} height={450} className="mx-auto h-auto" priority />
            </div>
        </Transition>
    )
}
