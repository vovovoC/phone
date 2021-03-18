import Button from '../components/Button'
import Heading from '../components/Heading';
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import { useState } from 'react';
import LifeStyle from '../components/LifeStyle';
import Navbar from '../components/Navbar'
function SevenFrom(){

    const[chooseOne, setChooseOne] = useState({
        chosen:null,
        objects:[{id:0},{id:1},{id:2}]
    })

    const handleState=(index)=>{
        setChooseOne({
            ...chooseOne,
            chosen:chooseOne.objects[index]
        })
    }
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
          <Navbar countText={countText}/>
          <div className='hr'></div>
           <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        
          <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
                <div className='bodyRegister'>
                          <div className='container'>
                          <Heading name={nameBtn}/>
                          <div>
                            {  
                                chooseOne.objects.map((el, index)=>(
                                    <div 
                                    key={index}
                                    onClick={()=>{
                                        handleState(index)
                                        }}>
                                            <LifeStyle 
                                                text={arr[index]} 
                                                choose = {
                                                    chooseOne.chosen === chooseOne.objects[index]?'allow':'no'
                                                    }/> 
                                    </div>
                                ))    
                            }
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