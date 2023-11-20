import baseUrl from "../assets/constants/baseUrl";

const fetchUserPosts = async(userId)=>{
    try{
        const response = await fetch(baseUrl + '/api/user/fetchPost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                userId
            })
        })
        const data = response.json()
        return data;
    }catch(err){
        const data = {error : true, message : err}
        return data;
    }
}
export default fetchUserPosts