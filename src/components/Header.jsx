

import logo from "../assets/logo.png";
import hambergMenu from "../assets/hamberg.png";
import x from "../assets/x.png";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = (
        <>
            <li><a href="/product">Product</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/resources">Resources</a></li>
        </>
    );
    const buttons = (
        <div className="flex flex-col md:flex-row gap-3 w-44
        " >
            <button className="  ">Log In</button>
            <button className="bg-primary text-white px-3 py-1 rounded-md">Sign Up</button>
        </div>
    );

    return (

        <nav className=" ">

            <div className="flex flex-col md:flex-row justify-between  pt-2  ">

                {/* logo */}
                <div className="flex items-center md:ml-16 ml-3 cursor-pointer">
                    <img src={logo} alt="Logo" />
                    <span className="font-bold text-2xl">Flex</span>
                </div>

                {/* hamburger menu */}
                <div className="absolute top-7 right-8 w-8 h-8 md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <img src={x} className="w-6" alt="Close" /> :
                            <img src={hambergMenu} className="" alt="Menu" />
                    }
                </div>

                {/* nav links section */}
                <div className={`md:-z-15 z-30  absolute top-16 md:top-7 bg-white md:bg-transparent p-8  md:p-0 w-full ${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center justify-center md:justify-around gap-1 md:gap-5 text-xl font-semibold md:text-slate-600`}>
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
                        {navLinks}
                    </ul>
                    {/* nav buttons for mobile devices */}
                    <div className="font-medium md:hidden flex md:flex-row text-xl  flex-col items-center gap-2">
                        {buttons}
                    </div>
                </div>

                {/* nav buttons */}

                <div className="font-medium hidden md:block text-xl me-2 md:me-5 mt-2">
                    {buttons}
                </div>

            </div>
        </nav >

    );
};

export default Header;
