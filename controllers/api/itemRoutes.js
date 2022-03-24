const router = require('express').Router();
const { Item, User, Category, Community } = require('../../models');

// GET all items
router.get('/', async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single item
router.get('/:id', async (req, res) => {
  try {
    const itemData = await Item.findOne(req.params.id, {
      include: [{ model: User }]
    });

    if (!itemData) {
      res.status(404).json({ message: 'No items found with this id!' });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an item
router.post('/', async (req, res) => {
  try {
    const itemData = await Item.create(req.body);
    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an item
router.delete('/:id', async (req, res) => {
  try {
    const itemData = await Item.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!itemData) {
      res.status(404).json({ message: 'No items found with this id!' });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;