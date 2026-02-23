import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize";

export class ProjectTag extends Model {
    public project_id!: number;
    public tag_id!: number;
}

ProjectTag.init(
    {
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    },
    {
        sequelize,
        tableName: "project_tags",
        timestamps: false
    }
);
