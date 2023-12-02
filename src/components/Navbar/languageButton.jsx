import { useState } from "react";
export default function LanguageButton({isVisibility,handleLanguage}){
    const [idioma,setIdioma] = useState('EU');
    function handleIdioma(e){
        e.preventDefault();
        setIdioma(e.target.textContent);
        handleLanguage(e.target.textContent);
    }
    return(
        <>
            <div className={isVisibility ? 'LanguageButton Visible' : 'LanguageButton'}>
                <a href="#" className={idioma === 'ES' ? 'Activo' : ''} onClick={(e) => {handleIdioma(e)}}>ES</a>
                <a href="#" className={idioma === 'EU' ? 'Activo' : ''} onClick={(e) => {handleIdioma(e)}}>EU</a>
            </div>
        </>
    )
}