const { Sequelize } = require('sequelize'); // Assurez-vous que le point-virgule est présent

// database
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // Utiliser la variable d'environnement au lieu de l'URL en dur
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

// authentication and synchronization
sequelize.authenticate()
.then(() => {
  sequelize.sync().catch(() => console.log("Cannot sync the database"));
})
.catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
