const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe("[TEST] GET all beers", () => {
    it("return all beers", (done) => {
        chai.request(app)
            .get("/api/beer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

describe("[TEST] GET beers by id", () => {
    it("beer with id=1", (done) => {
        chai.request(app)
            .get("/api/beer/id?id=1")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
    it("beer with id=2", (done) => {
        chai.request(app)
            .get("/api/beer/id?id=2")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
    it("beer with id=3", (done) => {
        chai.request(app)
            .get("/api/beer/id?id=3")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
    it("beer with id=999", (done) => {
        chai.request(app)
            .get("/api/beer/id?id=999")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
})

describe("[TEST] GET all by name", () => {
    it("beers with the name", (done) => {
        chai.request(app)
            .get("/api/beer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});
