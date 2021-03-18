import topBar from '../images/Topbar.svg'
import '../styles/Logo.css'
function BackButton(){
    return(
        <div className='back'>
         <img src={topBar} alt ='back'/>
        </div>
    )
}
export default BackButton;