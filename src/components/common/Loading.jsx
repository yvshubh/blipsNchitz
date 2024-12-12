import { CircularProgress, Stack } from '@mui/material'
import React from 'react'


const Loading = () => {
  return (
        <Stack flexDirection={'row'} minHeight={'50vh'} width={'100%'} height={'100%'} justifyContent={'center'}
        alignItems={'center'} my={5}>

            <CircularProgress color='success' />
        </Stack>
  )
}

export default Loading