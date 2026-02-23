import { Request, Response } from "express";
import { Services } from "../models/services.model";

export class ServicesController {
    static async get(req: Request, res: Response) {
        try {
            const services = await Services.findAll({
                where: { status: 1 },
                order: [
                    ["order_position", "ASC"],
                    ["id", "ASC"],
                ],
            });

            const normalizedServices = services.map((service) => {
                const data = service.toJSON();

                let features: string[] = [];

                if (Array.isArray(data.service_features)) {
                    features = data.service_features;
                } else if (typeof data.service_features === "string") {
                    try {
                        const parsed = JSON.parse(data.service_features);
                        features = Array.isArray(parsed) ? parsed : [];
                    } catch {
                        features = [];
                    }
                }

                return {
                    ...data,
                    service_features: features,
                };
            });

            return res.status(200).json({
                ok: true,
                data: normalizedServices
            });
        } catch (error) {
            console.error("Error fetching services:", error);
            return res.status(500).json({
                ok: false,
                message: "Error retrieving services"
            });
        }
    }
}
