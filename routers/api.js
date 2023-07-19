const express = require("express");
const router = express.Router();
const CatApiController = require("../controllers/apiController");
const { validateID } = require("../middlewares/validateID");
const checks = require("../middlewares/checks");
const { auth } = require("../middlewares/jwtMiddleware");

router.get("/cats", CatApiController.list);
router.get("/cats/favorite", auth, validateID, CatApiController.findFavorite);
router.post("/cats/favorite", auth, checks, CatApiController.createFavorite);
router.put("/cats/favorite", auth, CatApiController.editFavorite);
router.delete("/cats/favorite/:id", auth, CatApiController.deleteFavorite);

module.exports = router;
