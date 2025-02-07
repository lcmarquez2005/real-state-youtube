"use client"

import Link from "next/link"
import Image from "next/image"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import {LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from  "react-icons/lia" ;
import { formatPrice } from "@/utils/formatPrice"
import { useState } from "react"

export function Properties() {
    const [counterHouses, setCounterHouses] = useState(4)
    const dataFilteredHouses = dataProperties.slice(0, counterHouses)

    const loadMoreHouses = () => {
        setCounterHouses(counterHouses + 8)
    }
    return (
        <Transition className="px-4 my-8 md:py-32 md:px-40">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dataFilteredHouses.map(({ id, location, price, bedrooms, bathroom, image, star, meters, description }) => (
                    <Link key={id} href={`/properties/${id}`}
                        className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer">
                        <div className="" key={id}>
                            <div className="relative -z-[1]">
                                <div className="relative">
                                    <div className="absolute flex items-center px-3 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                                        <LiaStarSolid className="text-lg text-yellow-500" />
                                        <span className="ml-1 font-semibold">{star}</span>

                                    </div>
                                    <Image src={`/assets/properties/${image}`} alt="Location" width={150} height={300} 
                                    className="object-cover w-full max-h-full h-[200px] rounded-t-2xl" />
                                    <div className="px-3 py-5">
                                        <p className="text-secondary">{location}</p>
                                        <p className="font-semibold">{formatPrice(price)}</p>
                                        <div className="gap-4 mt-2 xl:flex">
                                            <div className="flex items-center justify-center px-2 py-1 my-2 rounded-lg bg-slate-300/30">
                                                <LiaBedSolid />
                                                <span className="ml-2">{bedrooms}</span>
                                            </div>
                                            <div className="flex items-center justify-center px-2 py-1 my-2 rounded-lg bg-slate-300/30">
                                                <LiaBathSolid />
                                                <span className="ml-2">{bathroom}</span>
                                            </div>
                                            <div className="flex items-center justify-center px-2 py-1 my-2 rounded-lg bg-slate-300/30">
                                                <LiaRulerCombinedSolid />
                                                <span className="ml-2">{meters}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <img src={`public/assets/properties/${image}`} alt={description} className="w-full h-32 object-cover" /> */}
                            {/* <div className="p-2">
                                <h3 className="text-lg font-semibold">{location}</h3>
                                <p className="text-sm text-gray-600">{price}</p>
                                <p className="text-sm text-gray-600">{bedroom} Bed, {bathroom} Bath</p>
                                <p className="text-sm text-gray-600">{meters} sq meters</p>
                                <p className="text-sm text-yellow-500">{star} Stars</p>
                            </div> */}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center my-7">

                {counterHouses < dataProperties.length && (

                <button className="px-6 py-6 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
                    onClick={loadMoreHouses}
                >Ver más Viviendas</button>
                )}
            </div>
        </Transition>

    )
}
