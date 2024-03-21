require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false } // sirve para no mostrar por la consola la traduccion de lo que hace sequelize a sql
);

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
