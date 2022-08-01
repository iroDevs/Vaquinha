const AdmModel = require('../model/AdmModel')
const validator = require('email-validator')

function validAdm (adm) {
  validName(adm.name)
  validEmail(adm.email)
  validSenha(adm.senha)
}

function validName (name) {
  if (name.length < 3) {
    throw new Error('Invalid name')
  }
  return true
}

function validEmail (email) {
  if (validator.validate(email)) {
    return true
  } else {
    throw new Error('Invalid email')
  }
}

function validSenha (senha) {
  if (senha.length < 5) {
    throw new Error('Invalid password')
  }
  return true
}

async function RegisterAdm (adm) {
  validAdm(adm)
  const id = await AdmModel.RegisterAdmBd(adm)
  return id
}

module.exports = { RegisterAdm }
