export default function Menu({isVisibility,language}){
    return(
        <>
            <ul className={isVisibility ? 'Menu Visible' : 'Menu'}>
                <li>{language == 'EU' ? 'Home' : 'Inicio'}</li>
                <li>{language == 'EU' ? 'Movies and Series' : 'Películas y series'}</li>
                <li>{language == 'EU' ? 'Support' : 'Soporte'}</li>
                <li className="Activo">{language == 'EU' ? 'Subscriptions' : 'Suscripciones'}</li>
            </ul>
        </>
    )
}