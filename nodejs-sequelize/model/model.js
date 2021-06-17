import { Sequelize } from "sequelize";
import db from './connection.js'


//creating a model 

//User Model
const dataTypes = Sequelize.DataTypes
export const User = db.define("user", {
  name: dataTypes.STRING,
  email : dataTypes.STRING,
  password : dataTypes.STRING,
});

//Product Model
export const Product = db.define("product", {
  name: { type: dataTypes.STRING, allowNull: false },
  description: { type: dataTypes.STRING, allowNull: false },
  imageUrl: { type: dataTypes.STRING, allowNull: false },
  price: { type: dataTypes.INTEGER, allowNull: false },
  seller_id:{type:dataTypes.INTEGER}
});

//Seller model
export const Seller = db.define("seller", {
  name: { type: dataTypes.STRING, allowNull: false },
  email: { type: dataTypes.STRING },
  password : {type : dataTypes.STRING},
  order_id:{type:dataTypes.INTEGER}
});


//Order Model
export const Order = db.define("order",{
  userId : {type:dataTypes.INTEGER,allowNull : false},
  productId : {type : dataTypes.INTEGER,allowNull:false},
  sellerId : {type: dataTypes.INTEGER,allowNull:false}
})


