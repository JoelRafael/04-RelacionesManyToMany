const AddressModel = require ('../Models/Address')
const UserModel = require ('../Models/User')

var AddreesController =()=>{}

AddreesController.GetAddrresUser=(req, res)=>{
AddressModel.findAll({
    include:{
        model:UserModel,
        attributes:['name', 'age']
    },
    attributes:['street']
    
}).then(addrres=>{
    res.json(addrres)
})
}
module.exports = AddreesController