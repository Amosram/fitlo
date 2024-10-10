import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";




const Navbar = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [menuBar, setMenuBar] = useState(false);
  return (
    <div>
        <header className='navbar hidden lg:flex items-center justify-between px-8 py-3 shadow-md bg-white text-slate-950 overflow-x-hidden'>
            <h1 className='text-xl font-bold'>fitlo.</h1>

            <ul className={`${searchBar === false ? "flex" : "hidden"} items-center gap-4 font-medium`}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    Programmes
                </li>
                <li>
                    Institutions
                </li>
                <li>
                    About
                </li>
                <li>
                    News
                </li>
            </ul>

            <div className='flex items-center gap-3'>
                <div className='flex items-center bg-gray-100 rounded-md px-2 text-slate-950 py-[3px] border shadow-sm transition-all duration-150'>
                    <input type="text" className={`${searchBar === false ? "hidden": "flex"} bg-gray-100 outline-none py-[3px] text-sm font-medium w-[50px] md:w-[300px]`} placeholder='e.g University of Nairobi' />
                    <div onClick={()=>setSearchBar(!searchBar)}>
                        {
                            searchBar === false ?
                            <IoSearch  className='text-xl cursor-pointer my-[2px]'/>
                            :
                            <IoClose className='text-2xl cursor-pointer my-[2px]'/>
                        }
                    </div>               
                </div>
                <button className='bg-gray-900 text-gray-100 px-3 rounded-xl py-[5px] hover:shadow-sm transition-all duration-150 hover:bg-orange-900'>Contact Us</button>
            </div>
        </header>

        <div className='lg:hidden flex items-center justify-between px-8 py-3 shadow-md bg-white text-slate-950 relative z-10'>
            <h1 className='text-xl font-bold'>fitlo.</h1>

            <div className='flex items-center gap-3'>
                <div className='flex items-center bg-gray-100 rounded-md px-2 text-slate-950 py-[2px] border shadow-sm'>
                    <input type="text" className={`${searchBar === false ? "hidden": "flex"} bg-gray-100 outline-none transition-all duration-150 py-[2px] text-sm font-medium w-[200px]`} placeholder='e.g University of Nairobi' />
                    <div onClick={()=>setSearchBar(!searchBar)}>
                        {
                            searchBar === false ?
                            <IoSearch  className='text-lg cursor-pointer my-[2px]'/>
                            :
                            <IoClose className='text-xl cursor-pointer my-[2px]'/>
                        }
                    </div>               
                </div>
                <div onClick={()=>setMenuBar(!menuBar)}>
                    {
                        menuBar === false ?
                        <FiMenu className='text-xl m-[2px] cursor-pointer'/>
                        :
                        <IoClose className='text-xl cursor-pointer my-[2px]'/>
                    }
                </div>     
            </div>
            <ul className={`sidebar  absolute ${menuBar === false ?"translate-x-[1000px]":""} top-full transition-all ease-in-out shadow-md duration-300 left-0 bg-white flex flex-col  px-8 gap-4 font-medium w-full py-2 pb-4`}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    Programmes
                </li>
                <li>
                    Institutions
                </li>
                <li>
                    About
                </li>
                <li>
                    News
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar