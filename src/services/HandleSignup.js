const handleSignup = async(credentials)=>{
    const response = await fetch('http://localhost:8000/api/user/signup', {headers:{
        'Content-Type' : 'application/json'
    },
    method : 'post',
    body : JSON.stringify({
        firstName : credentials.firstName,
        lastName : credentials.lastName,
        dateOfBirth : credentials.dateOfBirth,
        email : credentials.email,
        password : credentials.password,
        mobile : credentials.mobile
    })
    })
    const data = await response.json()
    console.log(data)
    return data;
}
export default handleSignup