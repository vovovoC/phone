
import Heading from '../components/Heading';
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
import RegCount from '../components/RegCount';
import DisType from '../components/DisType';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
const arr = [
    'Сердце и сосуды',
    'Пищеварительный тракт',
    'Печень, желчевыводящие пути',
    'Аллергия, астма',
    'Кожа, волосы',
    'Беременность',
    'Женские болезни',
    'Мочевыводящие органы',
    'Мозг, нервная система',
    'Глазные болезни',
    'Мозг, нервная система',
    'Глазные болезни'
]
const urlArray = [
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart',
    'heart'
]
const headerText = 'Выберите интересующую Вас болезнь(и) из числа перечисленных органов и систем'
const text = 'Управление болезнями'
function DiseaseList(){
    return(
        <div className='row'>
        <div className='topNav'>
       <div className='row align-items-center'>
        <div className='col-3 col-sm-4 align-self-center'>
        <BackButton/>
        </div>
             <div className='col-9 col-sm-8'>
           <RegCount countText={text}/>
             </div>
        </div>
       </div>
       <div className='hr'></div>
        <div className='col col-sm-2 col-md-3 col-lg-4'></div>
       <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
                       <div className='container'>
                       <div style={{
                               marginTop: '60px'
                       }}>
                           <Heading name={headerText}/>
                           <Search searchName='Поиск'/>
                         {  
                             arr.map((el, index)=>(
                                 <div key={index}>
                                      <Link to={`./${urlArray[index]}`}  style={{textDecoration:'none'}}>
                                        <DisType nameDis={arr[index]}/>   
                                    </Link>
                                 </div>
                             ))    
                         }
                         </div>
         </div>
         </div>
         <div className='col col-sm-2 col-md-3 col-lg-4'></div>
     </div>
    )
}
export default  DiseaseList;
