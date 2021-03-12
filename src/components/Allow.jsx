function Allow({txt}){
    return(
          <div className='radio'>
               <div className='container'>
                <div className='row'>
              <div className='col-1'> 
              <div id='checkbox' >
                <span>&#10003;</span>
              </div>
              </div>
               <div className='col-11 label'>
               <label>{txt}</label>
               </div>
            </div>
           </div>
          </div>
    )
}
export default Allow;
