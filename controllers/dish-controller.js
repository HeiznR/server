const DishModel = require("../models/dish-model");

class DishController {
    async add_dishes(req, res) {
        try {
            const { name, recipe, kcal, cookingtime, сookingmethod, type } =
                req.body;
            const CandidateDish = await DishModel.findOne({ name });
            if (CandidateDish) {
                res.status(400).json({
                    info: "This dish is already in database",
                });
            }

            const dish = DishModel({
                name: name,
                recipe: recipe,
                kcal: kcal,
                cookingtime: cookingtime,
                сookingmethod: сookingmethod,
                type: type,
            });

            console.log(dish);
            dish.save().then((result) => {
                res.status(200).json({ info: "Dish was created" });
            });
        } catch (e) {
            res.status(404).json({
                info: `${e}`,
            });
        }
    }
}

module.exports = new DishController();
