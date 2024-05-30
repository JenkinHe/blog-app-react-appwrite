import React,{useEffect,useState} from 'react'
import {Link,useNavigate,useParams} from "react-router-dom"
import appwriteService from '../appwrite/config'
import Button from '../components/Button'
import Container from '../components/container/Container'
import parse from 'html-react-parser'
import {useSelector} from 'react-redux'

export default function Post() {
  const [post,setPost]=useState(null)
  const {slug} =useParams()
  const navigate = useNavigate()
  const userData = useSelector((state)=>state.auth.userData)

  const isAuthor=post&&userData?post.userId===userData.$id:false

  const deletePost=()=>{
    appwriteService.deletePost(post.$id).then((status)=>{
      if(status){
        appwriteService.deleteFile(post.featuredImage);
        navigate('/')
      }
    })
  }
  return (
    <div>Post</div>
  )
}
