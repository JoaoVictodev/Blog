import React from "react";
import logo from "../../svg/blog-logo.svg";

const Header = () => {
  return (
    <>
      <header className="py-1 px-2">
        <nav>
          <div className="logo">
            <a href=".">
              <img src={logo} alt="Blog logo"></img>
            </a>
          </div>

          <ul className="menu">
            <li>
              <a href="." className="p-1">
                Categorias
              </a>
              <a href="." className="p-1">
                Sobre
              </a>
              <a href="." className="p-1">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search">
            <form className="flex">
              <input type="text" name="search" id="" placeholder="Buscar..." />
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <a href="." className="btn">
              Login
            </a>
          </div>
          <div className="cta-desktop ml-3">
            <a href="." className="btn">
              Login
            </a>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li className="link-menu-mobile">
              <a href=".">Categoria</a>
            </li>
            <li className="link-menu-mobile">
              {" "}
              <a href=".">SObre</a>
            </li>
            <li className="link-menu-mobile">
              {" "}
              <a href=".">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
