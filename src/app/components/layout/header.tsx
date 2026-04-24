'use client'

import { Search, Menu } from "lucide-react"
import DropHeaderMenu from "./dropHeaderMenu"
import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="bg-gradient-to-r from-black to-[#1e4d3a] py-6 w-full">
            <div className="flex justify-between max-w-screen-xl mx-auto px-4">
                <nav className="sm:flex space-x-6 hidden">
                    <h1 className="text-white text-4xl cursor-pointer sm:hidden lg:block">Web-Store</h1>
                    <ul className="flex items-center space-x-4  mt-[4px]">
                        <li><a href="/" className="text-white md:text-lg text-sm hover:text-[#1e4d3a] transition duration-300">Electronics</a></li>
                        <li><a href="/" className="text-white md:text-lg text-sm hover:text-[#2e4d3b] transition duration-300">Clothing</a></li>
                        <li><a href="/" className="text-white md:text-lg text-sm hover:text-[#2e4d3b] transition duration-300">Home & Garden</a></li>
                        <li><a href="/" className="text-white md:text-lg text-sm hover:text-[#2e4d3b] transition duration-300">Sport</a></li>
                    </ul>
                </nav>
                <nav className="flex space-x-3 mx-auto sm:mx-0 sm:w-auto w-full">
                    <div className="flex items-center relative w-full sm:w-auto">
                        <Search className="absolute left-3 w-4 h-4 text-gray-400"/>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-white w-full sm:w-auto"
                            />
                    </div>
                    <button onClick={() => setIsOpen(true)} className="cursor-pointer">
                        <Menu className=" w-7 h-7 text-white"/>
                        <DropHeaderMenu isOpen={isOpen} onClose={() => setIsOpen(prev => !prev)}/>
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Header