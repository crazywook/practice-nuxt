console.log('temp temp')
import Sequelize from 'sequelize'

const gfPlatform = {
  "host": "dev-platform-fin2b-com.cvg072slrknb.ap-northeast-2.rds.amazonaws.com",
  "port": 3306,
  "database": "gf_dev",
  "user": "fin2b",
  "password": "fin2b1028"
}
const localInvoiceMarket = {
  host: 'localhost',
  user: 'root',
  password: 'qweR12#$',
  database: 'invoice_market',
};

const sequelize = new Sequelize('invoice_market', 'root', 'qweR12#$', {
  dialect: 'mysql'
})

const User = sequelize.define('account', {
  accountSid: {
    type: Sequelize.STRING,
    field: 'accountSid', // Will result in an attribute that is firstName when user facing but first_name in the database
    primaryKey: true,
  },
  userId: {
    type: Sequelize.STRING,
    field: 'userId',
  }
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false,
});

// class Foo extends Sequelize.Model {}
// Foo.init({
//  // instantiating will automatically set the flag to true if not set
//  flag: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
// });

export const temp = 'tester'
export { User }
