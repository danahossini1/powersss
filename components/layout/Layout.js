import React, { useEffect, useState } from 'react'
import Navbar from '../module/Navbar'
import Head from 'next/head'
import SignUp from '../module/SignUp'
import SignIn from '../module/SignIn'

export default function Layout({ children }) {


    const [isSignUpShow, setIsSignUpShow] = useState(false)
    const [isSignInShow, setIsSignInShow] = useState(false)

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
    }, [])

    return (
        <div className={`${darkMode ? 'dark' : ''} `}>

            <div className='bg-[#e3ecfd] dark:bg-gray-700 '>
                <Head>
                    <title>شماره مجازی</title>
                    <link rel="shortcut icon" href="../img/icon.png" />
                </Head>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setIsSignUpShow={setIsSignUpShow} setIsSignInShow={setIsSignInShow} />
                <div className='pt-16'>
                    {children}
                </div>

                <div className='fixed '>
                    <div onClick={() => {
                        setIsSignInShow(false)
                        setIsSignUpShow(false)
                    }} className={`${(isSignInShow || isSignUpShow) ? 'fixed' : 'hidden'} top-14 w-full bg-[#000000b1] h-screen right-0`}>
                    </div>
                    <div className={`md:w-1/2 w-full ${isSignUpShow ? 'translate-y-0' : '-translate-y-full invisible'} fixed top-16  right-0 duration-500`} id="navbar-isSignInShow">
                        <SignUp setIsSignInShow={setIsSignInShow} setIsSignUpShow={setIsSignUpShow} />
                    </div>
                    <div className={`md:w-1/2 w-full ${isSignInShow ? 'translate-y-0' : '-translate-y-full invisible'} fixed top-16  right-0 duration-500`} id="navbar-isSignInShow">
                        <SignIn setIsSignInShow={setIsSignInShow} setIsSignUpShow={setIsSignUpShow} />
                    </div>

                </div>

            </div>
        </div>
    )
}
