# FizzBuzz Serverless Function

I implemented the FizzBuzz exercise using an AWS Lambda function that uses an AWS API Gateway to expose it publicly. 

The function can be accessed using the following end point: 

```
POST https://ke6szmxfgd.execute-api.us-east-2.amazonaws.com/dev/fizzbuzz
BODY { "m": 1, "n": 35}
```

I leveraged [The Serverless Framework](https://github.com/serverless/serverless) to implement it programatically without having to go through the AWS console. 

You can also test it out using the following curl command `curl -X POST "https://ke6szmxfgd.execute-api.us-east-2.amazonaws.com/dev/fizzbuzz" -H "accept: application/json" -H "Content-Type: application/json" -d '{"m":1,"n":35}'`