import { useEffect  } from "react"
import { useState } from "react"
// import {Input} from "../services/constants"
import axios from "axios"

function Form () {

   
    
    const [formData , setFormData] = useState({
        keyword: "",
        startDateTime: "",
        endDateTime: "",
        city: ""
    })

    
    function handleChange (event) {
       setFormData( prevFromDate =>  {
        return {
            ...prevFromDate,
            [event.target.name]: event.target.value
        }
        
       })

    }

    
        // useEffect(() => {
        //     handleSubmit()
        // },[])
   
       
         //fingure our handleClick function parameters 
    const handleSubmit = async (e) => {

        e.preventDefault();

//issues might be its not recognizing the form state
//another issure might be the input function not working 
        try{

            const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=w8fpajhBrG7VnfkigJmi9lHQOtiI0gYZ&includeFamily=only&keyword=${formData.keyword}&city=${formData.city}`)
           console.log(formData.keyword)
          
            console.log(response)
           
            return response
        }catch(error) {
            console.log(error)
        }
            
       
 }
   
   
    
    return (

        <div> 

            <form onSubmit={handleSubmit}>

                <input 
                placeholder="Keyword"
                name="keyword"
                value={formData.keyword}
                type="text"
                onChange={handleChange}
                />

                <input 
                placeholder="startDateTime"
                name="startDateTime"
                value={formData.startDateTime}
                type="text"
                onChange={handleChange}
                />

                <input 
                placeholder="endDateTime"
                name="endDateTime"
                value={formData.endDateTime}
                type="text"
                onChange={handleChange}
                />

                <input 
                placeholder="city"
                name="city"
                value={formData.city}
                type="text"
                onChange={handleChange}
                />

                <button type="submit"> SEARCH </button> 
                
            </form> 


        </div>
    )
}

export default Form 