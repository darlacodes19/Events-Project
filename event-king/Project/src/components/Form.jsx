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

    
       
       //startDateTime'2016-01-01T00:00:00Z'
       //endDateTime "2023-05-14T19:00:00Z"
        
       
//date from date-picker is an object 
       function formatDate(dateObject) {
            let year = dateObject.getFullYear()
            let month = dateObject.getMonth() + 1
            if (month < 10) {
                month = '0' + month;
            }

            let day = dateObject.getDate()

            if(day < 10) {
                day = '0' + day;
            }

            let dateString = `${year}-${month}-${day}T00:00:00Z`

            return dateString
            
       }
       console.log(startDate)
       console.log(formatDate(startDate))

    const handleSubmit = async (e) => {

        e.preventDefault();

//issues might be its not recognizing the form state
//another issure might be the input function not working 
//the issue was that I was doing axios call here also and you only need to do it once
        try{

            const response = await Input(location , formatDate(startDate) , formatDate(endDate))
         
          
            console.log(response)
           
            return response
        }catch(error) {
            console.log(error)
            
        }
            
       
 }
   
 //value is going from defined to undefined -----------> need to fix this

    
    return (

        <div> 

            <form onSubmit={handleSubmit} className="form">

            <span class="material-symbols-outlined">
            location_on
            </span>
                <input 
                placeholder="Which city are you in?"
                name="location"
                value={location}
                type="search"
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