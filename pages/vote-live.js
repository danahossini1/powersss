import Link from 'next/link'
import React from 'react'

export default function Vote() {
    return (
        <div className='text-gray-800 dark:text-gray-300 mb-8'>
            <div className='max-w-4xl mt-20 px-6 text-center md:px-12 text-2xl md:text-3xl m-auto'>
                <h2>Have Your Say: Vote in Power Society's Decision-Making</h2>
                <h4 className='text-center mt-8'>Your Voice Matters</h4>
                <div className='text-center max-w-4xl px-6 md:px-12 text-xl m-auto'>
                    <p className='mt-8 md:font-bold'>We are excited to inform you that at Power Society, we conduct important voting and decision-making processes online, utilizing platforms such as Telegram and Twitter and Google Voting Form+2. These voting sessions are designed to be fair, transparent, and inclusive, ensuring that the opinions and suggestions of all members are taken into consideration.
                    </p>
                    <p className='mt-8 md:font-bold'>Currently, our primary focus is on these social media platforms; however, we have plans to expand our presence to other avenues in the near future. Our ultimate objective is to create an engaged and participatory community, where every member has a voice in the decision-making and voting process.

                    </p>
                    <p className='mt-8 md:font-bold'>In addition to social media, we also provide the option for participation through Google Forms surveys on our website. This allows you to contribute your valuable insights and opinions through an accessible and user-friendly platform.

                    </p>
                    <p className='mt-8 md:font-bold'>By participating in our surveys and voting processes, you can actively contribute to shaping the future of Power Society. We value your input and strive to create an inclusive environment where every member's perspective is heard and valued.

                    </p>
                    <p className='mt-8 md:font-bold'>Join us in making a difference and be part of our vibrant community by participating in our voting initiatives, both through social media and our website's Google Forms surveys.</p>
                </div>
            </div>
            <div className='md:flex max-w-5xl gap-4 text-center mt-12 mx-auto justify-center'>
                <div>
                    <h3 className='text-2xl font-bold'>Live Vote</h3>
                    <button className=' px-16 py-3 md:px-24 md:py-4 my-4 hover:border-4 border-blue-800 dark:border-blue-400  duration-200  bg-blue-600 text-gray-200 md:text-lg rounded-2xl'>
                        <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fpower_society_">Cast Your Vote On Twitter</Link>
                    </button>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>3 Vote</h3>
                <button className=' px-20 py-3 md:px-28 md:py-4 my-4 hover:border-4 border-blue-800 dark:border-blue-400  duration-200  bg-blue-600 text-gray-200 md:text-lg rounded-2xl'>
                    <Link href="https://t.me/powerSocietytelegram">Vote On Telegram</Link>
                </button>
                </div>
            </div>
        </div >
    )
}
