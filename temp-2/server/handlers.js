import { ContactModel } from "./database.js" 


async function getContacts(req, res){
    const data = await ContactModel.find({}).limit(12);
    res.json(data);
}
async function getIndexes(req, res){
    const data = await ContactModel.find({}).select("prenom nom")
    res.json(data);
}
async function getById(req, res){
    const data = await ContactModel.findById(req.params.id)
    res.json(data);
}

export {
    getContacts,
    getIndexes,
    getById
}
