import Title from "../title"
import PlansTypeButton from "./plansTypeButton"
import PlanStats from "./planStats"
import Data from "./dataStats.js"
import { useState } from "react"

export default function Stats({language}){
    const [planNumber,setPlanNumbre] = useState(0);

    function handlevisibilityPlan(numbre){
        setPlanNumbre(numbre);
    }
    return(
        <div className="stats">
            <div className="title-container">
                <Title 
                    title={language == 'EU' ? 'Compare our plans and find the right one for you' : 'Compara nuestros planes y encuentra el adecuado para ti'} 
                    description={language == 'EU' ? `offers three different plans to fit your needs: Basic , Standard  and Premium. Compare the feature of each  plan and choose the one that’s right for you.` 
                        : 'ofrece tres planes diferentes que se adaptan a tus necesidades: Básico, Estándar y Premium. Compare las características de cada plan y elija el que más le convenga.'
                    } 
                />
                <PlansTypeButton handlevisibilityPlan={handlevisibilityPlan} language={language}/>
            </div>
            <PlanStats 
                price={Data[planNumber].price}
                content={language == 'EU' ? Data[planNumber].content[0] : Data[planNumber].content[1]}
                devices={language == 'EU' ? Data[planNumber].devices[0] : Data[planNumber].devices[1]}
                cancel={language == 'EU' ? Data[planNumber].cancel[0] : Data[planNumber].cancel[1]}
                hdr={language == 'EU' ? Data[planNumber].hdr[0] : Data[planNumber].hdr[1]}
                dolby={language == 'EU' ? Data[planNumber].dolby[0] : Data[planNumber].dolby[1]}
                adFree={language == 'EU' ? Data[planNumber].adFree[0] : Data[planNumber].adFree[1]}
                offline={language == 'EU' ? Data[planNumber].offline[0] : Data[planNumber].offline[1]}
                sharing={language == 'EU' ? Data[planNumber].sharing[0] : Data[planNumber].sharing[1]}
                key={planNumber}
            />
        </div>
    )
}