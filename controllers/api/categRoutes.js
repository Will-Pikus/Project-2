const router = require('express').Router();
const { Item, Category } = require('../../models');

// GET all categories
router.get('/', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    // if (!req.session.loggedIn) {
    //   res.redirect('/login');
    // } else {
      // If the user is logged in, allow them to view the category chosen
      try {
        const dbCategoryData = await Category.findAll(req.params.id, {
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
        res.json(dbCategoryData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    
  });

  // GET cats by ID
  router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
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
      res.json(dbCategoryData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    // Category.findOne({
    //   // include: {
    //   //   model: Product,
    //   // },
    //   where: {
    //     id: req.params.id,
    //   },
    // }).then((catData) => {
    //   res.json(catData);
    // });
  });
  
  // save for itemsRoutes
  // router.get('/item/:id', async (req, res) => {
  //   // If the user is not logged in, redirect the user to the login page
  //   if (!req.session.loggedIn) {
  //     res.redirect('/login');
  //   } else {
  //     // If the user is logged in, allow them to view the item
  //     try {
  //       const dbItemData = await Item.findByPk(req.params.id);
  
  //       const item = dbItemData.get({ plain: true });
  
  //       res.render('painting', { item, loggedIn: req.session.loggedIn });
  //     } catch (err) {
  //       console.log(err);
  //       res.status(500).json(err);
  //     }
  //   }
  // });

  // CREATE a category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update user - working
router.put('/:id', async (req, res) => {
  try{
    const catData = await Category.update(req.body,{
      where: {id: req.params.id}
    }
  )
  res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// DELETE Category - working 
router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!catData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  