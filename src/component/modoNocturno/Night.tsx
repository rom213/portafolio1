import React, { useEffect, useState } from "react";
import './night.css';
import '../Mobile/style.css';
import '../computer/computer.css';
import '../../App.css';

const Night: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme") || "");
  }, [checked]);

  useEffect(() => {
    setChecked(localStorage.getItem("theme") === "dark" ? true : false);
  }, []);

  const toggleThemeChange = (): void => {
    if (checked) {
      localStorage.setItem("theme", "light");
      setChecked(false);
    } else {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    }
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
