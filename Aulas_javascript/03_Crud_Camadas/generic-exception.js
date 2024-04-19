const http = require("http");

const errorMap = {
  REGISTER_NOT_FOUND: {
    status: 404,
    description: "Registro não encontrado",
  },
  INVALID_INPUT: {
    status: 400,
    description: "Entrada inválida",
  },
  EMAIL_ALREADY_EXISTS: {
    status: 400,
    description: "E-mail já está cadastrado",
  },
  REGISTER_ALREADY_EXISTS: {
    status: 400,
    description: "Registro já existente",
  },
};

class GenericException {
  constructor(errorCode) {
    const errorInfo = errorMap[errorCode];
    const status = errorInfo
      ? errorInfo.status
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const description = errorInfo
      ? errorInfo.description
      : "Erro interno do servidor";
    
  }

  getErrorMap() {
    return errorMap;
  }
}

module.exports = { GenericException };
