import { useState } from "react";

export default function PaymentTypeButton({handleSetPaymentType,language}){
    const [tipoPago,setTipoPago] = useState('MONTHY');
    function handlePrice(e){
        e.preventDefault();
        setTipoPago(e.target.id.toUpperCase());
        handleSetPaymentType(e.target.id);
    }
    return(
        <div className="PaymentTypeButton">
            <a href="#" className={tipoPago === 'MONTHY' ? 'Activo' : ''} onClick={(e) => {handlePrice(e)}} id='Monthy'>{language == 'EU' ? 'Monthy' : 'Mensual'}</a>
            <a href="#" className={tipoPago === 'YEARLY' ? 'Activo' : ''} onClick={(e) => {handlePrice(e)}} id='Yearly'>{language == 'EU' ? 'Yearly' : 'Anual'}</a>
        </div>
    )
}