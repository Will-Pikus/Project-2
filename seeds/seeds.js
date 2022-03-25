const sequelize = require('../config/connection');
const { User, Item, Category, Community } = require('../models');

const userData = require('./userData.json');
const itemtData = require('./itemData.json');
const catData = require('./categoryData.json');
const commData = require('./communityData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

 const userss = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 const cats = await Category.bulkCreate(catData);

 const items = await Item.bulkCreate(itemtData);

 const comms = await Community.bulkCreate(commData);


 process.exit(0);
};

seedDatabase();
