const { Adm } = require('../../models')

async function RegisterAdmBd (admin) {
  const idAdm = Adm.create({ name: admin.name, email: admin.email, senha: admin.senha })
  return idAdm
}

module.exports = { RegisterAdmBd }
