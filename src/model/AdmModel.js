const { Adm } = require('../../models')

async function RegisterAdmBd (admin) {
  const [idAdm, isCreated] = await Adm.findOrCreate({
    where: { email: admin.email },
    defaults:
    {
      name: admin.name,
      email: admin.email,
      senha: admin.senha
    }
  })

  return { isCreated, idAdm }
}

module.exports = { RegisterAdmBd }
