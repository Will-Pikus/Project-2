const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categRoutes = require('./categRoutes');
const itemRoutes = require('./itemRoutes');
const communityRoutes = require('./communityRoutes');

router.use('/users', userRoutes);
router.use('/categories', categRoutes);
router.use('/items', itemRoutes);
router.use('/communities', communityRoutes);

module.exports = router;
