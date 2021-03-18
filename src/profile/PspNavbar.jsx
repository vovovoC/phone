import BackButton from "../components/BackButton";
import '../styles/Calendar.css'
import download from '../images/download.svg'
function PspNavbar({name}){
    return(
        <div className='nav'>
        <div className='col-1'>
            <BackButton/>
        </div>
        <div className='col-10'>
            <span className='span'>{name}</span>
        </div>
       <div className='col-1'>       
        <div className='img'> 
            <img src={download} alt='download'/>
        </div>
       </div>
    </div>
    )
}
export default PspNavbar;