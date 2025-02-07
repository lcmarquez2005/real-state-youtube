import Image from 'next/image';
import Link from 'next/link';

export function Error404() {
    return (
        <div className="flex flex-col text-center items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800">404 - Página no encontrada</h1>
            <h2 className="text-3xl mb-5">AY! no encontre la pagina que estas buscando</h2>
            <Image src="/assets/404-not-found.jpg" alt='Not Found' width={600} height={450} className='rounded-lg shadow-light'/>
            <div className="text-center mt-5">
                <Link href="/" className='px-3 py-2 bg-secondary text-white rounded-lg'>
                    Regresar al inicio
                </Link>
            </div>
        </div>
    )
}
