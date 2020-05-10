// Update with your config settings.
const path = require('path');

const BASE_PATH = path.join(__dirname);


module.exports = {

  development: {
    client: 'postgresql',
    // connection: 'postgres://norjisai:LiVoUNSGrlEQki7iISLFIM1eFqZgaxOe@drona.db.elephantsql.com:5432/norjisai',
    connection: 'postgres://anvekar@localhost:5430/anvekar',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: 'postgres://norjisai:LiVoUNSGrlEQki7iISLFIM1eFqZgaxOe@drona.db.elephantsql.com:5432/norjisai',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://norjisai:LiVoUNSGrlEQki7iISLFIM1eFqZgaxOe@drona.db.elephantsql.com:5432/norjisai',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

};
