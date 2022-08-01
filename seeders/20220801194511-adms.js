'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('adms', [
    {
      name: 'Pedro',
      email: 'pedro@pedro.com',
      senha: 'senha123',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      name: 'Sofya',
      email: 'Sofya@Sofya.com',
      senha: 'senha123',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  ], {}),
  down: async (queryInterface) => queryInterface.bulkDelete('adms', null, {})
}

/*
module.exports = {
  async up (queryInterface, Sequelize) {

  },

  async down (queryInterface, Sequelize) {

  }
};
*/
