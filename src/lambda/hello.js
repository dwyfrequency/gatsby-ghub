// from https://github.com/netlify/create-react-app-lambda/blob/master/src/lambda/hello.js

// show object spread works, i.e. babel works
const obj = {
  foo: 'bar',
}
export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'Hello, World! ' + Math.round(Math.random() * 10),
      ...obj,
    }),
  })
}
