import '../styles/Disease.css'
import trueG from '../images/icon-tick.svg'
import falseG from '../images/icon-tick copy.svg'
function Disease({nameDis,description,choose}){
    return(
    <div>
          <div className='dis'>
      <div className='row align-items-center'>
            <div className='col-11'>
                  <span className='name'>{nameDis}</span>
            </div>
            <div className='col-1'>
                  <img src={choose==='allow'?trueG:falseG} alt='choose'/>
            </div>
      </div>
                <div className='col-12'>
                    <span className='nameD'>
                        {description}
                    </span>
                </div>
        <hr/>
          </div>
    </div>
    )
}
export default Disease;