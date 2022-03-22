const router = require('express').Router();
const { Community, User } = require('../../models');

// GET all communities
router.get('/', async (req, res) => {
  try {
    const communityData = await Community.findAll();
    res.status(200).json(communityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single community
router.get('/:id', async (req, res) => {
  try {
    const communityData = await Community.findByPk(req.params.id, {
      include: [{ model: Community, through: User, as: 'community_id' }]
    });

    if (!communityData) {
      res.status(404).json({ message: 'No communities found with this id!' });
      return;
    }

    res.status(200).json(communityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a community
router.post('/', async (req, res) => {
  try {
    const communityData = await Location.create(req.body);
    res.status(200).json(communityData);
  } catch (err) {
    res.status(400).json(err);
  }
});