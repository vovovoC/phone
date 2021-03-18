import calendar from '../images/calendar.svg'
import '../styles/Calendar.css'
function CalendarNavbar({name}){
    return(
        <div className={name!=='Болезнь'?'nav':'nav descNull'}>
            <div className='col-1'></div>
          <div className='col-10'>
          <span className='span'>{name}</span>
          </div>
          
           <div className='col-1'>       
           <div className={name!=='Болезнь'?'img':'null'}> 
           <img src={calendar} alt='calendar'/>
           </div>
           </div>
        </div>
    )
}
export default CalendarNavbar;