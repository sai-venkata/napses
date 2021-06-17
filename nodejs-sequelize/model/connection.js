import Sequelize from "sequelize";

//connecting to seqeulize
const db = new Sequelize("sequalize", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});


export default db