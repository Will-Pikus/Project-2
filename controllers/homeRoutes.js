const router = require("express").Router();
// const { where } = require("sequelize/types");
const {  Item, User } = require("../models");
const { sequelize } = require("../models/User");
const withAuth = require("../utils/auth");

var userLoggedIn

var randomItem = Item[Math.floor(Math.random(), Item.length)];

// RENDER HOMEPAGE - working
router.get('/', async (req, res) => {
  try {
    // Get all items and JOIN with user data
    const itemData = await Item.findAll({
      include: [
        {
          model: User,
          as: 'owner'
        },
        {
          model: User,
          as: 'requester'
        },
      ],
    });

    // Serialize data so the template can read it
    const items = itemData.map((item) => item.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      items, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// RENDER ITEM PAGE - 
router.get('/item/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'owner'
        },
        {
          model: User,
          as: 'requester'
        },
      ],
    });

    const item = itemData.get({ plain: true });

    res.render('item', {
      ...item,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// RENDER Profile - 
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      // attributes: { exclude: ['password'] },
      // include: [{ model: Item }],
    });

    const users = userData.get({ plain: true });
    
    userLoggedIn = users.id
    console.log(userLoggedIn)
    

    // Get item data
    const itemData = await Item.findAll({
      where: {
        owner_id: req.session.user_id
      },
      include: [
        {
          model: User,
          as: 'owner'
        },
        {
          model: User,
          as: 'requester'
        },
      ],
    });

    
    const items = itemData.map((item) => item.get({ plain: true }));

    console.log(items)

    res.render('profile', {
      items,
      ...users,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
