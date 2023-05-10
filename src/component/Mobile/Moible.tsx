import useScroll from "../../hooks/windowScroll";
import "./style.css";
import imgenT from "../../assets/tienedadetecnologia.png";
import pokedex1 from "../../assets/pokedex1.png"


const Moible = () => {
  const { scrollY } = useScroll();

  console.log(scrollY);

  return (
    <div className="ContentMobile">
      <div className="SecMobile1">
        <h1>Romario Ariza</h1>
        <h3>Full Stack Developer</h3>
        <div className="textAbout">
          I build accessible, inclusive products and digital experiences for the
          web.
        </div>

        <div className="contentIcons">
          <i className="bx bxl-github bx-tada-hover bx-md"></i>
          <i className="bx bxl-facebook-circle bx-tada-hover bx-md"></i>
          <i className="bx bxl-linkedin bx-tada-hover bx-md"></i>
        </div>
      </div>

      <div className="secMobile2">
        <div>
          <div
            className={`${scrollY > 241.5 && scrollY < 800.5 && "headerAbout"}`}
          >
            <h2>Abaut</h2>
          </div>

          <div className="textAbout">
            I am a seasoned full stack programmer with expertise in frontend
            technologies such as JavaScript, CSS, HTML, React, and TypeScript.
            On the backend, I specialize in API development, socket handling,
            authentication, environment variables, error management, and working
            with relational databases, particularly PostgreSQL.
            <br />
            <br />
            My commitment to staying up-to-date with the latest industry trends
            ensures that I can provide innovative and efficient solutions for
            any project. I am constantly exploring new technologies and
            techniques to enhance the quality and performance of my work.
            <br />
            <br />
            With my extensive knowledge and experience, I am well-equipped to
            tackle diverse challenges and deliver high-quality software
            solutions. I prioritize clean and maintainable code, ensuring
            scalability and robustness in my applications.
            <br />
            Whether it's building responsive and intuitive user interfaces or
            developing robust and secure backend systems.
          </div>
        </div>
      </div>

      <div className="secMobile3">
        <div className="headerProy">
          <h3>PROYECTS</h3>
        </div>
        <h2 className="titleProyectFront">Frontend projects</h2>
        <div className="proyect1">
          <a
            className="linkEcomeTec"
            href="https://tiendatecnologica.netlify.app/#/"
          >
            Ecomerse of technology store
          </a>
          <div>
            Se utilizó la tecnología de React con TypeScript para desarrollar un
            diseño intuitivo y atractivo con el objetivo de que el usuario se
            sienta cómodo. Se implementaron rutas y rutas protegidas para
            usuarios logueados, y se gestionaron las bibliotecas de Redux,
            Axios, Zustand y otras más. El proyecto aún está en desarrollo,
            donde se está implementando React Query para el manejo de caché y se
            está añadiendo capacidad de respuesta para dispositivos móviles.
          </div>
          <div className="contentall">
            {scrollY > 600 && (
              <div className="contentAnima">
                <img className="ecomerTecno" src={imgenT} alt="" />
                <div className="contentSkills">
                  <div className="skill">react Ts</div>
                  <div className="skill">redux</div>
                  <div className="skill">Zustand</div>
                  <div className="skill">Api</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="proyecto2">
          <a className="linkEcomeTec" href="https://pokeedexsite.netlify.app/">
            Pokedex
          </a>
          <div>
            Se utilizó la API pública PokeAPI para obtener datos de Pokémon.
            Para realizar las solicitudes HTTP a la API, se utilizó la
            biblioteca Axios. Además, se trabajó con rutas y rutas protegidas
            utilizando la biblioteca react-router-dom. Para gestionar el estado
            de la aplicación, se utilizó la biblioteca Redux Toolkit. <br /> Se
            aplicó la reutilización de código para mejorar la optimización de la
            aplicación.
          </div>
          {
            scrollY >1100 &&
            <div>
            <img className="imgPoke" src={`${pokedex1}`} alt="" />
            <div className="contentSkills">
                  <div className="skill">react Js</div>
                  <div className="skill">redux</div>
                  <div className="skill">routes</div>
                  <div className="skill">Api</div>
                </div>
           </div>
          }

        </div>
      </div>
    </div>
  );
};

export default Moible;
