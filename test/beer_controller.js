const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should()
chai.use(chaiHttp);

describe("[TEST] GET route /api/beer", () => {
    it("return all beers", (done) => {
        chai.request(app)
            .get("/api/beer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.not.be.eq(0);
                done();
            });
    });
});
