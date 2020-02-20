// // import dotenv from 'dotenv';
// const Knex = require('knex');

// // dotenv.config();

// // const connection = {
// //   host: process.env.DATABASE.HOST,
// //   user: process.env.DATABASE.USER,
// //   password: process.env.DATABASE.PASSWORD,
// //   database: process.env.DATABASE.NAME,
// // };

// // console.log('connecion', connection);

// const knex = Knex({
//   debug: true,
//   client: 'mysql',
//   connection: {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'qweR12#$',
//     database: 'invoice_market',
//   },
//   pool: { min: 2, max: 10 }
// });

// knex('account').select().then(r => {
//   console.log(r);
// }).catch(e => {
//   console.log('error', e);
// });

// exports.knex = knex;
