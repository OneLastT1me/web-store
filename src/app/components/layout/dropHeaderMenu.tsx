'use client'

import { UserPen, Bookmark, LogIn, Grid3x3, Menu } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from 'react'


const DropHeaderMenu = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    const open = () => setIsOpen(prev => !prev)
    const close = () => setIsOpen(false)

    useEffect(()=> {
        const handlClikcOut = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                close()
            }
        }

        document.addEventListener("mousedown", handlClikcOut)

        return () => {
            document.removeEventListener("mousedown", handlClikcOut)
        }
    },[])

    return(
        <div className="sm:relative" ref={menuRef}>
            <button onClick={isOpen ? close : open} className="cursor-pointer">
                <Menu className=" w-7 h-7 text-white"/>
            </button>
            {isOpen && ( 
                <div className="absolute border-1 rounded-md text-white bg-black right-0 sm:mt-3 mt-8  w-[100%] sm:w-auto" >
                    <Link href="/" onClick={close} className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <UserPen />
                        <span>Profile</span>
                    </Link>
                       <Link href="/" onClick={close} className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <Grid3x3 />
                        <span>Category</span>
                    </Link>
                    <Link href="/" onClick={close} className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <Bookmark />
                        <span>Favorite</span>
                    </Link>
                    <Link href="/" onClick={close}  className="flex space-x-2 w-full text-left px-4 py-2 hover:bg-gray-600 transition cursor-pointer">
                        <LogIn />
                        <span>Log In</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default DropHeaderMenu