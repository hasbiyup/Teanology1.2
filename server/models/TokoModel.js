import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import bcrypt from "bcrypt";

const { DataTypes } = Sequelize;

const Tokos = db.define('toko', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

// const syncDatabase = async () => {
//     try {
//       await db.sync();
//       const password = "secret";
//       const hashedPassword = await bcrypt.hash(password, 10); // Menghash password menggunakan bcrypt
//       await Users.bulkCreate([
//         { name: "Hasbi" , email: "admin@gmail.com", password: hashedPassword, role: "AdminToko"}
//       ]);
//       console.log("Database synced and user data added");
//     } catch (error) {
//       console.error("Error syncing database:", error);
//     }
//   };
//   syncDatabase();

export default Tokos;