import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./sequelize";


interface CategoryAttributes {
    id: number;
    name: string;
    slug: string;
    description?: string;
    created_at?: Date;
}

interface CategoryCreationAttributes
    extends Optional<CategoryAttributes, "id"> { }

export class Category
    extends Model<CategoryAttributes, CategoryCreationAttributes>
    implements CategoryAttributes {
    public id!: number;
    public name!: string;
    public slug!: string;
    public description?: string;
    public created_at?: Date;
}


Category.init(
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
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: "categories",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false
    }
);
