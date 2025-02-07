import { SearchLocation } from "../SearchLocation" ;
import { SearchPriceRange } from "../SearchPriceRange" ;
import { SearchProperty } from "../SearchProperty" ;
import { SearchButton } from "../SearchButton" ;
import { Transition } from "../Transition" ;


export function FloatedSearch() {
    return (

        <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 w-[80%] lg:w-[60%] mx-auto">

            <div className="flex  flex-col justify-between gap-4 py-4 px-3 bg-white rounded-md md:flex rounded-md md:flex-row backdrop-blur shadow-light font-sans">
                <SearchLocation />
                <SearchProperty />
                <SearchPriceRange />
                <SearchButton />
            </div>
        
        </Transition>
    )
}
