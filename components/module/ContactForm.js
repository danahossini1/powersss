import React, { useState } from 'react'

export default function ContactForm() {

    const [message, setmessage] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const [selectVal, setSelectVal] = useState('1')

    const [messageValid, setmessageValid] = useState(false)
    const [userNameValid, setUserNameValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    const validationData = (data) => {
        const { key, value } = data

        if (key === 'message') {
            (value.length < 10) ? setmessageValid(false) : setmessageValid(true)
        } else if (key === 'userName') {
            (value.length < 6 || value.length > 20) ? setUserNameValid(false) : setUserNameValid(true)
        } else if (key === "email") {
            emailRegex.test(value) ? setEmailValid(true) : setEmailValid(false)
        }
    }

    const clearValue = () => {
        setmessage('')
        setUserName('')
        setEmail('')

        setmessageValid(false)
        setUserNameValid(false)
        setEmailValid(false)

    }

    const sendMessageHandler = () => {

        if (message.length < 8) {
            swal("Comment text must have at least 8 characters.")
        } else {
            const commentObj = {
                userName,
                comment: message,
                email,
                type: selectVal
            }
            console.log(commentObj);
            fetch('/api/comments/add', {
                method: "POST",
                body: JSON.stringify(commentObj),
                headers: { "Content-Type": "application/json" }
            }).then(res => res.json()).then(res=>console.log(res))

            // if (res.status === 201) {
            //     swal(`Dear ${userName}, your comment has been registered, it will be placed in the comments section after being checked by the admin
            //     🌹🌹`)
            //     setmessage('')
            // }


        }

        clearValue()
    }


    return (
        <div className='max-w-4xl mt-20 px-6 text-center md:px-12 text-2xl md:text-4xl m-auto'>
            <h3>Contact Us</h3>
            <div className="flex bg-slate-200  dark:bg-gray-400 m-1 my-6  overflow-hidden rounded-2xl">
                <input value={userName} onChange={e => {
                    setUserName(e.target.value)
                    validationData({ key: 'userName', value: e.target.value })
                }} type="text" id="website-admin" className="rounded-none rounded-r-l dark:placeholder-slate-100 text-black focus:outline-0 block flex-1 min-w-0 text-sm p-2.5 bg-inherit" placeholder="UserName " />
                <span className={`inline-flex items-center px-3 text-sm rounded-l-md  ${userNameValid ? 'text-green-600' : 'text-red-600'}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
            <div className="flex bg-slate-200  dark:bg-gray-400 m-1 my-6  overflow-hidden rounded-2xl">
                <input value={email} onChange={e => {
                    setEmail(e.target.value)
                    validationData({ key: 'email', value: e.target.value })
                }} type="text" id="website-admin" className="rounded-none rounded-r-l dark:placeholder-slate-100 text-black focus:outline-0 block flex-1 min-w-0 w-full text-sm p-2.5 bg-inherit" placeholder="Email " />
                <span className={`inline-flex items-center px-3 text-sm rounded-l-md  ${emailValid ? 'text-green-600' : 'text-red-600'}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </span>
            </div>

            <select onChange={e => setSelectVal(e.target.value)} id="countries" className="flex bg-slate-200 text-gray-100 dark:bg-gray-400 m-1 my-6 overflow-hidden rounded-2xl text-sm w-full h-10 ">
                <option value='1' selected>Type of cooperation</option>
                <option value="Cooperation">Cooperation</option>
                <option value="Marketing">Marketing</option>
            </select>


            <div className="flex bg-slate-200  dark:bg-gray-400 m-1 my-6  overflow-hidden rounded-2xl">
                <textarea value={message} onChange={e => {
                    setmessage(e.target.value)
                    validationData({ key: 'message', value: e.target.value })
                }} type="text" id="website-admin" className="rounded-none rounded-r-l h-40 dark:placeholder-slate-100 text-black focus:outline-0 block flex-1 min-w-0 w-full text-sm p-2.5 bg-inherit" placeholder="Message " />
                <span className={`inline-flex mt-2 px-3 text-sm rounded-l-md ${messageValid ? 'text-green-600' : 'text-red-600'}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                </span>
            </div>
            <button onClick={sendMessageHandler} disabled={!userNameValid || !emailValid || !messageValid || selectVal === '1'} className='py-2 px-6 md:py-3 md:px-16 rounded-xl  text-sm text-white bg-blue-600'>Send</button>
        </div>
    )
}
