const AdmModel = require('../models/')

function validAdm (adm) {
  validName(adm.name)
  validEmail(adm.email)
  validSenha(adm.senha)
}

function validName (name) {

}

function validEmail (email) {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
  return emailRegex.test(email)
}

function validSenha (senha) {

}

async function RegisterAdm (adm) {
  validAdm()
}
