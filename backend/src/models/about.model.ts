import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize";

export class About extends Model {
    title!: string;
    description!: string;
    role_label!: string;
    profile_image_url!: string;
}

About.init(
    {
        title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        role_label: {
            type: DataTypes.STRING(80)
        },
        profile_image_url: {
            type: DataTypes.STRING(255)
        },
    },
    {
        sequelize,
        tableName: "about",
        timestamps: false,
        createdAt: "created_at",
        updatedAt: false
    }
);
