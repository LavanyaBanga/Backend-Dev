const xss = require('xss-clean');
const { body, validationResult } = require('express-validator');

app.use(xss());
const validateUser = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];