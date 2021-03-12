import Button from '../components/Button'
import Heading from '../components/Heading';
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import { useState } from 'react';
import LifeStyle from '../components/LifeStyle';
import NotLifeStyle from '../components/NotLifeStyle';

  var arrChoose=[
        false,
        false,
        false,
        false,
        false,
        false
    ];
    const arr = [
        'Просто оздоровиться и предупредить болезни',
        'Похудеть и лучше выглядеть',
        'Поправиться и/или нарастить мышцы',
        'Научиться управлять болезнями',
        'Я участник клинического исследования',
        'Другое'
    ];

function EightFrom(){

    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(false);
    const [c3, setC3] = useState(false);
    const [c4, setC4] = useState(false);
    const [c5, setC5] = useState(false);

    const handleChange=(el)=>{
        if(el===0){
            setC1(!c1);setC2(false);setC3(false);setC4(false);setC5(false);
        }
        if(el===1){
            setC2(!c2);setC1(false);setC3(false);setC4(false);setC5(false);
        }
        if(el===2){
            setC3(!c3);setC1(false);setC2(false);setC4(false);setC5(false);
        }
        if(el===3){
            setC4(!c4);setC2(false);setC3(false);setC1(false);setC5(false);
        }
        if(el===4){
            setC5(!c5);setC2(false);setC3(false);setC4(false);setC1(false);
        }
    }

    const nameBtn = 'Каков характер вашего питания?';
    const nameBtnSub ='Продолжить';
    const podText = 'Можно выбрать несколько целей';
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
                          <p className='podText'>{podText}</p>
                          <div>
                              <div onClick={()=>{
                                handleChange(0);
                              }}>
                                  {c1? <LifeStyle text={arr[0]}/>:<NotLifeStyle text={arr[0]}/>}
                              </div>
                              <div onClick={()=>{
                                  handleChange(1);
                              }}>
                                  {c2? <LifeStyle text={arr[1]}/>:<NotLifeStyle text={arr[1]}/>}
                              </div>
                              <div onClick={()=>{
                                  handleChange(2);
                              }}>
                                  {c3? <LifeStyle text={arr[2]}/>:<NotLifeStyle text={arr[2]}/>}
                              </div>
                              <div onClick={()=>{
                                handleChange(3);
                              }}>
                                  {c4? <LifeStyle text={arr[3]}/>:<NotLifeStyle text={arr[3]}/>}
                              </div>
                              <div onClick={()=>{
                                  handleChange(4);
                              }}>
                                  {c5? <LifeStyle text={arr[4]}/>:<NotLifeStyle text={arr[4]}/>}
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
export default EightFrom;