import baseUrl from "../assets/constants/baseUrl";

const savePost = async (image, prompt, username, userID) => {
    try {
        const response = await fetch(baseUrl + '/api/post/save', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                image : image,
                prompt : prompt,
                username : username,
                userID : userID
            })
        });
        const data = await response.json();
        return data;
    } catch (err) {
        const data = {error : true, message : err}
        return data;
    }
    }

export default savePost;