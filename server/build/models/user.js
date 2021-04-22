"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function user(sequelize, DataTypes) {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        married: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: false
    });
}
exports.default = user;
//# sourceMappingURL=user.js.map