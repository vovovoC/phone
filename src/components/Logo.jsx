import path1 from '../images/Group 4.svg'
import '../styles/Logo.css'

function Logo(){
    return(
        <div>
            <div className='container'>
               <img src={path1} alt='vitalem logo'/>
            </div>
        </div>
    )
}
export default Logo;