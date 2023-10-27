import { useRef, useState } from "react";
import "./computer.css";

import Skils from "../skills/Skils";
import Contact from "../contact/Contact";
import useScroll from "../../hooks/windowScroll";
import Night from "../modoNocturno/Night";
import data from "../../json/data.json";

const Computer = () => {
  const [lineSelect, setlineSelect] = useState<number>(1);
  const [over, setover] = useState<boolean>(true);
  const [lineHover, setlineHover] = useState<number>();
  const { scrollY } = useScroll();

  const seccion1Ref = useRef<HTMLDivElement>(null);
  const seccion2Ref = useRef<HTMLDivElement>(null);
  const seccion3Ref = useRef<HTMLDivElement>(null);
  const seccion4Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>): void => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="contComputer">
      <div className="fixedMe">
        <div className="noc">
          <Night />
        </div>
        <div className="SecMobile1">
          <h1>Romario Ariza</h1>
          <h3>Full Stack Developer</h3>
          <div className="">
            I build accessible, inclusive products and digital experiences for
            the web.
          </div>

          <div className="header">
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(1)}
              onClick={() => {
                scrollToSection(seccion1Ref);
              }}
              className={`${
                lineSelect == 1 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover == 1
                    ? "hoverline"
                    : scrollY < 400
                    ? "lineSelect"
                    : "line"
                }`}
              ></div>
              <div>About</div>
            </div>
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(2)}
              onClick={() => {
                scrollToSection(seccion2Ref);
              }}
              className={`${
                lineSelect == 2 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover == 2
                    ? "hoverline"
                    : scrollY > 400 && scrollY < 2300
                    ? "lineSelect"
                    : "line"
                }`}
              ></div>
              <div>Proyects</div>
            </div>
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(3)}
              onClick={() => {
                scrollToSection(seccion3Ref);
              }}
              className={`${
                lineSelect == 3 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover == 3
                    ? "hoverline"
                    : scrollY > 2300 && scrollY < 2700
                    ? "lineSelect"
                    : "line"
                }`}
              ></div>
              <div>Skils</div>
            </div>
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(4)}
              onClick={() => {
                setlineSelect(4);
                scrollToSection(seccion4Ref);
              }}
              className={`${
                lineSelect == 4 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover == 4
                    ? "hoverline"
                    : scrollY > 2700
                    ? "lineSelect"
                    : "line"
                }`}
              ></div>
              <div>Contact me</div>
            </div>
          </div>

          <div className="contentIcons">
            <a href="https://github.com/rom213?tab=repositories">
              <i className="bx bxl-github bx-tada-hover bx-md"></i>
            </a>
            <a href="https://www.linkedin.com/in/romario-ariza-428b53260/">
              <i className="bx bxl-linkedin bx-tada-hover bx-md"></i>
            </a>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/blog-46e71.appspot.com/o/meals%2F1686582750574-CVweb_developer_RomarioAriza.pdf?alt=media&token=044b0c84-3bc0-4ec4-8387-485e5ad2eee5&_gl=1*1dyixzx*_ga*MTQxMTg4ODIyLjE2ODQwOTc3MTE.*_ga_CW55HF8NVT*MTY4NjU4MDE1MC41LjEuMTY4NjU4MjgzMC4wLjAuMA.."
              download=""
            >
              <i className="bx bx-id-card bx-md"></i>
              <i className="bx bx-cloud-download bx-fade-down bx-md"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="sectionProyects">
        <div ref={seccion1Ref} className="text">
          I am a seasoned full stack programmer with expertise in frontend
          technologies such as JavaScript, CSS, HTML, React, and TypeScript. On
          the backend, I specialize in API development, socket handling,
          authentication, environment variables, error management, and working
          with relational databases, particularly PostgreSQL.
          <br />
          <br />
          My commitment to staying up-to-date with the latest industry trends
          ensures that I can provide innovative and efficient solutions for any
          project. I am constantly exploring new technologies and techniques to
          enhance the quality and performance of my work.
        </div>

        <div ref={seccion2Ref} className="container">
          {data.español.projects.map((dat) => {
            return (
                <div className="card">
                  <div className="face0 face1">
                    <div className="content0">
                      <div>
                        <img className="imgCo" src={`${dat.img_link}`} alt="" />
                        <h3>{dat.title}</h3>
                      </div>
                      <div style={{ width:"100%", display:"flex", gap:"1rem"}}>
                        {dat?.skill.map((ski)=>{
                          return <div className="skil">{ski.name}</div>
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="face0 face2">
                    <div className="">
                      <p>{dat.description}</p>
                      <a href="">read More</a>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>

        <div className="contentSkills" ref={seccion3Ref}>
          <Skils />
        </div>

        <div className="sectionCon" ref={seccion4Ref}>
          <Contact />
        </div>
        <div className="piedePagina pie2">
          <h1>Hecho con 🤎 </h1>
        </div>
      </div>
    </div>
  );
};

export default Computer;
