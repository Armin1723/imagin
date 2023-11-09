import React, { useEffect } from 'react'

const Community = ({setIsLoggedIn}) => {

  //To check if user is logged in
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
    <div className='pt-[8vh]'>
      Community
    </div>
  )
}

export default Community
