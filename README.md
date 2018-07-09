# node-kinesis-analytics-example [![Build Status](https://travis-ci.org/phaelmoita/node-kinesis-analytics-example.svg?branch=master)](https://travis-ci.org/phaelmoita/node-kinesis-analytics-example)
A single example using nodejs and Amazon Kinesis Firehose, you can read the articles about [here](https://www.linkedin.com/pulse/data-lake-nodejs-amazon-kinesis-raphael-oliveira/)

To start server

```
npm start
```

To execute tests
```
npm test
```

To execute tests with kinesis
```
NODE_AWS_KEY=********* NODE_AWS_SECRET=************************** NODE_AWS_STREAM=your-tutorial-stream npm test
```

To make logs
```
bash try_api.sh
```