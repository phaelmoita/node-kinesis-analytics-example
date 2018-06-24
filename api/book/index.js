'use strict';

const
    express = require('express'),
    router = express.Router()

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
    return res.status(200).json({
        code: 200,
        result: getBook(req.params.id)
    });
});

router.get('/page/:id/:page', (req, res) => {
    return res.status(200).json({
        code: 200,
        result: getPage(req.params.id, req.params.page)
    });
});

router.post('/rate', (req, res) => {
    return res.status(200).json({
        code: 200,
        message: 'Your book was rated!!!'
    });
});

module.exports = router;
