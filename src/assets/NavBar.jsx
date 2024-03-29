import { NavLink } from 'react-router-dom';
const NavBar = (props) => {
  return (
    <>
      <nav className={props.mode === 'light' ? `navbar navbar-expand-lg navbar-light bg-primary1 sticky-lg-top` : `navbar navbar-expand-lg navbar-dark bg-dark sticky-lg-top`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" activeClassName="active">Levister Technologies</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service" activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
              </li>
            </ul>
            <div className="form-check form-switch">
              <label className={props.mode === "light" ? "form-check-label  text-dark" : "form-check-label text-light"} htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.ToggleMode} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
