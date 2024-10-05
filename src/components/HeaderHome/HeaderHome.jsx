import { Link } from "react-router-dom";
import "./HeaderHome.css";

const HeaderHome = () => {
  const toggleDarkMode = () => {
    const currentMode = localStorage.getItem("accessibilityMode");
    if (currentMode === "dark-mode") {
      localStorage.setItem("accessibilityMode", "light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      localStorage.setItem("accessibilityMode", "dark-mode");
      document.body.classList.add("dark-mode");
    }
  };
  
  return (
    <header className="header-home">
      <h3>TECHNINJA</h3>
      <div className="icons">
        <div className="header-home-options">
          <a href="">
            <img
              src="src/assets/icons/icon-tutorial.png"
              title="Tutorial"
              alt="Icone tutorial"
              id="tutorial"
            />
          </a>

          <Link to="/perfil">
            <img
              src="src/assets/icons/icon-profile-white.png"
              title="Perfil"
              alt="Icone Meu Perfil"
            />
          </Link>

          <img
            src="src/assets/icons/icon-darkmode-white.png"
            title="Modo escuro"
            alt="Icone de uma lua para ativar modo escuro"
            id="modoescuro"
            onClick={toggleDarkMode}
          />
          <Link to="/configuracoes">
            <img
              src="src/assets/icons/icon-configuracoes.png"
              title="Configurações"
              alt="Icone de engrenagem para ir para Configurações"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
