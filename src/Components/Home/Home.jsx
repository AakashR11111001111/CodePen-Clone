import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useContext, useEffect, useState } from "react";
import { userCtx } from "../../App";

const Home = () => {
    const navigate = useNavigate();
    const userContext = useContext(userCtx);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userDetails"));
        if (userContext.email || storedUser) {
            setIsLoggedIn(true);
        }
    }, [userContext.email]); // useEffect tabhi chalega jab email update hoga

    const onSignUpClick = () => {
        navigate("/login");
    };

    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <div className={styles.heroimg}>
                    <img
                        src="https://images.seeklogo.com/logo-png/27/2/codepen-logo-png_seeklogo-272985.png"
                        alt=""
                    />
                </div>
                <div className={styles.herohead}>
                    <h1>The best place to build, test, and discover front-end code.</h1>
                </div>
            </div>
            <div className={styles.herotwo}>
                <p>
                    CodePen is a <strong>social development environment </strong>
                    for front-end designers and developers. Build and deploy a website, show off your work,
                    build test cases to learn and debug, and find inspiration.
                </p>
            </div>
            {!isLoggedIn && (
                <button onClick={onSignUpClick} className={styles.signupBtn}>
                    Sign Up for Free
                </button>
            )}
        </div>
    );
};

export default Home;
