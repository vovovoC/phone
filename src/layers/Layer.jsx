import Button from '../components/Button'
import Heading from '../components/Heading';
import Inputs from '../components/Inputs'
import Links from '../components/Links';
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom';
import SmallLogo from '../components/SmallLogo';
import {useHistory} from 'react-router-dom'
import InputPsw from '../components/InputPsw';
function Layer(){

    const {goBack} = useHistory();

    const nameBtn = 'Войти';
    const placeholderName = 'Введите почту';
    const placeholderPsw = 'Введите пароль';
    const li = 'Забыли пароль?';
    const li2 = 'Пройдите регистрацию';
    const click1 = 'Нет аккаунта? ';
    const dis = 'Получите доступ к онлайн сервису у Вашего врача или позвоните ';
    const phoneNum = '+7 (771) 762 7077';
    return(
        <div className='row'>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
               <div onClick={goBack}><BackButton/></div>
                <div className='container'>
                    <SmallLogo/>
                        <div className='bodySignin'>
                        <Heading name={nameBtn}/>
                   <form>
                        <Inputs name={placeholderName}/>
                        <InputPsw name={placeholderPsw}/>
                        <Button name={nameBtn}/>
                   </form>
                   <div className='phone'>
                    <Link to='./remember'>
                            <Links link={li}/>
                    </Link>
                   </div>
                    <div className='forget'>
                        <span>
                            <Links link={click1}/>
                            <Link>
                                <Links link={li2}/>
                            </Link>
                        </span>
                    </div>
                     <div className='phone'>
                        <span>
                            <Links link={dis}/>
                                <a href='tel:+77717627077' style={{
                                    cursor:'pointer'
                                }}>
                                <Links link={phoneNum}/> 
                                </a>
                                 
                        </span>
                    </div>
                        </div>
                   </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default Layer;