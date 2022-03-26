const router = require("express").Router();
const { Category, Community, Item, User } = require("../models");
const { sequelize } = require("../models/User");
const withAuth = require("../utils/auth");

var randomItem = Item[Math.floor(Math.random(), Item.length)];

router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({});
    res.json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // const items = itemData.get({ plain: true });
    res.json(itemData);
    // res.render('item', {
    //   ...items,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/cats', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll({

//     });

//     // const user = userData.get({ plain: true });

//     res.json(categoryData)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/comms', async (req, res) => {
//   try {
//     const communityData = await Community.findAll({

//     });

//     // const user = userData.get({ plain: true });

//     res.json(communityData)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
