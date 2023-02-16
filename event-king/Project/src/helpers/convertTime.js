export default function convertTime(time) {
    
      
    
        const splitTime= time.split(':');
        
        const joinTime = splitTime.join('');
       
        //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN 
        const standard = parseInt(joinTime);

                    if (standard > 120000) {
                    const a = splitTime[0] -12
                    const standard = `${a}:${splitTime[1]}PM`
                    return standard
                    } else {
                       const standardTime = joinTime.split('')
                        return `${standardTime[1]}:${splitTime[1]}AM`

        

        }
    }

