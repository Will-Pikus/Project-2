const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categRoutes = require('./categRoutes');
const itemRoutes = require('./itemRoutes');

router.use('/users', userRoutes);
router.use('/categories', categRoutes);
router.use('/items', itemRoutes);

module.exports = router;
