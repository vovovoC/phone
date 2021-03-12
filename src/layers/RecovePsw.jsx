import Heading from '../components/Heading'
import Links from '../components/Links'
import '../styles/RecovePsw.css'
import { Link } from 'react-router-dom';
import SmallLogo from '../components/SmallLogo';
import BackButton from '../components/BackButton';
import {useHistory} from 'react-router-dom'
function RecovePsw(){
    const {goBack} = useHistory();
    const nameBtn = 'Восстановление пароля';
    const li='Перейти на страницу авторизации';
    return(
        <div className='row'>
        <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
        <div onClick={goBack}><BackButton/></div>
            <div className='container'>
                <SmallLogo/>
                     <div className='bodyPart'>
                     <Heading name={nameBtn}/>
                    <div className='container'>
                        <p className='sp'>
                            Мы отправили ссылку для восстановления
                            пароля на почту arman@cloudoc.kz. 
                            Перейдите по ссылке чтобы создать 
                            новый пароль.
                        </p>
                    </div>
                    <div className='phone'>
                        <Link to='./signin'>
                                <Links link={li}/>
                        </Link>
                    </div>
                     </div>
            </div>
        </div>
        <div className='col col-sm-2 col-md-3 col-lg-4'></div>
    </div>
    )
}
export default RecovePsw;
