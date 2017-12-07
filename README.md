# aws-lambda-proxy-using-sam-local
Sample project using AWS SAM to setup an API Gateway proxied Lambda Function.

## Why
I didn't see any good examples of API Gateway proxied Lambda Functions using SAM...

## Run via SAM Local
First you need [SAM Local](https://github.com/awslabs/aws-sam-local):

`npm install -g aws-sam-local`

To run via SAM local:

`sam local start-api`

Make some requests:

`curl http://localhost:3000` => `Hello World!`

`curl http://localhost:3000/?name=Rowen` => `Hello Rowen`

`curl -d '{"name":"Raili"}' -H "Content-Type: application/json" -X POST http://localhost:3000` => `Hello Raili`

## Deploy to AWS
Run the deploy script...

`./deploy.sh YOUR_S3_BUCKET YOUR_STACK_NAME`

This will output the API Gateway endpoint to which you can make requests like above.

Check out deploy.sh to see what it is doing.

## Feedback Welcome
Please let me know if you have feedback or improvements.
