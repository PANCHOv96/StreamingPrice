import PaymentTypeButton from "./paymentTypeButton";
import PriceCard from "./priceCard";
import Title from "../title";
import { useState } from "react";

export default function Price({language}){
    const [paymentType,setPaymentType] = useState('month');
    function handleSetPaymentType(data){
        setPaymentType(data.toLowerCase() == 'monthy' ? 'month' : 'year');
    }
    return(
        <>
            <div className="title-container">
                <Title 
                    title={language == 'EU' ? `Chosse the plan that's right for you` : `Elija el plan adecuado para usted`}
                    description={language == 'EU' ? `Select from out flexible subscription options tailored to suit viewing preferences. Ger ready for non-stop entertainment!` :
                        `Seleccione entre nuestras opciones de suscripción flexibles adaptadas a sus preferencias de visualización. ¡Estás listo para un entretenimiento sin parar!`
                    }
                />
                <PaymentTypeButton handleSetPaymentType={handleSetPaymentType} language={language}/>
            </div>
            <div className="Price-cards">
                <PriceCard 
                    title={language == 'EU' ? 'Basic Plan' : 'Plan Básico'}
                    description={language == 'EU' ? `Enjoy an extensive library of movies and series, 
                    featuring a range of content , 
                    including recently released titles.` : 
                    `Disfruta de una extensa biblioteca de películas y series,
                    presentando una variedad de contenidos,
                    incluidos los títulos lanzados recientemente.`}
                    price={paymentType == 'month' ? '9.99' : '109.89'}
                    PaymentType={language == 'EU' ?  (paymentType == 'month' ? 'month' : 'year') :
                        (paymentType == 'month' ? 'mes' : 'año')
                    }
                    language={language}
                />
                <PriceCard 
                    isRecommended
                    title={language == 'EU' ? 'Standard Plan' : 'Plan estándar'}
                    description={language == 'EU' ? `Access to a wider selection of movies and shows, including most new releases and exclusive content.` : 
                    `Acceda a una selección más amplia de películas y programas, incluidos la mayoría de los estrenos nuevos y contenido exclusivo.`}
                    price={paymentType == 'month' ? '12.99' : '142.89'}
                    PaymentType={language == 'EU' ?  (paymentType == 'month' ? 'month' : 'year') :
                        (paymentType == 'month' ? 'mes' : 'año')
                    } 
                    language={language}
                />
                <PriceCard
                    title={language == 'EU' ? 'Premium Plan' : 'Plan Premium'}
                    description={language == 'EU' ? `Access to a wider selection of movies and shows, including most new releases and offline viewing.` : 
                    `Acceda a una selección más amplia de películas y programas, incluidos la mayoría de los estrenos nuevos y visualización sin conexión.`}
                    price={paymentType == 'month' ? '14.99' : '164.89'}
                    PaymentType={language == 'EU' ?  (paymentType == 'month' ? 'month' : 'year') :
                        (paymentType == 'month' ? 'mes' : 'año')
                    }
                    language={language}
                />
            </div>
        </>
    )
}