import "./skills.css";

import img1 from "../../assets/skills/Typescript_logo_2020.svg.png";
import img2 from "../../assets/skills/express.png";
import img3 from "../../assets/skills/htmls css js.jpg";
import img4 from "../../assets/skills/nodejs.jpg";
import img5 from "../../assets/skills/redux.png";
import img6 from "../../assets/skills/reactf.jpg";
import img7 from "../../assets/skills/zustand.jpg";
import img8 from "../../assets/skills/reactQuery.jpg";

const Skils = () => {
  return (
    <div className="slider">
      <div className="headerAbout">
        <h1>skills</h1>
      </div>

      <br />
      <div className="contentCubes">
        <div className="cube">
          <div className="face front">
            {" "}
            <img className="imagenSkills" src={`${img1}`} alt="" />
          </div>
          <div className="face back">
            <img className="imagenSkills" src={`${img2}`} alt="" />
          </div>
          <div className="face left">
            <img className="imagenSkills" src={`${img4}`} alt="" />
          </div>
          <div className="face right">
            <img className="imagenSkills" src={`${img3}`} alt="" />
          </div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
        <div className="cube2">
          <div className="face front">
            {" "}
            <img className="imagenSkills" src={`${img5}`} alt="" />
          </div>
          <div className="face back">
            <img className="imagenSkills" src={`${img6}`} alt="" />
          </div>
          <div className="face left">
            <img className="imagenSkills" src={`${img7}`} alt="" />
          </div>
          <div className="face right">
            <img className="imagenSkills" src={`${img8}`} alt="" />
          </div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
