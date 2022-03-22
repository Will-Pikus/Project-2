const sequelize = require('../config/connection');
const { User, Item, Category } = require('../models');

const userData = require('./userData.json');
const itemtData = require('./itemData.json');
const catData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 const userss = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 const cats = await Category.bulkCreate(catData);

 const items = await Item.bulkCreate(itemtData);


 process.exit(0);
};

seedDatabase();
