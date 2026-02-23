import { Request, Response } from "express";
import { Contact } from "../models/contact.model";

export class ContactController {

    // POST /api/contact
    static async create(req: Request, res: Response) {
        try {
            const { name, email, subject, message } = req.body;

            if (!name || !email || !message) {
                return res.status(400).json({
                    ok: false,
                    message: "Name, email and message are required"
                });
            }

            const contact = await Contact.create({
                name,
                email,
                subject,
                message,
                status: "new",
                ip_address: req.ip,
                user_agent: req.headers["user-agent"]
            });

            return res.status(201).json({
                ok: true,
                message: "Message sent successfully",
                data: contact
            });
        } catch (error) {
            console.error("Error saving contact:", error);
            return res.status(500).json({
                ok: false,
                message: "Error sending message"
            });
        }
    }
}
