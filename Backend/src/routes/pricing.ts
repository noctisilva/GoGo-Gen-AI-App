import { Router, Request, Response } from 'express';
import { validatePricingRequest } from '../validators/pricing';
import { calculatePrice } from '../services/pricing';
import { AppError } from '../middleware/errorHandler';

const router = Router();

router.post('/calculate', async (req: Request, res: Response) => {
  try {
    // Validate request
    const { error, value } = validatePricingRequest(req.body);
    if (error) {
      throw new AppError(400, error.details[0].message);
    }

    // Calculate price
    const result = await calculatePrice(value);

    res.json({
      status: 'success',
      data: result
    });
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }
    throw new AppError(500, 'Error calculating price');
  }
});

export const pricingRouter = router; 