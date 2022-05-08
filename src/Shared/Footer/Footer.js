import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Footer.css'
// import { SocialIcon } from 'react-social-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Footer = () => {
    const [user] = useAuthState(auth);
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer-body'>
            <div className="d-flex flex-column h-100">

                {/* <!-- FOR DEMO PURPOSE --> */}
                <section className="hero text-white py-5 flex-grow-1">
                    <div className="container py-4">
                        <div className="row">

                        </div>
                    </div>
                </section>


                {/* <!-- FOOTER --> */}
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">GREEN SPORTS</h5>
                                <p className="small  text-white">Start your own business with us.</p>
                                <p className="small text-white mb-0">&copy; Copyrights. All rights reserved. <Link className="text-primary" as={Link} style={{ cursor: "pointer", textDecoration: "none" }} to="/">Green Sports</Link></p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link as={Link} to="/">Home</Link></li>
                                    <li><Link as={Link} to="manageItem">Manage Item</Link></li>
                                    <li><Link as={Link} to="myItem">My Items</Link></li>

                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link as={Link} to="/">Home</Link></li>

                                    {
                                        user
                                            ?
                                            <><li><button type="button" className="btn btn-link footer-logout" style={{ textDecoration: "none", color: "white", padding: "0px" }}>Logout</button> </li> </>
                                            :
                                            <><li><Link as={Link} to="login">Login</Link></li> </>
                                    }
                                    <li><Link as={Link} to="#">Get started</Link></li>
                                    <li><Link as={Link} to="#">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Newsletter</h5>
                                <p className="small text-white">Subscribe to get our daily update, discount and many more</p>
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;