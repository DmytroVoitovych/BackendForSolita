const { Schema, model } = require("mongoose");

const bikesSchema = Schema(
  {
    Departure: {
      type: Date,
      required: [true, "Type is required"],
      alias: "dp",
    },
    Return: {
      type: Date,
      required: [true, "Type is required"],
      alias: "ret",
    },
    DepartureStationId: {
      type: String,
      required: [true, "Type is required"],
      alias: "dpStId",
    },
    DepartureStationName: {
      type: String,
      required: [true, "Type is required"],
      alias: "dpStNa",
    },
    ReturnStationId: {
      type: String,
      required: [true, "Type is required"],
      alias: "retStId",
    },
    ReturnStationName: {
      type: String,
      required: [true, "Type is required"],
      alias: "retStNa",
    },
    CoveredDistance: {
      type: String,
      required: [true, "Type is required"],
      alias: "covDis",
    },
    Duration: {
      type: String,
      required: [true, "Type is required"],
      alias: "dur",
    },
  },
  { versionKey: false, timestamps: false }
);

const Trip = model("film", bikesSchema); // створюємо модель яка формує колекцію

module.exports = {
  Trip,
};
