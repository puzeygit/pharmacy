'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsToMany(User, {
        through: 'Orders',
        foreignKey: 'treatment_id',
      });
    }
  }
  Treatment.init({
    title: DataTypes.STRING,
    img: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    category: DataTypes.STRING,
    isEmpty: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};