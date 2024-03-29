import formatDate from "../helpers/formatDate"
import convertTime from "../helpers/convertTime"

export function EventCard ({eventResults}) {

    

    if(!eventResults) return " "
    console.log(eventResults)

    return (
        <div className="events-card-div">

       {eventResults.map((e) => {
        return (
            <div key={e.id} className="event-card"> 
            <img src={e.images[0].url}  alt="event description" className="event-image"/>
            <h3 className="event-title"> {e.name} </h3>
            <div className="date-display"> 
            <p className="date"> {formatDate(e.dates.start.localDate)}</p>
            <span> &#x2022; </span>
            <p className="time"> {convertTime(e.dates.start.localTime)}</p>
            </div>
            <p className="venue-name"> {e._embedded.venues[0].name}</p>
            {/* <p> {e._embedded.venues[0].address.line1}</p>
            <p> {e._embedded.venues[0].city.name}</p>
            <p> {e._embedded.venues[0].state.stateCode}</p> */}
           <a href={e.url} target="_blank" rel="noreferrer">   <button className="event-card-btn"> Get Tickets </button> </a>
            
            </div>
            
             
        )
       })}

        </div>
    )

}