
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import swal from 'sweetalert'

export default function SignUp({ setIsSignInShow, setIsSignUpShow }) {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [userNameValid, setUserNameValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    const [isLoading, setIsLoading] = useState(false)


    const clearValue = () => {
        setUserName('')
        setPassword('')
        setUserNameValid(false)
        setPasswordValid(false)
    }


    const validationData = (data) => {
        const { key, value } = data

        if (key === 'userName') {
            (value.length < 6 || value.length > 30) ? setUserNameValid(false) : setUserNameValid(true)
        } else if (key === 'password') {
            (value.length < 8 || value.length > 22) ? setPasswordValid(false) : setPasswordValid(true)
        }
    }

    const githubSignIn = () => {
        signIn("github")
    }


    const signInHandler = async () => {

        if (userNameValid && passwordValid) {
            setIsLoading(true)

            const userObj = {
                userName,
                password,
                redirect: false
            }

            const res = await signIn("credentials", userObj)
            console.log(res);
            setIsLoading(false)
            if (res.ok) {
                clearValue()
                setIsSignInShow(false)
            } else {
                swal({
                    text: ' نام کاربری یا رمز عبور نامعتبر است',
                    icon: "error"
                })
            }
        } else {
            swal("trrrr")
            setIsLoading(false)
        }
    }


    return (

        <div className='p-4 '>

            <div className='w-full rounded-xl m-auto max-w-md text-center overflow-hidden py-6 bg-white dark:bg-gray-600'>
                <div className='flex justify-between items-center px-3'>
                    <i onClick={() => {
                        setIsSignInShow(false)
                        clearValue()
                    }} className="fa-solid fa-regular fa-xmark text-end px-3 text-2xl text-red-600"></i>
                    <h1 className='font-bold dark:text-slate-100 text-lg'>ورود</h1>
                    <button onClick={() => {
                        setIsSignInShow(false)
                        setIsSignUpShow(true)
                        clearValue()
                    }} className="flex items-center gap-2 bg-blue-500 p-1 px-2 text-sm rounded-xl text-stone-100 ">
                        <span className='fa-solid far fa-sign-in'></span> ثبت نام
                    </button>
                </div>
                <div className="flex bg-slate-200 dark:bg-gray-400 m-1 my-6 mx-4 overflow-hidden rounded-md">
                    <input value={userName} onChange={e => {
                        setUserName(e.target.value)
                        validationData({ key: 'userName', value: e.target.value })
                    }} type="text" id="website-admin" className="rounded-none rounded-r-l focus:outline-0 block dark:placeholder-slate-100 text-black flex-1 min-w-0 w-full text-sm p-2.5 bg-inherit" placeholder="نام کاربری یا ایمیل" />
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md " >
                        <i className={`fa-sharp fa-solid fa-pen ${userNameValid ? 'text-green-600' : 'text-red-600'} text-xl`}></i>
                    </span>
                </div>

                <div className="flex bg-slate-200 dark:bg-gray-400 m-1 my-6 mx-4 overflow-hidden rounded-md">
                    <input value={password} onChange={e => {
                        setPassword(e.target.value)
                        validationData({ key: 'password', value: e.target.value })
                    }} type="text" id="website-admin" className="rounded-none rounded-r-l focus:outline-0 block dark:placeholder-slate-100 text-black flex-1 min-w-0 w-full text-sm p-2.5 bg-inherit" placeholder="رمز عبور" />
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 rounded-l-md " >
                        <i className={`fa-solid fa-lock ${passwordValid ? 'text-green-600' : 'text-red-600'} text-xl`}></i>
                    </span>
                </div>
                <div className='flex p-3 justify-between'>
                    <button className='text-sm text-zinc-500 dark:text-zinc-200' onClick={() => {
                        setIsSignInShow(false)
                        setIsSignUpShow(true)
                        clearValue()
                    }}> ثبت نام نکرده اید؟</button>
                    <div>
                        <button onClick={signInHandler} disabled={userNameValid && passwordValid && !isLoading ? false : true} className='p-1 px-6 rounded-xl  text-sm text-white bg-blue-600'>
                            <span className={`${isLoading ? 'hidden' : 'block'}`}>ورود</span>
                            <span className={`${!isLoading ? 'hidden' : 'block'}`}>
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-200  animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div onClick={githubSignIn} className='cursor-pointer flex items-center gap-2 mt-2 text-slate-600 dark:text-slate-200 justify-center'>
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg> <h1>ورود با گیت هاب</h1>
                </div>
            </div>
        </div >

    )
}
