import React from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'

export default function AddPost() {
  return (
    <div className='py-6'>
      <Container>
        <PostForm/>
      </Container>
      
    </div>
  )
}
