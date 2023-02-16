import axios from "axios"


const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'


export async function Input (city, startDateTime , endDateTime) {
try {
    
    const response = await axios.get(`${BASE_URL}&apikey=${process.env.REACT_APP_MY_KEY}&includeFamily=only&city=${city}&startDateTime=${startDateTime}&endDateTime=${endDateTime}`)
    return response
   
}catch(error) {
    console.log(error)
    console.log("input hello")
}
}
