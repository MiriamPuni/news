
'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import createAdmin, { loginAdmin } from '@/server/actions/admin.action';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function LoginAdmin() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div className={styles.container}>
      {!showSignUpForm && (<div className={styles.login}>
        <h3>התחברות</h3>
        <form action={loginAdmin}>
          <label htmlFor="username">שם המשתמש</label>
          <input type="text" name="username" placeholder="שם משתמש" />
          <label htmlFor="password">סיסמא</label>
          <input type="text" name="password" placeholder="סיסמא" />
          <button type="submit" className={styles.connect}>התחבר</button>
        </form>
        <button>שכחתי סיסמא</button>
        <div className={styles.butt}>
        <p>להרשמה</p>
        <button onClick={toggleSignUpForm}>
          {showSignUpForm ? <IoIosArrowUp size={25} /> :<IoIosArrowDown size={25}/>}
        </button></div>
      </div>)}
      <div className={styles.signUp}>
        {showSignUpForm && (
          <form action={createAdmin}>
            <div className={styles.containerTit}>
            <h3>הרשמה</h3>
            <button onClick={toggleSignUpForm} className={styles.signUpButt}>
          {showSignUpForm ? <IoIosArrowUp  size={25}/> :<IoIosArrowDown  size={25}/>}
        </button></div>
        <label htmlFor="fullName">שם מלא</label>
            <input type="text" name="fullName" placeholder="שם מלא" />
            <label htmlFor="email">אימייל</label>
            <input type="text" name="email" placeholder="אימייל" />
            <label htmlFor="username">שם משתמש</label>
            <input type="text" name="username" placeholder="שם משתמש" />
            <label htmlFor="password">סיסמא</label>
            <input type="text" name="password" placeholder="סיסמא" />
            <label htmlFor="confirmPassword">אימות סיסמא</label>
            <input type="text" name="confirmPassword" placeholder="אימות סיסמא" />
            <label htmlFor="accessPermission">הרשאת כניסה</label>
            <input type="text" name="accessPermission" placeholder="הרשאת כניסה" />
            <button type="submit" className={styles.connect}>הירשם</button>
          </form>
        )}
      </div>
    </div>
  );
}
//labal top

//font  Heebo- header   atehr Open Sans
