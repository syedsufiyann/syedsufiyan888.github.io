import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open);
    }
    return (
        <div className="w-100 h-auto bg-blue-950 sticky top-0">
            <nav className="max-w-[1300px] mx-auto bg-blue-950 text-gray-100 flex items-center justify-between p-2 px-6 md:px-12 ">
                <p className="font-bold text-xl cursor-pointer"><Link onClick={() => setOpen(false)} to="/">sufiyan</Link></p>
                <ul className="items-center gap-8 hidden md:flex">
                    <li className="cursor-pointer text-lg hover:text-gray-500"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer text-lg hover:text-gray-500"><Link to="/projects">Projects</Link></li>
                    <li className="cursor-pointer text-lg hover:text-gray-500"><Link to="/about">About</Link></li>
                    
                </ul>
                <div onClick={handleMenu} className="text-2xl cursor-pointer md:hidden">
                    {open ? <IoMdClose /> : <RiMenu3Fill />}
                </div>
                <ul className={`items-center gap-8 absolute  left-0 bg-blue-800/[.92]  w-screen h-auto flex flex-col top-14 py-12 md:hidden ease-in duration-300 z-10 ${open ? 'top-10' : 'top-[-450px]'}`}>
                    <li className="cursor-pointer text-lg active:text-gray-500 text-xl"><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
                    <li className="cursor-pointer text-lg active:text-gray-500 text-xl"><Link onClick={() => setOpen(false)} to="/projects">Projects</Link></li>
                    <li className="cursor-pointer text-lg active:text-gray-500 text-xl"><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}
export default Nav;