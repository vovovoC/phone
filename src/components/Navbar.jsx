import BackButton from './BackButton'
import RegCount from './RegCount'
import '../styles/Calendar.css'
function Navbar({countText}){
    return(
      <div className='nav'>
      <div className='col-1'>
      <div className='img2'> 
      <BackButton/>
       </div>
      </div>
    <div className='col-10'>
        
        <RegCount countText={countText}/>
     
    </div>
     <div className='col-1'>       
    
     </div>
  </div>
    )
}
export default Navbar;