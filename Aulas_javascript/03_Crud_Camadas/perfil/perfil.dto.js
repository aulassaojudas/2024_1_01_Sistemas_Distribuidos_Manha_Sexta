class PerfilDTO {
  constructor({
    user_id,
    profile_address_id,
    profile_endereco,
    profile_cidade,
    country_id}
  ) {
    this.user_id = user_id;
    this.profile_address_id = profile_address_id;
    this.profile_endereco = profile_endereco;
    this.profile_cidade = profile_cidade;
    this.country_id = country_id;
  }

  validate() {
    const errors = [];
    // Verificar se o user_id está presente e é uma string
    if (!this.user_id || typeof this.user_id !== 'string') {
      errors.push('user_id é inválido');
    }
    // Verificar outras propriedades conforme necessário...
    return errors.length > 0 ? errors : null;
  }
}

export default PerfilDTO;
