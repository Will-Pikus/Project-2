const sequelize = require('../config/connection');
const { User, Item, Category } = require('../models');

const userData = require('./userData.json');
const itemtData = require('./itemData.json');
const catData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 const item = await Item.bulkCreate(itemtData);

 const cat = await Category.bulkCreate(catData);

  process.exit(0);
};

seedDatabase();
