import { Link } from "react-router-dom"
import menu from './assets/menu.svg'
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const MobileFn = () => {
        setIsOpen(!isOpen)
    }
    if (isOpen) {
        return (
            <Nav />
            // <div onClick={tempfn}>
            //     <ul class="nav-links mobilenav">
            //         <li><Link className="nav-link" to="/">Home</Link></li>
            //         <li><Link className="nav-link" to="/about">About</Link></li>
            //         <li><Link className="nav-link" to="/projects">Projects</Link></li>
            //         <li><Link className="nav-link" to="/education">Education</Link></li>
            //     </ul>
            // </div>
        )
    }

    return (
        <>
            <nav>
                <div class="nav-bar">
                    <span class="sufiyan"><Link className="nav-link" to="/">sufiyan</Link></span>
                    <div class="menu">
                        <ul class="nav-links">
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/about">About</Link></li>
                            <li><Link className="nav-link" to="/projects">Projects</Link></li>
                            <li><Link className="nav-link" to="/education">Education</Link></li>
                        </ul>
                    </div>
                    <div class="mobile-menu" onClick={MobileFn}>
                        <img src={menu} alt="" />
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;