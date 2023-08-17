const { Country, Activity } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const country = await Country.findAll({
    where: {
      name: countries,
    },
  });

  await newActivity.addCountry(country);

  return "Activity created.";
};

module.exports = createActivity;
