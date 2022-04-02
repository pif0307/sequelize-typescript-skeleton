import { QueryInterface, DataTypes, QueryTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface): Promise<Array<void>> =>
    queryInterface.sequelize.transaction(async (t) => {
      return Promise.all([
        // Example
        // queryInterface.addColumn(
        //   "table_name",
        //   "column_name",
        //   {
        //     type: DataTypes.INTEGER.UNSIGNED,
        //     allowNull: false,
        //   },
        //   { transaction: t }
        // ),
      ]);
    }),

  down: (queryInterface: QueryInterface): Promise<Array<void>> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
          // Example
          // queryInterface.removeColumn("table_name", "column_name", { transaction: t }),
        ]);
      });
    }),
};
