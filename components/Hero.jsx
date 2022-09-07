import React from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import TemporaryDrawer from './drawer';

const Hero = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <>
            <div classNmae="relative">
                <nav className="w-4/5 mx-auto py-2">
                    <div className='flex justify-between items-center'>
                        <h2 className='text-pink-400 font-bold text-2xl font-mono'>Azany</h2>
                        <div className='block md:hidden'>
                            <IconButton onClick={()=>toggleDrawer("left")}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div className="md:flex hidden items-center justify-between space-x-6">
                            <p className='text-xl font-bold'>EN</p>
                            <Link href="/register"><button className="bg-[#E51B48] py-2 px-6 rounded-md text-white">Register</button></Link>
                            <Link href="/login"><button className='py-2 px-8 border border-[#E51B48] rounded-md text-[#E51B48]'>Login</button></Link>
                        </div>
                    </div>
                </nav>
                <div className='py-4 mt-2 space-y-3 w-full'>
                    <h1 className='mdtext-4xl text-2xl font-bold text-center'>Earn Money From Our Networking</h1>
                    <h1 className='md:text-4xl text-2xl font-bold text-center'>And Referral System</h1>
                </div>
                <p className='text-center text-gray-500 mt-2'>Manage multiple affiliate programs, track affiliate partner performance, assign commissions and issue payouts on one</p>
                <div className='flex justify-end w-full mt-6'>
                    <div className="flex justify-center  w-4/5  items-end bg-gray-200 rounded-l-[50px]">
                        <img src="/images/azany.png" className="md:w-[50%] w-full" />
                    </div>
                </div>
            </div>
            <TemporaryDrawer toggleDrawer={toggleDrawer} state={state} setState={setState}/>
        </>
    )
}

export default Hero