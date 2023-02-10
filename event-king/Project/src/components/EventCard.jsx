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
            <h3 key={e.id}> {e.name} </h3>
        )
       })}

        </div>
    )

}