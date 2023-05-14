import { useRef, useState } from "react";
import "./computer.css";
import imgPost from "../../assets/proyects/blog.png";
import imgRestaurant from "../../assets/proyects/restaurant.png";
import imgBici from "../../assets/proyects/bisicleta2.png";
import imgEcomer from "../../assets/proyects/tienedadetecnologia.png";
import imgRick from "../../assets/proyects/rickandmorty.png";
import imgTienda from "../../assets/proyects/tienda.png";
import Skils from "../skills/Skils";
import Contact from "../contact/Contact";
import useScroll from "../../hooks/windowScroll";

const Computer = () => {
  const [lineSelect, setlineSelect] = useState<number>(1);
  const [lineHover, setlineHover] = useState<number>();
  const { scrollY } = useScroll()


  const seccion1Ref = useRef<HTMLDivElement>(null);
  const seccion2Ref = useRef<HTMLDivElement>(null);
  const seccion3Ref = useRef<HTMLDivElement>(null);
  const seccion4Ref = useRef<HTMLDivElement>(null);



  const scrollToSection = (ref: React.RefObject<HTMLDivElement>): void => {
    
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="fixedMe">
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
              onClick={() =>{scrollToSection(seccion1Ref)}}
              className={`${
                lineSelect == 1 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover==1 ? 
                  'hoverline'
                  :
                    scrollY < 400  ?
                    "lineSelect":
                    'line'
                }`}
              ></div>
              <div>Abaut</div>
            </div>
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(2)}
              onClick={() =>{scrollToSection(seccion2Ref)}}
              className={`${
                lineSelect == 2 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover==2 ? 
                  'hoverline'
                  :
                  scrollY > 400 && scrollY<2300  ?
                  "lineSelect":
                  'line'
              }`}
              ></div>
              <div>Proyects</div>
            </div>
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(3)}
              onClick={() =>{scrollToSection(seccion3Ref)}}
              className={`${
                lineSelect == 3 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                 className={`${
                  lineHover==3 ? 
                  'hoverline'
                  :
                  scrollY > 2300 && scrollY < 2700 ?
                  "lineSelect":
                  'line'
              }`}
              ></div>
              <div>Skils</div>
            </div>
            <div
              onMouseOut={() => setlineHover(0)}
              onMouseOver={() => setlineHover(4)}
              onClick={() =>{ setlineSelect(4); scrollToSection(seccion4Ref)}}
              className={`${
                lineSelect == 4 ? "contentHeaderSelect" : "contentHeader"
              }`}
            >
              <div
                className={`${
                  lineHover==4 ? 
                  'hoverline'
                  :
                  scrollY > 2700 ?
                  "lineSelect":
                  'line'
              }`}
              ></div>
              <div>Contact me</div>
            </div>
          </div>

          <div className="contentIcons">
            <a href="https://github.com/rom213?tab=repositories"><i className="bx bxl-github bx-tada-hover bx-md"></i></a> 
            <a href="https://www.linkedin.com/in/romario-ariza-428b53260/"><i className="bx bxl-linkedin bx-tada-hover bx-md"></i></a>
            <a href="https://firebasestorage.googleapis.com/v0/b/blog-46e71.appspot.com/o/CVweb_developer_RomarioAriza.pdf?alt=media&token=785f2e00-422c-4840-9bcf-81fa6d793422"><i className='bx bx-id-card bx-md'></i></a>
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

        <div ref={seccion2Ref}
        className="Proyects">
          <a href="https://github.com/rom213/BlogPosts.git" className="proyect">
            <div>
              <img className="imgCompu" src={`${imgPost}`} alt="" />
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
                publicaciones y comentar los posts de otros usuarios. Para la
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
            href="https://tiendatecnologica.netlify.app/#/"
            className="proyect"
          >
            <div>
              <img className="imgCompu" src={`${imgEcomer}`} alt="" />
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
            href="https://github.com/rom213/serverRestaurant.git"
            className="proyect"
          >
            <div>
              <img className="imgCompu" src={`${imgRestaurant}`} alt="" />
            </div>
            <div>
              <div>
                <h2>AppRestaurant</h2>
              </div>
              <div>
                Este proyecto se desarrollo d una API, para la gestión de
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
            href="https://github.com/rom213/TallerdeBicis.git"
            className="proyect"
          >
            <div>
              <img className="imgCompu" src={`${imgBici}`} alt="" />
            </div>
            <div>
              <div>
                <h2>Bicycle workshop</h2>
              </div>
              <div>
                Este proyecto fue creado para aplicarlo a un taller de
                bicicletas, donde los usuarios pueden apartar sus reparaciones y
                cancelarlas si se demoran. Los empleados pueden marcar una
                reparación como completada. La aplicación permite iniciar sesión
                a través de un token y se ha hecho uso del framework de express.
                También se empleó una base de datos MySQL con las relaciones
                correspondientes, encriptación de contraseñas, middlewares y
                manejo de errores.
              </div>
              <div>
                <div className="contentSkillsCompu">
                  <div className="skil">nodejs</div>
                  <div className="skil">express</div>
                  <div className="skil">react</div>
                  <div className="skil">postman</div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://worldrickandmorty.netlify.app" className="proyect">
            <div>
              <img className="imgCompu" src={`${imgRick}`} alt="" />
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
          >
            <div>
              <img className="imgCompu" src={`${imgTienda}`} alt="" />
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
      </div>



    </div>
  );
};

export default Computer;
