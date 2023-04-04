
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";




function Form ({location , endDate , startDate , setEndDate , setLocation , setStartDate , handleSubmit}) {

    
    
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
            wrapperClassName="datePicker"
             />


        <DatePicker 
            selected={endDate} 
            onChange={ (date ) => setEndDate(date)}
            format="y-MM-dd"
            value={endDate}
            name="endDate"
            className="datePicker"

             />


                <button type="submit" className="submit-btn"> SEARCH </button> 
                
            </form> 

           

            
        </div>
    )
}

export default Form 