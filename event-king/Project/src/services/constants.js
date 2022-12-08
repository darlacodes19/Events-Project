import axios from "axios"
// import dotenv from 'dotenv'
// dotenv.config()


// You can use the &source parameter countryCode=US
// filter by postal code : postalCode 
//filter by city: city 
//filter by keyword : keyword 

// const ROOT_URL ='https://app.ticketmaster.com/discovery/v2/

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'

export async function Input (keyword,startDateTime, endDateTime,city) {
try {
    // console.log(process.env.REACT_APP_API_KEY)
    const response = await axios.get(`${BASE_URL}&apikey=${process.env.REACT_APP_MY_KEY}&includeFamily&keyword=${keyword}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&city=${city}`)
    return response
    // console.log(response)
}catch(error) {
    console.log(error)
}
}
