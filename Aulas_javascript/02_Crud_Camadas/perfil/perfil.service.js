const { v4: uuidv4 } = require("uuid");
const Perfil = require("./perfil.entity.js");
const PerfilDTO = require("./perfil.dto.js");

const perfis = [
  {
    user_id: "1",
    profile_address_id: "1",
    profile_endereco: "endereco um",
    profile_cidade: "são paulo",
    country_id: "br",
  },
  {
    user_id: "1",
    profile_address_id: "2",
    profile_endereco: "endereco um",
    profile_cidade: "são paulo",
    country_id: "br",
  },
  {
    user_id: "2",
    profile_address_id: "3",
    profile_endereco: "endereco dois",
    profile_cidade: "minas gerais",
    country_id: "br",
  },
];

class PerfilServise {
  findAll() {
    return perfis.map((perfil) => new PerfilDTO(perfil));
  }

  findOne(user_id) {
    return perfis.filter((perfil) => perfil.user_id === user_id);
  }

  findEndOne(user_id, address_id) {
    return perfis.find(
      (perfil) =>
        perfil.user_id === user_id && perfil.profile_address_id === address_id
    );
  }

  create(ProfileDTO) {
    ProfileDTO.profile_address_id = uuidv4();
    const newPerfil = new Perfil(ProfileDTO);
    perfis.push(newPerfil);
    return newPerfil;
  }

  update(PerfilDTO) {
    const userIndex = perfis.findIndex(
      (perfil) =>
        perfil.user_id === PerfilDTO.user_id && perfil.profile_address_id == PerfilDTO.profile_address_id
    );
    if (userIndex === -1) return null;
    perfis[userIndex] = PerfilDTO;
    return PerfilDTO;
  }

  remove(user_id, profile_address_id) {
    const userIndex = perfis.findIndex(
      (perfil) => perfil.user_id === user_id && perfil.profile_address_id == profile_address_id
    );
    if (userIndex === -1) return false;
    perfis.splice(userIndex, 1);
    return true;
  }
}

module.exports = PerfilServise;
