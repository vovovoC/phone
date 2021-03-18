import '../styles/BtnSwich.css'
function BtnSwich({active,inactive}){
    return(
        <div className='col-12'>
            <div className='allBtns'>
        <button 
          className='btns' 
          onClick={()=>{

        }}>{active}</button>
        <button 
          className='btns-inactive' 
          onClick={()=>{
            
          }}>{inactive}</button>
    </div>
        </div>
    )
}
export default BtnSwich;