# ServiceIQ API

Intelligent Pricing API for Airbnb Services Marketplace

## Overview

ServiceIQ API provides real-time, explainable pricing recommendations for Airbnb Service providers by analyzing local events, demand patterns, and market dynamics.

## Features

- Dynamic pricing intelligence
- Event-aware pricing adjustments
- Market positioning analysis
- Revenue optimization
- Transparent price explanations

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL 14.x or higher
- Redis 6.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/serviceiq-api.git
cd serviceiq-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
LOG_LEVEL=info

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=serviceiq
DB_USER=postgres
DB_PASSWORD=your_password

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h
```

4. Start the development server:
```bash
npm run dev
```

## API Documentation

### Pricing Calculation

```http
POST /api/v1/pricing/calculate
```

Request body:
```json
{
  "service_type": "chef",
  "base_price": 150,
  "datetime": "2024-12-02T19:00:00Z",
  "duration_minutes": 180,
  "location": {
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "party_size": 6,
  "special_requirements": ["vegan", "wine_pairing"]
}
```

Response:
```json
{
  "status": "success",
  "data": {
    "recommended_price": 330,
    "confidence": 0.92,
    "explanation": "Price calculated based on time of day, local events, and party size.",
    "factors": [
      {
        "name": "Time of Day",
        "impact_multiplier": 1.3,
        "impact_amount": 45,
        "category": "time"
      },
      {
        "name": "Local Events",
        "impact_multiplier": 1.2,
        "impact_amount": 30,
        "category": "event"
      }
    ],
    "competitor_analysis": {
      "average_price": 297,
      "your_position": "premium",
      "similar_services": 12
    }
  }
}
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run linter
- `npm run format` - Format code

### Project Structure

```
src/
├── index.ts              # Application entry point
├── middleware/           # Express middleware
├── routes/              # API routes
├── services/            # Business logic
├── utils/               # Utility functions
└── validators/          # Request validation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 