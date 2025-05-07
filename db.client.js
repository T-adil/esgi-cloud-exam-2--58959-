const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

sequelize.authenticate()
.then(() => {
  sequelize.sync().catch(() => console.log("Cannot sync the database"));
})
.catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
