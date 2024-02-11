import "./style.css";
import Skils from "../skills/Skils";
import Contact from "../contact/Contact";
import Night from "../modoNocturno/Night";
import data from "../../json/data.json";

const Moible = () => {
  return (
    <div className="ContentMobile">
      <div className="noche">
        <Night />
      </div>
      <div className="SecMobile1">
        <h1>Romario Ariza</h1>
        <h3>Full Stack Developer</h3>
        <div className="textAbout">
          I build accessible, inclusive products and digital experiences for the
          web.
        </div>

        <div className="contentIcon">
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



      <div className="secMobile2">
        <div className="headerAbout">
          <h2>About</h2>
        </div>

        <div className="textAbout">
          {data.español.description.description}
        </div>
      </div>

      <div className="cont_expe">
        <div className="container">
          <div className="headerAbout">
            <h2>experience</h2>
          </div>
          {data.español.experience.map((info) => {
            return (
              <div className="card">
                <div className="face0 face1" style={{ height: "210px" }}>
                  <div className="cardExperience">
                    <div style={{ width: "300px" }}>

                      <div>{info.fecha}</div>

                      <img style={{ width: "150px", position: "relative", top: "10px" }} src="https://firebasestorage.googleapis.com/v0/b/blog-46e71.appspot.com/o/portafolio%2Facademlo.jpg?alt=media&token=345a8306-5eb2-4fe0-a50f-2b5ecab88bfa" alt="" />
                    </div>
                    <div>
                      <div className="contentInfo">
                        <h4>{info.company}</h4>
                        <h4>{info.position}</h4>
                      </div>

                      <br />
                      <div className="contenSkills">
                        {info.skills.map((info2) => {
                          return <div className="contenSkill">
                            {info2.name}
                          </div>
                        })
                        }
                      </div>

                      <div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="face0 face2">
                  <div className="contentBack">
                    <p style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}>{info.description}</p>
                    <div className="contentLinks">
                      <div className="pointerCursor">
                        <i className='bx bx-paper-plane bx-fade-right bx-md'></i>
                      </div>
                      <div className="contLinks">
                        <i className='bx bx-link'><a href="https://certiwise.co">CertiWise</a></i>
                        <i className='bx bx-link'><a href="https://certiwise.co/verify/14">certificate</a></i>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="container">
          <div className="headerAbout">
            <h2>Projects</h2>
          </div>
          {data.español.projects.map((dat) => {
            return (
              <div className="card">
                <div className="face0 face1">
                  <div className="content0">
                    <div>
                      <img className="imgCo" src={`${dat.img_link}`} alt="" />
                      <h3>{dat.title}</h3>
                    </div>
                    <div className="contentSkill">
                      {dat?.skill.map((ski) => {
                        return <div className="skil"><img className="skikImg" src={`${ski.name}`} alt="" /></div>
                      })}
                    </div>
                  </div>
                </div>
                <div className="face0 face2">
                  <div className="" style={{ textAlign: "justify" }}>
                    <p>{dat.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="contentAlldesCon">
        <div className="headerAbout">
          <h2>Skills</h2>
        </div>
        <Skils />
      </div>
      <div className="contentDescription">
        <Contact />
      </div>

      <div className="piedePagina">
        <h1>Hecho con 🤎 </h1>
      </div>
    </div>
  );
};

export default Moible;
