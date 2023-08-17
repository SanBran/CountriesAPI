const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {
  const countryResults = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  if (countryResults[0]) {
    return countryResults;
  } else {
    throw new Error(`The country: ${name} not exist. Try with another name.`);
  }
};
module.exports = getCountryByName;
