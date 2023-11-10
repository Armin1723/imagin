const hashToImage = async(hash)=>{
    const url = 'https://arimagesynthesizer.p.rapidapi.com/get?hash=' + hash + '&returnType=image';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ad4acf9edamsh0bfb917fe54b229p1342b7jsn4e70405d6233',
            'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.blob()
        if(result.type === 'application/json'){
            const image = {error : true, message : 'Image not found/ Kindly retry.'}
            return image
        }
        const imageUrl = URL.createObjectURL(result);
        const image = { error : false , url : imageUrl, blob : result}
        return image 
    } catch (error) {
        console.error(error);
    }
}

const fetchActualImage = async(userPrompt)=>{
    const url = 'https://arimagesynthesizer.p.rapidapi.com/generate';
    console.log(userPrompt)
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'ad4acf9edamsh0bfb917fe54b229p1342b7jsn4e70405d6233',
            'X-RapidAPI-Host': 'arimagesynthesizer.p.rapidapi.com'
        },
        body: new URLSearchParams({
            prompt: userPrompt,
            id: '12345',
            width: '768',
            height: '768',
            inferenceSteps: '50',
            guidanceScale: '7.5',
            img2img_strength: '0.8'
        })
    };


    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if(result.hash){    
            const image = await hashToImage(result.hash);
            return image   
        }
        else{
            const image = {error : true, message : result.message}
            return image
        }
    } catch (error) {
        console.error(error);
    }
}

export default fetchActualImage