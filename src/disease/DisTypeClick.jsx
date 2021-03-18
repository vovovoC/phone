import '../styles/DiseaseInfo.css'
import right from '../images/right.svg'
import bottom from '../images/bottom.svg'
function DisTypeClick({clicked}){
    return(
            <div className='disType'>
                    <div className='row align-items-center'>
                        <div className='11'>
                                <span>{text}</span>
                        </div>
                        <div className='col-1'>
                                <img src={clicked?bottom:right} alt='arrow'/>
                        </div>
                    </div>
                    <hr/>
            </div>
    )
}
export default DisTypeClick;