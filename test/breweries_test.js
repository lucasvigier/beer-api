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

// TEST if getting all the breweries works
describe("[TEST] GET (breweries)", () => {
    it("return all", (done) => {
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

// TEST if getting the breweries with a specific id works
describe("[TEST] GET (id)", () => {
    it("id: 215", (done) => {
        chai.request(app)
            .get("/api/breweries/215")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                res.body.hasObjectWithPropertyValue('id', 215).should.equal(true);
                done();
            });
    });
});

// TEST if getting the breweries with a specific name works
describe("[TEST] GET (name)", () => {
    it("name: Alameda Brewhouse", (done) => {
        chai.request(app)
            .get("/api/breweries/name?breweries=Alameda Brewhouse")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                res.body.hasObjectWithPropertyValue('breweries', "Alameda Brewhouse").should.equal(true);
                done();
            });
    });
});

// TEST if getting all the breweries of a specific country works
describe("[TEST] GET (country)", () => {
    it("country: Belgium", (done) => {
        chai.request(app)
            .get("/api/breweries/country?country=Belgium")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Array');
                res.body.length.should.not.be.eq(0);
                res.body.hasObjectWithPropertyValue('country', "Belgium").should.equal(true);
                done();
            });
    });
});
