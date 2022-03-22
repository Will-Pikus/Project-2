const sequelize = require('../config/connection');
const { User, Item, Category } = require('../models');

const userData = require('./userData.json');
const itemtData = require('./itemData.json');
const catData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 await Item.bulkCreate(itemtData);

 await Category.bulkCreate(catData);

  process.exit(0);
};

seedDatabase();
