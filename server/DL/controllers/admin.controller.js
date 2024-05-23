const { default: adminModel } = require("../admin.model");

export async function create(data){
    return await adminModel.create(data)
}
export async function find(filter){
    return await adminModel.find(filter)
}
