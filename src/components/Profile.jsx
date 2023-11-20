import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchTempUser from '../services/FetchTempUser.js'
import fetchUserPosts from '../services/FetchUserPosts.js'

const Profile = ({ isLoggedIn , setIsLoggedIn }) => {
    const [ user, setUser ] = useState(null)
    const params = useParams();
    const { id } = params
    const [ userId, setUserId ] = useState(id)
    const [ posts, setPosts ] = useState([])

    useEffect(()=>{
        const authToken = localStorage.getItem('userAuth')
        if(!authToken){
        navigateTo('../')
        toast('Please Login first.')
        }else{
            setIsLoggedIn(true)
            const fetchUser = async()=>{
                const response = await fetchTempUser(userId)
                if(response && response.error)
                    alert(response.message)
                else{
                    setUser(response.user)
                    const response2 = await fetchUserPosts(userId)
                    if(response2 && response2.error)
                        alert(response2.message)
                    else{
                        setPosts(response2.posts)
                    }
                }
            }
            fetchUser()
        }
    },[])

  return (
    <div className='my-[8vh] flex flex-col'>
        <div className="topCard mx-12 flex flex-col py-4 ">
            <p className='text-3xl font-extrabold capitalize'>{ user && user.firstName }</p>
            <p className='font-bold'>Posts: {posts && posts.length}</p>
            <p className='font-bold'>User ID : <span className='font-light text-sm'>{user && user.id}</span></p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 mx-4 md:mx-12">
            {posts && posts.map((post, index)=>{
            return(
                <div key={index} className={`group relative shadow-card hover:shadow-cardhover card rounded-xl border-2 border-teal-500`}>
                <img src={post.image} alt={post.prompt} className='w-full h-auto object-cover rounded-xl' />
                <div className="w-full group-hover:flex flex-col max-h-[94.5%] hidden relative md:absolute md:bottom-0 md:text-gray-300/70 p-4 hover:bg-gray-300/10">
                <p className='text-sm overflow-y-auto'>{post.prompt}</p>
                </div>
                </div>
            )}
            )}
        </div>
    </div>
  )
}

export default Profile
