import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Comments from '../../../components/home/post/Comments'

const Replies = () => {
  const _700 = useMediaQuery("(min-width: 700px)")

  return (
    <>
    <Stack flexDirection={'column'} mx={'auto'} gap={2} width={_700 ?'800px': '90%'}>

      <Comments />

    </Stack>
    </>
  )
}

export default Replies