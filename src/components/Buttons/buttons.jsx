export default function Buttons({title , isRed}){
    return(
        <>
            <a href="#" className={`Buttons ${isRed ? 'isRed' : ''}`} onClick={(e) => {e.preventDefault();}}>{title}</a>
        </>
    )
}