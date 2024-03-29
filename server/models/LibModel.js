import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Tokos from "./TokoModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Libs = db.define('lib', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pdfFile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isHidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

Libs.belongsTo(Tokos, { foreignKey: 'tokoId' });

Libs.belongsTo(Users, { foreignKey: 'userId' });

export default Libs;