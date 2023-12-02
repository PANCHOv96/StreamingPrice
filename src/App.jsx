import { useState } from 'react'
import Linkrepo from './components/repo'
import Navbar from './components/Navbar/navbar'
import Price from './components/Price/price'
import Stats from './components/Stats/stats'
import Poster from './components/Poster/poster'
import Footer from './components/Footer/footer'
import './App.css'

function App() {
  const [language,setlanguage] = useState('EU');

  function handleLanguage(value){
    if(value==language) return
    setlanguage(language == 'EU' ? 'ES' : 'EU');
  }

  return(
    <>
      <Linkrepo link={'https://github.com/PANCHOv96/StreamingPrice'} title={language == 'EU' ? 'link repo' : 'repositorio'}/>
      <Navbar handleLanguage={handleLanguage} language={language}/>
      <Price language={language}/>
      <Stats language={language}/>
      <Poster language={language}/>
      <Footer language={language}/>
    </>
  )
}

export default App
