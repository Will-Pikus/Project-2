const sequelize = require('../config/connection');
const { User, Item, Category, Community, Type, Image } = require('../models');

const userData = require('./userData.json');
const itemtData = require('./itemData.json');
const catData = require('./categoryData.json');
const commData = require('./communityData.json');
const typeData = require('./typeData.json');
const imageData = require('./imageData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const images = await Image.bulkCreate(imageData);

  const types = await Type.bulkCreate(typeData);
 
  const cats = await Category.bulkCreate(catData);
 
  const comms = await Community.bulkCreate(commData);

 const userss = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 
 const items = await Item.bulkCreate(itemtData);

//  const images = await Image.bulkCreate(imageData);

//  const types = await Type.bulkCreate(typeData);

//  const cats = await Category.bulkCreate(catData);

//  const comms = await Community.bulkCreate(commData);


 process.exit(0);
};

seedDatabase();
