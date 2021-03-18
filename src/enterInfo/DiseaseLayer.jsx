import Button from '../components/Button'
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import { useState } from 'react';
import Disease from '../components/Disease';

const arrDesc = [
    'Атеросклероз - наиболее распространенное хроническое заболевание артерий, с формированием одиночных и множественных очагов липидных, главным образом холестериновых отложений...',
    'Врожденный порок сердца является заболеванием, возникающим с рождения и связанным с нарушением структуры и функций сердца. Сердце состоит из клапанов, камер, и связанных с ними...',
    'При перекачивании сердцем крови по всему организму на стенки артерий действует сила, называемая артериальным давлением....',
    'Инфекционный эндокардит или Эндокардит – инфекция внутренней оболочки камер и клапанов сердца.',
    'Ишемическая болезнь сердца (ИБС) является лидирующей причиной смертности среди мужчин и женщин. Причиной ишемической болезни сердца является скопление атеросклеротических бляшек в...'
];
const arrName = [
    'Атеросклероз',
    'Врожденные пороки сердца',
    'Гиперторния - высокое артериальное давление',
    'Инфекционные эндокардит',
    'Ишемическая болезнь сердца'
];
const countText='Сердце и досуги';
function DiseaseLayer(){
    // const {
    //     arrDesc=[],
    //     arrName=[],
    //     countText
    // } = props
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
            
                          <div className='container'>
                          <div style={{
                                  marginTop: '50px'
                          }}>
                            {  
                                arrName.map((el, index)=>(
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                           toggle(index)
                                        }}>
                                           <Disease 
                                                nameDis={arrName[index]} 
                                                description={arrDesc[index]}
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
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default DiseaseLayer;