import { RiSearch2Line } from 'react-icons/ri';


export function SearchButton() {
    return (
        <div className="gap-2 border-[1px] rounded-lg px-12 py-2 bg-secondary flex items-center text-white justify-center">
            <RiSearch2Line className="text-2xl" />
        </div>
    )
}