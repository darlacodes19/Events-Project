export default function formatDate (date) {
        let splitDate = date.split('-')

        let month = splitDate[1]

        if (month === '01') {
           
            return `JAN ${splitDate[2]}  ${splitDate[0]}`
        } else if (month === '02' ) {
            
            return `FEB ${splitDate[2]}  ${splitDate[0]}`
        } else if (month === '03') {
            
            return `MAR ${splitDate[2]}  ${splitDate[0]}`
        } else if (month === '04') {
            
            return `APR ${splitDate[2]}  ${splitDate[0]}`
        } else if (month === '05') {
            
            return `MAY ${splitDate[2]}  ${splitDate[0]}`
        } else if (month === '06') {
            
            return `JUN ${splitDate[2]}  ${splitDate[0]}`
        }else if (month === '07') {
            
            return `JUL ${splitDate[2]}  ${splitDate[0]}`
        }else if (month === '08') {
            
            return `AUG ${splitDate[2]}  ${splitDate[0]}`
        }else if (month === '09') {
            
            return `SEP ${splitDate[2]}  ${splitDate[0]}`
        }else if (month === '10') {
            
            return `OCT ${splitDate[2]}  ${splitDate[0]}`
        }else if (month === '11') {
            
            return `NOV ${splitDate[2]}  ${splitDate[0]}`
        }else {
            
            return `DEC ${splitDate[2]}  ${splitDate[0]}`
        }
        
        
       
        
      

}
