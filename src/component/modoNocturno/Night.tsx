import React, { useEffect, useState } from "react";
import './night.css';
import '../Mobile/style.css';
import '../computer/computer.css';
import '../../App.css';

const Night: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

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
      <div onClick={() => { setChecked(!checked); toggleThemeChange() }} className="contentBo">
        <div style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "space-around", height: "100%", alignItems: "center" }}>
          <i className='bx bx-sun'></i>
          <i className='bx bx-moon' style={{color:"white"}}></i>
        </div>


        <div className={`${checked ? 'bolitaleft' : 'bolitaRight'}`}>
          {
            checked ? <i className='bx bx-moon'></i> : <i className='bx bx-sun'></i>
          }
        </div>
      </div>
    </div>
  );
};

export default Night;
