import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./sequelize";

interface ProjectAttributes {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    description: string;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    is_featured: boolean;
    order_position: number;
    status: string;
    category_id?: number;
    created_at?: Date;
    updated_at?: Date;
}

interface ProjectCreationAttributes
    extends Optional<ProjectAttributes, "id"> { }

export class Project
    extends Model<ProjectAttributes, ProjectCreationAttributes>
    implements ProjectAttributes {
    public id!: number;
    public title!: string;
    public slug!: string;
    public short_description!: string;
    public description!: string;
    public image_url?: string;
    public demo_url?: string;
    public github_url?: string;
    public is_featured!: boolean;
    public order_position!: number;
    public status!: string;
    public category_id?: number;
    public created_at?: Date;
    public updated_at?: Date;
}

Project.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING(200), allowNull: false },
        slug: { type: DataTypes.STRING(200), allowNull: false, unique: true },
        short_description: { type: DataTypes.TEXT, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        image_url: { type: DataTypes.STRING(500) },
        demo_url: { type: DataTypes.STRING(500) },
        github_url: { type: DataTypes.STRING(500) },
        is_featured: { type: DataTypes.BOOLEAN, defaultValue: false },
        order_position: { type: DataTypes.INTEGER, defaultValue: 0 },
        status: { type: DataTypes.STRING(20), defaultValue: "active" },
        category_id: { type: DataTypes.INTEGER }
    },
    {
        sequelize,
        tableName: "projects",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);
