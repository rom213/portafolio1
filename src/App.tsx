
import './App.css'
import Moible from './component/Mobile/Moible'
import Computer from './component/computer/Computer'
import useWindowWidth from './hooks/windowWidth'

function App() {
  const { width }=useWindowWidth()
  
  if(width < 800) return <Moible />

  return <Computer />

}

export default App
