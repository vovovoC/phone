import Button from '../components/Button'
import Heading from '../components/Heading';
import Inputs from '../components/Inputs'
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import Allow from '../components/Allow';
import AllowNot from '../components/AllowNot';
import InputPsw from '../components/InputPsw';
import { useState } from 'react';
import Navbar from '../components/Navbar'
function TwoFrom(){
    const nameBtn = 'Создайте учетную запись';
    const placeholder1 = 'Введите электронную почту';
    const placeholder2 = 'Придумайте пароль';
    const placeholder3 = 'Повторите пароль';
    const nameBtnSub ='Продолжить';
    const arr =[
        'Я согласен(на) с Условиями Лицензионного и Сервисного Соглашения VitAlem',
        'Я согласен(на) с Условиями Конфиденциальности',
        'Я согласен(на) получать от VitAlem новостные и другие материалы'
        ]
    const countText='Регистрация 2 из 9';
    const [a1, setA1] = useState(false);
    const [a2, setA2] = useState(false);
    const [a3, setA3] = useState(false);
    return(
        <div className='row'>
         <Navbar countText={countText}/>
            <div className='hr'></div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4'>

        
                <div className='bodyRegister'>
                        <div className='container'>
                        <Heading name={nameBtn}/>
                   <form>
                        <Inputs name={placeholder1}/>
                        <InputPsw name={placeholder2}/>
                        <InputPsw name={placeholder3}/> 

                        <div onClick={()=>setA1(!a1)}>
                            {a1?  <Allow txt={arr[0]}/>:  <AllowNot txt={arr[0]}/>}
                        </div>  
                        <div onClick={()=>setA2(!a2)}>
                            {a2?  <Allow txt={arr[1]}/>:  <AllowNot txt={arr[1]}/>}
                        </div> 
                        <div onClick={()=>setA3(!a3)}>
                            {a3?  <Allow txt={arr[2]}/>:  <AllowNot txt={arr[2]}/>}
                        </div> 
                            <Button name={nameBtnSub}/>
                        
                   </form>
                        </div>
                   </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default TwoFrom;