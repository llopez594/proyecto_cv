import { Request, Response } from "express";
import { About } from "../models/about.model";
import { Tag } from "../models/tag.model";

export class AboutController {
    static async get(req: Request, res: Response) {
        try {
            const about = await About.findOne({
                order: [["id", "ASC"]],
            });

            if (!about) {
                return res.status(404).json({
                    ok: false,
                    message: "About not found",
                });
            }

            const skills = await Tag.findAll({
                where: {
                    is_skill: true,
                    status: true,
                },
                attributes: ["id", "name", "slug", "icon", "color", "skill_level", "order_position"],
                order: [
                    ["order_position", "ASC"],
                    ["id", "ASC"],
                ],
            });

            return res.status(200).json({
                ok: true,
                data: {
                    about,
                    skills,
                },
            });
        } catch (error) {
            console.error("Error fetching about:", error);
            return res.status(500).json({
                ok: false,
                message: "Error retrieving about information"
            });
        }
    }
}
