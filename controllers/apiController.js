const { CatSchema } = require("../models/cat-api");
const { getCat } = require("../services/cats");

class CatApiController {
  async list(req, res) {
    try {
      const response = await getCat();

      // Envía la imagen como respuesta al cliente
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la imagen del gato" });
    }
  }
  async findFavorite(req, res) {
    try {
      const favorites = await CatSchema.find({ userId: req.user.id });

      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los favoritos" });
    }
  }
  async createFavorite(req, res) {
    try {
      const newFavorite = new CatSchema({ ...req.body, userId: req.user.id });
      await newFavorite.save();
      res.status(201).json(newFavorite);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async editFavorite(req, res) {
    try {
      const updated = await CatSchema.findOneAndUpdate(
        {
          _id: req.body.id,
          userId: req.user.id,
        },
        { message: req.body.message },
        { new: true }
      );

      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteFavorite(req, res) {
    try {
      await CatSchema.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id,
      });

      res.status(204).json();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new CatApiController();
