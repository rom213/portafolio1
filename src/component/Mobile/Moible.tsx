import useScroll from "../../hooks/windowScroll";
import "./style.css";
import imgenT from "../../assets/proyects/tienedadetecnologia.png";
import pokedex1 from "../../assets/proyects/pokedex1.png";
import rick from "../../assets/proyects/rickandmorty.png";
import restaurants from "../../assets/proyects/reRestaurant.png";
import imgBlog from "../../assets/proyects/blog.png";
import Skils from "../skills/Skils";
import Contact from "../contact/Contact";
import Night from "../modoNocturno/Night";

const Moible = () => {
  const { scrollY } = useScroll();

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
          <h2>Abaut</h2>
        </div>

        <div className="textAbout">
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
          <br />
          <br />
          With my extensive knowledge and experience, I am well-equipped to
          tackle diverse challenges and deliver high-quality software solutions.
          I prioritize clean and maintainable code, ensuring scalability and
          robustness in my applications.
          <br />
          Whether it's building responsive and intuitive user interfaces or
          developing robust and secure backend systems.
        </div>
      </div>

      <div className="contentProyects">
        <div className="headerAbout">
          <h2>Proyects</h2>
        </div>
        <div className="contentProyectsFront">
          <div className="contentProyec">
            <br />
            <br />
            <h3 className="titleproy">frontEnd</h3>
            <a
              className="linkEcomeTec"
              href="https://tiendatecnologica.netlify.app/#/"
            >
              Ecomerse of technology store
            </a>
            <div className="contentText">
              Se utilizó la tecnología de React con TypeScript para desarrollar
              un diseño intuitivo y atractivo con el objetivo de que el usuario
              se sienta cómodo. Se implementaron rutas y rutas protegidas para
              usuarios logueados, y se gestionaron las bibliotecas de Redux,
              Axios, Zustand y otras más. El proyecto aún está en desarrollo,
              donde se está implementando React Query para el manejo de caché y
              se está añadiendo capacidad de respuesta para dispositivos
              móviles.
            </div>
            {scrollY > 950 && (
              <div className="contentAnima">
                <img className="imgTecno" src={imgenT} alt="" />
                <div className="contentSkills">
                  <div className="skill">react Ts</div>
                  <div className="skill">redux</div>
                  <div className="skill">Zustand</div>
                  <div className="skill">Api</div>
                </div>
              </div>
            )}
          </div>

          <div className="contentProyec">
            <br />
            <a
              className="linkEcomeTec"
              href="https://worldrickandmorty.netlify.app"
            >
              World Rick and Morty
            </a>
            <div className="contentText">
              En el proyecto se ha incorporado un buscador similar al de Google,
              que despliega opciones de búsqueda a medida que se escribe.
              Además, se ha agregado un modo noche sencillo para mejorar la
              estética. Para la implementación de la paginación, se ha creado la
              funcionalidad correspondiente. Adicionalmente, se ha realizado el
              consumo de la API de Rick and Morty.
            </div>

            {scrollY > 1400 && (
              <div className="contentAnima">
                <img className="imgTecno" src={`${rick}`} alt="" />
                <div className="contentSkills">
                  <div className="skill">react Js</div>
                  <div className="skill">Api</div>
                  <div className="skill">axios</div>
                </div>
              </div>
            )}
          </div>

          <div className="contentProyec">
            <br />
            <a
              className="linkEcomeTec"
              href="https://pokeedexsite.netlify.app/"
            >
              Pokedex
            </a>
            <div className="contentText">
              Se utilizó la API pública PokeAPI para obtener datos de Pokémon.
              Para realizar las solicitudes HTTP a la API, se utilizó la
              biblioteca Axios. Además, se trabajó con rutas y rutas protegidas
              utilizando la biblioteca react-router-dom. Para gestionar el
              estado de la aplicación, se utilizó la biblioteca Redux Toolkit.
              Se aplicó la reutilización de código para mejorar la optimización
              de la aplicación.
            </div>
            {scrollY > 2000 && (
              <div className="contentAnima">
                <img className="imgTecno" src={`${pokedex1}`} alt="" />
                <div className="contentSkills">
                  <div className="skill">react Js</div>
                  <div className="skill">redux</div>
                  <div className="skill">routes</div>
                  <div className="skill">Api</div>
                </div>
              </div>
            )}
          </div>

          <div className="contentProyec">
            <br />
            <hr />
            <br />
            <br />
            <h3 className="titleproy">BackEnd</h3>
            <a
              className="linkEcomeTec"
              href="https://apirestaurant.onrender.com/api/v1/docs/#/"
            >
              AppRestaurant
            </a>

            <div className="contentText">
              En este proyecto se desarrollo una API (Interfaz de Programación
              de Aplicaciones) para la gestión de restaurantes en el backend. La
              API permitirá la administración de reservaciones, usuarios,
              comidas, pedidos y comentarios sobre la calidad del servicio en
              los restaurantes. Además, se brinda la funcionalidad de crear
              usuarios, lo cual les otorga diversas acciones, como realizar
              pedidos y dejar comentarios.
              <br />
              Tecnologías utilizadas: en la implementación de este proyecto, se
              uso una base de datos mySql relaciones entre tablas ,se ha hecho
              uso del framework Express, conocido por su eficiencia y facilidad
              de uso en el desarrollo de aplicaciones web y APIs. Asimismo, se
              ha aplicado el manejo de errores para garantizar una experiencia
              fluida y confiable. Las variables de entorno han sido utilizadas
              para configurar aspectos específicos de la aplicación según el
              entorno de despliegue. Por último, se ha implementado un sistema
              de autenticación y niveles de acceso para garantizar la seguridad
              y la privacidad de los usuarios.
            </div>

            {scrollY > 100 && (
              <div className="contentAnima">
                <img className="imgTecno" src={`${restaurants}`} alt="" />
                <div className="contentSkills">
                  <div className="skill">nodejs</div>
                  <div className="skill">express</div>
                  <div className="skill">postman</div>
                  <div className="skill">mySql</div>
                </div>
              </div>
            )}
          </div>

          <div className="contentProyec">
            <br />
            <br />
            <a
              className="linkEcomeTec"
              href="https://blogswagger.onrender.com/api/v1/docs/#/"
            >
              blogPosts
            </a>
            <div className="contentText">
              Este proyecto se centra en el desarrollo de un blog en el que los
              usuarios pueden publicar sus posts y compartirlos con otros
              usuarios de la aplicación. Cualquier persona puede registrarse e
              iniciar sesión utilizando su correo electrónico para crear
              publicaciones y comentar los posts de otros usuarios. Para la
              implementación, se utilizó el framework Express, el cual facilitó
              la creación de la Api.
              <br />
              Se incorporaron sockets para permitir la visualización en tiempo
              real de las publicaciones que van realizando los usuarios. Además,
              se empleó Firebase para almacenar las imágenes como enlaces en la
              base de datos MySQL.
              <br />
              En cuanto a la seguridad, se implementó la encriptación de
              contraseñas para garantizar la protección de los usuarios. También
              se establecieron relaciones en la base de datos MySQL para
              gestionar las interacciones entre los distintos elementos del
              blog.
              <br />
              <br />
              En resumen, este proyecto se enfocó en desarrollar un blog con
              funcionalidades de publicación, comentarios en tiempo real y
              gestión de usuarios, utilizando el framework Express, sockets,
              Firebase y MySQL, entre otras herramientas.
            </div>
            {scrollY > 1500 && (
              <div className="contentAnima">
                <img className="imgTecno" src={`${imgBlog}`} alt="" />
                <div className="contentSkills">
                  <div className="skill">nodejs</div>
                  <div className="skill">express</div>
                  <div className="skill">bycrip</div>
                  <div className="skill">sockets</div>
                </div>
              </div>
            )}
          </div>

          <div className="contentProyec">
            <br />
            <br />
            <a
              className="linkEcomeTec"
              href="https://swaggerpelis.onrender.com/api/v1/docs/#/"
            >
              appi-pelis
            </a>

            <div className="contentText">
              Este proyecto fue creado para ser aplicado en un frontend. Es una
              aplicación donde los usuarios pueden registrarse y acceder
              mediante un token. Las películas, géneros y personajes tienen sus
              respectivas imágenes, las cuales se cargan en Firebase. se
              establecio una base de datos actualizada MySQL2 que tiene sus
              respectivas migraciones y seeders, además de tener relaciones
              entre tablas de 1 a 1, 1 a muchos y muchos a muchos.
            </div>
            <div className="contentAnima">
              <img
                className="imgTecno"
                src="https://th.bing.com/th/id/R.5eb2d62cac6c08719b4d3b8672a7e56f?rik=Q4bbJqLRMrfKeQ&riu=http%3a%2f%2ffrikilogia.com%2fwp-content%2fuploads%2f2012%2f01%2ftecnologia-organiza-tu-coleccion-de-peliculas-la-b.jpg&ehk=84rPabYc5fidYt3aWsm5rHpK7QJvGlA0pfWBeV4NPiw%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="contentSkills">
                <div className="skill">nodejs</div>
                <div className="skill">express</div>
                <div className="skill">bycrip</div>
                <div className="skill">Api</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contentAlldesCon">
        <br />
        <br />
        <h1>Skills</h1>
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
