import React, { useEffect, useState } from 'react'
import fetchPosts from '../services/FetchPosts.js'

const Community = ({setIsLoggedIn}) => {

  const [ posts, setPosts ] = useState([])

  //To check if user is logged in
  useEffect(()=>{
    const authToken = localStorage.getItem('userAuth')
    if(!authToken){
      navigateTo('../')
      toast('Please Login first.')
    }else{
      setIsLoggedIn(true)
      const fetchAllPosts =async()=>{
        const response = await fetchPosts()
        if(response && response.error){
          toast.error(response.message)
        }else {
          setPosts(response.posts)
        }
      }
      fetchAllPosts();
    }
  },[])
  return (
    <div className='pt-[8vh] py-4'>
      <div className="grid md:grid-cols-3 grid-cols-1 px-6 gap-5">
      {posts.map((post, index)=>{
        return(
          <div key={index} className='border-2 border-black rounded-md shadow-lg shadow-gray-500'>
            <img src={post.image} alt={post.prompt} className='rounded-md' />
            <p className='font-bold pl-4 '>{post.username}</p>
            <p>{post.prompt}</p>
          </div>
        )}
      )}
      </div>
    </div>
  )
}

export default Community
