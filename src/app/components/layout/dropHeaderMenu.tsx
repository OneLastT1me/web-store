
import { UserPen, Bookmark, LogIn, Grid3x3 } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"

type Props = {
    isOpen: boolean
    onClose: () => void;
}

const DropHeaderMenu = ({isOpen, onClose}: Props) =>{
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const handlClikcOut = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                if (isOpen) onClose();
            }
        }

        document.addEventListener("mousedown", handlClikcOut)

        return () => {
            document.removeEventListener("mousedown", handlClikcOut)
        }
    },[isOpen, onClose])

    return(
        <div className="sm:relative" ref={menuRef}>
            {isOpen && ( 
                <div className="absolute border-1 rounded-md text-white bg-black right-0 sm:mt-3 mt-8  w-[100%] sm:w-auto" >
                    <Link href="/" onClick={() =>onClose()} className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <UserPen />
                        <span>Profile</span>
                    </Link>
                       <Link href="/" onClick={() =>onClose()} className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <Grid3x3 />
                        <span>Category</span>
                    </Link>
                    <Link href="/" onClick={() =>onClose()} className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <Bookmark />
                        <span>Favorite</span>
                    </Link>
                    <Link href="/" onClick={() =>onClose()}  className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <LogIn />
                        <span>Log In</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default DropHeaderMenu