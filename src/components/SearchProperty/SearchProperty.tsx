import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-3 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrHome />
            <div>
                <p>Propiedad</p>
                <p className='text-xs'>Selecciona el tipo de Propiedad</p>
                {isOpen ? (
                    <GrFormUp />

                ) : (
                    <GrFormDown />
                )}
            </div>



            {isOpen && (
                <div className="absolute top-[70%] w-full bg-white rounded-lg z-50 shadow-light w-[230px] left-0">
                    <div className="p-4">
                        <p>Casa</p>
                        <p>Chalet</p>
                        <p>Departamento</p>
                    </div>
                </div>
            )}
        </div>
        )
}