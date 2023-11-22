import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { jwtDecode } from "jwt-decode"
import defaultImg from '../assets/initialImg.gif'
import PacmanLoader from 'react-spinners/PacmanLoader'
import fetchActualImage from '../services/FetchActualImage.js'
import getRandomPrompt from '../services/GetRandomPrompt.js'
import { UilShare } from '@iconscout/react-unicons'
import savePost from '../services/SavePost.js'
import sharePostToCommunity from '../services/SharePost.js'


const CreatePost = ({setIsLoggedIn}) => {

  const user = jwtDecode(localStorage.getItem('userAuth'))
  const [ prompt, setPrompt ]  = useState('')
  const [ isLoading , setIsLoading ] = useState(false)
  const [ img, setImg ] = useState(defaultImg)

  //To fetch image and show that to user
  const fetchImage = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    const image = await fetchActualImage(prompt)
    if(image && image.error){
      setImg(defaultImg)
      toast.error("image in queue, retry...")
    }else {
      setImg(image.url)
      //For storing the post in Database.
      storePost(image)
    }
    setIsLoading(false)
  }

  //To store the post.
  const storePost =async (image) =>{
    var reader = new FileReader();
    reader.readAsDataURL(image.blob); 
    reader.onloadend = async function() {
      var base64data = reader.result;
      console.log(base64data)   
      const response = await savePost(base64data, prompt, user.name, user.id)
      if(response && response.success === false){
        toast.error(response.message)
      }else {
        const postID = response.postID
        localStorage.removeItem('postID')
        localStorage.setItem('postID', postID)
        toast.success(response.message)
      }
    }
  }

  //To share the post.]
  const sharePost = async(e)=>{ 
    e.preventDefault()
    const response = await sharePostToCommunity()
    if(response && response.error){
      toast.error(response.message)
    }else {
      toast.success(response.message)
    }
  }

  //To fetch random prompt.
  const handleSurpriseClick =(e)=>{
    e.preventDefault()
    setPrompt(getRandomPrompt)
  }

  //To check if user is logged in
  const navigateTo = useNavigate();
  useEffect(()=>{
    const authToken = localStorage.getItem('userAuth')
    if(!authToken){
      navigateTo('../')
      toast('Please Login first.')
    }else{
      setIsLoggedIn(true)
    }
  },[])

  return (
    <div className='pt-[10vh] mb-[6vh] md:mb-0 mx-4 md:mx-20 min-h-[100vh] flex flex-col gap-4 md:flex-row justify-center items-center '>

      <ToastContainer/>

      <div className="left w-full md:w-1/3 place-items-center h-[40%]">
        <div className="heading font-bold text-3xl mb-2 tracking-tight ">CREATE POST</div>
        <div className="description">Welcome <span className='capitalize tracking-wider font-lobster text-xl'>{user.name}</span>. Re-<span className='font-lobster '>iMAGIN</span> your thoughts.</div>
        <div className="desc-2 text-sm">Create stunning visual images through AI only using textual prompts.</div>
        <form method='post' className='flex flex-col'>
          <div className='flex flex-row pt-6'>
            <span className='font-bold tracking-tight'>Prompt:</span>
            <button className='mx-4 py-1 px-2 rounded-md bg-gray-400/20 hover:bg-gray-400/30' onClick={handleSurpriseClick} title='Generate a random Prompt.'>Surprise me.</button>
          </div>
          <textarea
                name="prompt"
                className='border-2 focus:outline-none border-blue-300 focus:border-blue-600 p-[4px] rounded-lg px-3 my-3 w-full md:w-[25vw]'
                placeholder='Enter whatever you want to visualize.'
                onChange={e=>setPrompt(e.currentTarget.value)} 
                value={prompt}/>
          <button onClick={fetchImage} className='p-2 bg-gradient-to-br from-blue-700 to-blue-600/70 hover:bg-gradient-to-r rounded-md w-full md:w-[25vw] my-3' type="submit">Generate</button>
        </form>
      </div>

      <div className="right w-full flex flex-col md:w-2/5 items-center">
        <div className="mainImgContainer rounded-md grid place-items-center w-full md:h-[70vh] h-[40vh] aspect-auto overflow-hidden">
          {isLoading ? 
                      <PacmanLoader
                      color={"#93c5fd"}
                      loading={isLoading}
                      size={50}
                      speedMultiplier={0.8}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    /> : 
                      <img src={img} className='h-[40vh] md:h-[70vh] md:w-inherit w-full rounded-md md:rounded-xl border-2 border-blue-300'/>}
        </div>
        {(img !== defaultImg && !isLoading) && <button className="shareButton my-4 p-2 rounded-md bg-gradient-to-br from-green-700/90 to-green-500/50 hover:bg-gradient-to-r w-full flex justify-center gap-2 font-bold" onClick={sharePost}>Share <span><UilShare/></span></button>}
      </div>

    </div>
  )
}

export default CreatePost