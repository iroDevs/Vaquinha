const AdmService = require('../service/AdmService')

async function RegisterAdm (req, res) {
  const adm =
  {
    name: req.name,
    email: req.email,
    senha: req.senha
  }
  const resposta = await AdmService.RegisterAdm(adm)

  return res.status(200).json(resposta)
}

module.exports = { RegisterAdm }
