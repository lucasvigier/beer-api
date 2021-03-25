const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe("[TEST] GET route /api/breweries", () => {
    it("return all breweries", (done) => {
        chai.request(app)
            .get("/api/breweries")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});
