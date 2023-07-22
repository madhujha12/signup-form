import React, { useState, useSyncExternalStore } from 'react';
import styles from "./LoginForm.module.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';

const LoginForm = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (password.length < 6) {
            setShowPasswordErrorMessage(true);
            return;
        }
        setShowPasswordErrorMessage(false);
        setEmail("");
        setPassword("");
        // if (password.length<6){
        //     alert("password is too short");
        //     return;
        // }
        let uppercase=0;
        let lowercase=0;
        let digits=0;
        let specialCharacter=0;
        for (const char of password){
            if (char>="A" &&  char<="Z"){
                uppercase+=1;
            }
            else if (char>="a" && char<="z"){
                lowercase+=1;
            }
            else if (char>="0" && char<="9"){
                digits+=1;
            }
            else{
                specialCharacter+=1;
            }
        }
        if (uppercase<1 || lowercase<1|| digits<1|| specialCharacter<1){
            alert("Password must contain 6 characters atleast one uppercase ,one lowercase,one digit and one specialCharacter");
            return;
        }


        console.log(user,email, password,confirmPassword);
    }
  return (
    <>
        <form className={styles.form}onSubmit={handleSubmit}>
            <h1>🔏SignUp Form 🔏</h1>
            <div className={styles.inputContainer}>
                <PersonIcon className={styles.icon}/>
                <input 
                type="text" 
                placeholder="enter username..." 
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                required/>
            </div>
            <div className={styles.inputContainer}>
                <EmailIcon className={styles.icon}/>
                <input 
                type="text" 
                placeholder="enter email..." 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required/>
            </div>
        <div className={styles.inputAndErrorContainer}>
          <div className={styles.inputContainer}>
            <LockIcon className={styles.icon} />
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter password..."
              className={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {!showPassword ? (
              <VisibilityIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {showPasswordErrorMessage && (
            <p className={styles.errorMessage}>Password too short!</p>
          )}
        </div>
        <div className={styles.inputContainer}>
            <LockIcon className={styles.icon} />
            <input
              type={!showPassword ? "confirmPassword" : "text"}
              placeholder="confirm password..."
              className={styles.passwordInput}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {!showPassword ? (
              <VisibilityIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityOffIcon
                className={styles.icon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        <button className={styles.loginButton} type="submit">
          Login
        </button>
      </form>
    </>
  );
};


export default LoginForm