import baseUrl from "../assets/constants/baseUrl"

const fetchTempUser = async (id) => { 
    try {
        const response = await fetch(baseUrl + '/api/user/fetch', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                id
            })
        })
        const data = response.json()
        return data;
    }catch(err){
        const data = {error : true, message : err}
        return data;
    }
}
export default fetchTempUser