import Heading from '../components/Heading'
import Links from '../components/Links'
import '../styles/RecovePsw.css'
import { Link } from 'react-router-dom';
import SmallLogo from '../components/SmallLogo';
import BackButton from '../components/BackButton';
import {useHistory} from 'react-router-dom'
function Saved(){
    const {goBack} = useHistory();

    const nameBtn = 'Ваш новый пароль';
    const l = 'сохранен';
    const li='Перейти на страницу авторизации';
    return(
        <div className='row'>
        <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
        <div onClick={goBack}><BackButton/></div>
            <div className='container'>
                <SmallLogo/>
                      <div className='bodyPart'>
                      <span>
                       <Heading name={nameBtn}/>
                        <br/>
                        <Heading name={l}/>
                       </span>
                      </div>
                    <div className='phone'>
                        <Link to='./signin'>
                                <Links link={li}/>
                        </Link>
                    </div>
            </div>
        </div>
        <div className='col col-sm-2 col-md-3 col-lg-4'></div>
    </div>
    )
}
export default Saved;