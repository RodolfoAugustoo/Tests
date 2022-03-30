#GET
curl localhost:4000

#POST
curl -X POST --data '{"nome": "Rodolfo Augusto"}' localhost:4000
curl -X POST --data '{"id": 378945, "name": "your_name", "city": "your_city", "email": "your@email.com"}' localhost:4000

#DELETE
curl -X DELETE localhost:4000