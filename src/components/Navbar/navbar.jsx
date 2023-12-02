import LogoStreamingPrice from '../../assets/LogoStreamingPrice.svg';
import MenuStreamingPrice from '../../assets/MenuStreamingPrice.svg';
import Menu from './menu';
import LanguageButton from './languageButton';
import { useState } from 'react';

export default function Navbar({handleLanguage,language}){
    const [visibility,setVisibility] = useState(false)
    return (
        <>
            <nav className='Navegacion'>
                <img src={LogoStreamingPrice} alt='LogoStreamingPrice'/>
                <img src={MenuStreamingPrice} alt='MenuStreamingPrice' className='MenuHamburguesa' onClick={()=> { setVisibility(!visibility)}}/>
                <Menu isVisibility={visibility} language={language}/>
                <LanguageButton isVisibility={visibility} handleLanguage={handleLanguage}/>
            </nav>
        </>
      )
}