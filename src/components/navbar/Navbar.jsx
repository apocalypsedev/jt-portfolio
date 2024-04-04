import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

function Navbar() {
    const navMenus = [
        {
            name: "Home",
            link : "/#home",
        },
        {
            name: "About",
            link : "/#about",
        },
        {
            name: "Services",
            link : "/#services",
        },
        {
            name: "Contact",
            link : "#",
        },
    ];
    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(()=>{
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");  
        }
    }, [theme])
  return (
    <>
        <nav className=' bg-secondary dark:bg-gray-900 dark:text-[aqua]'>
            <div className=' container flex justify-between items-center py-3 sm:py-0'>
                <h1 className=' text-3xl  dark:text-[aqua] text-primary font-bold'>JT-Portfolio</h1>
                <div className=' hidden sm:block'>
                    <ul className=' flex items-center gap-4'>
                        {
                            navMenus.map((item, index)=>(
                                <li key={index}>
                                    <a href={item.link}
                                       className='text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer'>{item.name}</a>
                                </li>
                            ))
                        }
                        {
                            theme === "dark" ? (
                                <BiSolidSun className='   text-2xl dark:text-[aqua]'
                                onClick={()=>setTheme("light")}/>                                
                            ) : 
                            (
                                    <BiSolidMoon className='   text-2xl cursor-pointer'
                                                 onClick={()=>setTheme("dark")}/>
                            )
                        }
                </ul>
                    
                </div>
                <div className='block sm:hidden'>
                    <div className=' flex items-center gap-4'>
                        {
                            theme === "dark" ? (
                                <BiSolidSun className='  text-2xl dark:text-[aqua]'
                                onClick={()=>setTheme("light")}/>                                
                            ) : 
                            (
                                    <BiSolidMoon className=' text-2xl cursor-pointer'
                                                 onClick={()=>setTheme("dark")}/>
                            )
                        }
                        <FiMenu className='text-2xl cursor-pointer '
                                onClick={toggleMenu}/>
                    </div>
                                {showMenu && (
                                    <div className=' dark:bg-gray-900 dark:text-[aqua] text-black fixed top-16 bg-white shadow-md rounded-b-xl z-10 py-10 left-0 right-0'>
                                            <ul className=' flex flex-col items-center gap-4'>
                                               { navMenus.map((data, index)=>(
                                                    <li key={index}>
                                                        <a href={data.link}
                                                           className=' text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer'>{data.name}</a>
                                                    </li>
                                               ))}
                                            </ul>
                                        </div>
                                    )
                                }
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar