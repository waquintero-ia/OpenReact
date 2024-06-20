import axios from "axios"

const api_key = import.meta.env.VITE_KEY_API

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const getOne = (city) => {
    const request = axios.get(`${baseUrl}${city}&appid=${api_key}`)
    return request.then (response => response.data)
}

export default { getOne }