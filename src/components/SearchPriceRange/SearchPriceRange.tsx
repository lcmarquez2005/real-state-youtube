import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-3 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrTag />
            <div>
                <p>Presupuesto</p>
                <p className='text-xs'>Selecciona tu Presupuesto</p>
                {isOpen ? (
                    <GrFormUp />

                ) : (
                    <GrFormDown />
                )}
            </div>



            {isOpen && (
                <div className="absolute top-[70%] w-full bg-white rounded-lg z-50 shadow-light w-[230px] left-0">
                    <div className="p-4">
                        <p>Cualquier Rango</p>
                        <p>200.000 - 500.000</p>
                        <p>500.000 - 1.000.000</p>
                        <p>1.000.000 - 2.500.000</p>
                        <p>2.500.000 - Más</p>
                    </div>
                </div>
            )}
        </div>
    )
}
