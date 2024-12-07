import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
  'dialectOptions': {
    ssl: {
      require: true, // This will enable SSL connection
      rejectUnauthorized: false // This may need to be set based on your certs
    }
  }

});
