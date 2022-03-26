const router = require('express').Router();
const { Item, User, Category, Image, Type } = require('../../models');

// GET all items - working
router.get('/', async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get item by ID - working
router.get('/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [ {
        model: User,
      },
      {
        model: Image,
      },
      {
        model: Type,
      },
      {
        model: Category,
      }
    ]
    });
    res.json(itemData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE an item - working
router.post('/', async (req, res) => {
  try {
    const itemData = await Item.create(req.body);
    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update Item
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const itemData = await Item.update(req.body,{
      where: {id: req.params.id}
    }
  )
  res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err)
  }
});


// DELETE an item - working 
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