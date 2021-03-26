BEER_API_URL='http://localhost:3000/api/beer/';
# [GET] tests for the beer API requests
echo "[TEST] GET (getAll beer)"
if [ "$(curl -X GET "$BEER_API_URL/" -o /dev/null -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] GET (searchByName beer)"
if [ "$(curl -X GET "$BEER_API_URL/260" -o /dev/null -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] GET (searchById beer)"
if [ "$(curl -X GET "$BEER_API_URL/name?name=TEST" -o /dev/null -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] GET (searchByBrewer beer)"
if [ "$(curl -X GET "$BEER_API_URL/brewer?brewer=Brewer%20TEST" -o /dev/null -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] GET (searchUnderAlcoholContent beer)"
if [ "$(curl -X GET "$BEER_API_URL/alcohol?alcohol=5.00" -o /dev/null -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] GET (searchOverAlcoholContent beer)"
if [ "$(curl -X GET "$BEER_API_URL/alcohol?alcohol=5.00" -o /dev/null -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo
# [POST] tests for the beer API requests
echo "[TEST] POST (setName beer)"
if [ "$(curl -X POST "$BEER_API_URL/setName/260" -H "Content-Type: application/json" -d "{\"name\":\"TEST\"}" -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] POST (setAlcoholContent beer)"
if [ "$(curl -X POST "$BEER_API_URL/setAlcoholContent/260" -H "Content-Type: application/json" -d "{\"alcohol\":\"6.00\"}" -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] POST (setBrewer beer)"
if [ "$(curl -X POST "$BEER_API_URL/setBrewer/260" -H "Content-Type: application/json" -d "{\"brewer\":\"Brewer TEST\"}" -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo "[TEST] POST (setCountry beer)"
if [ "$(curl -X POST "$BEER_API_URL/setCountry/260" -H "Content-Type: application/json" -d "{\"country\":\"Country TEST\"}" -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo
# [PUT] tests for the beer API requests
echo "[TEST] PUT (addBeer beer)"
if [ "$(curl -X PUT "$BEER_API_URL/addBeer" -H "Content-Type: application/json" -d '{\"name\":\"TEST\", \"alcohol\":\"6.15\, \"brewer\":\"Brewer%20TEST\"}' -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
echo
# [DELETE] tests for the beer API requests
echo "[TEST] DELETE (deleteBeer beer)"
if [ "$(curl -X DELETE "$BEER_API_URL/deleteBeer/5000" -w '%{http_code}\n' -s)" == "200" ]; then echo "[SUCCESS] http_code=200"; fi
