import MessageForm from '../module/MessageForm';
import Typewriter from 'typewriter-effect';


export default function HomaPage() {




    return (
        <div className=" mb-10">

            <div className="text-2xl md:text-5xl text-center my-20 pt-20 px-4 md:px-8 ">

                <h1 className='max-w-5xl cursor-default m-auto'><Typewriter onInit={tyoewriter => {
                    tyoewriter.typeString(' Unleash Your Potential with Power Society : Be a Catalyst for Change')
                        .start()
                        .pauseFor(5000)
                        .deleteAll()
                }} options={{
                    loop: true,
                    delay: 80
                }}
                /></h1>

            </div>

            <div className='max-w-6xl m-auto'>
                <div className='bg-slate-300 dark:bg-slate-800 mt-40 mx-8 rounded-xl py-6'>
                    <div className='pt-8 text-base md:text-2xl mx-4'>
                        <h2 className='text-center mb-8 text-xl md:text-3xl border-b border-gray-600 p-4 cursor-default'>Welcome to power society PSY</h2>
                        <div className="m-auto md:grid grid-cols-2 gap-4">
                            <div className=' px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>
                                <p className='hover:-translate-y-4 duration-500 cursor-default'>Voting on Token Lock in a Decentralized Exchange: Should this feature be enabled?</p>
                            </div>
                            <div className=' px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>
                                <p className='hover:-translate-y-4 duration-500 cursor-default'>Token Ownership Allocation: What percentage of control should be given to the community?</p>
                            </div>
                            <div className=' px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>
                                <p className='hover:-translate-y-4 duration-500 cursor-default'>This is the first voting in the Power Society project, addressing the possibility of locking tokens in a decentralized exchange. Community members can decide whether this feature should be made available or not.</p>
                            </div>
                            <div className=' px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>
                                <p className='hover:-translate-y-4 duration-500 cursor-default'>In this voting, community members have the ability to choose the percentage of token ownership allocation. The options include 0.1%, 0.25%, 0.5%, and 1%. This voting allows the community to determine their level of control and influence over the project.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <button className='my-16 px-20 py-3 md:px-48 md:py-4 hover:border-4 border-blue-800 dark:border-blue-400  duration-200  bg-blue-600 text-gray-200 md:text-lg rounded-2xl'>
                    <h2>Vote</h2>
                </button>
            </div>

            <div className='text-center max-w-4xl px-6 md:px-12 text-xl m-auto'>
                <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'>
                    <p>Free Token Airdrop for the Community: What is the desired percentage of free distribution?</p>
                </div>
                <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'>
                    <p>In this voting, the community can choose the percentage of tokens to be distributed for free as an airdrop to community members. The options include 1%, 3%, 6%, 7%, and 10% of the total tokens. Community members can decide how much of the tokens should be made available for free to the community.</p>
                </div>
                <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'>
                    <p>To stay updated on the latest news, vote , and activities of the community, follow us on social media platforms such as </p>
                </div>
            </div>

            <div className='flex justify-around gap-8 md:gap-20 w-1/2 m-auto mt-16 '>
                <a href="https://www.reddit.com/user/PowerSociety/">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 md:w-20 hover:-translate-y-2 duration-300 ' viewBox="0 0 24 24"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" fill="currentColor"></path></svg>
                </a>
                <a href="https://medium.com/@power1society"><svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 md:w-20 md:h-20 hover:-translate-y-2 duration-300' viewBox="0 0 24 16" fill="none">
                    <path d="M6.76875 0.900848C3.03049 0.900848 0 4.0794 0 7.99999C0 11.9206 3.03071 15.0991 6.76875 15.0991C10.5068 15.0991 13.5375 11.9208 13.5375 7.99999C13.5375 4.07917 10.5072 0.900848 6.76875 0.900848ZM17.5781 1.31671C15.7089 1.31671 14.1939 4.30964 14.1939 8.00011C14.1939 11.6906 15.7092 14.6837 17.5784 14.6837C19.4475 14.6837 20.9628 11.6908 20.9628 8.00011H20.9625C20.9625 4.30858 19.4475 1.31671 17.5782 1.31671H17.5781ZM22.8096 2.01284C22.1524 2.01284 21.6195 4.69362 21.6195 8.00011C21.6195 11.3066 22.152 13.9874 22.8096 13.9874C23.4672 13.9874 24 11.3059 24 7.99999C24 4.69339 23.4669 2.01284 22.8097 2.01284H22.8096Z" fill="currentColor"></path>
                </svg></a>
                <a href="https://t.me/powerSocietytelegram"><svg className='w-10 md:w-20 hover:-translate-y-2 duration-300' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37097 0 0 5.37097 0 12C0 18.629 5.37097 24 12 24C18.629 24 24 18.629 24 12C24 5.37097 18.629 0 12 0ZM17.8935 8.22097L15.9242 17.5016C15.779 18.1597 15.3871 18.3194 14.8403 18.0097L11.8403 15.7984L10.3935 17.1919C10.2339 17.3516 10.0984 17.4871 9.78871 17.4871L10.0016 14.4339L15.5613 9.41129C15.8032 9.19839 15.5081 9.07742 15.1887 9.29032L8.31774 13.6161L5.35645 12.6919C4.7129 12.4887 4.69839 12.0484 5.49194 11.7387L17.0613 7.27742C17.5984 7.08387 18.0677 7.40806 17.8935 8.22097Z" fill="currentColor"></path>
                </svg></a>
                <a href="https://twitter.com/power_society_"><svg className='w-10 md:w-20 hover:-translate-y-2 duration-300' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5331 7.11165C21.5483 7.32484 21.5483 7.53807 21.5483 7.75126C21.5483 14.2538 16.5991 21.7462 7.55333 21.7462C4.7665 21.7462 2.17768 20.9391 0 19.5381C0.395955 19.5838 0.776628 19.599 1.18782 19.599C3.48728 19.599 5.60407 18.8224 7.29444 17.4975C5.13199 17.4518 3.31979 16.0356 2.69542 14.0863C3.00001 14.132 3.30456 14.1624 3.62439 14.1624C4.066 14.1624 4.50766 14.1015 4.9188 13.9949C2.66499 13.538 0.974582 11.5584 0.974582 9.1675V9.10661C1.62938 9.47209 2.39087 9.70052 3.19792 9.73094C1.87304 8.84767 1.00505 7.34007 1.00505 5.63447C1.00505 4.72078 1.24866 3.88321 1.67508 3.15224C4.09642 6.13702 7.73605 8.08623 11.8172 8.29946C11.7411 7.93398 11.6954 7.55331 11.6954 7.17259C11.6954 4.46189 13.8883 2.25378 16.6142 2.25378C18.0304 2.25378 19.3096 2.84769 20.2081 3.80709C21.3198 3.5939 22.3858 3.18271 23.33 2.61927C22.9644 3.76143 22.1878 4.72082 21.1675 5.32992C22.1574 5.22337 23.1168 4.9492 24 4.56853C23.3301 5.54311 22.4924 6.4111 21.5331 7.11165Z" fill="currentColor"></path>
                </svg></a>
            </div>

            <div className='text-center max-w-4xl mt-20 px-6 md:px-12 text-xl m-auto'>
                <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'    >
                    <p>Building Strong Communities, Creating Positive Change
                    </p>
                    <p>Power Society PSY</p>
                </div>
                <div className='mt-6 border-b border-gray-500 text-left pb-4 font-bold'    >
                    <p>Unlocking the Power of Our Community: Join the Journey of Decentralized Token Revolution.</p>
                </div>
            </div>

            <div className=' mt-32 md:text-lg max-w-5xl m-auto px-6 font-bold md:px-12'>
                <div className=' bg-slate-300 dark:bg-slate-800 md:px-12 py-12 rounded-xl'>
                    <p className='mx-4 px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>Join us as we introduce our secure and stable digital token project. Our token, named 'Community Power,' is set to be locked within a decentralized exchange. By locking the token in a decentralized exchange, we ensure increased security and prevent unauthorized access. This decision highlights our commitment to the safety and protection of our community members. The token being locked in a decentralized exchange allows for confident engagement and participation in the project.
                    </p>
                    <p className='mx-4 px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>This locking mechanism contributes to the token's stability and integrity. By preventing significant changes in token supply and distribution, we strive for sustainable development and long-term value for token holders.

                    </p>
                    <p className='mx-4 px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>Transparency and community participation are core values we uphold. We will keep our community informed of any updates or developments regarding the token lock to ensure their familiarity with the project's progress.

                    </p>
                    <p className='mx-4 px-4 py-4 shadow-md mb-3 dark:bg-gray-700  shadow-gray-400 dark:shadow-gray-800 rounded-xl'>Together, we embark on an exciting journey to redefine the possibilities of decentralized digital tokens. Let's unlock the power of our community!</p>
                </div>
            </div>

            <div className=' max-w-4xl mt-20 px-6 md:px-12 text-xl m-auto '>
                <div>
                    <p>NOT TO MENTION...</p>
                </div>
                <div className='md: pl-12 pt-6'>
                    <p>Exclusively for community members</p>
                </div>
                <div className='md:pl-24 pt-8'>
                    <p>"Voting in POWER SOCIETY will have a significant impact on empowering the community. By participating in the elections, your power and influence over critical project decisions will increase. By placing trust in this project, you can contribute to the sustainable development of the community and realize values such as justice, transparency, and active participation. Voting in POWER SOCIETY not only focuses on strengthening your personal power and value but also strives to elevate all members and create a meaningful transformation in society. Additionally, participating in POWER SOCIETY elections helps create equal opportunities for individuals from all walks of life, from the less fortunate to the wealthy. So let's come together towards a powerful and equitable society and transform our aspirations into reality by casting your vote in POWER SOCIETY."

                    </p>
                </div>
                <div className='text-right mt-8 ms:mt-20'>
                    <button className='my-16 px-20 py-3 md:px-20 md:py-4 hover:border-4 border-blue-800 dark:border-blue-400  duration-200  bg-blue-600 text-gray-200 md:text-lg rounded-2xl'>Vote for a power society</button>
                </div>
            </div>

            <div className=' mt-16 md:text-lg max-w-5xl m-auto px-6 font-bold md:px-12'>
                <div className=' bg-slate-300 dark:bg-slate-800 px-4 md:px-12 py-12 rounded-xl'>
                    <div>
                        <p>What is Power Society PSY?</p>
                        <p className='ml-8 mt-4'>Power Society (PSY): A community built on collaboration and transparency, driving towards the goal of creating a strong and dynamic presence in the crypto space. By providing more opportunities for participation in voting, analysis, and crypto-related discussions, we empower our members to progress together and share knowledge.</p>
                    </div>
                </div>
            </div>

            <div className='max-w-4xl mt-20 px-6 text-center md:px-12 text-2xl md:text-4xl m-auto'>
                <h3>Power Your Finances with Our Revolutionary Token</h3>
            </div>

            <MessageForm />

        </div>

    )
}

