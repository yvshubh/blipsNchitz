import { Avatar, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { IoIosMore } from 'react-icons/io'

const Comments = () => {
  const _700 = useMediaQuery("(min-width: 700px)")

  return (
    <>
    <Stack flexDirection={'row'} justifyContent={'space-between'} px={2} pb={4} 
    borderBottom={'1px solid gray'} mx={'auto'} width={'90%'}  
    >
        <Stack flexDirection={'row'} gap={_700 ? 2 : 1}>
            <Avatar src='' alt='' />
            <Stack flexDirection={'column'}>
                <Typography variant='h6' fontWeight={'bold'} fontSize={'0.9rem'}>
                    _4949
                </Typography>
                <Typography variant='subtitle2' fontSize={'0.9rem'}>
                    This is a comment
                </Typography>
            </Stack>
        </Stack>
        <Stack flexDirection={'row'} alignItems={'center'} color={'GrayText'} gap={1}
        fontSize={'0.9rem'}
        >
            <p>23min</p>
            <IoIosMore size={_700? 28 : 20}/>
        </Stack>
    </Stack>
    </>
  )
}

export default Comments