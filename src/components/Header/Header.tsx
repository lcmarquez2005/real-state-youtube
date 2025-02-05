"use client"

import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import { Navbar } from '../Navbar'
import { useState } from 'react'

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    console.log(openMobileMenu)

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between  md:px-0">
                <Link  href="/">
                    <h1 className="font-medium">Strociak Grupo Inmobiliario</h1>
                </Link>
                <CiMenuFries className='block text-2xl md:hidden' onClick={() => setOpenMobileMenu(!openMobileMenu)} />

                <Navbar openMobileMenu={openMobileMenu} />

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel:1234567890" className="flex items-center gap-4 cursor-pointer">
                        <BsTelephone  />
                        <span className="hidden md:block">34 8555 55</span>
                    </Link>
                    <Link href="/login" className='px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black'>Iniciar Sesión</Link>
                </div>
            </div>
        </div>
    )
}
