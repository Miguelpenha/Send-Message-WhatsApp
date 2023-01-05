import axios from 'axios'

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
})

export default api