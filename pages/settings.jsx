import React from 'react'
import Layout from '../components/Layout'
import SettingsTabs from '../components/SettingsTab'

const Settings = () => {
  return (
    <>
       <Layout>
           <div className='w-full bg-gray-50 min-h-screen py-10'>
               <div className='p-2 rounded-md w-4/5 mx-auto bg-white'>
                     <SettingsTabs/>
               </div>
           </div>
       </Layout>
    </>
  )
}

export default Settings