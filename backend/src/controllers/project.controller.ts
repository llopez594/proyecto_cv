import { Request, Response } from "express";
import { Project } from "../models/project.model";
import { Category } from "../models/category.model";
import { Tag } from "../models/tag.model";


export class ProjectController {

    static async getAll(req: Request, res: Response) {
        try {
            const projects = await Project.findAll({
                where: { status: "active" },
                order: [
                    ["order_position", "ASC"],
                    ["created_at", "DESC"]
                ],
                include: [
                    {
                        model: Category,
                        attributes: ["name", "slug"]
                    },
                    {
                        model: Tag,
                        as: "tags",
                        required: false,
                        //where: { status: 1 },
                        attributes: ["id", "name", "slug", "color", "icon"],
                        through: { attributes: [] },
                    },
                ]
            });

            const formatted = projects.map((project: any) => ({
                id: project.id,
                title: project.title,
                slug: project.slug,
                short_description: project.short_description,
                image_url: project.image_url,
                demo_url: project.demo_url,
                github_url: project.github_url,
                category_name: project.Category?.name || null,
                category_slug: project.Category?.slug || null,
                tags: Array.isArray(project.tags)
                    ? project.tags.map((t: any) => ({
                        id: t.id,
                        name: t.name,
                    }))
                    : [],
            }));

            return res.status(200).json({
                ok: true,
                data: formatted
            });
        } catch (error) {
            console.error("Error fetching projects:", error);
            return res.status(500).json({
                ok: false,
                message: "Error retrieving projects"
            });
        }
    }

    static async getBySlug(req: Request, res: Response) {
        try {
            const { slug } = req.params;

            const project = await Project.findOne({
                where: { slug, status: "active" },
                include: [
                    {
                        model: Category,
                        attributes: ["name", "slug"],
                    },
                    {
                        model: Tag,
                        as: "tags",
                        required: false,
                        where: { status: 1 }, // opcional
                        attributes: ["id", "name", "slug", "color", "icon", "is_skill", "skill_level"],
                        through: { attributes: [] },
                    },
                ],
            });

            if (!project) {
                return res.status(404).json({
                    ok: false,
                    message: "Project not found",
                });
            }

            const p: any = project;

            const formatted = {
                id: p.id,
                title: p.title,
                slug: p.slug,
                short_description: p.short_description,
                description: p.description,
                image_url: p.image_url,
                demo_url: p.demo_url,
                github_url: p.github_url,
                is_featured: p.is_featured,
                order_position: p.order_position,
                category_name: p.Category?.name || null,
                category_slug: p.Category?.slug || null,
                tags: Array.isArray(p.tags)
                    ? p.tags.map((t: any) => ({
                        id: t.id,
                        name: t.name,
                    }))
                    : [],
            };

            return res.status(200).json({
                ok: true,
                data: formatted,
            });
        } catch (error) {
            console.error("Error fetching project:", error);
            return res.status(500).json({
                ok: false,
                message: "Error retrieving project"
            });
        }
    }
}
