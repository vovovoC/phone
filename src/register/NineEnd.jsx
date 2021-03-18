import Button from '../components/Button'
import Heading from '../components/Heading';
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import { useState } from 'react';
import LifeStyle from '../components/LifeStyle';
import Navbar from '../components/Navbar'
    const arr = [
        'Просто оздоровиться и предупредить болезни',
        'Похудеть и лучше выглядеть',
        'Поправиться и/или нарастить мышцы',
        'Научиться управлять болезнями',
        'Я участник клинического исследования',
        'Другое'
    ];

function NineFrom(){
    const[ch, setCh] = useState({
        object:[]
    })
    const setState=(index)=>{
        setCh({object:[...ch.object,index]})
    }
    const removeState=(index)=>{
        var i = ch.object.indexOf(index)
        ch.object.splice(i,1)
        setCh({object:ch.object})
    }
    const toggle=(index)=>{
        if(!ch.object.includes(index)){
            setState(index)
            return;
        }
        else{
            removeState(index)
            return;
        }
    }
    const toggleAllow=(index)=>{
        if(ch.object.includes(index)) return true
        else return false
    }
    const nameBtn = 'Каков характер вашего питания?';
    const nameBtnSub ='Продолжить';
    const podText = 'Можно выбрать несколько целей';
    const countText='Регистрация 9 из 9';
    return(
        <div className='row'>
         <Navbar countText={countText}/>
          <div className='hr'></div>
           <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        
          <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
                <div className='bodyRegister'>
                          <div className='container'>
                          <Heading name={nameBtn}/>
                          <p className='podText'>{podText}</p>
                          <div>
                            {  
                                arr.map((el, index)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                           toggle(index)
                                        }}>
                                           <LifeStyle 
                                                text={arr[index]} 
                                                choose = {toggleAllow(index)?'allow':'no'}/>   
                                    </div>
                                ))    
                            }
                            </div>
                  <div style={{ marginTop:'40px',marginBottom:'40px'}}>
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
export default NineFrom;