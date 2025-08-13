import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';
import { pricingRouter } from './routes/pricing';
import { eventsRouter } from './routes/events';
import { marketRouter } from './routes/market';
import { analyticsRouter } from './routes/analytics';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// API Routes
app.use('/api/v1/pricing', pricingRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/market', marketRouter);
app.use('/api/v1/analytics', analyticsRouter);

// Error handling
app.use(errorHandler);

// Start server
app.listen(port, () => {
  logger.info(`ServiceIQ API server running on port ${port}`);
}); 