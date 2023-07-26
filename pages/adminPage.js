import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

export default function AdminPage() {


    const { status, data } = useSession()

    const route = useRouter()

    useEffect(() => {

        if (status === "authenticated") {

            if (data.user.email === "danahossini@gmail.com" || data.user.email === "danahossini1@gmail.com") {
                setIsDana(true)
                return;
            } else {
                route.push('/')
                return;
            }
        } else {
            route.push('/')
        }
    }, [status])


    const [allComments, setAllComments] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [isDana, setIsDana] = useState(false)


    const comments = () => {
        fetch('api/comments').then(res => res.json()).then(res => setAllComments(res))
    }

    const users = () => {
        fetch('api/users').then(res => res.json()).then(res => setAllUsers(res))
    }


    useEffect(() => {
        users()
        comments()
    }, [])

    const deleteUser = id => {

        swal({

            text: "از حذف کاربر مطمئن هستید؟",

            buttons: {
                cancel: {
                    text: "لغو",
                    value: null,
                    visible: true,
                    className: "bg-red-500 hover:bg-red-600",
                    closeModal: true,
                },
                confirm: {
                    text: "تایید",
                    value: true,
                    visible: true,
                    className: "bg-blue-500 hover:bg-blue-600",
                    closeModal: true
                }
            },
        })
            .then((value) => {
                if (value !== null) {
                    fetch(`/api/users/${id}`, {
                        method: "DELETE"
                    }).then(res => {
                        if (res.status === 200) {
                            users()
                            swal("کاربر با موفقیت حذف شد")
                        }
                    })
                }

            });

    }

    const commentSwal = (comment, answer, types) => {
        swal(` عنوان : ${types} \n \n کامنت: ${comment}\n \n ${answer === '0' ? 'بدون پاسخ' : `پاسخ: ${answer}`}`)
    }

    const deleteComment = id => {

        swal({

            text: "از حذف کامنت مطمئن هستید؟",

            buttons: {
                cancel: {
                    text: "لغو",
                    value: null,
                    visible: true,
                    className: "bg-red-500 hover:bg-red-600",
                    closeModal: true,
                },
                confirm: {
                    text: "تایید",
                    value: true,
                    visible: true,
                    className: "bg-blue-500 hover:bg-blue-600",
                    closeModal: true
                }
            },
        })
            .then((value) => {
                if (value !== null) {
                    fetch(`/api/comments/delete/${id}`, {
                        method: "DELETE",
                    }).then(res => {
                        if (res.status === 200) {
                            comments()
                            swal("کامنت با موفقیت حذف شد")
                        }
                    })
                }
            })
    }

    const okComment = id => {

        fetch(`/api/comments/ok/${id}`, {
            method: "PATCH",
        }).then(res => {
            res.status === 200 && comments()
        })
    }

    const editComment = (id, value) => {

        swal({
            title: "ویرایش",

            buttons: {
                cancel: {
                    text: "لغو",
                    value: null,
                    visible: true,
                    className: "bg-red-500 text-white",
                    closeModal: true,
                },
                confirm: {
                    text: "تایید",
                    value: true,
                    visible: true,
                    className: "bg-blue-500 hover:bg-blue-600",
                    closeModal: true
                }
            },
            content: {
                element: "input",
                attributes: {
                    value
                },
            },
        })
            .then((editComment) => {

                if (editComment !== null) {
                    fetch(`/api/comments/edit/${id}`, {
                        method: 'PATCH',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ editComment })
                    }).then(res => {
                        if (res.status === 200) {
                            comments()
                            swal("ویرایش با موفقیت انجام شد ✔")
                        }
                    })
                }
            });

    }

    const answerComment = id => {

        swal({
            title: "پاسخ",

            buttons: {
                cancel: {
                    text: "لغو",
                    value: null,
                    visible: true,
                    className: "bg-red-500 text-white",
                    closeModal: true,
                },
                confirm: {
                    text: "تایید",
                    value: true,
                    visible: true,
                    className: "bg-blue-500 hover:bg-blue-600",
                    closeModal: true
                }
            },
            content: {
                element: "input",
            },
        })
            .then((answer) => {
                console.log(answer);

                if (answer !== null) {
                    fetch(`/api/comments/answer/${id}`, {
                        method: 'PATCH',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ answer })
                    }).then(res => {
                        if (res.status === 200) {
                            comments()
                            swal("پاسخ با موفقیت ثبت شد ✔")
                        }
                    })
                }
            });
    }


    return (
        <div className='lg:flex'>
            {isDana &&
                <>
                    <div className='lg:w-1/2 p-4 mt-6'>
                        <h1 className='text-2xl p-2 dark:text-stone-100'>نظرات</h1>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">
                                            نام
                                        </th>
                                        <th className="px-6 py-3">
                                            نظر
                                        </th>
                                        <th className="px-6 py-3">
                                            <span >پاسخ</span>
                                        </th>
                                        <th className="px-6 py-3">
                                            <span >ویرایش</span>
                                        </th>
                                        <th className="px-6 py-3">
                                            <span>تایید / رد</span>
                                        </th>
                                        <th className="px-6 py-3">
                                            <span >حذف</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allComments.map(comment =>
                                        <tr key={comment._id} className="bg-white border-b text-start dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className={`${comment.types ? 'border-2 border-green-500' : ''} px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                                {comment.userName}
                                            </th>
                                            <td className="px-6 py-4">
                                                <button onClick={() => commentSwal(comment.comment, comment.answer, comment.types)} className='bg-blue-500 hover:bg-blue-700 text-white p-1  px-2 rounded-sm'>نمایش</button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => answerComment(comment._id)} className='bg-blue-500 hover:bg-blue-700 text-white p-1  px-2 rounded-sm'>پاسخ</button>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button onClick={() => editComment(comment._id, comment.comment)} className='bg-blue-500 hover:bg-blue-700 text-white p-1  px-2 rounded-sm'>ویرایش</button>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {comment.ok ?
                                                    <button onClick={() => okComment(comment._id)} className='bg-orange-500 hover:bg-orange-700 text-white p-1  px-2 rounded-sm'>رد</button>
                                                    :
                                                    <button onClick={() => okComment(comment._id)} className='bg-green-600 hover:bg-green-700 text-white p-1  px-2 rounded-sm'>تایید</button>
                                                }
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => deleteComment(comment._id)} className='bg-red-500 hover:bg-red-700 text-white p-1  px-2 rounded-sm'>حذف</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='lg:w-1/2 p-4 mt-6'>
                        <h1 className='text-2xl p-2 dark:text-stone-100'>کاربران</h1>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-start  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">
                                            نام
                                        </th>
                                        <th className="px-6 py-3">
                                            نام کاربری
                                        </th>
                                        <th className="px-6 py-3">
                                            ایمیل
                                        </th>

                                        <th className="px-6 py-3">
                                            <span>حذف</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='text-start'>
                                    {allUsers.map(user =>
                                        <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {user.fullName || user.name}
                                            </th>
                                            <td className="px-6 py-4">
                                                {user.userName || 'Sign GitHub'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={() => deleteUser(user._id)} className='bg-red-500 hover:bg-red-700 text-white text-xs  p-1 px-2 rounded-sm'>حذف</button>
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>}
        </div>
    )
}
