import Button from '../components/Button'
import Heading from '../components/Heading';
import Inputs from '../components/Inputs'
import '../styles/SignIn.css'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
function OneFrom(){
    const nameBtn = 'Зарегистрируйтесь и раскройте секреты своего здоровья';
    const placeholder1 = 'Имя';
    const placeholder2 = 'Фамилия';
    const placeholder3 = 'Отчество';
    const nameBtnSub ='Далее';
    const countText='Регистрация 1 из 9';
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
                            <form>
                                    <Inputs name={placeholder1}/>
                                    <Inputs name={placeholder2}/>
                                    <Inputs name={placeholder3}/>
                                    <Link to='./registerPerson2'>
                                        <Button name={nameBtnSub}/>
                                    </Link>
                            </form>
                        </div>
                   </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default OneFrom;