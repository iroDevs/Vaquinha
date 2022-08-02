async function Erro (err, req, res, next) {
  console.log('erro: ', err)
  const msg = err.message
  const statusErro = err.status

  if (statusErro === 500) {
    return res.status(500).json({ erro: 'Internal Erro' })
  }
  return res.status(statusErro).json({ erro: msg })
}

module.exports = { Erro }
