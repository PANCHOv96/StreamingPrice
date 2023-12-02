import poster from './poster.jpg';
import Title from '../title';
import Buttons from '../Buttons/buttons'

export default function Poster({language}){
    return(
        <div className='poster'>
            <div className='poster-info'>
                <Title 
                    title={language == 'EU' ? 'Start your free trial today!' : '¡Comience su prueba gratis hoy!'}
                    description={language == 'EU' ? `This is a clear and concise call to action that encourages users to sign up for a free trial of streamVibe.` : 
                        `Este es un llamado a la acción claro y conciso que anima a los usuarios a registrarse para una prueba gratuita de streamVibe`
                    }
                />
                <Buttons title={language == 'EU' ? 'Start Free Trail' : 'Prueba Gratuita'}/>
            </div>
        </div>
    )
}