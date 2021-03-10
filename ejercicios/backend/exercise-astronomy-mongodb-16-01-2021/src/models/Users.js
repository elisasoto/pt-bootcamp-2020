const mongoose = require("mongoose");
const { Schema } = mongoose;
const DEFAULT_BADGES = require('../constants/feats');

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    unique: true,
  },
  affiliatedNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  age: Number,  
  affiliationDate: {
    type: Date,
    default: new Date(),
  },
  occupation: String, 
  birthdate: Date, 
  deleted: Boolean, 
  astronomicalPoints: Number,
  neasDiscovered: Array, 
  necsDiscovered: Array, 
  badges: [
    { name: String, given: Boolean, info: String, points: Number },
  ]
});

// Esta function no debe ser flecha para no perder el scope del modelo
UsersSchema.pre('save', function (next) {
  this.badges = DEFAULT_BADGES;
  this.deleted = false;
  this.astronomicalPoints = this.badges[0].points;
  this.badges[0].given = true
  next();
});

const model = mongoose.model("Users", UsersSchema);

module.exports = model;
