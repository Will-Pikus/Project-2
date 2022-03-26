const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categRoutes = require('./categRoutes');
const itemRoutes = require('./itemRoutes');
const communityRoutes = require('./communityRoutes');
const typeRoutes = require('./typeRoute');
const imageRoutes = require('./imageRoute')

router.use('/users', userRoutes);
router.use('/categories', categRoutes);
router.use('/items', itemRoutes);
router.use('/communities', communityRoutes);
router.use('/types', typeRoutes)
router.use('/images', imageRoutes)

module.exports = router;
