const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Use the should() method of chai module
chai.should();
// Use the HTTP version of chai for the tests
chai.use(chaiHttp);

// FUNCTION to verify if an array has an object with a specific attribute and equals to a value
Array.prototype.hasObjectWithPropertyValue = function (key, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i][key] === value) return true;
    }
    return false;
};

// FUNCTION to verify if an array has an object with a specific attribute and equal or less than a value
Array.prototype.hasObjectWithPropertyValueLessThan = function (key, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i][key] <= value) return true;
    }
    return false;
};

// FUNCTION to verify if an array has an object with a specific attribute and equal or less than a value
Array.prototype.hasObjectWithPropertyValueGreaterThan = function (key, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i][key] >= value) return true;
    }
    return false;
};

// TEST if getting all the beers works
describe("[TEST] GET (beers)", () => {
    it("return all", (done) => {
        chai.request(app)
            .get("/api/beer")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    done();
                }
            });
    });
});

// TEST if getting a beer with a specific id works
describe("[TEST] GET (beer id)", () => {
    it("id: 2365", (done) => {
        chai.request(app)
            .get("/api/beer/2365")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    res.body.hasObjectWithPropertyValue('id', 2365).should.equal(true);
                    done();
                }
            });
    });
});

// TEST if getting all the beers with a specific name works
describe("[TEST] GET (beer name)", () => {
    it("name: Lucifer", (done) => {
        chai.request(app)
            .get("/api/beer/name?name=Bridal Ale 2005")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    res.body.hasObjectWithPropertyValue('name', "Bridal Ale 2005").should.equal(true);
                    done();
                }
            });
    });
});

// TEST if getting all the beers from a specific brewer works
describe("[TEST] GET (beer brewer)", () => {
    it("brewer: Magic Hat", (done) => {
        chai.request(app)
            .get("/api/beer/brewer?brewer=Magic Hat")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    res.body.hasObjectWithPropertyValue('brewer', "Magic Hat").should.equal(true);
                    done();
                }
            });
    });
});

// TEST if getting all the beers in a specific country works
describe("[TEST] GET (beer country)", () => {
    it("country: Belgium", (done) => {
        chai.request(app)
            .get("/api/beer/country?country=Belgium")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    res.body.hasObjectWithPropertyValue('country', "Belgium").should.equal(true);
                    done();
                }
            });
    });
});

// TEST if getting all the beers under a specific alcohol content value works
describe("[TEST] GET (beer under alcohol content)", () => {
    it("alcohol: <= 5", (done) => {
        chai.request(app)
            .get("/api/beer/underAlcoholContent?alcohol=5")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    res.body.hasObjectWithPropertyValueLessThan('alcohol', 5).should.equal(true);
                    done();
                }
            });
    });
});

// TEST if getting all the beers above a specific alcohol content value works
describe("[TEST] GET (beer above alcohol content)", () => {
    it("alcohol: >= 6", (done) => {
        chai.request(app)
            .get("/api/beer/aboveAlcoholContent?alcohol=6")
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    res.body.length.should.not.eq(0);
                    res.body.hasObjectWithPropertyValueGreaterThan('alcohol', 6).should.equal(true);
                    done();
                }
            });
    });
});

// TEST if adding a beer works
describe("[TEST] PUT (add beer)", () => {
    it("name: Leffe, alcohol: 5.15, brewer: Abbaye of Leffe, country: Germany", (done) => {
        chai.request(app)
            .put("/api/beer/addBeer")
            .send({name: 'Leffe', alcohol: 5.15, brewer: 'Abbaye of Leffe', country: 'Germany'})
            .end(((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(201);
                    res.body.should.be.a('Object');
                    res.body.should.have.property('name', "Leffe");
                    res.body.should.have.property('alcohol', 5.15);
                    res.body.should.have.property('brewer', "Abbaye of Leffe");
                    res.body.should.have.property('country', "Germany");
                    done();
                }
            }));
    });
});

// TEST if deleting a beer works
describe("[TEST] DELETE (delete beer)", () => {
    it("id: 154", (done) => {
        chai.request(app)
            .delete("/api/beer/deleteBeer/154")
            .end(((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    done();
                }
            }));
    });
});

// TEST if modifying the name of a beer works
describe('[TEST] POST (setName beer)', () => {
    it('name: Leffe', (done) => {
        chai.request(app)
            .post("/api/beer/setName/187")
            .set('Content-Type', 'application/json')
            .send({name: 'Leffe'})
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    done();
                }
            });
    });
});

// TEST if modifying the alcohol content of a beer works
describe('[TEST] POST (setAlcoholContent beer)', () => {
    it('alcohol: 6.66', (done) => {
        chai.request(app)
            .post("/api/beer/setAlcoholContent/187")
            .set('Content-Type', 'application/json')
            .send({alcohol: '6.66'})
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    done();
                }
            });
    });
});

// TEST if modifying the brewer of a beer works
describe('[TEST] POST (setBrewer beer)', () => {
    it('brewer: Leffe Brewer', (done) => {
        chai.request(app)
            .post("/api/beer/setBrewer/187")
            .set('Content-Type', 'application/json')
            .send({brewer: "Leffe Brewer"})
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    done();
                }
            });
    });
});

// TEST if modifying the country of a beer works
describe('[TEST] POST (setCountry beer)', () => {
    it('country: Belgium', (done) => {
        chai.request(app)
            .post("/api/beer/setCountry/187")
            .set('Content-Type', 'application/json')
            .send({brewer: "Belgium"})
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    res.should.have.status(200);
                    done();
                }
            });
    });
});
