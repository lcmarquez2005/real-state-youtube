import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data';
import Link from 'next/link';

export function Footer() {
    return (
        <div className="px-4 py-8 bg-black/90 text-white md:py-40 md:px-36">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-[1fr,1fr,1fr,_400px]">
                {dataFooter.map(({id, links}) => (
                    <div key={id}>
                        {links.map(({id, name, link}) => (
                            <div key={id} className="mb-2">
                                <Link key={id} href={link} className="block mb-5">{name}</Link>
                            </div>
                        ))}
                        
                    </div>
                ))}
                <div className="md:text-right">
                    <h4 className="mb-6 text-xl font-semibold">
                        Strociak.com
                    </h4>
                    <p>Av. Constitucion</p>
                    <p>Pachuca de Soto</p>
                    <p>Hidalgo, México</p>
                    <div className="flex gap-4 mt-5 md:justify-end">
                        <LiaYoutube className="text-3xl cursor-pointer" href='#' />
                        <LiaInstagram className="text-3xl cursor-pointer" href='#' />
                        <LiaLinkedinIn className="text-3xl cursor-pointer" href='#' />
                        <LiaPinterestP className="text-3xl cursor-pointer" href='#' />
                    </div>
                </div>
            </div>
        </div>

    )
}
