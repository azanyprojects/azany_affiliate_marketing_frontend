import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <>
            <div className="max-w-full min-h-screen">
                <div className="md:flex block items-center">
                    <div className="md:flex-1 hidden md:block">
                        <img src="/images/login2.png" className='h-screen object-cover w-full'/>
                    </div>
                    <div className="md:flex-1 h-screen  flex flex-col justify-center w-4/5 mx-auto items-center">
                        <div>
                            <div className="py-2">
                                <h2 className="font-bold text-2xl">Hello , Welcome Back!</h2>
                                <p className="text-gray-400">Please create a password and start using your account</p>
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Email</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Email' />
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Password</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter password' />
                            </div>
                            <div className='flex justify-end py-3 w-full text-right'>
                                <Link href="/forgotpassword" className='cursor-pointer'><p className='text-right cursor-pointer'>Forgot Password?</p></Link>
                                
                            </div>
                            <div className="w-full py-3">
                                <button className="text-white w-full rounded-xl bg-[#E51B48] py-2 px-4">Continue</button>
                            </div>
                            <div className="mt-3 py-4">
                                <p className='text-center'>Don't have an account ? <Link href="/register"><span className="text-[#E51B48] cursor-pointer">Sign Up</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login