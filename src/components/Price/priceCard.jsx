import Buttons from "../Buttons/buttons"

export default function PriceCard({isRecommended,title,description,price,PaymentType,language}){
    return(
        <div className={`Price-card ${isRecommended? 'isRecommended' : ''}`}>
            <div className="Price-card-info">
                <h3 className="Price-card-title">{title}</h3>
                <p className="Price-card-description">
                    {description}
                </p>
                <p className="Price-card-price">${price}<span>/{PaymentType}</span></p>
            </div>
            <div className="Price-card-buttons">
                <Buttons title={language == 'EU' ? 'Start Free Trail' : 'Prueba Gratuita'}/>
                <Buttons title={language == 'EU' ? 'Choose Plan' : 'Seleccionar Plan'} isRed />
            </div>
        </div>
    )
}