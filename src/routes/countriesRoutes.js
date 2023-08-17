const {
  getAllCountriesHandler,
  getCountryByIdHandler,
  getCountryByNameHandler,
} = require("../handlers/countriesHandlers");

const countryRoutes = require("express").Router();

countryRoutes.get("/", getAllCountriesHandler);
countryRoutes.get("/:idCountry", getCountryByIdHandler);
countryRoutes.get("/", getCountryByNameHandler);

module.exports = countryRoutes;
