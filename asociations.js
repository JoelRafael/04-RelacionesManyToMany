const User = require ('./Models/User')
const Addres = require ('./Models/Address')
const Post = require ('./Models/Post')
const Band = require ('./Models/Band')

User.hasOne(Addres)
Addres.belongsTo(User);


//Uno a muchos 
//Usuario va a tener muchos post
User.hasMany(Post, {as:"publicaciones", foreignKey:"autorId"})
Post.belongsTo(User, {as:"autor"})


//Mucho a Mucho
//EL usuario pertenezca a varias bandas
//Esto crea una nueva tabla en la base de datos llamada user_band
User.belongsToMany(Band, {through:"user_band"})