// from https://www.netlify.com/docs/functions/#identity-and-functions

// Note that `netlify-lambda` only locally emulates Netlify Functions, while `netlify-identity-widget` interacts with a real Netlify Identity instance. This means that `netlify-lambda` doesn't support Netlify Functions + Netlify Identity integration.

export function handler(event, context, callback) {
  if (context.clientContext) {
    const { identity, user } = context.clientContext
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'auth-hello: ' + Math.round(Math.random() * 10),
        identity,
        user,
      }),
    })
  } else {
    console.log(`
    Note that netlify-lambda only locally emulates Netlify Functions, 
    while netlify-identity-widget interacts with a real Netlify Identity instance. 
    This means that netlify-lambda doesn't support Netlify Functions + Netlify Identity integration.
    `)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg:
          'auth-hello - no authentication detected. Note that netlify-lambda doesnt locally emulate Netlify Identity.',
      }),
    })
  }
}
