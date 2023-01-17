import { useEffect } from "react"
import { useState } from "react"
import {Input} from "../services/constants"
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

        useEffect(() => {
            fetchEvent()
        },[])
  
         //fingure our handleClick function parameters 
    async function fetchEvent () {


        try{

            const response = await axios.get(Input(formData.keyword,formData.city))
            console.log(response)
        }catch(error) {
            console.log(error)
        }
            
       
    }
   
    
   
    
    return (

        <div> 

            <form>

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

                <button onClick={fetchEvent}> SEARCH </button> 
                
            </form> 


        </div>
    )
}

export default Form 