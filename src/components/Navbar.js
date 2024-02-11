import React from 'react'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const history=useNavigate();
    const handlelogout=()=>{
        signOut(auth).then(val=>{
            history('/');
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={process.env.PUBLIC_URL + '/youtube_logo.png'} style={{ cursor: 'pointer' }} alt="YouTube Logo" width="30" height="30" className="d-inline-block align-top" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Subscription">Subscriptions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Shorts">Shorts</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">History</a>
                                <a className="dropdown-item" href="/">Liked Videos</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Watch Later</a>
                            </div>
                        </li>
                    </ul>
                    <div className='Username' style={{ color: 'red' }}>
                        <h4>Welcome {props.name} &nbsp;</h4>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div>
                    <ul className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item red-link" to="/Signup">Signup</Link> 
                            <Link  className="dropdown-item red-link" to="/Login ">Login</Link>
                            <Link  className="dropdown-item red-link"  onClick={handlelogout}>Logout</Link>
                            {/* <button onClick={handlelogout}>Logout</button> */}
                            </div>
                        </ul>
                    </div>
                    {/* <div>
                        <Link onClick={handlelogout}>Logout</Link>
                    </div> */}
                </div>
            </nav>
        </>
    );
}
