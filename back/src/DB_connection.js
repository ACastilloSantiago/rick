require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  // `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`
  "postgresql://postgres:f6f32cb*g6eEBe-E6*Da61DbgC5ED2*1@roundhouse.proxy.rlwy.net:46347/railway",
  { logging: false } // sirve para no mostrar por la consola la traduccion de lo que hace sequelize a sql
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
//
UserModel(sequelize);
//

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
