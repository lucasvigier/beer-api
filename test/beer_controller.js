const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

// FUNCTION to verify if an array has an object with a specific attribute and equals to a value
Array.prototype.hasObjectWithPropertyValue = function (key, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i][key] === value) return true;
    }
    return false;
};

// TEST if getting all the beers works
describe("[TEST] GET (beers)", () => {
    it("return all", (done) => {
        chai.request(app)
            .get("/api/beer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.eq(0);
                done();
            });
    });
});

// TEST if getting a beer with a specific id works
describe("[TEST] GET (id)", () => {
    it("id: 2365", (done) => {
        chai.request(app)
            .get("/api/beer/2365")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.eq(0);
                res.body.hasObjectWithPropertyValue('id', 2365).should.equal(true);
                done();
            });
    });
});

// TEST if getting all the beers with a specific name works
describe("[TEST] GET (name)", () => {
    it("name: Lucifer", (done) => {
        chai.request(app)
            .get("/api/beer/name?name=Lucifer")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.eq(0);
                res.body.hasObjectWithPropertyValue('name', "Lucifer").should.equal(true);
                done();
            });
    });
});

// TEST if getting all the beers from a specific brewer works
describe("[TEST] GET (brewer)", () => {
    it("brewer: Magic Hat", (done) => {
        chai.request(app)
            .get("/api/beer/brewer?brewer=Magic Hat")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.eq(0);
                res.body.hasObjectWithPropertyValue('brewer', "Magic Hat").should.equal(true);
                done();
            });
    });
});

// TEST if getting all the beers in a specific country works
describe("[TEST] GET (country)", () => {
    it("country: Belgium", (done) => {
        chai.request(app)
            .get("/api/beer/country?country=Belgium")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.eq(0);
                res.body.hasObjectWithPropertyValue('country', "Belgium").should.equal(true);
                done();
            });
    });
});
