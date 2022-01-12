const {Schema, model} = require('mongoose');

const DishesSchema = new Schema({
  name: { type: String, required: true },
  recipe: { type: String, required: true },
  kcal: { type: String, required: true },
  cookingtime: { type: String, required: true },
  сookingmethod: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = model('Dish', DishesSchema);