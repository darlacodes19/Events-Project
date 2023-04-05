import './App.css';
import { useState } from "react";
import { Input } from './services/constants';
import Form from './components/Form';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EventCard } from './components/EventCard';
import { NoEventsPage } from './components/NoEventsPage';

import "react-date-picker/dist/DatePicker.css";
// import "../node_modules/react-datepicker/dist/react-datepicker.css";
// import '../node_modules/react-date-picker/dist/DatePicker.css';

//Think about what the user wants/the user experience while on your page 
//Playing around with data from an API => Formatting it in a way that will be pleasing for the user 

function App() {

  const [location,setLocation] = useState("")
  const [startDate,setStartDate] = useState(new Date())
  const [endDate,setEndDate] = useState("")
  const [eventResults,setEventResults] = useState("")
  
   
  
   
        
      
      
 
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
      
      //  console.log("The type of variable is",typeof endDate)
      //  console.log(formatDate(startDate))

    const handleSubmit = async (e) => {

        e.preventDefault();

//issues might be its not recognizing the form state
//another issure might be the input function not working 
//the issue was that I was doing axios call here also and you only need to do it once
        try{

            const response = await Input(location , formatDate(startDate) , formatDate(endDate))
         
          
            let results = response.data._embedded.events

            setEventResults(results)
            

           
           
            return results
        }catch(error) {
            console.log(error)
            setEventResults(undefined)

           
            
            
        }
            
       
 }
   
 //value is going from defined to undefined -----------> need to fix this




 
  return (
    
    <div className="main-page">
       <Header />

       <div className='image-section'>
    
            <img src = {require ("./assets/main-image.jpg" )} className="main-page-image" />
       </div>

      <div className='main-section'>
        <h2 className='main-title'> Explore family frindly events you can count on </h2> 
        <Form 
       location={location}
       setLocation={setLocation}
       startDate={startDate}
       setStartDate={setStartDate}
       endDate={endDate}
       setEndDate={setEndDate}
       handleSubmit={handleSubmit}
        /> 
      </div>

      {/* do this only after clicking search */}


      {eventResults === undefined ? <NoEventsPage /> :  <EventCard eventResults={eventResults} /> }

      


      <Footer /> 
      
  </div>


  )}

export default App;
