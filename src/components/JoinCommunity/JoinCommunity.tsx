import { Transition } from "../Transition";
import { FaRegPaperPlane } from "react-icons/fa";

export function JoinCommunity() {
    return (

        <Transition className="grid items-center px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-4">
            <h3 className="max-w-lg text-4xl font-semibold text-white">
                Contactanos para enterarte de las últimas novedades en el mercado inmobiliario
            </h3>
            <button className="flex items-center justify-between py-5 text-white transition-all duration-100 bg-black rounded-lg px-7 m-fit hover:bg-black/70">
                <FaRegPaperPlane />
                <span className="ml-3">Contactanos</span>
            </button>
        </Transition>
    )
}
