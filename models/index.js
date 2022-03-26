const User = require('./User');
const Item = require('./Item');
const Category = require('./Category');
const Community = require('./Community');
const Type = require('./Type');
const Image = require('./Image')

User.hasMany(Item, {
  foreignKey: 'owner_id',
  onDelete: 'CASCADE'
});

Item.belongsTo(User, {
  foreignKey: 'owner_id'
});

User.hasMany(Item, {
    foreignKey: 'requester_id',
    onDelete: 'CASCADE'
});

// Needs belongs to many
Item.belongsTo(User, {
    foreignKey: 'requester_id'
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

User.belongsTo(Community, {
    foreignKey: 'community_id'
});

Type.hasMany(Item, {
    foreignKey: 'type_id'
});

Item.belongsTo(Type, {
    foreignKey: 'type_id'
});

Image.hasOne(Item, {
    foreignKey: 'image_id'
});

Item.belongsTo(Image, {
    foreignKey: 'image_id'
});

module.exports = { User, Item, Category, Community, Type, Image };
