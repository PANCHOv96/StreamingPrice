import { useState } from "react";

export default function PlansTypeButton({handlevisibilityPlan,language}){
    const [typePlan,setTypePlan] = useState('BASIC');
    function handlePlan(e,number){
        e.preventDefault();
        setTypePlan(e.target.id.toUpperCase());
        handlevisibilityPlan(number);
    }
    return(
        <div className="PlansTypeButton">
            <a href="#" className={typePlan === 'BASIC' ? 'Activo' : ''} onClick={(e) => {handlePlan(e,0)}} id='Basic'>{language == 'EU' ? 'Basic' : 'Basico'}</a>
            <a href="#" className={typePlan === 'STANDARD' ? 'Activo' : ''} onClick={(e) => {handlePlan(e,1)}} id='Standard'>{language == 'EU' ? 'Standard' : 'Estándar'}</a>
            <a href="#" className={typePlan === 'PREMIUM' ? 'Activo' : ''} onClick={(e) => {handlePlan(e,2)}} id='Premium'>{language == 'EU' ? 'Premium' : 'Premium'}</a>
        </div>
    )
}