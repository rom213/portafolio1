import { useEffect, useState } from "react";
import './night.css'
import '../Mobile/style.css'
import '../computer/computer.css'
import '../../App.css'
import globalStore from "../../secstore/Store_global";




const Night: React.FC = () => {

const { ThunkValue } = globalStore()
useEffect(() => {
  setChecked(true)
}, [])
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme") || "");

  }, [checked]);

  const toggleThemeChange = (): void => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
    ThunkValue()
  };

  
  

  return (
    <div>
      <div onClick={()=>{setChecked(!checked);toggleThemeChange()}} className="contentBo">
        <div  className={`${checked ? 'bolitaleft' : 'bolitaRight'}`}>
          {
            checked ?  <h2>D</h2>: <h2>N</h2>
          }

        </div>
      </div>
    </div>
  );
};

export default Night;
