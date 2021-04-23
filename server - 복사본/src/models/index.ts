import { Sequelize } from 'sequelize'
import { config } from 'dotenv'
import user from './user'

config()
interface db{
  sequelize? : Sequelize
  Sequelize?
  user?
}

export const db : db = {};
const sequelize = new Sequelize(
  process.env.DATABASE, 
  process.env.USER, 
  process.env.PASSWORD, 
  {
    host: 'localhost',
    dialect: 'mariadb',
    port: Number(process.env.DB_PORT)
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = user(sequelize, Sequelize)
