import styles from "./Login.module.css";
import { auth, googleAuthProvider } from "../../config/firebase";
import { userCtx } from "../../App";

import { NavLink, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
const Login = () => {
    const navigate = useNavigate();
    const ctx = useContext(userCtx);    
    
    const onGoogleSignUp = async () => {
        try{
            const res = await signInWithPopup(auth, googleAuthProvider);
            const userDetails = {
                DisplayName: res.user.displayName,
                email: res.user.email,
                photoURL: res.user.photoURL,
            }
            ctx.setUserDetails(userDetails);
            const ObjInString = JSON.stringify(userDetails);
            localStorage.setItem("userDetails", ObjInString);
            navigate("/pen");
            
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.loginContainer}>
                   <div className={styles.formHead}>
                        <h1>Free</h1>
                        <p>Welcome to CodePen.</p>
                   </div>
                   <div className={styles.formLeft}>
                    <NavLink onClick={onGoogleSignUp}> <img src="/google.png" alt="" /> <p>Sign Up with Google</p> </NavLink>
                    <NavLink to={""}> <img src="/GitHub.png" alt="" /> <p>Sign Up with GitHub</p> </NavLink>
                    <span style={{color: "rgba(0, 0, 0, 0.6)"}}>Or, </span>
                    <NavLink className={styles.email} to={""}><p>Sign Up with Email</p> </NavLink>
                    <p className={styles.tnC}>By signing up, you agree to CodePen&apos;s <span className={styles.links}>Terms of Service </span>, <span className={styles.links}>Code of Conduct </span>, and <span className={styles.links}>Privacy Policy</span> .</p>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Login;