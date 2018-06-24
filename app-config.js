"use strict";

module.exports = {
    aws : {
        region :  'us-west-2',
        accessKeyId : process.env.NODE_AWS_KEY ? process.env.NODE_AWS_KEY : '',
        secretAccessKey : process.env.NODE_AWS_SECRET ? process.env.NODE_AWS_SECRET : '',
        firehoseStream : process.env.NODE_AWS_STREAM ? process.env.NODE_AWS_STREAM : 'your-tutorial-stream'
    }
};