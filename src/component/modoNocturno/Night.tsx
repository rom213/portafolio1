import { useEffect, useState } from "react";
import './night.css'
import '../Mobile/style.css'
import '../computer/computer.css'
import '../../App.css'



const Night: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  useEffect(() => {
    setChecked(false)
  }, [])
  
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
  };

  
  

  return (
    <div>
      <div onClick={()=>{setChecked(true);toggleThemeChange()}} className="contentBo">
        <div  className={`${checked ? 'bolitaleft' : 'bolitaRight'}`}></div>
      </div>
    </div>
  );
};

export default Night;
