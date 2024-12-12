import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FiArrowLeft } from 'react-icons/fi'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import { RxAvatar } from 'react-icons/rx'
import { TbEdit } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const _300 = useMediaQuery("(min-width: 300px)")

  return (
    <>
    <Stack
    flexDirection={'row'}
    alignItems={'center'}
    justifyContent={'space-around'}
    maxWidth={'100%'}
    >
        <FiArrowLeft size={_300 ? 32 : 24} className='image-icon' color='black' />

        <Link to={'/'} className='link' >
        <GoHome size={_300 ? 32 : 24} color='black' />
        </Link>
        
        <Link to={'/search'} className='link' >
        <IoIosSearch size={_300 ? 32 : 24}  color='black'/>
        </Link>
        
        <TbEdit size={_300 ? 32 : 24} className='image-icon' color='black' />

        <CiHeart size={_300 ? 32 : 24} color='black' />

        <Link to={'/profile/threads/1'} className='link'>
        <RxAvatar size={_300 ? 32 : 24} color='black'/>
        </Link>

    </Stack>
    </>
  )
}

export default Navbar