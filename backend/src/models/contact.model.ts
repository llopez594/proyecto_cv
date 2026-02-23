import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "./sequelize";

interface ContactAttributes {
    id: number;
    name: string;
    email: string;
    subject?: string;
    message: string;
    status: string;
    ip_address?: string;
    user_agent?: string;
    created_at?: Date;
}

interface ContactCreationAttributes
    extends Optional<ContactAttributes, "id"> { }

export class Contact
    extends Model<ContactAttributes, ContactCreationAttributes>
    implements ContactAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public subject?: string;
    public message!: string;
    public status!: string;
    public ip_address?: string;
    public user_agent?: string;
    public created_at?: Date;
}

Contact.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(100), allowNull: false },
        email: { type: DataTypes.STRING(200), allowNull: false },
        subject: { type: DataTypes.STRING(200) },
        message: { type: DataTypes.TEXT, allowNull: false },
        status: { type: DataTypes.STRING(20), defaultValue: "new" },
        ip_address: { type: DataTypes.STRING(45) },
        user_agent: { type: DataTypes.TEXT }
    },
    {
        sequelize,
        tableName: "contacts",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false
    }
);
