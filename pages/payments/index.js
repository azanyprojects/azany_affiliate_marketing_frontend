import { IconButton, Link, Stack } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Transactions } from '../../components/data';


const Payment = () => {
    return (
        <>
            <Layout>
                <div className="w-full bg-gray-50 min-h-screen py-10">
                    <Stack spacing={3}>
                        <div className='p-3 rounded-md w-[75%] mx-auto bg-white'>
                            <div className='py-4 w-[90%] mx-auto'>
                                <div className='flex items-center space-x-6'>
                                    <div className='rounded-md p-2 flex justify-center items-end h-40 w-[75%] imagesss'>
                                        <div className='w-4/5 mx-auto py-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='space-y-2'>
                                                    <p className='text-white text-2xl font-bold'>50,000</p>
                                                    <p className='text-white'>Available Balance</p>
                                                </div>
                                                <div className='p-3'>
                                                    <IconButton>
                                                        <VisibilityOffIcon className='text-white' />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-1 border rounded-md border-pink-500 p-2 flex justify-center items-center cursor-pointer h-40 w-[75%]'>
                                        <Link href="/payments/withdrawal" style={{ textDecoration: 'none' }}>
                                            <div className='w-4/5 mx-auto flex flex-col justify-center items-center cursor-pointer'>
                                                <div className='cursor-pointer flex flex-col justify-center items-center'>
                                                    <IconButton>
                                                        <NearMeIcon className='text-pink-600' />
                                                    </IconButton>
                                                    <p className='font-semi-bold text-black no-underline'>Withdraw</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Stack>

                    <div className='p-3 w-[75%] mx-auto bg-white mt-4'>
                        <div className="w-[90%] mx-auto">
                            <div className='py-3  space-x-4 flex items-center'>
                                <h2 className='font-bold'>Recent Transactions</h2>
                            </div>
                            {Transactions && (
                                Transactions.map((transaction) => (
                                    <div className="px-2 py-4">
                                        <div className='flex justify-between items-center text-center'>
                                            <div>
                                                <p className='font-semibold'>Withdrawal</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className="text-gray-400">Date</p>
                                                <p className='text-sm'>{transaction.date}</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className="text-gray-400">Time</p>
                                                <p className='text-sm'>{transaction.time}</p>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className="text-gray-400">Amount</p>
                                                <p className='text-sm'>{transaction.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Payment