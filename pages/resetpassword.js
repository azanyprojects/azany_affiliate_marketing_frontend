import React from 'react'

const Resetpassword = () => {
    return (
        <>
            <div className="max-w-full min-h-screen">
                <div className="flex items-center">
                    <div className="flex-1">
                        <img src="/images/login2.png" className='max-h-screen object-cover w-full' />
                    </div>
                    <div className="flex-1 flex flex-col justify-center w-full items-center">
                        <div>
                            <div className="py-2">
                                <h2 className="font-bold text-2xl">Reset Password</h2>
                                <p className="text-gray-400">please create a password and start using your accpunt</p>
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Password</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Password' />
                            </div>
                            <div className="py-3">
                                <label className="mt-2">Confirm Password</label>
                                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter password' />
                            </div>

                            <div className="w-full py-3">
                                <button className="text-white w-full rounded-md bg-[#E51B48] py-2 px-4">Continue</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resetpassword