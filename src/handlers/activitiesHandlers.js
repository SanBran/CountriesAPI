const createActivity = require("../controllers/createActivitie");
const getActivities = require("../controllers/getActivities");

const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    if (!name || !difficulty || !duration || !season || !countries)
      res.status(400).json({ message: "Missing data" });

    const response = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getActivitiesHandler = async (req, res) => {
  try {
    let response = await getActivities();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createActivityHandler,
  getActivitiesHandler,
};
