import { useState } from "react"
import {Input} from "../services/constants"

function Form () {

    const [formData , setFormData] = useState({
        keyword: "",
        startDateTime: "",
        endDateTime: "",
        city: ""
    })


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
                />

                <input 
                placeholder="startDateTime"
                name="startDateTime"
                value={formData.startDateTime}
                type="text"
                />

                <input 
                placeholder="endDateTime"
                name="endDateTime"
                value={formData.endDateTime}
                type="text"
                />

                <input 
                placeholder="city"
                name="city"
                value={formData.city}
                type="text"
                />

                <button> SEARCH </button> 
                
            </form> 


        </div>
    )
}

export default Form 