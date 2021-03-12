
function DateP(){
   
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth()+1;
        var year = today.getFullYear();
    
    return(
        <div className='calendar'>
            <div className='row'>
                <div id='input-picker'>
                    <p>{
                      day
                        }</p>
                         <p>{
                      month
                        }</p>
                         <p>{
                      year
                        }</p>
                </div>
            </div>
        </div>
    )
}export default DateP;