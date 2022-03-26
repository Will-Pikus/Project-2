const router = require('express').Router();
const { Image, Item } = require('../../models');

// GET all images - working
router.get('/', async (req, res) => {
  try {
    const imageData = await Image.findAll();
    res.status(200).json(imageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get image by ID - working
router.get('/:id', async (req, res) => {
  try {
    const imageData = await Image.findByPk(req.params.id, {
      include: {
        model: Item,
      },
    });
    res.json(imageData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE an image - working
router.post('/', async (req, res) => {
    try {
      const imageData = await Image.create(req.body);
      res.status(200).json(imageData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Update image - working
  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try{
      const imageData = await Image.update(req.body,{
        where: {id: req.params.id}
      }
    )
    res.status(200).json(imageData);
    } catch (err) {
      res.status(400).json(err)
    }
  });
  
  
  // DELETE image - working 
  router.delete('/:id', async (req, res) => {
    try {
      const imageData = await Image.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!imageData) {
        res.status(404).json({ message: 'No users found with this id!' });
        return;
      }
  
      res.status(200).json(imageData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;