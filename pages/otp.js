import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'



const Otp = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className="max-w-full min-h-screen">
        <div className="flex">
          <div className="flex-1 hidden md:block">
            <img src="/images/login2.png" className='h-screen object-cover w-full' />
          </div>
          <div className="flex-1 flex h-screen flex-col justify-center  items-center">
            <div className="w-[75%] mx-auto">
              <div className="py-2 space-y-2">
                <h2 className="font-bold text-3xl text-center">Email Verification</h2>
                <p className="text-gray-400 text-center">Please enter the verification code sent to s************@gmail.com</p>
              </div>
              <div className="py-3">
                {/* <label className="mt-2">Email</label>
                <input className="w-full py-2 px-4 bg-gray-100 outline-none rounded-md" placeholder='Enter Email' /> */}
                <MuiOtpInput  length={6} value={value} onChange={handleChange} />
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

export default Otp