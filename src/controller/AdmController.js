const AdmService = require('../service/AdmService')

async function RegisterAdm (req, res) {
  const adm =
  {
    name: req.body.name,
    email: req.body.email,
    senha: req.body.senha
  }
  const resposta = await AdmService.RegisterAdm(adm)

  return res.status(200).json(resposta)
}

module.exports = { RegisterAdm }
