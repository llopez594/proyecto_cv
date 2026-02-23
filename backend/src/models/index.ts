import { Project } from "./project.model";
import { Category } from "./category.model";
import { Contact } from "./contact.model";
import { Tag } from "./tag.model";
import { ProjectTag } from "./projectTag.model";


Project.belongsTo(Category, { foreignKey: "category_id" });
Category.hasMany(Project, { foreignKey: "category_id" });

Project.belongsToMany(Tag, {
    through: ProjectTag,
    foreignKey: "project_id",
    otherKey: "tag_id",
    as: "tags",
});

Tag.belongsToMany(Project, {
    through: ProjectTag,
    foreignKey: "tag_id",
    otherKey: "project_id",
    as: "projects",
});

export const models = {
    Project,
    Category,
    Contact,
    Tag,
    ProjectTag,
};