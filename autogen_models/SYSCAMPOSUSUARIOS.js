/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SYSCAMPOSUSUARIOS', {
		Ccamuser: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cnomtabla: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cformulario: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ctitulo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cvalcam: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Mwhen: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Ndecim: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodcn: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nlong: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctabauxiliar: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdat: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccampo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Caplicacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Mvalid: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Cdescrip: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Lorigen: {
			type: 'BIT',
			allowNull: false
		},
		Coperadorfiltro: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'SYSCAMPOSUSUARIOS'
	});
};
