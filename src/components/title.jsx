export default function Title({title,description}){
    return(
        <div className="Title">
            <h2>{title}</h2>
            <span>{description}</span>
        </div>
    )
}