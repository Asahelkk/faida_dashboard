/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const layout = ({ children }) => {
    return (
        <section className='w-full h-full'>
            <div className='flex items-center '>
                <div className='w-3/5 h-full'>
                    <img src={"/assets/images/bg_image.png"} alt="bg" className='w-full h-full object-cover' />
                </div>
                <div className='w-2/5 h-full flex justify-center items-center'>
                    <div className='flex flex-col gap-7 w-4/6'>
                        <Image
                            src={"/assets/images/faida_app_logo_008.png"}
                            alt="Faida"
                            width={150}
                            height={100}
                        />
                        <h1 className='font-bold text-[44px] text-black capitalize'>Welcome Back!</h1>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default layout