import Button from '../components/Button';
import Heading from '../components/Heading';
import '../styles/SignIn.css';
import BackButton from '../components/BackButton';
// import { Link } from 'react-router-dom';
import RegCount from '../components/RegCount';
import Date from '../components/Date';
function FourFrom(){
    
    const nameBtn = 'Выберите пол';
    const nameBtnSub ='Продолжить';
    const countText='Регистрация 3 из 9';

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
                          <Date/>
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
export default FourFrom;