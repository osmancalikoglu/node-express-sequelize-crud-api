const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('expressdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

(async () => {

})();

const getUsers = async (request, response) => {
  const users = await User.findAll();
  response.json(users);
}

const getUserById = async (request, response) => {
  const id = parseInt(request.params.id)
  const user = await User.findByPk(id);
  user ? response.json(user.toJSON()) : response.json({info: 'User not found!'});
}

const createUser = async (request, response) => {
  const { name, favoriteColor, age, cash } = request.body
  try {
    const newUser = await User.create({ name: name, favoriteColor: favoriteColor, age: age, cash: cash });
    response.json(newUser.toJSON());
  } catch (error) {
    response.json({info: 'User could not be created!', error: error});
  }
}

const updateUser = async (request, response) => {
  const id = parseInt(request.params.id)
  const { name, favoriteColor, age, cash } = request.body
  const user = await User.findByPk(id);
  user.name = name;
  user.favoriteColor = favoriteColor;
  user.age = age;
  user.cash = cash;
  try {
    user.save();
    response.json(user.toJSON());
  } catch (error) {
    response.json({info: 'User could not be updated!', error: error});
  }  
}

const deleteUser = async (request, response) => {
  const id = parseInt(request.params.id)
  const user = await User.findByPk(id);
  try {
    user.destroy();
    await response.redirect('/users');
  } catch (error) {
    response.json({info: 'User could not be deleted!', error: error});
  }
}


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}