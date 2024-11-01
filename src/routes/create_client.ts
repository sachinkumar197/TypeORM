import * as express from 'express';
import { Request, Response } from 'express';
import { Client } from '../entities/Client';
import { getRepository } from 'typeorm';

const router: express.Router = express.Router();

router.post('/api/client', async (req: Request, res: Response) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance,
    } = req.body;

    const client = new Client();
    client.first_name = firstName;
    client.last_name = lastName;
    client.email = email;
    client.card_number = cardNumber;
    client.balance = balance;

    const clientRepository = getRepository(Client);
    await clientRepository.save(client);
	
	res.status(200).json({ results: client })
    // return res.json(client);
    return;
});

export { router as createClientRouter };
