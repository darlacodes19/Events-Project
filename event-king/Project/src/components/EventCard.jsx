import formatDate from "../helpers/formatDate"

export function EventCard ({eventResults}) {

    

    if(!eventResults) return " Sorry No events"
    console.log(eventResults)

    // const events = eventResults.map(function(element,index) {
    //     return element
    // })

    // console.log(events)

    return (
        <div className="events-card-div">

       {eventResults.map((e) => {
        return (
            <div key={e.id} className="event-card"> 
            <img src={e.images[0].url}  alt="event description" className="event-image"/>
            <h3> {e.name} </h3>
            <p> {formatDate(e.dates.start.localDate)}</p>
            <p> {e.dates.start.localTime}</p>
            <p> {e._embedded.venues[0].name}</p>
           <a href={e.url} target="_blank" rel="noreferrer">   <button> Get Tickets </button> </a>
            
            </div>
            
             
        )
       })}

        </div>
    )

}