import '../styles/Logo.css'
import smallLogo from '../images/Frame.svg'
function SmallLogo(){
    return(
        <div className='container'>
            <img src={smallLogo} alt='vitelem logo'/>
        </div>
    )
}
export default SmallLogo;