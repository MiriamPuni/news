"use client"
import React from 'react'
import styles from './style.module.css'
// import { useRouter } from 'next/navigation'
import createAdmin from '@/server/actions/admin.action'

export default function LoginAdmin() {
    // const router = useRouter()
    // const handleClickLogin = (e) => {
    //     e.preventDefault()
        
    //     // let data = {
    //     //     username: e.target.username.value,
    //     //     password:e.target.password.value
    //     // }
    // }
    // const handleClickSign =async (e) => {
    //     e.preventDefault()
    //     if (e.target.password.value ==e.target.confirmPassword.value){
    //         let data = {
    //             fullName: e.target.fullName.value,
    //             email:e.target.email.value,
    //             username: e.target.username.value,
    //             password:e.target.password.value,
    //             accessPermission:e.target.accessPermission.value
    //         }
    //         await createNewAdmin
    //     }
    // }
    // router.push('/result?search='+e.target.search.value)
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h3>התחבר כמנהל</h3>
                <form >
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
                <form action={createAdmin}>
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
