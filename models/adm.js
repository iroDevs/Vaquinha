function Adm (sequelize, DataTypes) {
  const AdmTable = sequelize.define('Adm', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  })

  return AdmTable
}

module.exports = Adm
