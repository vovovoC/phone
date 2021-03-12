import '../styles/Button.css'
function Button({name}){
    return(
        <input type='submit' value={name}/>
    )
}
export default Button;