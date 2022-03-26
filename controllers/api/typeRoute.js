const router = require('express').Router();
const { Type, Item } = require('../../models');

// GET all items - working
router.get('/', async (req, res) => {
  try {
    const typeData = await Type.findAll();
    res.status(200).json(typeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get item by ID - working
router.get('/:id', async (req, res) => {
  try {
    const typeData = await Type.findByPk(req.params.id, {
      include: {
        model: Item,
      },
    });
    res.json(typeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;