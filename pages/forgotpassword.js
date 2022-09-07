import Link from 'next/link'
import React from 'react'

const Forgotpassword = () => {
  return (  
        <>
            <div className="max-w-full min-h-screen">
                <div className="flex">
                    <div className="flex-1 hidden md:block">
                        <img src="/images/login2.png" className='h-screen object-cover w-full' />
                    </div>
                    <div className="flex-1 min-h-screen flex flex-col justify-center md:justify-start mt-3 py-4  items-center">
                        <div className="w-4/5 md:w-3/5 mx-auto">
                            <div className="py-2 space-y-2">
                                <h2 className="font-bold text-2xl">Forgot Password</h2>
                                <p className="text-gray-400">Enter your email or phone number and we will send you an OTP to reset your password</p>
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Email</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Email' />
                            </div>
                            <div className="w-full py-3 mt-3">
                                <button className="text-white w-full rounded-md bg-[#E51B48] py-2 px-4">Submit</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

  )
}

export default Forgotpassword