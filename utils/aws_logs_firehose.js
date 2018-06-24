const
    AWS         = require('aws-sdk'),
    firehoser   = require('firehoser'),
    path        = require('path'),
    moment      = require('moment'),
    aws_config  = require(path.resolve(__dirname, "../app-config")).aws;


AWS.config.update({
    accessKeyId: aws_config.accessKeyId,
    secretAccessKey: aws_config.secretAccessKey,
    region: aws_config.region
});


const actions = {
    get_book            : 1001,
    get_page            : 1002,
    rate_book           : 1003
};

function putRecord(action, log) {
    log.action      = action
    log.action_time = moment().format('YYYY-MM-DD HH:mm:ss')

    if(process.env.NODE_ENV === 'test' && aws_config.accessKeyId === '') {
        return
    }

    let firehose = new firehoser.DeliveryStream(aws_config.firehoseStream)
    firehose.putRecord(JSON.stringify(log)).then((r)=>{
    }, (err) => {
        console.log(err)
    })
}

module.exports = {
    actions : actions,
    putRecord : putRecord
}