import Button from '../components/Button'
import Heading from '../components/Heading';
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import { useState } from 'react';
import LifeStyle from '../components/LifeStyle';
import NotLifeStyle from '../components/NotLifeStyle';


function SevenFrom(){

    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(false);
    const [c3, setC3] = useState(false);

    const nameBtn = 'Какой у вас образ жизни?';
    const nameBtnSub ='Продолжить';
    const arr = [
        'Малоподвижный, сидячий',
        'Средней активности',
        'Активный, спортивный'
    ];
    const countText='Регистрация 7 из 9';
    return(
        <div className='row'>
           <div className='topNav'>
          <div className='row align-items-center'>
           <div className='col-3 col-sm-4 align-self-center'>
           <BackButton/>
           </div>
                <div className='col-9 col-sm-8'>
              <RegCount countText={countText}/>
                </div>
           </div>
          </div>
          <div className='hr'></div>
           <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        
          <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
                <div className='bodyRegister'>
                          <div className='container'>
                          <Heading name={nameBtn}/>
                          <div>
                              <div onClick={()=>{
                                  setC1(!c1);
                                  setC2(false);
                                  setC3(false);
                              }}>
                                  {c1? <LifeStyle text={arr[0]}/>:<NotLifeStyle text={arr[0]}/>}
                              </div>
                              <div onClick={()=>{
                                  setC2(!c2);
                                  setC1(false);
                                  setC3(false);
                              }}>
                                  {c2? <LifeStyle text={arr[1]}/>:<NotLifeStyle text={arr[1]}/>}
                              </div>
                              <div onClick={()=>{
                                  setC3(!c3);
                                  setC2(false);
                                  setC1(false);
                              }}>
                                  {c3? <LifeStyle text={arr[2]}/>:<NotLifeStyle text={arr[2]}/>}
                              </div>
                          </div>
                  <div className='bottom'>
                   <form>
                          <Button name={nameBtnSub}/>
                    </form>
                   </div>
                   </div>
            </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        
        </div>
    )
}
export default SevenFrom;