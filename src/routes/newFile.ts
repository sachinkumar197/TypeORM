import { Application } from "express";
import { Client } from "src/entities/Client";
import { router } from "./create_client";

router.post('/api/client', async function (req: Request, res: Response): Application<Record<string, any>> {
    try {
        const { firstName, lastName, email, cardNumber, balance } = req.body;

        const client = Client.create({
            first_name: firstName,
            last_name: lastName,
            email,
            card_number: cardNumber,
            balance
        });

        await Client.save(client);

        return res.json(client);
    } catch (error) {
        console.error("Error creating client:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
