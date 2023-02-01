import { useState } from "react";
import DatePicker from "react-date-picker";
import {Input} from "../services/constants";


function Form () {

    const [location,setLocation] = useState("")
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState("")
   
       console.log(location)
 
    // function handleChange (event) {
    //    setLocation( prevLocation =>  {
    //     return {
    //         ...prevLocation,
    //         [event.target.name]: event.target.value
    //     }
        
    //    })

    // }

     // const [formData , setFormData] = useState({
        //     city: "",
        //     startDate: new Date()
        
        // })

    // function handleChange(e, name) {

    //     if(name) {
    //         setFormData( prevFormData => {
    //             return {
    //                 ...prevFormData,
    //                 [name] : e

    //             }
                
    //         })
    //     } else {
    //         setFormData ( prevFormData => {  
    //             return {
    //                 ...prevFormData,
    //                 [e.target.name]: e.target.value
    //             }          
               
    //         })
    //     }
    // }

    
       
       
        
    const handleSubmit = async (e) => {

        e.preventDefault();

//issues might be its not recognizing the form state
//another issure might be the input function not working 
//the issue was that I was doing axios call here also and you only need to do it once
        try{

            const response = await Input(location, startDate , endDate)
         
          
            console.log(response)
           
            return response
        }catch(error) {
            console.log(error)
            
        }
            
       
 }
   
 //value is going from defined to undefined -----------> need to fix this

    
    return (

        <div> 

            <form onSubmit={handleSubmit}>


                <input 
                placeholder="city"
                name="location"
                value={location}
                type="text"
                onChange= {(event) => setLocation(event.target.value)}
                />


        <DatePicker 
            selected={startDate} 
            onChange={(date) => {setStartDate(date)}}
            format="y-MM-dd"
            value={startDate} 
            name="startDate"
            minDate={new Date()}
             />


        <DatePicker 
            selected={endDate} 
            onChange={ (date ) => setEndDate(date)}
            format="y-MM-dd"
            value={endDate}
            name="endDate"
             />


                <button type="submit"> SEARCH </button> 
                
            </form> 

            
        </div>
    )
}

export default Form 