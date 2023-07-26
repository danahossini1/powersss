import React, { useState } from 'react'
import ContactForm from '@/components/module/ContactForm'

export default function contact() {

    const [accordino, setAccordion] = useState('')


    const changeAcoordeion = (id) => {

        if (accordino === id) { setAccordion('') } else { setAccordion(id) }
    }

    return (
        <div>
            <div className='text-center max-w-4xl px-6 md:px-12 md:text-xl m-auto mt-12'>
                <h1 className='text-2xl md:text-4xl'>Contact Us: Unite for Progress</h1>
                <h3 className='py-6 text-lg md:text-2xl'>Empowering Communities Worldwide</h3>
                <p className='my-2 max-w-xl text-left m-auto'>Building Bridges: Connecting Nations, Cultures, and Communities at Power Society

                </p>
                <p className='my-2 max-w-xl text-left m-auto pl-8 text-sm md:text-xl'>Break down barriers by bringing together talents from various countries and cities.

                </p>
                <p className='my-2 max-w-xl text-left m-auto pl-8 text-sm md:text-xl'>Foster meaningful connections, collaboration, and mutual understanding across borders.</p>
            </div>
            <div className='max-w-4xl m-auto'>
                <div className='bg-slate-300 dark:bg-slate-800 mt-4 mx-8 rounded-xl py-6'>
                    <div className='px-3 text-center'>
                        <h2 className='text-2xl md:text-3xl'>Opportunities for Collaboration with
                        </h2>
                        <h3 className='text-xl md:text-2xl my-4'> Power Society PSY</h3>
                        <p>We proudly invite companies, brands, and professionals from around the world to collaborate with us. Collaborating with Power Society provides you with the opportunity to work with us in various fields and contribute to the development and growth of our empowering community.</p>
                    </div>
                </div>
            </div>
            <div className='text-center max-w-4xl px-6 md:px-12 md:text-xl m-auto mt-12'>
                <h3 className='mb-8 text-xl md:text-3xl'>Join Our Project and Help Us Expand Our Reach to Different Countries</h3>
                <p className='md:text-xl text-base my-4'>Join our Global Team: Embrace Diversity, Embrace Excellence</p>
                <p className='md:text-xl text-base'>We are currently seeking talented individuals from diverse cultures and backgrounds to join our team. If you are a skilled professional with experience in the relevant field and are interested in joining us, we are looking for colleagues who can contribute to our international development and growth. We value and respect cultural differences and are committed to creating a multicultural work environment.</p>
            </div>

            <div className='mx-4 mt-12'>
                <div className='max-w-4xl m-auto' id="accordion-collapse" data-accordion="collapse">
                    <h2 onClick={() => changeAcoordeion('1')} id="accordion-collapse-heading-1">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Collaboration with the Dynamic and Innovative Power Society Community</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className={`${accordino === '1' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">Energetic and specialized individuals from diverse fields are invited to join our community and participate in socially impactful projects under the banner of "Power Society."</p>

                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('2')} id="accordion-collapse-heading-2">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>Job Opportunities at Power Society</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className={`${accordino === '2' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">Power Society is actively recruiting creative and skilled professionals from various disciplines. If you are interested in contributing to innovative and socially-driven projects, this is the perfect place for you.</p>
                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('3')} id="accordion-collapse-heading-3">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Hiring Experienced Programmers and Developers</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className={`${accordino === '3' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300"> Power Society is seeking experienced programmers and developers in fields such as blockchain, web, and mobile technologies. If you possess expertise in these areas, we look forward to hearing from you.</p>

                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('4')} id="accordion-collapse-heading-3">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span> Internship Opportunities at Power Society</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className={`${accordino === '4' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">Students and graduates passionate about learning and participating in significant social projects are invited to collaborate with us and gain valuable and enriching experiences to kickstart their professional journey.</p>

                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('5')} id="accordion-collapse-heading-3">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Rewards and Incentives for Active Contributors</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className={`${accordino === '5' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">Power Society recognizes the value of active participation in projects and collective decision-making. We extend our gratitude to active contributors as key members in creating positive changes and offer rewards and incentives for their dedication.</p>

                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('6')} id="accordion-collapse-heading-3">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Management Positions at Power Society</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className={`${accordino === '6' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">The main difference is that the core components from  Power Society is in search of experienced managers and management specialists from various domains. If you possess strong leadership and management skills and desire to participate in focused and challenging social projects, this is an excellent opportunity.</p>

                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('7')} id="accordion-collapse-heading-3">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span> Collaboration with Independent and Creative Individuals</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className={`${accordino === '7' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">Power Society welcomes collaboration with independent, creative, and specialized individuals from diverse fields. If you are a creative individual with innovative ideas and perspectives, this is the space to turn your ideas into reality.</p>

                        </div>
                    </div>
                    <h2 onClick={() => changeAcoordeion('8')} id="accordion-collapse-heading-3">
                        <button type="button" className="dark:bg-gray-500 bg-gray-400 flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Collaboration with a Multicultural and Multilingual Team</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className={`${accordino === '8' ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-700 dark:text-gray-300">As an international project, Power Society invites collaboration from individuals from all corners of the world. The cultural and linguistic diversity in our team provides a source of diverse and enriching experiences that we benefit from.</p>

                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />

        </div>
    )
}
