let expect = require('chai').expect

const suitsAry = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

    describe ('suits array', () => {
        it('Should have a length of 4', () => {
            expect(suitsAry).to.have.length(4);
        })
        it('Should throw error in lenght is not euqal to 4', () => {
            expect(() => {
                suitsAry != 4
            }).to.throw(Error);
        })
    })