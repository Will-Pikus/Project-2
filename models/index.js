const User = require('./User');
const Item = require('./Item');
const Category = require('./Category');
const Community = require('./Community');

User.hasMany(Item, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Item.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Item, {
  foreignKey: 'cat_id'
});

Item.belongsTo(Category, {
    foreignKey: 'cat_id'
  });

Community.hasMany(User, {
    foreignKey: 'community_id'
});

User.belongsTo(User, {
    foreignKey: 'community_id'
});



module.exports = { User, Item, Category, Community };
