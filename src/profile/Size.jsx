import '../styles/Calendar.css'
function Size({sizeName,sizeNum}){
    return(
        <div className='size'>
                <div className='nameOfSize'>
                        <span>{sizeName}</span>
                </div>
                <div className='numOfSize'>
                    <span>{sizeNum}</span>
                </div>
        </div>
    )
}
export default Size;