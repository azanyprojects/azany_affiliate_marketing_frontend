import React from 'react'
import Link from 'next/link'

const Register = () => {
    return (
        <>
            <div className="max-w-full min-h-screen">
                <div className="flex items-center">
                    <div className="flex-1 hidden md:block">
                        <img src="/images/login.png" className='h-screen object-cover w-full' />
                    </div>
                    <div className="flex-1 flex flex-col h-screen justify-center w-full items-center">
                        <div>
                            <div className="py-2 space-y-2">
                                <h2 className="font-bold text-2xl">Get Started</h2>
                                <p className="text-gray-400">Please enter the details to create an account</p>
                            </div>
                            <div className="py-3 space-y-2">
                                <label className="mt-2">Full Name</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Full Name' />
                            </div>
                            <div className="py-3 space-y-2">
                                <label className="mt-2">Email</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Email' />
                            </div>
                            <div className="py-3 space-y-2">
                                <label className="mt-2">Password</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Password' />
                            </div>
                            <div className="py-3 space-y-2">
                                <label className="mt-2">Confirm Password</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Confirm Password' />
                            </div>
                            <div className="w-full py-3">
                               <button className="text-white w-full rounded-md bg-[#E51B48] py-2 px-4">Continue</button>
                            </div>
                            <div className="mt-3 py-4">
                                <p className='text-center'>Already have an account ? <Link className="cursor-pointer" href="/login"><span className="text-[#E51B48] cursor-pointer">Login</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register