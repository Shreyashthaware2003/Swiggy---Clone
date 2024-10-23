import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false)
    }

    const links = [
        {
            icon: <IoSearch />,
            name: "Search"
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: <MdHelpOutline />,
            name: "Help"
        },
        {
            icon: <IoPerson />,
            name: "SignIn"
        },
        {
            icon: <FaShoppingCart />,
            name: "Cart"
        }
    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",zIndex:9999999999999999
            }}>
                <div onClick={(e) => { e.stopPropagation() }} className='w-[500px] bg-white h-full absolute duration-[600ms]' style={{
                    left: toggle ? '0%' : '-100%'
                }}>

                </div>

            </div>
            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center' >
                    <div className='w-[60px] mr-4'>
                        <img src="images/logo.png" alt="" className='w-full' />
                    </div>
                    <div className=''>
                        <span className='font-bold  border-b-[3px] border-black'>Nagpur</span>, Maharashtra, India  <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[30px] cursor-pointer text-[#fc8019] font-bold' />
                    </div>

                    <nav className='hidden md:flex list-none gap-10  ml-auto font-semibold text-[19px]'>
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                                        {link.icon}
                                        {link.name}
                                        <sup className='text-[#fc8019]'>{link.sup}</sup>
                                    </li>
                                }
                            )
                        }
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header
