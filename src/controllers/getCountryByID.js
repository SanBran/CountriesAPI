const { Country, Activity } = require("../db");

const getCountryById = async (id) => {
  const req = id.toUpperCase();
  const country = await Country.findByPk(req, {
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (country) {
    return country;
  } else {
    throw new Error(
      `Coudn't find a country with id: ${id}. Remember that the id must be made up of 3 letter. Please try with another id.`
    );
  }
};

module.exports = getCountryById;
