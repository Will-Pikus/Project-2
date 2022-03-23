const router = require('express').Router();
const { Item, Category } = require('../../models');

// GET one category
router.get('/category/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the category chosen
      try {
        const dbCategoryData = await Category.findByPk(req.params.id, {
          include: [
            {
              model: Item,
              attributes: [
                'id',
                'name',
                'desc',
                'quality',
                'user_id',
                'cat_id',
              ],
            },
          ],
        });
        const category = dbCategoryData.get({ plain: true });
        res.render('category', { category, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
  
  // GET one item
  router.get('/item/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the item
      try {
        const dbItemData = await Item.findByPk(req.params.id);
  
        const item = dbItemData.get({ plain: true });
  
        res.render('painting', { item, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  