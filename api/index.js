import { User } from '~/services/temp';

export default async function (req, res, next) {
  // req is the Node.js http request object
  console.log('api index url', req.url)
  console.log('res json', res.json)

  try {
    const users = await User.findAll();
    const data = JSON.stringify(users[0])
    console.log('user0', data);
    res.end(data);
  } catch (e) {
    console.log('api error');
    console.log(e);
    res.end(e)
  }
  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}
