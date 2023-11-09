import prompts from '../assets/constants.js'

const getRandomPrompt = () =>{
    prompt = prompts[Math.floor(Math.random() * prompts.length)]
    return prompt;
}

export default getRandomPrompt