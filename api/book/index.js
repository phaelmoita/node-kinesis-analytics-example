'use strict';

const
    express = require('express'),
    router = express.Router(),
    path = require('path'),
    awsLogs = require(path.resolve(__dirname, '../../utils/aws.logs.firehose'))

function getBook(id) {
    return new Promise( (resolve, reject) => {
        resolve({
            id: id,
            name: `Book - ${id}`
        })
    })
}

function getPage(id, page) {
    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            name: `Book - ${id}`,
            page: page,
            page_content: `Hey! That is the content of Book - ${id}`
        })
    })
}

function rateBook(bookRate) {
    return new Promise((resolve, reject) => {
        resolve({
            id: bookRate.book_id,
            rate: bookRate.rate
        })
    })
}

router.get('/:id', (req, res) => {

    getBook(req.params.id).then(book => {

        awsLogs.putRecord(awsLogs.actions.get_book, {
            user_id: req.headers['user_id'],
            platform: req.headers['platform'],
            ad_id: req.headers['ad_id'],
            attrs: book
        })

        res.status(200).json({
            code: 200,
            result: book
        })

    })
})

router.get('/page/:id/:page', (req, res) => {
    getPage(req.params.id, req.params.page).then(page => {

        awsLogs.putRecord(awsLogs.actions.get_page, {
            user_id: req.headers['user_id'],
            platform: req.headers['platform'],
            ad_id: req.headers['ad_id'],
            attrs: page
        })

        res.status(200).json({
            code: 200,
            result: page
        })

    })
})

router.post('/rate', (req, res) => {
    rateBook(req.body).then(rate => {

        awsLogs.putRecord(awsLogs.actions.rate_book, {
            user_id: req.headers['user_id'],
            platform: req.headers['platform'],
            ad_id: req.headers['ad_id'],
            attrs: rate
        })

        res.status(200).json({
            code: 200,
            result: rate,
            message: 'Your book was rated!!!'
        })

    })
})

module.exports = router;
