import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Error = () => {
  return (
    <>
    <Stack width={'100%'}
    height={'100vh'}
    flexDirection={'row'}
    justifyContent={'center'}
    alignItems={'center'}
    sx={{
        background:'url("/error-bg.png")',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }}
    >
        <Stack p={5} border={'2px solid black'} 
        borderRadius={'10px'} 
        flexDirection={'column'}
        alignItems={'center'}
        gap={2}
        >
            <Typography variant='h3'>OOP's</Typography>
            <Typography variant='h6'>Page Not Found</Typography>
            <Button size='large' variant='contained'>Go Back</Button>
        </Stack>
    </Stack>
    </>
  )
}

export default Error