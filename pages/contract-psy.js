import React from 'react'

export default function Contract() {
    return (
        <div className='m-auto max-w-4xl mt-8 flex flex-col justify-center font-bold px-4'>
            <div>
                <h2 className='text-2xl'>Introducing Polygon: The Next-Level Token Network</h2>
                <ul className='pl-12 mt-4 '>
                    <li className='mb-2'>Fast and scalable transactions
                    </li>
                    <li className='mb-2'>Low fees
                    </li>
                    <li className='mb-2'>High security
                    </li>
                    <li className='mb-2'>Easy asset transfer</li>
                </ul>
                <p className='text-lg mt-8'>Tokens created on Polygon offer advantages such as high speed and scalability, low fees, high security, asset transferability, and access to ecosystem features and applications.</p>
            </div>
            <div className='text-center mt-10 text-base flex flex-col gap-4'>
                <h4>Smart Contract
                </h4>
                <p>Polygon Network

                </p>
                <p> Power Society

                </p>
                <p>Symbol : PSY
                </p>
                <p>Decimals : 18
                </p>
                <p>Total Supply :      100,000,000,000,000,000
                </p>
                <span>
                    <p>Contract :</p>
                    <p className='text-xs mi:text-sm md:text-xl'>0xc8c9Bff7f3843e176b05C6FdCEFD617CcE1D4488</p>

                </span>
            </div>
            <button className='my-10 px-1 py-3 md:px- md:py-4 dark:border-blue-400  duration-200  bg-blue-600 text-gray-200 md:text-lg rounded-2xl'>
                <a href='https://polygonscan.com/token/0xc8c9Bff7f3843e176b05C6FdCEFD617CcE1D4488?a=0xE6725a17BE3EB35A4e9e044aDDf396e7c05Ce49D'>Blockchain contract explorer</a>
            </button>

            <button className='my-2 px-1 py-3 md:px- md:py-4 dark:border-blue-400  duration-200  bg-blue-600 text-gray-200 md:text-lg rounded-2xl'>
                <a href='https://github.com/PowerSociety/Smart-Contract-Code-for-Power-Society-PSY/issues/1'>Github code contract</a>
            </button>
        </div>
    )
}
