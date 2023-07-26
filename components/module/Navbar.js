import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar({ setIsSignUpShow, setIsSignInShow, setDarkMode, darkMode }) {



    const [hamburger, setHamburger] = useState(false)
    const [isLogeIn, setIsLogeIn] = useState(false)
    const [admin, setAdmin] = useState(false)
    const { status, data } = useSession()

    const [userFullName, setUserFullName] = useState('')
    const [userimg, setUserimg] = useState('')

    useEffect(() => {

        if (status === 'authenticated') {

            if (data.user.email === "danahossini@gmail.com" || data.user.email === "danahossini1@gmail.com") {
                setAdmin(true)
            }

            if (data.user.name) {
                setUserFullName(data.user.name)
                setUserimg(data.user.image)
            } else {
                fetch('/api/oneUser', {
                    method: 'POST',
                    body: JSON.stringify({ email: data.user.email }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json())
                    .then(res => setUserFullName(res))
            }
            setIsLogeIn(true)
        }

    }, [status])
    useEffect(() => {
        const localThem = JSON.parse(localStorage.getItem("darkMode"))
        localThem !== null && setDarkMode(localThem);

    }, [])


    const darkModeHandler = () => {
        setDarkMode(bef => !bef)
        localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    }


    return (
        <nav className="border-gray-200 text-gray-950 fixed w-full z-20 bg-[#6ba3f6] shadow-xl h-14 dark:text-stone-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <button onClick={() => setHamburger(!hamburger)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex md:hidden items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <ul className={`hidden p-2 md:flex gap-5 lg:gap-6 text-sm lg:text-lg flex-wrap-reverse justify-between`}>
                    <li>
                        <Link className='flex gap-1 ' href="/">

                            <h2 className='mt-1 hover:-translate-y-[5px] duration-200'>Home</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href='/vote-live' className='flex gap-1 '>

                            <h2 className='mt-1 hover:-translate-y-[5px] duration-200'>Vote Live</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href='/road-map' className='flex gap-1 '>

                            <h1 className='mt-1 hover:-translate-y-[5px] duration-200'>Road Map</h1>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about-psy' className='flex gap-1 '>

                            <h1 className='mt-1 hover:-translate-y-[5px] duration-200'>About</h1>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contract-psy' className='flex gap-1 '>

                            <h2 className='mt-1 hover:-translate-y-[5px] duration-200'>Contract</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact-us' className='flex gap-1 '>

                            <h2 className='mt-1 hover:-translate-y-[5px] duration-200'>Contact Us</h2>
                        </Link>
                    </li>
                    <li>
                        <Link href='/comments' className='flex gap-1 '>

                            <h2 className='mt-1 hover:-translate-y-[5px] duration-200'>Comments</h2>
                        </Link>
                    </li>
                    <li className={`${admin ? 'block' : 'hidden'}`}>
                        <Link href="adminPage" className='flex gap-1 '>

                            <h2 className='mt-1 hover:-translate-y-[5px] duration-200'>manager</h2>
                        </Link>
                    </li>
                </ul>
                <div className='flex items-center '>
                    <button className='p-1 md:mx-2 text-2xl mt-1 ' onClick={darkModeHandler}>
                        {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                        }
                    </button>
                    {isLogeIn ?
                        <div className='flex gap-1 md:gap-4 items-center'>
                            {userimg && <img className='w-10 rounded-3xl' src={userimg} />}
                            <button className=' rounded-lg text-sm text-white bg-blue-500  p-1 px-3'>{userFullName}</button>
                            <div onClick={() => signOut()} className='flex cursor-pointer gap-1 text-sm items-end bg-red-500 p-1 px-2 rounded-lg text-white'>
                                <h3 className='hidden md:block'>exit</h3>
                                <i className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                                </svg>
                                </i>
                            </div>
                        </div>
                        :

                        <button onClick={() => {
                            setIsSignUpShow(bef => !bef)
                            setIsSignInShow(false)
                        }} className="flex items-center gap-2 bg-blue-500 p-1 px-2 rounded-xl text-stone-100 ">
                            <span className=''>
                            </span>sign up | log in<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    }
                </div>
                <div className='fixed'>
                    <div onClick={() => setHamburger(false)} className={`${hamburger ? 'fixed' : 'hidden'} top-14 w-full bg-[#000000b1] h-screen left-0`}>
                    </div>
                    <div className={`w-1/2 h-full ltr ${hamburger ? 'translate-x-0' : '-translate-x-full invisible'} fixed top-14 left-0 duration-500`} id="navbar-hamburger">
                        <ul className={`flex flex-col gap-4 font-medium pt-2 h-full rounded-e-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} className='flex gap-1' href="/">

                                    <h2 className='mt-1'>Home</h2>
                                </Link>
                            </li>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} href='/vote-live' className='flex gap-1'>

                                    <h2 className='mt-1'>Vote Live</h2>
                                </Link>
                            </li>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} href='/about-psy' className='flex gap-1'>

                                    <h1 className='mt-1'>About PSY</h1>
                                </Link>
                            </li>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} href='/road-map' className='flex gap-1'>

                                    <h1 className='mt-1'>Road Map</h1>
                                </Link>
                            </li>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} href='/contract-psy' className='flex gap-1'>

                                    <h2 className='mt-1'>Contract PSY</h2>
                                </Link>
                            </li>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} href='/contact-us' className='flex gap-1'>

                                    <h2 className='mt-1'>Contact Us</h2>
                                </Link>
                            </li>
                            <li className=" mx-4">
                                <Link onClick={() => setHamburger(false)} href='/comments' className='flex gap-1'>

                                    <h2 className='mt-1'> Comments
                                    </h2>
                                </Link>
                            </li>
                            <li className={`${admin ? 'block' : 'hidden'} mx-4`}>
                                <Link onClick={() => setHamburger(false)} href="adminPage" className='flex gap-1'>

                                    <h2 className='mt-1'>manager</h2>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
