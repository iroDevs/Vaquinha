const AdmService = require('../service/AdmService')

async function RegisterAdm (req, res) {
  // #swagger.tags = ['Adms']
  const adm =
  {
    name: req.body.name,
    email: req.body.email,
    senha: req.body.senha
  }
  const resposta = await AdmService.RegisterAdm(adm)

  return res.status(resposta.status).json(resposta.message)
}

module.exports = { RegisterAdm }
