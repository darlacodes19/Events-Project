export function EventCard ({eventResults}) {

    

    if(!eventResults) return "null"
    console.log(eventResults)

    // const events = eventResults.map(function(element,index) {
    //     return element
    // })

    // console.log(events)

    return (
        <div>

       {eventResults.map((e) => {
        return (
            <div key={e.id}> 
            <h3> {e.name} </h3>
            <img src={e.images[0].url}  alt="event description"/>
            {/* <p> {e.description}</p>
            <p> {e.url}</p> */}
            <p> {e.dates.start.localDate}</p>
            <p> {e._embedded.venues[0].name}</p>
            <button> More information </button>
            
            </div>
            
             
        )
       })}

        </div>
    )

}