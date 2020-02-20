import { User } from '../services/temp.js'
import express from 'express'

const app = express()

app.get('/', async function (req, res, next) {
  console.log('api index url', req.url)
  console.log('res json', res.json)
  // throw new Error('test');
  // res.json({ msg: 'api root' });
  try {
    // const data = test(2)
    const users = await User.findAll();
    const data = JSON.stringify(users[0])
    console.log('user0', data);
    res.json(data);
  } catch (e) {
    console.log('api error');
    console.log(e);
    res.end(e)
  }
})

export default { path: '/api', handler: app }
