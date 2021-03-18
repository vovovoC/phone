import Button from '../components/Button'
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
import RegCount from '../components/RegCount';
import { useState } from 'react';
import Disease from '../components/Disease';
import Heading from '../components/Heading';
import doctors from '../images/doctors.svg'

const arrName = [
    'Еренчина Эльмира Рауфовна',
    'Тюлебекова Гульнара Касымовна',
    'Ермакова Ирина Александровна',
    'Бекжанова Айсулу Лесбековна',
    'Елемесова Гульжан Фарахатовна'
];
const arrProf = [
    'Кардиолог',
    'Гастроэнтеролог',
    'Терапевт',
    'Терапевт',
    'Эндокринолог'
];
const countText='Врачи';
const headerText = 'Выберите персонального врача из числа участников программы VitAlem'
function DoctorList(){
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
    const nameBtnSub ='Выбрать';
 
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
          <div className='container' style={{marginTop: '50px'}}>
          <img src={doctors} alt='doctors' className='doctorsList'/>
                              <Heading name={headerText}/>
                              <div style={{marginTop: '20px'}}>
                            {  
                                arrName.map((el, index)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                           toggle(index)
                                        }}>
                                           <Disease 
                                                nameDis={arrName[index]} 
                                                description={arrProf[index]}
                                                choose = {toggleAllow(index)?'allow':'no'}/>   
                                    </div>
                                ))    
                            }
                            
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
export default DoctorList;