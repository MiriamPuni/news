const { default: adminController } = require("../DL/controllers/admin.controller");
async function createNewAdmin(data){
    return await adminController.create(data)
}
async function loginAdmin(){
    return await adminController.find()
}
export default {createNewAdmin, loginAdmin}