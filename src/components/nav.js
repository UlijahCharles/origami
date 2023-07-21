import { HashLink } from "react-router-hash-link";
import Logo_Image from "../assets/Group_3.png";

function Nav(props) {
  return (
    <nav className="navbar navbar-transparent navbar-expand-lg  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo_Image} alt="Origami Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <HashLink
                smooth
                to={props.homeBoolean ? "#aboutUs" : "/"}
                className="nav-link "
              >
                {props.homeBoolean ? "About Us" : "To Main"}
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to={props.homeBoolean ? "#principles" : "/#principles"}
                className="nav-link "
              >
                Our Principles
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to={props.homeBoolean ? "#catalog" : "/#catalog"}
                className="nav-link "
              >
                Catalog
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
