"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var sequelize_1 = require("sequelize");
var dotenv_1 = require("dotenv");
var user_1 = require("./user");
dotenv_1.config();
exports.db = {};
var sequelize = new sequelize_1.Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb',
    port: Number(process.env.DB_PORT)
});
exports.db.sequelize = sequelize;
exports.db.Sequelize = sequelize_1.Sequelize;
exports.db.user = user_1.default(sequelize, sequelize_1.Sequelize);
//# sourceMappingURL=index.js.map