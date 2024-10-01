import axios from "axios";

const BASEURL = "https://posts-server-w1w6.onrender.com/films";

export const request = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})