import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar({ setIsSignUpShow, setIsSignInShow, setDarkMode, darkMode }) {



    const [hamburger, setHamburger] = useState(false)
    const [isLogeIn, setIsLogeIn] = useState(false)
    const { status, data } = useSession()

    const [userFullName, setUserFullName] = useState('')
    const [userimg, setUserimg] = useState('')

    useEffect(() => {

        if (status === 'authenticated') {

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
        <nav className="border-gray-200 fixed w-full z-20 bg-[#d5e5fd] shadow-xl h-14 dark:text-stone-100 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <button onClick={() => setHamburger(!hamburger)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex md:hidden items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <ul className='hidden p-2 w-[130px] md:flex justify-between'>
                    <li>
                        <Link href="/">خانه</Link>
                    </li>
                    <li>
                        <Link href="/abutus">درباره ما</Link>
                    </li>
                </ul>
                <div className='flex items-center '>
                    <button className='p-1 md:mx-2 text-2xl mt-1 ' onClick={darkModeHandler}>
                        {darkMode ? <i className="fa-sharp fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                    </button>
                    {isLogeIn ?
                        <div className='flex gap-1 md:gap-4 items-center'>
                            {userimg && <img className='w-10 rounded-3xl' src={userimg}/>}
                            <button className='border border-gray-700 rounded-xl text-sm text-white bg-blue-500  p-1 px-3'>{userFullName}</button>
                            <div onClick={() => signOut()} className='flex cursor-pointer gap-1 text-sm items-end bg-red-500 p-1 pb-2 rounded-xl text-white'>
                                <h3 className='hidden md:block'>خروج</h3>
                                <i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>
                            </div>
                        </div>
                        :

                        <button onClick={() => {
                            setIsSignUpShow(bef => !bef)
                            setIsSignInShow(false)
                        }} className="flex items-center gap-2 bg-blue-500 p-1 px-2 rounded-xl text-stone-100 ">
                            <span className='fa-solid far fa-sign-in'></span>ورود | ثبت نام
                        </button>
                    }
                </div>
                <div className='fixed'>
                    <div onClick={() => setHamburger(false)} className={`${hamburger ? 'fixed' : 'hidden'} top-14 w-full bg-[#000000b1] h-screen right-0`}>
                    </div>
                    <div className={`w-1/2 h-full ${hamburger ? 'translate-x-0' : 'translate-x-full invisible'} fixed top-14 right-0 duration-500`} id="navbar-hamburger">
                        <ul className={`flex flex-col  font-medium pt-2 h-full rounded-e-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700`}>
                            <li>
                                <Link href="/" onClick={() => setHamburger(false)} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">خانه</Link>
                            </li>

                            <li>
                                <Link href="/aboutus" onClick={() => setHamburger(false)} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">درباره ما</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
