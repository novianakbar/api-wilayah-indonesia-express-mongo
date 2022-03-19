module.exports = (app) => {
  const regions = require("../controllers/region.controller");
  const router = require("express").Router();

  router.get("/province", regions.getAllProvince);
  router.get("/province/:id", regions.getProvince);
  router.get("/regency/:id", regions.getRegency);
  router.get("/district/:id", regions.getDistrict);
  router.get("/village/:id", regions.getVillage);

  app.use("/region", router);
};
