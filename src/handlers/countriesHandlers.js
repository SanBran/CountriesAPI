const getAllCountries = require("../controllers/getAllCountries");
const getCountryById = require("../controllers/getCountryByID");
const getCountryByName = require("../controllers/getCountryByName");

const getCountryByNameHandler = async (req, res) => {
  const { name } = req.query;
  console.log(name);

  try {
    const response = await getCountryByName(name);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllCountriesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    let response = name
      ? await getCountryByName(name)
      : await getAllCountries();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryByIdHandler = async (req, res) => {
  const { idCountry } = req.params;
  console.log(idCountry);
  try {
    const response = await getCountryById(idCountry);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCountriesHandler,
  getCountryByIdHandler,
  getCountryByNameHandler,
};
