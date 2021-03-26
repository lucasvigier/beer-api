curl -i -X POST http://localhost:3000/api/beer/setName/260 -H "Content-Type: application/json" -d "{\"name\":\"Test\"}"
curl -i -X POST http://localhost:3000/api/beer/setAlcoholContent/260 -H "Content-Type: application/json" -d "{\"alcohol\":\"9.00\"}"
curl -i -X POST http://localhost:3000/api/beer/setBrewer/260 -H "Content-Type: application/json" -d "{\"brewer\":\"Brewer Test\"}"
curl -i -X POST http://localhost:3000/api/beer/setCountry/260 -H "Content-Type: application/json" -d "{\"country\":\"Country Test\"}"

clear