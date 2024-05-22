"use client"
import React from 'react'
import styles from './style.module.css'
import { createAdmin, loginAdmin } from '@/server/actions/admin.action'
import { useFormState } from 'react-dom'
export default function LoginAdmin() {
    const initialState = {
        message: '',
      }
    const [state, formAction] = useFormState(createAdmin, initialState)


    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h3>התחבר כמנהל</h3>
                <form action={loginAdmin}>
                    <label htmlFor='username'>שם המשתמש</label>
                    <input type="text" name='username' placeholder='שם משתמש'/>
                    <br />
                    <input type="text" name='password' placeholder='סיסמא' />
                    <br />
                    <button type='submit'>התחבר</button>
                </form>
                <button>שכחתי סיסמא</button>
            </div>
            <div className={styles.signUp}>
                <h3>הירשם כמנהל</h3>
                <form action={formAction}>
                    <input type="text" name='fullName' placeholder='שם מלא ' />
                    <br />
                    <input type="text" name='email' placeholder='אימייל' />
                    <br />
                    <input type="text" name='username' placeholder='שם משתמש' />
                    <br />
                    <input type="text" name='password' placeholder='סיסמא' />
                    <br />
                    <input type="text" name='confirmPassword' placeholder='אימות סיסמא' />
                    <br />
                    <input type="text" name='accessPermission' placeholder='הרשאת כניסה' />
                    <br />
                    {state?.message}
                    <button type='submit'>הירשם</button>
                </form>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
