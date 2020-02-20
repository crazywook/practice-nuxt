export default function (req, res, next) {
  // req is the Node.js http request object
  console.log('url', req.url)
  console.log('res json', res.json)
  console.log('res send', res.send)
  const test = { name: 'sung wook' }
  // res.headers['Content-Type'] = 'application/json'
  res.end(JSON.stringify(test));
  next()
  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}
