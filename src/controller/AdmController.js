const AdmService = require('../service/AdmService')

async function GetAllAdms (req, res) {
  const resposta = await AdmService.RegisterAdm(req)

  return res.status(200).json(resposta)
}

module.exports = { GetAllAdms }
