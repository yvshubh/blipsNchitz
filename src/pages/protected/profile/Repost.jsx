import React from 'react'
import Post from '../../../components/home/Post'
import { Stack, useMediaQuery } from '@mui/material'

const Repost = () => {
  const _700 = useMediaQuery("(min-width: 700px)")

  return (
    <>
    <Stack flexDirection={'column'} gap={2} mb={10} mx={'auto'} width={_700 ?'800px': '90%'}>
      <Post />
    </Stack>
    </>
  )
}

export default Repost