// Outputs "Hello World!" by default
// Looks for "name" in query string params
// or in body of POST (e.g.) {"name": "foo"}
// Query param name overrides post body
exports.handler = function(event, ctx, callback) {
  console.log("event", event)
  console.log("ctx", ctx)
  var name = "World!"
  if(event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name
  }
  else if(event.body) {
    name = JSON.parse(event.body).name || name
  }
  callback(null, {
    "statusCode": 200,
    "body": "Hello "+ name
  });
}
