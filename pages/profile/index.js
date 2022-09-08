import { Stack, TextField } from '@mui/material';
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Layout from '../../components/Layout';
const Profile = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout>
      <div className="w-full bg-gray-50 min-h-screen py-10">
        <div className="w-full bg-gray-50 min-h-screen py-10">
          <Stack spacing={2}>
            <div className='p-2 rounded-md w-4/5 mx-auto bg-white'>
              <div className="space-y-3 w-4/5 mx-auto">
                <div className='flex items-start space-y-3 justify-start flex-col'>
                  <img src="/images/dashboard.png" className='object-cover' />
                  <div className="">
                    <button className='bg-[#E51B48] text-white py-2 px-3 rounded-md'>Edit Profile</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <div className='w-4/5 mx-auto bg-white p-4'>
                <div className='p-2'>
                  <div className="flex justify-between items-center">
                    <p className='font-bold'>Profile</p>
                    <p className='text-[#E51B48] font-semibold'>Edit</p>
                  </div>
                  <div className='space-y-3 py-4'>
                    <p>Date of Birth</p>
                    <TextField variant='outlined' className='w-4/5 outline-none bg-gray-50' placeholder='Date of Birth' />
                  </div>
                  <div className='space-y-3 py-4'>
                    <p>Nationality</p>
                    <TextField variant='outlined' className='w-4/5 outline-none bg-gray-50' placeholder='Enter Nationality' />
                  </div>
                  <div className='space-y-3 py-4'>
                    <p>Country Of Residence</p>
                    <FormControl className="w-4/5">
                      {/* <InputLabel id="demo-simple-select-label">Country of Residence</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Vountry of Residence"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ghana</MenuItem>
                        <MenuItem value={20}>South Africa</MenuItem>
                        <MenuItem value={30}>Nigeria</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='space-y-3 py-4'>
                    <p>City</p>
                    <TextField variant='outlined' className='w-4/5 outline-none bg-gray-50' placeholder='Enter City' />
                  </div>
                  <div className='space-y-3 py-4'>
                    <p>Phone Number</p>
                    <TextField variant='outlined' className='w-4/5 outline-none bg-gray-50' placeholder='Enter Your Phone Number' />
                  </div>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </Layout>
  )
}

export default Profile