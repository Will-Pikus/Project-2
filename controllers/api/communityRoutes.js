const router = require('express').Router();
const { Community, User } = require('../../models');

// GET all communities
router.get('/', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the category chosen
    try {
      const dbCommunityData = await Community.findAll(req.params.id, {
        // include: [
        //   {
        //     model: Item,
        //     attributes: [
        //       'name',
        //       'desc',
        //       'quality',
        //     ],
        //   },
        // ],
      });
      // const category = dbCategoryData.get({ plain: true });
      // res.render('category', { category, loggedIn: req.session.loggedIn });
      res.json(dbCommunityData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  // }
});
// router.get('/', async (req, res) => {
//   try {
//     const communityData = await Community.findAll();
//     res.status(200).json(communityData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// GET a single community
router.get('/:id', async (req, res) => {
  try {
    const dbCommunityData = await Community.findByPk(req.params.id, {
      // include: [
      //   {
      //     attributes: [
      //       'name',
      //     ],
      //   },
      // ],
    });
    // const category = dbCategoryData.get({ plain: true });
    // res.render('category', { category, loggedIn: req.session.loggedIn });
    res.json(dbCommunityData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE a community
router.post('/', async (req, res) => {
  try {
    const communityData = await Community.create(req.body);
    res.status(200).json(communityData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;