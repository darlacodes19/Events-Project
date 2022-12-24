import { useState } from "react"
// import {Input} from "../services/constants"

function Form () {

    const [formData , setFormData] = useState({
        keyword: "",
        startDateTime: "",
        endDateTime: "",
        city: ""
    })

    console.log(formData)
    function handleChange (event) {
       setFormData( prevFromDate =>  {
        return {
            ...prevFromDate,
            [event.target.name]: event.target.value
        }
        
       })

    }
    
    // async function handleClick () {
    //     const res = await Input()
    //     let event = res.data._embedded.events
    //     console.log(event)
    //   }
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

                <button> SEARCH </button> 
                
            </form> 


        </div>
    )
}

export default Form 