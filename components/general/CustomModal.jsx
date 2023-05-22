"use client";

import { RxCross2 } from 'react-icons/rx';

const CustomModal = (
    {
        isOpen,
        onClose,
        children,
        width,
        top
    }) => {
    return (
        <>
            {isOpen &&
                <div className='w-full h-full fixed top-0 left-24 right-0 bottom-0'>
                    <div className='w-full h-full fixed top-0 left-60 right-0 bottom-0 bg-[#e5e5e5a1]' />
                    <div className={`flex justify-center`}>
                        <div className={`absolute ${top ? top : "top-32"} bg-white rounded-xl ${width}`}>
                            <div className='flex justify-end'>
                                <button
                                    className="text-black hover:scale-105 transition-all my-3 mr-4"
                                    onClick={() => onClose()}
                                >
                                    <RxCross2 className='text-2xl' />
                                </button>
                            </div>

                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CustomModal