const { default: adminModel } = require("../admin.model");

async function create(data){
    return await adminModel.create(data)
}
async function find(filter){
    return await adminModel.find(filter)
}
export default {create, find}