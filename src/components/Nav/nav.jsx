function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>

    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        >
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
                <span className="sr-only">(current)</span>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
            <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            />
            <button className="btn btn-outline-success" type="submit">
            Search
            </button>
        </form>

        </div>
    </nav>
  );
}

export default Nav;

