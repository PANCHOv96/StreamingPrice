import Icons from "./icons"
import Github from "../../assets/Github.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Gmail from "../../assets/Gmail.svg"

export default function Footer({language}){
    return(
        <div className="Footer">
            <div className="footer-social">
                <h3>{language == 'EU' ? 'Conenct With Me' : 'Conectate conmigo'}</h3>
                <div className='footer-social-icons'>
                    <Icons link='https://github.com/PANCHOv96' svg={Github} key={Github}/>
                    <Icons link='https://www.linkedin.com/in/francisco-fabian-vallone-510b71223/' svg={Linkedin} key={Linkedin}/>
                    <Icons link='mailto:vallonefrancisco.dev@gmail.com' svg={Gmail} key={Gmail}/>
                </div>
            </div>
            <div className="designer-developer">
                <h3>@2023 Francisco Vallone</h3>
                <p>{language == 'EU' ? 'Thanks to' : 'Gracias a'} <span onClick={()=> { window.open('https://produce-ui.com/','_blank')}}>Produce UI</span> 
                {language == 'EU' ? ' for the design idea' : ' para la idea de diseño'}</p>
            </div>
        </div>
    )
}