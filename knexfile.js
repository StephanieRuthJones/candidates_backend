module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/candidates_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};