
import '../styles/Life.css'
import trueG from '../images/icon-tick.svg'
function LifeStyle({text}){
    return(
        <div className='lifeStyle'>
          <div className='row align-items-center'>
              <div className='col-10'>
                    <span>{text}</span>
              </div>
              <div className='col-2'>
                    <img src={trueG} alt='choose'/>
              </div>
          </div>
            
        </div>
    )
}
export default LifeStyle;