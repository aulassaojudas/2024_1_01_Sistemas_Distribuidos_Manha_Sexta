const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserDTO {
  constructor({ id, email, password }, criar = false) {
    this.setId(id);
    this.setEmail(email);
    if (criar) {
      this.setPassword(password);
    } else {
      this.password = password;
    }
  }

  // Validação do ID
  setId(id) {
    if (!id) throw new Error("ID is required");
    this.id = id;
  }

  // Validação do formato de e-mail
  setEmail(email) {
    if (!/^\S+@\S+\.\S+$/.test(email))
      throw new Error("Formato de emial inválido");
    this.email = email;
  }

  // Validações de senha
  async setPassword(password) {
    if (password.length < 8)
      throw new Error("A senha tem que ter no minimo 8 caracteres");
    if (!/[A-Z]/.test(password))
      throw new Error("A senha tem que conter pelo menos uma letra maiuscula");
    if (!/[a-z]/.test(password))
      throw new Error("A senha tem que conter pelo menos uma letra minuscula");
    if (!/\d/.test(password))
      throw new Error("A senha tem que conter pelo menos um número");
    if (!/[!@#$%^&*]/.test(password))
      throw new Error(
        "A senha tem que conter pelo menos um caracter especial (!@#$%^&*)"
      );

    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      this.password = hashedPassword;
    } catch (error) {
      throw new Error("Erro ao criar a senha");
    }
  }

}

module.exports = UserDTO;
