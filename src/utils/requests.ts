import axios from "axios";
import { ChatDataInterface } from "./interfaces";
// const queryIndexUrl = "http://127.0.0.1:5000/api/queryIndex"
const queryIndexUrl = "https://form-chat.onrender.com/api/queryIndex"


export async function queryIndex(prompt:String, chatHistory: any){
    try{
        // console.log('Bearer token',process.env.NEXT_PUBLIC_BEARER_TOKEN)
        const response = await axios.post(queryIndexUrl, {
            'prompt' : prompt,
            'chatHistory': chatHistory,
        }, {
            // withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
            }})
            return response.data
    }
    catch(error){
        throw error
    }
}