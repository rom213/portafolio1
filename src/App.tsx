
import './App.css'
import Moible from './component/Mobile/Moible'
import useWindowWidth from './hooks/windowWidth'

function App() {
  const { width }=useWindowWidth()
  
  if(width < 800) return <Moible />

  return <div>
    para pc
  </div>

}

export default App
