const router = require('express').Router();
const apiRoutes = require('./api-routes');

router.use('/api', apiRoutes);

// 404 Route
router.use((req, res) => {
  res.status(404).send('Not found');
});

module.exports = router;
