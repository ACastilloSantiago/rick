const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender, id } = req.body;
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }
    await Favorite.findOrCreate({
      where: { name, origin: origin.name, status, image, species, gender, id },
    });
    const allFavs = await Favorite.findAll();
    res.status(200).send(allFavs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = postFav;
