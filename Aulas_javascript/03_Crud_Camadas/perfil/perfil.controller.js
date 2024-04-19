const PerfilDTO = require("./perfil.dto").default;
const PerfilService = require("./perfil.service");
const perfilService = new PerfilService();

class PerfilController {
  getAllPerfis(req, res) {
    const perfils = perfilService.findAll();
    res.json(perfils);
  }

  createPerfil(req, res) {
    req.body.user_id = req.params.user_id;
    res.json(perfilService.create(new PerfilDTO(req.body)));
  }

  getPerfilById(req, res) {
    const { user_id } = req.params;
    const perfil = perfilService.findOne(user_id);
    if (!perfil) {
      return res.status(404).send("register not found");
    }
    res.json(perfil);
  }

  getPerfilEndById(req, res) {
    const { user_id, address_id } = req.params;
    const perfil = perfilService.findEndOne(user_id, address_id);
    if (!perfil) {
      return res.status(404).send("register not found");
    }
    res.json(perfil);
  }

  updatePerfil(req, res) {
    const { user_id, address_id } = req.params;
    const { profile_endereco, profile_cidade, country_id } = req.body;
    const updatePerfil = perfilService.update(
      user_id,
      address_id,
      profile_endereco,
      profile_cidade,
      country_id
    );
    if (!updatePerfil) return res.status(404).send("register not found");
    res.status(200).json(updatePerfil);
  }

  deletePerfil(req, res) {
    const { user_id, address_id } = req.params;
    const deleteUser = perfilService.remove(user_id, address_id);
    if (!deleteUser) return res.status(404).send("register not found");
    res.status(204).send("Deleted record");
  }
}

module.exports = PerfilController;
