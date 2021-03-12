import topBar from '../images/Topbar.svg'
import '../styles/Logo.css'
function BackButton(){
    return(
        <div className={
            window.innerWidth >= 960 ? 'centerBack' : 'back'
        }>
         <img src={topBar} alt ='back'/>
        </div>
    )
}
export default BackButton;