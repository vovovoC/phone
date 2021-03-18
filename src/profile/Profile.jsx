import CalendarNavbar from "../calendar/CalendarNavbar";
import PersonName from "./PersonName";
import '../styles/Profile.css'
import Size from "./Size";
import Desc from "./Desc";
import Menu from './Menu'
import {Link} from 'react-router-dom'
import DisType from '../components/DisType'
function Profile(){
    const name = 'Мой профиль'
    const arr = [
        'Возраст',
        'Рост',
        'Вес'
    ]
    const arr2 = [
        '32 года',
        '176 см',
        '84 кг'
    ]
    const arrAim = [
        'Сбросить вес и управлять гипертонией',
        'Гипертония, Диабет, Гепатит',
        'Малоподвижный',
        'Стремлюсь к здоровому питанию',
        'Бекжанова А.Л. – VitAlem Clinic'
    ]
    const arrDescAim = [
        'Цели',
        'Интересующие болезни',
        'Образ жизни',
        'Характер питания',
        'Персональный врач'
    ]
    const urlArray = [
        'recommendation',
        'purpose',
        'passport',
        'aboutProject'
    ]
    const arrOfThings=[
        'Рекомендации врача',
        'Назначенные лекарства',
        'Паспорт здоровья',
        'О проекте'
    ]
    return(
        <div className='profile'>
            <CalendarNavbar name={name}/>
            <PersonName personName='Коротков Андрей Николаевич' personAge='32 года, мужчина' email='akorotkov@gmail.com'/>
           <div className='div'>
           {
                  arr.map((el, i)=>(
                       <div key={i}>
                            <Size sizeName={arr[i]} sizeNum={arr2[i]}/>
                       </div>
                  ))
            }
           </div>
           <div  className='div'>
           {
                  arrAim.map((el, i)=>(
                       <div key={i}>
                           <Desc nameAim={arrAim[i]} descAim={arrDescAim[i]} hel='color'/>
                       </div>
                  ))
            }
           </div>
          <div className='div'>
          {  
                             arrOfThings.map((el, index)=>(
                                 <div key={index}>
                                      <Link to={`./${urlArray[index]}`} style={{textDecoration:'none'}}>
                                        <DisType nameDis={arrOfThings[index]}/>   
                                    </Link>
                                    
                                 </div>
                             ))    
            }
          </div>
          <div className='div'>
               <Link to='/' style={{textDecoration:'none'}}>
               <DisType nameDis='Выйти из профиля'/></Link>
          </div>
            <div style={{marginTop:'6px'}}>
              <Link to='/' style={{textDecoration:'none'}}>
                <Menu/>
              </Link>
            </div>
        </div>
    )
}
export default Profile;