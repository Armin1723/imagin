import baseUrl from "../assets/constants/baseUrl";

const handleSignup = async(credentials)=>{
    const response = await fetch(baseUrl + '/api/user/signup', {
    headers:{
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