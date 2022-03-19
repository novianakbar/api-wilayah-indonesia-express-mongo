const dotenv = require("dotenv");
dotenv.config();
const Name = process.env.COLLECTION;

module.exports = (mongoose) => {
  const villageSchema = new mongoose.Schema({
    id: { type: Number, index: true },
    name: String,
  }).index({ name: "text" });

  const districtSchema = new mongoose.Schema({
    id: { type: Number, index: true },
    name: String,
    villages: [villageSchema],
  }).index({ name: "text" });

  const regencySchema = new mongoose.Schema({
    id: { type: Number, index: true },
    name: String,
    districts: [districtSchema],
  }).index({ name: "text" });

  const provinceSchema = new mongoose.Schema({
    id: { type: Number, index: true },
    name: String,
    regencies: [regencySchema],
  }).index({ name: "text" });

  const Region = mongoose.model(Name, provinceSchema);
  return Region;
};
