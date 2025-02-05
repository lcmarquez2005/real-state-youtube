import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-3 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrLocation />
            <div>
                <p>Localización</p>
                <p className='text-xs'>Selecciona tu Localización</p>
                {isOpen ? (
                    <GrFormUp />

                ) : (
                    <GrFormDown />
                )}
            </div>



            {isOpen && (
                <div className="absolute top-[70%] w-full bg-white rounded-lg z-50 shadow-light w-[230px] left-0">
                    <div className="p-4">
                        <p>Pachuca</p>
                        <p>Mineral de la Reforma</p>
                        <p>Real del Monte</p>
                    </div>
                </div>
            )}
        </div>
    )
}
