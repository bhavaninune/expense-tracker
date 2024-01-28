const Sequelize = require('sequelize');

const sequelize = new Sequelize('BookingManagementApp', 'root', 'bhanu',
	{
		dialect: 'mysql',
		host: 'localhost'
	});

module.exports = sequelize;	