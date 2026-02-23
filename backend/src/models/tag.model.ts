import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize";

export class Tag extends Model { }

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        slug: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        color: {
            type: DataTypes.STRING(7),
            defaultValue: "#00326f"
        },
        icon: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        is_skill: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        skill_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        order_position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
    },
    {
        sequelize,
        tableName: "tags",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false
    }
);