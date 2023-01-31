import { useState } from "react";
import DatePicker from "react-date-picker";
import {Input} from "../services/constants";


function Form () {
   
    const [formData , setFormData] = useState({
        city: ""
    })

    const [startDate, setStartDate] = useState(new Date());
    
    
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
//the issue was that I was doing axios call here also and you only need to do it once
        try{

            const response = await Input(formData.city, formData.startDateTime , formData.endDateTime)
         
          
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
                placeholder="city"
                name="city"
                value={formData.city}
                type="text"
                onChange={handleChange}
                />

                <button type="submit"> SEARCH </button> 
                
            </form> 

            <DatePicker 
            selected={startDate} 
            onChange={ (date) => setStartDate(date)}
            format="y-MM-dd"
            value={startDate}
             />

        </div>
    )
}

export default Form 