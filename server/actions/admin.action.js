"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createToken } from "../BL/auth";
import connectToMongo from "../DL/connectToMongo";
const { default: adminController } = require("../DL/controllers/admin.controller");
const bcrypt = require('bcrypt')
const saltRounds = 10
export async function createAdmin(prevState, data){
    try {
        data = Object.fromEntries(data)
        await connectToMongo()
        const user = await adminController.find({email:data.email})
        if (data.accessPermission != process.env.accessPermission) throw 'אין הרשאה'
        if (user.length) throw 'המייל כבר קיים במערכת'
        if (data.password != data.confirmPassword) throw 'האימות סיסמא אינו תואם את הסיסמא'
        const hash = bcrypt.hashSync(data.password, saltRounds)
        const res = await adminController.create({...data, password:hash})
        const token = createToken(res)
        cookies().set('token', token, {httpOnly: true })
    } catch (error) {
        console.log({error});
        return {
            message: typeof error === 'string'? error: 'try again',
          }
    }
    redirect('/AddArticle')
}

export async function loginAdmin(data){
    try {
        data = Object.fromEntries(data)
        await connectToMongo()
        const user = await adminController.find({username: data.username})
        const correctPass = bcrypt.compareSync(data.password, user[0].password)
        if (!correctPass) throw 'אין התאמה בין השם משתמש לסיסמא'
        const token = createToken(user)
        cookies().set('token', token, {httpOnly: true })
    } catch (error) {
        console.log(error);
    }
    redirect('/AddArticle')
}
