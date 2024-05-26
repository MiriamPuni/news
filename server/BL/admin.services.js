// const { default: adminController } = require("../DL/controllers/admin.controller");
import adminController from '@/server/DL/controllers/admin.controller'
async function createNewAdmin(data){
    return await adminController.create(data)
}
async function loginAdmin(){
    return await adminController.find()
}
export default {createNewAdmin, loginAdmin}