'use strict'
const ModelUser = require('../Models/User')
const addreess  = require ('../Models/Address')
const Post      = require('../Models/Post')
var UserController =()=>{};


UserController.GetAllUser=(req, res)=>{
    //Se puede hacer de varias manera si quiero que me traiga todos los datos de la tabla 
    //relacionada hago simeplemente;
    //include:'addreess'
ModelUser.findAll({
    include:[{
        model:addreess,
        attributes:['street']
    }, {
        model:Post,
        as:"publicaciones",
        attributes:['title', 'body']
    }],
    attributes:['name', 'age']
}).then(user=>{
    res.json(user);
})
}

UserController.GetUser=(req, res)=>{
ModelUser.findByPk(req.params.id).then(user=>{
    res.json(user)
})
 }
 UserController.PostUser=(req, res)=>{

/*
Tambien se puede hacer de esta manera que he mas corta y mas simple
 ModelUser.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        role: req.body.role,
        addreess:{
            street:req.body.street
        },
    },{
        include:'addreess'
    }).then(use=>{
        addreess.create({street:req.body.street}).then(street=>{
            use.setAddreess(street).then(result=>{
                res.json(use)
            })
        })
    }
*/
ModelUser.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    role: req.body.role
    
}).then(use=>{
    addreess.create({street:req.body.street}).then(street=>{
        use.setAddreess(street).then(result=>{
            res.json(use)
        })
    })
},error=>{
        res.json(error.errors[0].message)
    })
 }
 UserController.UpdateUser=(req, res)=>{
 ModelUser.update({
        name: req.body.name,
        apellido: req.body.apellido
     },{
     where:{
         id: req.params.id
     }
     }).then(user=>{
         if(user !=null){
             res.json("Se ha actualizado un registro")
         }else{
            res.status(500).json("Hubo un problema al actualizar el usuario")
         }
     })
 }
UserController.DeleteUser=(req, res)=>{
ModelUser.destroy({
where :{id:req.params.id}
}).then(user=>{
    user?res.json("Usuario eliminado"):res.status(500).json("Hubo un problema en el servidor")
})
 }

 UserController.GetaddrresUser=(req, res)=>{
     ModelUser.findByPk(req.params.id).then(user=>{
         user.getAddreess().then(addrres=>{
             res.json(addrres)
         })
     })
 }

 UserController.GetPublicacionesUser=(req, res)=>{
    ModelUser.findByPk(req.params.id).then(user=>{
        user.getPublicaciones().then(publicaciones=>{
            res.json(publicaciones)
        })
    })
 }
 module.exports = UserController;