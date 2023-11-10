import baseUrl from "../assets/constants/baseUrl";

const fetchPosts = async () => {
    try {
        const response = await fetch(baseUrl + '/api/post/fetch', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        const data = {error : true, message : err}
        return data;
    }
}
export default fetchPosts;