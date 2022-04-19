import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-black bg-black">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <i className="fa-solid fa-bars" style={{color:'#fff'}}></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-fill me-auto mb-2 mb-lg-0 flex-column">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/aboutUs">About Us</Link>
                    </li>
                    <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul className="dropdown-menu dropdown-newColor" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/O-Ring">O-ring</Link></li>
                        <li><a className="dropdown-item" href="/">Car Air-conditioning O-ring Kit</a></li>
                        <li><a className="dropdown-item" href="/">Auto Seals</a></li>
                        <li><a className="dropdown-item" href="/">Pneumatic Seals</a></li>
                        <li><a className="dropdown-item" href="/">Connector Seals</a></li>
                        <li><a className="dropdown-item" href="/">Aerospace Seals</a></li>
                        <li><a className="dropdown-item" href="/">New Energy Vehicle Seals</a></li>
                        <li><a className="dropdown-item" href="/">Seal Washer</a></li>
                        <li><a className="dropdown-item" href="/">Seal Gasket</a></li>
                        <li><a className="dropdown-item" href="/">Silica Gel Sealing Strip</a></li>
                        <li><a className="dropdown-item" href="/">Bearing</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">OEM Products</a></li>
                        <li><a className="dropdown-item" href="/">Customized Products</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href='/'>Coming Soon</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;