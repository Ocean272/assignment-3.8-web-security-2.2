module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "ocean272",
    DB: "makan_apa",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};