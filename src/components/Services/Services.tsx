"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
            <div className="max-w-xl mb-7">
                <h4 className="text-secondary">Servicios</h4>
                <h2 className="my-4 text-3xl font-semibold">Promociona tu vivienda para alquilarla o venderla</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit animi blanditiis officia explicabo alias quam totam, quae vel recusandae cumque, architecto amet voluptates dolorum dignissimos eveniet deleniti. Ipsa, amet.</p>
            </div>
            <div className="felx items-center justify-center">
                <Slider />
                
            </div>
        </Transition>
    )
}
