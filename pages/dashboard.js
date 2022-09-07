import { Grid, Stack } from '@mui/material';
import React from 'react'
import { downlines, Transactions } from '../components/data';
import Layout from '../components/Layout';
import Link from 'next/link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Dashboard = () => {
  return (
    <>
      <div>
        <Layout>
          <div className="w-full bg-gray-50 min-h-screen py-10">
            <Stack spacing={2}>
              <div className='p-2 rounded-md w-4/5 mx-auto bg-white'>
                <div className="space-y-3">
                  <h2 className="text-gray-400">Welcome Spencer</h2>
                  <h2 className="text-2xl font-bold">Have a good day!</h2>
                </div>
              </div>
              <div className="w-full">
                <div className='p-2 rounded-md w-4/5 mx-auto bg-white'>
                  <Grid container spacing={2}>
                    <Grid item md={3}>
                      <div className='flex bg-[#f1f1fd] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">Total Income</h2>
                          <h2 className="font-bold text-xl">50,000</h2>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className=' bg-[#fff3f4] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">Total Withdrawal</h2>
                          <h2 className="font-bold text-xl">30,000</h2>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className='flex bg-[#eaf4ff] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">Available Balance</h2>
                          <h2 className="font-bold text-xl">20,000</h2>
                        </div>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div className='flex bg-[#fff2d2] p-6 rounded-lg justify-center items-center'>
                        <div className="text-center">
                          <h2 className="text-center">No of Referral</h2>
                          <h2 className="font-bold text-xl">150</h2>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="w-full">
                <div className='w-4/5 mx-auto p-2'>
                  <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={12} md={7}>
                      <img src="/images/rename.png" className="object-cover" />
                      <div className="py-4 mt-2 w-full bg-white shadow-md">
                        <div className="p-4 w-[90%] mx-auto">
                          <div className='w-full flex justify-between items-center'>
                            <h2 className="text-bold text-xl">Recent Transactions</h2>
                            <Link href="/dashboard/transactions"><p className="text-pink-400 cursor-pointer">View all</p></Link>
                          </div>
                          {Transactions && (
                            Transactions.slice(0, 4).map((transaction) => (
                              <div className="px-2 py-4">
                                <div className='flex justify-between items-center text-center'>
                                  <div>
                                    <p>Withdrawal</p>
                                  </div>
                                  <div className='space-y-2'>
                                    <p className="text-gray-400">Date</p>
                                    <p>{transaction.date}</p>
                                  </div>
                                  <div className='space-y-2'>
                                    <p className="text-gray-400">Time</p>
                                    <p>{transaction.time}</p>
                                  </div>
                                  <div className='space-y-2'>
                                    <p className="text-gray-400">Amount</p>
                                    <p>{transaction.amount}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <div className="p-3 bg-white rounded-md w-full">
                        <div className="w-full mx-auto py-4">
                          <div>
                            <input className="bg-gray-100 w-full rounded-md py-2 px-2" placeholder='Search' />
                          </div>
                          <div className="py-4">
                            <div className="flex w-full items-center justify-between">
                              <h2 className='font-bold'>Downlines</h2>
                              <Link href="/dashboard/downlines">
                                <h2 className="text-pink-400 cursor-pointer">View all</h2>
                              </Link>
                            </div>
                            {downlines && (
                              downlines.map((downline) => (
                                <div className='flex py-4 mt-3 w-full mx-auto items-center justify-between'>
                                  <div>
                                    <img src={downline.images} />
                                  </div>
                                  <div>
                                    <h2>{downline.name}</h2>
                                  </div>
                                  <div>
                                    <h2>{downline.price}</h2>
                                  </div>
                                  <div>
                                    <h2 className='text-gray-300'>{downline.time}</h2>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="p-2  w-full mx-auto">
                <div className="px-3 py-4 w-4/5 mx-auto bg-blue-500 rounded-lg">
                  <div className="w-[90%] mx-auto">
                    <Stack spacing={2}>
                      <p className="text-white">Referral Code</p>
                      <div className='flex items-center space-x-3 w-full'>
                        <div className='p-4 rounded-[20px] bg-white w-3/5 flex justify-between items-center'>
                          <p className='text-gray-400'>https://www.shopazany.com/spencer244</p>
                          <div className='space-x-3 flex items-center'>
                            <p className='text-pink-400'>Copy</p>
                            <ContentCopyIcon className='text-pink-400' />
                          </div>
                        </div>
                        <div className='p-4 rounded-[20px bg-white w-2/5 flex justify-between items-center'>
                          <div className="w-4/5 mx-auto flex justify-between items-center">
                            <WhatsAppIcon className="text-green-400" />
                            <FacebookIcon className="text-blue-400" />
                            <InstagramIcon className="text-pink-300" />
                            <TwitterIcon className="text-blue-300" />
                          </div>
                        </div>
                      </div>
                    </Stack>

                  </div>
                </div>
              </div>
            </Stack>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Dashboard;