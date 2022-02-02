import * as moment from 'moment';
export const setTimeZone = () => { 
    return new Date(moment().add(0 , "hours").toISOString().replace("Z","")) 
}