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
    <div className='py-[8vh] '>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 mx-4 md:mx-12">
        {posts.map((post, index)=>{
        return(
          <div key={index} className={`group relative shadow-card hover:shadow-cardhover card rounded-xl`}>
            <img src={post.image} alt={post.prompt} className='w-full h-auto object-cover rounded-xl' />
            <div className="w-full group-hover:flex flex-col max-h-[94.5%] hidden relative md:absolute md:bottom-0 md:text-gray-300/70 p-4 hover:bg-gray-700/40 backdrop-blur-md">
              <p className='font-bold text-xl capitalize md:text-gray-200 '>{post.username}</p>
              <p className='text-sm overflow-y-auto md:text-gray-300'>{post.prompt}</p>
            </div>
          </div>
          )}
        )}
      </div>
    </div>
  )
}

export default Community
