
import './App.css'
import Moible from './component/Mobile/Moible'
import Computer from './component/computer/Computer'
import ParticlesBagraund from './component/bagraund/ParticlesBagraund'
import useWindowWidth from './hooks/windowWidth'
import { useEffect, useState } from 'react'
import Loading from './component/carga/Loading'

function App() {
  const { width }=useWindowWidth()
  const [isLoadingg, setisLoadingg] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoadingg(false);
    }, 3000);
  }, []);
  
  
  if (isLoadingg) {
    return <div className='body'>
      <ParticlesBagraund />
      <Loading />
      </div> 
  }else{
    if(width < 950) return <><ParticlesBagraund /><Moible /></>

    return <>
              <ParticlesBagraund />
              <Computer />
            </>
  }


}

export default App
