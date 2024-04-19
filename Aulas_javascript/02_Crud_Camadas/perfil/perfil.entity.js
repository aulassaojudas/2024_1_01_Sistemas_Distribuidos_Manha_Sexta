class Perfil {
  constructor({
    user_id,
    profile_address_id,
    profile_endereco,
    profile_cidade,
    country_id,
  }) {
    this.user_id = user_id;
    this.profile_address_id = profile_address_id;
    this.profile_endereco = profile_endereco;
    this.profile_cidade = profile_cidade;
    this.country_id = country_id;
  }
}

module.exports = Perfil;
