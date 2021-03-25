const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

// Function to verify if an array has an object with a specific attribute and equals to a value
Array.prototype.hasObjectWithPropertyValue = function (key, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i][key] === value) return true;
    }
    return false;
};

// TEST if getting all beers works
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
    it("beer with id=2365", (done) => {
        chai.request(app)
            .get("/api/beer/2365")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                res.body.hasObjectWithPropertyValue('id', 2365).should.equal(true);
                done();
            });
    });
});

describe("[TEST] GET beers by name", () => {
    it("beers with the name Lucifer", (done) => {
        chai.request(app)
            .get("/api/beer/name?name=Lucifer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

describe("[TEST] GET beers by brewer", () => {
    it("beers of the brewer", (done) => {
        chai.request(app)
            .get("/api/beer/brewer?brewer=Magic Hat")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});

describe("[TEST] GET beers by country", () => {
    it("beers of USA", (done) => {
        chai.request(app)
            .get("/api/beer/country?country=United States")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                done();
            });
    });
});
