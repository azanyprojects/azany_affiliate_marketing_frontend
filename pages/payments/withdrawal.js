import { Button, IconButton, Stack, TextField } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Layout from '../../components/Layout'
import Link from 'next/link'
import PaymentModal from '../../components/paymentModal';

const Withdrawal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Layout>
            <div className='bg-gray-50 min-h-screen w-full py-10'>
                <div className='py-5 bg-white w-[90%] mx-auto'>
                    <div className='w-[90%] mx-auto'>
                        <Stack spacing={3}>
                            <div>
                                <Link href="/payments">
                                    <IconButton>
                                        <ArrowBackIcon />
                                    </IconButton>
                                </Link>
                            </div>
                            <p>Kindly Enter Your Bank Details</p>
                            <div className='space-y-3'>
                                <p>First Name</p>
                                <TextField variant='outlined' className='w-3/5 outline-none bg-gray-100' placeholder='Enter Full Name' />
                            </div>
                            <div className='space-y-3'>
                                <p>Bank Name</p>
                                <TextField variant='outlined' className='w-3/5 outline-none bg-gray-100' placeholder='Enter Bank Name' />
                            </div>
                            <div className='space-y-3'>
                                <p>Account Number</p>
                                <TextField variant='outlined' className='w-3/5 outline-none bg-gray-100' placeholder='Enter Account Number' />
                            </div>
                            {/* <div className='space-y-3'>
                                <p>Withdrawal Amount</p>
                                <TextField variant='outlined' className='w-3/5 outline-none bg-gray-100' placeholder='Enter Withdrawal Amount' />
                            </div> */}
                            <div className='space-y-3'>
                                <button className="bg-[#E51B48] w-4/5 py-2 px-3 rounded-md text-white" onClick={handleOpen}>Submit</button>
                            </div>
                        </Stack>
                    </div>
                </div>
                <PaymentModal open={open} handleClose={handleClose} handleOpen={handleOpen}/>
            </div>
        </Layout>
    )
}

export default Withdrawal