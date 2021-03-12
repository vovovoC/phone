import '../styles/Life.css'
import falseG from '../images/icon-tick copy.svg'
function NotLifeStyle({text}){
    return(
        <div className='lifeStyle'>
        <div className='row align-items-center'>
            <div className='col-10'>
                  <span>{text}</span>
            </div>
            <div className='col-2'>
                  <img src={falseG} alt='choose'/>
            </div>
        </div>
          </div>
    )
}
export default NotLifeStyle;