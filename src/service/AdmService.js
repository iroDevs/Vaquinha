const AdmModel = require('../model/AdmModel')

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
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
  if (emailRegex.test(email)) {
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
  validAdm()
  const id = await AdmModel.RegisterAdmBd(adm)
  return id
}

module.exports = { RegisterAdm }
