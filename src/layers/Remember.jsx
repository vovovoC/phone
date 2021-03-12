import Button from '../components/Button'
import Heading from '../components/Heading';
import Inputs from '../components/Inputs'
import Links from '../components/Links';
import '../styles/SignIn.css'
import { Link } from 'react-router-dom';
import SmallLogo from '../components/SmallLogo';
import BackButton from '../components/BackButton';
import {useHistory} from 'react-router-dom'
function Remember(){
    const {goBack} = useHistory();

    const nameBtn = 'Восстановить';
    const placeholderName = 'Введите почту';
    const li = 'Введите почту чтобы восстановить пароль';
    const li2 = 'Вспомнил пароль';
    return(
        <div className='row'>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
            <div onClick={goBack}><BackButton/></div>
                <div className='container'>
                    <SmallLogo/>
                 <div className='bodySignin'>
                 <Heading name={li}/>
                   <form>
                        <Inputs name={placeholderName}/>
                       <Link to='./recove'>
                        <Button name={nameBtn}/>
                       </Link>
                   </form>
                   <div className='phone'>
                   <Link to='./remember'>
                            <Links link={li2}/>
                    </Link>
                   </div>
                   </div>
                 </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default Remember;