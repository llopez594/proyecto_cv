import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize";

export class Services extends Model {
    title!: string;
    description!: string;
    role_label!: string;
    profile_image_url!: string;
}

Services.init(
    {
        icon: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        service_features: {
            type: DataTypes.JSON,
            allowNull: true
        },
        price: {
            type: DataTypes.STRING(100)
        },
        is_featured: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        order_position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    },
    {
        sequelize,
        tableName: "services",
        timestamps: false,
        createdAt: "created_at",
        updatedAt: false
    }
);
