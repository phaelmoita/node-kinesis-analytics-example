'use strict';

const
    express = require('express'),
    router = express.Router(),
    path = require('path'),
    aws_logs = require(path.resolve(__dirname, '../../utils/aws_logs_firehose'))

function getBook(id) {
    return {
        id: id,
        name: `Book - ${id}`
    }
}

function getPage(id, page) {
    return {
        id: id,
        name: `Book - ${id}`,
        page: page,
        page_content: `Hey! That is the content of Book - ${id}`
    }
}

function rateBook(bookRate) {
    return {
        id: bookRate.book_id,
        rate: bookRate.rate
    }
}

router.get('/:id', (req, res) => {

    let book = getBook(req.params.id)

    aws_logs.putRecord(aws_logs.actions.get_book, {
        user_id: req.headers['user_id'],
        platform: req.headers['platform'],
        ad_id: req.headers['ad_id'],
        attrs: book
    })

    return res.status(200).json({
        code: 200,
        result: book
    });
});

router.get('/page/:id/:page', (req, res) => {
    let page = getPage(req.params.id, req.params.page)

    aws_logs.putRecord(aws_logs.actions.get_page, {
        user_id: req.headers['user_id'],
        platform: req.headers['platform'],
        ad_id: req.headers['ad_id'],
        attrs: page
    })

    return res.status(200).json({
        code: 200,
        result: page
    });
});

router.post('/rate', (req, res) => {
    let rate = rateBook(req.body)

    aws_logs.putRecord(aws_logs.actions.rate_book, {
        user_id: req.headers['user_id'],
        platform: req.headers['platform'],
        ad_id: req.headers['ad_id'],
        attrs: rate
    })

    return res.status(200).json({
        code: 200,
        result: rate,
        message: 'Your book was rated!!!'
    });
});

module.exports = router;
