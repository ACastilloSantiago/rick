// const { postFav, deleteFav } = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const deleteFav = require("../controllers/deleteFav");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");

const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", async (req, res) => {
  await login(req, res);
});
router.post("/register", async (req, res) => {
  await postUser(req, res);
});
router.post("/fav", async (req, res) => {
  await postFav(req, res);
});
router.delete("/fav/:id", async (req, res) => {
  await deleteFav(req, res);
});

module.exports = router;
