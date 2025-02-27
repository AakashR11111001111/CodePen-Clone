import { useContext, useRef, useState } from "react";
import styles from "./PenNav.module.css";
import { userCtx } from "../../App";
import { useNavigate } from "react-router-dom";

const PenNav = () => {
    const navigate = useNavigate();
    const ctx = useContext(userCtx);
    const pp = ctx.userDetails.photoURL || localStorage.getItem("userDetails") && JSON.parse(localStorage.getItem("userDetails")).photoURL;
    
    const [postTitle, setPostTitle] = useState("Untitled");
    const [isTitleOnEditMode, setIsTitleOnEditMode] = useState(false);
    const txtAreaRef = useRef(null);

    const onTitleChange = () => {
        setPostTitle(txtAreaRef.current.value);
    };


    const toggleEditMode = () => {
        setIsTitleOnEditMode((prev) => !prev);
        setTimeout(() => {
            if (txtAreaRef.current) {
                txtAreaRef.current.focus();
            }
        }, 0);
    };

    const onNavBtnClick = () => {
        navigate("/login")
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                <div className={styles.logo}>
                    <img
                        src="https://images.seeklogo.com/logo-png/27/2/codepen-logo-png_seeklogo-272985.png"
                        alt="CodePen Logo"
                        onClick={()=>navigate("/")}
                    />
                </div>

                {
                    isTitleOnEditMode 
                    ?
                    <>
                        <textarea ref={txtAreaRef} onChange={onTitleChange} className={styles.txtarea} defaultValue={postTitle} /> 
                        <div className={styles.tick}>
                        <svg onClick={toggleEditMode} viewBox="0 0 255.99332 255.99332" width="25px" height="25px" fillRule="nonzero"><g fill="#0bba07" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M42.875,8.625c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.26172,0.06641 -0.48828,0.23438 -0.625,0.46875l-20.4375,31.6875l-14.0625,-12.6875c-0.24609,-0.3125 -0.65625,-0.44922 -1.04297,-0.34766c-0.38672,0.10156 -0.67187,0.42578 -0.73047,0.82031c-0.05859,0.39453 0.12109,0.78516 0.46094,0.99609l14.90625,13.5c0.21875,0.19141 0.51172,0.27734 0.80078,0.23438c0.28906,-0.04297 0.54297,-0.20703 0.69922,-0.45312l21.09375,-32.6875c0.23047,-0.32812 0.24219,-0.76172 0.03125,-1.10156c-0.21094,-0.33984 -0.60547,-0.51953 -1,-0.46094z"></path></g></g></svg>
                        </div>
                    </> 
                    
                    : 
                        <div className={styles.title}>
                            <h3>{postTitle}</h3>
                            <button className={styles.editBtn} onClick={toggleEditMode}>
                                <svg viewBox="0 0 30 30" width="25px" height="25px">
                                    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
                                </svg>
                            </button>
                        </div>            
                }
            </div>

            <div className={styles.btns}>
                <button className={styles.navBtn}><img src="/cloud.png" alt="" />Save</button>    
                <button className={styles.navBtn}><img src="/setting.png" alt="" />Settings</button>    
            {

               pp ? <img className={styles.pfp} src={pp} alt="" /> : <> <button onClick={onNavBtnClick} className={styles.signUpBtn}>Sign Up</button>    
                <button onClick={onNavBtnClick} className={styles.navBtn}>Log In</button> </>
            }
                   
                   
                  
            </div>
        </nav>
    );
};

export default PenNav;
