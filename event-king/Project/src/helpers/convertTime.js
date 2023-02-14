export default function convertTime(time) {
    

    
        let splitTime= time.split(':');
        let joinTime = splitTime.join();
        let remove = joinTime.replace(/,/g, '');
        //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN 
        let standard = parseInt(remove);

                    if (standard > 120000) {
                    let a= splitTime[0] -12
                    let standard = `${a}:${splitTime[1]}PM`
                    return standard
                    } else {
                        return `${splitTime[0]}${splitTime[1]}`

        

        }
    }

