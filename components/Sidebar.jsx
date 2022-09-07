import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
const Sidebar = () => {
   return (
      <>
         <div className="min-h-screen shadow-sm bg-white w-[25%]  fixed">
            <div className='min-h-screen flex justify-center items-center w-4/5 mx-auto'>
               <div className='w-full flex flex-col justify-center items-center'>
                  <div className="space-y-2 w-full flex flex-col items-center justify-center">
                     <img src="/images/dashboard.png" className='object-cover' />
                     <h2 className='font-bold text-center'>Damola Spencer</h2>
                  </div>
                  <div className='space-y-2 p-2 w-full'>
                     <Link href="/dashboard">
                        <div className='py-3 px-2 flex items-center justify-center space-x-3 cursor-pointer text-gray-400 hover:shadow-sm  hover:bg-white  w-full hover:text-pink-500'>
                           <DashboardIcon />
                           <h2>Dashboard</h2>
                        </div>
                     </Link>
                     <Link href="/payments">
                        <div className='py-3 px-2 flex items-center justify-center space-x-6 cursor-pointer text-gray-400 hover:shadow-sm hover:bg-white w-full hover:text-pink-500'>
                           <AccountBalanceWalletIcon />
                           <h2>Payment</h2>
                        </div>
                     </Link>
                     <Link href="/settings">
                        <div className='py-3 px-2 flex items-center space-x-6 justify-center cursor-pointer text-gray-400 hover:shadow-sm  hover:bg-white w-full hover:text-pink-500'>
                           <SettingsIcon />
                           <h2>Settings</h2>
                        </div>
                     </Link>
                     <Link href="/profile">
                        <div className='py-3 px-2 flex items-center space-x-8 justify-center cursor-pointer text-gray-400 hover:bg-white hover:shadow-sm w-full hover:text-pink-500'>
                           <AccountCircleIcon />
                           <h2>Profile</h2>
                        </div>
                     </Link>
                     <div className='py-3 px-2 flex items-center justify-center space-x-3 cursor-pointer text-gray-400  w-full hover:text-pink-500 hover:shadow-sm'>
                        <LogoutIcon />
                        <h2>Log Out</h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Sidebar;