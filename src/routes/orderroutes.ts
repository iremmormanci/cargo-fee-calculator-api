import express, { Request, Response } from 'express';
import { createOrder } from '../controllers/ordercontroller';

const router = express.Router();

router.post('/create/order', async (req: Request, res: Response) => {
    try {
      await createOrder(req, res);
    } catch (err) {
      res.status(500).json({ error: 'Sipariş oluşturma sırasında hata oluştu.' });
    }
  });

export default router;
