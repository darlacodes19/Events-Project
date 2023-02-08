import { useState } from "react";
import DatePicker from "react-date-picker";
import {Input} from "../services/constants";



function Form () {

    
    
    return (

        <div> 

            <form onSubmit={handleSubmit} className="form">

            <span className="material-symbols-outlined">
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