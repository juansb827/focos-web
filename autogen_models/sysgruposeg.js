/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysgruposeg', {
		CONSEC: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		NOMB: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DESCRIP: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'sysgruposeg'
	});
};
