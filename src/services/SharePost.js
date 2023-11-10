import baseUrl from "../assets/constants/baseUrl";

const sharePostToCommunity = async ()=>{
    const postID = localStorage.getItem('postID')
    console.log(postID)   
    try {
        const response = await fetch(baseUrl + '/api/post/share', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                postID : postID
            })
        });
        const data = await response.json();
        return data;
    } catch (err) {
        const data = {error : true, message : err}
        return data;
    }
}
export default sharePostToCommunity;