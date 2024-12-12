import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Comments from '../../components/home/post/Comments'
import Post from '../../components/home/Post'

const SinglePost = () => {

  const [comment, setComment] = useState('')

  return (
    <>
    <Stack flexDirection={'column'} gap={2} my={5}>
        <Post />
        <Stack flexDirection={'column'} gap={2} width={'80%'} mx={'auto'}
        >
            <Comments />
        </Stack>
        <TextField variant='outlined' autoFocus placeholder='Write a comment...' id='comment'
        sx={{width: '50%', mx:'auto', my: 5, p:1}}
        onChange={(e) => setComment(e.target.value)}
        />
    </Stack>
    </>
  )
}

export default SinglePost