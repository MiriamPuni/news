import { cookies } from 'next/headers'
import connectToMongo from '../DL/connectToMongo';
import adminController from '../DL/controllers/admin.controller';
import jwt from 'jsonwebtoken'

export const createToken = (user)=>{
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn:'1d'})
    return token
}

export const checkToken = async()=>{
    const token = cookies().get('token')
    const payload = jwt.verify(token.value, process.env.JWT_SECRET)
    await connectToMongo()
    const user = await adminController.find({_id:payload._id})
    return user
}
