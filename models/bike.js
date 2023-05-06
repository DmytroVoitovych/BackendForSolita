const { Schema, model } = require("mongoose");

const bikesSchema = Schema(
  {},
  { versionKey: false, timestamps: false }
);

const Trip = model("film", bikesSchema); // створюємо модель яка формує колекцію

module.exports = {
  Trip,
};
