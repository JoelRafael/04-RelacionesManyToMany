const {Model, DataTypes} = require('sequelize')
const sequelize = require("../Conexion/db");

class User extends Model {}
User.init({
name:{
   type:DataTypes.STRING,
   allowNull:false,
   validate:{
      notNull:{
      msg:"El campo name no puede ser null"
      },
      isAlpha:{
         args:true,
         msg:"Solo pude contener letras"
      },
      len:{
         args:[5, 15],
         msg:"El nombre tiene que estar entre 3 a 15 caracteres" 
       }
   }
},

email:{
type:DataTypes.STRING,
validate:{
   isEmail:{
      args:true,
      msg:"Tiene que ser un email valido"
   }
}
},
age:{
   type:DataTypes.INTEGER,
   allowNull:false,
   validate:{
      notNull:{
       msg:"Este campo no puede estar nulo"
      },
      isInt:{
         args:true,
         msg:"Este campo solo admite numeros"
      },
      min:{
         args:1,
         msg:"La edad no puede ser meno que 1"
      },
      max:{
         args:100,
         msg:"La edad no puede ser mayor que 100"
      },
      validacionpersonal(value){
        if(value % 2) throw new Error("La edad tiene que ser un numero par")
      }
   } 
},
role:{
   type:DataTypes.INTEGER,
   defaultValue:0
}
},{
   sequelize,
   modelName:"user",
   timestamps:false
});

module.exports = User