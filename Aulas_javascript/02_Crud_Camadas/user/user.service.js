const { v4: uuidv4 } = require("uuid");
const User = require("./user.entity.js");
const UserDTO = require("./user.dto.js");
const bcrypt = require("bcrypt");

const users = [
  {
    id: uuidv4(),
    email: "teste@teste.com",
    password: "123456",
  },
  {
    id: uuidv4(),
    email: "teste@2teste.com",
    password: "123456",
  },
];

class UserService {
  findAll() {
    return users.map((user) => new User(user));
  }

  findOne(id) {
    return users.find((user) => user.id === id);
  }
  
  create(UserDTO) {
    users.push(UserDTO);
    return UserDTO;
  }

  update(UserDTO) {
    const userIndex = users.findIndex((user) => user.id === UserDTO.id);
    if (userIndex === -1) return null;
    users[userIndex] = UserDTO;
    return UserDTO;
  }

  remove(id) {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return false;
    users.splice(userIndex, 1);
    return true;
  }

  async login(email, senha){
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex === -1) return false;
    console.log("login");
    try {
      return await bcrypt.compare(senha, users[userIndex].password);
    } catch (error) {
      throw new Error("Erro na verificação da senha");
    }
  }

}


module.exports = UserService;
