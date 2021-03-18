import first from '../images/first.svg'
import second from '../images/second.svg'
import third from '../images/third.svg'
import fourth from '../images/fourth.svg'
import fifth from '../images/fifth.svg'
import '../styles/Menu.css'
function Menu(){
    return(
        <div className='grid'>
                <div className='grid-container'>
                    <img src={first} alt='health'/>
                </div>
                <div className='grid-container'>
                    <img src={second} alt='disease'/>
                </div>
                <div className='grid-container'>
                    <img src={third}  alt='doctor'/>  
                </div>
                <div className='grid-container'>
                    <img src={fourth}  alt='biosensor'/>  
                </div>
                <div className='grid-container'>
                    <img src={fifth}  alt='profile'/>
                </div>
        </div>
    )
}
export default Menu;