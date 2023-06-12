import { useRef, useState } from "react";
import "./computer.css";
import imgPost from "../../assets/proyects/blog.png";
import imgRestaurant from "../../assets/proyects/restaurant.png";
import imgEcomer from "../../assets/proyects/tienedadetecnologia.png";
import imgRick from "../../assets/proyects/rickandmorty.png";
import imgTienda from "../../assets/proyects/tienda.png";
import Skils from "../skills/Skils";
import Contact from "../contact/Contact";
import useScroll from "../../hooks/windowScroll";
import Night from "../modoNocturno/Night";
 
const Computer = () => {
  const [lineSelect, setlineSelect] = useState<number>(1);
  const [over, setover] = useState<boolean>(true);
  const [over2, setover2] = useState<boolean>(true);
  const [over3, setover3] = useState<boolean>(true);
  const [over4, setover4] = useState<boolean>(true);
  const [over5, setover5] = useState<boolean>(true);
  const [over6, setover6] = useState<boolean>(true);
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
            <a  href="https://firebasestorage.googleapis.com/v0/b/blog-46e71.appspot.com/o/meals%2F1686582750574-CVweb_developer_RomarioAriza.pdf?alt=media&token=044b0c84-3bc0-4ec4-8387-485e5ad2eee5&_gl=1*1dyixzx*_ga*MTQxMTg4ODIyLjE2ODQwOTc3MTE.*_ga_CW55HF8NVT*MTY4NjU4MDE1MC41LjEuMTY4NjU4MjgzMC4wLjAuMA.." download="">
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

        <div ref={seccion2Ref} className="Proyects">
          <a
            onMouseOut={() => setover(true)}
            onMouseOver={() => setover(false)}
            href="https://blogswagger.onrender.com/api/v1/docs/"
            className="proyect"
          >
            <div>
              <img className="imgCompu" src={`${imgPost}`} alt="" />
              <div
                className={`infoCont ${over && "opaci"}`}
                onMouseOut={() => setover(false)}
                onMouseOver={() => setover(true)}
              >
                <a href="https://github.com/rom213/BlogPosts.git">
                  <div>
                    <div className="float">
                      <i className="bx bx-cloud-download bx-fade-down bx-lg"></i>
                    </div>
                  </div>
                </a>
                <a href="https://blogswagger.onrender.com/api/v1/docs/">
                  <i className="bx bxs-file-doc bx-lg bx-fade-down"></i>
                </a>
              </div>
            </div>
            <div>
              <div>
                <h2>BlogPosts</h2>
              </div>
              <div>
                {" "}
                Este proyecto se centra en el desarrollo de un blog en el que
                los usuarios pueden publicar sus posts y compartirlos con otros
                usuarios de la aplicación. Cualquier persona puede registrarse e
                iniciar sesión utilizando su correo electrónico para crear
                publicaciones y comentar los posts de otros usuarios. en la
                implementación, se utilizó el framework Express, el cual
                facilitó la creación de la Api.
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">nodejs</div>
                  <div className="skil">express</div>
                  <div className="skil">react</div>
                  <div className="skil">sockets</div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://tiendatecnologica.netlify.app/"
            className="proyect"
            onMouseOut={() => setover2(true)}
            onMouseOver={() => setover2(false)}
          >
            <div>
              <img className="imgCompu" src={`${imgEcomer}`} alt="" />
              <div className={`infoCont ${over2 && "opaci"}`}>
                <a href="https://github.com/rom213/e-comerse.git">
                  <div>
                    <div className="float">
                      <i className="bx bx-cloud-download bx-fade-down bx-lg"></i>
                    </div>
                  </div>
                </a>{" "}
              </div>
            </div>

            <div>
              <div>
                <h2>Ecomerse of technology store</h2>
              </div>
              <div>
                Se utilizó la tecnología de React con TypeScript para
                desarrollar un diseño intuitivo y atractivo con el objetivo de
                que el usuario se sienta cómodo. Se implementaron rutas y rutas
                protegidas para usuarios logueados, y se gestionaron las
                bibliotecas de Redux, Axios, Zustand y otras más. El proyecto
                aún está en desarrollo, donde se está implementando React Query
                para el manejo de caché y se está añadiendo capacidad de
                respuesta para dispositivos móviles
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">react Ts</div>
                  <div className="skil">redux</div>
                  <div className="skil">Zustand</div>
                  <div className="skil">api</div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://apirestaurant.onrender.com/api/v1/docs/"
            className="proyect"
            onMouseOut={() => setover3(true)}
            onMouseOver={() => setover3(false)}
          >
            <div>
              <img className="imgCompu" src={`${imgRestaurant}`} alt="" />
              <div className={`infoCont ${over3 && "opaci"}`}>
                <a href="https://github.com/rom213/serverRestaurant.git">
                  <div>
                    <div className="float">
                      <i className="bx bx-cloud-download bx-fade-down bx-lg"></i>
                    </div>
                  </div>
                </a>
                <a href="https://apirestaurant.onrender.com/api/v1/docs/">
                  <i className="bx bxs-file-doc bx-lg bx-fade-down"></i>
                </a>
              </div>
            </div>
            <div>
              <div>
                <h2>AppRestaurant</h2>
              </div>
              <div>
                En este proyecto se desarrollo una API, para la gestión de
                restaurantes en el backend. La API permite la administración de
                reservaciones, usuarios, comidas, pedidos y comentarios sobre la
                calidad del servicio en los restaurantes. Además, se brindará la
                funcionalidad de crear usuarios, lo cual les otorgará diversas
                acciones, como realizar pedidos y dejar comentario de la calidad
                del servicio.
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">nodejs</div>
                  <div className="skil">express</div>
                  <div className="skil">postman</div>
                  <div className="skil">Mysql</div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://swaggerpelis.onrender.com/api/v1/docs/"
            className="proyect"
            onMouseOut={() => setover4(true)}
            onMouseOver={() => setover4(false)}
          >
            <div>
              <img className="imgCompu" src='https://th.bing.com/th/id/R.5eb2d62cac6c08719b4d3b8672a7e56f?rik=Q4bbJqLRMrfKeQ&riu=http%3a%2f%2ffrikilogia.com%2fwp-content%2fuploads%2f2012%2f01%2ftecnologia-organiza-tu-coleccion-de-peliculas-la-b.jpg&ehk=84rPabYc5fidYt3aWsm5rHpK7QJvGlA0pfWBeV4NPiw%3d&risl=&pid=ImgRaw&r=0' alt="" />
              <div className={`infoCont ${over4 && "opaci"}`}>
                <a href="https://github.com/rom213/apiPelisNet.git">
                  <div>
                    <div className="float">
                      <i className="bx bx-cloud-download bx-fade-down bx-lg"></i>
                    </div>
                  </div>
                </a>
                <a href="https://swaggerpelis.onrender.com/api/v1/docs/">
                  <i className="bx bxs-file-doc bx-lg bx-fade-down"></i>
                </a>
              </div>
            </div>
            <div>
              <div>
                <h2>appi-pelis</h2>
              </div>
              <div>
                Este proyecto fue creado para ser aplicado en un frontend. Es
                una aplicación donde los usuarios pueden registrarse y acceder
                mediante un token. Las películas, géneros y personajes tienen
                sus respectivas imágenes, las cuales se cargan en Firebase. 
                se establecio una base de datos actualizada MySQL2 que tiene sus respectivas migraciones y
                seeders, además de tener relaciones entre tablas de 1 a 1, 1 a
                muchos y muchos a muchos.
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">nodejs</div>
                  <div className="skil">express</div>
                  <div className="skil">Mysql2</div>
                  <div className="skil">swagger</div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://worldrickandmorty.netlify.app"
            className="proyect"
            onMouseOut={() => setover5(true)}
            onMouseOver={() => setover5(false)}
          >
            <div>
              <img className="imgCompu" src={`${imgRick}`} alt="" />
              <div className={`infoCont ${over5 && "opaci"}`}>
                <a href="https://github.com/rom213/ryck-y-Morty.git">
                  <div>
                    <div className="float">
                      <i className="bx bx-cloud-download bx-fade-down bx-lg"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div>
                <h2>World Rick and Morty</h2>
              </div>
              <div>
                En el proyecto se ha incorporado un buscador similar al de
                Google, que despliega opciones de búsqueda a medida que se
                escribe. Además, se ha agregado un modo noche sencillo para
                mejorar la estética. Para la implementación de la paginación, se
                ha creado la funcionalidad correspondiente. Adicionalmente, se
                ha realizado el consumo de la API de Rick and Morty.
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">reactjs</div>
                  <div className="skil">api</div>
                  <div className="skil">axios</div>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://tiendaacademlo.netlify.app/#sec_1"
            className="proyect"
            onMouseOut={() => setover6(true)}
            onMouseOver={() => setover6(false)}
          >
            <div>
              <img className="imgCompu" src={`${imgTienda}`} alt="" />
              <div className={`infoCont ${over6 && "opaci"}`}>
                <a href="https://github.com/rom213/ecomerse.git">
                  <div>
                    <div className="float">
                      <i className="bx bx-cloud-download bx-fade-down bx-lg"></i>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div>
              <div>
                <h2>Ecomerse store</h2>
              </div>
              <div>
                este proyecto de front se realizo css html javaScript, tienes
                secciones de ropa por categorias, un usuario cualquiera puede
                calcular el precio de la ropa agregando la prenda al carrito.
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">js</div>
                  <div className="skil">html</div>
                  <div className="skil">css</div>
                </div>
              </div>
            </div>
          </a>
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
