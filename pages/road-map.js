import React from 'react'
import MessageForm from '@/components/module/MessageForm'


export default function Roadmap() {
    return (
        <div className=''>
            <div className='max-w-4xl mt-20 px-6 text-center md:px-12 text-2xl md:text-3xl m-auto'>
                <h2 className='font-bold'>Building a Better World: Power Society PSY's Roadmap for Global Impact</h2>
                <div className='mt-16'>
                    <p>Placed Here after Community Vote</p>
                    <p className='mt-8 border-4 p-4 border-blue-600 md:w-80 m-auto rounded-2xl'>road map is live</p>
                    <div className='flex justify-around mt-8'>
                        <p>Community-Selected</p>
                        <p>Voted by the Society</p>
                    </div>
                </div>
                <div className=' mt-32 text-base  md:text-lg max-w-6xl m-auto px-6 font-bold md:px-12'>
                    <div className=' bg-slate-300 p-2 dark:bg-slate-800 md:px-12 py-12 rounded-xl'>
                        <h4 className='font-bold text-xl md:text-2xl mb-8'>Airdrops for the Community: Free Digital Currency until Token Exhaustion
                        </h4>
                        <p className='mt-6'>In our roadmap, we have planned to create airdrops for the community. Airdrops will allow you to receive digital currency free of charge. These airdrop tokens will be provided to you until they are fully distributed.

                        </p>
                        <p className='mt-6'>Our aim is to attract the community to our network and provide everyone with an opportunity to participate in the world of digital currencies and experience it firsthand. With these airdrops, you will have access to digital assets while also helping us with the promotion and introduction of our project.

                        </p>
                        <p className='mt-6'>Airdrops will be available to everyone until the airdrop tokens are exhausted. This approach also assists us in establishing ourselves as a leading project in the realm of digital currencies.

                        </p>
                        <p className='mt-6'>We invite you to join our community and take advantage of our airdrops to gain an exciting experience with digital currencies while contributing to the growth and advancement of our project.</p>
                    </div>
                </div>

                <div className='text-center max-w-4xl mt-20 px-6 md:px-12 text-xl m-auto'>
                    <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'    >
                        <p>The listing price for each token of Power Society (PSY) will be $0.0001</p>
                    </div>
                    <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'    >
                        <p>The transaction fee for Token One will be 1%</p>
                    </div>
                    <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'    >
                        <p>Join in and actively participate in decision-making processes as a member of Power Society (PSY) community, contributing to the improvement and growth of this project by sharing your opinions and suggestions.</p>
                    </div>
                </div>

            </div>
            <MessageForm/>
        </div>
    )
}
