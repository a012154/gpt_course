import { Sequelize } from 'sequelize-typescript'


export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },    
    logging: true,
    define: {
        charset: 'utf8mb4_bin',
    }
})

sequelize.addModels([
    
])

sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then(() => {
    sequelize.sync({ force: false }).then(() => {
        console.log('Database & tables created')
    })
})