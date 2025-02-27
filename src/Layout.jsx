import { useContext } from 'react';
import styles from './Layout.module.css';

import { useNavigate } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';



const Layout = () => {
    
    const navigate = useNavigate();
    const onNavBtnClick = () => {
        navigate('/login');
    }



    return (
        <div className={styles.main}>
            <nav className={styles.nav}>
                <div onClick={""} className={styles.utility}>
                    <img src="/sidepanel.png" alt="" />
                </div>
                <ul>
                    <li>
                        <NavLink to="/">
                            <svg
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.3"
                                viewBox="0 0 138 26"
                                aria-hidden="true"
                            >
                                <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                            </svg>
                        </NavLink>
                    </li>
                    <li><span className={styles.spaninli}>TRY OUR ONLINE EDITOR</span></li>
                    <li><NavLink to={"/pen"}><button className={styles.scBtn}>Start Coding</button></NavLink></li>
                    <li><NavLink className={styles.subhead}><h3>Search Pen</h3></NavLink></li>
                    <li><NavLink className={styles.subhead}><h3>Challenges</h3></NavLink></li>
                    <li><NavLink className={styles.subhead}><h3>Spark</h3></NavLink></li>
                    <li><NavLink className={styles.subhead}><h3>CodePen</h3></NavLink></li>
                </ul>
                <div className={styles.moreinfo}>
                    <img src="https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517" alt="" />
                    <p>Build your website for just $3.88/mnth. More value and performance with NameCheap.</p>
                    <p>(ads via Carbon)</p>
                </div>
            </nav>
            <div className={styles.content}>
                <div className={styles.upperNav}>
                    <div className={styles.input}>
                        <div className={styles.searchimg}>
                            <svg viewBox="0 0 50 50" width="20px" height="20px">
                                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/>
                            </svg>
                        </div>
                        <input type="text" className={styles.ip} placeholder="Search Codepen..." />
                    </div>
                    <div className={styles.btns}>
                        {
                            localStorage.getItem("userDetails") ? <img className={styles.pfp} src={JSON.parse(localStorage.getItem("userDetails")).photoURL} alt="" /> : <> <button onClick={onNavBtnClick} className={styles.signUp}>Sign Up</button>
                                <button onClick={onNavBtnClick} className={styles.login}>Log In</button> </>
                        }
                        
                    </div>
                </div>
                <div className={styles.maincontent}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
