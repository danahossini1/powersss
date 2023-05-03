import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import swal from 'sweetalert';

export default function Critics(props) {


    const { status, data } = useSession()

    const [comment, setComment] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        if (status === "authenticated") {
            const user = data.user.name
            if (user) {
                setUserName(user)
            } else {
                fetch('/api/oneUser', {
                    method: 'POST',
                    body: JSON.stringify({ email: data.user.email }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json())
                    .then(res => setUserName(res))
            }
        }
    }, [status])

    const sendComment = () => {
        if (comment.length < 8) {
            swal("متن نظر باید حد اقل 8 کاراکتر داشته باشد")
        } else {
            const commentObj = {
                userName,
                comment,
            }
            console.log(commentObj);
            fetch('/api/comments/add', {
                method: "POST",
                body: JSON.stringify(commentObj),
                headers: { "Content-Type": "application/json" }
            }).then(res => {
                if (res.status === 201) {
                    swal(`${userName} عزیز نظر شما ثبت شد ، پس از بررسی توسط ادمین در قسمت نظرات قرار میگیرد 🌹🌹`)
                    setComment('')
                }
            })



        }
    }

    return ( 
        <div className='mt-12 mx-6'>
            <h1 className="max-w-lg m-auto font-bold text-[#c78521] dark:text-[#dab643] my-12"> لطفا نظرات و پیشنهادات خود  را با ما در میان بگذارید. این موارد به ما کمک می‌کنند تا وب سایتمان را بهتر و کارآمدتر برای شما عزیزان طراحی کنیم. با تشکر </h1>
            <div className='w-full rounded-xl m-auto max-w-lg text-center overflow-hidden py-6 bg-white dark:bg-gray-600'>
                <div className='flex justify-between items-center px-5'>
                    <h1 className='font-bold dark:text-slate-100'>ثبت نظر</h1>
                </div>
                <div className="flex bg-slate-200  dark:bg-gray-400 m-1 my-6 mx-4 overflow-hidden rounded-md">
                    <textarea value={comment} onChange={e => setComment(e.target.value)} className="rounded-none rounded-r-l h-24 dark:placeholder-slate-100 text-black focus:outline-0 block flex-1 min-w-0 w-full text-sm p-2.5 bg-inherit" placeholder="متن خود را اینحا تایپ کنید" />
                    <span className="inline-flex items-center px-3 text-sm rounded-l-md " >

                    </span>
                </div>
                <div className='flex p-3 justify-between'>
                    <div>
                        <button className='p-1 px-6 rounded-xl  text-sm text-white bg-blue-600'>
                            {data ?
                                <span onClick={sendComment}>ارسال </span>
                                :
                                <span>
                                    برای ثبت نظر ثبت نام کنید
                                </span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
