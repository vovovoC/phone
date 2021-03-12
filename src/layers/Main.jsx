import Button from '../components/Button'
import Links from '../components/Links'
import '../styles/Main.css'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
function Main(){
    const click= 'Нажимая Далее, вы соглашаетесь c ';
    const click1 =' и ';
    const click2=' нашего сервиса';
    const link1='правами';
    const link2 ='пользовательским соглашением';
    const nameBtn='Далее';
    return(
        <div className='row'>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
                 <div className='container  bodyAll'>
                    <div className='logo'>
                    <Logo/>
                    </div>
                <div className='ser'>
                <span>
                        <Links link={click}/> <br/>               
                            <Link>
                                <Links link={link1}/>
                            </Link>
                        <Links link={click1}/>                      
                            <Link>
                                <Links link={link2}/>
                            </Link><br/>                  
                        <Links link={click2}/>  
                 </span>
                </div>
                 <Link to='/signin'>
                   <div className='btn'>
                   <Button name={nameBtn}/>
                   </div>
                 </Link>
                 </div>
            </div>
            <div className='col col-sm-2 col-md-3 col-lg-4'></div>
        </div>
    )
}
export default Main;