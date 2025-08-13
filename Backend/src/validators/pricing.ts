import Joi from 'joi';

const locationSchema = Joi.object({
  latitude: Joi.number().required().min(-90).max(90),
  longitude: Joi.number().required().min(-180).max(180)
});

export const validatePricingRequest = (data: any) => {
  const schema = Joi.object({
    service_type: Joi.string()
      .required()
      .valid('chef', 'photography', 'makeup', 'wellness', 'catering'),
    base_price: Joi.number().required().min(0),
    datetime: Joi.date().iso().required(),
    duration_minutes: Joi.number().required().min(30).max(480),
    location: locationSchema.required(),
    party_size: Joi.number().required().min(1).max(50),
    special_requirements: Joi.array().items(Joi.string())
  });

  return schema.validate(data);
}; 