import Button from '../components/Button'
import Heading from '../components/Heading';
import Inputs from '../components/Inputs'
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import SmallLogo from '../components/SmallLogo';
import '../styles/SignIn.css'
import {useHistory} from 'react-router-dom'
import InputPsw from '../components/InputPsw';
function NewPsw(){

    const {goBack} = useHistory();
    const nameBtn = 'Сохранить';
    const placeholderPsw2 = 'Повторите пароль';
    const placeholderPsw = 'Придумайте новый пароль';
    const li = 'Восстановление пароля';
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
                        <Inputs name={placeholderPsw}/>
                        <InputPsw name={placeholderPsw2}/>
                       <Link to='./saved'>
                       <Button name={nameBtn}/>
                       </Link>
                   </form>
                 </div>
                   </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default NewPsw;