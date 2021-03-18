import CalendarNavbar from "../calendar/CalendarNavbar";
import Things from "./Things";
import thing1 from '../images/thing1.svg'
import thing2 from '../images/thing2.svg'
import thing3 from '../images/thing3.svg'
import thing4 from '../images/thing4.svg'
import thing5 from '../images/thing5.svg'
import Navbar from "../components/Navbar";
function Purpose(){
    const arr1=[
        'Поливитамины',
        'Лозап',
        'Танакан',
        'Цераксон',
        'Физиотенз'
    ]
    const arr2=[
        '3 капли',
        '1 капсула',
        '1 таблетка',
        '1 таблетка',
        '0.2 мг'
    ]
    const arr3=[
        'утром до еды',
        'утром до еды',
        'вечером во время еды',
        'вечером во время еды',
        'вечером во время еды'
    ]
    const imgs=[
        thing1,
        thing2,
        thing3,
        thing4,
        thing5
    ]
    return(
        <div>
            <Navbar countText='Назначенные лекарства'/>
            <div style={{
                marginTop:'50px'
            }}>
               {
                arr1.map((el,i)=>(
                    <div key={i}>
                        <Things thing={imgs[i]} nameT={arr1[i]} timeT={arr2[i]} howManyT={arr3[i]}/>
                    </div>
                ))
            }
             </div>
        </div>
    )
}
export default Purpose;