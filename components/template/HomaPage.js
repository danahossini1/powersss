import React, { useEffect, useState } from 'react'
import { convertDigitsEnToFa } from 'persian-utilities';
import { numericalSeparator } from 'persian-utilities';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import swal from 'sweetalert';

export default function HomaPage({ props }) {

    const [showingCategory, setShowingCategory] = useState(null)
    const [categoryData, setCategoryData] = useState([])

    const [isLogeIn, setIsLogeIn] = useState(false)
    const { status } = useSession()

    const itemShow = async (id) => {

        setCategoryData([])
        setShowingCategory((before) => before === id ? null : id)

        if (showingCategory !== id) {

            try {
                const res = await fetch(`/api/numberByServis/${id}`)
                const data = await res.json()
                setCategoryData(data.data.sort(() => 0.5 - Math.random()))

            } catch (err) { console.log(err) }
        }
    }

    useEffect(() => {
        if (status === 'authenticated') {
            setIsLogeIn(true)
        }
    }, [status])

    const BuyHandler = () => {

        !isLogeIn ? swal("برای خرید شماره باید ثبت نام کنید") : swal("این بخش تا اطلاع ثانویه غیر فعال است 🌹❤")
    }

    return (
        <div>
            <div>
                <Image className='m-auto' src='/img/logo.png' alt='logo' width={400} height={300} />
            </div>
            <div id='buy' className='bg-[#f5f5f5] dark:bg-gray-600 shadow-xl ltr p-2 md:flex md:mx-12 rounded-2xl'>
                <div className=' md:w-1/2 mb-16'>

                    <div className=' m-auto mt-8'>
                        <svg className='w-full text-white m-auto mb-8 md:h-40' data-v-1fdc8238="" width="471" height="100" viewBox="0 0 471 198" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1fdc8238="" d="M258.16 26.87C264.948 26.87 270.45 21.3676 270.45 14.58C270.45 7.79246 264.948 2.29004 258.16 2.29004C251.372 2.29004 245.87 7.79246 245.87 14.58C245.87 21.3676 251.372 26.87 258.16 26.87Z" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M269.74 10.4701H258.16" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M246.07 16.78H261.82" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M261.6 152.89L247.71 152.9" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M254.65 145.95L254.66 159.84" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M307.87 77.3401L322.12 91.5901" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M409 133.81L398 132.33L387.05 130.85C384.7 130.53 385.73 127.21 387.15 126.5L387.29 126.42L394.1 120.94C394.717 120.432 395.138 119.725 395.29 118.94L397.43 108C397.801 106.04 398.646 104.2 399.89 102.64L399.96 102.55C400.209 102.212 400.544 101.947 400.931 101.783C401.318 101.619 401.742 101.562 402.158 101.618C402.574 101.674 402.968 101.842 403.297 102.102C403.627 102.363 403.88 102.708 404.03 103.1L404.08 103.21C404.846 105.038 405.162 107.024 405 109L404.15 120.09C404.081 120.889 404.297 121.686 404.76 122.34L409.87 129.44L409.98 129.56C411.19 130.66 411.3 134.13 409 133.81Z" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M399.12 136.39L396.12 135.98C395.8 135.913 395.497 135.78 395.232 135.588C394.967 135.397 394.745 135.151 394.581 134.868C394.416 134.585 394.314 134.271 394.279 133.946C394.245 133.62 394.279 133.291 394.38 132.98L396.29 125.98C396.442 125.314 396.828 124.725 397.38 124.321C397.931 123.916 398.609 123.725 399.29 123.78C399.969 123.901 400.582 124.265 401.012 124.804C401.443 125.343 401.662 126.021 401.63 126.71V133.99C401.642 134.318 401.585 134.645 401.462 134.949C401.339 135.253 401.152 135.528 400.915 135.755C400.678 135.982 400.395 136.156 400.086 136.265C399.776 136.375 399.447 136.417 399.12 136.39Z" fill="" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M88.89 148.29C91.2482 148.29 93.16 146.378 93.16 144.02C93.16 141.662 91.2482 139.75 88.89 139.75C86.5317 139.75 84.62 141.662 84.62 144.02C84.62 146.378 86.5317 148.29 88.89 148.29Z" fill="#000000"></path> <path data-v-1fdc8238="" d="M183.3 88.33C186.967 88.33 189.94 85.3572 189.94 81.69C189.94 78.0229 186.967 75.05 183.3 75.05C179.633 75.05 176.66 78.0229 176.66 81.69C176.66 85.3572 179.633 88.33 183.3 88.33Z" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M455.29 180.27L469.54 194.52" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M455.29 194.52L469.54 180.27" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M126.35 13.48L112.45 13.49" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M119.39 6.54004L119.4 20.43" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M12.4299 175.34V195.49" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M2.34998 185.42H22.5" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M329.89 191.67C332.248 191.67 334.16 189.758 334.16 187.4C334.16 185.042 332.248 183.13 329.89 183.13C327.532 183.13 325.62 185.042 325.62 187.4C325.62 189.758 327.532 191.67 329.89 191.67Z" fill="#000000"></path> <path data-v-1fdc8238="" d="M371.53 12.53L357.63 12.54" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M364.57 5.58008L364.58 19.4801" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10" strokeLinecap="round"></path> <path data-v-1fdc8238="" d="M158.88 195.83C164.325 195.83 168.74 191.416 168.74 185.97C168.74 180.525 164.325 176.11 158.88 176.11C153.434 176.11 149.02 180.525 149.02 185.97C149.02 191.416 153.434 195.83 158.88 195.83Z" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M168.5 183.84C175.71 184.26 178.95 185.26 178.95 186.42C178.95 187.97 169.95 189.22 158.88 189.22C147.81 189.22 138.81 187.97 138.81 186.42C138.81 185.27 142.09 184.27 149.23 183.84" stroke="#000000" strokeWidth="2.14" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M39.25 81.69C44.6955 81.69 49.11 77.2755 49.11 71.83C49.11 66.3844 44.6955 61.97 39.25 61.97C33.8045 61.97 29.39 66.3844 29.39 71.83C29.39 77.2755 33.8045 81.69 39.25 81.69Z" stroke="#000000" strokeWidth="2.88" strokeMiterlimit="10"></path> <path data-v-1fdc8238="" d="M46.46 65.12C52.89 61.84 56.19 61.05 56.78 62.05C57.56 63.39 50.45 69.05 40.89 74.64C31.33 80.23 23 83.72 22.17 82.38C21.58 81.38 23.91 78.87 29.85 74.89" stroke="#000000" strokeWidth="2.14" strokeMiterlimit="10"></path></svg>
                    </div>

                    <p className='text-center text-[#754835] dark:text-[#dab643] text-sm'>شماره فعالی برای نمایش وجود ندارد</p>
                    <p className='text-center text-[#754835] dark:text-[#dab643] text-sm'>از قسمت خرید شماره خود را انتخاب کنید</p>
                </div>
                <div className=' m-4 md:w-1/2 max-w-lg rtl ' id="accordion-collapse" data-accordion="collapse">

                    {props.servises.map(item =>
                        <div key={item.id} className='mt-4 bg-slate-50 rounded-xl'>
                            <h2 onClick={() => itemShow(item.id)} id="accordion-collapse-heading-1">
                                <button type="button" className="flex items-center justify-between w-full bg-white dark:bg-gray-700 dark:text-stone-200 p-2 font-medium text-left text-slate-800  rounded-t-xl dark:border-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span className='flex mi:text-lg gap-2 items-center'><img src={item.image} alt="" className='w-4 mi:w-6' /> {item.name}</span>
                                    <svg data-accordion-icon className={`w-6 h-6 ${showingCategory === item.id ? 'rotate-180' : 'rotate-0'}  shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className={`dark:bg-gray-500 dark:text-stone-100 ${showingCategory === item.id ? 'flex' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-2 w-full">
                                    {categoryData.length ?
                                        <table className='w-full'>
                                            <thead>
                                                <th className='flex w-full text-sm mi:text-base justify-around   '>
                                                    <td className='mi:w-1/4 w-1/3 '>کشور</td>
                                                    <td className='mi:w-1/4 w-1/3 '>قیمت</td>
                                                    <td className='mi:w-1/4 w-1/3 '>موجودی</td>
                                                    <td className=' mi:w-1/4 w-1/3 '></td>
                                                </th>
                                            </thead>
                                            <tbody className='text-sm font-bold '>
                                                {categoryData.map(item =>
                                                    <tr key={item.id} className='flex items-center w-full bg-gray-200 dark:bg-gray-600 flex-wrap my-2 py-2 rounded-md justify-around '>
                                                        <td className='flex items-center flex-col mi:w-1/4 gap-2 w-1/4'>
                                                            <img className='w-6 h-6'
                                                                src={props.country.filter(country => country.id === item.country)[0].image}
                                                                alt="" />
                                                            <h2 className="text-xs lg:text-sm">
                                                                {props.country.filter(country => country.id === item.country)[0].name}
                                                            </h2>
                                                        </td>
                                                        <td className='mi:w-1/4 mi:text-xs lg:text-base w-1/4 text-sm flex flex-col items-center'>

                                                            {convertDigitsEnToFa(numericalSeparator(item.amount.toString(), 3, ','))} <span className='text-[10px] text-slate-600 dark:text-slate-300'> تومان</span>
                                                        </td>
                                                        <td className='mi:w-1/4 mi:text-xs lg:text-base w-1/4 flex flex-col items-center'>

                                                            {convertDigitsEnToFa(numericalSeparator(item.count.toString(), 3, ','))} <span className='text-[10px] text-slate-600 dark:text-slate-300'> عدد</span>
                                                        </td>
                                                        <td className='mi:w-1/6'>
                                                            <button onClick={BuyHandler} className='p-1 px-3 mt- mi:mt-0 text-xs mi:text-sm rounded-lg bg-blue-600 text-white '>خرید</button>
                                                        </td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table>
                                        :
                                        <img className='w-8 m-auto' src="/img/loader.gif" alt="" />
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div >

    )
}

