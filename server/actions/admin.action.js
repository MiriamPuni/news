"use server"
const { default: adminController } = require("../DL/controllers/admin.controller");
async function createAdmin(data){
    data = Object.fromEntries(data)
    console.log(data);
    await adminController.create(data)
}
export default createAdmin