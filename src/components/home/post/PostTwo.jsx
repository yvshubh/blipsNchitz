import { Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'

const PostTwo = () => {
  const _300 = useMediaQuery("(min-width: 300px)")
  const _400 = useMediaQuery("(min-width: 400px)")
  const _500 = useMediaQuery("(min-width: 500px)")
  const _700 = useMediaQuery("(min-width: 700px)")

  return (
    <>
    <Stack flexDirection={'column'} justifyContent={'space-between'}>
      <Stack flexDirection={'column'} gap={2}>
        <Stack flexDirection={'column'}>
          <Typography variant='h6' fontSize={'1rem'} fontWeight={'bold'}>
            Aditya JJ
          </Typography>
          <Typography variant='h5' fontSize={'1.2rem'} >
            this was on my mind today
          </Typography>
        </Stack>
        <img src="/error-bg.png" alt="" loading='lazy' width={'400px'} height={'auto'} />
      </Stack> 
      
      <Stack flexDirection={'column'} gap={1}>
        <Stack flexDirection={'row'} gap={2} m={1}>
          <FaRegHeart size={32}/>
          <FaRegComment size={32}/>
          <FaRetweet size={32}/>
          <IoMdSend size={32}/>
        </Stack>
        <Stack flexDirection={'row'} gap={1} position={'relative'} top={-3} left={4}>
        <Typography variant='caption' color='GrayText' fontSize={'1.1rem'}>
          2 likes .
        </Typography>
        <Typography variant='caption' color='GrayText' fontSize={'1.1rem'}>
          1 commnet 
        </Typography>
        </Stack>
      </Stack>
   
    </Stack>
    </>
  )
}

export default PostTwo