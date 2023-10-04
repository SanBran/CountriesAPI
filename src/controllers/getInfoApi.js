const axios = require("axios");
const { Country } = require("../db");

const getInfoApi = async () => {
  const countriesApi = (await axios(`https://restcountries.com/v3/all`)).data;
  const cleanCountries = await countriesApi.map((e) => {
    let capital = e.capital ? e.capital[0] : null;
    let newCountry = Country.create({
      id: e.cca3,
      name: e.name.common,
      flag: e.flags[1],
      continent: e.continents[0],
      capital: capital,
      subregion: e.subregion,
      area: e.area,
      population: e.population,
    });
  });
  console.log("Database filled")
};

module.exports = getInfoApi;
