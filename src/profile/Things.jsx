import '../styles/Calendar.css'
function Things({thing, nameT,timeT,howManyT}){
    return(
        <div className='thingDiv'>
              <div className='thing'>
        <div className='headerName'>
        <div className='row align-items-center'>
            <div className='col-2 col-sm-2'>
                <img src={thing}/>
            </div>
              <div className='col-9 col-sm-9'>
                    <span className ='span1'>{nameT}</span><br/>
                    <span className ='span2'>{timeT}</span><br/>
                    <span className ='span3'>{howManyT}</span>
              </div>
              <div className='col-1'>
              <i className="fa fa-angle-right"></i>
              </div>
          </div>
        </div>
            </div>
            <hr/>
        </div>
    )
}
export default Things;