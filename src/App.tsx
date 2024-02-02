
import './App.css'
import Moible from './component/Mobile/Moible'
import Computer from './component/computer/Computer'
import ParticlesBagraund from './component/bagraund/ParticlesBagraund'
import useWindowWidth from './hooks/windowWidth'

function App() {
  const { width } = useWindowWidth()


  if (width < 950) return <><ParticlesBagraund /><Moible /></>
  return <>
    <ParticlesBagraund />
    <Computer />
  </>



}

export default App
