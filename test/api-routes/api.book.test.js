const
    assert = require('assert'),
    request = require('request'),
    server = require('../../server')

describe('Suite api route book', () => {

    after((done) => {
        server.close()
        done()
    })

    it('should return book id 1 when get book', (done) => {
        request({
            method: 'GET',
            url: 'http://localhost:9090/api/book/1',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (err, httpResponse, body) => {
            assert.equal(err, undefined, 'not error ok');
            assert.equal(httpResponse.statusCode, 200, 'response statusCode 200');
            assert.equal(JSON.parse(body).result.id, 1, 'result book id 1');
            done();
        })
    })

    it('should return book page 2 when get page', (done) => {
        request({
            method: 'GET',
            url: 'http://localhost:9090/api/book/page/1/2',
            headers: {
                'Content-Type': 'application/json'
            }
        }, (err, httpResponse, body) => {
            assert.equal(err, undefined, 'not error ok')
            assert.equal(httpResponse.statusCode, 200, 'response statusCode 200')
            assert.equal(JSON.parse(body).result.id, 1, 'result book id 1')
            assert.equal(JSON.parse(body).result.name, 'Book - 1', 'result book name Book - 1')
            assert.equal(JSON.parse(body).result.page, 2, 'result book page 2')
            done();
        })
    })

    it('should return http code 200 when rate', (done) => {
        request({
            method: 'POST',
            url: 'http://localhost:9090/api/book/rate/',
            headers: {
                'Content-Type': 'application/json'
            },
            json: {"book_id": 1, "rate": 5}
        }, (err, httpResponse, body) => {
            assert.equal(err, undefined, 'not error ok')
            assert.equal(httpResponse.statusCode, 200, 'response statusCode 200')
            done();
        })
    })

})