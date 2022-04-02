import { QueryInterface, DataTypes, QueryTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface): Promise<Array<void>> =>
    queryInterface.sequelize.transaction(async (t) => {
      return Promise.all([
        // Example
        // queryInterface.bulkInsert("table_name", [{ id: 3 }], {
        //   transaction: t,
        // }),
      ]);
    }),

  down: (queryInterface: QueryInterface): Promise<Array<void>> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
          // Example
          // queryInterface.bulkDelete("Users", null, { transaction: t }),
        ]);
      });
    }),
};
