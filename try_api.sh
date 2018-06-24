#Get Book
curl -X GET -H "Content-Type: application/json" http://localhost:9090/api/book/1

#Get Page
curl -X GET -H "Content-Type: application/json" http://localhost:9090/api/book/page/1/2

#Post Rate
curl -X POST -H "Content-Type: application/json" -d '{"book_id":"1", "rate": 5}' http://localhost:9090/api/book/rate/
