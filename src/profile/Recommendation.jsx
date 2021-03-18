import Navbar from "../components/Navbar";
import '../styles/Profile.css'
import Desc from './Desc'
function Recommendation(){
    const arr = [
        '11 000 шагов в день',
        'до 2400 калорий',
        '8 часов в сутки',
        '8 стаканов в день'
    ]
    const arr2=[
        'Физическая активность',
        'Питание',
        'Сон',
        'Вода'
    ]
    return(
        <div className='profile'>
            <Navbar countText='Рекомендации врача'/>
           <div className='rec-container'>
           <div className='rec'>
                    <span>Рекомендации персонального врача</span>
                    <p>
                        Измерять артериальное давление утром 
                        и вечером. Ежедневно утром проверять кровь 
                        на сахар.
                    </p>
            </div>
           </div>
            <div className='div'>
                {
                   arr.map((el, i)=>(
                    <div key={i}>
                        <Desc nameAim={arr[i]} descAim={arr2[i]} hel='not'/>
                    </div>
                ))  
                }
            </div>
        </div>
    )
}
export default Recommendation;