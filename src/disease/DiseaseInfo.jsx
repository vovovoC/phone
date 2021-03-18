import CalendarNavbar from "../calendar/CalendarNavbar";
import '../styles/DiseaseInfo.css'
import { useState } from "react";
import Heading from '../components/Heading'
import Search from "../components/Search";
function DiseaseInfo(){
    const name = 'Болезнь'
    const [state, setState] = useState(false)
 
    return(
        <div className='DiseaseInfo'>
            <CalendarNavbar name={name}/>
            <div className='row justify-content-center' style={{marginTop:'70px'}}>
            <div className='allBtns'>
        <button 
        
          onClick={()=>{
            setState(!state)
        }}
        className={!state?'btns border-inactive':'btns-inactive border-inactive' } 
        >Диагностика</button>
        <button 
       
          onClick={()=>{
            setState(!state)
          }}
          className={state?'btns border-btns':'btns-inactive border-btns' } 
          >Эпизоды болезней</button>
    </div>
        </div>
          <Heading name='Вам нездоровится? Здесь можно узнать возможные причины '/>
          <div className={!state ? 'search':'null'}>
            <Search searchName='Поиск симптомов'/>
          </div>
          <div className={state?'choose':'null'}>
            
          </div>
        </div>

    )
}
export default DiseaseInfo;