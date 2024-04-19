const ProfileDTO = require("./perfil.dto");
const PerfilService = require("./perfil.service");
const perfilService = new PerfilService();

class PerfilController {
  getAllPerfis(req, res) {
    const perfils = perfilService.findAll();
    res.json(perfils);
  }

  createPerfil(req, res) {
    try {
      const perfil = perfilService.create(
        new ProfileDTO({
          user_id: req.params.user_id,
          ...req.body,
        })
      );
      res.json(perfil);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }    
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
    const updatePerfil = perfilService.update({
      ...req.body,
      user_id: req.params.user_id,
      profile_address_id: req.params.profile_address_id,
    });
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
